# 點擊反應速度測試站

這是一個純靜態的反應速度測試網站，參考常見的 reaction test 互動流程實作：

- 使用者按下開始後，等待紅色測試區隨機切換為綠色。
- 畫面變綠時點擊，記錄單次反應時間。
- 完成多輪後計算平均值與最快成績。
- 頁面已預留橫幅、側邊與底部內容型廣告/變現區，方便接自己的 AdSense。

## 本地預覽

在目前資料夾執行：

```bash
python3 -m http.server 8000
```

接著打開 `http://localhost:8000`

## AdSense 接法

1. 申請並通過自己的 Google AdSense 帳號審核。
2. 在 AdSense 建立 4 個顯示廣告單元，分別對應 Hero、Sidebar、底部第一區、底部第二區。
3. 打開 `adsense-config.js`，填入你的 Publisher ID 與 4 個廣告單元 slot ID。

```js
window.REACTION_ADSENSE_CONFIG = {
  publisherId: "ca-pub-1234567890123456",
  slots: {
    heroBanner: "1234567890",
    sidebarRectangle: "2345678901",
    contentPrimary: "3456789012",
    contentSecondary: "4567890123",
  },
};
```

沒有填入真實 ID 前，網站只會顯示佔位區，不會送出 AdSense 廣告請求。

## 部署

可直接部署到任何靜態網站服務，例如：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 注意

- 廣告收益只會進入你自己的 AdSense 帳號，不會因為版面長得像別人就共享收益。
- 如果你要長期經營，建議再補上隱私權政策、Cookie 說明與自訂網域，這些通常有助於廣告審核。
