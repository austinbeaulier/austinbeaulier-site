// Arcade-style high score table shared by every quiz.
// Uses the shared /api/scores board when it's connected; otherwise keeps a top 10 on this device.
(function () {
  const API = "/api/scores";
  const SHOW = 10;
  const ORD = ["1ST", "2ND", "3RD", "4TH", "5TH", "6TH", "7TH", "8TH", "9TH", "10TH"];
  const COLORS = ["#ff5b5b", "#ffa94d", "#ffe14d", "#7dff6b", "#4dffd2", "#4db8ff", "#8f7bff", "#ff7bf0", "#ff5b5b", "#ffa94d"];

  let QUIZ = "", TOTAL = 0, getMinutes = () => 0;

  // ---------- styles ----------
  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
  document.head.appendChild(font);
  const css = document.createElement("style");
  css.textContent = `
  .hs{font-family:"Press Start 2P",ui-monospace,monospace;background:#05060a;border:3px solid #2b2bff;box-shadow:0 0 0 3px #05060a,0 0 22px #2b2bff88 inset;border-radius:6px;padding:18px 14px 16px;margin:4px 0 16px;color:#fff;position:relative;overflow:hidden;text-transform:uppercase}
  .hs::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,#0000 0 2px,#0000004d 2px 4px)}
  .hs h3{margin:0 0 4px;text-align:center;font-size:17px;color:#ffe14d;text-shadow:3px 3px 0 #ff2b6a;letter-spacing:1px;font-weight:400}
  .hs .sub{text-align:center;font-size:8px;color:#7d86a8;margin-bottom:14px;letter-spacing:1px}
  .hs table{width:100%;border-collapse:collapse;font-size:11px}
  .hs th{font-size:8px;color:#7d86a8;font-weight:400;padding:0 4px 8px;text-align:left}
  .hs td{padding:6px 4px;white-space:nowrap}
  .hs td.r,.hs th.r{text-align:right}
  .hs tr.me td{animation:hsblink .8s steps(2) infinite}
  .hs .empty{text-align:center;color:#7d86a8;font-size:9px;padding:14px 0;line-height:1.8}
  .hs .new{text-align:center;color:#7dff6b;font-size:12px;margin:2px 0 12px;animation:hsblink .9s steps(2) infinite}
  .hs .you{text-align:center;font-size:9px;color:#c9d0ea;margin:0 0 12px;line-height:1.8}
  .hs .entry{display:flex;flex-direction:column;align-items:center;gap:10px;margin-bottom:14px}
  .hs .entry label{font-size:9px;color:#c9d0ea}
  .hs .ini{font-family:inherit;font-size:28px;width:5.4em;text-align:center;letter-spacing:.5em;padding:10px 0 10px .5em;background:#000;color:#ffe14d;border:none;border-bottom:4px solid #ffe14d;outline:none;text-transform:uppercase;caret-color:#ffe14d}
  .hs .ini::placeholder{color:#3a3f55}
  .hs .go{font-family:inherit;font-size:11px;background:#ff2b6a;color:#fff;border:0;border-radius:4px;padding:11px 16px;cursor:pointer;box-shadow:0 4px 0 #8a1238}
  .hs .go:active{transform:translateY(2px);box-shadow:0 2px 0 #8a1238}
  .hs .go:disabled{opacity:.5}
  .hs .err{color:#ff7b7b;font-size:8px;line-height:1.6;text-align:center}
  @keyframes hsblink{50%{opacity:.25}}
  #hsOv{position:fixed;inset:0;z-index:30;background:#000c;display:flex;align-items:center;justify-content:center;padding:16px}
  #hsOv .box{width:100%;max-width:460px;max-height:92%;overflow:auto}
  #hsOv .close{display:block;margin:0 auto;font-family:"Press Start 2P",monospace;font-size:10px;background:#24384f;color:#fff;border:0;border-radius:4px;padding:10px 14px;cursor:pointer}
  @media (max-width:420px){.hs table{font-size:9px}.hs h3{font-size:14px}.hs .ini{font-size:24px}}
  `;
  document.head.appendChild(css);

  // ---------- storage ----------
  const localKey = m => `quizhs:${QUIZ}:${m}`;
  const better = (a, b) => b.score - a.score || a.time - b.time; // sort: best first
  function localGet(m) { try { return JSON.parse(localStorage.getItem(localKey(m)) || "[]"); } catch (e) { return []; } }
  function localAdd(m, entry) {
    const list = localGet(m).concat(entry).sort(better).slice(0, SHOW);
    try { localStorage.setItem(localKey(m), JSON.stringify(list)); } catch (e) {}
    return list;
  }

  // returns { mode: "world"|"local", scores }
  async function load(m) {
    try {
      const r = await fetch(`${API}?quiz=${encodeURIComponent(QUIZ)}&m=${m}`, { cache: "no-store" });
      if (r.ok) { const j = await r.json(); if (Array.isArray(j.scores)) return { mode: "world", scores: j.scores }; }
    } catch (e) {}
    return { mode: "local", scores: localGet(m) };
  }
  async function submit(mode, m, entry) {
    if (mode === "local") return { scores: localAdd(m, entry) };
    const r = await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quiz: QUIZ, m, name: entry.name, score: entry.score, time: entry.time }) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || "couldn't save");
    return j;
  }

  // ---------- rendering ----------
  const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function table(scores, highlight) {
    if (!scores.length) return `<div class="empty">No scores yet.<br>Be the first!</div>`;
    let mine = false;
    const rows = scores.slice(0, SHOW).map((s, i) => {
      const me = !mine && highlight && s.name === highlight.name && s.score === highlight.score && s.time === highlight.time;
      if (me) mine = true;
      return `<tr class="${me ? "me" : ""}" style="color:${COLORS[i]}"><td>${ORD[i]}</td><td>${esc(s.name)}</td><td class="r">${s.score}</td><td class="r">${fmt(s.time)}</td></tr>`;
    }).join("");
    return `<table><tr><th>Rank</th><th>Name</th><th class="r">Score</th><th class="r">Time</th></tr>${rows}</table>`;
  }
  const subLine = (mode, m) => `${m} min · ${mode === "world" ? "all players" : "this device"}`;

  // Start screen: view the table for the selected time limit
  async function show() {
    const m = getMinutes();
    let ov = document.getElementById("hsOv");
    if (!ov) { ov = document.createElement("div"); ov.id = "hsOv"; document.body.appendChild(ov); }
    ov.innerHTML = `<div class="box"><div class="hs"><h3>High Scores</h3><div class="sub">${m} min · loading…</div></div><button class="close">Close</button></div>`;
    ov.onclick = e => { if (e.target === ov || e.target.classList.contains("close")) ov.remove(); };
    const { mode, scores } = await load(m);
    const hs = ov.querySelector(".hs");
    if (hs) hs.innerHTML = `<h3>High Scores</h3><div class="sub">${subLine(mode, m)}</div>${table(scores)}`;
  }

  // End screen: offer initials if the score makes the top 10, then show the table
  async function ended(score, time, m) {
    const host = document.getElementById("hsEnd");
    if (!host) return;
    host.innerHTML = `<div class="hs"><h3>High Scores</h3><div class="sub">${m} min · loading…</div></div>`;
    const { mode, scores } = await load(m);
    const box = host.querySelector(".hs");
    const last = scores[SHOW - 1];
    const qualifies = score > 0 && (scores.length < SHOW || score > last.score || (score === last.score && time < last.time));
    const head = `<h3>High Scores</h3><div class="sub">${subLine(mode, m)}</div>`;
    if (!qualifies) {
      box.innerHTML = head + `<div class="you">Your score: ${score} in ${fmt(time)}</div>` + table(scores);
      return;
    }
    let saved = "";
    try { saved = localStorage.getItem("quizhs:initials") || ""; } catch (e) {}
    box.innerHTML = head + `<div class="new">New high score!</div>
      <form class="entry" autocomplete="off">
        <label>Enter your initials</label>
        <input class="ini" maxlength="3" placeholder="AAA" value="${esc(saved)}" autocapitalize="characters" autocorrect="off" spellcheck="false" aria-label="Your initials">
        <button class="go" type="submit">Save</button>
        <div class="err"></div>
      </form>` + table(scores);
    const form = box.querySelector("form"), ini = box.querySelector(".ini"), btn = box.querySelector(".go"), err = box.querySelector(".err");
    ini.addEventListener("input", () => { ini.value = ini.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 3); err.textContent = ""; });
    setTimeout(() => { try { ini.focus({ preventScroll: true }); } catch (e) {} }, 300);
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const name = ini.value.trim();
      if (!name) { err.textContent = "Type 1–3 letters"; return; }
      btn.disabled = true;
      const entry = { name, score, time, date: new Date().toISOString().slice(0, 10) };
      try {
        const res = await submit(mode, m, entry);
        try { localStorage.setItem("quizhs:initials", name); } catch (e2) {}
        box.innerHTML = head + `<div class="you">Saved, ${esc(name)}!</div>` + table(res.scores, entry);
      } catch (e3) {
        btn.disabled = false;
        err.textContent = e3.message;
      }
    });
  }

  window.QuizHS = {
    init(quiz, total, minutesFn) {
      QUIZ = quiz; TOTAL = total; getMinutes = minutesFn;
      const b = document.getElementById("hsBtn");
      if (b) b.addEventListener("click", show);
    },
    ended,
  };
})();
