/* ============================================================================
   CHEMISTRY EXPLORER • JEE CLASS 11  —  www/games-engine.js
   Seven new playable games + downloadable victory performance card.
   Global controller: window.ChemGamesEngine
   (NEW_GAMES_CATALOG, mountGame, showVictoryPopup, selfTest)
   ========================================================================== */
(function () {
  'use strict';

  const W = window, D = document;
  const MODES = ['easy', 'moderate', 'hard'];
  const MODE_LABEL = { easy: 'Easy', moderate: 'Moderate', hard: 'Hard' };
  const XP_WIN = { easy: 50, moderate: 75, hard: 100 };
  const MODE_COLOR = { easy: '#2ee6a6', moderate: '#ffc857', hard: '#ff6b8a' };
  const GAMES = {};
  const LAST = {};
  let LAST_MOUNT = null;

  const CATALOG = [
    { id: 'parking', icon: '⚡', title: 'Electron Parking', sub: 'Park electrons in shells & subshells', chapter: 'Ch 2 • Structure of Atom', color: '#38bdf8', modes: ['easy', 'moderate', 'hard'] },
    { id: 'forge', icon: '🔥', title: 'Formula Forge', sub: 'Balance ionic charges, forge neutral formulae', chapter: 'Ch 1 • Valency & Formulae', color: '#fb923c', modes: ['easy', 'moderate', 'hard'] },
    { id: 'balancer', icon: '⚖️', title: 'Reaction Balancer', sub: 'Balance the atom scale', chapter: 'Ch 1 & 7 • Equations & Redox', color: '#a78bfa', modes: ['easy', 'moderate', 'hard'] },
    { id: 'shapeshift', icon: '🧩', title: 'Shape Shift: Molecules', sub: 'Build VSEPR shapes & match the silhouette', chapter: 'Ch 4 • Chemical Bonding & VSEPR', color: '#34d399', modes: ['easy', 'moderate', 'hard'] },
    { id: 'detective', icon: '🔎', title: 'Trend Detective', sub: 'Follow periodic-trend clues to the element', chapter: 'Ch 3 • Periodic Trends', color: '#f472b6', modes: ['easy', 'moderate', 'hard'] },
    { id: 'molefactory', icon: '🏭', title: 'Mole Factory', sub: 'Stoichiometry & limiting reagent', chapter: 'Ch 1 • Stoichiometry', color: '#facc15', modes: ['easy', 'moderate', 'hard'] },
    { id: 'carbon', icon: '🧪', title: 'Carbon Chain Crafter', sub: 'Draw hydrocarbons & name them (IUPAC)', chapter: 'Ch 8–9 • GOC & Hydrocarbons', color: '#4ade80', modes: ['easy', 'moderate', 'hard'] }
  ];

  /* ------------------------------------------------------------------ utils */
  const rand = (n) => Math.floor(Math.random() * n);
  const rint = (a, b) => a + rand(b - a + 1);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const lcm = (a, b) => (a / gcd(a, b)) * b;
  const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = rand(i + 1); const t = r[i]; r[i] = r[j]; r[j] = t; } return r; };
  const range = (a, b) => { const r = []; for (let i = a; i <= b; i++) r.push(i); return r; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const num = (x, d) => { const p = Math.pow(10, d == null ? 2 : d); return String(Math.round(x * p) / p); };
  const safe = (fn) => { try { return fn(); } catch (e) { return undefined; } };
  const SUB = '₀₁₂₃₄₅₆₇₈₉', SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const subs = (s) => String(s).replace(/\d/g, (d) => SUB[d]);
  const sups = (s) => String(s).replace(/\d/g, (d) => SUP[d]);
  /* chemistry formatter: digits after a letter or bracket become subscripts, ^{..} becomes superscript */
  const chem = (s) => String(s).replace(/\^\{([^}]*)\}/g, '<sup>$1</sup>').replace(/([A-Za-z)\]])(\d+)/g, '$1<sub>$2</sub>');
  const fmtTime = (s) => { s = Math.max(0, Math.round(s)); return (s < 600 ? '0' : '') + Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60); };

  function parseFormula(f) {
    const st = [{}];
    let i = 0;
    while (i < f.length) {
      const c = f[i];
      if (c === '(') { st.push({}); i++; }
      else if (c === ')') {
        i++; let m = '';
        while (i < f.length && /\d/.test(f[i])) m += f[i++];
        const top = st.pop(), k = m ? +m : 1, par = st[st.length - 1];
        for (const e in top) par[e] = (par[e] || 0) + top[e] * k;
      } else if (/[A-Z]/.test(c)) {
        let el = c; i++;
        while (i < f.length && /[a-z]/.test(f[i])) el += f[i++];
        let m = '';
        while (i < f.length && /\d/.test(f[i])) m += f[i++];
        const cur = st[st.length - 1];
        cur[el] = (cur[el] || 0) + (m ? +m : 1);
      } else i++;
    }
    return st[0];
  }

  /* --------------------------------------------- app bridge (safe fallbacks) */
  function ensureState() {
    if (!W.appState || typeof W.appState !== 'object') W.appState = {};
    if (!W.appState.gameStats || typeof W.appState.gameStats !== 'object') W.appState.gameStats = {};
    return W.appState;
  }
  function persist() {
    if (typeof W.saveState === 'function') safe(() => W.saveState());
    else safe(() => localStorage.setItem('CHEM_EXPLORER_V1_STATE', JSON.stringify(W.appState)));
  }
  function xp(delta, label) {
    if (typeof W.adjustXP === 'function') safe(() => W.adjustXP(delta, label));
    else { const s = ensureState(); s.xp = Math.max(0, (+s.xp || 0) + delta); persist(); }
  }
  function render(el) { if (typeof W.renderMath === 'function') safe(() => W.renderMath(el)); }
  function playerName() { return (W.appState && W.appState.user && W.appState.user.name) || 'JEE Aspirant'; }

  let AC = null;
  function tone(freq, type, dur, delay) {
    const go = () => {
      if (typeof W.playTone === 'function') { safe(() => W.playTone(freq, type || 'sine', dur || 0.12, 0)); return; }
      safe(() => {
        AC = AC || new (W.AudioContext || W.webkitAudioContext)();
        const t0 = AC.currentTime, o = AC.createOscillator(), g = AC.createGain();
        o.type = type || 'sine'; o.frequency.value = freq;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + (dur || 0.12));
        o.connect(g); g.connect(AC.destination); o.start(t0); o.stop(t0 + (dur || 0.12) + 0.05);
      });
    };
    if (delay) setTimeout(go, delay * 1000); else go();
  }
  const sfx = {
    tap() { tone(560, 'sine', 0.06, 0); },
    pop() { tone(760, 'triangle', 0.08, 0); },
    ok() { if (typeof W.soundSuccess === 'function') safe(() => W.soundSuccess()); else { tone(660, 'sine', 0.1, 0); tone(880, 'sine', 0.14, 0.09); } },
    err() { if (typeof W.soundError === 'function') safe(() => W.soundError()); else { tone(180, 'sawtooth', 0.18, 0); } },
    win() { if (typeof W.soundLevelVictory === 'function') safe(() => W.soundLevelVictory()); else [523, 659, 784, 1047].forEach((f, i) => tone(f, 'triangle', 0.16, i * 0.11)); }
  };
  const buzz = (p) => safe(() => navigator.vibrate && navigator.vibrate(p));

  /* ------------------------------------------------------- play statistics */
  function gstat(id) {
    const st = ensureState();
    let g = st.gameStats[id];
    if (!g || typeof g !== 'object') g = st.gameStats[id] = { plays: 0, wins: 0, bestStars: 0, bestTime: null, xpEarned: 0, modes: {} };
    if (!g.modes) g.modes = {};
    return g;
  }
  function recordPlay(id, mode) {
    const g = gstat(id), m = g.modes[mode] = g.modes[mode] || { plays: 0, wins: 0, bestStars: 0 };
    g.plays = (g.plays || 0) + 1; m.plays++; g.lastPlayed = Date.now(); g.lastMode = mode;
    persist();
  }
  function recordWin(id, mode, stars, secs, gain) {
    const g = gstat(id), m = g.modes[mode] = g.modes[mode] || { plays: 0, wins: 0, bestStars: 0 };
    g.wins = (g.wins || 0) + 1; m.wins++;
    g.bestStars = Math.max(g.bestStars || 0, stars); m.bestStars = Math.max(m.bestStars || 0, stars);
    g.bestTime = g.bestTime == null ? secs : Math.min(g.bestTime, secs);
    g.xpEarned = (g.xpEarned || 0) + gain; g.lastWon = Date.now();
    persist();
  }

  /* --------------------------------------------------------- canvas helper */
  function makeCanvas(lw, lh) {
    const dpr = Math.min(3, W.devicePixelRatio || 1);
    const cv = D.createElement('canvas');
    cv.width = Math.round(lw * dpr); cv.height = Math.round(lh * dpr);
    cv.style.cssText = 'width:100%;height:auto;display:block;touch-action:none;border-radius:14px;';
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return {
      cv, g, w: lw, h: lh,
      pos(e) { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * lw / (r.width || lw), y: (e.clientY - r.top) * lh / (r.height || lh) }; }
    };
  }

  /* ----------------------------------------------------- game context/mount */
  function createCtx(meta, mode, container) {
    const ctx = { meta, mode, container, cleanups: [], moves: 0, good: 0, wrong: 0, hints: 0, finished: false, t0: Date.now(), hintFn: null, moveFmt: (m) => 'Moves ' + m };
    container.innerHTML = '';
    const root = D.createElement('div');
    root.className = 'cge-root';
    root.setAttribute('style', '--acc:' + meta.color);
    root.innerHTML =
      '<div class="cge-bar">' +
      '<span class="cge-badge cge-m-' + mode + '">' + MODE_LABEL[mode] + '</span>' +
      '<span class="cge-title">' + meta.icon + ' ' + esc(meta.title) + '</span>' +
      '<span class="cge-cnt" data-r="cnt">Moves 0</span>' +
      '<span class="cge-live" data-r="live"></span></div>' +
      '<div class="cge-bar cge-bar2">' +
      '<button class="cge-btn pri" data-bar="new">🎲 New Random Challenge</button>' +
      '<button class="cge-btn" data-bar="hint">💡 NCERT Concept Hint</button></div>' +
      '<div class="cge-msg" data-r="msg" hidden></div>' +
      '<div class="cge-hint" data-r="hint" hidden></div>' +
      '<div class="cge-stage" data-r="stage"></div>';
    container.appendChild(root);
    const q = (n) => root.querySelector('[data-r="' + n + '"]');
    const cnt = q('cnt'), live = q('live'), msg = q('msg'), hintEl = q('hint');
    ctx.root = root; ctx.stage = q('stage');

    ctx.setMoves = (t) => { cnt.textContent = t; };
    ctx.move = (n) => { ctx.moves += (n == null ? 1 : n); cnt.textContent = ctx.moveFmt(ctx.moves); };
    ctx.setStatus = (html) => { live.innerHTML = html || ''; };
    ctx.say = (html, kind) => { msg.hidden = !html; msg.className = 'cge-msg ' + (kind || ''); msg.innerHTML = html || ''; };
    ctx.onCleanup = (fn) => { ctx.cleanups.push(fn); };
    ctx.canvas = makeCanvas;
    ctx.pick = (pool) => {
      const key = meta.id + ':' + mode;
      let i = rand(pool.length);
      if (pool.length > 1 && i === LAST[key]) i = (i + 1 + rand(pool.length - 1)) % pool.length;
      LAST[key] = i;
      return pool[i];
    };
    ctx.loop = (fn) => {
      let id = 0, alive = true, last = performance.now();
      const tick = (t) => {
        if (!alive) return;
        if (!root.isConnected) { alive = false; return; }
        fn(t, Math.min(0.1, (t - last) / 1000)); last = t;
        id = requestAnimationFrame(tick);
      };
      id = requestAnimationFrame(tick);
      ctx.onCleanup(() => { alive = false; cancelAnimationFrame(id); });
    };
    ctx.shake = () => {
      root.classList.remove('cge-shake'); void root.offsetWidth; root.classList.add('cge-shake');
      setTimeout(() => root.classList.remove('cge-shake'), 520);
    };
    ctx.ok = (msgHtml) => { ctx.good++; sfx.ok(); if (msgHtml) ctx.say('✅ ' + msgHtml, 'ok'); };
    ctx.bad = (msgHtml) => {
      ctx.wrong++;
      xp(-10, '❌ Wrong!');
      sfx.err(); buzz(70); ctx.shake();
      if (msgHtml) ctx.say('❌ ' + msgHtml, 'bad');
    };
    ctx.showHint = () => {
      if (!ctx.hintFn) return;
      if (!hintEl.hidden) { hintEl.hidden = true; return; }
      ctx.hints++;
      hintEl.hidden = false;
      hintEl.innerHTML = '💡 <b>NCERT concept:</b> ' + ctx.hintFn();
      render(hintEl);
    };
    ctx.win = (o) => {
      if (ctx.finished) return;
      o = o || {};
      ctx.finished = true; ctx.good++;
      const acc = Math.round(100 * ctx.good / (ctx.good + ctx.wrong));
      let st = clamp(o.effStars || 3, 1, 3);
      st = Math.min(st, ctx.wrong === 0 ? 3 : ctx.wrong <= 2 ? 2 : 1);
      if (ctx.hints > 0 && st === 3) st = 2;
      const secs = Math.max(1, Math.round((Date.now() - ctx.t0) / 1000));
      const gain = XP_WIN[mode];
      xp(gain, '🏆 +' + gain + ' XP');
      sfx.win(); buzz([40, 40, 80]);
      recordWin(meta.id, mode, st, secs, gain);
      ctx.say('🏆 Challenge cleared! ' + (o.detail || ''), 'ok');
      ctx.root.classList.add('cge-won');
      api.showVictoryPopup({ gameId: meta.id, mode, title: meta.title, icon: meta.icon, color: meta.color, accuracy: acc, moves: ctx.moves, timeSec: secs, stars: st, xp: gain, concept: o.concept });
    };
    ctx.runCleanup = () => { const c = ctx.cleanups; ctx.cleanups = []; c.forEach((f) => safe(f)); };
    ctx.restart = () => {
      ctx.runCleanup();
      ctx.moves = 0; ctx.good = 0; ctx.wrong = 0; ctx.hints = 0; ctx.finished = false; ctx.t0 = Date.now();
      ctx.hintFn = null; ctx.moveFmt = (m) => 'Moves ' + m;
      root.classList.remove('cge-won');
      ctx.setMoves('Moves 0'); ctx.setStatus(''); ctx.say(''); hintEl.hidden = true;
      ctx.stage.onclick = null; ctx.stage.innerHTML = '';
      recordPlay(meta.id, mode);
      GAMES[meta.id](ctx, mode);
      render(ctx.stage);
    };
    ctx.destroy = () => { ctx.runCleanup(); safe(() => root.remove()); };
    root.addEventListener('click', (e) => {
      const b = e.target.closest && e.target.closest('[data-bar]');
      if (!b) return;
      if (b.getAttribute('data-bar') === 'new') { sfx.pop(); ctx.restart(); } else ctx.showHint();
    });
    return ctx;
  }

  function mountGame(gameId, mode, container) {
    const meta = CATALOG.find((g) => g.id === gameId);
    if (typeof container === 'string') container = D.querySelector(container);
    if (!meta || !container || !GAMES[gameId]) { safe(() => console.warn('[ChemGamesEngine] cannot mount', gameId)); return null; }
    mode = String(mode || 'easy').toLowerCase();
    if (MODES.indexOf(mode) < 0) mode = 'easy';
    injectStyle();
    if (container.__cge) safe(() => container.__cge.destroy());
    const ctx = createCtx(meta, mode, container);
    container.__cge = ctx;
    LAST_MOUNT = { gameId, mode, container };
    ctx.restart();
    return ctx;
  }

  function injectStyle() {
    if (D.getElementById('cge-style')) return;
    const s = D.createElement('style');
    s.id = 'cge-style'; s.textContent = CSS;
    (D.head || D.documentElement).appendChild(s);
  }

  /* ------------------------------------------------ victory performance card */
  function rr(g, x, y, w, h, r) {
    g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
  }
  function fit(g, text, maxW, size, weight) {
    let s = size;
    do { g.font = weight + ' ' + s + 'px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif'; s -= 1; } while (g.measureText(text).width > maxW && s > 10);
  }
  function wrapLines(g, text, maxW) {
    const words = String(text).split(/\s+/), lines = []; let cur = '';
    words.forEach((w) => { const t = cur ? cur + ' ' + w : w; if (g.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; });
    if (cur) lines.push(cur);
    return lines;
  }
  function star(g, cx, cy, R, filled) {
    g.beginPath();
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? R * 0.48 : R; g.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a)); }
    g.closePath();
    if (filled) { g.fillStyle = '#ffc857'; g.shadowColor = 'rgba(255,200,87,.8)'; g.shadowBlur = 18; g.fill(); g.shadowBlur = 0; g.lineWidth = 3; g.strokeStyle = '#fff3c4'; g.stroke(); }
    else { g.lineWidth = 3; g.strokeStyle = 'rgba(255,255,255,.28)'; g.stroke(); }
  }
  function drawCard(cv, s) {
    const LW = 600, LH = 850, S = clamp(W.devicePixelRatio || 2, 2, 3);
    cv.width = Math.round(LW * S); cv.height = Math.round(LH * S);
    const g = cv.getContext('2d');
    g.setTransform(S, 0, 0, S, 0, 0);
    const acc = s.color || '#38bdf8';
    let gr = g.createLinearGradient(0, 0, LW, LH);
    gr.addColorStop(0, '#0a1030'); gr.addColorStop(0.55, '#16204f'); gr.addColorStop(1, '#070d1f');
    g.fillStyle = gr; g.fillRect(0, 0, LW, LH);
    gr = g.createRadialGradient(LW * 0.82, 120, 10, LW * 0.82, 120, 330);
    gr.addColorStop(0, acc + '66'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, LW, LH);
    /* molecular lattice decoration (seeded) */
    let seed = 0; String(s.gameId).split('').forEach((c) => { seed = (seed * 31 + c.charCodeAt(0)) % 9973; });
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const pts = []; for (let i = 0; i < 16; i++) pts.push([rnd() * LW, rnd() * LH]);
    g.lineWidth = 1.2;
    pts.forEach((p, i) => {
      const q = pts[(i + 3) % pts.length];
      g.strokeStyle = 'rgba(160,190,255,.10)'; g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); g.stroke();
      g.fillStyle = 'rgba(160,190,255,.16)'; g.beginPath(); g.arc(p[0], p[1], 4 + (i % 3) * 2, 0, 6.2832); g.fill();
    });
    rr(g, 14, 14, LW - 28, LH - 28, 30); g.lineWidth = 3; g.strokeStyle = acc; g.stroke();
    rr(g, 24, 24, LW - 48, LH - 48, 24); g.lineWidth = 1; g.strokeStyle = 'rgba(255,255,255,.14)'; g.stroke();

    g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    g.fillStyle = '#ffffff'; fit(g, 'CHEMISTRY EXPLORER • JEE CLASS 11', 500, 29, '800'); g.fillText('CHEMISTRY EXPLORER • JEE CLASS 11', LW / 2, 82);
    g.fillStyle = acc; g.font = '700 17px system-ui,sans-serif'; g.fillText('PERFORMANCE CARD', LW / 2, 112);

    g.fillStyle = 'rgba(255,255,255,.55)'; g.font = '600 15px system-ui,sans-serif'; g.fillText('PLAYER', LW / 2, 160);
    g.fillStyle = '#ffffff'; fit(g, s.player, 480, 42, '800'); g.fillText(s.player, LW / 2, 204);

    g.font = '60px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; g.fillText(s.icon, LW / 2, 285);
    g.fillStyle = '#ffffff'; fit(g, s.title, 500, 36, '800'); g.fillText(s.title, LW / 2, 332);
    const mlabel = MODE_LABEL[s.mode] + ' Mode';
    g.font = '800 20px system-ui,sans-serif';
    const mw = g.measureText(mlabel).width + 44;
    rr(g, LW / 2 - mw / 2, 349, mw, 38, 19); g.fillStyle = MODE_COLOR[s.mode]; g.fill();
    g.fillStyle = '#06101f'; g.fillText(mlabel, LW / 2, 376);

    for (let i = 0; i < 3; i++) star(g, LW / 2 + (i - 1) * 84, 448, 34, i < s.stars);

    const tiles = [['ACCURACY', s.accuracy + '%'], ['MOVES', String(s.moves)], ['TIME TAKEN', fmtTime(s.timeSec)]];
    tiles.forEach((t, i) => {
      const x = 44 + i * 172, y = 505, w = 160, h = 92;
      rr(g, x, y, w, h, 18); g.fillStyle = 'rgba(255,255,255,.07)'; g.fill(); g.lineWidth = 1.5; g.strokeStyle = 'rgba(255,255,255,.18)'; g.stroke();
      g.fillStyle = 'rgba(255,255,255,.6)'; g.font = '700 14px system-ui,sans-serif'; g.fillText(t[0], x + w / 2, y + 28);
      g.fillStyle = '#ffffff'; fit(g, t[1], w - 24, 36, '800'); g.fillText(t[1], x + w / 2, y + 70);
    });
    rr(g, 44, 612, 512, 66, 20);
    gr = g.createLinearGradient(44, 0, 556, 0); gr.addColorStop(0, acc); gr.addColorStop(1, '#ffc857');
    g.fillStyle = gr; g.fill();
    g.fillStyle = '#06101f'; g.font = '800 34px system-ui,sans-serif'; g.fillText('+' + s.xp + ' XP EARNED', LW / 2, 657);

    rr(g, 44, 696, 512, 76, 18); g.fillStyle = 'rgba(0,0,0,.28)'; g.fill(); g.lineWidth = 1.5; g.strokeStyle = acc; g.stroke();
    g.fillStyle = acc; g.font = '800 13px system-ui,sans-serif'; g.fillText('🧠 CHEMISTRY CONCEPT MASTERED', LW / 2, 717);
    g.fillStyle = '#ffffff'; g.font = '700 17px system-ui,sans-serif';
    wrapLines(g, s.concept, 470).slice(0, 2).forEach((ln, i) => g.fillText(ln, LW / 2, 742 + i * 22));

    g.fillStyle = 'rgba(255,255,255,.62)'; g.font = 'italic 600 18px system-ui,sans-serif';
    g.fillText('Made with ❤️‍🩹 by Aditya Maurya', LW / 2, 818);
  }

  function downloadCard(cv, name) {
    const url = cv.toDataURL('image/png');
    const a = () => { const l = D.createElement('a'); l.href = url; l.download = name; D.body.appendChild(l); l.click(); safe(() => l.remove()); };
    const cap = W.Capacitor, P = cap && cap.Plugins;
    if (cap && P && P.Filesystem && P.Share && (typeof cap.isNativePlatform !== 'function' || cap.isNativePlatform())) {
      P.Filesystem.writeFile({ path: name, data: url.split(',')[1], directory: 'CACHE' })
        .then((r) => P.Share.share({ title: 'My Chemistry Explorer card', url: r.uri }))
        .catch(a);
    } else a();
  }

  function showVictoryPopup(s) {
    s = Object.assign({}, s || {});
    const meta = CATALOG.find((g) => g.id === s.gameId) || {};
    s.mode = String(s.mode || 'easy').toLowerCase();
    if (MODES.indexOf(s.mode) < 0) s.mode = 'easy';
    s.title = s.title || meta.title || 'Chemistry Game';
    s.icon = s.icon || meta.icon || '🧪';
    s.color = s.color || meta.color || '#38bdf8';
    s.accuracy = s.accuracy == null ? 100 : Math.round(s.accuracy);
    s.moves = s.moves == null ? 0 : s.moves;
    s.timeSec = s.timeSec == null ? 0 : s.timeSec;
    s.stars = clamp(Math.round(s.stars == null ? 3 : s.stars), 0, 3);
    s.xp = s.xp == null ? XP_WIN[s.mode] : s.xp;
    s.concept = s.concept || 'Class 11 Chemistry mastery';
    s.player = playerName();
    injectStyle();
    const old = D.getElementById('cge-modal'); if (old) old.remove();
    const modal = D.createElement('div');
    modal.id = 'cge-modal'; modal.className = 'cge-modal';
    let cf = '';
    for (let i = 0; i < 30; i++) cf += '<i style="left:' + rand(100) + '%;background:' + ['#ffc857', '#2ee6a6', '#38bdf8', '#ff6b8a', '#a78bfa'][i % 5] + ';animation-delay:' + (rand(900) / 1000).toFixed(2) + 's;animation-duration:' + (1.7 + rand(14) / 10).toFixed(1) + 's"></i>';
    modal.innerHTML =
      '<div class="cge-confetti">' + cf + '</div>' +
      '<div class="cge-mbox"><button class="cge-x" data-m="close" aria-label="Close">✕</button>' +
      '<div class="cge-mtitle">' + '🏆 Challenge Cleared!' + '</div>' +
      '<canvas class="cge-cardcv"></canvas>' +
      '<div class="cge-macts"><button class="cge-btn pri" data-m="dl">📥 Download Performance Card (PNG)</button>' +
      '<button class="cge-btn" data-m="again">🎲 Play Another Random Round</button></div></div>';
    D.body.appendChild(modal);
    const cv = modal.querySelector('canvas');
    safe(() => drawCard(cv, s));
    const close = () => { safe(() => modal.remove()); };
    modal.addEventListener('click', (e) => {
      const b = e.target.closest && e.target.closest('[data-m]');
      if (!b) { if (e.target === modal) close(); return; }
      const k = b.getAttribute('data-m');
      if (k === 'close') close();
      else if (k === 'dl') downloadCard(cv, 'ChemExplorer_' + s.title.replace(/[^A-Za-z0-9]+/g, '_') + '_' + MODE_LABEL[s.mode] + '_' + Date.now() + '.png');
      else if (k === 'again') {
        close();
        if (typeof s.onReplay === 'function') { s.onReplay(); return; }
        const lm = LAST_MOUNT;
        if (lm && lm.gameId === s.gameId && lm.container && lm.container.isConnected) mountGame(s.gameId, s.mode, lm.container);
        else if (lm && lm.container && lm.container.isConnected) mountGame(lm.gameId, lm.mode, lm.container);
      }
    });
    return modal;
  }

  const api = { NEW_GAMES_CATALOG: CATALOG, mountGame: mountGame, showVictoryPopup: showVictoryPopup };

  /* ==========================================================================
     1. ELECTRON PARKING  (Ch 2 · Structure of Atom)
     ========================================================================== */
  const PK_SUBS = [
    { id: '1s', n: 1, cap: 2 }, { id: '2s', n: 2, cap: 2 }, { id: '2p', n: 2, cap: 6 },
    { id: '3s', n: 3, cap: 2 }, { id: '3p', n: 3, cap: 6 }, { id: '4s', n: 4, cap: 2 }, { id: '3d', n: 3, cap: 10 }
  ];
  const PK_SYM = ['', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'];
  const PK_POOL = {
    easy: range(3, 18).map((z) => [z, 0]),
    moderate: [19, 20, 21, 22, 23, 25, 26, 27, 28, 30].map((z) => [z, 0]),
    hard: [[24, 0], [29, 0], [26, 2], [26, 3], [29, 1], [25, 2], [24, 3]]
  };
  function pkConfig(Z, q) {
    const c = {}; let left = Z;
    PK_SUBS.forEach((s) => { const t = Math.min(s.cap, left); c[s.id] = t; left -= t; });
    if (Z === 24) { c['4s'] = 1; c['3d'] = 5; }      /* Cr : half-filled d5 */
    if (Z === 29) { c['4s'] = 1; c['3d'] = 10; }     /* Cu : fully-filled d10 */
    let k = q || 0;
    ['4s', '3d', '3p', '3s', '2p', '2s', '1s'].forEach((id) => { while (k > 0 && c[id] > 0) { c[id]--; k--; } });
    return c;
  }
  function pkNote(Z, q) {
    if (Z === 24 && !q) return 'Cr is an exception: one 4s electron shifts into 3d to give the extra-stable <b>half-filled</b> 3d<sup>5</sup> → [Ar] 3d<sup>5</sup> 4s<sup>1</sup>.';
    if (Z === 29 && !q) return 'Cu is an exception: one 4s electron shifts into 3d to give the extra-stable <b>fully-filled</b> 3d<sup>10</sup> → [Ar] 3d<sup>10</sup> 4s<sup>1</sup>.';
    if (q) return 'For cations, electrons leave the <b>outermost shell first</b>: the 4s electrons are removed before 3d. (Neutral ' + PK_SYM[Z] + ' is ' + (Z === 24 ? '[Ar] 3d<sup>5</sup> 4s<sup>1</sup>' : Z === 29 ? '[Ar] 3d<sup>10</sup> 4s<sup>1</sup>' : '[Ar] 3d<sup>' + (Z - 20) + '</sup> 4s<sup>2</sup>') + '.)';
    if (Z >= 19) return 'After 3p the <b>4s</b> subshell (lower n + l) is filled before 3d.';
    return 'Shell capacity is 2n² (K = 2, L = 8, M = 18); for Z ≤ 18 fill 1s → 2s → 2p → 3s → 3p.';
  }

  GAMES.parking = function (ctx, mode) {
    const [Z, q] = ctx.pick(PK_POOL[mode]);
    const target = pkConfig(Z, q), N = Z - q;
    const limit = N + { easy: 5, moderate: 4, hard: 3 }[mode];
    const label = PK_SYM[Z] + (q ? '^{' + (q > 1 ? q : '') + '+}' : '');
    const placed = {}; PK_SUBS.forEach((s) => { placed[s.id] = 0; });
    let used = 0, done = false, locked = false;
    const pulses = [];
    const nextSub = () => PK_SUBS.find((s) => placed[s.id] < target[s.id]);
    const total = () => PK_SUBS.reduce((a, s) => a + placed[s.id], 0);

    ctx.stage.innerHTML =
      '<div class="cge-card">Park all <b>' + N + '</b> electrons of <b>' + chem(label) + '</b> <span class="cge-dim">(Z = ' + Z + (q ? ', charge +' + q : '') + ')</span> in the correct subshells — lowest energy first. Wrong parking costs a move.</div>' +
      '<div class="pk-cv"></div><div class="pk-shells" data-r="sh"></div><div class="pk-slots" data-r="sl"></div><div class="pk-cfg" data-r="cfg"></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, 236);
    ctx.stage.querySelector('.pk-cv').appendChild(cvh.cv);
    ctx.moveFmt = (m) => 'Moves ' + m + '/' + limit;
    ctx.setMoves(ctx.moveFmt(0));
    ctx.hintFn = () => 'Fill in order of increasing (n + l): <b>1s → 2s → 2p → 3s → 3p → 4s → 3d</b>. Pauli exclusion: max 2 electrons per orbital, so s holds 2, p holds 6, d holds 10. ' + pkNote(Z, q);

    function refresh() {
      const cnt = [0, 0, 0, 0];
      PK_SUBS.forEach((s) => { cnt[s.n - 1] += placed[s.id]; });
      $('sh').innerHTML = ['K', 'L', 'M', 'N'].map((n, i) => '<span class="pk-sh' + (cnt[i] ? ' on' : '') + '"><b>' + n + '</b> ' + cnt[i] + '<small>/' + [2, 8, 18, 32][i] + '</small></span>').join('');
      $('sl').innerHTML = PK_SUBS.map((s) => {
        let pips = '';
        for (let i = 0; i < s.cap; i++) pips += '<i class="' + (i < placed[s.id] ? 'on' : '') + '"></i>';
        return '<button class="pk-slot' + (placed[s.id] ? ' has' : '') + '" data-sub="' + s.id + '"' + (done || locked ? ' disabled' : '') + '><b>' + s.id + '</b><span class="pk-pips">' + pips + '</span><em>' + placed[s.id] + '/' + s.cap + '</em></button>';
      }).join('');
      ctx.setStatus('⚡ ' + (N - total()) + ' e⁻ left');
    }
    function reason(s) {
      if (placed[s.id] >= s.cap) return '<b>' + s.id + '</b> is full — at most ' + s.cap + ' electrons here (Pauli exclusion: 2 per orbital).';
      if (placed[s.id] >= target[s.id]) return '<b>' + s.id + '</b> already holds its correct share of ' + target[s.id] + ' electron(s) in ' + chem(label) + '. ' + pkNote(Z, q);
      return 'Not yet! A lower-energy subshell (<b>' + nextSub().id + '</b>) must be filled first — Aufbau (n + l) rule.';
    }
    function place(id) {
      if (done || locked) return;
      const s = PK_SUBS.find((x) => x.id === id), nx = nextSub();
      used++; ctx.move();
      if (nx && nx.id === id) {
        placed[id]++; sfx.tap(); pulses.push({ n: s.n, t0: performance.now() });
        refresh();
        if (total() === N) {
          done = true; refresh();
          const cfg = PK_SUBS.filter((x) => target[x.id] > 0).map((x) => x.id + '<sup>' + target[x.id] + '</sup>').join(' ');
          $('cfg').innerHTML = '<div class="cge-card ok">✅ Ground-state configuration of ' + chem(label) + ':<br><b class="pk-cfgtxt">' + cfg + '</b></div>';
          ctx.win({
            effStars: used <= N + 1 ? 3 : used <= N + 2 ? 2 : 1,
            concept: mode === 'easy' ? 'Aufbau principle, Pauli exclusion & shell capacity (2n²)' : mode === 'moderate' ? 'Aufbau (n + l) rule — 4s fills before 3d' : 'Half-/full-filled stability & 4s-first ionisation of 3d metals',
            detail: PK_SYM[Z] + ' configured.'
          });
          return;
        }
        ctx.good++;
      } else {
        ctx.bad(reason(s));
        refresh();
      }
      if (!done && used >= limit) {
        locked = true; refresh();
        ctx.say('⛔ Out of moves with ' + (N - total()) + ' electron(s) unparked. Retry the same atom!', 'bad');
        $('cfg').innerHTML = '<button class="cge-btn pri" data-act="retry">↻ Retry this atom</button>';
      }
    }
    ctx.stage.onclick = (e) => {
      const b = e.target.closest && e.target.closest('[data-sub]');
      if (b) { place(b.getAttribute('data-sub')); return; }
      if (e.target.closest && e.target.closest('[data-act="retry"]')) {
        PK_SUBS.forEach((s) => { placed[s.id] = 0; });
        used = 0; locked = false; ctx.moves = 0; ctx.setMoves(ctx.moveFmt(0)); $('cfg').innerHTML = ''; ctx.say(''); refresh();
      }
    };
    refresh();

    const R = [30, 56, 82, 108], NAMES = ['K', 'L', 'M', 'N'], CAPS = [2, 8, 18, 32], COL = ['#7dd3fc', '#86efac', '#fde68a', '#f9a8d4'];
    ctx.loop((t) => {
      const g = cvh.g, cx = 170, cy = 118;
      const bg = g.createRadialGradient(cx, cy, 10, cx, cy, 160);
      bg.addColorStop(0, '#15225a'); bg.addColorStop(1, '#070c20');
      g.fillStyle = bg; g.fillRect(0, 0, 340, 236);
      const cnt = [0, 0, 0, 0];
      PK_SUBS.forEach((s) => { cnt[s.n - 1] += placed[s.id]; });
      for (let i = 0; i < 4; i++) {
        g.beginPath(); g.arc(cx, cy, R[i], 0, 6.2832);
        g.lineWidth = 1.5; g.strokeStyle = cnt[i] ? 'rgba(125,211,252,.6)' : 'rgba(130,150,210,.28)';
        g.setLineDash(cnt[i] ? [] : [4, 5]); g.stroke(); g.setLineDash([]);
        g.fillStyle = 'rgba(190,205,245,.75)'; g.font = '700 9px system-ui,sans-serif'; g.textAlign = 'center';
        g.fillText(NAMES[i] + ' (n=' + (i + 1) + ') ≤' + CAPS[i], cx, cy - R[i] - 3);
        const sp = (i % 2 ? -1 : 1) * (1.25 - i * 0.24);
        for (let k = 0; k < cnt[i]; k++) {
          const a = t / 1000 * sp + k * 6.2832 / cnt[i], x = cx + R[i] * Math.cos(a), y = cy + R[i] * Math.sin(a);
          const eg = g.createRadialGradient(x, y, 0, x, y, 8);
          eg.addColorStop(0, '#ffffff'); eg.addColorStop(0.35, COL[i]); eg.addColorStop(1, 'rgba(0,0,0,0)');
          g.fillStyle = eg; g.beginPath(); g.arc(x, y, 8, 0, 6.2832); g.fill();
        }
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const age = (t - pulses[i].t0) / 650;
        if (age > 1) { pulses.splice(i, 1); continue; }
        g.beginPath(); g.arc(cx, cy, R[pulses[i].n - 1] + age * 16, 0, 6.2832);
        g.strokeStyle = 'rgba(255,255,255,' + (0.8 * (1 - age)).toFixed(2) + ')'; g.lineWidth = 2.5; g.stroke();
      }
      const ng = g.createRadialGradient(cx, cy, 2, cx, cy, 24 + Math.sin(t / 300) * 2);
      ng.addColorStop(0, '#fff7d6'); ng.addColorStop(0.4, '#ffb347'); ng.addColorStop(1, 'rgba(255,120,40,0)');
      g.fillStyle = ng; g.beginPath(); g.arc(cx, cy, 26, 0, 6.2832); g.fill();
      g.fillStyle = '#3b1500'; g.font = '800 11px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('+' + Z + 'e', cx, cy + 1); g.textBaseline = 'alphabetic';
      g.fillStyle = 'rgba(255,255,255,.8)'; g.font = '700 12px system-ui,sans-serif'; g.textAlign = 'left';
      g.fillText(PK_SYM[Z] + (q ? ' ' + sups(q) + '⁺' : ''), 10, 20);
    });
  };

  /* ==========================================================================
     2. FORMULA FORGE  (Ch 1 · Valency & chemical formulae)
     ========================================================================== */
  const FG_ION = {
    'Na+': { s: 'Na', q: 1 }, 'K+': { s: 'K', q: 1 }, 'Mg2+': { s: 'Mg', q: 2 }, 'Ca2+': { s: 'Ca', q: 2 },
    'Al3+': { s: 'Al', q: 3 }, 'Fe3+': { s: 'Fe', q: 3 }, 'Cr3+': { s: 'Cr', q: 3 }, 'NH4+': { s: 'NH4', q: 1, poly: 1 },
    'Cl-': { s: 'Cl', q: -1 }, 'O2-': { s: 'O', q: -2 }, 'S2-': { s: 'S', q: -2 }, 'N3-': { s: 'N', q: -3 },
    'OH-': { s: 'OH', q: -1, poly: 1 }, 'SO42-': { s: 'SO4', q: -2, poly: 1 }, 'PO43-': { s: 'PO4', q: -3, poly: 1 },
    'CO32-': { s: 'CO3', q: -2, poly: 1 }, 'NO3-': { s: 'NO3', q: -1, poly: 1 }
  };
  const FG_POOL = {
    easy: [['Na+', 'Cl-', 'Sodium chloride'], ['Mg2+', 'Cl-', 'Magnesium chloride'], ['Ca2+', 'O2-', 'Calcium oxide'], ['Na+', 'O2-', 'Sodium oxide'], ['Al3+', 'Cl-', 'Aluminium chloride'], ['K+', 'S2-', 'Potassium sulphide']],
    moderate: [['Na+', 'CO32-', 'Sodium carbonate'], ['Ca2+', 'OH-', 'Calcium hydroxide'], ['NH4+', 'SO42-', 'Ammonium sulphate'], ['Mg2+', 'NO3-', 'Magnesium nitrate'], ['K+', 'PO43-', 'Potassium phosphate']],
    hard: [['Al3+', 'SO42-', 'Aluminium sulphate'], ['Ca2+', 'PO43-', 'Calcium phosphate'], ['Fe3+', 'SO42-', 'Iron(III) sulphate (ferric sulphate)'], ['Cr3+', 'O2-', 'Chromium(III) oxide'], ['Mg2+', 'N3-', 'Magnesium nitride']]
  };
  const fgLabel = (id) => { const i = FG_ION[id], a = Math.abs(i.q); return chem(i.s + '^{' + (a > 1 ? a : '') + (i.q > 0 ? '+' : '−') + '}'); };
  const fgCounts = (cat, an) => { const L = lcm(Math.abs(FG_ION[cat].q), Math.abs(FG_ION[an].q)); return [L / Math.abs(FG_ION[cat].q), L / Math.abs(FG_ION[an].q)]; };
  function fgFormula(counts) {
    const ids = Object.keys(counts).filter((k) => counts[k] > 0);
    const ord = ids.filter((k) => FG_ION[k].q > 0).concat(ids.filter((k) => FG_ION[k].q < 0));
    return ord.map((k) => { const i = FG_ION[k], n = counts[k]; return (i.poly && n > 1) ? '(' + i.s + ')' + n : i.s + (n > 1 ? n : ''); }).join('');
  }

  GAMES.forge = function (ctx, mode) {
    const [cat, an, cname] = ctx.pick(FG_POOL[mode]);
    const need = fgCounts(cat, an);
    const allC = Object.keys(FG_ION).filter((k) => FG_ION[k].q > 0 && k !== cat), allA = Object.keys(FG_ION).filter((k) => FG_ION[k].q < 0 && k !== an);
    const extra = { easy: 2, moderate: 3, hard: 3 }[mode];
    const cats = shuffle([cat].concat(shuffle(allC).slice(0, extra))), ans = shuffle([an].concat(shuffle(allA).slice(0, extra)));
    const counts = {}; let qty = 1, moves = 0, done = false;
    const net = () => Object.keys(counts).reduce((a, k) => a + counts[k] * FG_ION[k].q, 0);

    const tile = (k, kind) => '<button class="fg-tile ' + kind + '" data-add="' + k + '"><span class="fg-sym">' + fgLabel(k) + '</span><small>' + (FG_ION[k].q > 0 ? '+' : '−') + Math.abs(FG_ION[k].q) + '</small></button>';
    ctx.stage.innerHTML =
      '<div class="cge-card">Forge <b>' + esc(cname) + '</b>. Pick the right <b>cation</b> and <b>anion</b>, add them in the right quantities until the net charge is <b>0</b>.</div>' +
      '<div class="fg-qty" data-r="qty"><span>Add</span>' + [1, 2, 3].map((n) => '<button class="cge-chip' + (n === 1 ? ' on' : '') + '" data-q="' + n + '">' + n + '×</button>').join('') + '</div>' +
      '<div class="fg-lab">Cations (+)</div><div class="fg-tiles">' + cats.map((k) => tile(k, 'cat')).join('') + '</div>' +
      '<div class="fg-lab">Anions (−)</div><div class="fg-tiles">' + ans.map((k) => tile(k, 'an')).join('') + '</div>' +
      '<div class="fg-cru" data-r="cru"><div class="fg-pot" data-r="pot"></div><div class="fg-formula" data-r="fx">—</div></div>' +
      '<div class="fg-meter"><div class="fg-scale"><i></i></div><div class="fg-pin" data-r="pin"></div><div class="fg-net" data-r="net">Net charge 0</div></div>' +
      '<div class="fg-acts"><button class="cge-btn" data-act="clear">↺ Clear crucible</button><button class="cge-btn pri" data-act="forge">🔨 Forge Compound</button></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    ctx.hintFn = () => 'In a neutral ionic compound <b>total positive charge = total negative charge</b>. Here ' + fgLabel(cat) + ' carries ' + (FG_ION[cat].q > 0 ? '+' : '') + FG_ION[cat].q + ' and ' + fgLabel(an) + ' carries ' + FG_ION[an].q + '. Use the criss-cross idea: take the LCM of the two charges, then divide by each charge. Polyatomic ions go inside brackets when more than one is needed, e.g. Ca(OH)<sub>2</sub>.';

    function refresh() {
      const ids = Object.keys(counts).filter((k) => counts[k] > 0), n = net();
      $('pot').innerHTML = ids.length ? ids.map((k) => '<span class="fg-chip ' + (FG_ION[k].q > 0 ? 'cat' : 'an') + '"><span>' + fgLabel(k) + ' × ' + counts[k] + '</span><button data-rm="' + k + '" aria-label="remove">−</button></span>').join('') : '<span class="cge-dim">Tap ions to drop them into the crucible…</span>';
      $('fx').innerHTML = ids.length ? chem(fgFormula(counts)) : '—';
      $('net').textContent = 'Net charge ' + (n > 0 ? '+' : '') + n;
      $('pin').style.left = (50 + clamp(n, -9, 9) / 9 * 46) + '%';
      $('cru').classList.toggle('hot', ids.length > 0 && n === 0);
      $('net').className = 'fg-net' + (ids.length && n === 0 ? ' z' : '');
    }
    ctx.stage.onclick = (e) => {
      if (done) return;
      const t = e.target.closest ? e.target.closest('[data-add],[data-rm],[data-q],[data-act]') : null;
      if (!t) return;
      if (t.hasAttribute('data-q')) {
        qty = +t.getAttribute('data-q'); sfx.tap();
        ctx.stage.querySelectorAll('[data-q]').forEach((b) => b.classList.toggle('on', +b.getAttribute('data-q') === qty));
      } else if (t.hasAttribute('data-add')) {
        const k = t.getAttribute('data-add'); counts[k] = Math.min(9, (counts[k] || 0) + qty); moves++; ctx.move(); sfx.tap(); refresh();
      } else if (t.hasAttribute('data-rm')) {
        const k = t.getAttribute('data-rm'); counts[k] = Math.max(0, (counts[k] || 0) - qty); moves++; ctx.move(); sfx.tap(); refresh();
      } else if (t.getAttribute('data-act') === 'clear') {
        Object.keys(counts).forEach((k) => delete counts[k]); ctx.move(); ctx.say(''); refresh();
      } else forge();
    };
    function forge() {
      const ids = Object.keys(counts).filter((k) => counts[k] > 0), n = net();
      if (!ids.length) { ctx.say('Add some ions to the crucible first.', 'info'); return; }
      if (n !== 0) { ctx.bad('Net charge is <b>' + (n > 0 ? '+' : '') + n + '</b>. A neutral compound needs total charge <b>0</b>.'); return; }
      const wrongSet = ids.length !== 2 || ids.indexOf(cat) < 0 || ids.indexOf(an) < 0;
      if (wrongSet) { ctx.bad('Neutral, but that is <b>' + chem(fgFormula(counts)) + '</b> — not ' + esc(cname) + '. Choose the right pair of ions.'); return; }
      if (counts[cat] !== need[0] || counts[an] !== need[1]) { ctx.bad('Charges balance, but reduce to the <b>simplest whole-number ratio</b> — that is the formula unit.'); return; }
      done = true; $('cru').classList.add('forged'); refresh();
      const f = fgFormula(counts);
      ctx.say('', '');
      ctx.win({
        effStars: moves <= need[0] + need[1] + 3 ? 3 : moves <= need[0] + need[1] + 6 ? 2 : 1,
        concept: mode === 'easy' ? 'Valency & criss-cross rule for binary ionic compounds' : mode === 'moderate' ? 'Polyatomic ions & brackets in formulae' : 'Charge neutrality with high-charge ions (Al³⁺, Fe³⁺, N³⁻, PO₄³⁻)',
        detail: '<b>' + chem(f) + '</b>: ' + need[0] + ' × (' + (FG_ION[cat].q > 0 ? '+' : '') + FG_ION[cat].q + ') + ' + need[1] + ' × (' + FG_ION[an].q + ') = 0'
      });
    }
    refresh();
  };

  /* ==========================================================================
     3. REACTION BALANCER  (Ch 1 · Equations,  Ch 7 · Redox)
     ========================================================================== */
  const BL_EQ = {
    easy: [
      { r: ['N2', 'H2'], p: ['NH3'], c: [1, 3, 2], tip: 'Balance N first (2 N atoms → 2 NH₃), then count H: 6 H atoms need 3 H₂.' },
      { r: ['H2', 'O2'], p: ['H2O'], c: [2, 1, 2], tip: 'O₂ has 2 O atoms but H₂O has only 1, so make 2 H₂O; then 4 H atoms need 2 H₂.' },
      { r: ['Mg', 'O2'], p: ['MgO'], c: [2, 1, 2], tip: 'O₂ supplies 2 O atoms, so 2 MgO are needed; then 2 Mg.' },
      { r: ['CH4', 'O2'], p: ['CO2', 'H2O'], c: [1, 2, 1, 2], tip: 'Balance C, then H (2 H₂O), and leave O for last: 2 + 2 = 4 O atoms → 2 O₂.' },
      { r: ['Fe', 'O2'], p: ['Fe2O3'], c: [4, 3, 2], tip: 'O: 2 per O₂ vs 3 per Fe₂O₃ → LCM 6 → 3 O₂ and 2 Fe₂O₃; then Fe: 4.' }
    ],
    moderate: [
      { r: ['Al', 'HCl'], p: ['AlCl3', 'H2'], c: [2, 6, 2, 3], tip: 'Cl: 3 per AlCl₃ → 2 AlCl₃ needs 6 HCl; then H gives 3 H₂.' },
      { r: ['C3H8', 'O2'], p: ['CO2', 'H2O'], c: [1, 5, 3, 4], tip: 'C → 3 CO₂, H → 4 H₂O, then oxygen: 6 + 4 = 10 O atoms → 5 O₂.' },
      { r: ['Fe2O3', 'CO'], p: ['Fe', 'CO2'], c: [1, 3, 2, 3], tip: 'Fe → 2 Fe; the 3 O atoms of Fe₂O₃ are taken by 3 CO, giving 3 CO₂.' },
      { r: ['NH3', 'O2'], p: ['NO', 'H2O'], c: [4, 5, 4, 6], tip: 'H: LCM of 3 and 2 is 6 → 2 NH₃ : 3 H₂O; oxygen then needs 2.5 O₂, so double everything: 4 : 5 : 4 : 6.' },
      { r: ['C2H6', 'O2'], p: ['CO2', 'H2O'], c: [2, 7, 4, 6], tip: 'Start with 2 C₂H₆ to avoid fractions: C → 4 CO₂, H → 6 H₂O, O → 8 + 6 = 14 → 7 O₂.' },
      { r: ['Fe', 'H2O'], p: ['Fe3O4', 'H2'], c: [3, 4, 1, 4], tip: 'Fe → 3 Fe for one Fe₃O₄; O → 4 H₂O; then H gives 4 H₂.' },
      { r: ['C6H12O6', 'O2'], p: ['CO2', 'H2O'], c: [1, 6, 6, 6], tip: 'C → 6 CO₂, H → 6 H₂O; right side has 12 + 6 = 18 O, glucose supplies 6, so O₂ supplies 12 → 6 O₂.' }
    ],
    hard: [
      { r: ['KMnO4', 'HCl'], p: ['KCl', 'MnCl2', 'Cl2', 'H2O'], c: [2, 16, 2, 2, 5, 8], tip: 'Mn: +7 → +2 gains 5 e⁻; 2 Cl⁻ → Cl₂ loses 2 e⁻. LCM 10 → 2 KMnO₄ : 5 Cl₂. Then balance K, Mn, Cl, H, O.' },
      { r: ['Cu', 'HNO3'], p: ['Cu(NO3)2', 'NO', 'H2O'], c: [3, 8, 3, 2, 4], tip: 'Cu: 0 → +2 loses 2 e⁻; N: +5 → +2 gains 3 e⁻. LCM 6 → 3 Cu : 2 NO. Then balance N, H, O.' },
      { r: ['P4', 'NaOH', 'H2O'], p: ['PH3', 'NaH2PO2'], c: [1, 3, 3, 1, 3], tip: 'Disproportionation: P (0) → −3 in PH₃ gains 3 e⁻, and P (0) → +1 in NaH₂PO₂ loses 1 e⁻ each, so 1 PH₃ pairs with 3 NaH₂PO₂.' },
      { r: ['MnO2', 'HCl'], p: ['MnCl2', 'Cl2', 'H2O'], c: [1, 4, 1, 1, 2], tip: 'Mn: +4 → +2 gains 2 e⁻; 2 Cl⁻ → Cl₂ loses 2 e⁻, so the ratio is 1 : 1. Then balance Cl, H, O.' },
      { r: ['K2Cr2O7', 'HCl'], p: ['KCl', 'CrCl3', 'Cl2', 'H2O'], c: [1, 14, 2, 2, 3, 7], tip: 'Two Cr: +6 → +3 gain 6 e⁻ in total; 3 Cl₂ lose 6 e⁻. Then balance K, Cr, Cl, H, O.' }
    ]
  };

  GAMES.balancer = function (ctx, mode) {
    const eq = ctx.pick(BL_EQ[mode]);
    const sp = eq.r.concat(eq.p), nR = eq.r.length, comp = sp.map(parseFormula);
    const els = [];
    comp.forEach((c) => Object.keys(c).forEach((e) => { if (els.indexOf(e) < 0) els.push(e); }));
    const co = sp.map(() => 1), opt = eq.c.reduce((a, c) => a + c - 1, 0);
    let done = false, moves = 0, ang = 0, tgt = 0;
    const tally = (from, to) => { const r = {}; els.forEach((e) => { r[e] = 0; }); for (let i = from; i < to; i++) els.forEach((e) => { r[e] += (comp[i][e] || 0) * co[i]; }); return r; };

    const pan = (k) => '<g data-r="' + k + '"><line x1="0" y1="0" x2="-28" y2="34" stroke="#8ea2e8" stroke-width="1.5"/><line x1="0" y1="0" x2="28" y2="34" stroke="#8ea2e8" stroke-width="1.5"/>' +
      '<path d="M-36 34 Q0 64 36 34 Z" fill="#1f2d66" stroke="#7d92e8" stroke-width="2"/><text data-r="' + k + 't" x="0" y="46" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">0</text></g>';
    ctx.stage.innerHTML =
      '<div class="cge-card">Balance the equation so every element has the <b>same count on both pans</b>, in the <b>simplest whole-number ratio</b>.</div>' +
      '<svg class="bl-scale" viewBox="0 0 340 132" xmlns="http://www.w3.org/2000/svg"><path d="M170 40 L148 124 L192 124 Z" fill="#243063"/><rect x="128" y="121" width="84" height="7" rx="3" fill="#33437f"/>' +
      '<line data-r="beam" x1="60" y1="40" x2="280" y2="40" stroke="#b6c6ff" stroke-width="5" stroke-linecap="round"/><circle cx="170" cy="40" r="7" fill="#ffc857"/>' + pan('pl') + pan('pr') + '</svg>' +
      '<div class="bl-sides"><span>◀ Reactants</span><span>Products ▶</span></div>' +
      '<div class="bl-rows" data-r="rows"></div><div class="bl-eq" data-r="eq"></div>' +
      '<div class="fg-acts"><button class="cge-btn" data-act="reset">↺ Reset coefficients</button><button class="cge-btn pri" data-act="submit" data-r="sub">✅ Submit Equation</button></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    ctx.moveFmt = (m) => 'Moves ' + m + ' · Optimal ' + opt;
    ctx.setMoves(ctx.moveFmt(0));
    ctx.hintFn = () => eq.tip + ' Atoms are conserved (law of conservation of mass): never change a subscript — only the coefficients.';

    function refresh() {
      const L = tally(0, nR), R = tally(nR, sp.length);
      let sl = 0, sr = 0, okc = 0, mx = 1;
      els.forEach((e) => { sl += L[e]; sr += R[e]; if (L[e] === R[e]) okc++; mx = Math.max(mx, L[e], R[e]); });
      $('rows').innerHTML = els.map((e) => '<div class="bl-row ' + (L[e] === R[e] ? 'ok' : 'bad') + '"><b>' + e + '</b><span class="bl-n">' + L[e] + '</span><div class="bl-bars"><div class="hl"><i style="width:' + (L[e] / mx * 100) + '%"></i></div><div class="hr"><i style="width:' + (R[e] / mx * 100) + '%"></i></div></div><span class="bl-n">' + R[e] + '</span></div>').join('');
      let h = '';
      sp.forEach((f, i) => {
        if (i === nR) h += '<span class="bl-arrow">→</span>'; else if (i) h += '<span class="bl-op">+</span>';
        h += '<div class="bl-sp"><div class="bl-f">' + chem(f) + '</div><div class="bl-st"><button data-i="' + i + '" data-d="-1" aria-label="decrease">−</button><b>' + co[i] + '</b><button data-i="' + i + '" data-d="1" aria-label="increase">+</button></div></div>';
      });
      $('eq').innerHTML = h;
      tgt = clamp((sr - sl) / Math.max(1, sl + sr) * 1.1, -0.28, 0.28);
      $('pl' + 't').textContent = sl; $('pr' + 't').textContent = sr;
      $('sub').classList.toggle('glow', okc === els.length);
      ctx.setStatus('⚖️ ' + okc + '/' + els.length + ' balanced');
    }
    const eqText = () => sp.map((f, i) => (i === nR ? '→ ' : i ? '+ ' : '') + (co[i] > 1 ? co[i] : '') + f).join(' ');
    ctx.stage.onclick = (e) => {
      if (done) return;
      const t = e.target.closest ? e.target.closest('[data-i],[data-act]') : null;
      if (!t) return;
      if (t.hasAttribute('data-i')) {
        const i = +t.getAttribute('data-i'), d = +t.getAttribute('data-d'), v = clamp(co[i] + d, 1, 24);
        if (v === co[i]) return;
        co[i] = v; moves++; ctx.move(); sfx.tap(); refresh(); return;
      }
      if (t.getAttribute('data-act') === 'reset') { sp.forEach((f, i) => { co[i] = 1; }); ctx.move(); ctx.say(''); refresh(); return; }
      const L = tally(0, nR), R = tally(nR, sp.length), bad = els.filter((x) => L[x] !== R[x]);
      if (bad.length) { const x = bad[0]; ctx.bad('Not balanced: <b>' + x + '</b> has ' + L[x] + ' atom(s) on the left but ' + R[x] + ' on the right' + (bad.length > 1 ? ' (and ' + (bad.length - 1) + ' more element(s) differ).' : '.')); return; }
      let g = 0; co.forEach((c) => { g = gcd(g, c); });
      if (g > 1) { ctx.bad('Atoms balance, but all coefficients share a factor of <b>' + g + '</b>. Reduce to the simplest whole-number ratio.'); return; }
      done = true; refresh();
      ctx.win({
        effStars: moves <= opt ? 3 : moves <= Math.ceil(opt * 1.5) + 1 ? 2 : 1,
        concept: mode === 'hard' ? 'Redox balancing: n-factor / electron gain = electron loss' : 'Law of conservation of mass — balancing chemical equations',
        detail: '<b>' + chem(eqText()) + '</b> (' + moves + ' moves, optimal ' + opt + ')'
      });
    };
    refresh(); ang = tgt;
    const beam = $('beam'), pl = $('pl'), pr = $('pr');
    ctx.loop(() => {
      ang += (tgt - ang) * 0.12;
      const c = Math.cos(ang), s = Math.sin(ang), lx = 170 - 110 * c, ly = 40 - 110 * s, rx = 170 + 110 * c, ry = 40 + 110 * s;
      beam.setAttribute('x1', lx.toFixed(1)); beam.setAttribute('y1', ly.toFixed(1)); beam.setAttribute('x2', rx.toFixed(1)); beam.setAttribute('y2', ry.toFixed(1));
      pl.setAttribute('transform', 'translate(' + lx.toFixed(1) + ' ' + ly.toFixed(1) + ')');
      pr.setAttribute('transform', 'translate(' + rx.toFixed(1) + ' ' + ry.toFixed(1) + ')');
    });
  };

  /* ==========================================================================
     4. SHAPE SHIFT: MOLECULES  (Ch 4 · VSEPR & hybridisation)
     ========================================================================== */
  const SS_MOLS = {
    easy: [
      { f: 'BeCl2', c: 'Be', l: 'Cl', ve: 2, used: 2, bp: 2, lp: 0, shape: 'Linear', hyb: 'sp', ang: '180°' },
      { f: 'BF3', c: 'B', l: 'F', ve: 3, used: 3, bp: 3, lp: 0, shape: 'Trigonal planar', hyb: 'sp²', ang: '120°' },
      { f: 'CH4', c: 'C', l: 'H', ve: 4, used: 4, bp: 4, lp: 0, shape: 'Tetrahedral', hyb: 'sp³', ang: '109.5°' }
    ],
    moderate: [
      { f: 'NH3', c: 'N', l: 'H', ve: 5, used: 3, bp: 3, lp: 1, shape: 'Trigonal pyramidal', hyb: 'sp³', ang: '107°' },
      { f: 'H2O', c: 'O', l: 'H', ve: 6, used: 2, bp: 2, lp: 2, shape: 'Bent (V-shaped)', hyb: 'sp³', ang: '104.5°' },
      { f: 'SO2', c: 'S', l: 'O', ve: 6, used: 4, bp: 2, lp: 1, shape: 'Bent', hyb: 'sp²', ang: '≈119° (< 120°)' },
      { f: 'PCl5', c: 'P', l: 'Cl', ve: 5, used: 5, bp: 5, lp: 0, shape: 'Trigonal bipyramidal', hyb: 'sp³d', ang: '90° and 120°' }
    ],
    hard: [
      { f: 'SF4', c: 'S', l: 'F', ve: 6, used: 4, bp: 4, lp: 1, shape: 'See-saw', hyb: 'sp³d', ang: '≈102° and ≈173°' },
      { f: 'ClF3', c: 'Cl', l: 'F', ve: 7, used: 3, bp: 3, lp: 2, shape: 'T-shaped', hyb: 'sp³d', ang: '≈87.5° (< 90°)' },
      { f: 'XeF2', c: 'Xe', l: 'F', ve: 8, used: 2, bp: 2, lp: 3, shape: 'Linear', hyb: 'sp³d', ang: '180°' },
      { f: 'XeF4', c: 'Xe', l: 'F', ve: 8, used: 4, bp: 4, lp: 2, shape: 'Square planar', hyb: 'sp³d²', ang: '90°' },
      { f: 'SF6', c: 'S', l: 'F', ve: 6, used: 6, bp: 6, lp: 0, shape: 'Octahedral', hyb: 'sp³d²', ang: '90°' },
      { f: 'BrF5', c: 'Br', l: 'F', ve: 7, used: 5, bp: 5, lp: 1, shape: 'Square pyramidal', hyb: 'sp³d²', ang: '< 90° (≈ 85°)' }
    ]
  };
  const SS_NAME = { '2-0': 'Linear', '3-0': 'Trigonal planar', '2-1': 'Bent', '4-0': 'Tetrahedral', '3-1': 'Trigonal pyramidal', '2-2': 'Bent (V-shaped)', '5-0': 'Trigonal bipyramidal', '4-1': 'See-saw', '3-2': 'T-shaped', '2-3': 'Linear', '6-0': 'Octahedral', '5-1': 'Square pyramidal', '4-2': 'Square planar' };
  const SS_DIRS = {
    1: [[1, 0, 0]],
    2: [[-1, 0, 0], [1, 0, 0]],
    3: [0, 120, 240].map((a) => [Math.cos(a * Math.PI / 180), 0, Math.sin(a * Math.PI / 180)]),
    4: [[0, 1, 0], [0.9428, -0.3333, 0], [-0.4714, -0.3333, 0.8165], [-0.4714, -0.3333, -0.8165]],
    5: [[0, 1, 0], [0, -1, 0]].concat([0, 120, 240].map((a) => [Math.cos(a * Math.PI / 180), 0, Math.sin(a * Math.PI / 180)])),
    6: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]
  };
  /* preferred positions for lone pairs: equatorial in TBP, trans pairs in octahedral */
  const SS_LPORD = { 1: [0], 2: [0, 1], 3: [0, 1, 2], 4: [0, 1, 2, 3], 5: [2, 3, 4, 0, 1], 6: [1, 0, 2, 3, 4, 5] };
  function ssDomains(bp, lp) {
    const sn = clamp(bp + lp, 0, 6);
    if (!sn) return { bonds: [], lones: [] };
    const dirs = SS_DIRS[sn], order = SS_LPORD[sn], L = Math.min(lp, sn), lset = order.slice(0, L);
    return { bonds: dirs.filter((d, i) => lset.indexOf(i) < 0), lones: lset.map((i) => dirs[i]) };
  }
  const SS_ROLL = 0.52, SS_PITCH = 0.42;
  function ssProj(v, yaw, R, cx, cy) {
    const cr = Math.cos(SS_ROLL), sr = Math.sin(SS_ROLL), cyw = Math.cos(yaw), syw = Math.sin(yaw), cp = Math.cos(SS_PITCH), spp = Math.sin(SS_PITCH);
    const x = v[0] * cr - v[1] * sr, y = v[0] * sr + v[1] * cr, z = v[2];
    const x2 = x * cyw + z * syw, z2 = -x * syw + z * cyw;
    const y3 = y * cp - z2 * spp, z3 = y * spp + z2 * cp, p = 1 + 0.12 * z3;
    return { x: cx + x2 * R * p, y: cy - y3 * R * p, z: z3, p: p };
  }
  const SS_COL = { H: '#f1f5f9', F: '#86efac', Cl: '#4ade80', O: '#f87171', Br: '#fb923c' };

  GAMES.shapeshift = function (ctx, mode) {
    const T = ctx.pick(SS_MOLS[mode]);
    const tyaw = (Math.random() < 0.5 ? -1 : 1) * (35 + rand(110)) * Math.PI / 180;
    let bp = 0, lp = 0, yaw = 0, moves = 0, done = false, score = 0;
    const CX = 170, CY = 128, R = 78;

    ctx.stage.innerHTML =
      '<div class="cge-card">Build the shape of <b>' + chem(T.f) + '</b>. Add <b>bond pairs</b> (atoms) and <b>lone pairs</b> (..) around <b>' + T.c + '</b>, then <b>rotate</b> your model onto the glowing silhouette and lock it.</div>' +
      '<div class="ss-cv"></div>' +
      '<div class="ss-info"><span>Central atom <b>' + T.c + '</b></span><span>Valence e⁻ <b>' + T.ve + '</b></span><span>Bonded atoms <b>' + T.bp + ' × ' + T.l + '</b></span><span>Target angle <b>' + T.ang + '</b></span></div>' +
      '<div class="ss-build"><div class="ss-step"><span>Bond pairs</span><button data-s="bp" data-d="-1">−</button><b data-r="bp">0</b><button data-s="bp" data-d="1">+</button></div>' +
      '<div class="ss-step"><span>Lone pairs</span><button data-s="lp" data-d="-1">−</button><b data-r="lp">0</b><button data-s="lp" data-d="1">+</button></div></div>' +
      '<div class="ss-rot"><button class="cge-btn" data-rot="-15">🔄 −15°</button><input type="range" min="-180" max="180" step="1" value="0" data-r="sl" aria-label="Rotate model"><button class="cge-btn" data-rot="15">🔄 +15°</button></div>' +
      '<div class="ss-meter"><div class="ss-bar"><i data-r="bar"></i></div><span data-r="pct">Alignment —</span></div>' +
      '<div class="fg-acts"><button class="cge-btn pri" data-act="lock">🔒 Lock Shape</button></div><div data-r="res"></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, 250);
    ctx.stage.querySelector('.ss-cv').appendChild(cvh.cv);
    ctx.moveFmt = (m) => 'Moves ' + m;
    ctx.hintFn = () => 'Steric number = bond pairs + lone pairs (2 linear <i>sp</i>, 3 trigonal planar <i>sp²</i>, 4 tetrahedral <i>sp³</i>, 5 trigonal bipyramidal <i>sp³d</i>, 6 octahedral <i>sp³d²</i>). Lone pairs = (valence e⁻ of the central atom − e⁻ it uses in bonds) ÷ 2. ' + T.c + ' has ' + T.ve + ' valence electrons and its ' + T.bp + ' bonded atom(s) use ' + T.used + ' of them. Lone pairs repel more than bond pairs, so bond angles shrink (CH₄ 109.5° → NH₃ 107° → H₂O 104.5°).';

    function bondPoints(b, l, ya) { return ssDomains(b, l).bonds.map((v) => ssProj(v, ya, R, CX, CY)); }
    function alignment() {
      if (bp !== T.bp) return 0;
      const P = bondPoints(bp, lp, yaw), Q = bondPoints(T.bp, T.lp, tyaw);
      let sum = 0;
      Q.forEach((q) => { let m = 1e9; P.forEach((p) => { m = Math.min(m, Math.hypot(p.x - q.x, p.y - q.y)); }); sum += m; });
      return clamp(1 - (sum / Q.length) / (0.65 * R), 0, 1);
    }
    function sync() {
      $('bp').textContent = bp; $('lp').textContent = lp;
      score = alignment();
      $('bar').style.width = Math.round(score * 100) + '%';
      $('bar').className = score >= 0.8 ? 'ok' : '';
      $('pct').textContent = bp === T.bp ? 'Alignment ' + Math.round(score * 100) + '% (need 80%)' : 'Alignment — (add all ' + T.bp + ' bonded atoms)';
      ctx.setStatus('🧩 ' + bp + ' BP · ' + lp + ' LP');
    }
    ctx.stage.onclick = (e) => {
      if (done) return;
      const t = e.target.closest ? e.target.closest('[data-s],[data-rot],[data-act]') : null;
      if (!t) return;
      if (t.hasAttribute('data-s')) {
        const k = t.getAttribute('data-s'), d = +t.getAttribute('data-d');
        const nb = k === 'bp' ? bp + d : bp, nl = k === 'lp' ? lp + d : lp;
        if (nb < 0 || nl < 0) return;
        if (nb + nl > 6) { ctx.say('Maximum 6 electron domains around a central atom (sp³d² is the limit in Class 11).', 'info'); return; }
        bp = nb; lp = nl; moves++; ctx.move(); sfx.pop(); ctx.say(''); sync();
      } else if (t.hasAttribute('data-rot')) {
        yaw += (+t.getAttribute('data-rot')) * Math.PI / 180;
        yaw = Math.atan2(Math.sin(yaw), Math.cos(yaw)); $('sl').value = Math.round(yaw * 180 / Math.PI);
        moves++; ctx.move(); sfx.tap(); sync();
      } else lock();
    };
    $('sl').addEventListener('input', () => { yaw = (+$('sl').value) * Math.PI / 180; sync(); });
    $('sl').addEventListener('change', () => { moves++; ctx.move(); });
    let drag = null;
    cvh.cv.addEventListener('pointerdown', (e) => { if (done) return; drag = { x: e.clientX, y0: yaw }; safe(() => cvh.cv.setPointerCapture(e.pointerId)); });
    cvh.cv.addEventListener('pointermove', (e) => {
      if (!drag) return;
      yaw = drag.y0 + (e.clientX - drag.x) * 0.012; yaw = Math.atan2(Math.sin(yaw), Math.cos(yaw));
      $('sl').value = Math.round(yaw * 180 / Math.PI); sync();
    });
    const endDrag = () => { if (drag && Math.abs(yaw - drag.y0) > 0.03) { moves++; ctx.move(); } drag = null; };
    cvh.cv.addEventListener('pointerup', endDrag); cvh.cv.addEventListener('pointercancel', endDrag);

    function lock() {
      if (bp < 1) { ctx.say('Add bond pairs and lone pairs first.', 'info'); return; }
      if (bp !== T.bp || lp !== T.lp) {
        const nm = SS_NAME[bp + '-' + lp] || 'an unstable arrangement';
        ctx.bad('Your model is <b>' + nm + '</b> (' + bp + ' BP + ' + lp + ' LP). ' + chem(T.f) + ' does not match — recount the central atom\'s lone pairs: ' + T.c + ' has ' + T.ve + ' valence e⁻.');
        return;
      }
      if (score < 0.8) { ctx.say('Right electron pairs! Now <b>rotate</b> until the alignment reaches 80%.', 'info'); return; }
      done = true;
      $('res').innerHTML = '<div class="cge-card ok"><b>' + chem(T.f) + '</b> — ' + T.shape + '<br>' + T.bp + ' BP + ' + T.lp + ' LP · hybridisation <b>' + T.hyb + '</b> · bond angle ' + T.ang + '</div>';
      ctx.win({
        effStars: moves <= T.bp + T.lp + 6 ? 3 : moves <= T.bp + T.lp + 14 ? 2 : 1,
        concept: mode === 'easy' ? 'VSEPR: bond pairs only — linear, trigonal planar, tetrahedral' : mode === 'moderate' ? 'Lone-pair repulsion: bent, pyramidal & trigonal bipyramidal shapes' : 'VSEPR specials: see-saw, T-shape, square planar & sp³d / sp³d² hybridisation',
        detail: chem(T.f) + ' is ' + T.shape + ' (' + T.hyb + ').'
      });
    }
    sync();

    ctx.loop((t) => {
      const g = cvh.g;
      const bg = g.createRadialGradient(CX, CY, 10, CX, CY, 190);
      bg.addColorStop(0, '#142456'); bg.addColorStop(1, '#070c20');
      g.fillStyle = bg; g.fillRect(0, 0, 340, 250);
      /* target silhouette (bonded atoms only) */
      const pulse = 0.55 + 0.25 * Math.sin(t / 380), ok = score >= 0.8 && bp === T.bp;
      const tp = bondPoints(T.bp, T.lp, tyaw);
      g.setLineDash([5, 5]); g.lineWidth = 2;
      tp.forEach((p) => {
        g.strokeStyle = ok ? 'rgba(46,230,166,' + pulse + ')' : 'rgba(110,231,255,' + pulse + ')';
        g.beginPath(); g.moveTo(CX, CY); g.lineTo(p.x, p.y); g.stroke();
      });
      g.setLineDash([]);
      tp.forEach((p) => {
        g.shadowColor = ok ? '#2ee6a6' : '#6ee7ff'; g.shadowBlur = 14;
        g.fillStyle = 'rgba(110,231,255,.10)'; g.strokeStyle = ok ? 'rgba(46,230,166,' + pulse + ')' : 'rgba(110,231,255,' + pulse + ')'; g.lineWidth = 2.5; g.setLineDash([4, 4]);
        g.beginPath(); g.arc(p.x, p.y, 17 * p.p, 0, 6.2832); g.fill(); g.stroke(); g.setLineDash([]); g.shadowBlur = 0;
      });
      g.fillStyle = 'rgba(160,230,255,.7)'; g.font = '700 10px system-ui,sans-serif'; g.textAlign = 'left'; g.fillText('TARGET SILHOUETTE', 10, 18);
      /* player's model, painter's order */
      const dm = ssDomains(bp, lp), items = [];
      dm.bonds.forEach((v) => items.push({ k: 'b', p: ssProj(v, yaw, R, CX, CY) }));
      dm.lones.forEach((v) => items.push({ k: 'l', p: ssProj(v, yaw, R * 0.62, CX, CY), q: ssProj(v, yaw, R * 0.15, CX, CY), tip: ssProj(v, yaw, R * 0.98, CX, CY) }));
      items.push({ k: 'c', p: { x: CX, y: CY, z: 0, p: 1 } });
      items.sort((a, b) => a.p.z - b.p.z);
      items.forEach((it) => {
        if (it.k !== 'b') return;
        g.strokeStyle = 'rgba(210,225,255,.9)'; g.lineWidth = 5 * it.p.p; g.lineCap = 'round';
        g.beginPath(); g.moveTo(CX, CY); g.lineTo(it.p.x, it.p.y); g.stroke();
      });
      items.forEach((it) => {
        const p = it.p;
        if (it.k === 'b') {
          const col = SS_COL[T.l] || '#93c5fd', ag = g.createRadialGradient(p.x - 4, p.y - 4, 1, p.x, p.y, 16 * p.p);
          ag.addColorStop(0, '#ffffff'); ag.addColorStop(0.35, col); ag.addColorStop(1, '#1e293b');
          g.fillStyle = ag; g.beginPath(); g.arc(p.x, p.y, 14.5 * p.p, 0, 6.2832); g.fill();
          g.fillStyle = '#06101f'; g.font = '800 ' + Math.round(11 * p.p) + 'px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(T.l, p.x, p.y + 1); g.textBaseline = 'alphabetic';
        } else if (it.k === 'l') {
          const dx = it.tip.x - CX, dy = it.tip.y - CY, len = Math.hypot(dx, dy), rot = Math.atan2(dy, dx);
          const rx = Math.max(8, len * 0.34), ry = 11 * p.p;
          g.save(); g.shadowColor = '#fde047'; g.shadowBlur = 12;
          g.fillStyle = 'rgba(253,224,71,.28)'; g.strokeStyle = 'rgba(253,224,71,.9)'; g.lineWidth = 2;
          g.beginPath(); g.ellipse(p.x, p.y, rx, ry, rot, 0, 6.2832); g.fill(); g.stroke(); g.restore();
          const ux = Math.cos(rot) * 4.5, uy = Math.sin(rot) * 4.5;
          g.fillStyle = '#fff7b0';
          g.beginPath(); g.arc(p.x - ux, p.y - uy, 2.8, 0, 6.2832); g.arc(p.x + ux, p.y + uy, 2.8, 0, 6.2832); g.fill();
        } else {
          const cg = g.createRadialGradient(CX - 5, CY - 5, 2, CX, CY, 23);
          cg.addColorStop(0, '#fff3c4'); cg.addColorStop(0.5, '#fbbf24'); cg.addColorStop(1, '#92400e');
          g.fillStyle = cg; g.shadowColor = ok ? '#2ee6a6' : '#fbbf24'; g.shadowBlur = ok ? 20 : 8;
          g.beginPath(); g.arc(CX, CY, 21, 0, 6.2832); g.fill(); g.shadowBlur = 0;
          g.fillStyle = '#2b1500'; g.font = '800 14px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(T.c, CX, CY + 1); g.textBaseline = 'alphabetic';
        }
      });
      g.fillStyle = 'rgba(255,255,255,.55)'; g.font = '600 10px system-ui,sans-serif'; g.textAlign = 'right'; g.fillText('drag to rotate ⟲', 330, 242);
    });
  };

  /* ==========================================================================
     5. TREND DETECTIVE  (Ch 3 · Periodic trends)
     ========================================================================== */
  const DT_EL = [
    ['H', 1, 'Hydrogen', 1, 1], ['He', 2, 'Helium', 1, 18],
    ['Li', 3, 'Lithium', 2, 1], ['Be', 4, 'Beryllium', 2, 2], ['B', 5, 'Boron', 2, 13], ['C', 6, 'Carbon', 2, 14], ['N', 7, 'Nitrogen', 2, 15], ['O', 8, 'Oxygen', 2, 16], ['F', 9, 'Fluorine', 2, 17], ['Ne', 10, 'Neon', 2, 18],
    ['Na', 11, 'Sodium', 3, 1], ['Mg', 12, 'Magnesium', 3, 2], ['Al', 13, 'Aluminium', 3, 13], ['Si', 14, 'Silicon', 3, 14], ['P', 15, 'Phosphorus', 3, 15], ['S', 16, 'Sulphur', 3, 16], ['Cl', 17, 'Chlorine', 3, 17], ['Ar', 18, 'Argon', 3, 18],
    ['K', 19, 'Potassium', 4, 1], ['Ca', 20, 'Calcium', 4, 2], ['Sc', 21, 'Scandium', 4, 3], ['Ti', 22, 'Titanium', 4, 4], ['V', 23, 'Vanadium', 4, 5], ['Cr', 24, 'Chromium', 4, 6], ['Mn', 25, 'Manganese', 4, 7], ['Fe', 26, 'Iron', 4, 8], ['Co', 27, 'Cobalt', 4, 9], ['Ni', 28, 'Nickel', 4, 10], ['Cu', 29, 'Copper', 4, 11], ['Zn', 30, 'Zinc', 4, 12],
    ['Ga', 31, 'Gallium', 4, 13], ['Ge', 32, 'Germanium', 4, 14], ['As', 33, 'Arsenic', 4, 15], ['Se', 34, 'Selenium', 4, 16], ['Br', 35, 'Bromine', 4, 17], ['Kr', 36, 'Krypton', 4, 18],
    ['Rb', 37, 'Rubidium', 5, 1], ['Sr', 38, 'Strontium', 5, 2], ['In', 49, 'Indium', 5, 13], ['Sn', 50, 'Tin', 5, 14], ['Sb', 51, 'Antimony', 5, 15], ['Te', 52, 'Tellurium', 5, 16], ['I', 53, 'Iodine', 5, 17], ['Xe', 54, 'Xenon', 5, 18],
    ['Cs', 55, 'Caesium', 6, 1], ['Ba', 56, 'Barium', 6, 2], ['Tl', 81, 'Thallium', 6, 13], ['Pb', 82, 'Lead', 6, 14], ['Bi', 83, 'Bismuth', 6, 15], ['Po', 84, 'Polonium', 6, 16], ['At', 85, 'Astatine', 6, 17], ['Rn', 86, 'Radon', 6, 18]
  ];
  const DT_POS = {};
  DT_EL.forEach((e) => { DT_POS[e[0]] = { z: e[1], name: e[2], p: e[3], g: e[4] }; });
  const S = (s) => s.split(' ');
  const DT_CASES = {
    easy: [
      { start: 'Li', concept: 'Periodic trends: atomic radius & metallic character', steps: [
        { q: 'Atomic radius <b>increases down a group</b>. Among Li, Na and K, tap the element with the <b>largest</b> atomic radius.', am: S('Li Na K'), a: 'K', why: 'Each period adds a shell, so radius grows down the group: K &gt; Na &gt; Li.' },
        { q: 'Atomic radius <b>decreases across a period</b> (noble gas excluded). From K, tap the element with the <b>smallest</b> radius among K, Ca, Ga, Ge, As, Se and Br.', am: S('K Ca Ga Ge As Se Br'), a: 'Br', why: 'Same number of shells but rising nuclear charge pulls the electrons in: Br is the smallest.' },
        { q: 'Metallic character <b>increases down a group</b>. Among N, P and As, tap the <b>most metallic</b> element.', am: S('N P As'), a: 'As', why: 'Ionisation enthalpy falls down the group, so electron loss (metallic character) is easiest for As.' } ] },
      { start: 'Na', concept: 'Periodic trends: atomic radius & metallic character', steps: [
        { q: 'Atomic radius <b>decreases across a period</b>. Tap the element with the <b>smallest</b> radius among Na, Mg, Al, Si, P, S and Cl.', am: S('Na Mg Al Si P S Cl'), a: 'Cl', why: 'Effective nuclear charge increases from Na to Cl within the same shell.' },
        { q: 'From Cl, go up the halogens. Tap the halogen with the <b>smallest</b> atomic radius among F, Cl, Br and I.', am: S('F Cl Br I'), a: 'F', why: 'F has only two shells, so it is the smallest halogen.' },
        { q: 'From F, look along Period 2. Tap the element with the <b>largest</b> atomic radius among Li, Be, B, C, N, O and F.', am: S('Li Be B C N O F'), a: 'Li', why: 'Radius is greatest at the left end of a period: Li.' } ] },
      { start: 'Be', concept: 'Periodic trends: atomic radius & metallic character', steps: [
        { q: 'Metallic character <b>decreases across a period</b>. Tap the <b>most metallic</b> element among Li, Be, B, C, N, O and F.', am: S('Li Be B C N O F'), a: 'Li', why: 'Metals lose electrons most easily at the left end of the period: Li.' },
        { q: 'Metallic character <b>increases down a group</b>. From Li, tap the <b>most metallic</b> element among Li, Na and K.', am: S('Li Na K'), a: 'K', why: 'Larger atoms hold the valence electron less tightly: K.' },
        { q: 'From K, cross Period 4. Tap the <b>least metallic</b> (most non-metallic) element among K, Ca, Ga, Ge, As, Se and Br.', am: S('K Ca Ga Ge As Se Br'), a: 'Br', why: 'Non-metallic character grows across the period: Br.' } ] },
      { start: 'Mg', concept: 'Periodic trends: atomic radius & metallic character', steps: [
        { q: 'Tap the alkaline earth metal with the <b>largest</b> atomic radius among Be, Mg, Ca and Sr.', am: S('Be Mg Ca Sr'), a: 'Sr', why: 'Radius increases down Group 2: Sr &gt; Ca &gt; Mg &gt; Be.' },
        { q: 'Metallic character <b>increases down a group</b>. Among C, Si, Ge and Sn, tap the <b>most metallic</b> element.', am: S('C Si Ge Sn'), a: 'Sn', why: 'Group 14 changes from non-metal (C) to metal (Sn, Pb).' },
        { q: 'From Sn, cross Period 5. Tap the element with the <b>smallest</b> atomic radius among Sn, Sb, Te and I.', am: S('Sn Sb Te I'), a: 'I', why: 'Radius shrinks across the period: I is the smallest of the four.' } ] },
      { start: 'Ne', concept: 'Periodic trends: atomic radius & metallic character', steps: [
        { q: 'Tap the <b>most metallic</b> element among Li, Na and K.', am: S('Li Na K'), a: 'K', why: 'Metallic character rises down Group 1: K.' },
        { q: 'From K, move within Period 4. Tap the element with the <b>smallest</b> atomic radius among K, Ca, Sc and Zn.', am: S('K Ca Sc Zn'), a: 'Zn', why: 'Nuclear charge rises (and 3d electrons shield poorly), so Zn is the smallest of these.' },
        { q: 'From Zn, go to the halogens. Tap the halogen with the <b>largest</b> atomic radius among F, Cl and Br.', am: S('F Cl Br'), a: 'Br', why: 'Radius increases down the group: Br &gt; Cl &gt; F.' } ] }
    ],
    moderate: [
      { start: 'O', concept: 'Electronegativity, valency & isoelectronic species', steps: [
        { q: 'Electronegativity <b>increases across a period and decreases down a group</b>. Tap the <b>most electronegative</b> element among N, O, F and Cl.', am: S('N O F Cl'), a: 'F', why: 'F is the most electronegative element of all (Pauling 4.0).' },
        { q: 'N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ and Al³⁺ are <b>isoelectronic</b> (10 e⁻): more protons pull harder, so the ion is smaller. Tap the element whose ion is the <b>largest</b>.', am: S('N O F Na Mg Al'), a: 'N', why: 'N³⁻ has the fewest protons (7) holding 10 electrons, so it is the largest.' },
        { q: 'Valency towards <b>hydrogen</b> first increases and then decreases across Period 3 (NaH, MgH₂, AlH₃, SiH₄, PH₃, H₂S, HCl). Tap the element with the <b>maximum</b> valency (4).', am: S('Na Mg Al Si P S Cl'), a: 'Si', why: 'SiH₄: silicon shows its maximum valency of 4 towards hydrogen.' } ] },
      { start: 'Na', concept: 'Electronegativity, valency & isoelectronic species', steps: [
        { q: 'Electronegativity <b>decreases down a group</b>. Tap the <b>most electronegative</b> element among Cl, Br and I.', am: S('Cl Br I'), a: 'Cl', why: 'Cl (3.0) &gt; Br (2.8) &gt; I (2.5).' },
        { q: 'S²⁻, Cl⁻, K⁺ and Ca²⁺ are <b>isoelectronic</b> (18 e⁻). Tap the element whose ion is the <b>smallest</b>.', am: S('S Cl K Ca'), a: 'Ca', why: 'Ca²⁺ has the most protons (20) for 18 electrons, so it is the smallest.' },
        { q: 'From Ca, cross Period 4. Tap the <b>most electronegative</b> element among K, Ca, Ga, Ge, As, Se and Br.', am: S('K Ca Ga Ge As Se Br'), a: 'Br', why: 'Electronegativity rises across the period: Br (2.96).' } ] },
      { start: 'C', concept: 'Electronegativity, valency & isoelectronic species', steps: [
        { q: 'Tap the <b>most electronegative</b> element among O, S and Se.', am: S('O S Se'), a: 'O', why: 'Electronegativity decreases down Group 16: O (3.5) is highest.' },
        { q: 'Valency towards <b>oxygen</b> rises from 1 (Na₂O) to 7 (Cl₂O₇) across Period 3. Tap the element with the <b>highest</b> valency towards oxygen.', am: S('Na Mg Al Si P S Cl'), a: 'Cl', why: 'Cl₂O₇ — chlorine reaches its group valency of 7.' },
        { q: 'From Cl, go down Group 17. Tap the <b>least electronegative</b> element among F, Cl, Br and I.', am: S('F Cl Br I'), a: 'I', why: 'Electronegativity falls down the group: I is lowest.' } ] },
      { start: 'Mg', concept: 'Electronegativity, valency & isoelectronic species', steps: [
        { q: 'O²⁻, F⁻, Na⁺ and Mg²⁺ are <b>isoelectronic</b> (10 e⁻). Tap the element whose ion is the <b>largest</b>.', am: S('O F Na Mg'), a: 'O', why: 'O²⁻ has the lowest nuclear charge (8 protons) for 10 electrons.' },
        { q: 'Tap the <b>most electronegative</b> element among N, P and As.', am: S('N P As'), a: 'N', why: 'Electronegativity falls down Group 15: N (3.0) is highest.' },
        { q: 'From N, think of Period 3. Tap the <b>most electronegative</b> element among Na, Mg, Al, Si, P, S and Cl.', am: S('Na Mg Al Si P S Cl'), a: 'Cl', why: 'Electronegativity increases across a period: Cl.' } ] },
      { start: 'K', concept: 'Electronegativity, valency & isoelectronic species', steps: [
        { q: 'P³⁻, S²⁻, Cl⁻, K⁺ and Ca²⁺ are <b>isoelectronic</b> (18 e⁻). Tap the element whose ion is the <b>largest</b>.', am: S('P S Cl K Ca'), a: 'P', why: 'P³⁻ has the fewest protons (15), so it is the largest ion.' },
        { q: 'Tap the <b>least electronegative</b> element among Li, Na and K.', am: S('Li Na K'), a: 'K', why: 'Electronegativity falls down Group 1: K (0.82).' },
        { q: 'From K, think of Period 3. Tap the <b>most electronegative</b> element among Si, P and S.', am: S('Si P S'), a: 'S', why: 'S (2.58) &gt; P (2.19) &gt; Si (1.90).' } ] }
    ],
    hard: [
      { start: 'Li', concept: 'NCERT exceptions: ionisation enthalpy Be &gt; B and N &gt; O', steps: [
        { q: 'Ionisation enthalpy normally rises across a period, but there is a dip at boron. Tap the element with the <b>higher</b> first ionisation enthalpy: Be or B.', am: S('Be B'), a: 'Be', why: 'Be (2s²) has a stable filled s-subshell; boron\'s 2p electron is better shielded and easier to remove.' },
        { q: 'Another dip occurs at oxygen. Tap the element with the <b>higher</b> first ionisation enthalpy: N or O.', am: S('N O'), a: 'N', why: 'N has the stable half-filled 2p³ configuration; O loses an electron from a paired orbital.' },
        { q: 'The same half-filled effect appears in Period 3. Tap the element with the <b>higher</b> first ionisation enthalpy: P or S.', am: S('P S'), a: 'P', why: 'P (3p³, half-filled) &gt; S (3p⁴).' } ] },
      { start: 'Cl', concept: 'NCERT exception: electron gain enthalpy Cl &gt; F', steps: [
        { q: 'Tap the element with the <b>most negative</b> electron gain enthalpy among O, F, S, Cl and Br.', am: S('O F S Cl Br'), a: 'Cl', why: 'Cl (−349 kJ/mol) beats F (−328 kJ/mol): the compact 2p subshell of F suffers strong inter-electronic repulsion.' },
        { q: 'The same anomaly appears in Group 16. Tap the element with the <b>more negative</b> electron gain enthalpy: O or S.', am: S('O S'), a: 'S', why: 'S (−200 kJ/mol) is more negative than O (−141 kJ/mol).' },
        { q: 'Down Group 17 (after the F/Cl reversal) the values become less negative. Tap the halogen with the <b>least negative</b> electron gain enthalpy among F, Cl, Br and I.', am: S('F Cl Br I'), a: 'I', why: 'I (−295 kJ/mol) is the least negative of the four.' } ] },
      { start: 'Na', concept: 'Amphoteric oxides: Al₂O₃, ZnO, BeO, SnO, PbO', steps: [
        { q: 'Oxides turn from basic to acidic across Period 3. Tap the element whose oxide is <b>amphoteric</b> among Na, Mg, Al, Si and P.', am: S('Na Mg Al Si P'), a: 'Al', why: 'Al₂O₃ reacts with both acids and bases.' },
        { q: 'From Al, tap the element whose oxide is <b>amphoteric</b> among K, Ca and Zn.', am: S('K Ca Zn'), a: 'Zn', why: 'ZnO dissolves in both HCl and NaOH; K₂O and CaO are basic.' },
        { q: 'Tap the element with the <b>strongest inert-pair effect</b> among C, Sn and Pb (Pb²⁺ is more stable than Pb⁴⁺); its oxides PbO and PbO₂ are amphoteric.', am: S('C Sn Pb'), a: 'Pb', why: 'The inert-pair effect increases down Group 14, making +2 most stable for Pb.' } ] },
      { start: 'Li', concept: 'Diagonal relationships: Li–Mg, Be–Al, B–Si', steps: [
        { q: 'Li shows a <b>diagonal relationship</b> with an element of Period 3 (both form nitrides directly and have covalent halides). Tap it.', am: S('Na Mg Al Si'), a: 'Mg', why: 'Li and Mg have similar polarising power (charge/size ratio).' },
        { q: 'Be has a diagonal partner in Period 3: both form amphoteric oxides and covalent chlorides. Tap it.', am: S('Na Mg Al Si'), a: 'Al', why: 'Be–Al: similar charge/size ratio, amphoteric oxides.' },
        { q: 'B has a diagonal partner in Period 3: both are metalloids forming weakly acidic oxides. Tap it.', am: S('Mg Al Si P'), a: 'Si', why: 'B–Si: similar electronegativity, acidic oxides, covalent hydrides.' } ] },
      { start: 'Ne', concept: 'Ionisation enthalpy extremes: He highest, Cs lowest, IE₂ of Li', steps: [
        { q: 'Tap the element with the <b>highest</b> first ionisation enthalpy among H, He, F and Ne.', am: S('H He F Ne'), a: 'He', why: 'He (2372 kJ/mol): the smallest atom holds its electrons most tightly.' },
        { q: 'Tap the alkali metal with the <b>lowest</b> first ionisation enthalpy among Li, Na, K, Rb and Cs.', am: S('Li Na K Rb Cs'), a: 'Cs', why: 'The largest atom loses its outer electron most easily: Cs (376 kJ/mol).' },
        { q: 'After losing one electron, Li⁺ has a 1s² core, so removing a second electron is extremely hard. Tap the element with the <b>highest second</b> ionisation enthalpy among Li, Be, B, C, N, O and F.', am: S('Li Be B C N O F'), a: 'Li', why: 'IE₂ of Li is about 7298 kJ/mol — a noble-gas core must be broken.' } ] },
      { start: 'Be', concept: 'Nature of oxides & the inert-pair effect', steps: [
        { q: 'Acidic character of oxides increases across a period. Tap the element forming the <b>most acidic</b> oxide among Na, Mg, Al, Si, P, S and Cl.', am: S('Na Mg Al Si P S Cl'), a: 'Cl', why: 'Cl₂O₇ gives HClO₄, the strongest acid of the set.' },
        { q: 'Basic character of oxides increases down a group. Tap the element forming the <b>most basic</b> oxide among Be, Mg, Ca and Sr.', am: S('Be Mg Ca Sr'), a: 'Sr', why: 'BeO is amphoteric; SrO is the most basic.' },
        { q: 'Inert-pair effect: tap the Group 14 element for which the <b>+2 state is most stable</b> among Si, Ge, Sn and Pb.', am: S('Si Ge Sn Pb'), a: 'Pb', why: 'The 6s² pair of lead is reluctant to take part in bonding.' } ] }
    ]
  };
  const dtBlock = (g, sym) => (sym === 'H' ? 's' : g <= 2 ? 's' : g === 18 ? 'n' : g <= 12 ? 'd' : 'p');

  GAMES.detective = function (ctx, mode) {
    const C = ctx.pick(DT_CASES[mode]);
    let si = 0, here = C.start, sel = null, scans = 0, locked = false;
    const visited = {}; let scanSet = null, scanT = 0;
    ctx.stage.innerHTML =
      '<div class="cge-card" data-r="brief"></div><div class="dt-clue" data-r="clue"></div>' +
      '<div class="dt-wrap"><div class="dt-gridwrap" data-r="gw"><div class="dt-grid" data-r="grid"></div></div><div class="dt-radar" data-r="radar"></div></div>' +
      '<div class="dt-read" data-r="sel">Tap an element on the map…</div>' +
      '<div class="fg-acts"><button class="cge-btn" data-act="scan">🔍 Scan Clue</button><button class="cge-btn pri" data-act="lock" data-r="lock" disabled>🔒 Lock Answer</button></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    ctx.moveFmt = (m) => 'Guesses ' + m;
    ctx.setMoves(ctx.moveFmt(0));
    ctx.hintFn = () => mode === 'easy' ? 'Across a period (left → right) atomic radius <b>decreases</b> and metallic character <b>decreases</b>. Down a group atomic radius <b>increases</b> and metallic character <b>increases</b>.'
      : mode === 'moderate' ? 'Electronegativity <b>increases</b> across a period and <b>decreases</b> down a group (F is highest). In an isoelectronic series more protons ⇒ smaller ion (N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺). Valency towards H rises 1 → 4 then falls; towards O it rises 1 → 7 across Period 3.'
        : 'First ionisation enthalpy dips at Be → B and N → O (filled / half-filled stability). Electron gain enthalpy: Cl is more negative than F, S more than O. Amphoteric oxides: BeO, Al₂O₃, ZnO, SnO, PbO. Diagonal pairs: Li–Mg, Be–Al, B–Si. The inert-pair effect strengthens down Group 14.';

    let g = '<div class="dt-c0"></div>' + range(1, 18).map((n) => '<div class="dt-gh">' + n + '</div>').join('');
    for (let p = 1; p <= 6; p++) {
      g += '<div class="dt-ph">' + p + '</div>';
      for (let n = 1; n <= 18; n++) {
        const e = DT_EL.find((x) => x[3] === p && x[4] === n);
        g += e ? '<button class="dt-cell b-' + dtBlock(n, e[0]) + '" data-el="' + e[0] + '"><span>' + e[0] + '</span><small>' + e[1] + '</small></button>' : '<div class="dt-e' + (p >= 5 && n >= 3 && n <= 12 ? ' gap' : '') + '"></div>';
      }
    }
    $('grid').innerHTML = g;
    const cells = {}; ctx.stage.querySelectorAll('.dt-cell').forEach((b) => { cells[b.getAttribute('data-el')] = b; });

    function paint() {
      Object.keys(cells).forEach((s) => {
        const c = cells[s].classList;
        c.toggle('dt-here', s === here); c.toggle('dt-sel', s === sel); c.toggle('dt-done', !!visited[s]);
        c.toggle('dt-scan', !!(scanSet && scanSet.indexOf(s) >= 0));
      });
    }
    function showClue() {
      const st = C.steps[si];
      $('brief').innerHTML = '📍 You are at <b>' + here + '</b> (' + DT_POS[here].name + '). Clue <b>' + (si + 1) + ' of 3</b> — each correct answer becomes your next stop.';
      $('clue').innerHTML = '<b>🕵️ Clue ' + (si + 1) + '</b><br>' + st.q;
      sel = null; $('sel').textContent = 'Tap an element on the map…'; $('lock').disabled = true; scanSet = null;
      ctx.setStatus('🔎 Clue ' + (si + 1) + '/3'); paint();
    }
    function focusOn(sym) {
      const gw = $('gw'), c = cells[sym];
      if (c) safe(() => { gw.scrollLeft = Math.max(0, c.offsetLeft - gw.clientWidth / 2 + c.offsetWidth / 2); });
    }
    function lock() {
      const st = C.steps[si];
      if (!sel || locked) return;
      ctx.move();
      if (sel === st.a) {
        visited[sel] = 1; here = sel; sfx.pop();
        if (si === 2) {
          paint(); locked = true;
          ctx.win({ effStars: scans === 0 ? 3 : scans <= 2 ? 2 : 1, concept: C.concept, detail: 'Mystery element: <b>' + sel + '</b> — ' + DT_POS[sel].name + '. ' + st.why });
          return;
        }
        ctx.ok('<b>' + sel + '</b> (' + DT_POS[sel].name + ') is correct. ' + st.why);
        si++; showClue(); focusOn(here);
      } else {
        const a = DT_POS[st.a], b = DT_POS[sel], d = Math.abs(a.p - b.p) + Math.abs(a.g - b.g);
        const temp = d <= 1 ? '🔥 Burning hot — right next door!' : d <= 3 ? '♨️ Warm — close to the target.' : d <= 6 ? '🌤 Cool — keep exploring.' : '🧊 Cold — far from the target.';
        ctx.bad('<b>' + sel + '</b> is not the answer. ' + temp);
      }
    }
    ctx.stage.onclick = (e) => {
      if (locked) return;
      const t = e.target.closest ? e.target.closest('[data-el],[data-act]') : null;
      if (!t) return;
      if (t.hasAttribute('data-el')) {
        sel = t.getAttribute('data-el'); sfx.tap(); const d = DT_POS[sel];
        $('sel').innerHTML = 'Selected: <b>' + sel + '</b> — ' + d.name + ' · Z = ' + d.z + ' · Period ' + d.p + ', Group ' + d.g;
        $('lock').disabled = false; paint();
      } else if (t.getAttribute('data-act') === 'scan') {
        scans++; scanSet = C.steps[si].am; scanT = performance.now(); sfx.pop();
        const r = $('radar'); r.classList.remove('go'); void r.offsetWidth; r.classList.add('go');
        focusOn(scanSet[0]); paint();
        ctx.say('🔍 Radar sweep: the candidate elements are highlighted. One of them is the answer.', 'info');
        setTimeout(() => { if (scanSet === C.steps[si].am && performance.now() - scanT > 3900) { scanSet = null; paint(); } }, 4000);
      } else lock();
    };
    showClue(); focusOn(here);
  };

  /* ==========================================================================
     6. MOLE FACTORY  (Ch 1 · Stoichiometry & limiting reagent)
     ========================================================================== */
  const MF_MM = { N2: 28, H2: 2, NH3: 17, O2: 32, H2O: 18, C: 12, CO2: 44, SO2: 64, SO3: 80, CH4: 16, CaCO3: 100, CaO: 56, Fe2O3: 160, CO: 28, Fe: 56 };
  const MF_RX = {
    hab: { r: [[1, 'N2'], [3, 'H2']], p: [[2, 'NH3']] },
    wat: { r: [[2, 'H2'], [1, 'O2']], p: [[2, 'H2O']] },
    co2: { r: [[1, 'C'], [1, 'O2']], p: [[1, 'CO2']] },
    so3: { r: [[2, 'SO2'], [1, 'O2']], p: [[2, 'SO3']] },
    ch4: { r: [[1, 'CH4'], [2, 'O2']], p: [[1, 'CO2'], [2, 'H2O']] },
    cac: { r: [[1, 'CaCO3']], p: [[1, 'CaO'], [1, 'CO2']] },
    fe: { r: [[1, 'Fe2O3'], [3, 'CO']], p: [[2, 'Fe'], [3, 'CO2']] }
  };
  const mfEq = (rx) => rx.r.map((x) => (x[0] > 1 ? x[0] : '') + x[1]).join(' + ') + ' → ' + rx.p.map((x) => (x[0] > 1 ? x[0] : '') + x[1]).join(' + ');
  function mfSolve(rx, feeds) {
    let ext = Infinity;
    rx.r.forEach((x) => { ext = Math.min(ext, feeds[x[1]] / x[0]); });
    const lrs = rx.r.filter((x) => Math.abs(feeds[x[1]] / x[0] - ext) < 1e-9).map((x) => x[1]);
    const exact = rx.r.length > 1 && lrs.length === rx.r.length;
    const excess = {}, prod = {};
    rx.r.forEach((x) => { excess[x[1]] = Math.max(0, feeds[x[1]] - x[0] * ext); });
    rx.p.forEach((x) => { prod[x[1]] = x[0] * ext; });
    return { ext, lr: exact ? 'EXACT' : lrs[0], excess, prod };
  }
  const MF_POOL = (function () {
    const easy = [], mod = [], hard = [];
    [['hab', [2, 4, 6]], ['wat', [2, 4, 6]], ['co2', [1, 2, 3, 4]]].forEach((a) => a[1].forEach((t) => easy.push({ k: a[0], T: t })));
    [2, 3, 4, 5, 6, 8].forEach((a) => [1, 2, 3, 4].forEach((b) => mod.push({ k: 'so3', f: { SO2: a, O2: b }, ask: ['SO3'] })));
    [1, 2, 3, 4].forEach((a) => [2, 3, 4, 6, 8].forEach((b) => mod.push({ k: 'ch4', f: { CH4: a, O2: b }, ask: ['CO2'] })));
    [50, 100, 150, 200, 250, 500].forEach((m) => hard.push({ k: 'cac', f: { CaCO3: m }, ask: ['CaO', 'CO2'] }));
    [80, 160, 240, 320].forEach((a) => [42, 84, 126, 168, 252].forEach((b) => hard.push({ k: 'fe', f: { Fe2O3: a, CO: b }, ask: ['Fe'] })));
    [28, 56, 84].forEach((a) => [3, 6, 9, 12].forEach((b) => hard.push({ k: 'hab', f: { N2: a, H2: b }, ask: ['NH3'] })));
    [2, 4, 8].forEach((a) => [16, 32, 48, 64].forEach((b) => hard.push({ k: 'wat', f: { H2: a, O2: b }, ask: ['H2O'] })));
    return { easy: easy, moderate: mod, hard: hard };
  })();

  GAMES.molefactory = function (ctx, mode) {
    const task = ctx.pick(MF_POOL[mode]), rx = MF_RX[task.k];
    const unit = mode === 'hard' ? 'g' : 'mol';
    const names = rx.r.map((x) => x[1]), multi = rx.r.length > 1;
    const feed = {}; names.forEach((f) => { feed[f] = mode === 'easy' ? 0 : task.f[f]; });
    const mainP = mode === 'easy' ? rx.p[0][1] : null;
    const toMol = (f, v) => (unit === 'g' ? v / MF_MM[f] : v);
    const unitOf = (f, mol) => (unit === 'g' ? mol * MF_MM[f] : mol);
    let lrSel = null, busy = false, over = false, retired = false;
    const allSp = names.concat(rx.p.map((x) => x[1]));
    const COLS = ['#38bdf8', '#fb923c'], PCOL = ['#34d399', '#a78bfa'];

    let order;
    if (mode === 'easy') order = '📦 <b>Production order:</b> make exactly <b>' + task.T + ' mol</b> of ' + chem(mainP) + ' with <b>zero wasted</b> reactant. Load the hoppers, choose the limiting reagent (or <i>Exact mix</i>) and run the line.';
    else order = '📦 <b>Hopper stock:</b> ' + names.map((f) => '<b>' + task.f[f] + ' ' + unit + ' ' + chem(f) + '</b>').join(' and ') + '. ' + (multi ? 'Predict the limiting reagent, the yield and the excess left over, ' : 'Predict the mass of each product ') + 'then run the line to check.';
    let ui = '';
    if (mode === 'easy') {
      ui += '<div class="mf-hop">' + names.map((f, i) => '<div class="mf-h"><div><span style="color:' + COLS[i] + '">■</span> ' + chem(f) + '</div><div class="mf-st"><button data-f="' + f + '" data-d="-1">−</button><b data-r="v-' + f + '">0</b><span>mol</span><button data-f="' + f + '" data-d="1">+</button></div></div>').join('') + '</div>';
    } else {
      const asks = task.ask.map((f, i) => '<label class="mf-q"><span>Yield of ' + chem(f) + ' (' + unit + ')</span><input type="number" inputmode="decimal" step="any" data-q="p' + i + '" placeholder="?"></label>').join('');
      ui += '<div class="mf-ans">' + asks + (multi ? '<label class="mf-q"><span>Excess reactant left (' + unit + ')</span><input type="number" inputmode="decimal" step="any" data-q="ex" placeholder="?"></label>' : '') + '</div>';
    }
    if (multi) ui += '<div class="mf-lr"><span>Limiting reagent:</span>' + names.map((f) => '<button class="cge-chip" data-lr="' + f + '">' + chem(f) + '</button>').join('') + '<button class="cge-chip" data-lr="EXACT">Exact mix ⚖️</button></div>';
    ctx.stage.innerHTML =
      '<div class="cge-card">' + order + '</div>' +
      '<div class="mf-eq">' + chem(mfEq(rx)) + '</div>' +
      '<div class="mf-mm">' + allSp.map((f) => '<span>' + chem(f) + ' = ' + MF_MM[f] + ' g/mol</span>').join('') + '</div>' +
      '<div class="mf-cv"></div><div class="mf-legend">' + names.map((f, i) => '<span><i style="background:' + COLS[i] + '"></i>' + chem(f) + '</span>').join('') + rx.p.map((x, i) => '<span><i style="background:' + PCOL[i] + '"></i>' + chem(x[1]) + '</span>').join('') + '<span><i class="w"></i>Excess / waste</span></div>' +
      ui + '<div class="fg-acts"><button class="cge-btn pri" data-act="run" data-r="run">⚙️ Run Factory Conveyor</button></div><div data-r="res"></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, 190);
    ctx.stage.querySelector('.mf-cv').appendChild(cvh.cv);
    ctx.moveFmt = (m) => 'Moves ' + m;
    ctx.hintFn = () => mode === 'easy' ? 'The coefficients of a balanced equation are <b>mole ratios</b>: ' + chem(mfEq(rx)) + '. Moles of a reactant needed = (target moles of ' + chem(mainP) + ') × (reactant coefficient ÷ ' + chem(mainP) + ' coefficient). Feeding exactly these amounts leaves nothing in excess — an exact mix.'
      : mode === 'moderate' ? 'Divide each given amount (mol) by its coefficient. The <b>smaller quotient</b> belongs to the limiting reagent and fixes the extent of reaction. Yield = product coefficient × extent; excess = given − coefficient × extent.'
        : 'Convert mass to moles with <b>n = m ÷ M</b> (molar masses are shown above), apply the mole ratio from the balanced equation (limiting reagent first, if there are two reactants), then convert back with <b>m = n × M</b>.';

    /* ----- factory scene ----- */
    const scene = { phase: 'idle', clock: 0, pk: [], pend: [], arrived: 0, need: 0, outLeft: 0, gear: 0, rt: 0, spawned: {}, total: {}, onDone: null };
    const hx = names.length === 1 ? [90] : [52, 124];
    function addPk(pts, sp, col, kind, onEnd) { scene.pk.push({ x: pts[0][0], y: pts[0][1], pts: pts, i: 1, sp: sp, col: col, kind: kind, onEnd: onEnd }); }
    function startRun(truth, done) {
      const feedMol = {}; names.forEach((f) => { feedMol[f] = toMol(f, feed[f]); });
      const mx = Math.max.apply(null, names.map((f) => feedMol[f]).concat(Object.keys(truth.prod).map((k) => truth.prod[k]), names.map((f) => truth.excess[f])));
      const u = Math.max(1, Math.ceil(mx / 8)), bx = (m) => (m > 1e-9 ? Math.max(1, Math.round(m / u)) : 0);
      Object.assign(scene, { phase: 'feed', clock: 0, pk: [], pend: [], arrived: 0, need: 0, outLeft: 0, spawned: {}, total: {}, onDone: done });
      let tt = 0.15; const lists = names.map((f) => bx(feedMol[f])); const mxl = Math.max.apply(null, lists.concat(0));
      names.forEach((f) => { scene.total[f] = lists[names.indexOf(f)]; scene.spawned[f] = 0; scene.need += scene.total[f]; });
      for (let k = 0; k < mxl; k++) names.forEach((f, i) => {
        if (k < lists[i]) { scene.pend.push({ t: tt, f: () => { scene.spawned[f]++; addPk([[hx[i], 50], [hx[i], 101], [168, 101]], 150, COLS[i], 'r', () => { scene.arrived++; }); } }); tt += 0.26; }
      });
      scene.truth = truth; scene.bx = bx;
      if (!scene.need) { scene.phase = 'done'; done(); }
    }
    function reactDone() {
      const truth = scene.truth; let tt = scene.clock + 0.05;
      scene.phase = 'out';
      rx.p.forEach((x, i) => { const n = scene.bx(truth.prod[x[1]]); for (let k = 0; k < n; k++) { scene.outLeft++; scene.pend.push({ t: tt, f: () => addPk([[258, 101], [308, 101], [308, 134]], 95, PCOL[i], 'p', () => { scene.outLeft--; }) }); tt += 0.24; } });
      names.forEach((f) => { const n = scene.bx(truth.excess[f]); for (let k = 0; k < n; k++) { scene.outLeft++; scene.pend.push({ t: tt, f: () => addPk([[212, 152], [212, 172]], 90, COLS[names.indexOf(f)], 'w', () => { scene.outLeft--; }) }); tt += 0.24; } });
    }
    function label(f) { return mode === 'easy' ? feed[f] + ' mol' : feed[f] + ' ' + unit; }
    ctx.loop((t, dt) => {
      const g = cvh.g;
      g.fillStyle = '#0a1030'; g.fillRect(0, 0, 340, 190);
      const gr = g.createLinearGradient(0, 0, 0, 190); gr.addColorStop(0, '#141e4a'); gr.addColorStop(1, '#0a1030'); g.fillStyle = gr; g.fillRect(0, 0, 340, 190);
      if (scene.phase !== 'idle' && scene.phase !== 'done') {
        scene.clock += dt;
        for (let i = scene.pend.length - 1; i >= 0; i--) if (scene.pend[i].t <= scene.clock) { const p = scene.pend.splice(i, 1)[0]; p.f(); }
        if (scene.phase === 'feed' && scene.arrived >= scene.need && !scene.pend.length) { scene.phase = 'react'; scene.rt = scene.clock; }
        if (scene.phase === 'react' && scene.clock - scene.rt > 1.0) reactDone();
        if (scene.phase === 'out' && !scene.pend.length && scene.outLeft <= 0 && !scene.pk.length) { scene.phase = 'done'; if (scene.onDone) scene.onDone(); }
      }
      scene.gear += dt * (scene.phase === 'react' ? 7 : scene.phase === 'idle' || scene.phase === 'done' ? 0.6 : 2.2);
      /* belts */
      const off = (t / 40) % 14;
      [[10, 172], [252, 332]].forEach((b) => {
        g.fillStyle = '#26346b'; g.fillRect(b[0], 108, b[1] - b[0], 11);
        g.fillStyle = '#3b4d94'; for (let x = b[0] - 14 + off; x < b[1]; x += 14) if (x >= b[0]) g.fillRect(x, 111, 7, 5);
        g.fillStyle = '#5d70c4'; g.beginPath(); g.arc(b[0] + 4, 114, 6, 0, 6.2832); g.arc(b[1] - 4, 114, 6, 0, 6.2832); g.fill();
      });
      /* hoppers */
      names.forEach((f, i) => {
        const x = hx[i], tot = scene.total[f], filled = scene.phase === 'idle' || scene.phase === 'done' ? (mode === 'easy' ? Math.min(1, feed[f] / 12) : 1) : (tot ? 1 - scene.spawned[f] / tot : 0);
        g.save(); g.beginPath(); g.moveTo(x - 30, 12); g.lineTo(x + 30, 12); g.lineTo(x + 7, 48); g.lineTo(x - 7, 48); g.closePath(); g.clip();
        g.fillStyle = COLS[i] + '55'; g.fillRect(x - 32, 48 - 36 * filled, 64, 38 * filled + 2); g.restore();
        g.strokeStyle = COLS[i]; g.lineWidth = 2.5; g.beginPath(); g.moveTo(x - 30, 12); g.lineTo(x + 30, 12); g.lineTo(x + 7, 48); g.lineTo(x - 7, 48); g.closePath(); g.stroke();
        g.fillStyle = '#fff'; g.font = '800 10px system-ui,sans-serif'; g.textAlign = 'center'; g.fillText(label(f), x, 9);
        g.fillStyle = '#26346b'; g.fillRect(x - 3, 48, 6, 54);
      });
      /* reactor */
      const hot = scene.phase === 'react';
      g.fillStyle = hot ? 'rgba(255,170,60,.22)' : 'rgba(80,110,220,.12)'; g.beginPath(); g.arc(212, 106, hot ? 66 : 56, 0, 6.2832); g.fill();
      g.fillStyle = '#18214f'; g.strokeStyle = hot ? '#ffb347' : '#6f86ff'; g.lineWidth = 3;
      rr(g, 172, 62, 80, 92, 14); g.fill(); g.stroke();
      g.save(); g.translate(212, 100); g.rotate(scene.gear);
      g.strokeStyle = hot ? '#ffd27a' : '#8fa2ff'; g.lineWidth = 4;
      for (let k = 0; k < 6; k++) { g.rotate(Math.PI / 3); g.beginPath(); g.moveTo(10, 0); g.lineTo(21, 0); g.stroke(); }
      g.beginPath(); g.arc(0, 0, 11, 0, 6.2832); g.stroke(); g.restore();
      g.fillStyle = 'rgba(255,255,255,.75)'; g.font = '800 9px system-ui,sans-serif'; g.textAlign = 'center'; g.fillText('REACTOR', 212, 143);
      /* product & waste bins */
      g.strokeStyle = '#34d399'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(290, 126); g.lineTo(290, 160); g.lineTo(332, 160); g.lineTo(332, 126); g.stroke();
      g.fillStyle = '#34d399'; g.font = '800 9px system-ui,sans-serif'; g.fillText('PRODUCT', 311, 174);
      g.strokeStyle = '#ff5d73'; g.beginPath(); g.moveTo(188, 166); g.lineTo(188, 184); g.lineTo(236, 184); g.lineTo(236, 166); g.stroke();
      g.fillStyle = '#ff5d73'; g.fillText('WASTE', 212, 164);
      /* packages */
      for (let i = scene.pk.length - 1; i >= 0; i--) {
        const p = scene.pk[i], tx = p.pts[p.i][0], ty = p.pts[p.i][1], dx = tx - p.x, dy = ty - p.y, d = Math.hypot(dx, dy), st = p.sp * dt;
        if (d <= st) { p.x = tx; p.y = ty; p.i++; if (p.i >= p.pts.length) { scene.pk.splice(i, 1); if (p.onEnd) p.onEnd(); continue; } }
        else { p.x += dx / d * st; p.y += dy / d * st; }
        g.fillStyle = p.col; g.strokeStyle = p.kind === 'w' ? '#ff5d73' : '#ffffff'; g.lineWidth = p.kind === 'w' ? 2 : 1;
        g.fillRect(p.x - 7, p.y - 14, 14, 14); g.strokeRect(p.x - 7, p.y - 14, 14, 14);
      }
    });

    /* ----- worked solution & verdict ----- */
    function worked(truth, feedMol) {
      const L = [];
      names.forEach((f) => { L.push(unit === 'g' ? 'n(' + chem(f) + ') = ' + feed[f] + ' ÷ ' + MF_MM[f] + ' = ' + num(feedMol[f]) + ' mol' : 'n(' + chem(f) + ') = ' + num(feedMol[f]) + ' mol'); });
      if (multi) L.push('Ratios n ÷ coefficient: ' + rx.r.map((x) => num(feedMol[x[1]] / x[0]) + ' (' + chem(x[1]) + ')').join(', ') + ' → ' + (truth.lr === 'EXACT' ? 'equal, so an <b>exact mix</b>' : '<b>' + chem(truth.lr) + '</b> is limiting') + '; extent = ' + num(truth.ext));
      else L.push('Extent of reaction = ' + num(truth.ext) + ' mol');
      rx.p.forEach((x) => { L.push('n(' + chem(x[1]) + ') = ' + x[0] + ' × ' + num(truth.ext) + ' = ' + num(truth.prod[x[1]]) + ' mol' + (unit === 'g' ? ' → ' + num(truth.prod[x[1]] * MF_MM[x[1]]) + ' g' : '')); });
      return '<div class="mf-work">' + L.join('<br>') + '</div>';
    }
    function results(truth) {
      let h = '<div class="mf-res"><div><b>Limiting reagent:</b> ' + (truth.lr === 'EXACT' ? 'none — exact stoichiometric mix' : chem(truth.lr)) + '</div>';
      h += '<div><b>Yield:</b> ' + rx.p.map((x) => num(truth.prod[x[1]]) + ' mol ' + chem(x[1]) + ' (' + num(truth.prod[x[1]] * MF_MM[x[1]]) + ' g)').join(' + ') + '</div>';
      const ex = names.filter((f) => truth.excess[f] > 1e-9);
      h += '<div><b>Excess / waste:</b> ' + (ex.length ? ex.map((f) => chem(f) + ' ' + num(truth.excess[f]) + ' mol (' + num(truth.excess[f] * MF_MM[f]) + ' g)').join(', ') : 'none — zero waste ✨') + '</div></div>';
      return h;
    }
    const near = (a, b) => Math.abs(a - b) <= Math.max(0.02, 0.006 * Math.abs(b));
    function judge(truth, feedMol) {
      const bad = [];
      if (multi && lrSel !== truth.lr) bad.push('limiting reagent');
      if (mode === 'easy') {
        if (Math.abs(truth.prod[mainP] - task.T) > 1e-9) bad.push('yield (' + num(truth.prod[mainP]) + ' mol, ordered ' + task.T + ' mol)');
        if (names.some((f) => truth.excess[f] > 1e-9)) bad.push('waste (order says zero)');
      } else {
        task.ask.forEach((f, i) => { const v = parseFloat(ctx.stage.querySelector('[data-q="p' + i + '"]').value); if (!near(v, unitOf(f, truth.prod[f]))) bad.push('yield of ' + chem(f)); });
        if (multi) { const v = parseFloat(ctx.stage.querySelector('[data-q="ex"]').value); const exv = Math.max.apply(null, names.map((f) => unitOf(f, truth.excess[f]))); if (!near(v, exv)) bad.push('excess left'); }
      }
      return bad;
    }
    function run() {
      if (busy || over) return;
      const feedMol = {}; names.forEach((f) => { feedMol[f] = toMol(f, feed[f]); });
      if (mode === 'easy') {
        if (!names.some((f) => feed[f] > 0)) { ctx.say('Load at least one hopper first.', 'info'); return; }
      } else {
        const ins = ctx.stage.querySelectorAll('[data-q]');
        for (let i = 0; i < ins.length; i++) if (!isFinite(parseFloat(ins[i].value))) { ctx.say('Fill in every answer box first.', 'info'); return; }
      }
      if (multi && !lrSel) { ctx.say('Choose the limiting reagent (or <b>Exact mix</b>) first.', 'info'); return; }
      busy = true; ctx.move(); $('run').disabled = true; ctx.say('⚙️ Running the line…', 'info'); $('res').innerHTML = '';
      const truth = mfSolve(rx, feedMol);
      startRun(truth, () => {
        busy = false;
        const bad = judge(truth, feedMol);
        $('res').innerHTML = results(truth);
        if (!bad.length) {
          over = true;
          ctx.win({
            concept: mode === 'easy' ? 'Mole ratios from a balanced equation' : mode === 'moderate' ? 'Limiting reagent & excess reactant' : 'Mass ↔ mole ↔ mass stoichiometry (n = m ÷ M)',
            detail: 'Yield ' + rx.p.map((x) => num(truth.prod[x[1]]) + ' mol ' + chem(x[1])).join(' + ') + '.'
          });
          return;
        }
        ctx.bad('Check your <b>' + bad.join(', ') + '</b>.');
        if (mode === 'easy') { $('run').disabled = false; }
        else {
          over = true; $('res').innerHTML += worked(truth, feedMol) + '<div class="fg-acts"><button class="cge-btn pri" data-act="fresh">🔁 Try fresh numbers</button></div>';
        }
      });
    }
    ctx.stage.onclick = (e) => {
      const t = e.target.closest ? e.target.closest('[data-f],[data-lr],[data-act]') : null;
      if (!t) return;
      if (t.hasAttribute('data-act')) { if (t.getAttribute('data-act') === 'fresh') ctx.restart(); else run(); return; }
      if (busy || over) return;
      if (t.hasAttribute('data-f')) {
        const f = t.getAttribute('data-f'), v = clamp(feed[f] + (+t.getAttribute('data-d')), 0, 12);
        if (v === feed[f]) return;
        feed[f] = v; $('v-' + f).textContent = v; ctx.move(); sfx.tap();
      } else { lrSel = t.getAttribute('data-lr'); ctx.stage.querySelectorAll('[data-lr]').forEach((b) => b.classList.toggle('on', b.getAttribute('data-lr') === lrSel)); ctx.move(); sfx.tap(); }
    };
  };

  /* ==========================================================================
     7. CARBON CHAIN CRAFTER  (Ch 8 · GOC,  Ch 9 · Hydrocarbons)
     ========================================================================== */
  const CB_TOK = ['COOH', 'CHO', 'Cl', 'OH', 'Br', 'C'];
  function cbParse(s) {
    const toks = []; let i = 0;
    while (i < s.length) {
      const ch = s[i];
      if (ch === '(' || ch === ')' || ch === '=' || ch === '#') { toks.push(ch); i++; continue; }
      const t = CB_TOK.find((x) => s.startsWith(x, i));
      if (!t) throw new Error('bad structure token at ' + i + ' in ' + s);
      toks.push(t); i += t.length;
    }
    const nodes = [], edges = [], stack = []; let prev = -1, order = 1;
    toks.forEach((k) => {
      if (k === '(') stack.push(prev);
      else if (k === ')') prev = stack.pop();
      else if (k === '=') order = 2;
      else if (k === '#') order = 3;
      else { nodes.push(k); const id = nodes.length - 1; if (prev >= 0) edges.push([prev, id, order]); prev = id; order = 1; }
    });
    return { nodes: nodes, edges: edges };
  }
  function cbIso(A, B) {
    const n = A.nodes.length;
    if (n !== B.nodes.length || A.edges.length !== B.edges.length) return false;
    const adj = (G) => { const m = G.nodes.map(() => ({})); G.edges.forEach((e) => { m[e[0]][e[1]] = e[2]; m[e[1]][e[0]] = e[2]; }); return m; };
    const a = adj(A), b = adj(B), map = new Array(n).fill(-1), used = new Array(n).fill(false);
    const da = a.map((o) => Object.keys(o).length), db = b.map((o) => Object.keys(o).length);
    const go = (i) => {
      if (i === n) return true;
      for (let j = 0; j < n; j++) {
        if (used[j] || A.nodes[i] !== B.nodes[j] || da[i] !== db[j]) continue;
        let ok = true;
        for (let k = 0; k < i && ok; k++) if ((a[i][k] || 0) !== (b[j][map[k]] || 0)) ok = false;
        if (!ok) continue;
        map[i] = j; used[j] = true;
        if (go(i + 1)) return true;
        map[i] = -1; used[j] = false;
      }
      return false;
    };
    return go(0);
  }
  function cbFormulaOf(G) {
    const bs = G.nodes.map(() => 0);
    G.edges.forEach((e) => { bs[e[0]] += e[2]; bs[e[1]] += e[2]; });
    const c = { C: 0, H: 0, O: 0, Cl: 0, Br: 0 };
    G.nodes.forEach((t, i) => {
      if (t === 'C') { c.C++; c.H += Math.max(0, 4 - bs[i]); }
      else if (t === 'OH') { c.O++; c.H++; }
      else if (t === 'CHO') { c.C++; c.O++; c.H++; }
      else if (t === 'COOH') { c.C++; c.O += 2; c.H++; }
      else c[t]++;
    });
    return ['C', 'H', 'Br', 'Cl', 'O'].map((k) => (c[k] ? k + (c[k] > 1 ? c[k] : '') : '')).join('');
  }
  const CB_POOL = {
    easy: [
      { n: 'Propane', f: 'C3H8', s: 'CCC', cond: 'CH₃–CH₂–CH₃', hint: 'Alkanes follow CₙH₂ₙ₊₂ with only single bonds. Three carbons in a row: the two end carbons become CH₃, the middle one CH₂.' },
      { n: 'Butane', f: 'C4H10', s: 'CCCC', cond: 'CH₃–CH₂–CH₂–CH₃', hint: 'Four carbons in an unbranched chain; end carbons are CH₃, the two middle carbons are CH₂.' },
      { n: 'Propene', f: 'C3H6', s: 'C=CC', cond: 'CH₂=CH–CH₃', hint: 'Alkenes (CₙH₂ₙ) contain one C=C. Put the double bond between C-1 and C-2; carbon uses 2 of its 4 bonds there, so it keeps fewer hydrogens.' },
      { n: 'But-1-ene', f: 'C4H8', s: 'C=CCC', cond: 'CH₂=CH–CH₂–CH₃', hint: 'The locant 1 means the double bond starts at carbon 1: CH₂=CH–CH₂–CH₃.' },
      { n: 'But-2-ene', f: 'C4H8', s: 'CC=CC', cond: 'CH₃–CH=CH–CH₃', hint: 'The locant 2 places the double bond between C-2 and C-3, in the middle of the chain.' },
      { n: 'Propyne', f: 'C3H4', s: 'C#CC', cond: 'CH≡C–CH₃', hint: 'Alkynes (CₙH₂ₙ₋₂) contain one C≡C: a triple bond uses 3 of carbon\'s 4 valencies, leaving 1 hydrogen on a terminal carbon.' },
      { n: 'But-1-yne', f: 'C4H6', s: 'C#CCC', cond: 'CH≡C–CH₂–CH₃', hint: 'Terminal triple bond between C-1 and C-2, followed by a CH₂ and a CH₃.' }
    ],
    moderate: [
      { n: '2-Methylpropane', alt: 'isobutane', f: 'C4H10', s: 'CC(C)C', cond: 'CH₃–CH(CH₃)–CH₃', o: ['2-Methylpropane', 'Butane', '2-Methylbutane', '1,1-Dimethylethane'], hint: 'The central carbon carries three other carbons, so it keeps only one hydrogen (CH). Longest chain: 3 carbons.', why: 'Longest chain = 3 C (propane) with a methyl on C-2 → 2-methylpropane (isobutane).' },
      { n: '2-Methylbutane', alt: 'isopentane', f: 'C5H12', s: 'CC(C)CC', cond: 'CH₃–CH(CH₃)–CH₂–CH₃', o: ['2-Methylbutane', '3-Methylbutane', 'Pentane', '2,2-Dimethylbutane'], hint: 'Longest chain has 4 carbons; one CH₃ branch is attached to the second carbon from one end.', why: 'Longest chain = 4 C; numbering from the end nearer the branch gives locant 2 (not 3) → 2-methylbutane.' },
      { n: '2,2-Dimethylpropane', alt: 'neopentane', f: 'C5H12', s: 'CC(C)(C)C', cond: 'CH₃–C(CH₃)₂–CH₃', o: ['2,2-Dimethylpropane', '2-Methylbutane', 'Pentane', '1,1,1-Trimethylethane'], hint: 'A central carbon bonded to four other carbons has no hydrogen left (a quaternary carbon).', why: 'Longest chain = 3 C (propane); two methyl groups both on C-2 → 2,2-dimethylpropane (neopentane).' },
      { n: 'Pent-2-ene', f: 'C5H10', s: 'CC=CCC', cond: 'CH₃–CH=CH–CH₂–CH₃', o: ['Pent-2-ene', 'Pent-3-ene', 'Pent-1-ene', '2-Methylbut-2-ene'], hint: 'An unbranched five-carbon chain with one C=C between the 2nd and 3rd carbon.', why: 'Number from the end nearer the double bond so it gets the lowest locant: 2 (not 3) → pent-2-ene.' },
      { n: '2-Methylpropene', alt: 'isobutylene', f: 'C4H8', s: 'C=C(C)C', cond: 'CH₂=C(CH₃)–CH₃', o: ['2-Methylpropene', 'But-1-ene', '2-Methylpropane', 'But-2-ene'], hint: 'A three-carbon chain with the C=C at one end and a methyl group on the middle carbon (which has no hydrogen).', why: 'Longest chain containing C=C is 3 C (propene); methyl on C-2 → 2-methylpropene.' }
    ],
    hard: [
      { n: 'Butan-2-ol', f: 'C4H10O', s: 'CC(OH)CC', cond: 'CH₃–CH(OH)–CH₂–CH₃', o: ['Butan-2-ol', 'Butan-1-ol', 'Butan-3-ol', '2-Methylpropan-2-ol'], hint: 'The –OH group sits on an internal carbon of a four-carbon chain; that carbon keeps one hydrogen (CH).', why: 'Suffix -ol; number from the end nearer –OH so it gets locant 2 (not 3) → butan-2-ol.' },
      { n: 'Propanal', f: 'C3H6O', s: 'CCCHO', cond: 'CH₃–CH₂–CHO', o: ['Propanal', 'Propan-1-ol', 'Propanone', 'Propanoic acid'], hint: '–CHO (aldehyde) is always at the chain end and its carbon counts as C-1 of the parent chain.', why: 'Three carbons including the –CHO carbon; suffix -al → propanal.' },
      { n: 'Propanoic acid', f: 'C3H6O2', s: 'CCCOOH', cond: 'CH₃–CH₂–COOH', o: ['Propanoic acid', 'Propanal', 'Ethanoic acid', 'Butanoic acid'], hint: 'The –COOH carbon is C-1 of the chain and is included in the count: CH₃–CH₂ plus the acid carbon = 3 carbons.', why: 'Three carbons including the –COOH carbon; suffix -oic acid → propanoic acid.' },
      { n: '2-Chloropropane', f: 'C3H7Cl', s: 'CC(Cl)C', cond: 'CH₃–CHCl–CH₃', o: ['2-Chloropropane', '1-Chloropropane', '2-Chlorobutane', '1,2-Dichloropropane'], hint: 'Halogens are substituents (prefix chloro-). Here Cl is on the middle carbon of a three-carbon chain.', why: 'Parent chain propane; chloro substituent on C-2 → 2-chloropropane.' },
      { n: 'Buta-1,3-diene', f: 'C4H6', s: 'C=CC=C', cond: 'CH₂=CH–CH=CH₂', o: ['Buta-1,3-diene', 'Buta-1,2-diene', 'But-1-yne', 'Buta-2,3-diene'], hint: 'Two C=C bonds separated by one single bond (a conjugated diene) in a four-carbon chain.', why: 'Double bonds start at C-1 and C-3; two of them → buta-1,3-diene (note the extra "a").' },
      { n: 'Pent-1-en-4-yne', f: 'C5H6', s: 'C=CCC#C', cond: 'CH₂=CH–CH₂–C≡CH', o: ['Pent-1-en-4-yne', 'Pent-4-en-1-yne', 'Pent-1-en-3-yne', 'Penta-1,4-diene'], hint: 'Five carbons: a C=C at one end, one CH₂ in the middle, and a C≡C at the other end.', why: 'Locants {1,4} either way; the tie is broken by giving the double bond the lower number → pent-1-en-4-yne.' }
    ]
  };
  const CB_STYLE = { C: ['#12332a', '#4ade80'], OH: ['#3a1a28', '#fb7185'], CHO: ['#2b1a3d', '#c084fc'], COOH: ['#2b1a3d', '#c084fc'], Cl: ['#12352e', '#34d399'], Br: ['#3a2814', '#fb923c'] };

  GAMES.carbon = function (ctx, mode) {
    const T = ctx.pick(CB_POOL[mode]), TG = cbParse(T.s);
    const COLS = 6, ROWS = 5, CELL = 340 / COLS, CHH = Math.round(CELL * ROWS), MAXN = 14;
    const nodes = [], edges = [];
    let tool = 'C', sel = null, drag = null, down = null, ops = 0, structOk = false, finished = false;
    const minOps = TG.nodes.length + TG.edges.reduce((a, e) => a + e[2], 0);

    const prompt = mode === 'easy'
      ? 'Build <b>' + T.n + '</b> (' + subs(T.f) + '). Hydrogens fill automatically: H = 4 − bonds.'
      : 'Build <b>' + T.cond + '</b> (' + subs(T.f) + '), then choose its correct <b>IUPAC name</b>.';
    ctx.stage.innerHTML =
      '<div class="cge-card">' + prompt + '<br><span class="cge-dim">Tap a grid point to place the chosen atom/group. Tap one node, then another (or drag between them) to cycle the bond: single → double → triple → delete.</span></div>' +
      '<div class="cb-tools">' + ['C', 'OH', 'CHO', 'COOH', 'Cl', 'Br'].map((t) => '<button class="cb-tool' + (t === 'C' ? ' on' : '') + '" data-t="' + t + '">' + (t === 'C' ? 'C' : '–' + t) + '</button>').join('') + '<button class="cb-tool" data-t="erase">🧽</button></div>' +
      '<div class="cb-cv"></div><div class="cb-live" data-r="live"></div>' +
      '<div class="fg-acts"><button class="cge-btn" data-act="clear">↺ Clear</button><button class="cge-btn pri" data-act="check">✅ Check Structure</button></div><div data-r="names"></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, CHH);
    ctx.stage.querySelector('.cb-cv').appendChild(cvh.cv);
    ctx.moveFmt = (m) => 'Edits ' + m;
    ctx.setMoves(ctx.moveFmt(0));
    ctx.hintFn = () => T.hint + ' Carbon is tetravalent: hydrogens on each carbon = 4 − (sum of bond orders). A carbon with more than 4 bonds is impossible (“Texas carbon”).';

    const graph = () => ({ nodes: nodes.map((n) => n.t), edges: edges.map((e) => [e.a, e.b, e.o]) });
    const bsums = () => { const b = nodes.map(() => 0); edges.forEach((e) => { b[e.a] += e.o; b[e.b] += e.o; }); return b; };
    const nodeAt = (c, r) => nodes.findIndex((n) => n.c === c && n.r === r);
    const cellOf = (p) => ({ c: clamp(Math.floor(p.x / CELL), 0, COLS - 1), r: clamp(Math.floor(p.y / CELL), 0, ROWS - 1) });
    const center = (n) => ({ x: (n.c + 0.5) * CELL, y: (n.r + 0.5) * CELL });
    const edgeOf = (a, b) => edges.findIndex((e) => (e.a === a && e.b === b) || (e.a === b && e.b === a));
    const degree = (i) => edges.filter((e) => e.a === i || e.b === i).length;
    function updateLive() {
      const G = graph(), f = nodes.length ? cbFormulaOf(G) : '—', bs = bsums(), tex = nodes.some((n, i) => n.t === 'C' && bs[i] > 4);
      $('live').className = 'cb-live' + (tex ? ' warn' : '');
      $('live').innerHTML = tex ? '⚠ <b>Texas carbon!</b> A carbon cannot form more than 4 bonds.' : 'Your molecule: <b>' + (f === '—' ? f : subs(f)) + '</b> · target <b>' + subs(T.f) + '</b>';
      ctx.setStatus('🧪 ' + nodes.length + ' atoms');
    }
    function edit() { ops++; ctx.move(); updateLive(); }
    function cycle(a, b) {
      const fa = nodes[a].t !== 'C', fb = nodes[b].t !== 'C', k = edgeOf(a, b);
      if (fa && fb) { ctx.say('Functional groups attach to a carbon, not to each other.', 'info'); return; }
      if (k < 0) {
        if ((fa && degree(a) >= 1) || (fb && degree(b) >= 1)) { ctx.say('A functional group has just one attachment point.', 'info'); return; }
        edges.push({ a: a, b: b, o: 1 }); sfx.pop();
      } else if (fa || fb) edges.splice(k, 1);
      else { edges[k].o++; if (edges[k].o > 3) edges.splice(k, 1); sfx.pop(); }
      ctx.say(''); edit();
    }
    function removeNode(i) {
      for (let k = edges.length - 1; k >= 0; k--) if (edges[k].a === i || edges[k].b === i) edges.splice(k, 1);
      edges.forEach((e) => { if (e.a > i) e.a--; if (e.b > i) e.b--; });
      nodes.splice(i, 1); sel = null; sfx.tap(); edit();
    }
    function tapNode(i) {
      if (tool === 'erase') { removeNode(i); return; }
      if (sel === null) sel = i; else if (sel === i) sel = null; else { cycle(sel, i); sel = null; }
      sfx.tap();
    }
    function tapEmpty(c, r) {
      if (tool === 'erase') return;
      if (nodes.length >= MAXN) { ctx.say('That is plenty of atoms — try erasing one.', 'info'); return; }
      nodes.push({ c: c, r: r, t: tool }); sel = null; sfx.pop(); ctx.say(''); edit();
    }
    const cv = cvh.cv;
    cv.addEventListener('pointerdown', (e) => {
      if (structOk) return;
      const p = cvh.pos(e), cl = cellOf(p), i = nodeAt(cl.c, cl.r);
      down = { i: i, c: cl.c, r: cl.r, x: p.x, y: p.y, moved: false };
      if (i >= 0) drag = { from: i, x: p.x, y: p.y };
      safe(() => cv.setPointerCapture(e.pointerId));
    });
    cv.addEventListener('pointermove', (e) => {
      if (!down) return;
      const p = cvh.pos(e);
      if (Math.hypot(p.x - down.x, p.y - down.y) > 12) down.moved = true;
      if (drag) { drag.x = p.x; drag.y = p.y; }
    });
    const up = (e) => {
      if (!down) return;
      const p = cvh.pos(e), cl = cellOf(p), j = nodeAt(cl.c, cl.r);
      if (down.i >= 0) { if (down.moved && j >= 0 && j !== down.i) { cycle(down.i, j); sel = null; } else if (!down.moved) tapNode(down.i); }
      else if (!down.moved) tapEmpty(down.c, down.r);
      down = null; drag = null;
    };
    cv.addEventListener('pointerup', up);
    cv.addEventListener('pointercancel', () => { down = null; drag = null; });

    function names() {
      const opts = shuffle(T.o);
      $('names').innerHTML = '<div class="cge-card ok">✅ Structure matches! Now pick the correct <b>IUPAC name</b>:</div><div class="cb-opts">' + opts.map((o, i) => '<button class="cge-btn cb-opt" data-n="' + i + '">' + esc(o) + '</button>').join('') + '</div>';
      $('names').opts = opts;
    }
    function check() {
      if (finished) return;
      if (!nodes.length) { ctx.say('Place some atoms on the grid first.', 'info'); return; }
      const G = graph(), bs = bsums();
      const ti = nodes.findIndex((n, i) => n.t === 'C' && bs[i] > 4);
      if (ti >= 0) { ctx.bad('Texas carbon! A carbon cannot have more than <b>4 bonds</b> (this one has ' + bs[ti] + ').'); return; }
      const seen = {}, q = [0]; seen[0] = 1;
      while (q.length) { const x = q.pop(); edges.forEach((e) => { const y = e.a === x ? e.b : e.b === x ? e.a : -1; if (y >= 0 && !seen[y]) { seen[y] = 1; q.push(y); } }); }
      if (Object.keys(seen).length !== nodes.length) { ctx.bad('Your atoms form <b>separate fragments</b>. A single molecule must be connected.'); return; }
      const f = cbFormulaOf(G);
      if (f !== T.f) { ctx.bad('Your formula is <b>' + subs(f) + '</b> but the target is <b>' + subs(T.f) + '</b>. Check the number of carbons, bonds and groups.'); return; }
      if (!cbIso(G, TG)) { ctx.bad('Right formula, wrong connectivity — check where the double/triple bond, branch or group sits.'); return; }
      structOk = true; sel = null; ctx.say('');
      if (mode === 'easy') { finished = true; finish(); } else names();
    }
    function finish() {
      const bonus = T.alt ? ' (' + T.alt + ')' : '';
      ctx.win({
        effStars: ops <= minOps + 3 ? 3 : ops <= minOps + 8 ? 2 : 1,
        concept: mode === 'easy' ? 'Tetravalency of carbon: alkanes, alkenes & alkynes' : mode === 'moderate' ? 'Branched chains & IUPAC longest-chain / lowest-locant rules' : 'Functional groups & IUPAC suffixes, prefixes and locants',
        detail: '<b>' + esc(T.n) + '</b>' + bonus + ' — ' + T.cond + (T.why ? '<br>' + T.why : '')
      });
    }
    ctx.stage.onclick = (e) => {
      const t = e.target.closest ? e.target.closest('[data-t],[data-act],[data-n]') : null;
      if (!t) return;
      if (t.hasAttribute('data-t')) {
        if (structOk) return;
        tool = t.getAttribute('data-t'); sel = null; sfx.tap();
        ctx.stage.querySelectorAll('[data-t]').forEach((b) => b.classList.toggle('on', b.getAttribute('data-t') === tool));
      } else if (t.hasAttribute('data-n')) {
        if (finished) return;
        const nm = $('names').opts[+t.getAttribute('data-n')];
        if (nm === T.n) { finished = true; t.classList.add('right'); finish(); }
        else { t.classList.add('wrong'); t.disabled = true; ctx.bad('“' + esc(nm) + '” is not the IUPAC name of this structure. ' + (T.why ? '' : '')); }
      } else if (t.getAttribute('data-act') === 'clear') {
        if (structOk) return;
        nodes.length = 0; edges.length = 0; sel = null; ctx.move(); ctx.say(''); updateLive();
      } else check();
    };
    updateLive();

    ctx.loop((t) => {
      const g = cvh.g, bs = bsums();
      const bg = g.createLinearGradient(0, 0, 0, CHH); bg.addColorStop(0, '#0e1a3e'); bg.addColorStop(1, '#070c20');
      g.fillStyle = bg; g.fillRect(0, 0, 340, CHH);
      for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) { g.fillStyle = 'rgba(140,165,240,.22)'; g.beginPath(); g.arc((c + 0.5) * CELL, (r + 0.5) * CELL, 2.2, 0, 6.2832); g.fill(); }
      g.lineCap = 'round';
      edges.forEach((e) => {
        const p = center(nodes[e.a]), q = center(nodes[e.b]), dx = q.x - p.x, dy = q.y - p.y, len = Math.hypot(dx, dy) || 1, nx = -dy / len, ny = dx / len;
        const offs = e.o === 1 ? [0] : e.o === 2 ? [-3.5, 3.5] : [-6, 0, 6];
        g.strokeStyle = '#d6e4ff'; g.lineWidth = 3;
        offs.forEach((o) => { g.beginPath(); g.moveTo(p.x + nx * o, p.y + ny * o); g.lineTo(q.x + nx * o, q.y + ny * o); g.stroke(); });
      });
      if (drag && down && down.moved) {
        const p = center(nodes[drag.from]); g.setLineDash([5, 5]); g.strokeStyle = '#6ee7ff'; g.lineWidth = 2;
        g.beginPath(); g.moveTo(p.x, p.y); g.lineTo(drag.x, drag.y); g.stroke(); g.setLineDash([]);
      }
      nodes.forEach((n, i) => {
        const p = center(n), st = CB_STYLE[n.t], over = n.t === 'C' && bs[i] > 4;
        let lab = n.t;
        if (n.t === 'C') { const h = Math.max(0, 4 - bs[i]); lab = 'C' + (h ? 'H' + (h > 1 ? SUB[h] : '') : ''); }
        const w = lab.length > 3 ? 46 : 38;
        g.save();
        if (over) { g.shadowColor = '#ff5d73'; g.shadowBlur = 10 + 6 * Math.sin(t / 120); }
        else if (sel === i) { g.shadowColor = '#6ee7ff'; g.shadowBlur = 12 + 4 * Math.sin(t / 200); }
        rr(g, p.x - w / 2, p.y - 13, w, 26, 9); g.fillStyle = over ? '#4a1420' : st[0]; g.fill();
        g.lineWidth = over || sel === i ? 3 : 2; g.strokeStyle = over ? '#ff5d73' : sel === i ? '#6ee7ff' : st[1]; g.stroke(); g.restore();
        g.fillStyle = over ? '#ffb3be' : '#f4f8ff'; g.font = '800 13px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(lab, p.x, p.y + 1); g.textBaseline = 'alphabetic';
        if (over) { g.fillStyle = '#ff5d73'; g.font = '800 11px system-ui,sans-serif'; g.fillText('⚠ ' + bs[i] + ' bonds', p.x, p.y - 18); }
      });
      if (!nodes.length) { g.fillStyle = 'rgba(190,205,245,.55)'; g.font = '700 13px system-ui,sans-serif'; g.textAlign = 'center'; g.fillText('Tap a dot to place ' + (tool === 'C' ? 'a carbon' : tool === 'erase' ? '—' : '–' + tool), 170, CHH / 2); }
    });
  };

  /* ==========================================================================
     Data self-test (call window.ChemGamesEngine.selfTest() from the console)
     ========================================================================== */
  function selfTest() {
    const issues = [], bad = (m) => issues.push(m);
    Object.keys(BL_EQ).forEach((m) => BL_EQ[m].forEach((e) => {
      const sp = e.r.concat(e.p), comp = sp.map(parseFormula), L = {}, R = {};
      if (e.c.length !== sp.length) bad('balancer coeff length ' + sp.join());
      e.r.forEach((f, i) => Object.keys(comp[i]).forEach((el) => { L[el] = (L[el] || 0) + comp[i][el] * e.c[i]; }));
      e.p.forEach((f, j) => { const i = e.r.length + j; Object.keys(comp[i]).forEach((el) => { R[el] = (R[el] || 0) + comp[i][el] * e.c[i]; }); });
      Object.keys(L).concat(Object.keys(R)).forEach((el) => { if (L[el] !== R[el]) bad('unbalanced ' + sp.join('+') + ' on ' + el); });
      if (e.c.reduce(gcd, 0) !== 1) bad('not lowest terms ' + sp.join('+'));
    }));
    Object.keys(FG_POOL).forEach((m) => FG_POOL[m].forEach((x) => {
      const c = fgCounts(x[0], x[1]);
      if (c[0] * FG_ION[x[0]].q + c[1] * FG_ION[x[1]].q !== 0) bad('forge net charge ' + x[2]);
    }));
    Object.keys(PK_POOL).forEach((m) => PK_POOL[m].forEach((x) => {
      const c = pkConfig(x[0], x[1]);
      let tot = 0; PK_SUBS.forEach((s) => { tot += c[s.id]; if (c[s.id] > s.cap) bad('parking cap ' + x); });
      if (tot !== x[0] - x[1]) bad('parking electrons ' + x);
    }));
    Object.keys(SS_MOLS).forEach((m) => SS_MOLS[m].forEach((x) => {
      if ((x.ve - x.used) / 2 !== x.lp) bad('VSEPR lone pairs ' + x.f);
      if (SS_NAME[x.bp + '-' + x.lp] === undefined) bad('VSEPR name missing ' + x.f);
      const sn = x.bp + x.lp; if (SS_DIRS[sn].length !== sn) bad('VSEPR dirs ' + x.f);
    }));
    Object.keys(DT_CASES).forEach((m) => DT_CASES[m].forEach((c) => {
      if (!DT_POS[c.start]) bad('detective start ' + c.start);
      if (c.steps.length !== 3) bad('detective steps ' + c.start);
      c.steps.forEach((s) => { if (s.am.indexOf(s.a) < 0) bad('detective answer not in options ' + s.a); s.am.forEach((x) => { if (!DT_POS[x]) bad('detective element ' + x); }); });
    }));
    Object.keys(MF_RX).forEach((k) => {
      const rx = MF_RX[k], l = rx.r.reduce((a, x) => a + x[0] * MF_MM[x[1]], 0), r = rx.p.reduce((a, x) => a + x[0] * MF_MM[x[1]], 0);
      if (l !== r) bad('mass not conserved ' + k + ' ' + l + ' vs ' + r);
      const at = {}; [['r', 1], ['p', -1]].forEach((s) => rx[s[0]].forEach((x) => { const p = parseFormula(x[1]); Object.keys(p).forEach((e) => { at[e] = (at[e] || 0) + s[1] * x[0] * p[e]; }); }));
      Object.keys(at).forEach((e) => { if (at[e] !== 0) bad('atoms not balanced ' + k + ' ' + e); });
    });
    Object.keys(CB_POOL).forEach((m) => CB_POOL[m].forEach((c) => {
      let G; try { G = cbParse(c.s); } catch (e) { bad('carbon parse ' + c.n); return; }
      if (cbFormulaOf(G) !== c.f) bad('carbon formula ' + c.n + ' got ' + cbFormulaOf(G) + ' want ' + c.f);
      if (G.nodes.some((t, i) => t === 'C' && G.edges.reduce((a, e) => a + (e[0] === i || e[1] === i ? e[2] : 0), 0) > 4)) bad('carbon valency ' + c.n);
      if (m !== 'easy') { if (!c.o || c.o.length !== 4 || c.o.indexOf(c.n) < 0 || new Set(c.o).size !== 4) bad('carbon options ' + c.n); }
    }));
    return { ok: !issues.length, issues: issues };
  }
  api.selfTest = selfTest;

  /* ==========================================================================
     Stylesheet (injected once, every rule is namespaced cge-/pk-/fg-/bl-/ss-/dt-/mf-/cb-)
     ========================================================================== */
  const CSS = `
.cge-root{--acc:#38bdf8;--bg:#0b1126;--p1:#121a3a;--p2:#1b2652;--ln:#2d3b78;--ink:#eaf0ff;--mut:#9aa9d8;--ok:#2ee6a6;--bad:#ff5d73;--warn:#ffc857;position:relative;box-sizing:border-box;width:100%;max-width:560px;margin:0 auto;padding:10px;color:var(--ink);background:radial-gradient(130% 70% at 50% 0%,#18245a 0%,var(--bg) 62%);border:1px solid var(--ln);border-radius:18px;font:14px/1.38 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;overflow:hidden;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}
.cge-root *{box-sizing:border-box}
.cge-root b{font-weight:800}
.cge-root sub,.cge-root sup{font-size:.7em;line-height:0}
.cge-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px}
.cge-bar2 .cge-btn{flex:1 1 150px}
.cge-badge{padding:3px 11px;border-radius:999px;font-weight:900;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#06101f;background:var(--acc)}
.cge-m-easy{background:#2ee6a6}.cge-m-moderate{background:#ffc857}.cge-m-hard{background:#ff6b8a}
.cge-title{font-weight:800;font-size:14px;flex:1 1 auto;min-width:120px}
.cge-cnt{font-size:12px;font-weight:800;padding:3px 9px;border-radius:999px;background:var(--p2);border:1px solid var(--ln)}
.cge-live{font-size:12px;font-weight:700;color:var(--acc)}
.cge-btn{min-height:42px;padding:8px 12px;border-radius:12px;border:1px solid var(--ln);background:var(--p2);color:var(--ink);font:800 13px/1.2 system-ui,sans-serif;cursor:pointer;touch-action:manipulation}
.cge-btn:active{transform:scale(.96)}
.cge-btn.pri{background:var(--acc);color:#06101f;border-color:transparent}
.cge-btn:disabled{opacity:.45;cursor:default}
.cge-btn.glow{animation:cge-glow 1s ease-in-out infinite}
.cge-chip{min-height:38px;padding:6px 12px;border-radius:999px;border:1px solid var(--ln);background:var(--p1);color:var(--ink);font:800 13px system-ui,sans-serif;cursor:pointer}
.cge-chip.on{background:var(--acc);color:#06101f;border-color:transparent}
.cge-msg{margin:0 0 8px;padding:8px 10px;border-radius:12px;font-size:13px;background:var(--p1);border:1px solid var(--ln);animation:cge-pop .25s}
.cge-msg.ok{border-color:var(--ok);background:rgba(46,230,166,.12)}
.cge-msg.bad{border-color:var(--bad);background:rgba(255,93,115,.14)}
.cge-hint{margin:0 0 8px;padding:9px 11px;border-radius:12px;font-size:13px;background:rgba(255,200,87,.1);border:1px dashed var(--warn)}
.cge-stage{display:flex;flex-direction:column;gap:8px}
.cge-card{padding:9px 11px;border-radius:14px;background:var(--p1);border:1px solid var(--ln);font-size:13.5px}
.cge-card.ok{border-color:var(--ok);background:rgba(46,230,166,.1)}
.cge-dim{color:var(--mut);font-size:12px}
.cge-shake{animation:cge-shake .45s}
.cge-won{box-shadow:0 0 0 2px var(--ok),0 0 28px rgba(46,230,166,.35)}
.fg-acts{display:flex;gap:8px;flex-wrap:wrap}.fg-acts .cge-btn{flex:1 1 140px}
@keyframes cge-shake{0%,100%{transform:translateX(0)}15%{transform:translateX(-9px)}30%{transform:translateX(8px)}45%{transform:translateX(-6px)}60%{transform:translateX(5px)}75%{transform:translateX(-3px)}}
@keyframes cge-pop{from{transform:scale(.96);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes cge-glow{0%,100%{box-shadow:0 0 0 0 rgba(46,230,166,.0)}50%{box-shadow:0 0 16px 3px rgba(46,230,166,.7)}}
@keyframes cge-fade{from{opacity:0}to{opacity:1}}
@keyframes cge-fall{to{transform:translateY(110vh) rotate(720deg)}}

/* parking */
.pk-cv canvas{border:1px solid var(--ln)}
.pk-shells{display:flex;gap:6px;justify-content:center;flex-wrap:wrap}
.pk-sh{padding:3px 10px;border-radius:999px;background:var(--p1);border:1px solid var(--ln);font-size:12px;color:var(--mut)}
.pk-sh.on{color:var(--ink);border-color:var(--acc)}.pk-sh small{opacity:.6}
.pk-slots{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.pk-slot{display:flex;flex-direction:column;align-items:center;gap:4px;min-height:72px;padding:7px 3px;border-radius:12px;border:1.5px solid var(--ln);background:var(--p1);color:var(--ink);cursor:pointer;touch-action:manipulation}
.pk-slot b{font-size:16px}.pk-slot em{font-style:normal;font-size:11px;color:var(--mut)}
.pk-slot.has{border-color:var(--acc)}.pk-slot:active{transform:scale(.94)}.pk-slot:disabled{opacity:.5}
.pk-pips{display:flex;flex-wrap:wrap;gap:2px;justify-content:center;max-width:58px}
.pk-pips i{width:8px;height:8px;border-radius:50%;border:1.5px solid #5b6fb8}
.pk-pips i.on{background:var(--acc);border-color:var(--acc);box-shadow:0 0 6px var(--acc)}
.pk-cfgtxt{font-size:16px;letter-spacing:.03em}

/* forge */
.fg-qty{display:flex;gap:6px;align-items:center;font-weight:800;font-size:12px;color:var(--mut)}
.fg-lab{font-size:11px;font-weight:800;color:var(--mut);text-transform:uppercase;letter-spacing:.08em}
.fg-tiles{display:flex;flex-wrap:wrap;gap:6px}
.fg-tile{position:relative;min-width:66px;min-height:56px;padding:6px 8px;border-radius:13px;border:1.5px solid var(--ln);background:var(--p1);color:var(--ink);cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;touch-action:manipulation}
.fg-tile.cat{border-color:#fb923c}.fg-tile.an{border-color:#60a5fa}
.fg-tile:active{transform:scale(.93)}
.fg-sym{font-size:17px;font-weight:800}.fg-tile small{font-size:10px;font-weight:800;opacity:.75}
.fg-cru{position:relative;padding:10px;border-radius:16px;background:linear-gradient(180deg,#1b1330,#2b1a16);border:2px solid #6b3a1e;min-height:92px;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;transition:box-shadow .3s}
.fg-cru.hot{box-shadow:0 0 22px rgba(46,230,166,.55);border-color:var(--ok)}
.fg-cru.forged{animation:cge-glow 1s 3}
.fg-pot{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;font-size:13px}
.fg-chip{display:inline-flex;align-items:center;gap:6px;padding:4px 4px 4px 10px;border-radius:999px;font-weight:800;animation:cge-pop .2s;background:#2a2150}
.fg-chip.cat{background:rgba(251,146,60,.22)}.fg-chip.an{background:rgba(96,165,250,.22)}
.fg-chip button{width:26px;height:26px;border-radius:50%;border:0;background:rgba(0,0,0,.35);color:#fff;font-weight:900;cursor:pointer}
.fg-formula{font-size:26px;font-weight:900;letter-spacing:.02em}
.fg-meter{position:relative;padding:8px 0 2px}
.fg-scale{height:12px;border-radius:6px;background:linear-gradient(90deg,#ff5d73 0%,#ffc857 42%,#2ee6a6 50%,#ffc857 58%,#ff5d73 100%)}
.fg-pin{position:absolute;top:2px;width:6px;height:28px;margin-left:-3px;border-radius:3px;background:#fff;box-shadow:0 0 8px #fff;transition:left .3s}
.fg-net{margin-top:10px;text-align:center;font-weight:900;font-size:13px;color:var(--warn)}
.fg-net.z{color:var(--ok)}

/* balancer */
.bl-scale{width:100%;height:auto;display:block;background:radial-gradient(100% 80% at 50% 0%,#17235a,#080d22);border:1px solid var(--ln);border-radius:14px}
.bl-sides{display:flex;justify-content:space-between;font-size:11px;font-weight:800;color:var(--mut);padding:0 8px}
.bl-rows{display:flex;flex-direction:column;gap:4px}
.bl-row{display:grid;grid-template-columns:28px 26px 1fr 26px;gap:6px;align-items:center}
.bl-row b{text-align:center}.bl-n{text-align:center;font-weight:800;font-size:13px}
.bl-bars{display:grid;grid-template-columns:1fr 1fr;gap:2px;height:11px}
.bl-bars .hl,.bl-bars .hr{background:#0e1636;display:flex;overflow:hidden}
.bl-bars .hl{justify-content:flex-end;border-radius:6px 0 0 6px}.bl-bars .hr{border-radius:0 6px 6px 0}
.bl-bars i{display:block;height:100%;background:var(--bad);transition:width .25s}
.bl-row.ok i{background:var(--ok)}
.bl-eq{display:flex;flex-wrap:wrap;gap:6px;align-items:center;justify-content:center;padding:4px 0}
.bl-sp{display:flex;flex-direction:column;align-items:center;gap:5px;padding:7px 7px;border-radius:14px;background:var(--p1);border:1px solid var(--ln)}
.bl-f{font-size:17px;font-weight:800}
.bl-st{display:flex;align-items:center;gap:5px}
.bl-st b{min-width:24px;text-align:center;font-size:17px;color:var(--acc)}
.bl-st button{width:34px;height:34px;border-radius:10px;border:1px solid var(--ln);background:var(--p2);color:var(--ink);font-size:18px;font-weight:900;cursor:pointer;touch-action:manipulation}
.bl-st button:active{transform:scale(.9)}
.bl-op,.bl-arrow{font-size:20px;font-weight:900;color:var(--mut)}

/* shape shift */
.ss-cv canvas{border:1px solid var(--ln);touch-action:none;cursor:grab}
.ss-info{display:flex;flex-wrap:wrap;gap:6px;font-size:12px}
.ss-info span{padding:3px 9px;border-radius:999px;background:var(--p1);border:1px solid var(--ln);color:var(--mut)}.ss-info b{color:var(--ink)}
.ss-build{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ss-step{display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:12px;background:var(--p1);border:1px solid var(--ln);font-size:12px;font-weight:700}
.ss-step span{flex:1}.ss-step b{min-width:18px;text-align:center;font-size:17px;color:var(--acc)}
.ss-step button{width:36px;height:36px;border-radius:10px;border:1px solid var(--ln);background:var(--p2);color:var(--ink);font-size:18px;font-weight:900;cursor:pointer;touch-action:manipulation}
.ss-rot{display:flex;gap:8px;align-items:center}
.ss-rot input{flex:1;height:34px;accent-color:var(--acc)}.ss-rot .cge-btn{min-height:38px;padding:6px 9px}
.ss-meter{display:flex;gap:10px;align-items:center;font-size:12px;font-weight:700}
.ss-bar{flex:1;height:12px;border-radius:6px;background:#0e1636;overflow:hidden}
.ss-bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#fb7185,#ffc857);transition:width .12s}
.ss-bar i.ok{background:var(--ok)}

/* trend detective */
.dt-clue{padding:10px 12px;border-radius:14px;background:linear-gradient(135deg,rgba(244,114,182,.18),rgba(56,189,248,.1));border:1px solid #f472b6;font-size:14px}
.dt-wrap{position:relative;border-radius:12px;overflow:hidden;border:1px solid var(--ln)}
.dt-gridwrap{overflow-x:auto;-webkit-overflow-scrolling:touch;background:#080d24}
.dt-grid{display:grid;grid-template-columns:22px repeat(18,36px);gap:3px;width:max-content;padding:5px}
.dt-c0{height:16px}.dt-gh{height:16px;text-align:center;font-size:10px;font-weight:800;color:var(--mut)}
.dt-ph{position:sticky;left:0;z-index:3;background:#080d24;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:var(--mut)}
.dt-e{height:38px;border-radius:7px}.dt-e.gap{background:repeating-linear-gradient(45deg,rgba(255,255,255,.04) 0 4px,transparent 4px 8px)}
.dt-cell{position:relative;height:38px;border-radius:8px;border:1.5px solid transparent;color:#fff;font-weight:900;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;padding:0;touch-action:manipulation}
.dt-cell small{font-size:8px;font-weight:700;opacity:.7;line-height:1}
.dt-cell.b-s{background:#1e3a8a}.dt-cell.b-p{background:#14532d}.dt-cell.b-d{background:#7c2d12}.dt-cell.b-n{background:#581c87}
.dt-cell.dt-done{border-color:var(--ok);box-shadow:inset 0 0 0 1px var(--ok)}
.dt-cell.dt-here{border-color:#ffc857;box-shadow:0 0 12px #ffc857;animation:cge-glow 1.2s infinite}
.dt-cell.dt-sel{border-color:#6ee7ff;box-shadow:0 0 0 2px #6ee7ff;transform:scale(1.08);z-index:2}
.dt-cell.dt-scan{border-color:#f472b6;animation:cge-glow 0.8s infinite;box-shadow:0 0 10px #f472b6}
.dt-radar{position:absolute;inset:0;pointer-events:none;opacity:0;background:linear-gradient(90deg,transparent,rgba(110,231,255,.55),transparent) no-repeat;background-size:34% 100%}
.dt-radar.go{animation:dt-sweep 1.3s linear}
@keyframes dt-sweep{0%{opacity:1;background-position:-40% 0}100%{opacity:0;background-position:140% 0}}
.dt-read{font-size:12.5px;min-height:18px;color:var(--mut)}

/* mole factory */
.mf-eq{text-align:center;font-size:20px;font-weight:900;padding:4px 0}
.mf-mm{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}
.mf-mm span{font-size:11px;padding:2px 8px;border-radius:999px;background:var(--p1);border:1px solid var(--ln);color:var(--mut)}
.mf-cv canvas{border:1px solid var(--ln)}
.mf-legend{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;font-size:12px;font-weight:700}
.mf-legend i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:4px;vertical-align:-1px}.mf-legend i.w{background:transparent;border:2px solid var(--bad)}
.mf-hop{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px}
.mf-h{padding:8px;border-radius:12px;background:var(--p1);border:1px solid var(--ln);font-weight:800;display:flex;flex-direction:column;gap:6px}
.mf-st{display:flex;align-items:center;gap:6px}.mf-st b{min-width:26px;text-align:center;font-size:18px;color:var(--acc)}.mf-st span{font-size:11px;color:var(--mut)}
.mf-st button{width:38px;height:38px;border-radius:10px;border:1px solid var(--ln);background:var(--p2);color:var(--ink);font-size:18px;font-weight:900;cursor:pointer;touch-action:manipulation}
.mf-lr{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-size:12px;font-weight:800;color:var(--mut)}
.mf-ans{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;align-items:end}
.mf-q{display:flex;flex-direction:column;gap:4px;font-size:12px;font-weight:700;color:var(--mut)}
.mf-q input{min-height:42px;padding:6px 10px;border-radius:10px;border:1.5px solid var(--ln);background:#0a1030;color:var(--ink);font:800 16px system-ui,sans-serif;-webkit-user-select:text;user-select:text}
.mf-q input:focus{outline:none;border-color:var(--acc)}
.mf-res,.mf-work{padding:9px 11px;border-radius:12px;background:var(--p1);border:1px solid var(--ln);font-size:13px;line-height:1.55}
.mf-work{border-style:dashed;color:var(--mut)}

/* carbon */
.cb-tools{display:flex;gap:6px;flex-wrap:wrap}
.cb-tool{flex:1 1 0;min-width:40px;min-height:42px;padding:6px 4px;border-radius:12px;border:1.5px solid var(--ln);background:var(--p1);color:var(--ink);font:800 14px system-ui,sans-serif;cursor:pointer;touch-action:manipulation}
.cb-tool.on{background:var(--acc);color:#06101f;border-color:transparent}
.cb-cv canvas{border:1px solid var(--ln);touch-action:none}
.cb-live{font-size:13px;padding:6px 10px;border-radius:10px;background:var(--p1);border:1px solid var(--ln)}
.cb-live.warn{border-color:var(--bad);background:rgba(255,93,115,.14);color:#ffc4cc}
.cb-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}
.cb-opt{min-height:48px}.cb-opt.wrong{border-color:var(--bad);background:rgba(255,93,115,.2);text-decoration:line-through}
.cb-opt.right{border-color:var(--ok);background:rgba(46,230,166,.25)}

/* victory modal */
.cge-modal{position:fixed;inset:0;z-index:99999;background:rgba(4,8,22,.84);display:flex;align-items:flex-start;justify-content:center;padding:12px;overflow-y:auto;animation:cge-fade .3s;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.cge-confetti{position:fixed;inset:0;overflow:hidden;pointer-events:none}
.cge-confetti i{position:absolute;top:-16px;width:8px;height:14px;border-radius:2px;animation:cge-fall linear forwards}
.cge-mbox{position:relative;width:min(100%,380px);margin:auto;padding:14px 12px 12px;border-radius:20px;background:#0c1330;border:1px solid #33437f;color:#eaf0ff;animation:cge-pop .35s}
.cge-mtitle{text-align:center;font-weight:900;font-size:17px;margin:0 0 10px}
.cge-x{position:absolute;top:8px;right:8px;width:34px;height:34px;border-radius:50%;border:0;background:rgba(255,255,255,.1);color:#fff;font-size:16px;cursor:pointer}
.cge-cardcv{width:100%;height:auto;display:block;border-radius:16px}
.cge-macts{display:flex;flex-direction:column;gap:8px;margin-top:10px}
.cge-macts .cge-btn{background:#1b2652;color:#eaf0ff;border:1px solid #33437f;min-height:46px}
.cge-macts .cge-btn.pri{background:#38bdf8;color:#06101f;border-color:transparent}
@media (prefers-reduced-motion:reduce){.cge-root *,.cge-modal *{animation-duration:.01ms!important;animation-iteration-count:1!important}}
`;

  W.ChemGamesEngine = api;
})();
