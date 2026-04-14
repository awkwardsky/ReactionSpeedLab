const translations = {
  "zh-Hant": {
    htmlLang: "zh-Hant",
    pageTitle: "點擊反應速度測試",
    metaDescription: "免費測試你的點擊反應速度。等待畫面變綠後立即點擊，完成多輪測試後取得平均反應時間與成績評語。",
    ogTitle: "點擊反應速度測試",
    ogDescription: "紅色待命、綠色點擊，快速測出你的平均反應速度。",
    heroTitle: "Reaction Speed Lab",
    heroSubtitle: "點擊反應速度測試",
    adLabel: "廣告區",
    heroAdText: "這裡可放 AdSense 橫幅廣告",
    attemptsLabelPrefix: "想要測試",
    attemptsLabelSuffix: "取平均值",
    languageLabel: "語言切換",
    shareButton: "分享成績",
    resetButton: "清除所有資料",
    resultsLabel: "測試結果",
    averageLabel: "平均反應",
    bestLabel: "最快一次",
    howToPlayLabel: "玩法說明",
    howToPlayItems: [
      "規則很簡單：等待測試區從紅色切換成綠色，立刻點一下。完成多輪後會自動計算平均反應時間。",
      "按下開始後，測試區會先維持紅色等待。",
      "當畫面變成綠色時，立刻點擊一次。",
      "太早點擊會重置當輪並提示你重來。",
    ],
    rankingLabel: "反應表現參考",
    rankingItems: [
      "140ms 內：頂尖",
      "141-190ms：非常快",
      "191-250ms：高於平均",
      "251-320ms：平均範圍",
      "321ms 以上：可再練習",
    ],
    rankingNote: "年齡參考",
    rankingAgeItems: [
      "0-15 歲：約 250-300 ms",
      "16-25 歲：約 200-250 ms",
      "26-35 歲：約 220-270 ms",
      "36-45 歲：約 240-300 ms",
      "46-55 歲：約 270-350 ms",
      "56-65 歲：約 300-400 ms",
    ],
    sideAdText: "可替換成側邊矩形廣告",
    monetizeWhyLabel: "為什麼這個頁面適合放廣告",
    monetizeWhyText: "反應測試頁停留時間通常不短，使用者會反覆挑戰多輪。這種單頁型互動站很適合放上方橫幅、側欄矩形與結果區下方原生廣告。",
    monetizeNoteLabel: "變現提醒",
    monetizeNoteText: "廣告收益要進你自己的帳號，必須用你自己的網域、AdSense 帳號與廣告單元 ID。單純複製別人的版面，不會讓收益流到你這邊。",
    privacyLink: "隱私權政策",
    footerCopy: "© 2026 Reaction Speed Lab",
    idlePhase: "準備開始",
    idleMessage: "點這裡開始測試",
    idleHint: "畫面變綠時立刻點擊",
    resultIdleTitle: "等待開始",
    resultIdleDescription: "完成全部輪數後，這裡會顯示你的等級與建議。",
    trendChartEmpty: "完成測試後，這裡會顯示反應趨勢。",
    resultInProgressTitle: "測試進行中",
    resultInProgressDescription: "等待畫面變綠，過早點擊會重置當輪。",
    resultNextRoundDescription: "保持專注，下一輪會在隨機時間後開始。",
    completedPhase: "測試完成",
    completedHint: "點擊重新測試",
    shareTitle: "我的反應速度成績",
    shareSummary: (average, best) => `平均 ${average} ms · 最快 ${best} ms`,
    shareFooter: "Reaction Speed Lab",
    shareFileName: "reaction-speed-result.png",
    averagePrefix: "平均",
    waitingMessage: "等待變綠",
    waitingHint: "現在先不要點",
    readyMessage: "立刻點擊",
    readyHint: "現在按一下",
    roundCapturedPhase: "本輪結果",
    countdownHint: (value) => `下一輪倒數 ${value}`,
    tooSoonPhase: "本輪失敗",
    tooSoonMessage: "點太早了",
    roundFormat: (current, total) => `第 ${current} / ${total} 輪`,
    progressFormat: (current, total) => `${current} / ${total}`,
    averageTimeFormat: (value) => `${value} ms`,
    bestTimeFormat: (value) => `${value} ms`,
    attemptLabel: (index) => `第 ${index} 次`,
    attemptOption: (value) => `${value}次`,
    scores: {
      elite: { title: "頂尖反應", description: "你的反應速度非常快，屬於高水準表現。" },
      fast: { title: "非常快", description: "表現明顯優於一般玩家，節奏判斷很俐落。" },
      aboveAverage: { title: "高於平均", description: "你的反應速度穩定，已經超過多數人的日常水平。" },
      average: { title: "平均範圍", description: "這是常見範圍，多練幾次通常還能再下降一些。" },
      practice: { title: "還有進步空間", description: "建議持續多測幾輪，熟悉節奏後通常會更快。" },
    },
  },
  en: {
    htmlLang: "en",
    pageTitle: "Reaction Speed Test",
    metaDescription: "Test your click reaction speed for free. Click as soon as the screen turns green and get your average reaction time after multiple rounds.",
    ogTitle: "Reaction Speed Test",
    ogDescription: "Wait on red, click on green, and measure your reaction speed in seconds.",
    heroTitle: "Reaction Speed Lab",
    heroSubtitle: "Reaction Speed Test",
    adLabel: "Ad Space",
    heroAdText: "Place an AdSense banner here",
    attemptsLabelPrefix: "Use",
    attemptsLabelSuffix: "for the average",
    languageLabel: "Language",
    shareButton: "Share Result",
    resetButton: "Clear All Data",
    resultsLabel: "Results",
    averageLabel: "Average",
    bestLabel: "Best Time",
    howToPlayLabel: "How To Play",
    howToPlayItems: [
      "The rule is simple: wait until the test area changes from red to green, then click immediately. After several rounds, the page calculates your average reaction time automatically.",
      "After you start, the test area stays red for a short random delay.",
      "Click once as soon as the area turns green.",
      "Clicking too early resets that round and makes you try again.",
    ],
    rankingLabel: "Score Guide",
    rankingItems: [
      "140ms or less: Elite",
      "141-190ms: Very fast",
      "191-250ms: Above average",
      "251-320ms: Average range",
      "321ms or more: Needs practice",
    ],
    rankingNote: "Age Reference",
    rankingAgeItems: [
      "Ages 0-15: about 250-300 ms",
      "Ages 16-25: about 200-250 ms",
      "Ages 26-35: about 220-270 ms",
      "Ages 36-45: about 240-300 ms",
      "Ages 46-55: about 270-350 ms",
      "Ages 56-65: about 300-400 ms",
    ],
    sideAdText: "Swap this for a sidebar rectangle ad",
    monetizeWhyLabel: "Why This Page Fits Ads",
    monetizeWhyText: "Reaction test pages usually keep people engaged for multiple rounds. That makes this kind of single-page interaction a strong fit for top banners, sidebar rectangles, and native ads below the results.",
    monetizeNoteLabel: "Monetization Note",
    monetizeNoteText: "Ad revenue only goes to your own account. You need your own domain, AdSense account, and ad unit IDs. Copying someone else's layout does not route earnings to you.",
    privacyLink: "Privacy Policy",
    footerCopy: "© 2026 Reaction Speed Lab",
    idlePhase: "Ready",
    idleMessage: "Tap here to start",
    idleHint: "Click as soon as it turns green",
    resultIdleTitle: "Waiting To Start",
    resultIdleDescription: "Your rank and feedback will appear here after all rounds are complete.",
    trendChartEmpty: "Your reaction trend will appear here after you complete the test.",
    resultInProgressTitle: "Test In Progress",
    resultInProgressDescription: "Wait for the screen to turn green. Clicking early resets the round.",
    resultNextRoundDescription: "Stay focused. The next round starts after a random delay.",
    completedPhase: "Finished",
    completedHint: "Tap to test again",
    shareTitle: "My Reaction Speed Result",
    shareSummary: (average, best) => `Average ${average} ms · Best ${best} ms`,
    shareFooter: "Reaction Speed Lab",
    shareFileName: "reaction-speed-result.png",
    averagePrefix: "Average",
    waitingMessage: "Wait for green",
    waitingHint: "Do not click yet",
    readyMessage: "Click now",
    readyHint: "Tap once right away",
    roundCapturedPhase: "Round Result",
    countdownHint: (value) => `Next round in ${value}`,
    tooSoonPhase: "Round Failed",
    tooSoonMessage: "Too early",
    roundFormat: (current, total) => `Round ${current} / ${total}`,
    progressFormat: (current, total) => `${current} / ${total}`,
    averageTimeFormat: (value) => `${value} ms`,
    bestTimeFormat: (value) => `${value} ms`,
    attemptLabel: (index) => `Attempt ${index}`,
    attemptOption: (value) => `${value} rounds`,
    scores: {
      elite: { title: "Elite Reaction", description: "Your reaction speed is excellent and clearly high-level." },
      fast: { title: "Very Fast", description: "You are performing well above the typical range with sharp timing." },
      aboveAverage: { title: "Above Average", description: "Your reaction speed is steady and already better than most casual results." },
      average: { title: "Average Range", description: "This is a common range. A few more tries will often bring it down." },
      practice: { title: "Room To Improve", description: "Keep testing for a few more rounds. Familiar rhythm usually helps." },
    },
  },
  ja: {
    htmlLang: "ja",
    pageTitle: "クリック反応速度テスト",
    metaDescription: "クリック反応速度を無料で計測できます。画面が緑に変わった瞬間にクリックして、複数回の平均反応時間を確認できます。",
    ogTitle: "クリック反応速度テスト",
    ogDescription: "赤で待機し、緑になったらクリック。平均反応速度をすばやく測定できます。",
    heroTitle: "Reaction Speed Lab",
    heroSubtitle: "クリック反応速度テスト",
    adLabel: "広告エリア",
    heroAdText: "ここに AdSense バナーを配置できます",
    attemptsLabelPrefix: "平均値を出すために",
    attemptsLabelSuffix: "で平均を取る",
    languageLabel: "言語",
    shareButton: "結果を共有",
    resetButton: "すべてのデータを削除",
    resultsLabel: "テスト結果",
    averageLabel: "平均反応",
    bestLabel: "最速記録",
    howToPlayLabel: "遊び方",
    howToPlayItems: [
      "ルールは簡単です。テストエリアが赤から緑に変わったら、すぐにクリックしてください。複数回終了後、平均反応時間が自動計算されます。",
      "開始を押すと、テストエリアは少しの間赤のまま待機します。",
      "エリアが緑に変わった瞬間に一度クリックしてください。",
      "早押しするとそのラウンドはリセットされ、やり直しになります。",
    ],
    rankingLabel: "評価基準",
    rankingItems: [
      "140ms以内: トップクラス",
      "141-190ms: とても速い",
      "191-250ms: 平均以上",
      "251-320ms: 平均範囲",
      "321ms以上: まだ伸びる",
    ],
    rankingNote: "年齢別の目安",
    rankingAgeItems: [
      "0-15歳: 約 250-300 ms",
      "16-25歳: 約 200-250 ms",
      "26-35歳: 約 220-270 ms",
      "36-45歳: 約 240-300 ms",
      "46-55歳: 約 270-350 ms",
      "56-65歳: 約 300-400 ms",
    ],
    sideAdText: "サイドバー矩形広告に置き換え可能",
    monetizeWhyLabel: "このページが広告向きな理由",
    monetizeWhyText: "反応速度テストのページは複数回挑戦されやすく、滞在時間も比較的長めです。そのため、上部バナー、サイドバー矩形、結果下のネイティブ広告と相性が良い構成です。",
    monetizeNoteLabel: "収益化メモ",
    monetizeNoteText: "広告収益は自分のアカウントにしか入りません。自分のドメイン、AdSense アカウント、広告ユニット ID が必要です。見た目を真似しても収益は移りません。",
    privacyLink: "プライバシーポリシー",
    footerCopy: "© 2026 Reaction Speed Lab",
    idlePhase: "準備完了",
    idleMessage: "ここを押して開始",
    idleHint: "緑になったらすぐクリック",
    resultIdleTitle: "開始待ち",
    resultIdleDescription: "すべてのラウンドが終わると、ここに評価とコメントが表示されます。",
    trendChartEmpty: "テスト完了後、ここに反応の推移が表示されます。",
    resultInProgressTitle: "テスト進行中",
    resultInProgressDescription: "画面が緑になるまで待ってください。早押しするとそのラウンドがリセットされます。",
    resultNextRoundDescription: "集中を保ってください。次のラウンドはランダムな待ち時間のあとに始まります。",
    completedPhase: "テスト完了",
    completedHint: "クリックして再テスト",
    shareTitle: "反応速度テスト結果",
    shareSummary: (average, best) => `平均 ${average} ms ・ 最速 ${best} ms`,
    shareFooter: "Reaction Speed Lab",
    shareFileName: "reaction-speed-result.png",
    averagePrefix: "平均",
    waitingMessage: "緑になるまで待機",
    waitingHint: "まだクリックしないでください",
    readyMessage: "今すぐクリック",
    readyHint: "すぐに1回押してください",
    roundCapturedPhase: "今回の結果",
    countdownHint: (value) => `次のラウンドまで ${value}`,
    tooSoonPhase: "この回は失敗",
    tooSoonMessage: "早押しです",
    roundFormat: (current, total) => `${current} / ${total} ラウンド`,
    progressFormat: (current, total) => `${current} / ${total}`,
    averageTimeFormat: (value) => `${value} ms`,
    bestTimeFormat: (value) => `${value} ms`,
    attemptLabel: (index) => `${index}回目`,
    attemptOption: (value) => `${value}回`,
    scores: {
      elite: { title: "トップクラス", description: "反応速度は非常に速く、高水準の結果です。" },
      fast: { title: "とても速い", description: "一般的な範囲よりかなり速く、タイミングも鋭いです。" },
      aboveAverage: { title: "平均以上", description: "安定していて、多くの人の普段の記録より優れています。" },
      average: { title: "平均範囲", description: "よく見られる範囲です。数回試すとさらに縮まることがあります." },
      practice: { title: "まだ伸びる", description: "何回か続けて測ると、リズムに慣れて速くなることがあります。" },
    },
  },
  ko: {
    htmlLang: "ko",
    pageTitle: "클릭 반응속도 테스트",
    metaDescription: "무료로 클릭 반응속도를 측정해 보세요. 화면이 초록색으로 바뀌는 순간 클릭하면 여러 번의 평균 반응 시간을 확인할 수 있습니다.",
    ogTitle: "클릭 반응속도 테스트",
    ogDescription: "빨간 화면에서 기다렸다가 초록색이 되면 클릭해 평균 반응속도를 측정하세요.",
    heroTitle: "Reaction Speed Lab",
    heroSubtitle: "클릭 반응속도 테스트",
    adLabel: "광고 영역",
    heroAdText: "여기에 AdSense 배너를 넣을 수 있습니다",
    attemptsLabelPrefix: "평균값을 위해",
    attemptsLabelSuffix: "평균값 내기",
    languageLabel: "언어",
    shareButton: "결과 공유",
    resetButton: "모든 데이터 지우기",
    resultsLabel: "테스트 결과",
    averageLabel: "평균 반응",
    bestLabel: "최고 기록",
    howToPlayLabel: "플레이 방법",
    howToPlayItems: [
      "규칙은 간단합니다. 테스트 영역이 빨간색에서 초록색으로 바뀌면 바로 클릭하세요. 여러 라운드를 마치면 평균 반응 시간이 자동으로 계산됩니다.",
      "시작을 누르면 테스트 영역이 잠시 빨간색으로 유지됩니다.",
      "영역이 초록색으로 바뀌는 즉시 한 번 클릭하세요.",
      "너무 빨리 클릭하면 해당 라운드는 초기화되고 다시 시작됩니다.",
    ],
    rankingLabel: "등급 기준",
    rankingItems: [
      "140ms 이하: 최상급",
      "141-190ms: 매우 빠름",
      "191-250ms: 평균 이상",
      "251-320ms: 평균 범위",
      "321ms 이상: 더 연습 가능",
    ],
    rankingNote: "연령대 참고",
    rankingAgeItems: [
      "0-15세: 약 250-300 ms",
      "16-25세: 약 200-250 ms",
      "26-35세: 약 220-270 ms",
      "36-45세: 약 240-300 ms",
      "46-55세: 약 270-350 ms",
      "56-65세: 약 300-400 ms",
    ],
    sideAdText: "사이드바 직사각형 광고로 교체 가능",
    monetizeWhyLabel: "이 페이지가 광고에 맞는 이유",
    monetizeWhyText: "반응속도 테스트 페이지는 사용자가 여러 번 반복 도전하는 경우가 많아 체류 시간이 짧지 않습니다. 그래서 상단 배너, 사이드바 직사각형, 결과 아래 네이티브 광고와 잘 맞습니다.",
    monetizeNoteLabel: "수익화 안내",
    monetizeNoteText: "광고 수익은 본인 계정으로만 들어갑니다. 본인 도메인, AdSense 계정, 광고 단위 ID가 필요합니다. 다른 사람의 레이아웃을 복사해도 수익이 넘어오지 않습니다.",
    privacyLink: "개인정보 처리방침",
    footerCopy: "© 2026 Reaction Speed Lab",
    idlePhase: "준비 완료",
    idleMessage: "여기를 눌러 시작",
    idleHint: "초록색이 되면 바로 클릭",
    resultIdleTitle: "시작 대기",
    resultIdleDescription: "모든 라운드가 끝나면 여기에 등급과 안내가 표시됩니다.",
    trendChartEmpty: "테스트를 마치면 여기에 반응 추이가 표시됩니다.",
    resultInProgressTitle: "테스트 진행 중",
    resultInProgressDescription: "화면이 초록색으로 바뀔 때까지 기다리세요. 너무 일찍 클릭하면 라운드가 초기화됩니다.",
    resultNextRoundDescription: "집중을 유지하세요. 다음 라운드는 무작위 대기 후 시작됩니다.",
    completedPhase: "테스트 완료",
    completedHint: "눌러서 다시 테스트",
    shareTitle: "반응속도 테스트 결과",
    shareSummary: (average, best) => `평균 ${average} ms · 최고 ${best} ms`,
    shareFooter: "Reaction Speed Lab",
    shareFileName: "reaction-speed-result.png",
    averagePrefix: "평균",
    waitingMessage: "초록색을 기다리세요",
    waitingHint: "아직 클릭하지 마세요",
    readyMessage: "지금 클릭",
    readyHint: "바로 한 번 누르세요",
    roundCapturedPhase: "이번 결과",
    countdownHint: (value) => `다음 라운드까지 ${value}`,
    tooSoonPhase: "이번 라운드 실패",
    tooSoonMessage: "너무 빨랐습니다",
    roundFormat: (current, total) => `${current} / ${total} 라운드`,
    progressFormat: (current, total) => `${current} / ${total}`,
    averageTimeFormat: (value) => `${value} ms`,
    bestTimeFormat: (value) => `${value} ms`,
    attemptLabel: (index) => `${index}회차`,
    attemptOption: (value) => `${value}회`,
    scores: {
      elite: { title: "최상급", description: "반응속도가 매우 빠르며 높은 수준의 기록입니다." },
      fast: { title: "매우 빠름", description: "일반적인 범위보다 확실히 빠르고 타이밍도 좋습니다." },
      aboveAverage: { title: "평균 이상", description: "반응이 안정적이며 대부분의 일반 기록보다 좋습니다." },
      average: { title: "평균 범위", description: "흔히 볼 수 있는 범위입니다. 몇 번 더 하면 더 줄어들 수 있습니다." },
      practice: { title: "더 좋아질 수 있음", description: "몇 라운드 더 측정하면 리듬에 익숙해져 더 빨라질 수 있습니다." },
    },
  },
};

