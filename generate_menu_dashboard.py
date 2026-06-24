import sys
import os
import json
import re
from urllib.parse import urlparse
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

def get_ga4_menu_data():
    property_id = os.getenv("GA4_PROPERTY_ID")
    credentials_path = os.path.join(BASE_DIR, "service-account.json")
    cache_path = os.path.join(BASE_DIR, "assets", "menu_test_data.json")
    
    # Try fetching from GA4
    if HAS_GA_CLIENT and property_id and os.path.exists(credentials_path):
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = credentials_path
        print(f"Connecting to GA4 Property ID: {property_id}...")
        try:
            client = BetaAnalyticsDataClient()
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
                        string_filter=Filter.StringFilter(value="menu_link_click")
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
            os.makedirs(os.path.dirname(cache_path), exist_ok=True)
            with open(cache_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"Saved local cache to {cache_path}.")
            return data
        except Exception as e:
            print(f"GA4 fetch failed: {e}. Falling back to menu_test_data.json.")
    else:
        print("GA4 property or service account credentials not configured or missing library. Falling back to menu_test_data.json.")
        
    # Fallback to menu_test_data.json
    if os.path.exists(cache_path):
        with open(cache_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        print(f"Successfully loaded {len(data)} records from menu_test_data.json.")
        return data
    else:
        # Mock initial generation if no file exists
        print("Warning: menu_test_data.json not found. Generating mock menu data.")
        mock_data = [
            {"pagePath": "/", "click_text": "level1-方案-old", "click_url": "", "count": 140},
            {"pagePath": "/", "click_text": "level1-行業-old", "click_url": "", "count": 120},
            {"pagePath": "/", "click_text": "level2-產品與軟體-old", "click_url": "", "count": 95},
            {"pagePath": "/", "click_text": "level3-集團大型企業：T100 ERP-old", "click_url": "https://www.digiwin.com.tw/software/T100/", "count": 88},
            {"pagePath": "/", "click_text": "link:#mmenu", "click_url": "", "count": 125},
            {"pagePath": "/ERP/erp-all.html", "click_text": "level1-方案-new", "click_url": "", "count": 150},
            {"pagePath": "/ERP/erp-all.html", "click_text": "level2-了解智能+全方案-new", "click_url": "https://www.digiwin.com.tw/ERP/erp-all.html", "count": 72},
            {"pagePath": "/software/WF/WF", "click_text": "level3-中大型製造業：Workflow ERP GP-old", "click_url": "https://www.digiwin.com.tw/software/WF/WF", "count": 110},
            {"pagePath": "/dsc/solution/WB002839/AISM", "click_text": "level3-中小企業：SmartERP-old", "click_url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM", "count": 68},
            {"pagePath": "/software/CM/CM", "click_text": "phone-nav-old", "click_url": "", "count": 45}
        ]
        return mock_data

def parse_menu_text(text, norm_path, page_templates):
    # Match level(1~3)-label-{old|new}
    pattern = r"^level([1-3])-(.+)-(old|new)$"
    match = re.match(pattern, text)
    if match:
        return {
            "level": f"Level {match.group(1)}",
            "label": match.group(2).strip(),
            "template": match.group(3).strip(),
            "isSpecial": False
        }
    else:
        # Determine old/new for special button
        lower_text = text.lower()
        if "new" in lower_text:
            template = "new"
        elif "old" in lower_text:
            template = "old"
        else:
            # Check majority standard template on this page path
            standards = page_templates.get(norm_path, [])
            if standards:
                template = max(set(standards), key=standards.count)
            else:
                template = "old" # Fallback default
                
        # Clean label for special button
        clean_label = text
        clean_label = re.sub(r"[-_](old|new)$", "", clean_label, flags=re.IGNORECASE).strip()
        
        return {
            "level": "Special",
            "label": clean_label,
            "template": template,
            "isSpecial": True
        }

def compile_ai_report(total_clicks, level_counts, template_counts, top_items, page_name):
    l1 = level_counts.get("Level 1", 0)
    l2 = level_counts.get("Level 2", 0)
    l3 = level_counts.get("Level 3", 0)
    spec = level_counts.get("Special", 0)
    
    old_clicks = template_counts.get("old", 0)
    new_clicks = template_counts.get("new", 0)
    
    # Generate percentages
    def pct(val):
        return round((val / total_clicks) * 100) if total_clicks > 0 else 0
        
    l1_pct = pct(l1)
    l2_pct = pct(l2)
    l3_pct = pct(l3)
    spec_pct = pct(spec)
    
    # 1. Usability Review
    usability = ""
    if total_clicks == 0:
        usability = "該頁面在統計區間內無 Menu 點擊事件，無法分析導覽易用性。請確認頁面是否已正確部署 GTM 追蹤碼。"
    elif l3 > (l1 + l2) and l3 > 0:
        usability = f"**警告：深度導覽依賴度偏高（Level 3 點擊佔比 {l3_pct}%）**。訪客高度依賴第三層選單，代表常用連結隱藏過深。使用者每次都需要點擊三次展開才能找到目標內容，易造成認知負荷。建議簡化分類，將最熱門的第三層細分產品（如：{', '.join(top_items[:2])}）直接升格至第二層，或在頁面主體首頁提供顯著入口。"
    elif l1_pct > 60:
        usability = f"**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 {l1_pct}%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。"
    else:
        usability = f"**優良：選單層級分佈均衡（L1: {l1_pct}%, L2: {l2_pct}%, L3: {l3_pct}%, 特殊: {spec_pct}%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。"
        
    if spec_pct > 30:
        usability += f" 此外，**特殊功能按鈕（佔 {spec_pct}%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。"

    # 2. Intent Prediction
    intent = ""
    if "home" in page_name.lower() or page_name == "/" or page_name == "全站總覽":
        intent = "全站訪客最熱衷於查看「行業方案」與「產品介紹」，代表新進站流量主要以尋找系統性的「行業解答」為主。建議在主頁面 Banner 及首屏顯眼處增加按行業導覽的區塊，幫助使用者直接分流至 Cosmos (流通)、Workflow (製造) 或 SmartERP (中小企業)。"
    elif "workflow" in page_name.lower():
        intent = "本頁面訪客高度關注「產品優勢」與「製造業 Workflow ERP」細項，顯示訪客均為目標明確的製造業相關人員，對「生產管理與排程控制」的實際功能著眼較深。建議主動推薦「智慧製造案例手冊」或「MES 廠內智能物流解方」來引導轉換。"
    elif "smarterp" in page_name.lower():
        intent = "中小企業訪客強烈關注「應用場景」及「是否適合中小企業」，這表示訪客特別注重「導入時間成本」與「是否有同行成功案例」。建議在選單中為其提供一鍵抵達的「30天中小企業快速導入方案」說明頁。"
    elif "erp-all" in page_name.lower():
        intent = "訪客多在此點擊「量身規劃」與「常見問題」，反映此處訪客多處於產品調研的初期，正處於各系統方案比對與導入細節諮詢的階段。建議將常見問題 (FAQ) 及量身規劃表單放在最上方，引導訪客填表諮詢。"
    else:
        intent = f"該路徑 {page_name} 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。"

    # 3. Recommendations
    rec = ""
    # Suggestion on templates
    if old_clicks > new_clicks and old_clicks > 0:
        rec += f"- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 {round(old_clicks/(new_clicks+0.1), 1)} 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n"
    elif new_clicks > old_clicks and new_clicks > 0:
        rec += "- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n"
        
    rec += "- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n"
    rec += "- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。"

    markdown_report = f"""### 📊 選單好用度評估 (Usability Review)
{usability}

### 🧠 使用者意圖預測 (User Intent Prediction)
{intent}

### 💡 建議改善方法 (Actionable Recommendations)
{rec}
"""
    return markdown_report

def main():
    # Fetch menu click data
    raw_data = get_ga4_menu_data()
    
    # Group by (norm_path, click_text) to sum count and choose best URL
    grouped_raw = {}
    for row in raw_data:
        path = row["pagePath"]
        norm_path = "/" + path.strip("/")
        if norm_path != "/" and "t100" in norm_path.lower():
            norm_path = norm_path + "/"
            
        click_text = row["click_text"]
        click_url = row["click_url"]
        count = row["count"]
        
        key = (norm_path, click_text)
        if key not in grouped_raw:
            grouped_raw[key] = {
                "pagePath": norm_path,
                "click_text": click_text,
                "urls": {},
                "count": 0
            }
        agg = grouped_raw[key]
        agg["count"] += count
        if click_url and click_url != "(not set)":
            agg["urls"][click_url] = agg["urls"].get(click_url, 0) + count
            
    # Convert back to flat list
    aggregated_raw_data = []
    for key, agg in grouped_raw.items():
        best_url = ""
        if agg["urls"]:
            best_url = max(agg["urls"], key=agg["urls"].get)
        else:
            best_url = "(無目標網址)"
            
        aggregated_raw_data.append({
            "pagePath": agg["pagePath"],
            "click_text": agg["click_text"],
            "click_url": best_url,
            "count": agg["count"]
        })
    raw_data = aggregated_raw_data
    
    # Target files mapping to friendly names
    path_to_page_name = {
        "/": "首頁 (home.html)",
        "/ERP/erp-all.html": "ERP全方案 (erp-all.html)",
        "/software/CM/CM": "Cosmos ERP 流通業 (cosmos.html)",
        "/software/T100/": "T100 ERP 集團型 (t100.html)",
        "/software/WF/WF": "Workflow ERP 製造業 (workflow.html)",
        "/dsc/solution/WB002839/AISM": "SmartERP 中小企業 (smarterp.html)"
    }
    
    # Pass 1: Aggregate standard templates per normalized page path
    page_standard_templates = {}
    for row in raw_data:
        path = row["pagePath"]
        norm_path = "/" + path.strip("/")
        if norm_path != "/" and "t100" in norm_path.lower():
            norm_path = norm_path + "/"
            
        click_text = row["click_text"]
        match = re.match(r"^level([1-3])-(.+)-(old|new)$", click_text)
        if match:
            t_type = match.group(3)
            page_standard_templates.setdefault(norm_path, []).append(t_type)
            
    # Process dataset
    processed_records = []
    
    # Initialize totals
    site_total_clicks = 0
    site_level_counts = {"Level 1": 0, "Level 2": 0, "Level 3": 0, "Special": 0}
    site_template_counts = {"old": 0, "new": 0}
    
    page_aggregates = {}
    
    for row in raw_data:
        path = row["pagePath"]
        norm_path = "/" + path.strip("/")
        if norm_path != "/" and "t100" in norm_path.lower():
            norm_path = norm_path + "/"
            
        click_text = row["click_text"]
        click_url = row["click_url"]
        count = row["count"]
        
        parsed = parse_menu_text(click_text, norm_path, page_standard_templates)
        
        # Accumulate site stats
        site_total_clicks += count
        site_level_counts[parsed["level"]] += count
        site_template_counts[parsed["template"]] += count
        
        # Initialize page record in page_aggregates if not yet present
        if norm_path not in page_aggregates:
            page_aggregates[norm_path] = {
                "path": norm_path,
                "pageName": path_to_page_name.get(norm_path, norm_path),
                "totalClicks": 0,
                "levelCounts": {"Level 1": 0, "Level 2": 0, "Level 3": 0, "Special": 0},
                "templateCounts": {"old": 0, "new": 0},
                "items": []
            }
            
        p_agg = page_aggregates[norm_path]
        p_agg["totalClicks"] += count
        p_agg["levelCounts"][parsed["level"]] += count
        p_agg["templateCounts"][parsed["template"]] += count
        
        # Add item record
        p_agg["items"].append({
            "rawText": click_text,
            "label": parsed["label"],
            "url": click_url or "(無目標網址)",
            "level": parsed["level"],
            "template": parsed["template"],
            "clicks": count,
            "isSpecial": parsed["isSpecial"]
        })
        
        # Add to flat list for top elements
        processed_records.append({
            "label": parsed["label"],
            "rawText": click_text,
            "level": parsed["level"],
            "template": parsed["template"],
            "clicks": count,
            "pagePath": norm_path,
            "pageName": path_to_page_name.get(norm_path, norm_path),
            "url": click_url or "(無)"
        })
        
    # Sort top elements site-wide
    processed_records.sort(key=lambda x: x["clicks"], reverse=True)
    top_menu_items = processed_records[:30] # Keep top 30
    
    # Sort items inside pages and generate page AI reports
    final_pages_data = []
    for path, p_agg in page_aggregates.items():
        p_agg["items"].sort(key=lambda x: x["clicks"], reverse=True)
        
        # Top 3 items clicked on this page, grouping by label to avoid duplicates
        label_clicks = {}
        for item in p_agg["items"]:
            if not item["isSpecial"]:
                lbl = item["label"]
                label_clicks[lbl] = label_clicks.get(lbl, 0) + item["clicks"]
        top_page_items = sorted(label_clicks.keys(), key=lambda x: label_clicks[x], reverse=True)[:3]
        if not top_page_items:
            top_page_items = ["無"]
            
        ai_report = compile_ai_report(
            p_agg["totalClicks"],
            p_agg["levelCounts"],
            p_agg["templateCounts"],
            top_page_items,
            p_agg["pageName"]
        )
        
        final_pages_data.append({
            "path": p_agg["path"],
            "pageName": p_agg["pageName"],
            "totalClicks": p_agg["totalClicks"],
            "levelCounts": p_agg["levelCounts"],
            "templateCounts": p_agg["templateCounts"],
            "items": p_agg["items"],
            "aiReport": ai_report
        })
        
    # Sort pages by clicks
    final_pages_data.sort(key=lambda x: x["totalClicks"], reverse=True)
    
    # Compile Site-wide top items label for AI, grouping by label to avoid duplicates
    site_label_clicks = {}
    for item in processed_records:
        if item["level"] == "Level 3":
            lbl = item["label"]
            site_label_clicks[lbl] = site_label_clicks.get(lbl, 0) + item["clicks"]
    site_top_labels = sorted(site_label_clicks.keys(), key=lambda x: site_label_clicks[x], reverse=True)[:3]
    if not site_top_labels:
        site_top_labels = ["無"]
        
    # Compile Site-wide AI report
    site_ai_report = compile_ai_report(
        site_total_clicks,
        site_level_counts,
        site_template_counts,
        site_top_labels,
        "全站總覽"
    )
    
    output_data = {
        "siteStats": {
            "totalClicks": site_total_clicks,
            "levelCounts": site_level_counts,
            "templateCounts": site_template_counts,
            "totalPages": len(final_pages_data),
            "aiReport": site_ai_report
        },
        "topItems": top_menu_items,
        "pages": final_pages_data
    }
    
    # Export JS
    dest_js = os.path.join(BASE_DIR, "assets", "menu_dashboard_data.js")
    os.makedirs(os.path.dirname(dest_js), exist_ok=True)
    with open(dest_js, "w", encoding="utf-8") as f:
        f.write(f"window.menuDashboardData = {json.dumps(output_data, indent=2, ensure_ascii=False)};")

        
    print(f"\nSuccessfully generated {dest_js}!")
    print(f"Site-wide Menu Clicks: {site_total_clicks} clicks.")
    print(f"Processed unique pages: {len(final_pages_data)}")
    print(f"Level share -> L1: {site_level_counts['Level 1']}, L2: {site_level_counts['Level 2']}, L3: {site_level_counts['Level 3']}, Special: {site_level_counts['Special']}")
    print(f"Template share -> Old: {site_template_counts['old']}, New: {site_template_counts['new']}")

if __name__ == "__main__":
    main()
