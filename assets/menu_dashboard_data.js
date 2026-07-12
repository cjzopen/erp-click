window.menuDashboardData = {
  "siteStats": {
    "totalClicks": 20822,
    "levelCounts": {
      "Level 1": 15908,
      "Level 2": 3839,
      "Level 3": 35,
      "Special": 1040
    },
    "templateCounts": {
      "old": 19600,
      "new": 1222
    },
    "totalPages": 80,
    "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 76%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n全站訪客最熱衷於查看「行業方案」與「產品介紹」，代表新進站流量主要以尋找系統性的「行業解答」為主。建議在主頁面 Banner 及首屏顯眼處增加按行業導覽的區塊，幫助使用者直接分流至 Cosmos (流通)、Workflow (製造) 或 SmartERP (中小企業)。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 16.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n",
    "updateTime": "2026-07-12"
  },
  "topItems": [
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 1699,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 1027,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "關於",
      "rawText": "level1-關於-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 773,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/aboutdsc"
    },
    {
      "label": "聯繫我們",
      "rawText": "level1-聯繫我們-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 733,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "案例",
      "rawText": "level1-案例-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 703,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/case"
    },
    {
      "label": "服務",
      "rawText": "level1-服務-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 665,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "活動",
      "rawText": "level1-活動-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 490,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "知識",
      "rawText": "level1-知識-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 487,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "AI 解決方案",
      "rawText": "level2-AI 解決方案-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 458,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "產品與軟體",
      "rawText": "level2-產品與軟體-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 389,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "phone-nav",
      "rawText": "phone-nav-old",
      "level": "Special",
      "template": "old",
      "clicks": 386,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#mmenu"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 363,
      "pagePath": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "url": "https://www.digiwin.com.tw/software/WF/WF"
    },
    {
      "label": "案例",
      "rawText": "level1-案例-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 254,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "https://www.digiwin.com.tw/case"
    },
    {
      "label": "智能+應用",
      "rawText": "level2-智能+應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 241,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 228,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "javascript:;"
    },
    {
      "label": "聯繫我們",
      "rawText": "level1-聯繫我們-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 228,
      "pagePath": "/contact/eform",
      "pageName": "/contact/eform",
      "url": "https://www.digiwin.com.tw/servicepoint"
    },
    {
      "label": "OT應用",
      "rawText": "level2-OT應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 213,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 196,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "https://www.digiwin.com.tw/case#"
    },
    {
      "label": "應用領域",
      "rawText": "level2-應用領域-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 190,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 183,
      "pagePath": "/dsc/solution/WB002839/AISM",
      "pageName": "SmartERP 中小企業 (smarterp.html)",
      "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM"
    },
    {
      "label": "新零售",
      "rawText": "level2-新零售-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 182,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "雲平台/雲應用",
      "rawText": "level2-雲平台/雲應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 180,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "服務",
      "rawText": "level1-服務-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 179,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "javascript:;"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 174,
      "pagePath": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "url": "javascript:;"
    },
    {
      "label": "服務",
      "rawText": "level1-服務-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 172,
      "pagePath": "/dsc/project/ServiceCloud/ServiceCloud",
      "pageName": "/dsc/project/ServiceCloud/ServiceCloud",
      "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud"
    },
    {
      "label": "流通業",
      "rawText": "level2-流通業-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 161,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 158,
      "pagePath": "/software/CM/CM",
      "pageName": "Cosmos ERP 流通業 (cosmos.html)",
      "url": "https://www.digiwin.com.tw/software/CM/CM#"
    },
    {
      "label": "關於",
      "rawText": "level1-關於-new",
      "level": "Level 1",
      "template": "new",
      "clicks": 153,
      "pagePath": "/aboutdsc",
      "pageName": "/aboutdsc",
      "url": "https://www.digiwin.com.tw/aboutdsc"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 143,
      "pagePath": "/dsc/project/ServiceCloud/ServiceCloud",
      "pageName": "/dsc/project/ServiceCloud/ServiceCloud",
      "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#"
    },
    {
      "label": "了解智能+全方案",
      "rawText": "level2-了解智能+全方案-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 137,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    }
  ],
  "pages": [
    {
      "path": "/",
      "pageName": "首頁 (home.html)",
      "totalClicks": 9620,
      "levelCounts": {
        "Level 1": 6577,
        "Level 2": 2434,
        "Level 3": 35,
        "Special": 574
      },
      "templateCounts": {
        "old": 9620,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 1",
          "template": "old",
          "clicks": 1699,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 1027,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 773,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 733,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 703,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 665,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 490,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 487,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 458,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 389,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 386,
          "isSpecial": true
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 241,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 213,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 190,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 182,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 180,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 161,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 137,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 125,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 96,
          "isSpecial": true
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 85,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 65,
          "isSpecial": false
        },
        {
          "rawText": "search-btn-old",
          "label": "search-btn",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 36,
          "isSpecial": true
        },
        {
          "rawText": "search-submit-old",
          "label": "search-submit",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 27,
          "isSpecial": true
        },
        {
          "rawText": "level3-時勢法規議題-old",
          "label": "時勢法規議題",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-價值服務-old",
          "label": "價值服務",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level3-ERPⅡ 管理需求延展應用-old",
          "label": "ERPⅡ 管理需求延展應用",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level3-智能+應用方案-old",
          "label": "智能+應用方案",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "行業方案-製造",
          "label": "行業方案-製造",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 7,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-電子光電",
          "label": "行業方案-電子光電",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 7,
          "isSpecial": true
        },
        {
          "rawText": "level3-價值服務-old",
          "label": "價值服務",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level3-其他行業總覽-old",
          "label": "其他行業總覽",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "行業方案-工程",
          "label": "行業方案-工程",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        },
        {
          "rawText": "行業方案-機械",
          "label": "行業方案-機械",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        },
        {
          "rawText": "關閉工具列",
          "label": "關閉工具列",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 68%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n全站訪客最熱衷於查看「行業方案」與「產品介紹」，代表新進站流量主要以尋找系統性的「行業解答」為主。建議在主頁面 Banner 及首屏顯眼處增加按行業導覽的區塊，幫助使用者直接分流至 Cosmos (流通)、Workflow (製造) 或 SmartERP (中小企業)。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 96200.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case",
      "pageName": "/case",
      "totalClicks": 1520,
      "levelCounts": {
        "Level 1": 1136,
        "Level 2": 322,
        "Level 3": 0,
        "Special": 62
      },
      "templateCounts": {
        "old": 1520,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 254,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 228,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 1",
          "template": "old",
          "clicks": 196,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 179,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 105,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 73,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 1",
          "template": "old",
          "clicks": 59,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 2",
          "template": "old",
          "clicks": 58,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 42,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/case#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 40,
          "isSpecial": true
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 39,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 35,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 35,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 26,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 25,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 2",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 2",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 8,
          "isSpecial": true
        },
        {
          "rawText": "search-btn-old",
          "label": "search-btn",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 7,
          "isSpecial": true
        },
        {
          "rawText": "search-submit-old",
          "label": "search-submit",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 7,
          "isSpecial": true
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 75%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 15200.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "totalClicks": 1200,
      "levelCounts": {
        "Level 1": 966,
        "Level 2": 191,
        "Level 3": 0,
        "Special": 43
      },
      "templateCounts": {
        "old": 1200,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/WF/WF",
          "level": "Level 1",
          "template": "old",
          "clicks": 363,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 174,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 121,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 91,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 67,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 59,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/software/WF/WF#",
          "level": "Level 2",
          "template": "old",
          "clicks": 53,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/software/WF/WF?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Level 1",
          "template": "old",
          "clicks": 47,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 44,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 41,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/WF/WF#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 25,
          "isSpecial": true
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 18,
          "isSpecial": true
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 80%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n本頁面訪客高度關注「產品優勢」與「製造業 Workflow ERP」細項，顯示訪客均為目標明確的製造業相關人員，對「生產管理與排程控制」的實際功能著眼較深。建議主動推薦「智慧製造案例手冊」或「MES 廠內智能物流解方」來引導轉換。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 12000.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ServiceCloud/ServiceCloud",
      "pageName": "/dsc/project/ServiceCloud/ServiceCloud",
      "totalClicks": 1009,
      "levelCounts": {
        "Level 1": 830,
        "Level 2": 150,
        "Level 3": 0,
        "Special": 29
      },
      "templateCounts": {
        "old": 1009,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud",
          "level": "Level 1",
          "template": "old",
          "clicks": 172,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 1",
          "template": "old",
          "clicks": 143,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 118,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 88,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 83,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 82,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 75,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 69,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 32,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 2",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 16,
          "isSpecial": true
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 13,
          "isSpecial": true
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 82%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ServiceCloud/ServiceCloud 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 10090.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/contact/eform",
      "pageName": "/contact/eform",
      "totalClicks": 738,
      "levelCounts": {
        "Level 1": 636,
        "Level 2": 82,
        "Level 3": 0,
        "Special": 20
      },
      "templateCounts": {
        "old": 738,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/servicepoint",
          "level": "Level 1",
          "template": "old",
          "clicks": 228,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/contact/eform#",
          "level": "Level 1",
          "template": "old",
          "clicks": 103,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 73,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 62,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 55,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 46,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 37,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 32,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/contact/eform?msclkid=6926d99897b211a9d08fb3a145b10144&utm_source=bing&ut",
          "level": "Level 2",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 10,
          "isSpecial": true
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/contact/eform#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 10,
          "isSpecial": true
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 9,
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
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
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
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 86%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /contact/eform 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 7380.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/AISM",
      "pageName": "SmartERP 中小企業 (smarterp.html)",
      "totalClicks": 650,
      "levelCounts": {
        "Level 1": 529,
        "Level 2": 91,
        "Level 3": 0,
        "Special": 30
      },
      "templateCounts": {
        "old": 650,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 183,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 102,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 58,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 50,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 47,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 32,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM#",
          "level": "Level 1",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 27,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 18,
          "isSpecial": true
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 12,
          "isSpecial": true
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 9,
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
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002899/WB00289901",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 81%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n中小企業訪客強烈關注「應用場景」及「是否適合中小企業」，這表示訪客特別注重「導入時間成本」與「是否有同行成功案例」。建議在選單中為其提供一鍵抵達的「30天中小企業快速導入方案」說明頁。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 6500.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/aboutdsc",
      "pageName": "/aboutdsc",
      "totalClicks": 635,
      "levelCounts": {
        "Level 1": 598,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 37
      },
      "templateCounts": {
        "old": 0,
        "new": 635
      },
      "items": [
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "new",
          "clicks": 153,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "new",
          "clicks": 113,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/aboutdsc#",
          "level": "Level 1",
          "template": "new",
          "clicks": 87,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/aboutdsc#",
          "level": "Level 1",
          "template": "new",
          "clicks": 74,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/aboutdsc#",
          "level": "Level 1",
          "template": "new",
          "clicks": 64,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "https://www.digiwin.com.tw/aboutdsc#",
          "level": "Level 1",
          "template": "new",
          "clicks": 55,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "new",
          "clicks": 52,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-new",
          "label": "phone-nav",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "new",
          "clicks": 26,
          "isSpecial": true
        },
        {
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 11,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 94%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /aboutdsc 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/CM/CM",
      "pageName": "Cosmos ERP 流通業 (cosmos.html)",
      "totalClicks": 488,
      "levelCounts": {
        "Level 1": 370,
        "Level 2": 106,
        "Level 3": 0,
        "Special": 12
      },
      "templateCounts": {
        "old": 488,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/CM/CM#",
          "level": "Level 1",
          "template": "old",
          "clicks": 158,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/software/CM/CM?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Level 1",
          "template": "old",
          "clicks": 66,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 49,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 39,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 39,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 20,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/CM/CM?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Special",
          "template": "old",
          "clicks": 12,
          "isSpecial": true
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 11,
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
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 76%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 Cosmos ERP 流通業 (cosmos.html) 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 4880.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ai-solution/private-ai",
      "pageName": "/dsc/project/ai-solution/private-ai",
      "totalClicks": 394,
      "levelCounts": {
        "Level 1": 276,
        "Level 2": 105,
        "Level 3": 0,
        "Special": 13
      },
      "templateCounts": {
        "old": 394,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 1",
          "template": "old",
          "clicks": 89,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/METIS/AIassist/index.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 71,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 1",
          "template": "old",
          "clicks": 49,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 46,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 42,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 2",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 7,
          "isSpecial": true
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 6,
          "isSpecial": true
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 70%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ai-solution/private-ai 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 3940.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/BPM/BPM",
      "pageName": "/software/BPM/BPM",
      "totalClicks": 359,
      "levelCounts": {
        "Level 1": 288,
        "Level 2": 44,
        "Level 3": 0,
        "Special": 27
      },
      "templateCounts": {
        "old": 359,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/BPM/BPM",
          "level": "Level 1",
          "template": "old",
          "clicks": 115,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 47,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 31,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 26,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 23,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/BPM/BPM#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 16,
          "isSpecial": true
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 11,
          "isSpecial": true
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "https://www.digiwin.com.tw/software/BPM/BPM",
          "level": "Level 2",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
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
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 80%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/BPM/BPM 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 3590.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/index",
      "pageName": "/dsc/solution/WB002741/index",
      "totalClicks": 353,
      "levelCounts": {
        "Level 1": 286,
        "Level 2": 61,
        "Level 3": 0,
        "Special": 6
      },
      "templateCounts": {
        "old": 353,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002741/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 93,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301",
          "level": "Level 1",
          "template": "old",
          "clicks": 55,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 38,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
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
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002741/index?utm_term=%E9%BC%8E%E6%96%B0hr%E7%B3%BB%E7%B5%",
          "level": "Special",
          "template": "old",
          "clicks": 6,
          "isSpecial": true
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 81%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 3530.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/servicepoint",
      "pageName": "/servicepoint",
      "totalClicks": 345,
      "levelCounts": {
        "Level 1": 320,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 25
      },
      "templateCounts": {
        "old": 345,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 69,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 54,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 46,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 40,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 36,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 27,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 26,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/servicepoint#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 15,
          "isSpecial": true
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 10,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 93%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /servicepoint 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 3450.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002783/WB00278301",
      "pageName": "/dsc/solution/WB002783/WB00278301",
      "totalClicks": 295,
      "levelCounts": {
        "Level 1": 254,
        "Level 2": 33,
        "Level 3": 0,
        "Special": 8
      },
      "templateCounts": {
        "old": 295,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301#",
          "level": "Level 1",
          "template": "old",
          "clicks": 77,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 40,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 38,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 23,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 8,
          "isSpecial": true
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 86%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002783/WB00278301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2950.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/Agent-Space/index",
      "pageName": "/dsc/Agent-Space/index",
      "totalClicks": 284,
      "levelCounts": {
        "Level 1": 251,
        "Level 2": 11,
        "Level 3": 0,
        "Special": 22
      },
      "templateCounts": {
        "old": 50,
        "new": 234
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/Agent-Space/index#",
          "level": "Level 1",
          "template": "new",
          "clicks": 100,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/Agent-Space/index#",
          "level": "Level 1",
          "template": "new",
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 25,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/Agent-Space/index#",
          "level": "Level 1",
          "template": "old",
          "clicks": 25,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 20,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-new",
          "label": "phone-nav",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "new",
          "clicks": 12,
          "isSpecial": true
        },
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
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
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 5,
          "isSpecial": true
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 88%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/Agent-Space/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002899/WB00289901",
      "pageName": "/dsc/solution/WB002899/WB00289901",
      "totalClicks": 263,
      "levelCounts": {
        "Level 1": 222,
        "Level 2": 41,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 263,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 50,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 49,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 44,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 23,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002899/WB00289901",
          "level": "Level 2",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002899/WB00289901?campaign=09GS%E8%A1%8C%E6%A5%AD%E5%AD%97",
          "level": "Level 2",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 84%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002899/WB00289901 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2630.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002595/WB00259501",
      "pageName": "/dsc/solution/WB002595/WB00259501",
      "totalClicks": 254,
      "levelCounts": {
        "Level 1": 172,
        "Level 2": 75,
        "Level 3": 0,
        "Special": 7
      },
      "templateCounts": {
        "old": 254,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002595/WB00259501?campaign=03GS%E5%BB%B6%E4%BC%B8%E7%94%A2",
          "level": "Level 1",
          "template": "old",
          "clicks": 52,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 37,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 24,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002595/WB00259501?campaign=03GS%E5%BB%B6%E4%BC%B8%E7%94%A2",
          "level": "Special",
          "template": "old",
          "clicks": 7,
          "isSpecial": true
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 68%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002595/WB00259501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2540.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/search",
      "pageName": "/search",
      "totalClicks": 179,
      "levelCounts": {
        "Level 1": 127,
        "Level 2": 11,
        "Level 3": 0,
        "Special": 41
      },
      "templateCounts": {
        "old": 179,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 23,
          "isSpecial": false
        },
        {
          "rawText": "search-submit-old",
          "label": "search-submit",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 22,
          "isSpecial": true
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "search-btn-old",
          "label": "search-btn",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 19,
          "isSpecial": true
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
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
          "clicks": 13,
          "isSpecial": false
        },
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
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 71%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /search 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1790.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/course",
      "pageName": "/course",
      "totalClicks": 148,
      "levelCounts": {
        "Level 1": 138,
        "Level 2": 10,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 148,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 29,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
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
          "clicks": 9,
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
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 93%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /course 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1480.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/index",
      "pageName": "/blog/index",
      "totalClicks": 135,
      "levelCounts": {
        "Level 1": 135,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 135,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 57,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
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
          "clicks": 9,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1350.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/service",
      "pageName": "/service",
      "totalClicks": 134,
      "levelCounts": {
        "Level 1": 122,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 12
      },
      "templateCounts": {
        "old": 0,
        "new": 134
      },
      "items": [
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "new",
          "clicks": 53,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 6,
          "isSpecial": true
        },
        {
          "rawText": "phone-nav-new",
          "label": "phone-nav",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "new",
          "clicks": 6,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 91%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /service 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/696.html",
      "pageName": "/software/696.html",
      "totalClicks": 121,
      "levelCounts": {
        "Level 1": 121,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 121,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/696.html#",
          "level": "Level 1",
          "template": "old",
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
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
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/696.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1210.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/barcode",
      "pageName": "/dsc/solution/WB002839/barcode",
      "totalClicks": 103,
      "levelCounts": {
        "Level 1": 98,
        "Level 2": 5,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 103,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/barcode?campaign=03GS%E5%BB%B6%E4%BC%B8%E7%94%A2%E5",
          "level": "Level 1",
          "template": "old",
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
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
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 95%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/barcode 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1030.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/news",
      "pageName": "/news",
      "totalClicks": 84,
      "levelCounts": {
        "Level 1": 74,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 10
      },
      "templateCounts": {
        "old": 84,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/dsc/solution/article/informationsecurity",
          "level": "Level 1",
          "template": "old",
          "clicks": 26,
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
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
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
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
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
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/news#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 88%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /news 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 840.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3581.html",
      "pageName": "/blog/erp/3581.html",
      "totalClicks": 73,
      "levelCounts": {
        "Level 1": 60,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 13
      },
      "templateCounts": {
        "old": 0,
        "new": 73
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/blog/erp/3581.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-new",
          "label": "phone-nav",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "new",
          "clicks": 8,
          "isSpecial": true
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 5,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 82%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3581.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ESG/index",
      "pageName": "/dsc/project/ESG/index",
      "totalClicks": 72,
      "levelCounts": {
        "Level 1": 58,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 14
      },
      "templateCounts": {
        "old": 72,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/ESG/index#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 9,
          "isSpecial": true
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
          "rawText": "level1-知識-old",
          "label": "知識",
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
          "clicks": 5,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 81%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ESG/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 720.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002675/WB00267501",
      "pageName": "/dsc/solution/WB002675/WB00267501",
      "totalClicks": 70,
      "levelCounts": {
        "Level 1": 55,
        "Level 2": 15,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 70,
        "new": 0
      },
      "items": [
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
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
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
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
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
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 79%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002675/WB00267501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 700.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002553/WB00255301",
      "pageName": "/dsc/solution/WB002553/WB00255301",
      "totalClicks": 67,
      "levelCounts": {
        "Level 1": 60,
        "Level 2": 7,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 67,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 23,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
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
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 90%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002553/WB00255301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 670.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/industry4/smartFactory",
      "pageName": "/dsc/industry4/smartFactory",
      "totalClicks": 67,
      "levelCounts": {
        "Level 1": 67,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 67
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/industry4/smartFactory",
          "level": "Level 1",
          "template": "new",
          "clicks": 28,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "new",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/industry4/smartFactory#",
          "level": "Level 1",
          "template": "new",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/industry4/smartFactory 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/case",
      "pageName": "/dsc/solution/WB002741/case",
      "totalClicks": 66,
      "levelCounts": {
        "Level 1": 66,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 66,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002741/case#",
          "level": "Level 1",
          "template": "old",
          "clicks": 17,
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
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 9,
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/case 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 660.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/resources",
      "pageName": "/resources",
      "totalClicks": 65,
      "levelCounts": {
        "Level 1": 58,
        "Level 2": 7,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 65,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/resources#",
          "level": "Level 1",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
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
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
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
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 89%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /resources 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 650.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/708.html",
      "pageName": "/software/708.html",
      "totalClicks": 55,
      "levelCounts": {
        "Level 1": 45,
        "Level 2": 5,
        "Level 3": 0,
        "Special": 5
      },
      "templateCounts": {
        "old": 55,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
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
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/708.html#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 82%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/708.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 550.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity",
      "pageName": "/activity",
      "totalClicks": 48,
      "levelCounts": {
        "Level 1": 48,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 48,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 36,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
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
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 480.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/PLM/index",
      "pageName": "/software/PLM/index",
      "totalClicks": 39,
      "levelCounts": {
        "Level 1": 39,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 39,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
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
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/PLM/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 390.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/717.html",
      "pageName": "/software/717.html",
      "totalClicks": 38,
      "levelCounts": {
        "Level 1": 28,
        "Level 2": 10,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 38,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/708.html",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
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
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 74%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/717.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 380.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/shift",
      "pageName": "/dsc/solution/WB002741/shift",
      "totalClicks": 38,
      "levelCounts": {
        "Level 1": 38,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 38,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
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
          "clicks": 6,
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
          "rawText": "level1-活動-old",
          "label": "活動",
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/shift 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 380.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002521/WB00252103",
      "pageName": "/dsc/solution/WB002521/WB00252103",
      "totalClicks": 37,
      "levelCounts": {
        "Level 1": 37,
        "Level 2": 0,
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
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 30,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002521/WB00252103 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 370.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/solution",
      "pageName": "/dsc/solution/WB002839/solution",
      "totalClicks": 37,
      "levelCounts": {
        "Level 1": 37,
        "Level 2": 0,
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
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/solution 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 370.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/WB002940/index",
      "pageName": "/dsc/project/WB002940/index",
      "totalClicks": 37,
      "levelCounts": {
        "Level 1": 26,
        "Level 2": 5,
        "Level 3": 0,
        "Special": 6
      },
      "templateCounts": {
        "old": 37,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/WB002940/index#",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/WB002940/index#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 6,
          "isSpecial": true
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 70%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/WB002940/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 370.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002476/WB00247601",
      "pageName": "/dsc/solution/WB002476/WB00247601",
      "totalClicks": 36,
      "levelCounts": {
        "Level 1": 36,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 36,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002476/WB00247601 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 360.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3247.html",
      "pageName": "/blog/erp/3247.html",
      "totalClicks": 36,
      "levelCounts": {
        "Level 1": 28,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 8
      },
      "templateCounts": {
        "old": 0,
        "new": 36
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
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
          "clicks": 8,
          "isSpecial": true
        },
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 78%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3247.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/article/informationsecurity",
      "pageName": "/dsc/solution/article/informationsecurity",
      "totalClicks": 35,
      "levelCounts": {
        "Level 1": 35,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 35,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
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
          "rawText": "level1-方案-old",
          "label": "方案",
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/article/informationsecurity 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 350.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002972/index",
      "pageName": "/dsc/solution/WB002972/index",
      "totalClicks": 34,
      "levelCounts": {
        "Level 1": 34,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 34,
        "new": 0
      },
      "items": [
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002972/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 340.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/ERP/financial",
      "pageName": "/ERP/financial",
      "totalClicks": 31,
      "levelCounts": {
        "Level 1": 31,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 31,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
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
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
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
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /ERP/financial 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 310.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002785/WB00278501",
      "pageName": "/dsc/solution/WB002785/WB00278501",
      "totalClicks": 31,
      "levelCounts": {
        "Level 1": 31,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 31,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002785/WB00278501#",
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
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002785/WB00278501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 310.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity_report",
      "pageName": "/activity_report",
      "totalClicks": 29,
      "levelCounts": {
        "Level 1": 29,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 29,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/news",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
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
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity_report 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 290.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software",
      "pageName": "/software",
      "totalClicks": 27,
      "levelCounts": {
        "Level 1": 27,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 27
      },
      "items": [
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002675/WB00267501_1",
      "pageName": "/dsc/solution/WB002675/WB00267501_1",
      "totalClicks": 27,
      "levelCounts": {
        "Level 1": 22,
        "Level 2": 5,
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 81%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002675/WB00267501_1 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 270.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/721.html",
      "pageName": "/software/721.html",
      "totalClicks": 25,
      "levelCounts": {
        "Level 1": 25,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 25,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/721.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 250.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/710.html",
      "pageName": "/software/710.html",
      "totalClicks": 24,
      "levelCounts": {
        "Level 1": 24,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 24,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 17,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/710.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 240.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/solution/ListDetail5983",
      "pageName": "/solution/ListDetail5983",
      "totalClicks": 23,
      "levelCounts": {
        "Level 1": 23,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 23,
        "new": 0
      },
      "items": [
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /solution/ListDetail5983 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 230.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/news/3579.html",
      "pageName": "/news/3579.html",
      "totalClicks": 22,
      "levelCounts": {
        "Level 1": 16,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 6
      },
      "templateCounts": {
        "old": 22,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
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
          "clicks": 6,
          "isSpecial": true
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
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
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 73%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /news/3579.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 220.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/userservice",
      "pageName": "/userservice",
      "totalClicks": 21,
      "levelCounts": {
        "Level 1": 21,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 21,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /userservice 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 210.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002554/WB00255401",
      "pageName": "/dsc/solution/WB002554/WB00255401",
      "totalClicks": 19,
      "levelCounts": {
        "Level 1": 19,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 19,
        "new": 0
      },
      "items": [
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002554/WB00255401 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 190.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/METIS/ChatFile/index",
      "pageName": "/dsc/METIS/ChatFile/index",
      "totalClicks": 17,
      "levelCounts": {
        "Level 1": 9,
        "Level 2": 8,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 17,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 53%, L2: 47%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/METIS/ChatFile/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 170.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/mobile",
      "pageName": "/dsc/solution/WB002741/mobile",
      "totalClicks": 16,
      "levelCounts": {
        "Level 1": 16,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 16,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
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
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/mobile 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 160.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/iso",
      "pageName": "/dsc/solution/WB002839/iso",
      "totalClicks": 16,
      "levelCounts": {
        "Level 1": 16,
        "Level 2": 0,
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
          "url": "(無目標網址)",
          "level": "Level 1",
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
          "clicks": 5,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/iso 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 160.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/merchandise",
      "pageName": "/dsc/solution/WB002839/merchandise",
      "totalClicks": 15,
      "levelCounts": {
        "Level 1": 10,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 5
      },
      "templateCounts": {
        "old": 15,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/merchandise#",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
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
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/merchandise#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 67%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。 此外，**特殊功能按鈕（佔 33%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/merchandise 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 150.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002953/WB00295301",
      "pageName": "/dsc/solution/WB002953/WB00295301",
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
          "rawText": "level1-服務-old",
          "label": "服務",
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002953/WB00295301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 150.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/semiconductor/index",
      "pageName": "/dsc/solution/semiconductor/index",
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002513/WB00251301",
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
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/semiconductor/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 150.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003302/v2/index",
      "pageName": "/dsc/solution/WB003302/v2/index",
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
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003302/v2/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 140.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/731.html",
      "pageName": "/software/731.html",
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/731.html#",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/731.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 140.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/manufacture",
      "pageName": "/dsc/solution/WB002839/manufacture",
      "totalClicks": 13,
      "levelCounts": {
        "Level 1": 8,
        "Level 2": 5,
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
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 62%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/manufacture 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 130.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002899/solution",
      "pageName": "/dsc/solution/WB002899/solution",
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
          "url": "(無目標網址)",
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
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002899/solution 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 130.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/news/3578.html",
      "pageName": "/news/3578.html",
      "totalClicks": 12,
      "levelCounts": {
        "Level 1": 12,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 12,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /news/3578.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 120.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002811/WB00281101",
      "pageName": "/dsc/solution/WB002811/WB00281101",
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002811/WB00281101#",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002811/WB00281101 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 110.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002899/operation",
      "pageName": "/dsc/solution/WB002899/operation",
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002899/operation 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 110.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003006/index",
      "pageName": "/dsc/solution/WB003006/index",
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
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
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003006/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 110.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3246.html",
      "pageName": "/blog/erp/3246.html",
      "totalClicks": 10,
      "levelCounts": {
        "Level 1": 10,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 10
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3246.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/service/WB002736/WB00273601",
      "pageName": "/dsc/service/WB002736/WB00273601",
      "totalClicks": 10,
      "levelCounts": {
        "Level 1": 10,
        "Level 2": 0,
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
          "clicks": 5,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/service/WB002736/WB00273601 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 100.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002742/WB00274201",
      "pageName": "/dsc/solution/WB002742/WB00274201",
      "totalClicks": 10,
      "levelCounts": {
        "Level 1": 10,
        "Level 2": 0,
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
          "clicks": 5,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002742/WB00274201 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 100.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/health",
      "pageName": "/dsc/solution/WB002741/health",
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/health 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 70.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/enewspaper",
      "pageName": "/enewspaper",
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
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /enewspaper 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 70.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/about/prizes",
      "pageName": "/about/prizes",
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /about/prizes 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/artificial-intelligence/3615.html",
      "pageName": "/blog/artificial-intelligence/3615.html",
      "totalClicks": 6,
      "levelCounts": {
        "Level 1": 6,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 6
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/artificial-intelligence/3615.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/DOP/DOP",
      "pageName": "/software/DOP/DOP",
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
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/DOP/DOP 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/solution/ListDetail5945",
      "pageName": "/solution/ListDetail5945",
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /solution/ListDetail5945 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/video",
      "pageName": "/video",
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
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /video 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/digiwinathena/index",
      "pageName": "/dsc/project/digiwinathena/index",
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/digiwinathena/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
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
      "path": "/dsc/solution/WB003954/index",
      "pageName": "/dsc/solution/WB003954/index",
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
          "url": "https://www.digiwin.com.tw/dsc/solution/WB003954/index#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 5,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003954/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    }
  ]
};