const state = {
  phase: "idle",
  totalRounds: 5,
  currentRound: 0,
  startedAt: 0,
  timeoutId: null,
  results: [],
  countdownRemaining: 0,
  lastReactionMs: null,
  language: localStorage.getItem("reaction-language") || "zh-Hant",
};

const testArea = document.querySelector("#test-area");
const testAreaToolbar = document.querySelector(".test-area-toolbar");
const shareButton = document.querySelector("#share-button");
const resetButton = document.querySelector("#reset-button");
const attemptsSelect = document.querySelector("#attempts");
const languageSelect = document.querySelector("#language-select");
const averageTime = document.querySelector("#average-time");
const bestTime = document.querySelector("#best-time");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const trendChart = document.querySelector("#trend-chart");
const trendChartEmpty = document.querySelector("#trend-chart-empty");
const trendChartSvg = document.querySelector("#trend-chart-svg");
const pageTitle = document.querySelector("#page-title");
const metaDescription = document.querySelector("#meta-description");
const ogTitle = document.querySelector("#og-title");
const ogDescription = document.querySelector("#og-description");
const heroTitle = document.querySelector("#hero-title");
const heroSubtitle = document.querySelector("#hero-subtitle");
const howToPlayList = document.querySelector("#how-to-play-list");
const rankingGuide = document.querySelector("#ranking-guide");
const rankingNote = document.querySelector("#ranking-note");
const rankingAgeGuide = document.querySelector("#ranking-age-guide");
const monetizeWhyText = document.querySelector("#monetize-why-text");
const monetizeNoteText = document.querySelector("#monetize-note-text");
const footerCopy = document.querySelector("#footer-copy");
const privacyLink = document.querySelector("#privacy-link");

