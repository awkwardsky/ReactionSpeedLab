# Reaction Speed Lab 技術架構文檔

## 專案概覽

Reaction Speed Lab 是一個純靜態前端專案，用原生 HTML、CSS、JavaScript 實作點擊反應速度測試。專案不依賴 npm、打包工具或後端服務，瀏覽器直接載入 `index.html`、`styles.css`、`script.js` 即可運作。

主要功能包含：

- 多輪反應速度測試，支援 3、5、10、15、20 輪。
- 紅色等待、綠色點擊、過早點擊失敗重試的互動流程。
- 平均反應時間、最快成績與表現評語。
- SVG 趨勢圖與 Canvas 分享圖片。
- 繁體中文、英文、日文、韓文四語系。
- 淺色與深色主題，偏好保存在 `localStorage`。
- 預留 AdSense 橫幅、側邊與底部內容型廣告/變現版位。
- 簡易隱私權政策頁。

## 檔案結構

```text
ReactionSpeedLab/
├── index.html       # 主頁入口與 DOM 結構
├── privacy.html     # 隱私權政策頁
├── styles.css       # 全站樣式、主題變數、響應式版面
├── script.js        # 測試邏輯、多語系、主題、分享與圖表
├── README.md        # 使用、預覽、AdSense 與部署說明
└── ARCHITECTURE.md  # 本技術架構文檔
```

## 技術棧

- HTML5：頁面結構、SEO meta、Open Graph meta、互動區域標記。
- CSS3：CSS custom properties、Grid/Flex layout、media queries、`color-mix()`、`dvh`。
- Vanilla JavaScript：DOM 操作、狀態管理、計時、事件處理、Canvas、Web Share API。
- Browser Storage：使用 `localStorage` 保存語言與主題偏好。
- 靜態部署：可直接部署到 Vercel、Netlify、GitHub Pages、Cloudflare Pages 等服務。

## 頁面與 DOM 架構

`index.html` 是應用主入口，頁面由以下區塊組成：

- `head`：包含基本 SEO、Open Graph、Google Fonts、樣式載入，以及已註解的 AdSense script 範例。
- `.topbar`：主題切換按鈕與語言選單。
- `.hero`：品牌標題與上方 728 x 90 廣告預留區。
- `.layout`：主測試面板與右側資訊欄。
- `.tester-panel`：反應測試區、分享/重置按鈕、結果卡與趨勢圖。
- `.sidebar`：玩法說明、反應表現參考、300 x 250 廣告預留區。
- `.content-grid`：底部兩個文字型廣告/變現區塊。
- `.site-footer`：版權與隱私權政策連結。

`script.js` 透過固定 id 與 class 查找 DOM 元素，因此 HTML 結構中的 `#test-area`、`#attempts`、`#language-select`、`#share-button`、`#average-time`、`#trend-chart-svg` 等節點屬於功能依賴點。調整 HTML 時要同步確認 JS selector。

## JavaScript 架構

`script.js` 採單檔集中式設計，主要分成七個責任區：

1. `translations`
   - 管理四語系文案、SEO meta、按鈕文字、結果評語、分享文案與格式化函式。
   - `t()` 會依 `state.language` 取出目前語言，找不到時回退繁體中文。

2. `state`
   - 管理測試流程與 UI 偏好。
   - 重要欄位包含 `phase`、`totalRounds`、`currentRound`、`startedAt`、`timeoutId`、`results`、`countdownRemaining`、`lastReactionMs`、`language`、`theme`。

3. DOM 快取
   - 啟動時用 `document.querySelector()` 快取所有互動節點。
   - 後續渲染函式直接更新這些節點，沒有使用框架或虛擬 DOM。

4. 靜態文案與主題渲染
   - `updateStaticCopy()` 更新語言、title、meta、列表、選項與所有 `data-i18n` 文案。
   - `applyTheme()` 切換 `body.theme-dark` / `body.theme-light`，並更新主題按鈕 icon、`aria-label`、`title`。

5. 測試流程控制
   - `beginTest()` 初始化一輪完整測試。
   - `scheduleRound()` 進入等待狀態，隨機延遲後切成可點擊狀態。
   - `handleAreaPointerDown()` 處理開始、過早點擊、有效點擊與完成判斷。
   - `startNextRoundCountdown()` 與 `startFaultCountdown()` 處理下一輪倒數或失敗倒數。
   - `resetTest()` 清除計時器與結果，恢復 idle 狀態。

6. 結果與圖表
   - `getStats()` 計算平均與最佳成績。
   - `scoreReaction()` 依平均反應時間回傳等級評語。
   - `renderResults()` 更新結果卡、分享按鈕狀態與完成狀態。
   - `renderTrendChart()` 直接產生 SVG polyline、節點與標籤，插入 `#trend-chart-svg`。

7. 分享圖片
   - `buildShareBlob()` 用 Canvas 產出 1200 x 1500 PNG。
   - `drawShareChart()` 在分享圖中繪製成績趨勢。
   - `shareResult()` 優先使用 Web Share API 分享檔案；不支援時退回下載；若下載不可用則嘗試開新分頁。

## 核心狀態流程

測試流程由 `state.phase` 驅動：

```text
idle
  └─ 使用者點擊測試區
      ↓
waiting
  ├─ 太早點擊 → fault → 倒數結束 → waiting
  └─ 隨機延遲到期 → ready
                         ↓
ready
  └─ 使用者點擊 → 記錄 elapsed ms → renderResults()
      ├─ 未完成全部輪數 → countdown → waiting
      └─ 完成全部輪數 → finished

finished
  └─ 再次點擊測試區 → beginTest() → waiting
```

