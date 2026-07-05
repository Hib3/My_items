/* ============================================================
   MY_ITEMS — 統合管制卓
   モジュール定義:URL は各リポジトリの公開先に合わせて
   ここだけ書き換えれば OK。
   ============================================================ */

const APPS = [
  {
    title: "夢占い",
    en: "Dream Divination",
    desc: "見た夢からお告げを読み解く夢診断モジュール。",
    url: "https://hib3.github.io/dream-fortune/", // TODO: 実際のURLに変更
    icon: `<svg viewBox="0 0 24 24" shape-rendering="crispEdges" fill="currentColor">
      <path d="M14 2h4v2h-2v2h-2V2zM16 8h2v2h2v2h-2v2h-2v-2h-2v-2h2V8z"/>
      <path d="M10 3a9 9 0 1 0 9 12 8 8 0 0 1-9-12z" fill="currentColor"/>
    </svg>`,
  },
  {
    title: "Web-Graffiti",
    en: "Web Graffiti",
    desc: "壁に描くように、Web上へ自由に落書きするキャンバス。",
    url: "https://hib3.github.io/web-graffiti/", // TODO: 実際のURLに変更
    icon: `<svg viewBox="0 0 24 24" shape-rendering="crispEdges" fill="currentColor">
      <rect x="9" y="6" width="6" height="14"/>
      <rect x="10" y="3" width="4" height="2"/>
      <rect x="11" y="1" width="2" height="2"/>
      <rect x="16" y="2" width="2" height="2"/>
      <rect x="19" y="4" width="2" height="2"/>
      <rect x="17" y="6" width="2" height="2"/>
    </svg>`,
  },
  {
    title: "ナッドサット語翻訳",
    en: "Nadsat Translator",
    desc: "時計じかけの若者言葉「ナッドサット」への翻訳装置。",
    url: "https://hib3.github.io/nadsat-translator/", // TODO: 実際のURLに変更
    icon: `<svg viewBox="0 0 24 24" shape-rendering="crispEdges" fill="currentColor">
      <path d="M2 4h11v8H8l-3 3v-3H2V4z"/>
      <path d="M11 13h11v8h-3v3l-3-3h-5v-8z" opacity=".55"/>
    </svg>`,
  },
  {
    title: "Radio",
    en: "Radio Station",
    desc: "電波に乗せて流す、自作ラジオサイト。",
    url: "https://hib3.github.io/radio/", // TODO: 実際のURLに変更
    icon: `<svg viewBox="0 0 24 24" shape-rendering="crispEdges" fill="currentColor">
      <rect x="11" y="8" width="2" height="14"/>
      <rect x="7" y="14" width="10" height="2"/>
      <rect x="5" y="18" width="14" height="2"/>
      <rect x="10" y="4" width="4" height="4"/>
      <rect x="4" y="2" width="2" height="2"/><rect x="6" y="4" width="2" height="2"/>
      <rect x="18" y="2" width="2" height="2"/><rect x="16" y="4" width="2" height="2"/>
    </svg>`,
  },
  {
    title: "LifeLog",
    en: "Life Log",
    desc: "日々の記録を積み上げるライフログ台帳。",
    url: "https://hib3.github.io/lifelog/", // TODO: 実際のURLに変更
    icon: `<svg viewBox="0 0 24 24" shape-rendering="crispEdges" fill="currentColor">
      <rect x="4" y="2" width="14" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="7" y="6" width="8" height="2"/>
      <rect x="7" y="10" width="8" height="2"/>
      <rect x="7" y="14" width="5" height="2"/>
      <rect x="19" y="5" width="2" height="4"/>
      <rect x="19" y="12" width="2" height="4"/>
    </svg>`,
  },
  {
    title: "Odai",
    en: "Odai Generator",
    desc: "行き詰まったときに「お題」を供給する発想支援装置。",
    url: "https://hib3.github.io/odai/", // TODO: 実際のURLに変更
    icon: `<svg viewBox="0 0 24 24" shape-rendering="crispEdges" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="7" y="7" width="3" height="3"/>
      <rect x="14" y="7" width="3" height="3"/>
      <rect x="7" y="14" width="3" height="3"/>
      <rect x="14" y="14" width="3" height="3"/>
    </svg>`,
  },
  {
    title: "ピクトチャット",
    en: "Picto Chat",
    desc: "手描きメッセージでやり取りする、あの懐かしい交信室。",
    url: "https://hib3.github.io/pictochat/", // TODO: 実際のURLに変更
    icon: `<svg viewBox="0 0 24 24" shape-rendering="crispEdges" fill="currentColor">
      <path d="M2 3h20v13h-9l-5 5v-5H2V3z" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="6" y="12" width="2" height="2"/>
      <rect x="8" y="10" width="2" height="2"/>
      <rect x="10" y="8" width="2" height="2"/>
      <rect x="12" y="8" width="4" height="2" opacity=".55"/>
    </svg>`,
  },
];

/* ------------------------------------------------------------
   モジュールカード描画
   ------------------------------------------------------------ */
const grid = document.getElementById("grid");

APPS.forEach((app, i) => {
  const num = String(i + 1).padStart(2, "0");
  const li = document.createElement("li");
  li.className = "module";
  li.style.setProperty("--delay", `${i * 0.07}s`);
  li.innerHTML = `
    <div class="module-head">
      <span class="module-num">UNIT-${num}</span>
      <span class="module-led"><i></i>READY</span>
    </div>
    <div class="module-body">
      <div class="module-icon" aria-hidden="true">${app.icon}</div>
      <div>
        <h2 class="module-title">${app.title}</h2>
        <span class="module-en">${app.en}</span>
        <p class="module-desc">${app.desc}</p>
      </div>
    </div>
    <div class="module-foot">
      <a class="launch" href="${app.url}" target="_blank" rel="noopener">LAUNCH</a>
      <span class="key-hint">[${i + 1}]</span>
    </div>
  `;
  grid.appendChild(li);
});

document.getElementById("unit-count").textContent =
  `${APPS.length}/${APPS.length}`;

/* ------------------------------------------------------------
   キーボードショートカット [1]-[7]
   ------------------------------------------------------------ */
document.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= APPS.length) {
    window.open(APPS[n - 1].url, "_blank", "noopener");
  }
});

/* ------------------------------------------------------------
   時計
   ------------------------------------------------------------ */
const clockEl = document.getElementById("clock");
function tick() {
  const d = new Date();
  clockEl.textContent = [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((v) => String(v).padStart(2, "0"))
    .join(":");
}
tick();
setInterval(tick, 1000);

/* ------------------------------------------------------------
   ログティッカー
   ------------------------------------------------------------ */
const LOGS = [
  "全ユニット待機完了。異常なし。",
  "夢占いモジュール:今夜の電波状態は良好。",
  "Web-Graffiti:壁面キャンバスの塗料残量 OK。",
  "ナッドサット語翻訳:ホラーショーな精度で稼働中。",
  "Radio:搬送波を送出中……ザーッ……",
  "LifeLog:本日の記録をお忘れなく。",
  "Odai:お題の在庫は十分にあります。",
  "ピクトチャット:交信室は静かです。誰か描いて。",
];
const tickerEl = document.getElementById("ticker");
let logIndex = 0;
function nextLog() {
  tickerEl.textContent = LOGS[logIndex % LOGS.length];
  logIndex++;
}
nextLog();
setInterval(nextLog, 5000);
