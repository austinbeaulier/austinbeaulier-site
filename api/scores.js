// Quiz high scores — Vercel serverless function backed by Upstash Redis (REST).
// Connect an Upstash Redis store to this Vercel project (Storage tab) and it sets
// KV_REST_API_URL / KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_URL / _TOKEN) automatically.
//
// GET  /api/scores?quiz=countries&m=15        -> { scores: [{ name, score, time, date }] } (top 10)
// POST /api/scores { quiz, m, name, score, time } -> { ok: true, rank, scores }

const QUIZZES = {
  countries:         { total: 197, minutes: [5, 10, 15, 20, 30] },
  capitals:          { total: 50,  minutes: [2, 3, 5, 10] },
  presidents:        { total: 47,  minutes: [3, 5, 8, 12] },
  "afi-top-100":     { total: 200, minutes: [5, 10, 15, 20] },
  "best-picture":    { total: 98,  minutes: [5, 10, 15, 20] },
  "disney-animated": { total: 65,  minutes: [3, 5, 8, 12] },
  "beatles-songs":   { total: 213, minutes: [10, 15, 20, 30] },
};
const KEEP = 100; // entries stored per board
const SHOW = 10;  // entries returned
const BLOCKED = new Set(["ASS", "FUK", "FUC", "FCK", "FUQ", "SHT", "CUM", "DIK", "DIC", "KKK", "NIG", "FAG", "TIT", "SEX", "COK", "CUN", "JEW", "GAY", "WTF", "STD", "PUS", "VAG", "POO", "PEE", "NAZ", "HTL"]);

const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(commands) {
  const r = await fetch(`${URL_}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!r.ok) throw new Error(`redis ${r.status}`);
  const out = await r.json();
  return out.map(x => { if (x.error) throw new Error(x.error); return x.result; });
}

const boardKey = (quiz, m) => `quizhs:${quiz}:${m}`;
// Higher is better: more answers first, then less time used.
const rankValue = (score, time) => score * 10000 + (9999 - time);
const parse = list => (list || []).map(s => { try { return JSON.parse(s); } catch (e) { return null; } }).filter(Boolean)
  .map(({ n, s, t, d }) => ({ name: n, score: s, time: t, date: d }));

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (!URL_ || !TOKEN) return res.status(503).json({ error: "scoreboard storage not connected" });

  try {
    if (req.method === "GET") {
      const quiz = String(req.query.quiz || ""), m = Number(req.query.m);
      const q = QUIZZES[quiz];
      if (!q || !q.minutes.includes(m)) return res.status(400).json({ error: "bad quiz or time" });
      const [list] = await redis([["ZREVRANGE", boardKey(quiz, m), 0, SHOW - 1]]);
      return res.status(200).json({ scores: parse(list) });
    }

    if (req.method === "POST") {
      const b = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
      const quiz = String(b.quiz || ""), m = Number(b.m), score = Number(b.score), time = Number(b.time);
      const name = String(b.name || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 3);
      const q = QUIZZES[quiz];
      if (!q || !q.minutes.includes(m)) return res.status(400).json({ error: "bad quiz or time" });
      if (!Number.isInteger(score) || score < 1 || score > q.total) return res.status(400).json({ error: "bad score" });
      if (!Number.isInteger(time) || time < 1 || time > m * 60) return res.status(400).json({ error: "bad time" });
      if (!name || BLOCKED.has(name)) return res.status(400).json({ error: "pick different initials" });

      // simple rate limit: 6 submissions per minute per IP
      const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "anon";
      const [count] = await redis([["INCR", `quizhs:rl:${ip}`], ["EXPIRE", `quizhs:rl:${ip}`, 60]]);
      if (count > 6) return res.status(429).json({ error: "slow down" });

      const key = boardKey(quiz, m);
      const member = JSON.stringify({ n: name, s: score, t: time, d: new Date().toISOString().slice(0, 10), r: Math.random().toString(36).slice(2, 8) });
      const value = rankValue(score, time);
      const [, , rank, list] = await redis([
        ["ZADD", key, value, member],
        ["ZREMRANGEBYRANK", key, 0, -(KEEP + 1)],
        ["ZREVRANK", key, member],
        ["ZREVRANGE", key, 0, SHOW - 1],
      ]);
      return res.status(200).json({ ok: true, rank: rank === null ? null : rank + 1, scores: parse(list) });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method not allowed" });
  } catch (e) {
    return res.status(500).json({ error: "scoreboard unavailable" });
  }
};
