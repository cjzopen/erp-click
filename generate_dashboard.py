import sys
import os
import glob
import json
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from dotenv import load_dotenv

# Reconfigure stdout to use UTF-8
try:
    sys.stdout.reconfigure(encoding='utf-8')
except AttributeError:
    pass # for older Python versions if any


# Try importing google analytics client
try:
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import (
        RunReportRequest,
        Dimension,
        Metric,
        DateRange,
        FilterExpression,
        Filter,
    )
    HAS_GA_CLIENT = True
except ImportError:
    HAS_GA_CLIENT = False

# Base directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load environment variables
load_dotenv(dotenv_path=os.path.join(BASE_DIR, ".env"))

def get_ga4_data():
    property_id = os.getenv("GA4_PROPERTY_ID")
    test_data_path = os.path.join(BASE_DIR, "test_data.json")
    
    # Try fetching from GA4
    if HAS_GA_CLIENT and property_id:
        from google.oauth2 import service_account
        
        credentials = None
        service_account_json = os.getenv("GA4_SERVICE_ACCOUNT_JSON")
        
        if service_account_json:
            try:
                info = json.loads(service_account_json)
                credentials = service_account.Credentials.from_service_account_info(info)
                print("Using service account credentials from environment variable.")
            except Exception as e:
                print(f"Failed to load credentials from environment variable: {e}")
                
        if not credentials:
            credentials_path = os.path.join(BASE_DIR, "service-account.json")
            if os.path.exists(credentials_path):
                try:
                    credentials = service_account.Credentials.from_service_account_file(credentials_path)
                    print("Using service account credentials from local service-account.json file.")
                except Exception as e:
                    print(f"Failed to load credentials from file: {e}")
                    
        if credentials:
            print(f"Connecting to GA4 Property ID: {property_id}...")
            try:
                client = BetaAnalyticsDataClient(credentials=credentials)
                request = RunReportRequest(
                    property=f"properties/{property_id}",
                    dimensions=[
                        Dimension(name="pagePath"),
                        Dimension(name="customEvent:click_text"),
                        Dimension(name="customEvent:click_url"),
                    ],
                    metrics=[Metric(name="eventCount")],
                    date_ranges=[DateRange(start_date="2026-06-05", end_date="today")],
                    dimension_filter=FilterExpression(
                        filter=Filter(
                            field_name="eventName",
                            string_filter=Filter.StringFilter(value="content_click")
                        )
                    ),
                    limit=1000
                )
                response = client.run_report(request)
                data = []
                for row in response.rows:
                    data.append({
                        "pagePath": row.dimension_values[0].value,
                        "click_text": row.dimension_values[1].value,
                        "click_url": row.dimension_values[2].value,
                        "count": int(row.metric_values[0].value)
                    })
                print(f"Successfully fetched {len(data)} records from GA4.")
                
                # Save cache/cache file
                os.makedirs(os.path.dirname(test_data_path), exist_ok=True)
                with open(test_data_path, "w", encoding="utf-8") as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                print(f"Saved local cache to {test_data_path}.")
                return data
            except Exception as e:
                print(f"GA4 fetch failed: {e}. Falling back to test_data.json.")
    else:
        print("GA4 property or credentials not configured or missing library. Falling back to test_data.json.")
        
    # Fallback to test_data.json
    test_data_path = os.path.join(BASE_DIR, "test_data.json")
    if os.path.exists(test_data_path):
        with open(test_data_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        print(f"Successfully loaded {len(data)} records from test_data.json.")
        return data
    else:
        print("Error: test_data.json not found!")
        return []

def is_interactive(tag):
    if tag.get('data-gtm-text'):
        return True
    return False

def clean_page(soup):
    # Remove added attributes
    for el in soup.find_all(attrs={"data-clicks": True}):
        del el["data-clicks"]
    for el in soup.find_all(attrs={"data-redundant": True}):
        del el["data-redundant"]
        
    # Remove classes
    ga_classes = ["ga-clicked-element", "ga-hot", "ga-med", "ga-cold", "ga-flash-active"]
    for el in soup.find_all(class_=True):
        classes = el.get("class", [])
        if isinstance(classes, list):
            new_classes = [c for c in classes if c not in ga_classes]
            if new_classes:
                el["class"] = new_classes
            else:
                del el["class"]
        else:
            # Sometime class is a string
            new_classes = [c for c in classes.split() if c not in ga_classes]
            if new_classes:
                el["class"] = " ".join(new_classes)
            else:
                del el["class"]
                
    # Remove injected visualizer files
    for link in soup.find_all("link", href=True):
        if "visualizer.css" in link["href"]:
            link.decompose()
    for script in soup.find_all("script", src=True):
        if "visualizer.js" in script["src"]:
            script.decompose()

def compute_priority2_score(el, click_text, click_url):
    score = 0
    
    # 1. Text Matching (Up to 60 points)
    el_text = ""
    if el.get('data-gtm-text'):
        el_text = el['data-gtm-text']
    else:
        el_text = el.get_text(strip=True)
        if not el_text:
            el_text = el.get('placeholder', '') or el.get('value', '') or el.get('alt', '') or el.get('title', '') or el.get('name', '')
            
    ct_norm = str(click_text).strip().lower()
    et_norm = str(el_text).strip().lower()
    
    if ct_norm and et_norm:
        if ct_norm == et_norm:
            score += 60
        elif ct_norm in et_norm or et_norm in ct_norm:
            score += 30
            
    # 2. URL Matching (Up to 40 points)
    el_url = el.get('href', '') or el.get('src', '') or el.get('action', '')
    
    if click_url and el_url:
        cu_norm = str(click_url).strip().lower()
        eu_norm = str(el_url).strip().lower()
        
        try:
            cu_path = urlparse(cu_norm).path.rstrip('/')
            eu_path = urlparse(eu_norm).path.rstrip('/')
            if cu_path and eu_path:
                if cu_path == eu_path:
                    score += 40
                elif cu_path in eu_path or eu_path in cu_path:
                    score += 20
        except Exception:
            if cu_norm == eu_norm:
                score += 40
                
    if el.name in ['a', 'button']:
        score += 5
        
    return score

def get_element_selector(el):
    tag = el.name
    el_id = el.get('id')
    if el_id:
        return f"{tag}#{el_id}"
    classes = el.get('class')
    if classes:
        if isinstance(classes, list):
            return f"{tag}.{'.'.join(classes[:2])}"
        return f"{tag}.{classes.split()[0]}"
    return tag

def get_element_label(el):
    if el.get('data-gtm-text'):
        return el['data-gtm-text']
    text = el.get_text(strip=True)
    if text:
        return text if len(text) <= 30 else text[:27] + "..."
    return el.get('placeholder') or el.get('value') or el.get('alt') or el.get('name') or "Unnamed Element"

def main():
    pages_dir = os.path.join(BASE_DIR, "pages")
    html_files = glob.glob(os.path.join(pages_dir, "*.html"))
    
    if not html_files:
        print("Error: No HTML files found in pages/ directory.")
        return
        
    # Map local files to their canonical path paths
    path_to_file = {}
    file_metadata = {}
    
    for fp in html_files:
        filename = os.path.basename(fp)
        with open(fp, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f.read(), "html.parser")
            
        # Extract title
        title_tag = soup.find("title")
        title = title_tag.get_text(strip=True) if title_tag else filename
        
        # Extract canonical URL path
        canonical = soup.find("link", rel="canonical")
        canonical_href = canonical.get("href", "") if canonical else ""
        
        if not canonical_href:
            # Fallback to og:url
            og_url = soup.find("meta", property="og:url")
            canonical_href = og_url.get("content", "") if og_url else ""
            
        if canonical_href:
            path = urlparse(canonical_href).path
            if not path:
                path = "/"
        else:
            # Fallback based on filename mapping
            if "home" in filename:
                path = "/"
            elif "erp-all" in filename:
                path = "/ERP/erp-all.html"
            elif "cosmos" in filename:
                path = "/software/CM/CM"
            elif "t100" in filename:
                path = "/software/T100/"
            elif "workflow" in filename:
                path = "/software/WF/WF"
            elif "smarterp" in filename:
                path = "/dsc/solution/WB002839/AISM"
            else:
                path = f"/pages/{filename}"
                
        # Normalize path: ensure trailing slash matches test data
        # Let's clean up any double slashes
        path = "/" + path.strip("/")
        if path == "/":
            pass
        elif "t100" in path.lower(): # Match specific patterns
            path = path + "/"
            
        path_to_file[path] = fp
        file_metadata[fp] = {
            "title": title,
            "path": path,
            "filename": filename
        }
        print(f"Mapped Page: {filename} -> Canonical Path: {path}")

    # Fetch GA4 Data
    ga_data = get_ga4_data()
    
    # Group click records by path
    grouped_clicks = {}
    for row in ga_data:
        path = row["pagePath"]
        # Normalize path
        norm_path = "/" + path.strip("/")
        if norm_path != "/" and "t100" in norm_path.lower():
            norm_path = norm_path + "/"
            
        if norm_path not in grouped_clicks:
            grouped_clicks[norm_path] = []
        grouped_clicks[norm_path].append(row)

    # Process each page
    pages_statistics = []
    
    for path, fp in path_to_file.items():
        meta = file_metadata[fp]
        print(f"\nProcessing {meta['filename']} (Path: {path})...")
        
        with open(fp, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f.read(), "html.parser")
            
        # Clean previous visualizer scripts/tags
        clean_page(soup)
        
        # Identify all interactive elements (excluding those inside #navigationBar, #mmenu, or <header>)
        interactive_elements = []
        for tag in soup.find_all(True):
            if is_interactive(tag):
                # Check if it is inside navigation or header elements
                inside_nav = False
                for parent in tag.parents:
                    parent_id = parent.get('id')
                    if parent_id in ['navigationBar', 'mmenu'] or parent.name == 'header':
                        inside_nav = True
                        break
                if not inside_nav:
                    interactive_elements.append(tag)
                
        print(f"Found {len(interactive_elements)} interactive elements on page.")
        
        # Get click events for this path
        clicks_for_page = grouped_clicks.get(path, [])
        print(f"Found {len(clicks_for_page)} GA4 click records for path.")
        
        matched_count = 0
        total_clicks_on_page = 0
        
        # Map GA4 clicks to elements
        for record in clicks_for_page:
            click_text = record["click_text"]
            click_url = record["click_url"]
            count = record["count"]
            total_clicks_on_page += count
            
            matched_el = None
            
            # Priority 1: Exact data-gtm-text
            p1_candidates = []
            for el in interactive_elements:
                gtm_text = el.get('data-gtm-text')
                if gtm_text and gtm_text.strip() == click_text.strip():
                    p1_candidates.append(el)
                    
            if p1_candidates:
                if len(p1_candidates) > 1 and click_url:
                    best_p1 = None
                    best_p1_score = -1
                    for p1 in p1_candidates:
                        url_score = 0
                        el_url = p1.get('href', '')
                        if el_url:
                            try:
                                cu_path = urlparse(click_url).path.rstrip('/')
                                eu_path = urlparse(el_url).path.rstrip('/')
                                if cu_path == eu_path:
                                    url_score = 10
                            except:
                                pass
                        if url_score > best_p1_score:
                            best_p1_score = url_score
                            best_p1 = p1
                    matched_el = best_p1 if best_p1 else p1_candidates[0]
                else:
                    matched_el = p1_candidates[0]
                    
            # Priority 2: Text & URL scoring
            if not matched_el:
                best_score = 0
                best_candidate = None
                for el in interactive_elements:
                    score = compute_priority2_score(el, click_text, click_url)
                    if score > best_score:
                        best_score = score
                        best_candidate = el
                if best_score >= 40:
                    matched_el = best_candidate
                    
            if matched_el:
                current_clicks = int(matched_el.get('data-clicks', '0'))
                matched_el['data-clicks'] = str(current_clicks + count)
                matched_count += 1
            else:
                print(f"  Unmatched GA4 record: Text='{click_text}', URL='{click_url}', Clicks={count}")
                
        # Tag redundant elements
        redundant_count = 0
        key_elements_list = []
        redundant_elements_list = []
        
        for el in interactive_elements:
            selector = get_element_selector(el)
            label = get_element_label(el)
            
            if el.has_attr('data-clicks'):
                clicks = int(el['data-clicks'])
                key_elements_list.append({
                    "text": label,
                    "tag": el.name,
                    "clicks": clicks,
                    "selector": selector
                })
            else:
                el['data-redundant'] = 'true'
                redundant_count += 1
                redundant_elements_list.append({
                    "text": label,
                    "tag": el.name,
                    "selector": selector
                })
                
        # Sort key elements by clicks descending
        key_elements_list.sort(key=lambda x: x["clicks"], reverse=True)
        
        # Inject client stylesheet & JS library
        # Visualizer stylesheet in <head>
        head = soup.find("head")
        if head:
            css_tag = soup.new_tag("link", rel="stylesheet", href="../assets/visualizer.css")
            head.append(css_tag)
            
        # Visualizer script in <body>
        body = soup.find("body")
        if body:
            js_tag = soup.new_tag("script", src="../assets/visualizer.js")
            body.append(js_tag)
            
        # Write updated HTML back to file
        output_fp = fp
        with open(output_fp, "w", encoding="utf-8") as f:
            f.write(str(soup))
            
        print(f"Processed {meta['filename']}:")
        print(f"  Total clicks: {total_clicks_on_page}")
        print(f"  Matched elements (Key): {len(key_elements_list)}")
        print(f"  Redundant elements (0 clicks): {redundant_count}")
        
        pages_statistics.append({
            "filename": meta['filename'],
            "title": meta['title'],
            "path": path,
            "totalClicks": total_clicks_on_page,
            "keyCount": len(key_elements_list),
            "redundantCount": redundant_count,
            "keyElements": key_elements_list,
            "redundantElements": redundant_elements_list
        })
        
    # Compile site-wide statistics
    site_total_clicks = sum(p["totalClicks"] for p in pages_statistics)
    site_key_count = sum(p["keyCount"] for p in pages_statistics)
    site_redundant_count = sum(p["redundantCount"] for p in pages_statistics)
    
    # Collect top site-wide clicked elements
    site_all_key_elements = []
    for p in pages_statistics:
        for k in p["keyElements"]:
            site_all_key_elements.append({
                "text": k["text"],
                "tag": k["tag"],
                "clicks": k["clicks"],
                "page": p["title"],
                "path": p["path"],
                "filename": p["filename"]
            })
    site_all_key_elements.sort(key=lambda x: x["clicks"], reverse=True)
    top_clicked_elements = site_all_key_elements[:15]
    
    dashboard_data = {
        "siteStats": {
            "totalClicks": site_total_clicks,
            "keyElementsCount": site_key_count,
            "redundantElementsCount": site_redundant_count,
            "totalPages": len(pages_statistics)
        },
        "topElements": top_clicked_elements,
        "pages": pages_statistics
    }
    
    # Write assets/dashboard_data.js
    dest_js = os.path.join(BASE_DIR, "assets", "dashboard_data.js")
    os.makedirs(os.path.dirname(dest_js), exist_ok=True)
    with open(dest_js, "w", encoding="utf-8") as f:
        f.write(f"window.dashboardData = {json.dumps(dashboard_data, indent=2, ensure_ascii=False)};")
        
    print(f"\nSuccessfully generated {dest_js}!")
    print(f"Site-wide Click Summary: {site_total_clicks} clicks across {len(pages_statistics)} pages.")
    print(f"Key elements: {site_key_count}, Redundant elements: {site_redundant_count}")

if __name__ == "__main__":
    main()
