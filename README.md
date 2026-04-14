# 點擊反應速度測試站

這是一個純靜態的反應速度測試網站，參考常見的 reaction test 互動流程實作：

- 使用者按下開始後，等待紅色測試區隨機切換為綠色。
- 畫面變綠時點擊，記錄單次反應時間。
- 完成多輪後計算平均值與最快成績。
- 頁面已預留橫幅與側邊廣告區，方便接自己的 AdSense。

## 本地預覽

在目前資料夾執行：

```bash
python3 -m http.server 8000
```

接著打開 `http://localhost:8000`

## AdSense 接法

1. 申請並通過自己的 Google AdSense 帳號審核。
2. 把 `index.html` 內 `<head>` 的 AdSense script 註解打開，替換成你的 `ca-pub-...`。
3. 把頁面中的廣告預留區塊改成你的廣告單元，例如：

```html
<ins
  class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
  data-ad-slot="1234567890"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## 部署

可直接部署到任何靜態網站服務，例如：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 注意

- 廣告收益只會進入你自己的 AdSense 帳號，不會因為版面長得像別人就共享收益。
- 如果你要長期經營，建議再補上隱私權政策、Cookie 說明與自訂網域，這些通常有助於廣告審核。
