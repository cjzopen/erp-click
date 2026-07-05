window.menuDashboardData = {
  "siteStats": {
    "totalClicks": 17082,
    "levelCounts": {
      "Level 1": 12913,
      "Level 2": 3297,
      "Level 3": 29,
      "Special": 843
    },
    "templateCounts": {
      "old": 16204,
      "new": 878
    },
    "totalPages": 87,
    "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 76%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n全站訪客最熱衷於查看「行業方案」與「產品介紹」，代表新進站流量主要以尋找系統性的「行業解答」為主。建議在主頁面 Banner 及首屏顯眼處增加按行業導覽的區塊，幫助使用者直接分流至 Cosmos (流通)、Workflow (製造) 或 SmartERP (中小企業)。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 18.5 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n",
    "updateTime": "2026-07-05"
  },
  "topItems": [
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 1379,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 838,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "關於",
      "rawText": "level1-關於-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 656,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/aboutdsc"
    },
    {
      "label": "聯繫我們",
      "rawText": "level1-聯繫我們-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 619,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "案例",
      "rawText": "level1-案例-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 555,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/case"
    },
    {
      "label": "服務",
      "rawText": "level1-服務-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 538,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "知識",
      "rawText": "level1-知識-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 398,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "AI 解決方案",
      "rawText": "level2-AI 解決方案-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 388,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "活動",
      "rawText": "level1-活動-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 387,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "產品與軟體",
      "rawText": "level2-產品與軟體-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 331,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "phone-nav",
      "rawText": "phone-nav-old",
      "level": "Special",
      "template": "old",
      "clicks": 326,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#mmenu"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 276,
      "pagePath": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "url": "https://www.digiwin.com.tw/software/WF/WF"
    },
    {
      "label": "案例",
      "rawText": "level1-案例-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 207,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "https://www.digiwin.com.tw/case"
    },
    {
      "label": "智能+應用",
      "rawText": "level2-智能+應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 203,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 199,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "javascript:;"
    },
    {
      "label": "聯繫我們",
      "rawText": "level1-聯繫我們-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 187,
      "pagePath": "/contact/eform",
      "pageName": "/contact/eform",
      "url": "https://www.digiwin.com.tw/servicepoint"
    },
    {
      "label": "OT應用",
      "rawText": "level2-OT應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 181,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 173,
      "pagePath": "/dsc/solution/WB002839/AISM",
      "pageName": "SmartERP 中小企業 (smarterp.html)",
      "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 172,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "https://www.digiwin.com.tw/case#"
    },
    {
      "label": "應用領域",
      "rawText": "level2-應用領域-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 163,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "新零售",
      "rawText": "level2-新零售-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 160,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "雲平台/雲應用",
      "rawText": "level2-雲平台/雲應用-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 154,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "服務",
      "rawText": "level1-服務-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 141,
      "pagePath": "/dsc/project/ServiceCloud/ServiceCloud",
      "pageName": "/dsc/project/ServiceCloud/ServiceCloud",
      "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud"
    },
    {
      "label": "服務",
      "rawText": "level1-服務-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 139,
      "pagePath": "/case",
      "pageName": "/case",
      "url": "javascript:;"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 136,
      "pagePath": "/software/CM/CM",
      "pageName": "Cosmos ERP 流通業 (cosmos.html)",
      "url": "https://www.digiwin.com.tw/software/CM/CM#"
    },
    {
      "label": "行業",
      "rawText": "level1-行業-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 131,
      "pagePath": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "url": "javascript:;"
    },
    {
      "label": "了解智能+全方案",
      "rawText": "level2-了解智能+全方案-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 123,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    },
    {
      "label": "方案",
      "rawText": "level1-方案-old",
      "level": "Level 1",
      "template": "old",
      "clicks": 119,
      "pagePath": "/dsc/project/ServiceCloud/ServiceCloud",
      "pageName": "/dsc/project/ServiceCloud/ServiceCloud",
      "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#"
    },
    {
      "label": "流通業",
      "rawText": "level2-流通業-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 118,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "javascript:;"
    },
    {
      "label": "智働家族",
      "rawText": "level2-智働家族-old",
      "level": "Level 2",
      "template": "old",
      "clicks": 116,
      "pagePath": "/",
      "pageName": "首頁 (home.html)",
      "url": "https://www.digiwin.com.tw/#"
    }
  ],
  "pages": [
    {
      "path": "/",
      "pageName": "首頁 (home.html)",
      "totalClicks": 7949,
      "levelCounts": {
        "Level 1": 5370,
        "Level 2": 2065,
        "Level 3": 29,
        "Special": 485
      },
      "templateCounts": {
        "old": 7949,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 1",
          "template": "old",
          "clicks": 1379,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 838,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 656,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 619,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 555,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 538,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 398,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 388,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 387,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 331,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 326,
          "isSpecial": true
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 203,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 181,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 163,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 160,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 154,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 123,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 118,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "https://www.digiwin.com.tw/#",
          "level": "Level 2",
          "template": "old",
          "clicks": 116,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 83,
          "isSpecial": true
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 75,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 45,
          "isSpecial": false
        },
        {
          "rawText": "search-btn-old",
          "label": "search-btn",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 32,
          "isSpecial": true
        },
        {
          "rawText": "search-submit-old",
          "label": "search-submit",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 24,
          "isSpecial": true
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
          "rawText": "level3-時勢法規議題-old",
          "label": "時勢法規議題",
          "url": "javascript:;",
          "level": "Level 3",
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
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level3-智能+應用方案-old",
          "label": "智能+應用方案",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "行業方案-製造",
          "label": "行業方案-製造",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 6,
          "isSpecial": true
        },
        {
          "rawText": "level3-價值服務-old",
          "label": "價值服務",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "行業方案-電子光電",
          "label": "行業方案-電子光電",
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
        },
        {
          "rawText": "level3-其他行業總覽-old",
          "label": "其他行業總覽",
          "url": "javascript:;",
          "level": "Level 3",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "行業方案-機械",
          "label": "行業方案-機械",
          "url": "https://www.digiwin.com.tw/#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 68%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n全站訪客最熱衷於查看「行業方案」與「產品介紹」，代表新進站流量主要以尋找系統性的「行業解答」為主。建議在主頁面 Banner 及首屏顯眼處增加按行業導覽的區塊，幫助使用者直接分流至 Cosmos (流通)、Workflow (製造) 或 SmartERP (中小企業)。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 79490.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case",
      "pageName": "/case",
      "totalClicks": 1267,
      "levelCounts": {
        "Level 1": 930,
        "Level 2": 285,
        "Level 3": 0,
        "Special": 52
      },
      "templateCounts": {
        "old": 1267,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 207,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 199,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 1",
          "template": "old",
          "clicks": 172,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 139,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 79,
          "isSpecial": false
        },
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
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 2",
          "template": "old",
          "clicks": 52,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/case#",
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
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "old",
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/case#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 32,
          "isSpecial": true
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 2",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "javascript:;",
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
          "clicks": 20,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 2",
          "template": "old",
          "clicks": 20,
          "isSpecial": false
        },
        {
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "https://www.digiwin.com.tw/case#",
          "level": "Level 2",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "https://www.digiwin.com.tw/case#",
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
          "clicks": 7,
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
          "clicks": 6,
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 73%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 12670.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/WF/WF",
      "pageName": "Workflow ERP 製造業 (workflow.html)",
      "totalClicks": 949,
      "levelCounts": {
        "Level 1": 739,
        "Level 2": 176,
        "Level 3": 0,
        "Special": 34
      },
      "templateCounts": {
        "old": 949,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/WF/WF",
          "level": "Level 1",
          "template": "old",
          "clicks": 276,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 131,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 86,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 71,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 55,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 50,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/software/WF/WF#",
          "level": "Level 2",
          "template": "old",
          "clicks": 46,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 45,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 36,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 34,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/WF/WF#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 20,
          "isSpecial": true
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
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
          "clicks": 14,
          "isSpecial": true
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 8,
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
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 78%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n本頁面訪客高度關注「產品優勢」與「製造業 Workflow ERP」細項，顯示訪客均為目標明確的製造業相關人員，對「生產管理與排程控制」的實際功能著眼較深。建議主動推薦「智慧製造案例手冊」或「MES 廠內智能物流解方」來引導轉換。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 9490.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ServiceCloud/ServiceCloud",
      "pageName": "/dsc/project/ServiceCloud/ServiceCloud",
      "totalClicks": 821,
      "levelCounts": {
        "Level 1": 682,
        "Level 2": 114,
        "Level 3": 0,
        "Special": 25
      },
      "templateCounts": {
        "old": 821,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud",
          "level": "Level 1",
          "template": "old",
          "clicks": 141,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 1",
          "template": "old",
          "clicks": 119,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 94,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 75,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 75,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 66,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 60,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 52,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 28,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 2",
          "template": "old",
          "clicks": 23,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 2",
          "template": "old",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 14,
          "isSpecial": true
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
          "rawText": "level2-新零售-old",
          "label": "新零售",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 2",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "https://www.digiwin.com.tw/dsc/project/ServiceCloud/ServiceCloud#",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
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
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 83%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ServiceCloud/ServiceCloud 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 8210.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/contact/eform",
      "pageName": "/contact/eform",
      "totalClicks": 606,
      "levelCounts": {
        "Level 1": 525,
        "Level 2": 64,
        "Level 3": 0,
        "Special": 17
      },
      "templateCounts": {
        "old": 606,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/servicepoint",
          "level": "Level 1",
          "template": "old",
          "clicks": 187,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/contact/eform#",
          "level": "Level 1",
          "template": "old",
          "clicks": 92,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 54,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 51,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 45,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 41,
          "isSpecial": false
        },
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
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 26,
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
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 9,
          "isSpecial": true
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/contact/eform#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 8,
          "isSpecial": true
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
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
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
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 87%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /contact/eform 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 6060.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/AISM",
      "pageName": "SmartERP 中小企業 (smarterp.html)",
      "totalClicks": 592,
      "levelCounts": {
        "Level 1": 475,
        "Level 2": 96,
        "Level 3": 0,
        "Special": 21
      },
      "templateCounts": {
        "old": 592,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 173,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 89,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
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
          "clicks": 45,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "old",
          "clicks": 44,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 30,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM#",
          "level": "Level 1",
          "template": "old",
          "clicks": 27,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
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
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 12,
          "isSpecial": true
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 9,
          "isSpecial": true
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002899/WB00289901",
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
          "clicks": 7,
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
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
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
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-智働家族-old",
          "label": "智働家族",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 80%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n中小企業訪客強烈關注「應用場景」及「是否適合中小企業」，這表示訪客特別注重「導入時間成本」與「是否有同行成功案例」。建議在選單中為其提供一鍵抵達的「30天中小企業快速導入方案」說明頁。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 5920.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/aboutdsc",
      "pageName": "/aboutdsc",
      "totalClicks": 478,
      "levelCounts": {
        "Level 1": 448,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 30
      },
      "templateCounts": {
        "old": 0,
        "new": 478
      },
      "items": [
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "new",
          "clicks": 108,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "https://www.digiwin.com.tw/servicepoint",
          "level": "Level 1",
          "template": "new",
          "clicks": 93,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/aboutdsc#",
          "level": "Level 1",
          "template": "new",
          "clicks": 69,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/aboutdsc#",
          "level": "Level 1",
          "template": "new",
          "clicks": 61,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/aboutdsc#",
          "level": "Level 1",
          "template": "new",
          "clicks": 45,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "new",
          "clicks": 37,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "https://www.digiwin.com.tw/aboutdsc#",
          "level": "Level 1",
          "template": "new",
          "clicks": 35,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-new",
          "label": "phone-nav",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "new",
          "clicks": 20,
          "isSpecial": true
        },
        {
          "rawText": "logo-new",
          "label": "logo",
          "url": "https://www.digiwin.com.tw/images/logo.svg",
          "level": "Special",
          "template": "new",
          "clicks": 10,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 94%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /aboutdsc 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/CM/CM",
      "pageName": "Cosmos ERP 流通業 (cosmos.html)",
      "totalClicks": 406,
      "levelCounts": {
        "Level 1": 311,
        "Level 2": 85,
        "Level 3": 0,
        "Special": 10
      },
      "templateCounts": {
        "old": 406,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/CM/CM#",
          "level": "Level 1",
          "template": "old",
          "clicks": 136,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/software/CM/CM?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Level 1",
          "template": "old",
          "clicks": 58,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 44,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 35,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 25,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
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
          "clicks": 14,
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
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/software/CM/CM?campaign=02GS%E9%97%9C%E9%8D%B5%E7%94%A2%E5%93%81%E5%AD%97",
          "level": "Special",
          "template": "old",
          "clicks": 10,
          "isSpecial": true
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
          "rawText": "level2-流通業-old",
          "label": "流通業",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 77%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 Cosmos ERP 流通業 (cosmos.html) 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 4060.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ai-solution/private-ai",
      "pageName": "/dsc/project/ai-solution/private-ai",
      "totalClicks": 335,
      "levelCounts": {
        "Level 1": 228,
        "Level 2": 97,
        "Level 3": 0,
        "Special": 10
      },
      "templateCounts": {
        "old": 335,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 1",
          "template": "old",
          "clicks": 72,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/METIS/AIassist/index.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 63,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 1",
          "template": "old",
          "clicks": 41,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 40,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 1",
          "template": "old",
          "clicks": 29,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 20,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai?campaign=20GS-%E4%BC%81%E6%A5%ADAI%E5%",
          "level": "Level 2",
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
          "clicks": 11,
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
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
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
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 68%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ai-solution/private-ai 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 3350.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002783/WB00278301",
      "pageName": "/dsc/solution/WB002783/WB00278301",
      "totalClicks": 288,
      "levelCounts": {
        "Level 1": 238,
        "Level 2": 44,
        "Level 3": 0,
        "Special": 6
      },
      "templateCounts": {
        "old": 288,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301#",
          "level": "Level 1",
          "template": "old",
          "clicks": 68,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 41,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 34,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301#",
          "level": "Level 1",
          "template": "old",
          "clicks": 29,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 26,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 24,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 19,
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
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/METIS/AIassist/index.html",
          "level": "Level 2",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 6,
          "isSpecial": true
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
          "url": "(無目標網址)",
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
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 83%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002783/WB00278301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2880.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/index",
      "pageName": "/dsc/solution/WB002741/index",
      "totalClicks": 285,
      "levelCounts": {
        "Level 1": 214,
        "Level 2": 65,
        "Level 3": 0,
        "Special": 6
      },
      "templateCounts": {
        "old": 285,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002741/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 61,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002783/WB00278301",
          "level": "Level 1",
          "template": "old",
          "clicks": 42,
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
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
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
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 14,
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
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
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
          "clicks": 9,
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
          "rawText": "level2-新零售-old",
          "label": "新零售",
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
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
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
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 75%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2850.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/servicepoint",
      "pageName": "/servicepoint",
      "totalClicks": 284,
      "levelCounts": {
        "Level 1": 268,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 16
      },
      "templateCounts": {
        "old": 284,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 55,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "https://www.digiwin.com.tw/aboutdsc",
          "level": "Level 1",
          "template": "old",
          "clicks": 42,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 41,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 35,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 26,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 15,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/servicepoint#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 10,
          "isSpecial": true
        },
        {
          "rawText": "logo-old",
          "label": "logo",
          "url": "https://static.digiwin.com.tw/upload/admin/20241122/767198509feb8ceee16567f0876e38fa.png",
          "level": "Special",
          "template": "old",
          "clicks": 6,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 94%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /servicepoint 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2840.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002595/WB00259501",
      "pageName": "/dsc/solution/WB002595/WB00259501",
      "totalClicks": 237,
      "levelCounts": {
        "Level 1": 159,
        "Level 2": 67,
        "Level 3": 0,
        "Special": 11
      },
      "templateCounts": {
        "old": 237,
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
          "clicks": 33,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
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
          "clicks": 26,
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
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-雲平台/雲應用-old",
          "label": "雲平台/雲應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 8,
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
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 6,
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
          "rawText": "level2-了解智能+全方案-old",
          "label": "了解智能+全方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
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
        },
        {
          "rawText": "level2-流通業-old",
          "label": "流通業",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level2-其他行業-old",
          "label": "其他行業",
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
          "clicks": 4,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 67%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002595/WB00259501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2370.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/BPM/BPM",
      "pageName": "/software/BPM/BPM",
      "totalClicks": 236,
      "levelCounts": {
        "Level 1": 205,
        "Level 2": 7,
        "Level 3": 0,
        "Special": 24
      },
      "templateCounts": {
        "old": 236,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/BPM/BPM",
          "level": "Level 1",
          "template": "old",
          "clicks": 81,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 36,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
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
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 87%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/BPM/BPM 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 2360.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002899/WB00289901",
      "pageName": "/dsc/solution/WB002899/WB00289901",
      "totalClicks": 190,
      "levelCounts": {
        "Level 1": 180,
        "Level 2": 10,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 190,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 41,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "old",
          "clicks": 39,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 35,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
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
          "clicks": 11,
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
          "clicks": 10,
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
          "rawText": "level2-製造業-old",
          "label": "製造業",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 95%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002899/WB00289901 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1900.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/course",
      "pageName": "/course",
      "totalClicks": 147,
      "levelCounts": {
        "Level 1": 119,
        "Level 2": 20,
        "Level 3": 0,
        "Special": 8
      },
      "templateCounts": {
        "old": 147,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 27,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 18,
          "isSpecial": false
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
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
          "clicks": 14,
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
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
          "clicks": 6,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
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
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "search-btn-old",
          "label": "search-btn",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        },
        {
          "rawText": "search-submit-old",
          "label": "search-submit",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 81%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /course 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1470.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/search",
      "pageName": "/search",
      "totalClicks": 138,
      "levelCounts": {
        "Level 1": 107,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 31
      },
      "templateCounts": {
        "old": 138,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 21,
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
          "rawText": "search-submit-old",
          "label": "search-submit",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 16,
          "isSpecial": true
        },
        {
          "rawText": "search-btn-old",
          "label": "search-btn",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "old",
          "clicks": 15,
          "isSpecial": true
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
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
          "clicks": 14,
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
          "rawText": "level1-活動-old",
          "label": "活動",
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
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 78%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /search 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 1380.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/Agent-Space/index",
      "pageName": "/dsc/Agent-Space/index",
      "totalClicks": 132,
      "levelCounts": {
        "Level 1": 112,
        "Level 2": 15,
        "Level 3": 0,
        "Special": 5
      },
      "templateCounts": {
        "old": 54,
        "new": 78
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/Agent-Space/index#",
          "level": "Level 1",
          "template": "new",
          "clicks": 32,
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
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/dsc/Agent-Space/index#",
          "level": "Level 1",
          "template": "new",
          "clicks": 19,
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
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/Agent-Space/index#",
          "level": "Level 2",
          "template": "old",
          "clicks": 9,
          "isSpecial": false
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
          "rawText": "level2-產品與軟體-old",
          "label": "產品與軟體",
          "url": "javascript:;",
          "level": "Level 2",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 85%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/Agent-Space/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/service",
      "pageName": "/service",
      "totalClicks": 114,
      "levelCounts": {
        "Level 1": 102,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 12
      },
      "templateCounts": {
        "old": 0,
        "new": 114
      },
      "items": [
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "https://www.digiwin.com.tw/contact/eform",
          "level": "Level 1",
          "template": "new",
          "clicks": 43,
          "isSpecial": false
        },
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 17,
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
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 10,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 9,
          "isSpecial": false
        },
        {
          "rawText": "level1-關於-new",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 6,
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 89%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /service 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/index",
      "pageName": "/blog/index",
      "totalClicks": 95,
      "levelCounts": {
        "Level 1": 95,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 95,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "https://www.digiwin.com.tw/blog/index",
          "level": "Level 1",
          "template": "old",
          "clicks": 38,
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
          "rawText": "level1-服務-old",
          "label": "服務",
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
          "clicks": 7,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 950.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/696.html",
      "pageName": "/software/696.html",
      "totalClicks": 92,
      "levelCounts": {
        "Level 1": 92,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 92,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/696.html#",
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
          "clicks": 15,
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
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
          "rawText": "level1-活動-old",
          "label": "活動",
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
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/696.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 920.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/barcode",
      "pageName": "/dsc/solution/WB002839/barcode",
      "totalClicks": 90,
      "levelCounts": {
        "Level 1": 90,
        "Level 2": 0,
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
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/barcode?campaign=03GS%E5%BB%B6%E4%BC%B8%E7%94%A2%E5",
          "level": "Level 1",
          "template": "old",
          "clicks": 31,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 20,
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
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
          "rawText": "level1-活動-old",
          "label": "活動",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/barcode 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 900.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002553/WB00255301",
      "pageName": "/dsc/solution/WB002553/WB00255301",
      "totalClicks": 78,
      "levelCounts": {
        "Level 1": 67,
        "Level 2": 11,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 78,
        "new": 0
      },
      "items": [
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 16,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "old",
          "clicks": 14,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
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
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 86%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002553/WB00255301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 780.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/ESG/index",
      "pageName": "/dsc/project/ESG/index",
      "totalClicks": 67,
      "levelCounts": {
        "Level 1": 57,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 10
      },
      "templateCounts": {
        "old": 67,
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-old",
          "label": "phone-nav",
          "url": "https://www.digiwin.com.tw/dsc/project/ESG/index#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 6,
          "isSpecial": true
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
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
          "clicks": 4,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 85%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/ESG/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 670.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3581.html",
      "pageName": "/blog/erp/3581.html",
      "totalClicks": 66,
      "levelCounts": {
        "Level 1": 53,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 13
      },
      "templateCounts": {
        "old": 0,
        "new": 66
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/blog/erp/3581.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 18,
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
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 11,
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
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 6,
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 80%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3581.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/resources",
      "pageName": "/resources",
      "totalClicks": 56,
      "levelCounts": {
        "Level 1": 49,
        "Level 2": 7,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 56,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
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
          "clicks": 7,
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
          "rawText": "level1-案例-old",
          "label": "案例",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 88%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /resources 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 560.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002675/WB00267501",
      "pageName": "/dsc/solution/WB002675/WB00267501",
      "totalClicks": 54,
      "levelCounts": {
        "Level 1": 37,
        "Level 2": 17,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 54,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "javascript:;",
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
          "clicks": 13,
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
          "clicks": 7,
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
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
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 69%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002675/WB00267501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 540.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/news",
      "pageName": "/news",
      "totalClicks": 51,
      "levelCounts": {
        "Level 1": 51,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 51,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 19,
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
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 7,
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
          "rawText": "level1-行業-old",
          "label": "行業",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /news 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 510.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/industry4/smartFactory",
      "pageName": "/dsc/industry4/smartFactory",
      "totalClicks": 51,
      "levelCounts": {
        "Level 1": 51,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 51
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/industry4/smartFactory",
          "level": "Level 1",
          "template": "new",
          "clicks": 22,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-new",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
          "level": "Level 1",
          "template": "new",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-活動與學習-new",
          "label": "活動與學習",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/industry4/smartFactory 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002476/WB00247601",
      "pageName": "/dsc/solution/WB002476/WB00247601",
      "totalClicks": 44,
      "levelCounts": {
        "Level 1": 40,
        "Level 2": 4,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 44,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002476/WB00247601#",
          "level": "Level 1",
          "template": "old",
          "clicks": 18,
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
        },
        {
          "rawText": "level2-應用領域-old",
          "label": "應用領域",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 91%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002476/WB00247601 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 440.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/case",
      "pageName": "/dsc/solution/WB002741/case",
      "totalClicks": 44,
      "levelCounts": {
        "Level 1": 44,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 44,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002741/case#",
          "level": "Level 1",
          "template": "old",
          "clicks": 13,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "https://www.digiwin.com.tw/case",
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
          "clicks": 8,
          "isSpecial": false
        },
        {
          "rawText": "level1-知識-old",
          "label": "知識",
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/case 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 440.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/activity",
      "pageName": "/activity",
      "totalClicks": 43,
      "levelCounts": {
        "Level 1": 43,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 43,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-知識-old",
          "label": "知識",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 33,
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
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /activity 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 430.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/708.html",
      "pageName": "/software/708.html",
      "totalClicks": 40,
      "levelCounts": {
        "Level 1": 35,
        "Level 2": 5,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 40,
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
          "clicks": 11,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 88%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/708.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 400.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/shift",
      "pageName": "/dsc/solution/WB002741/shift",
      "totalClicks": 40,
      "levelCounts": {
        "Level 1": 40,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 40,
        "new": 0
      },
      "items": [
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
          "rawText": "level1-案例-old",
          "label": "案例",
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
          "rawText": "level1-方案-old",
          "label": "方案",
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/shift 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 400.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/WB002940/index",
      "pageName": "/dsc/project/WB002940/index",
      "totalClicks": 38,
      "levelCounts": {
        "Level 1": 23,
        "Level 2": 9,
        "Level 3": 0,
        "Special": 6
      },
      "templateCounts": {
        "old": 38,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/project/WB002940/index#",
          "level": "Level 1",
          "template": "old",
          "clicks": 19,
          "isSpecial": false
        },
        {
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 9,
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
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 61%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/WB002940/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 380.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3247.html",
      "pageName": "/blog/erp/3247.html",
      "totalClicks": 35,
      "levelCounts": {
        "Level 1": 28,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 7
      },
      "templateCounts": {
        "old": 0,
        "new": 35
      },
      "items": [
        {
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
          "level": "Level 1",
          "template": "new",
          "clicks": 17,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 7,
          "isSpecial": false
        },
        {
          "rawText": "phone-nav-new",
          "label": "phone-nav",
          "url": "(無目標網址)",
          "level": "Special",
          "template": "new",
          "clicks": 7,
          "isSpecial": true
        },
        {
          "rawText": "level1-聯絡我們-new",
          "label": "聯絡我們",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 80%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3247.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/717.html",
      "pageName": "/software/717.html",
      "totalClicks": 32,
      "levelCounts": {
        "Level 1": 22,
        "Level 2": 10,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 32,
        "new": 0
      },
      "items": [
        {
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/708.html",
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
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 69%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/717.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 320.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/PLM/index",
      "pageName": "/software/PLM/index",
      "totalClicks": 32,
      "levelCounts": {
        "Level 1": 32,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 32,
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
          "clicks": 7,
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/PLM/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 320.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002972/index",
      "pageName": "/dsc/solution/WB002972/index",
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
          "clicks": 7,
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002972/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 310.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002675/WB00267501_1",
      "pageName": "/dsc/solution/WB002675/WB00267501_1",
      "totalClicks": 30,
      "levelCounts": {
        "Level 1": 21,
        "Level 2": 9,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 30,
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
          "rawText": "level2-智能+應用-old",
          "label": "智能+應用",
          "url": "(無目標網址)",
          "level": "Level 2",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 70%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002675/WB00267501_1 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 300.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
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
      "path": "/dsc/solution/WB002521/WB00252103",
      "pageName": "/dsc/solution/WB002521/WB00252103",
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/AISM",
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
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002521/WB00252103 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 250.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002741/mobile",
      "pageName": "/dsc/solution/WB002741/mobile",
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
          "clicks": 6,
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/mobile 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 240.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/710.html",
      "pageName": "/software/710.html",
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "javascript:;",
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
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/710.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 230.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/ERP/financial",
      "pageName": "/ERP/financial",
      "totalClicks": 22,
      "levelCounts": {
        "Level 1": 22,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 22,
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /ERP/financial 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 220.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software",
      "pageName": "/software",
      "totalClicks": 20,
      "levelCounts": {
        "Level 1": 20,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 0,
        "new": 20
      },
      "items": [
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
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 10,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002554/WB00255401",
      "pageName": "/dsc/solution/WB002554/WB00255401",
      "totalClicks": 18,
      "levelCounts": {
        "Level 1": 18,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 18,
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002554/WB00255401 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 180.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/solution/ListDetail5983",
      "pageName": "/solution/ListDetail5983",
      "totalClicks": 18,
      "levelCounts": {
        "Level 1": 18,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 18,
        "new": 0
      },
      "items": [
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /solution/ListDetail5983 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 180.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/solution",
      "pageName": "/dsc/solution/WB002839/solution",
      "totalClicks": 18,
      "levelCounts": {
        "Level 1": 18,
        "Level 2": 0,
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/solution 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 180.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/METIS/ChatFile/index",
      "pageName": "/dsc/METIS/ChatFile/index",
      "totalClicks": 17,
      "levelCounts": {
        "Level 1": 7,
        "Level 2": 10,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 17,
        "new": 0
      },
      "items": [
        {
          "rawText": "level2-AI 解決方案-old",
          "label": "AI 解決方案",
          "url": "https://www.digiwin.com.tw/dsc/project/ai-solution/private-ai",
          "level": "Level 2",
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
          "clicks": 7,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 41%, L2: 59%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/METIS/ChatFile/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 170.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
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
      "path": "/dsc/solution/WB002785/WB00278501",
      "pageName": "/dsc/solution/WB002785/WB00278501",
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002785/WB00278501#",
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002785/WB00278501 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 150.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/merchandise",
      "pageName": "/dsc/solution/WB002839/merchandise",
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/merchandise#",
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
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/merchandise 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 150.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
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
      "path": "/dsc/solution/article/informationsecurity",
      "pageName": "/dsc/solution/article/informationsecurity",
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
          "rawText": "level1-關於-old",
          "label": "關於",
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
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/article/informationsecurity 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 130.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/721.html",
      "pageName": "/software/721.html",
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
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/721.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 130.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/digiwinathena/index",
      "pageName": "/dsc/project/digiwinathena/index",
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
          "clicks": 5,
          "isSpecial": false
        },
        {
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/digiwinathena/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 130.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003302/v2/index",
      "pageName": "/dsc/solution/WB003302/v2/index",
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
          "rawText": "level1-行業-old",
          "label": "行業",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 12,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003302/v2/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 120.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/10/index/3337.html",
      "pageName": "/blog/10/index/3337.html",
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
          "url": "https://www.digiwin.com.tw/blog/10/index/3337.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-服務-new",
          "label": "服務",
          "url": "https://www.digiwin.com.tw/blog/10/index/3337.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        },
        {
          "rawText": "level1-行業-new",
          "label": "行業",
          "url": "https://www.digiwin.com.tw/blog/10/index/3337.html#",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/10/index/3337.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002899/solution",
      "pageName": "/dsc/solution/WB002899/solution",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002899/solution 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 110.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/software/731.html",
      "pageName": "/software/731.html",
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
          "rawText": "level1-方案-old",
          "label": "方案",
          "url": "https://www.digiwin.com.tw/software/731.html#",
          "level": "Level 1",
          "template": "old",
          "clicks": 11,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /software/731.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 110.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/solution/ListDetail5945",
      "pageName": "/solution/ListDetail5945",
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
          "rawText": "level1-案例-old",
          "label": "案例",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /solution/ListDetail5945 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 110.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
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
      "path": "/video",
      "pageName": "/video",
      "totalClicks": 10,
      "levelCounts": {
        "Level 1": 5,
        "Level 2": 5,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 10,
        "new": 0
      },
      "items": [
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
          "rawText": "level2-OT應用-old",
          "label": "OT應用",
          "url": "javascript:;",
          "level": "Level 2",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 50%, L2: 50%, L3: 0%, 特殊: 0%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /video 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 100.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/service/WB002736/WB00273601",
      "pageName": "/dsc/service/WB002736/WB00273601",
      "totalClicks": 9,
      "levelCounts": {
        "Level 1": 9,
        "Level 2": 0,
        "Level 3": 0,
        "Special": 0
      },
      "templateCounts": {
        "old": 9,
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
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/service/WB002736/WB00273601 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 90.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002476/industry",
      "pageName": "/dsc/solution/WB002476/industry",
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
          "rawText": "level1-案例-old",
          "label": "案例",
          "url": "(無目標網址)",
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
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002476/industry 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 80.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002811/WB00281101",
      "pageName": "/dsc/solution/WB002811/WB00281101",
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
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002811/WB00281101#",
          "level": "Level 1",
          "template": "old",
          "clicks": 8,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002811/WB00281101 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 80.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
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
      "path": "/dsc/solution/WB002741/health",
      "pageName": "/dsc/solution/WB002741/health",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002741/health 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002839/manufacture",
      "pageName": "/dsc/solution/WB002839/manufacture",
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
          "url": "https://www.digiwin.com.tw/dsc/solution/WB002839/manufacture#",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002839/manufacture 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB003006/index",
      "pageName": "/dsc/solution/WB003006/index",
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
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB003006/index 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/enewspaper",
      "pageName": "/enewspaper",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /enewspaper 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/userservice",
      "pageName": "/userservice",
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
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 6,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /userservice 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 60.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/about/prizes",
      "pageName": "/about/prizes",
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
          "rawText": "level1-關於-old",
          "label": "關於",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /about/prizes 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
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
      "path": "/dsc/solution/WB002899/operation",
      "pageName": "/dsc/solution/WB002899/operation",
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
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002899/operation 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002953/WB00295301",
      "pageName": "/dsc/solution/WB002953/WB00295301",
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
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002953/WB00295301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/solution/ListDetail5982",
      "pageName": "/solution/ListDetail5982",
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
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 5,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /solution/ListDetail5982 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 50.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/10/index/3354.html",
      "pageName": "/blog/10/index/3354.html",
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
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/10/index/3354.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/blog/erp/3623.html",
      "pageName": "/blog/erp/3623.html",
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
          "rawText": "level1-方案-new",
          "label": "方案",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "new",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /blog/erp/3623.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **推進新模板全面上線**：新版選單模板點擊狀況優良，對使用者引導效果顯著。建議將其他尚在使用 Old 樣式的舊頁面全面更新為新模板配置。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case/1372.html",
      "pageName": "/case/1372.html",
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
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "(無目標網址)",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case/1372.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/case/3560.html",
      "pageName": "/case/3560.html",
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
          "url": "https://www.digiwin.com.tw/case/3560.html#mmenu",
          "level": "Special",
          "template": "old",
          "clicks": 4,
          "isSpecial": true
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**優良：選單層級分佈均衡（L1: 0%, L2: 0%, L3: 0%, 特殊: 100%）**。訪客點擊均勻分佈在各大主要層級，代表導覽命名精確且層級深度符合行為預期。 此外，**特殊功能按鈕（佔 100%）點擊偏高**（如行動版選單按鈕或客服專線），顯示訪客對於即時通聯或行動端瀏覽介面需求極高，應特別優化行動端 `mmenu` 的載入速度與觸控操作體驗。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /case/3560.html 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/project/sFWR/sFWR",
      "pageName": "/dsc/project/sFWR/sFWR",
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
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/project/sFWR/sFWR 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/service/WB002736/WB00273601_repair",
      "pageName": "/dsc/service/WB002736/WB00273601_repair",
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
          "rawText": "level1-聯繫我們-old",
          "label": "聯繫我們",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/service/WB002736/WB00273601_repair 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002513/WB00251301",
      "pageName": "/dsc/solution/WB002513/WB00251301",
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
          "rawText": "level1-服務-old",
          "label": "服務",
          "url": "javascript:;",
          "level": "Level 1",
          "template": "old",
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002513/WB00251301 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    },
    {
      "path": "/dsc/solution/WB002711/WB00271101",
      "pageName": "/dsc/solution/WB002711/WB00271101",
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
          "clicks": 4,
          "isSpecial": false
        }
      ],
      "aiReport": "### 📊 選單好用度評估 (Usability Review)\n**良好：分類入口清晰，但下探意願偏低（Level 1 點擊佔比 100%）**。訪客大多點擊第一層分類，而點入第二、三層細項的次數偏少。可能原因是下拉式選單在部分瀏覽器懸停展開不夠流暢，或是子選單文字視覺對比度低、導引性差。建議微調 CSS 懸停延遲，或增加箭頭圖示導引選單展開。\n\n### 🧠 使用者意圖預測 (User Intent Prediction)\n該路徑 /dsc/solution/WB002711/WB00271101 的訪客主要關注與選單文字相關的具體細分業務，應根據點擊量最高的選單項目提供對應的直達落地頁或案例展示。\n\n### 💡 建議改善方法 (Actionable Recommendations)\n- **優化選單樣式**：數據顯示**舊版選單樣式 (Old) 點擊率為新版 (New) 的 40.0 倍**。這通常是由於舊版文字對比度較高或排版更符合既有用戶習慣。建議檢查新舊選單 CSS 樣式，將新版選單（New）的背景對比與懸停動效進行微調以防流量流失。\n- **精簡無效連結**：建議將點擊率長年為 0 的 Level 3 項目進行整併或隱藏，縮短下拉選單的高度，防止選單過長造成滑鼠操作不便而移出。\n- **統一 GTM 事件命名**：建議在未來版本中將所有 GTM Event 內雜亂或無 data-gtm-text 的特殊按鈕（如 `link:#mmenu`）統一重新命名為標準命名（例如 `menu-mobile-open`），以方便數據回填與更直覺的商業分析。\n"
    }
  ]
};