function t() {
  return translations[state.language] || translations["zh-Hant"];
}

function renderList(container, items) {
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function updateStaticCopy() {
  const copy = t();
  document.documentElement.lang = copy.htmlLang;
  document.title = copy.pageTitle;
  pageTitle.textContent = copy.pageTitle;
  metaDescription.setAttribute("content", copy.metaDescription);
  ogTitle.setAttribute("content", copy.ogTitle);
  ogDescription.setAttribute("content", copy.ogDescription);
  heroTitle.textContent = copy.heroTitle;
  heroSubtitle.textContent = copy.heroSubtitle;
  monetizeWhyText.textContent = copy.monetizeWhyText;
  monetizeNoteText.textContent = copy.monetizeNoteText;
  rankingNote.textContent = copy.rankingNote;
  footerCopy.textContent = copy.footerCopy;
  privacyLink.textContent = copy.privacyLink;
  trendChartEmpty.textContent = copy.trendChartEmpty;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = copy[key];
  });

  renderList(howToPlayList, copy.howToPlayItems);
  renderList(rankingGuide, copy.rankingItems);
  renderList(rankingAgeGuide, copy.rankingAgeItems);

  Array.from(attemptsSelect.options).forEach((option) => {
    option.textContent = copy.attemptOption(option.value);
  });
}

