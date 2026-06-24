document.addEventListener('DOMContentLoaded', () => {
  // 1. Gather all clicked and redundant elements in page
  const clickedElements = Array.from(document.querySelectorAll('[data-clicks]'))
    .map(el => {
      const clicks = parseInt(el.getAttribute('data-clicks') || '0', 10);
      const text = el.getAttribute('data-gtm-text') || el.innerText.trim() || el.getAttribute('placeholder') || el.name || 'Unnamed Element';
      return { el, clicks, text, tag: el.tagName.toLowerCase() };
    })
    .filter(item => item.clicks > 0)
    .sort((a, b) => b.clicks - a.clicks);

  const redundantElements = Array.from(document.querySelectorAll('[data-redundant="true"]'))
    .map(el => {
      const text = el.getAttribute('data-gtm-text') || el.innerText.trim() || el.getAttribute('placeholder') || el.name || 'Unnamed Element';
      return { el, text, tag: el.tagName.toLowerCase() };
    });

  const totalClicks = clickedElements.reduce((sum, item) => sum + item.clicks, 0);

  // 2. Render overlays (Badges) on clicked elements
  clickedElements.forEach((item, index) => {
    // Add clicked class
    item.el.classList.add('ga-clicked-element');
    
    // Choose intensity class
    let intensity = 'ga-cold';
    let badgeClass = 'badge-cold';
    if (item.clicks >= 100) {
      intensity = 'ga-hot';
      badgeClass = 'badge-hot';
    } else if (item.clicks >= 20) {
      intensity = 'ga-med';
      badgeClass = 'badge-med';
    }
    item.el.classList.add(intensity);

    // Make sure parent doesn't clip badge
    if (getComputedStyle(item.el).overflow === 'hidden') {
      item.el.style.overflow = 'visible';
    }

    // Create badge
    const badge = document.createElement('span');
    badge.className = `ga-click-badge ${badgeClass}`;
    badge.innerText = item.clicks;
    badge.title = `Click Count: ${item.clicks}\nText: ${item.text}`;
    
    // Clicking badge flashes the item
    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      flashElement(item.el);
    });

    item.el.appendChild(badge);
  });

  // Helper function to flash highlights on elements
  function flashElement(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('ga-flash-active');
    setTimeout(() => {
      el.classList.remove('ga-flash-active');
    }, 1600);
  }

  // 3. Create Visualizer Sidebar Panel
  const panel = document.createElement('div');
  panel.id = 'ga-visualizer-panel';
  panel.className = ''; // Open by default

  const title = document.title.split('：')[0] || document.title.split('|')[0] || '本頁';

  panel.innerHTML = `
    <div class="ga-panel-header">
      <h3 class="ga-panel-title">📊 GA4 Click Visualizer</h3>
      <button class="ga-panel-close" id="ga-panel-close-btn">&times;</button>
    </div>
    <div class="ga-panel-body">
      <h4 style="margin-top:0; margin-bottom: 12px; font-size:15px; color:#ffffff;">${title}</h4>
      
      <!-- Stats Grid -->
      <div class="ga-stat-grid">
        <div class="ga-stat-card">
          <div class="ga-stat-label">總點擊次數</div>
          <div class="ga-stat-val" style="color: #ff8a00;">${totalClicks}</div>
        </div>
        <div class="ga-stat-card">
          <div class="ga-stat-label">熱點元素</div>
          <div class="ga-stat-val" style="color: #e52e71;">${clickedElements.length}</div>
        </div>
      </div>
      
      <!-- Control Settings -->
      <div class="ga-control-group">
        <label class="ga-control-label">
          <input type="checkbox" id="ga-toggle-badges" checked>
          顯示點擊熱圖標記 (Badges)
        </label>
      </div>

      <!-- Tab Navigation -->
      <div class="ga-panel-tabs">
        <button class="ga-tab-btn active" id="ga-tab-key">關鍵元素 (${clickedElements.length})</button>
        <button class="ga-tab-btn" id="ga-tab-redundant">多餘元素 (${redundantElements.length})</button>
      </div>

      <!-- Tab 1: Key Elements -->
      <div class="ga-element-list active" id="ga-list-key">
        ${clickedElements.length === 0 ? '<div class="ga-empty-msg">此頁無點擊數據</div>' : ''}
        ${clickedElements.map((item, idx) => {
          let badgeColor = 'count-cold';
          if (item.clicks >= 100) badgeColor = 'count-hot';
          else if (item.clicks >= 20) badgeColor = 'count-med';
          
          return `
            <div class="ga-list-item" data-idx="${idx}">
              <div class="ga-item-details">
                <div class="ga-item-text" title="${item.text}">${item.text}</div>
                <div class="ga-item-tag">${item.tag}</div>
              </div>
              <div class="ga-item-count ${badgeColor}">${item.clicks}</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Tab 2: Redundant Elements -->
      <div class="ga-element-list" id="ga-list-redundant">
        ${redundantElements.length === 0 ? '<div class="ga-empty-msg">無多餘互動元素</div>' : ''}
        ${redundantElements.map((item, idx) => `
          <div class="ga-list-item" data-ridx="${idx}">
            <div class="ga-item-details">
              <div class="ga-item-text" title="${item.text}">${item.text}</div>
              <div class="ga-item-tag">${item.tag}</div>
            </div>
            <div class="ga-item-count count-zero">0</div>
          </div>
        `).join('')}
      </div>
      
      <!-- Back to Dashboard -->
      <div style="margin-top: 24px; text-align: center;">
        <a href="../dashboard.html" style="font-size: 13px; color: #ff8a00; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
          ← 返回全站數據儀表板
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(panel);

  // 4. Create Floating Trigger Button (when panel is collapsed)
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'ga-visualizer-toggle';
  toggleBtn.style.display = 'none'; // Hidden when panel is open
  toggleBtn.innerHTML = '📈';
  toggleBtn.title = '開啟數據面板';
  document.body.appendChild(toggleBtn);

  // 5. Wire up panel toggle events
  const closeBtn = document.getElementById('ga-panel-close-btn');
  closeBtn.addEventListener('click', () => {
    panel.classList.add('collapsed');
    toggleBtn.style.display = 'flex';
  });

  toggleBtn.addEventListener('click', () => {
    panel.classList.remove('collapsed');
    toggleBtn.style.display = 'none';
  });

  // Toggle Badges checkbox
  const toggleBadgesCheckbox = document.getElementById('ga-toggle-badges');
  toggleBadgesCheckbox.addEventListener('change', (e) => {
    const badges = document.querySelectorAll('.ga-click-badge');
    const display = e.target.checked ? 'flex' : 'none';
    badges.forEach(badge => {
      badge.style.display = display;
    });
    
    // Also remove glow borders if badges are hidden
    const elements = document.querySelectorAll('.ga-clicked-element');
    elements.forEach(el => {
      if (e.target.checked) {
        let intensity = 'ga-cold';
        if (parseInt(el.getAttribute('data-clicks') || '0', 10) >= 100) intensity = 'ga-hot';
        else if (parseInt(el.getAttribute('data-clicks') || '0', 10) >= 20) intensity = 'ga-med';
        el.classList.add(intensity);
      } else {
        el.classList.remove('ga-hot', 'ga-med', 'ga-cold');
      }
    });
  });

  // Tab switching
  const tabKey = document.getElementById('ga-tab-key');
  const tabRedundant = document.getElementById('ga-tab-redundant');
  const listKey = document.getElementById('ga-list-key');
  const listRedundant = document.getElementById('ga-list-redundant');

  tabKey.addEventListener('click', () => {
    tabKey.classList.add('active');
    tabRedundant.classList.remove('active');
    listKey.classList.add('active');
    listRedundant.classList.remove('active');
  });

  tabRedundant.addEventListener('click', () => {
    tabRedundant.classList.add('active');
    tabKey.classList.remove('active');
    listRedundant.classList.add('active');
    listKey.classList.remove('active');
  });

  // Click on list item highlights element
  listKey.addEventListener('click', (e) => {
    const item = e.target.closest('.ga-list-item');
    if (!item) return;
    const idx = parseInt(item.getAttribute('data-idx'), 10);
    if (clickedElements[idx]) {
      flashElement(clickedElements[idx].el);
    }
  });

  listRedundant.addEventListener('click', (e) => {
    const item = e.target.closest('.ga-list-item');
    if (!item) return;
    const idx = parseInt(item.getAttribute('data-ridx'), 10);
    if (redundantElements[idx]) {
      flashElement(redundantElements[idx].el);
    }
  });
});
