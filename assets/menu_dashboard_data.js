window.menuDashboardData = {
  "siteStats": {
    "totalClicks": 4089,
    "levelCounts": {
      "Level 1": 3006,
      "Level 2": 866,
      "Level 3": 4,
      "Special": 213
    },
    "templateCounts": {
      "old": 3877,
      "new": 212
    },
    "totalPages": 118,
    "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 74%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n全站訪客最熱衷於查看「行業方案」與「產品介紹」，代表新進站流量主要以尋找系統性的「行業解答」為主。建議在主頁面 Banner 及首屏顯眼處增加按行業導覽的區塊，幫助使用者直接分流至 Cosmos (流通)、Workflow (製造) 或 SmartERP (中小企業)。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 18.3 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
  },
  "topItems": [
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 303,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 207,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "關於",
      "rawText": "level1-關於-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 167,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/aboutdsc"
    },
    {
      "label": "聯繫我們",
      "rawText": "level1-聯繫我們-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 137,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "案例",
      "rawText": "level1-案例-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 127,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/case"
    },
    {
      "label": "服務",
      "rawText": "level1-服務-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 116,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "AI 解決方案",
      "rawText": "level2-AI 解決方案-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 107,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "活動",
      "rawText": "level1-活動-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 106,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/course"
    },
    {
      "label": "知識",
      "rawText": "level1-知識-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 103,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "產品與軟體",
      "rawText": "level2-產品與軟體-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 74,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "phone-nav",
      "rawText": "phone-nav-old",
      "level": "Special",
      "template": "old",
      "clicks": 65,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#mmenu"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 58,
      "pagePath": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM"
    },
    {
      "label": "智能+應用",
      "rawText": "level2-智能+應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 55,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "聯繫我們",
      "rawText": "level1-聯繫我們-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 52,
      "pagePath": "/contact/eform",
      "pageName": "/contact/eform",
      "url": "https://www.digiwin.com.tw/contact/eform"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 47,
      "pagePath": "/dsc/solution/WB002839/AISM",
      "pageName": "SmartERP 中小企業 (smarterp.html)",
      "url": "javascript:;"
    },
    {
      "label": "應用領域",
      "rawText": "level2-應用領域-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 45,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "新零售",
      "rawText": "level2-新零售-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 44,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "案例",
      "rawText": "level1-案例-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 36,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "https://www.digiwin.com.tw/case"
    },
    {
      "label": "OT應用",
      "rawText": "level2-OT應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 36,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "雲平台/雲應用",
      "rawText": "level2-雲平台/雲應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 33,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "服務",
      "rawText": "level1-服務-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 33,
      "pagePath": "/dsc/project/ServiceCloud/ServiceCloud",
      "pageName": "/dsc/project/ServiceCloud/ServiceCloud",
      "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 31,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "javascript:;"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 31,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "javascript:;"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 30,
      "pagePath": "/contact/eform",
      "pageName": "/contact/eform",
      "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM"
    },
    {
      "label": "流通業",
      "rawText": "level2-流通業-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 30,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "聯絡我們",
      "rawText": "level1-聯絡我們-new",
      "level": "Level 1",
      "template": "new",
      "clicks": 30,
      "pagePath": "/aboutdsc",
      "pageName": "/aboutdsc",
      "url": "https://www.digiwin.com.tw/servicepoint"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 29,
      "pagePath": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "url": "https://www.digiwin.com.tw/software/WF/WF?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 28,
      "pagePath": "/dsc/solution/WB002839/AISM",
      "pageName": "SmartERP 中小企業 (smarterp.html)",
      "url": "javascript:;"
    },
    {
      "label": "了解智能+全方案",
      "rawText": "level2-了解智能+全方案-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 28,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "其他行業",
      "rawText": "level2-其他行業-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 28,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    }
  ],
  "pages": [
    {
      "path": "/",
      "pageName": "首頁 (home.html)",
      "totalClicks": 1906,
      "levelCounts": {
        "Level 1": 1266,
        "Level 2": 517,
        "Level 3": 4,
        "Special": 119
      },
      "templateCounts": {
        "old": 1906,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 1",
          "template": "old",
          "clicks": 303,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 207,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 167,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 137,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 127,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 116,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 107,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "https://www.digiwin.com.tw/course",
          "level": "Level 1",
          "template": "old",
          "clicks": 106,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 103,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 74,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 65,
          "isSpecial": true
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 55,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 45,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 44,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 36,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 28,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 28,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 27,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 24,
          "isSpecial": true
        },
        {
          "rawText": "search-btn-old",
          "label": "search-btn",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 11,
          "isSpecial": true
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "search-submit-old",
          "label": "search-submit",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 6,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-電子光電",
          "label": "行業方案-電子光電",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 3,
          "isSpecial": true
        },
        {
          "rawText": "level2-公司簡介-old",
          "label": "公司簡介",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 2",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level2-需求諮詢-old",
          "label": "需求諮詢",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 2",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level3-ERPⅡ 管理需求延展應用-old",
          "label": "ERPⅡ 管理需求延展應用",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level3-價值服務-old",
          "label": "價值服務",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level3-時勢法規議題-old",
          "label": "時勢法規議題",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level3-智能+應用方案-old",
          "label": "智能+應用方案",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "企業AI助理",
          "label": "企業AI助理",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "服務據點",
          "label": "服務據點",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "服務電話",
          "label": "服務電話",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-交通",
          "label": "行業方案-交通",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-服飾",
          "label": "行業方案-服飾",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-生技",
          "label": "行業方案-生技",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-美妝",
          "label": "行業方案-美妝",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-製造",
          "label": "行業方案-製造",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-金融保險",
          "label": "行業方案-金融保險",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        },
        {
          "rawText": "關閉工具列",
          "label": "關閉工具列",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 66%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n全站訪客最熱衷於查看「行業方案」與「產品介紹」，代表新進站流量主要以尋找系統性的「行業解答」為主。建議在主頁面 Banner 及首屏顯眼處增加按行業導覽的區塊，幫助使用者直接分流至 Cosmos (流通)、Workflow (製造) 或 SmartERP (中小企業)。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 19060.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case",
      "pageName": "/case",
      "totalClicks": 251,
      "levelCounts": {
        "Level 1": 170,
        "Level 2": 69,
        "Level 3": 0,
        "Special": 12
      },
      "templateCounts": {
        "old": 251,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 36,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 31,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 31,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 25,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 2",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/case#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 10,
          "isSpecial": true
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 68%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2510.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "totalClicks": 239,
      "levelCounts": {
        "Level 1": 159,
        "Level 2": 74,
        "Level 3": 0,
        "Special": 6
      },
      "templateCounts": {
        "old": 239,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 58,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/software/WF/WF?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Level 1",
          "template": "old",
          "clicks": 29,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 24,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/software/WF/WF?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "https://www.digiwin.com.tw/software/WF/WF?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "https://www.digiwin.com.tw/software/WF/WF?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 3,
          "isSpecial": true
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/WF/WF#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 3,
          "isSpecial": true
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 67%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n本頁面訪客高度關注「產品優勢」與「製造業 Workflow ERP」細項，顯示訪客均為目標明確的製造業相關人員，對「生產管理與排程控制」的實際功能著眼較深。建議主動推薦「智慧製造案例手冊」或「MES 廠內智能物流解方」來引導轉換。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2390.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/contact/eform",
      "pageName": "/contact/eform",
      "totalClicks": 190,
      "levelCounts": {
        "Level 1": 147,
        "Level 2": 43,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 190,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "old",
          "clicks": 52,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "https://www.digiwin.com.tw/contact/eform?msclkid=94e21f2bb5ee160d1ae77509cc38a4ab&utm_source=bing&ut",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "https://www.digiwin.com.tw/ERP/erp-all.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002553/WB00255301",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 77%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /contact/eform 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1900.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/AISM",
      "pageName": "SmartERP 中小企業 (smarterp.html)",
      "totalClicks": 183,
      "levelCounts": {
        "Level 1": 150,
        "Level 2": 26,
        "Level 3": 0,
        "Special": 7
      },
      "templateCounts": {
        "old": 183,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 47,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 28,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "https://www.digiwin.com.tw/software/T100/",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 3,
          "isSpecial": true
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        },
        {
          "rawText": "smarterp-應用場景-下一張",
          "label": "smarterp-應用場景-下一張",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 82%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n中小企業訪客強烈關注「應用場景」及「是否適合中小企業」，這表示訪客特別注重「導入時間成本」與「是否有同行成功案例」。建議在選單中為其提供一鍵抵達的「30天中小企業快速導入方案」說明頁。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1830.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ServiceCloud/ServiceCloud",
      "pageName": "/dsc/project/ServiceCloud/ServiceCloud",
      "totalClicks": 155,
      "levelCounts": {
        "Level 1": 147,
        "Level 2": 4,
        "Level 3": 0,
        "Special": 4
      },
      "templateCounts": {
        "old": 155,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud",
          "level": "Level 1",
          "template": "old",
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 1",
          "template": "old",
          "clicks": 23,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB003295/WB00329502",
          "level": "Level 1",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "https://www.digiwin.com.tw/blog/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 95%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ServiceCloud/ServiceCloud 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1550.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/aboutdsc",
      "pageName": "/aboutdsc",
      "totalClicks": 116,
      "levelCounts": {
        "Level 1": 112,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 4
      },
      "templateCounts": {
        "old": 0,
        "new": 116
      },
      "items": [
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "https://www.digiwin.com.tw/servicepoint",
          "level": "Level 1",
          "template": "new",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "new",
          "clicks": 26,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/aboutdsc#vision",
          "level": "Level 1",
          "template": "new",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002953/WB00295301",
          "level": "Level 1",
          "template": "new",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "https://market.digiwincloud.com/?__hstc=267284369.bc9d8c2ae166d5d6b8c6057689dd2977.1781062546727.178",
          "level": "Level 1",
          "template": "new",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "new",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "http://dsa.dsc.com.tw/Cert/Default.aspx",
          "level": "Level 1",
          "template": "new",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-new",
          "label": "phone-nav",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "new",
          "clicks": 3,
          "isSpecial": true
        },
        {
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 1,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 97%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /aboutdsc 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/index",
      "pageName": "/dsc/solution/WB002741/index",
      "totalClicks": 90,
      "levelCounts": {
        "Level 1": 73,
        "Level 2": 17,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 90,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 81%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 900.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ai-solution/private-ai",
      "pageName": "/dsc/project/ai-solution/private-ai",
      "totalClicks": 51,
      "levelCounts": {
        "Level 1": 45,
        "Level 2": 4,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 51,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/METIS/AIassist/index.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 88%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ai-solution/private-ai 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 510.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002783/WB00278301",
      "pageName": "/dsc/solution/WB002783/WB00278301",
      "totalClicks": 46,
      "levelCounts": {
        "Level 1": 40,
        "Level 2": 6,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 46,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301#",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "https://www.digiwin.com.tw/blog/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 87%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002783/WB00278301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 460.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/servicepoint",
      "pageName": "/servicepoint",
      "totalClicks": 42,
      "levelCounts": {
        "Level 1": 40,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 42,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 95%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /servicepoint 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 420.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/search",
      "pageName": "/search",
      "totalClicks": 37,
      "levelCounts": {
        "Level 1": 35,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 37,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/search?keyword=%E5%84%AA%E6%83%A0&searchtype=0#",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 95%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /search 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 370.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002899/WB00289901",
      "pageName": "/dsc/solution/WB002899/WB00289901",
      "totalClicks": 36,
      "levelCounts": {
        "Level 1": 26,
        "Level 2": 8,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 36,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002899/WB00289901",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 72%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002899/WB00289901 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 360.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002595/WB00259501",
      "pageName": "/dsc/solution/WB002595/WB00259501",
      "totalClicks": 35,
      "levelCounts": {
        "Level 1": 29,
        "Level 2": 6,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 35,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002595/WB00259501?campaign=03GS%E5%BB%B6%E4%BC%B8%E7%94%A2",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 83%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002595/WB00259501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 350.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/BPM/BPM",
      "pageName": "/software/BPM/BPM",
      "totalClicks": 34,
      "levelCounts": {
        "Level 1": 25,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 7
      },
      "templateCounts": {
        "old": 34,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/BPM/BPM#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 3,
          "isSpecial": true
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/software/BPM/BPM#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 74%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/BPM/BPM 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 340.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/CM/CM",
      "pageName": "Cosmos ERP 流通業 (cosmos.html)",
      "totalClicks": 34,
      "levelCounts": {
        "Level 1": 28,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 6
      },
      "templateCounts": {
        "old": 34,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/WF/WF",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/CM/CM?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 82%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 Cosmos ERP 流通業 (cosmos.html) 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 340.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/course",
      "pageName": "/course",
      "totalClicks": 33,
      "levelCounts": {
        "Level 1": 31,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 33,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/course",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/course#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 94%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /course 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 330.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity",
      "pageName": "/activity",
      "totalClicks": 31,
      "levelCounts": {
        "Level 1": 28,
        "Level 2": 3,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 31,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "https://www.digiknow.com.tw/?__hstc=267284369.17fd30a65bd0907bc7ac36a7002e295a.1780974076256.1780974",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "https://www.digiknow.com.tw/?__hstc=267284369.d1d2513410e0d45a53904dba24900c59.1773620409197.1780623",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 90%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 310.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002553/WB00255301",
      "pageName": "/dsc/solution/WB002553/WB00255301",
      "totalClicks": 27,
      "levelCounts": {
        "Level 1": 23,
        "Level 2": 4,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 27,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 85%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002553/WB00255301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 270.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/ERP/financial",
      "pageName": "/ERP/financial",
      "totalClicks": 25,
      "levelCounts": {
        "Level 1": 20,
        "Level 2": 5,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 25,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/ERP/financial#A1",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "https://www.digiwin.com.tw/ERP/financial#",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://a1.digiwin.com/index.php?__hstc=267284369.4c1d1b44e95c681203faeafe8836aac8.1781070319963.178",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "https://www.digiwin.com.tw/dsc/industry4/smartFactory",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 80%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /ERP/financial 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 250.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/service",
      "pageName": "/service",
      "totalClicks": 22,
      "levelCounts": {
        "Level 1": 22,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 22
      },
      "items": [
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "new",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "new",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /service 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/index",
      "pageName": "/blog/index",
      "totalClicks": 20,
      "levelCounts": {
        "Level 1": 20,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 20,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "http://dsa.dsc.com.tw/",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 200.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ESG/index",
      "pageName": "/dsc/project/ESG/index",
      "totalClicks": 20,
      "levelCounts": {
        "Level 1": 15,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 5
      },
      "templateCounts": {
        "old": 20,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ESG/index#",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/ESG/index#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 3,
          "isSpecial": true
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 75%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ESG/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 200.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/696.html",
      "pageName": "/software/696.html",
      "totalClicks": 19,
      "levelCounts": {
        "Level 1": 17,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 19,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/T100/",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 89%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/696.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 190.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003932/index",
      "pageName": "/dsc/solution/WB003932/index",
      "totalClicks": 18,
      "levelCounts": {
        "Level 1": 5,
        "Level 2": 13,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 18,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 28%, L2: 72%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003932/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 180.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002675/WB00267501",
      "pageName": "/dsc/solution/WB002675/WB00267501",
      "totalClicks": 16,
      "levelCounts": {
        "Level 1": 11,
        "Level 2": 5,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 16,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 69%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002675/WB00267501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 160.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/manufacture",
      "pageName": "/dsc/solution/WB002839/manufacture",
      "totalClicks": 16,
      "levelCounts": {
        "Level 1": 12,
        "Level 2": 4,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 16,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "https://www.digiwin.com.tw/dsc/OT-IaaS/01_3/index.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 75%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/manufacture 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 160.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002972/index",
      "pageName": "/dsc/solution/WB002972/index",
      "totalClicks": 15,
      "levelCounts": {
        "Level 1": 15,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 15,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002972/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 150.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/semiconductor/index",
      "pageName": "/dsc/solution/semiconductor/index",
      "totalClicks": 14,
      "levelCounts": {
        "Level 1": 14,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 14,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002513/WB00251301",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/semiconductor/index#",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/dsc/solution/semiconductor/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/semiconductor/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 140.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3581.html",
      "pageName": "/blog/erp/3581.html",
      "totalClicks": 14,
      "levelCounts": {
        "Level 1": 12,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 0,
        "new": 14
      },
      "items": [
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/blog/erp/3581.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 86%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3581.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/barcode",
      "pageName": "/dsc/solution/WB002839/barcode",
      "totalClicks": 13,
      "levelCounts": {
        "Level 1": 13,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 13,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/barcode?campaign=03GS%E5%BB%B6%E4%BC%B8%E7%94%A2%E5",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/barcode?campaign=03GS%E5%BB%B6%E4%BC%B8%E7%94%A2%E5",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/barcode 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 130.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/merchandise",
      "pageName": "/dsc/solution/WB002839/merchandise",
      "totalClicks": 13,
      "levelCounts": {
        "Level 1": 5,
        "Level 2": 6,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 13,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002675/WB00267501_4",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/merchandise#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 38%, L2: 46%, L3: 0%, 特殊: 15%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/merchandise 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 130.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity_report",
      "pageName": "/activity_report",
      "totalClicks": 12,
      "levelCounts": {
        "Level 1": 11,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 1
      },
      "templateCounts": {
        "old": 12,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "https://www.digiknow.com.tw/?__hstc=267284369.7e706a9bd18f36de83218048a9180905.1770344672406.1780642",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 92%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity_report 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 120.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/industry4/smartFactory",
      "pageName": "/dsc/industry4/smartFactory",
      "totalClicks": 12,
      "levelCounts": {
        "Level 1": 12,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 12
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/industry4/smartFactory#",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/hr/school/",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/industry4/smartFactory 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity/3122.html",
      "pageName": "/activity/3122.html",
      "totalClicks": 11,
      "levelCounts": {
        "Level 1": 11,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 11,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/activity/3122.html#",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity/3122.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 110.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3623.html",
      "pageName": "/blog/erp/3623.html",
      "totalClicks": 11,
      "levelCounts": {
        "Level 1": 11,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 11
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "new",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3623.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002675/WB00267501_1",
      "pageName": "/dsc/solution/WB002675/WB00267501_1",
      "totalClicks": 10,
      "levelCounts": {
        "Level 1": 6,
        "Level 2": 4,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 10,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002675/WB00267501",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 60%, L2: 40%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002675/WB00267501_1 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 100.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002513/WB00251301_solution02",
      "pageName": "/dsc/solution/WB002513/WB00251301_solution02",
      "totalClicks": 9,
      "levelCounts": {
        "Level 1": 3,
        "Level 2": 6,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 9,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "https://www.digiwin.com.tw/ERP/erp-all.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 33%, L2: 67%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002513/WB00251301_solution02 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 90.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002785/WB00278501",
      "pageName": "/dsc/solution/WB002785/WB00278501",
      "totalClicks": 8,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 8,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 8,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 100%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002785/WB00278501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 80.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/digiwinathena/index",
      "pageName": "/dsc/project/digiwinathena/index",
      "totalClicks": 8,
      "levelCounts": {
        "Level 1": 6,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 8,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/METIS/AIassist/index.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 75%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/digiwinathena/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 80.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002675/WB00267501_3",
      "pageName": "/dsc/solution/WB002675/WB00267501_3",
      "totalClicks": 8,
      "levelCounts": {
        "Level 1": 4,
        "Level 2": 4,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 8,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 50%, L2: 50%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002675/WB00267501_3 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 80.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/case",
      "pageName": "/dsc/solution/WB002741/case",
      "totalClicks": 8,
      "levelCounts": {
        "Level 1": 8,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 8,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/case 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 80.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/industries",
      "pageName": "/industries",
      "totalClicks": 8,
      "levelCounts": {
        "Level 1": 8,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 8
      },
      "items": [
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /industries 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/710.html",
      "pageName": "/software/710.html",
      "totalClicks": 8,
      "levelCounts": {
        "Level 1": 8,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 8,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/710.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 80.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/PLM/index",
      "pageName": "/software/PLM/index",
      "totalClicks": 7,
      "levelCounts": {
        "Level 1": 7,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 7,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/PLM/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 70.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002513/WB00251301",
      "pageName": "/dsc/solution/WB002513/WB00251301",
      "totalClicks": 7,
      "levelCounts": {
        "Level 1": 7,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 7,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002513/WB00251301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 70.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity/3605.html",
      "pageName": "/activity/3605.html",
      "totalClicks": 6,
      "levelCounts": {
        "Level 1": 6,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 6,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "https://www.digiknow.com.tw/activity?__hstc=267284369.6afc1a7a34c25a69d1be6d0efdb07890.1776659486336",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity/3605.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002476/WB00247601",
      "pageName": "/dsc/solution/WB002476/WB00247601",
      "totalClicks": 6,
      "levelCounts": {
        "Level 1": 6,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 6,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002476/WB00247601 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/mobile",
      "pageName": "/dsc/solution/WB002741/mobile",
      "totalClicks": 6,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 6,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002741/mobile#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 33%, L2: 33%, L3: 0%, 特殊: 33%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 33%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/mobile 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/article/informationsecurity",
      "pageName": "/dsc/solution/article/informationsecurity",
      "totalClicks": 6,
      "levelCounts": {
        "Level 1": 6,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 6,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/servicepoint",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/article/informationsecurity 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/news/3579.html",
      "pageName": "/news/3579.html",
      "totalClicks": 6,
      "levelCounts": {
        "Level 1": 6,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 6,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /news/3579.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/726.html",
      "pageName": "/software/726.html",
      "totalClicks": 6,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 4,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 6,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "https://www.digiwin.com.tw/ERP/erp-all.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 33%, L2: 67%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/726.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002675/WB00267501_DAISO",
      "pageName": "/dsc/solution/WB002675/WB00267501_DAISO",
      "totalClicks": 5,
      "levelCounts": {
        "Level 1": 5,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 5,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002675/WB00267501_DAISO 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3248.html",
      "pageName": "/blog/erp/3248.html",
      "totalClicks": 5,
      "levelCounts": {
        "Level 1": 5,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 5
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/blog/erp/3248.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/blog/erp/3248.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3248.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/resources",
      "pageName": "/resources",
      "totalClicks": 5,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 5
      },
      "templateCounts": {
        "old": 5,
        "new": 0
      },
      "items": [
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/resources#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 3,
          "isSpecial": true
        },
        {
          "rawText": "search-submit-old",
          "label": "search-submit",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /resources 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity/3075.html",
      "pageName": "/activity/3075.html",
      "totalClicks": 5,
      "levelCounts": {
        "Level 1": 3,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 5,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/activity/3075.html#",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "https://www.digiwin.com.tw/dsc/OT-IaaS/01_3/index.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 60%, L2: 40%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity/3075.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/ERP/blog_wip",
      "pageName": "/ERP/blog_wip",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 4,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/semiconductor/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /ERP/blog_wip 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/9/index/3427.html",
      "pageName": "/blog/9/index/3427.html",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 4,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 4
      },
      "items": [
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "http://dsa.dsc.com.tw/Cert/Default.aspx",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/9/index/3427.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002513/WB00251301_solution04",
      "pageName": "/dsc/solution/WB002513/WB00251301_solution04",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 4,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002513/WB00251301_solution04 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/shift",
      "pageName": "/dsc/solution/WB002741/shift",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 4
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002741/shift#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/shift 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/solution",
      "pageName": "/dsc/solution/WB002741/solution",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 4,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/T100/",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/solution 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/eform",
      "pageName": "/dsc/solution/WB002839/eform",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 4,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/eform 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003006/index",
      "pageName": "/dsc/solution/WB003006/index",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 4,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB003006/index?utm_source=104.com.tw&utm_medium=website&utm_",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003006/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003413/index",
      "pageName": "/dsc/solution/WB003413/index",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 50%, L2: 50%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003413/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/news",
      "pageName": "/news",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 50%, L2: 0%, L3: 0%, 特殊: 50%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 50%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /news 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/aps/aps",
      "pageName": "/software/aps/aps",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002513/WB00251301",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "https://www.digiwin.com.tw/software/BPM/BPM",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 50%, L2: 50%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/aps/aps 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/solution/ListDetail5945",
      "pageName": "/solution/ListDetail5945",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 4,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /solution/ListDetail5945 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/about/prizes",
      "pageName": "/about/prizes",
      "totalClicks": 4,
      "levelCounts": {
        "Level 1": 3,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 1
      },
      "templateCounts": {
        "old": 4,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/news",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/about/prizes#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 75%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /about/prizes 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3247.html",
      "pageName": "/blog/erp/3247.html",
      "totalClicks": 3,
      "levelCounts": {
        "Level 1": 3,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 3
      },
      "items": [
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "new",
          "clicks": 3,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3247.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/erp/manufacture",
      "pageName": "/erp/manufacture",
      "totalClicks": 3,
      "levelCounts": {
        "Level 1": 3,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 3,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /erp/manufacture 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 30.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/mes/mes",
      "pageName": "/software/mes/mes",
      "totalClicks": 3,
      "levelCounts": {
        "Level 1": 3,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 3,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 3,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/mes/mes 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 30.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/4/index/915.html",
      "pageName": "/blog/4/index/915.html",
      "totalClicks": 3,
      "levelCounts": {
        "Level 1": 3,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 3
      },
      "items": [
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "new",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/4/index/915.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity/2580.html",
      "pageName": "/activity/2580.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity/2580.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/9/index/3352.html",
      "pageName": "/blog/9/index/3352.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 2
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/9/index/3352.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/9/index/3411.html",
      "pageName": "/blog/9/index/3411.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 2
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/blog/9/index/3411.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/9/index/3411.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/artificial-intelligence/3616.html",
      "pageName": "/blog/artificial-intelligence/3616.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 2
      },
      "items": [
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/artificial-intelligence/3616.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case/1116.html",
      "pageName": "/case/1116.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case/1116.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case/2750.html",
      "pageName": "/case/2750.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 100%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case/2750.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case/3195.html",
      "pageName": "/case/3195.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/case/3195.html#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case/3195.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case/3560.html",
      "pageName": "/case/3560.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/case/3560.html#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case/3560.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/METIS/ChatFile/index",
      "pageName": "/dsc/METIS/ChatFile/index",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/METIS/ChatFile/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/service/WB002736/WB00273601",
      "pageName": "/dsc/service/WB002736/WB00273601",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/service/WB002736/WB00273601 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/service/WB003566/index",
      "pageName": "/dsc/service/WB003566/index",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "https://www.digiwin.com.tw/blog/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/service/WB003566/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002553/WB00255301_cy",
      "pageName": "/dsc/solution/WB002553/WB00255301_cy",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002553/WB00255301_cy#",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002553/WB00255301_cy 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002553/WB00255301_period",
      "pageName": "/dsc/solution/WB002553/WB00255301_period",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002553/WB00255301_period 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002554/WB00255401",
      "pageName": "/dsc/solution/WB002554/WB00255401",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002554/WB00255401 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/health",
      "pageName": "/dsc/solution/WB002741/health",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/dsc/solution/semiconductor/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/health 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002742/WB00274201",
      "pageName": "/dsc/solution/WB002742/WB00274201",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 100%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002742/WB00274201 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002783/WB00278301_case",
      "pageName": "/dsc/solution/WB002783/WB00278301_case",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002783/WB00278301_case 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002801/WB00280101",
      "pageName": "/dsc/solution/WB002801/WB00280101",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002801/WB00280101 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002801/WB00280101_case4",
      "pageName": "/dsc/solution/WB002801/WB00280101_case4",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002801/WB00280101_case4 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002801/WB00280101_sales",
      "pageName": "/dsc/solution/WB002801/WB00280101_sales",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002801/WB00280101_sales 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002811/WB00281101",
      "pageName": "/dsc/solution/WB002811/WB00281101",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002811/WB00281101 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/iso",
      "pageName": "/dsc/solution/WB002839/iso",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/iso 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002953/WB00295301",
      "pageName": "/dsc/solution/WB002953/WB00295301",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002953/WB00295301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003031/approval",
      "pageName": "/dsc/solution/WB003031/approval",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/BPM/BPM",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003031/approval 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003288/WB00328801",
      "pageName": "/dsc/solution/WB003288/WB00328801",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003288/WB00328801 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003295/WB00329502",
      "pageName": "/dsc/solution/WB003295/WB00329502",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003295/WB00329502 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003399/index",
      "pageName": "/dsc/solution/WB003399/index",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003399/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/grievance",
      "pageName": "/grievance",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /grievance 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/legal",
      "pageName": "/legal",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 0,
        "new": 2
      },
      "items": [
        {
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /legal 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/708.html",
      "pageName": "/software/708.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/708.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/721.html",
      "pageName": "/software/721.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 2
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 2,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/721.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/723.html",
      "pageName": "/software/723.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/723.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/731.html",
      "pageName": "/software/731.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/731.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/DeviceCloud/DeviceCloud",
      "pageName": "/software/DeviceCloud/DeviceCloud",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 100%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/DeviceCloud/DeviceCloud 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/userservice",
      "pageName": "/userservice",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 100%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /userservice 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity/3167.html",
      "pageName": "/activity/3167.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity/3167.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/10/index/3354.html",
      "pageName": "/blog/10/index/3354.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 2
      },
      "items": [
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/10/index/3354.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/10/index/3455.html",
      "pageName": "/blog/10/index/3455.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 2,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 2
      },
      "items": [
        {
          "rawText": "level2-OT應用-new",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "new",
          "clicks": 1,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-new",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "new",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 100%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/10/index/3455.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/2/index/750.html",
      "pageName": "/blog/2/index/750.html",
      "totalClicks": 2,
      "levelCounts": {
        "Level 1": 2,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 2,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/T100/",
          "level": "Level 1",
          "template": "old",
          "clicks": 2,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/2/index/750.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 20.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/PR",
      "pageName": "/PR",
      "totalClicks": 1,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 1
      },
      "templateCounts": {
        "old": 1,
        "new": 0
      },
      "items": [
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /PR 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 10.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity/3458.html",
      "pageName": "/activity/3458.html",
      "totalClicks": 1,
      "levelCounts": {
        "Level 1": 1,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 1,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity/3458.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 10.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/1/index/3256.html",
      "pageName": "/blog/1/index/3256.html",
      "totalClicks": 1,
      "levelCounts": {
        "Level 1": 1,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 1,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/1/index/3256.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 10.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/10/index/3335.html",
      "pageName": "/blog/10/index/3335.html",
      "totalClicks": 1,
      "levelCounts": {
        "Level 1": 1,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 1
      },
      "items": [
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 1,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/10/index/3335.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/10/index/3415.html",
      "pageName": "/blog/10/index/3415.html",
      "totalClicks": 1,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 1
      },
      "templateCounts": {
        "old": 0,
        "new": 1
      },
      "items": [
        {
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 1,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/10/index/3415.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/2/index/816.html",
      "pageName": "/blog/2/index/816.html",
      "totalClicks": 1,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 1
      },
      "templateCounts": {
        "old": 1,
        "new": 0
      },
      "items": [
        {
          "rawText": "search-btn-old",
          "label": "search-btn",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/2/index/816.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 10.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/5/index/2398.html",
      "pageName": "/blog/5/index/2398.html",
      "totalClicks": 1,
      "levelCounts": {
        "Level 1": 0,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 1
      },
      "templateCounts": {
        "old": 1,
        "new": 0
      },
      "items": [
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 1,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/5/index/2398.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 10.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    }
  ]
};