function formatProgress(current, total) {
  return t().progressFormat(current, total);
}

function setFocusMode(active) {
  document.body.classList.toggle("is-focus-mode", active);
}

function updateToolbarVisibility(mode) {
  testAreaToolbar.hidden = mode !== "idle";
}

function getStats() {
  if (!state.results.length) {
    return null;
  }

  const total = state.results.reduce((sum, item) => sum + item, 0);
  const average = Math.round(total / state.results.length);
  const best = Math.min(...state.results);
  return { average, best };
}

function updateShareButtonState() {
  shareButton.disabled = !state.results.length;
}

function setAreaState(mode, phase, message, hint) {
  testArea.className = `test-area is-${mode}`;
  updateToolbarVisibility(mode);
  testArea.querySelector(".phase").textContent = phase;
  testArea.querySelector(".message").textContent = message;
  testArea.querySelector(".hint").textContent = hint;
}

function scoreReaction(ms) {
  const scores = t().scores;

  if (ms <= 140) {
    return scores.elite;
  }

  if (ms <= 190) {
    return scores.fast;
  }

  if (ms <= 250) {
    return scores.aboveAverage;
  }

  if (ms <= 320) {
    return scores.average;
  }

  return scores.practice;
}

function renderTrendChart() {
  if (!state.results.length) {
    trendChart.classList.remove("has-data");
    trendChartSvg.innerHTML = "";
    return;
  }

  const width = 640;
  const height = 220;
  const paddingX = 26;
  const paddingTop = 18;
  const paddingBottom = 30;
  const minValue = Math.min(...state.results);
  const maxValue = Math.max(...state.results);
  const range = Math.max(maxValue - minValue, 40);
  const stepX = state.results.length === 1 ? 0 : (width - paddingX * 2) / (state.results.length - 1);

  const points = state.results.map((value, index) => {
    const x = paddingX + stepX * index;
    const y =
      paddingTop +
      ((maxValue - value) / range) * (height - paddingTop - paddingBottom);

    return { x, y, value, index: index + 1 };
  });

  const polylinePoints = points.map((point) => `${point.x},${point.y}`).join(" ");
  const guides = [0, 0.5, 1]
    .map((ratio) => {
      const y = paddingTop + (height - paddingTop - paddingBottom) * ratio;
      return `<line x1="${paddingX}" y1="${y}" x2="${width - paddingX}" y2="${y}" stroke="rgba(31, 26, 23, 0.10)" stroke-width="1" />`;
    })
    .join("");

  const labels = points
    .map((point) => {
      const textY = Math.max(point.y - 10, 14);
      return `
        <circle cx="${point.x}" cy="${point.y}" r="5" fill="#0f766e" />
        <text x="${point.x}" y="${textY}" text-anchor="middle" font-size="12" fill="#6d635b">${point.value}ms</text>
        <text x="${point.x}" y="${height - 8}" text-anchor="middle" font-size="12" fill="#6d635b">${point.index}</text>
      `;
    })
    .join("");

  trendChart.classList.add("has-data");
  trendChartSvg.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" rx="12" fill="rgba(255,255,255,0.72)" />
    ${guides}
    <polyline fill="none" stroke="#0f766e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" points="${polylinePoints}" />
    ${labels}
  `;
}

function drawShareChart(context, x, y, width, height) {
  if (!state.results.length) {
    return;
  }

  const minValue = Math.min(...state.results);
  const maxValue = Math.max(...state.results);
  const range = Math.max(maxValue - minValue, 40);
  const stepX = state.results.length === 1 ? 0 : width / (state.results.length - 1);

  const points = state.results.map((value, index) => {
    const pointX = x + stepX * index;
    const pointY = y + ((maxValue - value) / range) * height;
    return { x: pointX, y: pointY, value, index: index + 1 };
  });

  context.save();
  context.strokeStyle = "rgba(31, 26, 23, 0.12)";
  context.lineWidth = 1;
  [0, 0.5, 1].forEach((ratio) => {
    const guideY = y + height * ratio;
    context.beginPath();
    context.moveTo(x, guideY);
    context.lineTo(x + width, guideY);
    context.stroke();
  });

  context.strokeStyle = "#0f766e";
  context.lineWidth = 5;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.beginPath();
  points.forEach((point, index) => {
    if (index === 0) {
      context.moveTo(point.x, point.y);
    } else {
      context.lineTo(point.x, point.y);
    }
  });
  context.stroke();

  context.fillStyle = "#0f766e";
  points.forEach((point) => {
    context.beginPath();
    context.arc(point.x, point.y, 5, 0, Math.PI * 2);
    context.fill();
  });

  context.fillStyle = "#6d635b";
  context.font = '500 16px "Space Grotesk", "Noto Sans TC", sans-serif';
  context.textAlign = "center";
  points.forEach((point) => {
    context.fillText(`${point.value} ms`, point.x, Math.max(point.y - 14, y - 8));
    context.fillText(`${point.index}`, point.x, y + height + 28);
  });
  context.restore();
}

async function buildShareBlob() {
  const stats = getStats();
  if (!stats) {
    return null;
  }

  const copy = t();
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1500;
  const context = canvas.getContext("2d");

  context.fillStyle = "#f7f2e8";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(255, 190, 92, 0.24)");
  gradient.addColorStop(1, "rgba(15, 118, 110, 0.08)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "rgba(255, 252, 245, 0.94)";
  roundRect(context, 72, 72, canvas.width - 144, canvas.height - 144, 42);
  context.fill();

  context.fillStyle = "#6d635b";
  context.font = '700 30px "Noto Sans TC", sans-serif';
  context.fillText(copy.shareTitle, 120, 170);

  context.fillStyle = "#1f1a17";
  context.font = '700 128px "Space Grotesk", "Noto Sans TC", sans-serif';
  context.fillText(copy.averageTimeFormat(stats.average), 120, 360);

  context.fillStyle = "#6d635b";
  context.font = '600 42px "Noto Sans TC", sans-serif';
  context.fillText(copy.shareSummary(stats.average, stats.best), 120, 430);

  context.fillStyle = "white";
  roundRect(context, 120, 500, canvas.width - 240, 520, 36);
  context.fill();

  drawShareChart(context, 170, 590, canvas.width - 340, 320);

  context.fillStyle = "#6d635b";
  context.font = '500 28px "Noto Sans TC", sans-serif';
  context.fillText(copy.footerCopy || copy.shareFooter, 120, canvas.height - 180);

  return await new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

async function shareResult() {
  const blob = await buildShareBlob();
  if (!blob) {
    return;
  }

  const copy = t();
  const file = new File([blob], copy.shareFileName, { type: "image/png" });

  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    await navigator.share({
      title: copy.shareTitle,
      text: copy.shareSummary(getStats().average, getStats().best),
      files: [file],
    });
    return;
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = copy.shareFileName;
  link.click();
  URL.revokeObjectURL(url);
}

function renderCountdownState() {
  if (state.lastReactionMs == null) {
    return;
  }

  const copy = t();
  setAreaState(
    "pause",
    copy.roundCapturedPhase,
    copy.bestTimeFormat(state.lastReactionMs),
    copy.countdownHint(state.countdownRemaining)
  );
}

function startNextRoundCountdown(elapsed) {
  state.phase = "countdown";
  state.lastReactionMs = elapsed;
  state.countdownRemaining = 3;
  renderCountdownState();

  const tick = () => {
    if (state.countdownRemaining <= 1) {
      state.countdownRemaining = 0;
      state.lastReactionMs = null;
      scheduleRound();
      return;
    }

    state.countdownRemaining -= 1;
    renderCountdownState();
    state.timeoutId = window.setTimeout(tick, 1000);
  };

  state.timeoutId = window.setTimeout(tick, 1000);
}

function startFaultCountdown() {
  state.phase = "fault";
  state.lastReactionMs = null;
  state.countdownRemaining = 3;
  setAreaState("fault", t().tooSoonPhase, t().tooSoonMessage, t().countdownHint(state.countdownRemaining));

  const tick = () => {
    if (state.countdownRemaining <= 1) {
      state.countdownRemaining = 0;
      scheduleRound();
      return;
    }

    state.countdownRemaining -= 1;
    setAreaState("fault", t().tooSoonPhase, t().tooSoonMessage, t().countdownHint(state.countdownRemaining));
    state.timeoutId = window.setTimeout(tick, 1000);
  };

  state.timeoutId = window.setTimeout(tick, 1000);
}

function resetResultsView() {
  const copy = t();
  averageTime.textContent = "-- ms";
  bestTime.textContent = "-- ms";
  resultTitle.textContent = copy.resultIdleTitle;
  resultDescription.textContent = copy.resultIdleDescription;
  trendChartEmpty.textContent = copy.trendChartEmpty;
  renderTrendChart();
  updateShareButtonState();
}

function clearPendingTimeout() {
  if (state.timeoutId) {
    window.clearTimeout(state.timeoutId);
    state.timeoutId = null;
  }
}

function resetTest() {
  clearPendingTimeout();
  setFocusMode(false);
  state.phase = "idle";
  state.currentRound = 0;
  state.results = [];
  state.startedAt = 0;
  state.countdownRemaining = 0;
  state.lastReactionMs = null;
  state.totalRounds = Number(attemptsSelect.value);
  setAreaState("idle", t().idlePhase, t().idleMessage, t().idleHint);
  resetResultsView();
}

function getRandomDelay() {
  const roll = Math.random();

  if (roll < 0.2) {
    return 900 + Math.random() * 800;
  }

  if (roll < 0.8) {
    return 1600 + Math.random() * 2200;
  }

  return 3800 + Math.random() * 1800;
}

function renderResults() {
  const copy = t();

  if (!state.results.length) {
    return;
  }

  const total = state.results.reduce((sum, item) => sum + item, 0);
  const average = Math.round(total / state.results.length);
  const best = Math.min(...state.results);

  averageTime.textContent = copy.averageTimeFormat(average);
  bestTime.textContent = copy.bestTimeFormat(best);
  renderTrendChart();
  updateShareButtonState();

  if (state.results.length === state.totalRounds) {
    const score = scoreReaction(average);
    resultTitle.textContent = score.title;
    resultDescription.textContent = score.description;
    state.lastReactionMs = null;
    state.countdownRemaining = 0;
    setFocusMode(false);
    setAreaState("idle", copy.completedPhase, `${copy.averagePrefix} ${average} ms`, copy.completedHint);
    state.phase = "finished";
    return;
  }

  resultTitle.textContent = copy.resultInProgressTitle;
  resultDescription.textContent = copy.resultNextRoundDescription;
}

function scheduleRound() {
  const copy = t();
  state.phase = "waiting";
  setAreaState("waiting", copy.roundFormat(state.currentRound + 1, state.totalRounds), copy.waitingMessage, copy.waitingHint);

  const delay = getRandomDelay();
  clearPendingTimeout();
  state.timeoutId = window.setTimeout(() => {
    state.phase = "ready";
    setAreaState("ready", copy.roundFormat(state.currentRound + 1, state.totalRounds), copy.readyMessage, copy.readyHint);
    window.requestAnimationFrame(() => {
      state.startedAt = performance.now();
    });
  }, delay);
}

function beginTest() {
  const copy = t();
  clearPendingTimeout();
  setFocusMode(true);
  state.totalRounds = Number(attemptsSelect.value);
  state.currentRound = 0;
  state.results = [];
  state.startedAt = 0;
  state.countdownRemaining = 0;
  state.lastReactionMs = null;
  resultTitle.textContent = copy.resultInProgressTitle;
  resultDescription.textContent = copy.resultInProgressDescription;
  averageTime.textContent = "-- ms";
  bestTime.textContent = "-- ms";
  renderTrendChart();
  updateShareButtonState();
  scheduleRound();
}

function handleAreaPointerDown(event) {
  if (eventTargetIsToolbarControl(event.target)) {
    return;
  }

  if (state.phase === "idle" || state.phase === "finished") {
    beginTest();
    return;
  }

  if (state.phase === "waiting") {
    clearPendingTimeout();
    startFaultCountdown();
    return;
  }

  if (state.phase !== "ready") {
    return;
  }

  const elapsed = Math.round(performance.now() - state.startedAt);
  state.results.push(elapsed);
  state.currentRound += 1;
  renderResults();

  if (state.currentRound < state.totalRounds) {
    startNextRoundCountdown(elapsed);
  }
}

function eventTargetIsToolbarControl(target) {
  return Boolean(target.closest("#attempts") || target.closest("label[for='attempts']"));
}

function handleAreaKeydown(event) {
  if (eventTargetIsToolbarControl(event.target)) {
    return;
  }

  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  event.preventDefault();
  handleAreaPointerDown(event);
}

function applyLanguage(language) {
  state.language = translations[language] ? language : "zh-Hant";
  localStorage.setItem("reaction-language", state.language);
  languageSelect.value = state.language;
  updateStaticCopy();

  if (state.phase === "idle") {
    setAreaState("idle", t().idlePhase, t().idleMessage, t().idleHint);
    resetResultsView();
    return;
  }

  if (state.phase === "finished") {
    renderResults();
    return;
  }

  if (state.phase === "countdown") {
    renderCountdownState();
    return;
  }

  if (state.phase === "waiting") {
    setAreaState("waiting", t().roundFormat(state.currentRound + 1, state.totalRounds), t().waitingMessage, t().waitingHint);
  } else if (state.phase === "ready") {
    setAreaState("ready", t().roundFormat(state.currentRound + 1, state.totalRounds), t().readyMessage, t().readyHint);
  } else if (state.phase === "fault") {
    setAreaState("fault", t().tooSoonPhase, t().tooSoonMessage, t().countdownHint(state.countdownRemaining || 3));
  }

  if (!state.results.length) {
    resultTitle.textContent = t().resultInProgressTitle;
    resultDescription.textContent = t().resultInProgressDescription;
    return;
  }

  renderResults();
}

resetButton.addEventListener("click", resetTest);
shareButton.addEventListener("click", async () => {
  try {
    await shareResult();
  } catch (error) {
    if (error && error.name === "AbortError") {
      return;
    }
    console.error(error);
  }
});
testArea.addEventListener("pointerdown", handleAreaPointerDown);
testArea.addEventListener("keydown", handleAreaKeydown);
attemptsSelect.addEventListener("change", resetTest);
languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

applyLanguage(state.language);