計時方式：

- 等待延遲由 `getRandomDelay()` 回傳，區間分布約為 900-5600ms。
- 畫面切成 ready 後，透過 `requestAnimationFrame()` 設定 `state.startedAt = performance.now()`。
- 使用者有效點擊時，以 `Math.round(performance.now() - state.startedAt)` 得到單次反應時間。

## 樣式架構

`styles.css` 以 CSS 變數作為設計 token，`:root` 定義淺色主題，`body.theme-dark` 覆寫深色主題。主要 token 包含：

- 色彩：`--bg`、`--paper`、`--ink`、`--muted`、`--surface`、`--accent`、`--danger`、`--warning`。
- 邊框與陰影：`--line`、`--card-border`、`--shadow`。
- 圓角：`--radius-xl`、`--radius-lg`、`--radius-md`。

主要版面：

- `.page-shell` 控制最大寬度與頁面外距。
- `.hero`、`.layout`、`.content-grid` 使用 CSS Grid。
- `.tester-panel` 包含測試區、結果卡與趨勢圖。
- `.test-area.is-idle`、`.is-waiting`、`.is-ready`、`.is-fault`、`.is-pause` 對應測試狀態色彩。
- `body.is-focus-mode` 會隱藏頂部、hero、側欄、結果卡、按鈕與 footer，讓測試區全螢幕化，避免測試時分心。

響應式策略：

- `max-width: 920px`：hero、主內容、內容卡片改為單欄。
- `max-width: 640px`：縮小頁面 padding、卡片 padding，按鈕與 footer 改為垂直排列，測試區文字尺寸固定到較適合手機的大小。

## 多語系機制

多語系資料集中在 `translations` 物件，每個語系需要提供同一組 key。語言切換流程如下：

1. 使用者改變 `#language-select`。
2. `applyLanguage(language)` 更新 `state.language`。
3. 語言偏好寫入 `localStorage.reaction-language`。
4. `updateStaticCopy()` 更新 HTML lang、document title、meta、靜態文字與列表。
5. 依目前 `state.phase` 重新渲染測試區與結果區。

新增語系時，需要：

- 在 `translations` 增加新語系物件。
- 在 `index.html` 的 `#language-select` 增加 option。
- 確認 `attemptOption()`、`roundFormat()`、`shareSummary()` 等函式型文案都有實作。

## 主題機制

主題目前支援 `light` 與 `dark`：

- 初始值來自 `localStorage.reaction-theme`，沒有資料時預設 `light`。
- `applyTheme(theme)` 會正規化輸入，只接受 `dark`，其他值都視為 `light`。
- 主題狀態透過 `body.theme-dark` 與 `body.theme-light` class 反映到 CSS。
- icon 是 JS 內嵌 SVG 字串，不依賴外部 icon 套件。

## 資料保存與隱私

目前不會將測試成績永久保存，也沒有送出任何測試結果到後端。瀏覽器本地端只保存：

- `reaction-language`：使用者選擇的語言。
- `reaction-theme`：使用者選擇的主題。

若日後接入 AdSense 或分析工具，需要同步更新 `privacy.html`，補上實際第三方服務、Cookie 使用、資料請求方式與聯絡資訊。

## 廣告整合點

專案已預留四個廣告/變現區塊：

- Hero 右側或上方橫幅：`index.html` 內標示 728 x 90。
- Sidebar 矩形廣告：`index.html` 內標示 300 x 250。
- Content Grid 第一張文字卡：目前顯示「為什麼這個頁面適合放廣告」。
- Content Grid 第二張文字卡：目前顯示「變現提醒」。

`index.html` 的 `head` 已放置註解版 AdSense script 範例。正式接入時需要：

1. 替換成自己的 `ca-pub-...`。
2. 將需要接廣告的區塊改成 Google AdSense 提供的 `<ins class="adsbygoogle">`，或保留底部兩張卡作為內容型廣告/導流文案。
3. 確認隱私權政策與 Cookie 說明符合實際使用情境。

## 本地開發與部署

本地預覽可在專案根目錄執行：

```bash
python3 -m http.server 8000
```

接著開啟：

```text
http://localhost:8000
```

部署時不需要 build step，直接上傳專案根目錄即可。建議部署時至少包含：

- `index.html`
- `privacy.html`
- `styles.css`
- `script.js`

## 維護注意事項

- 調整 HTML id/class 前，先檢查 `script.js` 是否有對應 selector。
- 新增測試狀態時，要同步更新 `state.phase` 流程、`setAreaState()` 呼叫與 `.test-area.is-*` 樣式。
- 新增語系時，所有 `translations` key 都要補齊，避免 UI 顯示 `undefined`。
- 分享圖片的趨勢圖與頁面上的 SVG 趨勢圖是兩套繪製邏輯，調整視覺時要同時檢查 `renderTrendChart()` 與 `drawShareChart()`。
- `renderList()` 目前直接用 `innerHTML` 插入翻譯內容。現有文案都是本地靜態資料；若未來改成遠端 CMS 或使用者輸入，需改用安全的 DOM 建立方式。
- `color-mix()` 屬於較新的 CSS 功能；若要支援非常舊的瀏覽器，需要補 fallback。
