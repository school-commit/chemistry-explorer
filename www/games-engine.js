/* ============================================================================
   CHEMISTRY EXPLORER • JEE CLASS 11  —  www/games-engine.js   (v2 · bilingual + studio graphics)
   Seven playable games + downloadable mastery certificate card.
   Global controller: window.ChemGamesEngine
   (NEW_GAMES_CATALOG, mountGame, showVictoryPopup, selfTest)
   Language: window.appState.cardLang  ('hi' | 'en'), toggled live in every game.
   ========================================================================== */
(function () {
  'use strict';

  const W = window, D = document;
  const MODES = ['easy', 'moderate', 'hard'];
  const MODE_LABEL = { easy: ['Easy', 'आसान'], moderate: ['Moderate', 'मध्यम'], hard: ['Hard', 'कठिन'] };
  const XP_WIN = { easy: 50, moderate: 75, hard: 100 };
  const MODE_COLOR = { easy: '#2EA043', moderate: '#E3B341', hard: '#F85149' };
  const PAL = { bg: '#0D1117', card: '#161B22', line: '#262C36', key: '#21262D', keyLine: '#30363D', keyDeep: '#010409', ink: '#E6EDF3', mut: '#8B949E', em: '#238636', em2: '#2EA043', amber: '#D29922', amber2: '#E3B341', red: '#DA3633', red2: '#F85149', blue: '#1F6FEB', blue2: '#388BFD', terra: '#BD561D', canvas: '#090C10' };
  const CPK = { H: '#E6EDF3', C: '#7D8590', N: '#388BFD', O: '#F85149', F: '#7EE787', Cl: '#3FB950', Br: '#BD561D', S: '#E3B341', P: '#D29922', K: '#A371F7', Mn: '#BC8CFF', Cu: '#C9722E', Na: '#79C0FF', Mg: '#56D364', Al: '#B1BAC4', Fe: '#DB6D28', Cr: '#8B949E', B: '#E8A598', Be: '#8DBF3F', Si: '#C9A66B', Xe: '#4FB3BF', Ca: '#85E89D', Zn: '#9DA7B3' };
  const cpk = (s) => CPK[s] || '#8B949E';
  const GAMES = {};
  const LAST = {};
  let LAST_MOUNT = null;

  const CATALOG = [
    { id: 'parking', icon: '⚡', title: 'Electron Parking', titleHi: 'इलेक्ट्रॉन पार्किंग', sub: 'Park electrons in shells & subshells', subHi: 'कोशों व उपकोशों में इलेक्ट्रॉन भरें', chapter: 'Ch 2 • Structure of Atom', chapterHi: 'अध्याय 2 • परमाणु की संरचना', color: '#388BFD', modes: ['easy', 'moderate', 'hard'] },
    { id: 'forge', icon: '🔥', title: 'Formula Forge', titleHi: 'फ़ॉर्मूला फ़ोर्ज', sub: 'Balance ionic charges, forge neutral formulae', subHi: 'आयनिक आवेश संतुलित कर यौगिक बनाएँ', chapter: 'Ch 1 • Valency & Formulae', chapterHi: 'अध्याय 1 • संयोजकता व सूत्र', color: '#BD561D', modes: ['easy', 'moderate', 'hard'] },
    { id: 'balancer', icon: '⚖️', title: 'Reaction Balancer', titleHi: 'अभिक्रिया संतुलक', sub: 'Balance the atom scale', subHi: 'परमाणु तराज़ू संतुलित करें', chapter: 'Ch 1 & 7 • Equations & Redox', chapterHi: 'अध्याय 1 व 7 • समीकरण व रेडॉक्स', color: '#D29922', modes: ['easy', 'moderate', 'hard'] },
    { id: 'shapeshift', icon: '🧩', title: 'Shape Shift: Molecules', titleHi: 'आकृति बदलो: अणु', sub: 'Build VSEPR shapes & match the silhouette', subHi: 'VSEPR आकृति बनाएँ व छाया से मिलाएँ', chapter: 'Ch 4 • Chemical Bonding & VSEPR', chapterHi: 'अध्याय 4 • रासायनिक आबंधन व VSEPR', color: '#2EA043', modes: ['easy', 'moderate', 'hard'] },
    { id: 'detective', icon: '🔎', title: 'Trend Detective', titleHi: 'ट्रेंड डिटेक्टिव', sub: 'Follow periodic-trend clues to the element', subHi: 'आवर्ती प्रवृत्ति के सुराग़ से तत्व खोजें', chapter: 'Ch 3 • Periodic Trends', chapterHi: 'अध्याय 3 • आवर्ती प्रवृत्तियाँ', color: '#E3B341', modes: ['easy', 'moderate', 'hard'] },
    { id: 'molefactory', icon: '🏭', title: 'Mole Factory', titleHi: 'मोल फ़ैक्टरी', sub: 'Stoichiometry & limiting reagent', subHi: 'रससमीकरणमिति व सीमांत अभिकर्मक', chapter: 'Ch 1 • Stoichiometry', chapterHi: 'अध्याय 1 • रससमीकरणमिति', color: '#1F6FEB', modes: ['easy', 'moderate', 'hard'] },
    { id: 'carbon', icon: '🧪', title: 'Carbon Chain Crafter', titleHi: 'कार्बन चेन क्राफ़्टर', sub: 'Draw hydrocarbons & name them (IUPAC)', subHi: 'हाइड्रोकार्बन बनाएँ व IUPAC नाम दें', chapter: 'Ch 8–9 • GOC & Hydrocarbons', chapterHi: 'अध्याय 8–9 • कार्बनिक रसायन व हाइड्रोकार्बन', color: '#2EA043', modes: ['easy', 'moderate', 'hard'] }
  ];

  /* ------------------------------------------------------------------ utils */
  const rand = (n) => Math.floor(Math.random() * n);
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
  const chem = (s) => String(s).replace(/\^\{([^}]*)\}/g, '<sup>$1</sup>').replace(/([A-Za-z)\]])(\d+)/g, '$1<sub>$2</sub>');
  const fmtTime = (s) => { s = Math.max(0, Math.round(s)); return (s < 600 ? '0' : '') + Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60); };

  /* --------------------------------------------------- bilingual machinery */
  const lang = () => (W.appState && W.appState.cardLang === 'en' ? 'en' : 'hi');
  const L = (en, hi) => (lang() === 'en' || hi == null ? en : hi);
  const pair = (p) => (Array.isArray(p) ? p : [p, p]);
  const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const bi = (en, hi) => '<span class="bi" data-en="' + attr(en) + '" data-hi="' + attr(hi == null ? en : hi) + '">' + (lang() === 'en' || hi == null ? en : hi) + '</span>';
  const bip = (p) => { p = pair(p); return bi(p[0], p[1]); };
  const swapLang = (el) => { const k = 'data-' + lang(); el.querySelectorAll('[data-en]').forEach((e) => { e.innerHTML = e.getAttribute(k); }); };
  const STACK_HI = '"Teko","Noto Sans Devanagari","Mukta",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';
  const STACK_EN = 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';
  const cf = (px, w) => (w || 700) + ' ' + Math.round(px * (lang() === 'hi' ? 1.14 : 1)) + 'px ' + (lang() === 'hi' ? STACK_HI : STACK_EN);
  const nf = (px, w) => (w || 700) + ' ' + px + 'px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace';
  const mlab = (m) => bi(MODE_LABEL[m][0], MODE_LABEL[m][1]);
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
  function toggleLang() {
    const s = ensureState();
    s.cardLang = lang() === 'en' ? 'hi' : 'en';
    persist();
    return s.cardLang;
  }

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
    err() { if (typeof W.soundError === 'function') safe(() => W.soundError()); else tone(180, 'sawtooth', 0.18, 0); },
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

  /* ------------------------------------------- studio drawing primitives (canvas) */
  function shade(hex, a) {
    const n = parseInt(String(hex).slice(1), 16);
    let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    const t = a < 0 ? 0 : 255, p = Math.abs(a);
    r = Math.round((t - r) * p + r); g = Math.round((t - g) * p + g); b = Math.round((t - b) * p + b);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  function rr(g, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
  }
  /* technical blueprint: matte backdrop with a 16 px line grid (major every 80 px) */
  function blueprint(g, w, h) {
    g.fillStyle = PAL.canvas; g.fillRect(0, 0, w, h);
    g.lineWidth = 1;
    for (let x = 0; x <= w; x += 16) { g.strokeStyle = x % 80 === 0 ? 'rgba(88,166,255,.14)' : 'rgba(139,148,158,.07)'; g.beginPath(); g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, h); g.stroke(); }
    for (let y = 0; y <= h; y += 16) { g.strokeStyle = y % 80 === 0 ? 'rgba(88,166,255,.14)' : 'rgba(139,148,158,.07)'; g.beginPath(); g.moveTo(0, y + 0.5); g.lineTo(w, y + 0.5); g.stroke(); }
  }
  /* authentic CPK-style ball: off-centre specular, ambient shadow */
  function sphere(g, x, y, r, col, noShadow) {
    if (!noShadow) { g.fillStyle = 'rgba(0,0,0,.38)'; g.beginPath(); g.ellipse(x + r * 0.22, y + r * 0.98, r * 0.86, r * 0.26, 0, 0, 6.2832); g.fill(); }
    const gr = g.createRadialGradient(x - r * 0.38, y - r * 0.42, r * 0.06, x, y, r * 1.08);
    gr.addColorStop(0, shade(col, 0.78)); gr.addColorStop(0.3, shade(col, 0.2)); gr.addColorStop(0.7, col); gr.addColorStop(1, shade(col, -0.62));
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 6.2832); g.fill();
    g.fillStyle = 'rgba(255,255,255,.6)'; g.beginPath(); g.ellipse(x - r * 0.4, y - r * 0.46, r * 0.22, r * 0.13, -0.62, 0, 6.2832); g.fill();
    g.strokeStyle = 'rgba(0,0,0,.4)'; g.lineWidth = 1; g.beginPath(); g.arc(x, y, r, 0, 6.2832); g.stroke();
  }
  /* tapered cylinder (bond rod) with cross-section shading */
  function rod(g, x1, y1, x2, y2, r1, r2, col) {
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1, nx = -dy / len, ny = dx / len, mx = (x1 + x2) / 2, my = (y1 + y2) / 2, rm = Math.max(r1, r2);
    const gr = g.createLinearGradient(mx - nx * rm, my - ny * rm, mx + nx * rm, my + ny * rm);
    gr.addColorStop(0, shade(col, -0.55)); gr.addColorStop(0.32, shade(col, 0.5)); gr.addColorStop(0.62, col); gr.addColorStop(1, shade(col, -0.65));
    g.fillStyle = gr; g.beginPath();
    g.moveTo(x1 + nx * r1, y1 + ny * r1); g.lineTo(x2 + nx * r2, y2 + ny * r2); g.lineTo(x2 - nx * r2, y2 - ny * r2); g.lineTo(x1 - nx * r1, y1 - ny * r1); g.closePath(); g.fill();
  }
  function capsule(g, x, y, w, h, col, edge) {
    g.fillStyle = 'rgba(0,0,0,.4)'; rr(g, x, y + 3, w, h, h / 2); g.fill();
    const gr = g.createLinearGradient(0, y, 0, y + h);
    gr.addColorStop(0, shade(col, 0.55)); gr.addColorStop(0.45, col); gr.addColorStop(1, shade(col, -0.58));
    rr(g, x, y, w, h, h / 2); g.fillStyle = gr; g.fill();
    g.lineWidth = 1.5; g.strokeStyle = edge || shade(col, -0.7); g.stroke();
    rr(g, x + h * 0.4, y + 2, w - h * 0.8, h * 0.26, h * 0.13); g.fillStyle = 'rgba(255,255,255,.3)'; g.fill();
  }
  function steel(g, x0, y0, x1, y1) {
    const gr = g.createLinearGradient(x0, y0, x1, y1);
    gr.addColorStop(0, '#59616b'); gr.addColorStop(0.2, '#c9d1d9'); gr.addColorStop(0.45, '#8b949e'); gr.addColorStop(0.7, '#e6edf3'); gr.addColorStop(1, '#4b535d');
    return gr;
  }

  /* --------------------------------------------------------- canvas helper */
  function makeCanvas(lw, lh) {
    const dpr = Math.min(3, W.devicePixelRatio || 1);
    const cv = D.createElement('canvas');
    cv.width = Math.round(lw * dpr); cv.height = Math.round(lh * dpr);
    cv.style.cssText = 'width:100%;height:auto;display:block;touch-action:none;border-radius:12px;';
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return {
      cv, g, w: lw, h: lh,
      pos(e) { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * lw / (r.width || lw), y: (e.clientY - r.top) * lh / (r.height || lh) }; }
    };
  }

  /* ----------------------------------------------------- game context/mount */
  function createCtx(meta, mode, container) {
    const ctx = { meta, mode, container, cleanups: [], moves: 0, good: 0, wrong: 0, hints: 0, finished: false, t0: Date.now(), hintFn: null, moveFmt: (m) => bi('Moves ' + m, 'चालें ' + m) };
    container.innerHTML = '';
    const root = D.createElement('div');
    root.className = 'cge-root';
    root.setAttribute('lang', lang());
    root.setAttribute('style', '--acc:' + meta.color);
    root.innerHTML =
      '<div class="cge-bar">' +
      '<span class="cge-badge cge-m-' + mode + '">' + mlab(mode) + '</span>' +
      '<span class="cge-title">' + meta.icon + ' ' + bi(meta.title, meta.titleHi) + '</span>' +
      '<button class="cge-btn lang-btn" data-bar="lang">🌐 हिंदी / EN</button></div>' +
      '<div class="cge-bar cge-bar3"><span class="cge-cnt" data-r="cnt"></span><span class="cge-live" data-r="live"></span></div>' +
      '<div class="cge-bar cge-bar2">' +
      '<button class="cge-btn pri" data-bar="new">🎲 ' + bi('New Random Challenge', 'नया चैलेंज') + '</button>' +
      '<button class="cge-btn" data-bar="hint">💡 ' + bi('NCERT Concept Hint', 'NCERT संकेत') + '</button></div>' +
      '<div class="cge-msg" data-r="msg" hidden></div>' +
      '<div class="cge-hint" data-r="hint" hidden></div>' +
      '<div class="cge-stage" data-r="stage"></div>';
    container.appendChild(root);
    const q = (n) => root.querySelector('[data-r="' + n + '"]');
    const cnt = q('cnt'), live = q('live'), msg = q('msg'), hintEl = q('hint');
    let msgState = null, statusState = null;
    ctx.root = root; ctx.stage = q('stage');

    ctx.setMoves = (html) => { cnt.innerHTML = html; };
    ctx.move = (n) => { ctx.moves += (n == null ? 1 : n); cnt.innerHTML = ctx.moveFmt(ctx.moves); };
    ctx.setStatus = (p) => { statusState = p || null; live.innerHTML = p ? bip(p) : ''; };
    const paintMsg = () => {
      if (!msgState) { msg.hidden = true; msg.innerHTML = ''; return; }
      msg.hidden = false; msg.className = 'cge-msg ' + (msgState.kind || ''); msg.innerHTML = bip(msgState.p);
    };
    ctx.say = (p, kind) => { msgState = p ? { p: pair(p), kind } : null; paintMsg(); };
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
    ctx.ok = (p) => { ctx.good++; sfx.ok(); if (p) { p = pair(p); ctx.say(['✅ ' + p[0], '✅ ' + p[1]], 'ok'); } };
    ctx.bad = (p) => {
      ctx.wrong++;
      xp(-10, '❌ Wrong!');
      sfx.err(); buzz(70); ctx.shake();
      if (p) { p = pair(p); ctx.say(['❌ ' + p[0], '❌ ' + p[1]], 'bad'); }
    };
    const paintHint = () => {
      if (hintEl.hidden || !ctx.hintFn) return;
      hintEl.innerHTML = '💡 <b>' + bi('NCERT concept:', 'NCERT संकल्पना:') + '</b> ' + bip(ctx.hintFn());
      render(hintEl);
    };
    ctx.showHint = () => {
      if (!ctx.hintFn) return;
      if (!hintEl.hidden) { hintEl.hidden = true; return; }
      ctx.hints++; hintEl.hidden = false; paintHint();
    };
    ctx.applyLang = () => {
      root.setAttribute('lang', lang());
      cnt.innerHTML = ctx.moveFmt(ctx.moves);
      paintMsg(); paintHint();
      live.innerHTML = statusState ? bip(statusState) : '';
      swapLang(root);
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
      const d = o.detail ? pair(o.detail) : ['', ''];
      ctx.say(['🏆 Challenge cleared! ' + d[0], '🏆 चैलेंज पूरा हुआ! ' + d[1]], 'ok');
      ctx.root.classList.add('cge-won');
      api.showVictoryPopup({ gameId: meta.id, mode, title: meta.title, icon: meta.icon, color: meta.color, accuracy: acc, moves: ctx.moves, timeSec: secs, stars: st, xp: gain, concept: o.concept });
    };
    ctx.runCleanup = () => { const c = ctx.cleanups; ctx.cleanups = []; c.forEach((f) => safe(f)); };
    ctx.restart = () => {
      ctx.runCleanup();
      ctx.moves = 0; ctx.good = 0; ctx.wrong = 0; ctx.hints = 0; ctx.finished = false; ctx.t0 = Date.now();
      ctx.hintFn = null; ctx.moveFmt = (m) => bi('Moves ' + m, 'चालें ' + m);
      root.classList.remove('cge-won');
      ctx.setMoves(ctx.moveFmt(0)); ctx.setStatus(null); ctx.say(null); hintEl.hidden = true;
      ctx.stage.onclick = null; ctx.stage.innerHTML = '';
      recordPlay(meta.id, mode);
      GAMES[meta.id](ctx, mode);
      render(ctx.stage);
    };
    ctx.destroy = () => { ctx.runCleanup(); safe(() => root.remove()); };
    root.addEventListener('click', (e) => {
      const b = e.target.closest && e.target.closest('[data-bar]');
      if (!b) return;
      const k = b.getAttribute('data-bar');
      if (k === 'new') { sfx.pop(); ctx.restart(); }
      else if (k === 'lang') { toggleLang(); sfx.tap(); ctx.applyLang(); }
      else ctx.showHint();
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

  /* ------------------------------------------- mastery certificate / data card */
  function wrapLines(g, text, maxW) {
    const words = String(text).split(/\s+/), lines = []; let cur = '';
    words.forEach((w) => { const t = cur ? cur + ' ' + w : w; if (g.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; });
    if (cur) lines.push(cur);
    return lines;
  }
  function fit(g, text, maxW, size, weight) {
    let s = size;
    do { g.font = cf(s, weight); s -= 1; } while (g.measureText(text).width > maxW && s > 10);
  }
  function medal(g, cx, cy, R, earned) {
    /* ribbon tails */
    g.fillStyle = earned ? PAL.red : '#3b434d';
    g.beginPath(); g.moveTo(cx - R * 0.55, cy + R * 0.6); g.lineTo(cx - R * 0.15, cy + R * 0.9); g.lineTo(cx - R * 0.55, cy + R * 1.55); g.lineTo(cx - R * 0.8, cy + R * 1.2); g.closePath(); g.fill();
    g.fillStyle = earned ? PAL.blue : '#2d333b';
    g.beginPath(); g.moveTo(cx + R * 0.55, cy + R * 0.6); g.lineTo(cx + R * 0.15, cy + R * 0.9); g.lineTo(cx + R * 0.55, cy + R * 1.55); g.lineTo(cx + R * 0.8, cy + R * 1.2); g.closePath(); g.fill();
    /* embossed disc */
    const o = g.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
    if (earned) { o.addColorStop(0, '#FFE9A8'); o.addColorStop(0.5, '#D9A62E'); o.addColorStop(1, '#7A5410'); }
    else { o.addColorStop(0, '#6e7681'); o.addColorStop(0.5, '#3b434d'); o.addColorStop(1, '#1b2027'); }
    g.fillStyle = o; g.beginPath(); g.arc(cx, cy, R, 0, 6.2832); g.fill();
    g.lineWidth = 2; g.strokeStyle = earned ? '#5c3f0b' : '#0d1117'; g.stroke();
    const i = g.createLinearGradient(cx + R, cy + R, cx - R, cy - R);
    if (earned) { i.addColorStop(0, '#FFE9A8'); i.addColorStop(0.5, '#C99724'); i.addColorStop(1, '#8a6212'); }
    else { i.addColorStop(0, '#59616b'); i.addColorStop(1, '#232930'); }
    g.fillStyle = i; g.beginPath(); g.arc(cx, cy, R * 0.8, 0, 6.2832); g.fill();
    g.lineWidth = 1.5; g.strokeStyle = earned ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.12)'; g.beginPath(); g.arc(cx, cy, R * 0.8, 0, 6.2832); g.stroke();
    /* star */
    g.beginPath();
    for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? R * 0.26 : R * 0.54; g.lineTo(cx + r * Math.cos(a), cy + 1 + r * Math.sin(a)); }
    g.closePath();
    if (earned) { g.fillStyle = '#FFF4C7'; g.fill(); g.lineWidth = 1.5; g.strokeStyle = '#8a6212'; g.stroke(); }
    else { g.fillStyle = 'rgba(0,0,0,.35)'; g.fill(); g.lineWidth = 1.5; g.strokeStyle = 'rgba(255,255,255,.18)'; g.stroke(); }
  }
  function drawCard(cv, s) {
    const LW = 600, LH = 850, S = clamp(W.devicePixelRatio || 2, 2, 3);
    cv.width = Math.round(LW * S); cv.height = Math.round(LH * S);
    const g = cv.getContext('2d');
    g.setTransform(S, 0, 0, S, 0, 0);
    const meta = CATALOG.find((x) => x.id === s.gameId) || {};
    const gold = '#E3B341', em = PAL.em2;
    g.fillStyle = '#10151C'; g.fillRect(0, 0, LW, LH);
    g.lineWidth = 1;
    for (let x = 0; x <= LW; x += 24) { g.strokeStyle = 'rgba(139,148,158,.06)'; g.beginPath(); g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, LH); g.stroke(); }
    for (let y = 0; y <= LH; y += 24) { g.strokeStyle = 'rgba(139,148,158,.06)'; g.beginPath(); g.moveTo(0, y + 0.5); g.lineTo(LW, y + 0.5); g.stroke(); }
    /* geometric technical border */
    g.lineWidth = 2; g.strokeStyle = '#30363D'; g.strokeRect(14, 14, LW - 28, LH - 28);
    g.lineWidth = 1; g.strokeStyle = '#262C36'; g.strokeRect(24, 24, LW - 48, LH - 48);
    for (let x = 40; x < LW - 40; x += 20) { g.strokeStyle = '#2b323c'; g.beginPath(); g.moveTo(x, 14); g.lineTo(x, 22); g.moveTo(x, LH - 14); g.lineTo(x, LH - 22); g.stroke(); }
    for (let y = 40; y < LH - 40; y += 20) { g.strokeStyle = '#2b323c'; g.beginPath(); g.moveTo(14, y); g.lineTo(22, y); g.moveTo(LW - 14, y); g.lineTo(LW - 22, y); g.stroke(); }
    g.lineWidth = 4; g.strokeStyle = gold; g.lineCap = 'square';
    [[14, 14, 1, 1], [LW - 14, 14, -1, 1], [14, LH - 14, 1, -1], [LW - 14, LH - 14, -1, -1]].forEach((c) => {
      g.beginPath(); g.moveTo(c[0] + c[2] * 46, c[1]); g.lineTo(c[0], c[1]); g.lineTo(c[0], c[1] + c[3] * 46); g.stroke();
    });
    g.lineCap = 'butt';
    g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    /* header */
    g.fillStyle = gold; g.font = cf(15, 700); g.fillText(L('CERTIFICATE OF MASTERY', 'निपुणता प्रमाणपत्र'), LW / 2, 66);
    g.fillStyle = PAL.ink; fit(g, 'CHEMISTRY EXPLORER • JEE CLASS 11', 500, 29, 800); g.fillText('CHEMISTRY EXPLORER • JEE CLASS 11', LW / 2, 104);
    g.strokeStyle = '#30363D'; g.lineWidth = 1; g.beginPath(); g.moveTo(70, 124); g.lineTo(LW / 2 - 14, 124); g.moveTo(LW / 2 + 14, 124); g.lineTo(LW - 70, 124); g.stroke();
    g.fillStyle = gold; g.save(); g.translate(LW / 2, 124); g.rotate(Math.PI / 4); g.fillRect(-5, -5, 10, 10); g.restore();
    /* recipient */
    g.fillStyle = PAL.mut; g.font = cf(14, 600); g.fillText(L('AWARDED TO', 'प्रदत्त'), LW / 2, 158);
    g.fillStyle = '#ffffff'; fit(g, s.player, 470, 44, 800); g.fillText(s.player, LW / 2, 206);
    g.strokeStyle = gold; g.lineWidth = 1.5; g.beginPath(); g.moveTo(150, 220); g.lineTo(LW - 150, 220); g.stroke();
    /* game + mode */
    const title = L(s.title, meta.titleHi || s.title);
    g.font = '52px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; g.fillStyle = '#fff'; g.fillText(s.icon, LW / 2, 284);
    g.fillStyle = PAL.ink; fit(g, title, 500, 35, 800); g.fillText(title, LW / 2, 328);
    const ml = L(MODE_LABEL[s.mode][0], MODE_LABEL[s.mode][1]) + L(' Mode', ' मोड');
    g.font = cf(19, 700); const mw = g.measureText(ml).width + 46;
    g.fillStyle = 'rgba(0,0,0,.4)'; rr(g, LW / 2 - mw / 2, 347, mw, 38, 8); g.fill();
    g.fillStyle = MODE_COLOR[s.mode]; rr(g, LW / 2 - mw / 2, 344, mw, 38, 8); g.fill();
    g.fillStyle = '#0D1117'; g.fillText(ml, LW / 2, 370);
    /* medals */
    for (let i = 0; i < 3; i++) medal(g, LW / 2 + (i - 1) * 118, 452, 40, i < s.stars);
    /* stats */
    const tiles = [[L('ACCURACY', 'सटीकता'), s.accuracy + '%'], [L('MOVES', 'चालें'), String(s.moves)], [L('TIME TAKEN', 'लगा समय'), fmtTime(s.timeSec)]];
    tiles.forEach((t, i) => {
      const x = 44 + i * 172, y = 540, w = 160, h = 88;
      g.fillStyle = '#010409'; rr(g, x, y + 4, w, h, 10); g.fill();
      g.fillStyle = '#161B22'; rr(g, x, y, w, h, 10); g.fill();
      g.lineWidth = 1; g.strokeStyle = '#262C36'; g.stroke();
      g.fillStyle = 'rgba(255,255,255,.06)'; g.fillRect(x + 8, y + 1, w - 16, 1);
      g.fillStyle = PAL.mut; g.font = cf(13, 700); g.fillText(t[0], x + w / 2, y + 28);
      g.fillStyle = '#ffffff'; fit(g, t[1], w - 24, 36, 800); g.fillText(t[1], x + w / 2, y + 70);
    });
    /* XP key */
    g.fillStyle = '#144620'; rr(g, 44, 650, 512, 62, 12); g.fill();
    g.fillStyle = PAL.em; rr(g, 44, 646, 512, 62, 12); g.fill();
    g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(56, 648, 488, 2);
    g.fillStyle = '#ffffff'; g.font = cf(32, 800); g.fillText('+' + s.xp + L(' XP EARNED', ' XP अर्जित'), LW / 2, 688);
    /* concept */
    g.fillStyle = '#161B22'; rr(g, 44, 726, 512, 72, 10); g.fill(); g.lineWidth = 1; g.strokeStyle = '#262C36'; g.stroke();
    g.fillStyle = em; g.fillRect(44, 734, 5, 56);
    g.fillStyle = em; g.font = cf(12, 800); g.fillText('🧠 ' + L('CONCEPT MASTERED', 'महारत हासिल संकल्पना'), LW / 2 + 4, 746);
    g.fillStyle = '#ffffff'; g.font = cf(16, 700);
    const cc = pair(s.concept);
    wrapLines(g, L(cc[0], cc[1]), 460).slice(0, 2).forEach((ln, i) => g.fillText(ln, LW / 2 + 4, 768 + i * 19));
    /* footer */
    g.fillStyle = PAL.mut; g.font = nf(11, 600);
    g.fillText(new Date().toISOString().slice(0, 10) + '  ·  No. CE-' + (Math.abs(s.timeSec * 977 + s.moves * 131 + s.xp * 17 + s.stars * 7919) % 900000 + 100000), LW / 2, 818);
    g.fillStyle = 'rgba(230,237,243,.7)'; g.font = 'italic 600 17px ' + STACK_EN;
    g.fillText('Made with ❤️‍🩹 by Aditya Maurya', LW / 2, 840);
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
    s.color = s.color || meta.color || '#388BFD';
    s.accuracy = s.accuracy == null ? 100 : Math.round(s.accuracy);
    s.moves = s.moves == null ? 0 : s.moves;
    s.timeSec = s.timeSec == null ? 0 : s.timeSec;
    s.stars = clamp(Math.round(s.stars == null ? 3 : s.stars), 0, 3);
    s.xp = s.xp == null ? XP_WIN[s.mode] : s.xp;
    s.concept = s.concept || ['Class 11 Chemistry mastery', 'कक्षा 11 रसायन में निपुणता'];
    s.player = playerName();
    injectStyle();
    const old = D.getElementById('cge-modal'); if (old) old.remove();
    const modal = D.createElement('div');
    modal.id = 'cge-modal'; modal.className = 'cge-modal'; modal.setAttribute('lang', lang());
    let cf2 = '';
    for (let i = 0; i < 30; i++) cf2 += '<i style="left:' + rand(100) + '%;background:' + [PAL.amber2, PAL.em2, PAL.blue2, PAL.red2, '#C9D1D9'][i % 5] + ';animation-delay:' + (rand(900) / 1000).toFixed(2) + 's;animation-duration:' + (1.7 + rand(14) / 10).toFixed(1) + 's"></i>';
    modal.innerHTML =
      '<div class="cge-confetti">' + cf2 + '</div>' +
      '<div class="cge-mbox"><button class="cge-x" data-m="close" aria-label="Close">✕</button>' +
      '<div class="cge-mtitle">🏆 ' + bi('Challenge Cleared!', 'चैलेंज पूरा!') + '</div>' +
      '<canvas class="cge-cardcv"></canvas>' +
      '<div class="cge-macts"><button class="cge-btn pri" data-m="dl">📥 ' + bi('Download Performance Card (PNG)', 'परफ़ॉर्मेंस कार्ड डाउनलोड करें (PNG)') + '</button>' +
      '<button class="cge-btn" data-m="again">🎲 ' + bi('Play Another Random Round', 'एक और रैंडम राउंड खेलें') + '</button>' +
      '<button class="cge-btn lang-btn" data-m="lang">🌐 हिंदी / EN</button></div></div>';
    D.body.appendChild(modal);
    const cv = modal.querySelector('canvas');
    safe(() => drawCard(cv, s));
    const close = () => { safe(() => modal.remove()); };
    modal.addEventListener('click', (e) => {
      const b = e.target.closest && e.target.closest('[data-m]');
      if (!b) { if (e.target === modal) close(); return; }
      const k = b.getAttribute('data-m');
      if (k === 'close') close();
      else if (k === 'lang') {
        toggleLang(); modal.setAttribute('lang', lang()); swapLang(modal); safe(() => drawCard(cv, s));
        const lm = LAST_MOUNT; if (lm && lm.container && lm.container.__cge) safe(() => lm.container.__cge.applyLang());
      }
      else if (k === 'dl') downloadCard(cv, 'ChemExplorer_' + s.title.replace(/[^A-Za-z0-9]+/g, '_') + '_' + MODE_LABEL[s.mode][0] + '_' + Date.now() + '.png');
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
    if (Z === 24) { c['4s'] = 1; c['3d'] = 5; }
    if (Z === 29) { c['4s'] = 1; c['3d'] = 10; }
    let k = q || 0;
    ['4s', '3d', '3p', '3s', '2p', '2s', '1s'].forEach((id) => { while (k > 0 && c[id] > 0) { c[id]--; k--; } });
    return c;
  }
  function pkNote(Z, q) {
    if (Z === 24 && !q) return ['Cr is an exception: one 4s electron shifts into 3d to give the extra-stable <b>half-filled</b> 3d<sup>5</sup> → [Ar] 3d<sup>5</sup> 4s<sup>1</sup>.', 'Cr एक अपवाद है: एक 4s इलेक्ट्रॉन 3d में चला जाता है, जिससे अतिरिक्त-स्थायी <b>अर्ध-पूरित</b> (half-filled) 3d<sup>5</sup> बनता है → [Ar] 3d<sup>5</sup> 4s<sup>1</sup>।'];
    if (Z === 29 && !q) return ['Cu is an exception: one 4s electron shifts into 3d to give the extra-stable <b>fully-filled</b> 3d<sup>10</sup> → [Ar] 3d<sup>10</sup> 4s<sup>1</sup>.', 'Cu एक अपवाद है: एक 4s इलेक्ट्रॉन 3d में चला जाता है, जिससे अतिरिक्त-स्थायी <b>पूर्ण-पूरित</b> (fully-filled) 3d<sup>10</sup> बनता है → [Ar] 3d<sup>10</sup> 4s<sup>1</sup>।'];
    if (q) {
      const neu = Z === 24 ? '[Ar] 3d<sup>5</sup> 4s<sup>1</sup>' : Z === 29 ? '[Ar] 3d<sup>10</sup> 4s<sup>1</sup>' : '[Ar] 3d<sup>' + (Z - 20) + '</sup> 4s<sup>2</sup>';
      return ['For cations, electrons leave the <b>outermost shell first</b>: the 4s electrons are removed before 3d. (Neutral ' + PK_SYM[Z] + ' is ' + neu + '.)', 'धनायनों में इलेक्ट्रॉन <b>सबसे बाहरी कोश से पहले</b> निकलते हैं: 4s के इलेक्ट्रॉन 3d से पहले हटते हैं। (उदासीन ' + PK_SYM[Z] + ' का विन्यास ' + neu + ' है।)'];
    }
    if (Z >= 19) return ['After 3p the <b>4s</b> subshell (lower n + l) is filled before 3d.', '3p के बाद कम ऊर्जा (कम n + l) वाला <b>4s</b> उपकोश, 3d से पहले भरा जाता है।'];
    return ['Shell capacity is 2n² (K = 2, L = 8, M = 18); for Z ≤ 18 fill 1s → 2s → 2p → 3s → 3p.', 'कोश की धारिता 2n² है (K = 2, L = 8, M = 18); Z ≤ 18 के लिए 1s → 2s → 2p → 3s → 3p क्रम में भरें।'];
  }
  const PK_COL = ['#388BFD', '#2EA043', '#E3B341', '#F85149'];

  GAMES.parking = function (ctx, mode) {
    const [Z, q] = ctx.pick(PK_POOL[mode]);
    const target = pkConfig(Z, q), N = Z - q;
    const limit = N + { easy: 5, moderate: 4, hard: 3 }[mode];
    const label = PK_SYM[Z] + (q ? '^{' + (q > 1 ? q : '') + '+}' : '');
    const lh = chem(label);
    const placed = {}; PK_SUBS.forEach((s) => { placed[s.id] = 0; });
    let used = 0, done = false, locked = false;
    const pulses = [];
    const nextSub = () => PK_SUBS.find((s) => placed[s.id] < target[s.id]);
    const total = () => PK_SUBS.reduce((a, s) => a + placed[s.id], 0);
    const A = clamp(Math.round(Z * 1.8), 6, 24), nuc = [];
    for (let i = 0; i < A; i++) nuc.push({ a: i * 2.39996, r: 4.1 * Math.sqrt(i + 0.4), red: i % 2 === 0 });

    ctx.stage.innerHTML =
      '<div class="cge-card">' + bi(
        'Park all <b>' + N + '</b> electrons of <b>' + lh + '</b> <span class="cge-dim">(Z = ' + Z + (q ? ', charge +' + q : '') + ')</span> in the correct subshells — lowest energy first. A wrong tap costs a move.',
        '<b>' + lh + '</b> <span class="cge-dim">(Z = ' + Z + (q ? ', आवेश +' + q : '') + ')</span> के सभी <b>' + N + '</b> इलेक्ट्रॉनों को सही उपकोशों (subshells) में भरें — पहले सबसे कम ऊर्जा वाला। गलत टैप पर एक चाल बेकार जाती है।') + '</div>' +
      '<div class="pk-cv"></div><div class="pk-shells" data-r="sh"></div><div class="pk-slots" data-r="sl"></div><div class="pk-cfg" data-r="cfg"></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, 240);
    ctx.stage.querySelector('.pk-cv').appendChild(cvh.cv);
    ctx.moveFmt = (m) => bi('Moves ' + m + '/' + limit, 'चालें ' + m + '/' + limit);
    ctx.setMoves(ctx.moveFmt(0));
    ctx.hintFn = () => {
      const n = pkNote(Z, q);
      return ['Fill in order of increasing (n + l): <b>1s → 2s → 2p → 3s → 3p → 4s → 3d</b>. Pauli exclusion: max 2 electrons per orbital, so s holds 2, p holds 6, d holds 10. ' + n[0],
        'ऊर्जा के बढ़ते क्रम (n + l) में भरें: <b>1s → 2s → 2p → 3s → 3p → 4s → 3d</b>। पाउली अपवर्जन सिद्धांत (Pauli exclusion): प्रत्येक कक्षक में अधिकतम 2 इलेक्ट्रॉन, इसलिए s में 2, p में 6, d में 10। ' + n[1]];
    };

    function refresh() {
      const cnt = [0, 0, 0, 0];
      PK_SUBS.forEach((s) => { cnt[s.n - 1] += placed[s.id]; });
      $('sh').innerHTML = ['K', 'L', 'M', 'N'].map((n, i) => '<span class="pk-sh' + (cnt[i] ? ' on' : '') + '" style="--c:' + PK_COL[i] + '"><b>' + n + '</b> ' + cnt[i] + '<small>/' + [2, 8, 18, 32][i] + '</small></span>').join('');
      $('sl').innerHTML = PK_SUBS.map((s) => {
        let pips = '';
        for (let i = 0; i < s.cap; i++) pips += '<i class="' + (i < placed[s.id] ? 'on' : '') + '"></i>';
        return '<button class="pk-slot' + (placed[s.id] ? ' has' : '') + '" data-sub="' + s.id + '"' + (done || locked ? ' disabled' : '') + '><b>' + s.id + '</b><span class="pk-pips">' + pips + '</span><em>' + placed[s.id] + '/' + s.cap + '</em></button>';
      }).join('');
      ctx.setStatus(['⚡ ' + (N - total()) + ' e⁻ left', '⚡ ' + (N - total()) + ' e⁻ शेष']);
    }
    function reason(s) {
      const n = pkNote(Z, q);
      if (placed[s.id] >= s.cap) return ['<b>' + s.id + '</b> is full — at most ' + s.cap + ' electrons here (Pauli exclusion: 2 per orbital).', '<b>' + s.id + '</b> भर चुका है — यहाँ अधिकतम ' + s.cap + ' इलेक्ट्रॉन (पाउली अपवर्जन: प्रति कक्षक 2)।'];
      if (placed[s.id] >= target[s.id]) return ['<b>' + s.id + '</b> already holds its correct share of ' + target[s.id] + ' electron(s) in ' + lh + '. ' + n[0], lh + ' के लिए <b>' + s.id + '</b> में सही संख्या (' + target[s.id] + ' इलेक्ट्रॉन) पहले से है। ' + n[1]];
      const nx = nextSub().id;
      return ['Not yet! A lower-energy subshell (<b>' + nx + '</b>) must be filled first — Aufbau (n + l) rule.', 'अभी नहीं! पहले कम ऊर्जा वाला उपकोश (<b>' + nx + '</b>) भरना होगा — ऑफबाऊ (n + l) नियम।'];
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
          $('cfg').innerHTML = '<div class="cge-card ok">' + bi('✅ Ground-state configuration of ' + lh + ':', '✅ ' + lh + ' का मूल अवस्था विन्यास (ground-state configuration):') + '<br><b class="pk-cfgtxt">' + cfg + '</b></div>';
          ctx.win({
            effStars: used <= N + 1 ? 3 : used <= N + 2 ? 2 : 1,
            concept: mode === 'easy' ? ['Aufbau principle, Pauli exclusion & shell capacity (2n²)', 'ऑफबाऊ सिद्धांत, पाउली अपवर्जन व कोश धारिता (2n²)']
              : mode === 'moderate' ? ['Aufbau (n + l) rule — 4s fills before 3d', 'ऑफबाऊ (n + l) नियम — 4s, 3d से पहले भरता है']
                : ['Half-/full-filled stability & 4s-first ionisation of 3d metals', 'अर्ध-/पूर्ण-पूरित स्थायित्व व 3d धातुओं में 4s का पहले आयनन'],
            detail: [PK_SYM[Z] + ' configured.', PK_SYM[Z] + ' का विन्यास पूरा।']
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
        ctx.say(['⛔ Out of moves with ' + (N - total()) + ' electron(s) unparked. Retry the same atom!', '⛔ चालें समाप्त — ' + (N - total()) + ' इलेक्ट्रॉन बाकी रह गए। इसी परमाणु को फिर आज़माएँ!'], 'bad');
        $('cfg').innerHTML = '<button class="cge-btn pri" data-act="retry">' + bi('↻ Retry this atom', '↻ यही परमाणु फिर से') + '</button>';
      }
    }
    ctx.stage.onclick = (e) => {
      const b = e.target.closest && e.target.closest('[data-sub]');
      if (b) { place(b.getAttribute('data-sub')); return; }
      if (e.target.closest && e.target.closest('[data-act="retry"]')) {
        PK_SUBS.forEach((s) => { placed[s.id] = 0; });
        used = 0; locked = false; ctx.moves = 0; ctx.setMoves(ctx.moveFmt(0)); $('cfg').innerHTML = ''; ctx.say(null); refresh();
      }
    };
    refresh();

    const R = [34, 60, 86, 112], NAMES = ['K', 'L', 'M', 'N'], CAPS = [2, 8, 18, 32];
    ctx.loop((t) => {
      const g = cvh.g, cx = 170, cy = 120;
      blueprint(g, 340, 240);
      g.strokeStyle = 'rgba(139,148,158,.22)'; g.lineWidth = 1; g.setLineDash([2, 4]);
      g.beginPath(); g.moveTo(0, cy + 0.5); g.lineTo(340, cy + 0.5); g.moveTo(cx + 0.5, 0); g.lineTo(cx + 0.5, 240); g.stroke(); g.setLineDash([]);
      const cnt = [0, 0, 0, 0];
      PK_SUBS.forEach((s) => { cnt[s.n - 1] += placed[s.id]; });
      for (let i = 0; i < 4; i++) {
        const col = PK_COL[i], on = cnt[i] > 0;
        g.beginPath(); g.arc(cx, cy, R[i], 0, 6.2832); g.lineWidth = on ? 2 : 1.4; g.strokeStyle = on ? shade(col, -0.05) : '#30363D';
        g.setLineDash(on ? [] : [4, 5]); g.stroke(); g.setLineDash([]);
        for (let k = 0; k < 36; k++) {
          const a = k * Math.PI / 18, l = k % 3 === 0 ? 6 : 3;
          g.strokeStyle = on ? 'rgba(230,237,243,.5)' : 'rgba(139,148,158,.4)'; g.lineWidth = 1;
          g.beginPath(); g.moveTo(cx + Math.cos(a) * (R[i] + 2), cy + Math.sin(a) * (R[i] + 2)); g.lineTo(cx + Math.cos(a) * (R[i] + 2 + l), cy + Math.sin(a) * (R[i] + 2 + l)); g.stroke();
        }
        const tx = NAMES[i] + ' · n=' + (i + 1) + ' · ≤' + CAPS[i];
        g.font = nf(8, 700); const tw = g.measureText(tx).width + 10;
        g.fillStyle = PAL.bg; rr(g, cx - tw / 2, cy - R[i] - 7, tw, 13, 4); g.fill(); g.strokeStyle = on ? col : '#30363D'; g.lineWidth = 1; g.stroke();
        g.fillStyle = on ? PAL.ink : PAL.mut; g.textAlign = 'center'; g.fillText(tx, cx, cy - R[i] + 3);
        const dir = i % 2 ? -1 : 1, sp = dir * (1.2 - i * 0.22);
        for (let k = 0; k < cnt[i]; k++) {
          const a = t / 1000 * sp + k * 6.2832 / cnt[i];
          for (let m = 6; m >= 1; m--) {
            const aa = a - dir * m * 0.075;
            g.globalAlpha = 0.34 * (1 - m / 7); g.fillStyle = col; g.beginPath(); g.arc(cx + R[i] * Math.cos(aa), cy + R[i] * Math.sin(aa), 2.6, 0, 6.2832); g.fill();
          }
          g.globalAlpha = 1;
          sphere(g, cx + R[i] * Math.cos(a), cy + R[i] * Math.sin(a), 5.4, col, true);
        }
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const age = (t - pulses[i].t0) / 650;
        if (age > 1) { pulses.splice(i, 1); continue; }
        g.beginPath(); g.arc(cx, cy, R[pulses[i].n - 1] + age * 14, 0, 6.2832);
        g.strokeStyle = 'rgba(230,237,243,' + (0.9 * (1 - age)).toFixed(2) + ')'; g.lineWidth = 2; g.stroke();
      }
      /* nucleus: cluster of shaded protons (red) and neutrons (grey) */
      for (let i = A - 1; i >= 0; i--) {
        const n = nuc[i], jx = Math.sin(t / 520 + i) * 0.5, jy = Math.cos(t / 470 + i * 1.3) * 0.5;
        sphere(g, cx + Math.cos(n.a) * n.r + jx, cy + Math.sin(n.a) * n.r + jy, 4.7, n.red ? PAL.red : '#9AA4AF', true);
      }
      g.textAlign = 'left'; g.fillStyle = PAL.ink; g.font = nf(14, 800); g.fillText(PK_SYM[Z] + (q ? sups(q > 1 ? q : '') + '⁺' : ''), 10, 22);
      g.font = nf(9, 700); g.fillStyle = PAL.mut; g.fillText('Z = ' + Z + ' · +' + Z + 'e', 10, 36);
      g.font = cf(9, 700); g.textAlign = 'right';
      const l1 = L('proton', 'प्रोटॉन'), l2 = L('neutron', 'न्यूट्रॉन');
      g.fillStyle = PAL.mut; g.fillText(l2, 332, 232); const w2 = g.measureText(l2).width;
      g.fillStyle = '#9AA4AF'; g.beginPath(); g.arc(332 - w2 - 8, 229, 3.5, 0, 6.2832); g.fill();
      g.fillStyle = PAL.mut; g.fillText(l1, 332 - w2 - 16, 232); const w1 = g.measureText(l1).width;
      g.fillStyle = PAL.red; g.beginPath(); g.arc(332 - w2 - 16 - w1 - 8, 229, 3.5, 0, 6.2832); g.fill();
      g.textAlign = 'center';
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
    easy: [['Na+', 'Cl-', 'Sodium chloride', 'सोडियम क्लोराइड'], ['Mg2+', 'Cl-', 'Magnesium chloride', 'मैग्नीशियम क्लोराइड'], ['Ca2+', 'O2-', 'Calcium oxide', 'कैल्सियम ऑक्साइड'], ['Na+', 'O2-', 'Sodium oxide', 'सोडियम ऑक्साइड'], ['Al3+', 'Cl-', 'Aluminium chloride', 'ऐलुमिनियम क्लोराइड'], ['K+', 'S2-', 'Potassium sulphide', 'पोटैशियम सल्फाइड']],
    moderate: [['Na+', 'CO32-', 'Sodium carbonate', 'सोडियम कार्बोनेट'], ['Ca2+', 'OH-', 'Calcium hydroxide', 'कैल्सियम हाइड्रॉक्साइड'], ['NH4+', 'SO42-', 'Ammonium sulphate', 'अमोनियम सल्फेट'], ['Mg2+', 'NO3-', 'Magnesium nitrate', 'मैग्नीशियम नाइट्रेट'], ['K+', 'PO43-', 'Potassium phosphate', 'पोटैशियम फॉस्फेट']],
    hard: [['Al3+', 'SO42-', 'Aluminium sulphate', 'ऐलुमिनियम सल्फेट'], ['Ca2+', 'PO43-', 'Calcium phosphate', 'कैल्सियम फॉस्फेट'], ['Fe3+', 'SO42-', 'Iron(III) sulphate (ferric sulphate)', 'आयरन(III) सल्फेट (फेरिक सल्फेट)'], ['Cr3+', 'O2-', 'Chromium(III) oxide', 'क्रोमियम(III) ऑक्साइड'], ['Mg2+', 'N3-', 'Magnesium nitride', 'मैग्नीशियम नाइट्राइड']]
  };
  const fgLabel = (id) => { const i = FG_ION[id], a = Math.abs(i.q); return chem(i.s + '^{' + (a > 1 ? a : '') + (i.q > 0 ? '+' : '−') + '}'); };
  const fgCounts = (cat, an) => { const l = lcm(Math.abs(FG_ION[cat].q), Math.abs(FG_ION[an].q)); return [l / Math.abs(FG_ION[cat].q), l / Math.abs(FG_ION[an].q)]; };
  function fgFormula(counts) {
    const ids = Object.keys(counts).filter((k) => counts[k] > 0);
    const ord = ids.filter((k) => FG_ION[k].q > 0).concat(ids.filter((k) => FG_ION[k].q < 0));
    return ord.map((k) => { const i = FG_ION[k], n = counts[k]; return (i.poly && n > 1) ? '(' + i.s + ')' + n : i.s + (n > 1 ? n : ''); }).join('');
  }

  GAMES.forge = function (ctx, mode) {
    const [cat, an, cname, cnameHi] = ctx.pick(FG_POOL[mode]);
    const need = fgCounts(cat, an);
    const allC = Object.keys(FG_ION).filter((k) => FG_ION[k].q > 0 && k !== cat), allA = Object.keys(FG_ION).filter((k) => FG_ION[k].q < 0 && k !== an);
    const extra = { easy: 2, moderate: 3, hard: 3 }[mode];
    const cats = shuffle([cat].concat(shuffle(allC).slice(0, extra))), ans = shuffle([an].concat(shuffle(allA).slice(0, extra)));
    const counts = {}; let qty = 1, moves = 0, done = false, needle = 0, forgedT = 0;
    const net = () => Object.keys(counts).reduce((a, k) => a + counts[k] * FG_ION[k].q, 0);
    const sgn = (n) => (n > 0 ? '+' : '') + n;

    const tile = (k, kind) => '<button class="fg-tile ' + kind + '" data-add="' + k + '"><span class="fg-sym">' + fgLabel(k) + '</span><small>' + (FG_ION[k].q > 0 ? '+' : '−') + Math.abs(FG_ION[k].q) + '</small></button>';
    ctx.stage.innerHTML =
      '<div class="cge-card">' + bi(
        'Forge <b>' + esc(cname) + '</b>. Pick the right <b>cation</b> and <b>anion</b>, add them in the right quantities until the net charge is <b>0</b>.',
        '<b>' + cnameHi + '</b> बनाएँ। सही <b>धनायन (cation)</b> और <b>ऋणायन (anion)</b> चुनें और उन्हें सही मात्रा में तब तक जोड़ें जब तक नेट आवेश <b>0</b> न हो जाए।') + '</div>' +
      '<div class="fg-qty"><span>' + bi('Add', 'जोड़ें') + '</span>' + [1, 2, 3].map((n) => '<button class="cge-chip' + (n === 1 ? ' on' : '') + '" data-q="' + n + '">' + n + '×</button>').join('') + '</div>' +
      '<div class="fg-lab">' + bi('Cations (+)', 'धनायन (+)') + '</div><div class="fg-tiles">' + cats.map((k) => tile(k, 'cat')).join('') + '</div>' +
      '<div class="fg-lab">' + bi('Anions (−)', 'ऋणायन (−)') + '</div><div class="fg-tiles">' + ans.map((k) => tile(k, 'an')).join('') + '</div>' +
      '<div class="fg-cv"></div>' +
      '<div class="fg-pot" data-r="pot"></div><div class="fg-formula" data-r="fx">—</div><div class="fg-net" data-r="net"></div>' +
      '<div class="fg-acts"><button class="cge-btn" data-act="clear">' + bi('↺ Clear crucible', '↺ क्रूसिबल खाली करें') + '</button><button class="cge-btn pri" data-act="forge">' + bi('🔨 Forge Compound', '🔨 यौगिक बनाएँ') + '</button></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, 176);
    ctx.stage.querySelector('.fg-cv').appendChild(cvh.cv);
    ctx.hintFn = () => {
      const qc = sgn(FG_ION[cat].q), qa = FG_ION[an].q;
      return ['In a neutral ionic compound <b>total positive charge = total negative charge</b>. Here ' + fgLabel(cat) + ' carries ' + qc + ' and ' + fgLabel(an) + ' carries ' + qa + '. Use the criss-cross idea: take the LCM of the two charges, then divide by each charge. Polyatomic ions go inside brackets when more than one is needed, e.g. Ca(OH)<sub>2</sub>.',
        'किसी उदासीन आयनिक यौगिक में <b>कुल धनावेश = कुल ऋणावेश</b> होता है। यहाँ ' + fgLabel(cat) + ' का आवेश ' + qc + ' और ' + fgLabel(an) + ' का आवेश ' + qa + ' है। क्रॉस-ओवर (criss-cross) विधि: दोनों आवेशों का ल.स.प. (LCM) लें, फिर प्रत्येक आवेश से भाग दें। एक से अधिक बहुपरमाणुक आयन (polyatomic ion) होने पर उन्हें कोष्ठक में लिखें, जैसे Ca(OH)<sub>2</sub>।'];
    };

    function refresh() {
      const ids = Object.keys(counts).filter((k) => counts[k] > 0), n = net();
      $('pot').innerHTML = ids.length ? ids.map((k) => '<span class="fg-chip ' + (FG_ION[k].q > 0 ? 'cat' : 'an') + '"><span>' + fgLabel(k) + ' × ' + counts[k] + '</span><button data-rm="' + k + '" aria-label="remove">−</button></span>').join('') : '<span class="cge-dim">' + bi('Tap ions to drop them into the crucible…', 'आयनों पर टैप कर उन्हें क्रूसिबल में डालें…') + '</span>';
      $('fx').innerHTML = ids.length ? chem(fgFormula(counts)) : '—';
      $('net').innerHTML = bi('Net charge ' + sgn(n), 'नेट आवेश ' + sgn(n));
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
        Object.keys(counts).forEach((k) => delete counts[k]); ctx.move(); ctx.say(null); refresh();
      } else forge();
    };
    function forge() {
      const ids = Object.keys(counts).filter((k) => counts[k] > 0), n = net();
      if (!ids.length) { ctx.say(['Add some ions to the crucible first.', 'पहले क्रूसिबल में कुछ आयन डालें।'], 'info'); return; }
      if (n !== 0) { ctx.bad(['Net charge is <b>' + sgn(n) + '</b>. A neutral compound needs total charge <b>0</b>.', 'नेट आवेश <b>' + sgn(n) + '</b> है। उदासीन यौगिक के लिए कुल आवेश <b>0</b> होना चाहिए।']); return; }
      const wrongSet = ids.length !== 2 || ids.indexOf(cat) < 0 || ids.indexOf(an) < 0;
      if (wrongSet) { const f = chem(fgFormula(counts)); ctx.bad(['Neutral, but that is <b>' + f + '</b> — not ' + esc(cname) + '. Choose the right pair of ions.', 'आवेश संतुलित है, पर यह <b>' + f + '</b> है — ' + cnameHi + ' नहीं। आयनों की सही जोड़ी चुनें।']); return; }
      if (counts[cat] !== need[0] || counts[an] !== need[1]) { ctx.bad(['Charges balance, but reduce to the <b>simplest whole-number ratio</b> — that is the formula unit.', 'आवेश संतुलित है, पर इसे <b>सरलतम पूर्ण-संख्या अनुपात</b> में घटाएँ — वही सूत्र इकाई (formula unit) है।']); return; }
      done = true; forgedT = performance.now(); refresh();
      const f = fgFormula(counts), sc = FG_ION[cat].q, sa = FG_ION[an].q;
      ctx.say(null);
      ctx.win({
        effStars: moves <= need[0] + need[1] + 3 ? 3 : moves <= need[0] + need[1] + 6 ? 2 : 1,
        concept: mode === 'easy' ? ['Valency & criss-cross rule for binary ionic compounds', 'संयोजकता व द्विअंगी आयनिक यौगिकों के लिए क्रॉस-ओवर नियम']
          : mode === 'moderate' ? ['Polyatomic ions & brackets in formulae', 'बहुपरमाणुक आयन व सूत्रों में कोष्ठक']
            : ['Charge neutrality with high-charge ions (Al³⁺, Fe³⁺, N³⁻, PO₄³⁻)', 'उच्च-आवेश आयनों (Al³⁺, Fe³⁺, N³⁻, PO₄³⁻) के साथ आवेश उदासीनता'],
        detail: '<b>' + chem(f) + '</b>: ' + need[0] + ' × (' + sgn(sc) + ') + ' + need[1] + ' × (' + sa + ') = 0'
      });
    }
    refresh();

    const GC = 262, GY = 104, GR = 62;
    const ang = (v) => (150 + (v + 6) / 12 * 240) * Math.PI / 180;
    ctx.loop((t) => {
      const g = cvh.g, n = net(), ids = Object.keys(counts).filter((k) => counts[k] > 0);
      blueprint(g, 340, 176);
      /* ---------- cast-iron crucible with brushed-steel rim ---------- */
      const vx = 100, rim = 48;
      g.fillStyle = '#0a0d12'; rr(g, 42, 140, 16, 16, 3); g.fill(); rr(g, 142, 140, 16, 16, 3); g.fill();
      const bg = g.createLinearGradient(22, 0, 178, 0);
      bg.addColorStop(0, '#080b0f'); bg.addColorStop(0.28, '#414a55'); bg.addColorStop(0.5, '#222931'); bg.addColorStop(1, '#080b0f');
      g.fillStyle = bg; g.beginPath(); g.moveTo(24, rim + 2); g.bezierCurveTo(20, 120, 58, 152, vx, 152); g.bezierCurveTo(142, 152, 180, 120, 176, rim + 2); g.closePath(); g.fill();
      g.lineWidth = 2; g.strokeStyle = '#05070a'; g.stroke();
      g.lineWidth = 5; g.strokeStyle = '#59616b';
      g.beginPath(); g.arc(21, 80, 10, Math.PI * 0.5, Math.PI * 1.5); g.stroke();
      g.beginPath(); g.arc(179, 80, 10, -Math.PI * 0.5, Math.PI * 0.5); g.stroke();
      g.fillStyle = '#05070a'; g.beginPath(); g.ellipse(vx, rim, 76, 14, 0, 0, 6.2832); g.fill();
      const neutral = ids.length > 0 && n === 0;
      g.fillStyle = neutral ? '#17663a' : ids.length ? '#6b4310' : '#151a21';
      g.beginPath(); g.ellipse(vx, rim + 2, 70, 11, 0, 0, 6.2832); g.fill();
      const balls = [];
      Object.keys(counts).forEach((k) => { for (let i = 0; i < counts[k]; i++) balls.push(FG_ION[k].q > 0 ? PAL.terra : PAL.blue2); });
      balls.slice(0, 16).forEach((col, i) => {
        const a = i * 2.4 + t / 2600, rad = (i % 3) * 17 + 9;
        sphere(g, vx + Math.cos(a) * rad * 1.05, rim + 1 + Math.sin(a) * rad * 0.2 + Math.sin(t / 430 + i) * 1.4 - 3, 6.2, col, true);
      });
      g.lineWidth = 6; g.strokeStyle = steel(g, 24, 0, 176, 0); g.beginPath(); g.ellipse(vx, rim, 77, 15, 0, 0, 6.2832); g.stroke();
      g.lineWidth = 1; g.strokeStyle = '#05070a'; g.beginPath(); g.ellipse(vx, rim, 73, 11.5, 0, 0, 6.2832); g.stroke();
      if (done) { const a = Math.max(0, 1 - (t - forgedT) / 900); if (a > 0) { g.strokeStyle = 'rgba(46,160,67,' + a.toFixed(2) + ')'; g.lineWidth = 3; g.beginPath(); g.ellipse(vx, rim, 84 + (1 - a) * 16, 20 + (1 - a) * 6, 0, 0, 6.2832); g.stroke(); } }
      /* ---------- precision analogue net-charge gauge (−6 … +6) ---------- */
      g.fillStyle = '#05070a'; g.beginPath(); g.arc(GC, GY, GR + 7, 0, 6.2832); g.fill();
      g.lineWidth = 6; g.strokeStyle = steel(g, GC - GR, GY - GR, GC + GR, GY + GR); g.beginPath(); g.arc(GC, GY, GR + 3, 0, 6.2832); g.stroke();
      g.fillStyle = '#0f141b'; g.beginPath(); g.arc(GC, GY, GR, 0, 6.2832); g.fill();
      for (let v = -6; v < 6; v++) {
        const mid = Math.abs(v + 0.5);
        g.lineWidth = 5; g.strokeStyle = mid >= 4 ? PAL.red : mid >= 2 ? PAL.amber : '#2a313b';
        g.beginPath(); g.arc(GC, GY, 55, ang(v) + 0.01, ang(v + 1) - 0.01); g.stroke();
      }
      g.lineWidth = 5; g.strokeStyle = PAL.em2; g.beginPath(); g.arc(GC, GY, 55, ang(-0.35), ang(0.35)); g.stroke();
      for (let v = -6; v <= 6; v++) {
        const a = ang(v), major = v % 2 === 0, r0 = major ? 41 : 46;
        g.strokeStyle = PAL.ink; g.lineWidth = major ? 1.6 : 1;
        g.beginPath(); g.moveTo(GC + Math.cos(a) * r0, GY + Math.sin(a) * r0); g.lineTo(GC + Math.cos(a) * 50, GY + Math.sin(a) * 50); g.stroke();
        if (major) { g.fillStyle = v === 0 ? PAL.em2 : PAL.mut; g.font = nf(8, 800); g.textAlign = 'center'; g.fillText((v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v), GC + Math.cos(a) * 31, GY + Math.sin(a) * 31 + 3); }
      }
      needle += (clamp(n, -6, 6) - needle) * 0.14;
      const na = ang(needle);
      g.strokeStyle = 'rgba(0,0,0,.5)'; g.lineWidth = 4; g.beginPath(); g.moveTo(GC + 1, GY + 2); g.lineTo(GC + Math.cos(na) * 50 + 1, GY + Math.sin(na) * 50 + 2); g.stroke();
      g.strokeStyle = PAL.red2; g.lineWidth = 2.6; g.lineCap = 'round'; g.beginPath(); g.moveTo(GC - Math.cos(na) * 10, GY - Math.sin(na) * 10); g.lineTo(GC + Math.cos(na) * 50, GY + Math.sin(na) * 50); g.stroke(); g.lineCap = 'butt';
      sphere(g, GC, GY, 5, '#C9D1D9', true);
      g.fillStyle = PAL.bg; rr(g, GC - 38, GY + 27, 76, 17, 4); g.fill(); g.strokeStyle = '#30363D'; g.lineWidth = 1; g.stroke();
      g.fillStyle = n === 0 ? PAL.em2 : Math.abs(n) > 6 ? PAL.red2 : PAL.amber2; g.font = cf(10, 800); g.textAlign = 'center'; g.fillText(L('NET', 'नेट') + '  ' + sgn(n), GC, GY + 39);
    });
  };

  /* ==========================================================================
     3. REACTION BALANCER  (Ch 1 · Equations,  Ch 7 · Redox)
     ========================================================================== */
  const BL_EQ = {
    easy: [
      { r: ['N2', 'H2'], p: ['NH3'], c: [1, 3, 2], tip: 'Balance N first (2 N atoms → 2 NH₃), then count H: 6 H atoms need 3 H₂.', th: 'पहले N संतुलित करें (2 N परमाणु → 2 NH₃), फिर H गिनें: 6 H परमाणुओं के लिए 3 H₂ चाहिए।' },
      { r: ['H2', 'O2'], p: ['H2O'], c: [2, 1, 2], tip: 'O₂ has 2 O atoms but H₂O has only 1, so make 2 H₂O; then 4 H atoms need 2 H₂.', th: 'O₂ में 2 O परमाणु हैं पर H₂O में केवल 1, इसलिए 2 H₂O बनाएँ; फिर 4 H परमाणुओं के लिए 2 H₂ चाहिए।' },
      { r: ['Mg', 'O2'], p: ['MgO'], c: [2, 1, 2], tip: 'O₂ supplies 2 O atoms, so 2 MgO are needed; then 2 Mg.', th: 'O₂ से 2 O परमाणु मिलते हैं, इसलिए 2 MgO चाहिए; फिर 2 Mg।' },
      { r: ['CH4', 'O2'], p: ['CO2', 'H2O'], c: [1, 2, 1, 2], tip: 'Balance C, then H (2 H₂O), and leave O for last: 2 + 2 = 4 O atoms → 2 O₂.', th: 'पहले C संतुलित करें, फिर H (2 H₂O); O सबसे अंत में: 2 + 2 = 4 O परमाणु → 2 O₂।' },
      { r: ['Fe', 'O2'], p: ['Fe2O3'], c: [4, 3, 2], tip: 'O: 2 per O₂ vs 3 per Fe₂O₃ → LCM 6 → 3 O₂ and 2 Fe₂O₃; then Fe: 4.', th: 'O: O₂ में 2 और Fe₂O₃ में 3 → ल.स.प. 6 → 3 O₂ और 2 Fe₂O₃; फिर Fe: 4।' }
    ],
    moderate: [
      { r: ['Al', 'HCl'], p: ['AlCl3', 'H2'], c: [2, 6, 2, 3], tip: 'Cl: 3 per AlCl₃ → 2 AlCl₃ needs 6 HCl; then H gives 3 H₂.', th: 'Cl: प्रति AlCl₃ में 3 → 2 AlCl₃ के लिए 6 HCl; फिर H से 3 H₂ मिलता है।' },
      { r: ['C3H8', 'O2'], p: ['CO2', 'H2O'], c: [1, 5, 3, 4], tip: 'C → 3 CO₂, H → 4 H₂O, then oxygen: 6 + 4 = 10 O atoms → 5 O₂.', th: 'C → 3 CO₂, H → 4 H₂O, फिर ऑक्सीजन: 6 + 4 = 10 O परमाणु → 5 O₂।' },
      { r: ['Fe2O3', 'CO'], p: ['Fe', 'CO2'], c: [1, 3, 2, 3], tip: 'Fe → 2 Fe; the 3 O atoms of Fe₂O₃ are taken by 3 CO, giving 3 CO₂.', th: 'Fe → 2 Fe; Fe₂O₃ के 3 O परमाणुओं को 3 CO ले लेते हैं, जिससे 3 CO₂ बनता है।' },
      { r: ['NH3', 'O2'], p: ['NO', 'H2O'], c: [4, 5, 4, 6], tip: 'H: LCM of 3 and 2 is 6 → 2 NH₃ : 3 H₂O; oxygen then needs 2.5 O₂, so double everything: 4 : 5 : 4 : 6.', th: 'H: 3 और 2 का ल.स.प. 6 → 2 NH₃ : 3 H₂O; तब ऑक्सीजन को 2.5 O₂ चाहिए, इसलिए सब कुछ दोगुना करें: 4 : 5 : 4 : 6।' },
      { r: ['C2H6', 'O2'], p: ['CO2', 'H2O'], c: [2, 7, 4, 6], tip: 'Start with 2 C₂H₆ to avoid fractions: C → 4 CO₂, H → 6 H₂O, O → 8 + 6 = 14 → 7 O₂.', th: 'भिन्न से बचने के लिए 2 C₂H₆ से शुरू करें: C → 4 CO₂, H → 6 H₂O, O → 8 + 6 = 14 → 7 O₂।' },
      { r: ['Fe', 'H2O'], p: ['Fe3O4', 'H2'], c: [3, 4, 1, 4], tip: 'Fe → 3 Fe for one Fe₃O₄; O → 4 H₂O; then H gives 4 H₂.', th: 'Fe → एक Fe₃O₄ के लिए 3 Fe; O → 4 H₂O; फिर H से 4 H₂ मिलता है।' },
      { r: ['C6H12O6', 'O2'], p: ['CO2', 'H2O'], c: [1, 6, 6, 6], tip: 'C → 6 CO₂, H → 6 H₂O; right side has 12 + 6 = 18 O, glucose supplies 6, so O₂ supplies 12 → 6 O₂.', th: 'C → 6 CO₂, H → 6 H₂O; दाएँ पक्ष में 12 + 6 = 18 O हैं, ग्लूकोज़ से 6 मिलते हैं, इसलिए O₂ से 12 → 6 O₂।' }
    ],
    hard: [
      { r: ['KMnO4', 'HCl'], p: ['KCl', 'MnCl2', 'Cl2', 'H2O'], c: [2, 16, 2, 2, 5, 8], tip: 'Mn: +7 → +2 gains 5 e⁻; 2 Cl⁻ → Cl₂ loses 2 e⁻. LCM 10 → 2 KMnO₄ : 5 Cl₂. Then balance K, Mn, Cl, H, O.', th: 'Mn: +7 → +2 (5 e⁻ ग्रहण); 2 Cl⁻ → Cl₂ (2 e⁻ त्याग)। ल.स.प. 10 → 2 KMnO₄ : 5 Cl₂। फिर K, Mn, Cl, H, O संतुलित करें।' },
      { r: ['Cu', 'HNO3'], p: ['Cu(NO3)2', 'NO', 'H2O'], c: [3, 8, 3, 2, 4], tip: 'Cu: 0 → +2 loses 2 e⁻; N: +5 → +2 gains 3 e⁻. LCM 6 → 3 Cu : 2 NO. Then balance N, H, O.', th: 'Cu: 0 → +2 (2 e⁻ त्याग); N: +5 → +2 (3 e⁻ ग्रहण)। ल.स.प. 6 → 3 Cu : 2 NO। फिर N, H, O संतुलित करें।' },
      { r: ['P4', 'NaOH', 'H2O'], p: ['PH3', 'NaH2PO2'], c: [1, 3, 3, 1, 3], tip: 'Disproportionation: P (0) → −3 in PH₃ gains 3 e⁻, and P (0) → +1 in NaH₂PO₂ loses 1 e⁻ each, so 1 PH₃ pairs with 3 NaH₂PO₂.', th: 'असमानुपातन (disproportionation): P (0) → PH₃ में −3 (3 e⁻ ग्रहण) और NaH₂PO₂ में +1 (प्रत्येक 1 e⁻ त्याग), इसलिए 1 PH₃ के साथ 3 NaH₂PO₂ बनते हैं।' },
      { r: ['MnO2', 'HCl'], p: ['MnCl2', 'Cl2', 'H2O'], c: [1, 4, 1, 1, 2], tip: 'Mn: +4 → +2 gains 2 e⁻; 2 Cl⁻ → Cl₂ loses 2 e⁻, so the ratio is 1 : 1. Then balance Cl, H, O.', th: 'Mn: +4 → +2 (2 e⁻ ग्रहण); 2 Cl⁻ → Cl₂ (2 e⁻ त्याग), अतः अनुपात 1 : 1। फिर Cl, H, O संतुलित करें।' },
      { r: ['K2Cr2O7', 'HCl'], p: ['KCl', 'CrCl3', 'Cl2', 'H2O'], c: [1, 14, 2, 2, 3, 7], tip: 'Two Cr: +6 → +3 gain 6 e⁻ in total; 3 Cl₂ lose 6 e⁻. Then balance K, Cr, Cl, H, O.', th: 'दो Cr: +6 → +3 कुल 6 e⁻ ग्रहण करते हैं; 3 Cl₂ कुल 6 e⁻ त्यागते हैं। फिर K, Cr, Cl, H, O संतुलित करें।' }
    ]
  };

  function blScaleSvg() {
    const P = (a, r) => (170 + Math.sin(a) * r).toFixed(1) + ' ' + (50 + Math.cos(a) * r).toFixed(1);
    const d = (x) => x * Math.PI / 180;
    let ticks = '';
    for (let k = -16; k <= 16; k += 2) {
      const a = d(k), major = k % 8 === 0, r0 = major ? 99 : 103;
      ticks += '<line x1="' + (170 + Math.sin(a) * r0).toFixed(1) + '" y1="' + (50 + Math.cos(a) * r0).toFixed(1) + '" x2="' + (170 + Math.sin(a) * 111).toFixed(1) + '" y2="' + (50 + Math.cos(a) * 111).toFixed(1) + '" stroke="' + (k === 0 ? '#2EA043' : '#C9D1D9') + '" stroke-width="' + (major ? 1.6 : 0.9) + '"/>';
      if (major) ticks += '<text x="' + (170 + Math.sin(a) * 122).toFixed(1) + '" y="' + (50 + Math.cos(a) * 122 + 3).toFixed(1) + '" text-anchor="middle" font-size="7.5" font-weight="700" fill="#8B949E" font-family="ui-monospace,monospace">' + Math.abs(k) + '°</text>';
    }
    const pan = (k) => '<g data-r="' + k + '"><line x1="0" y1="0" x2="-33" y2="62" stroke="#C9D1D9" stroke-width="1.2" stroke-dasharray="2 1.6"/><line x1="0" y1="0" x2="33" y2="62" stroke="#C9D1D9" stroke-width="1.2" stroke-dasharray="2 1.6"/>' +
      '<circle cx="0" cy="0" r="3.2" fill="url(#bsBrass)" stroke="#5c3f0b"/><path d="M-37 62 Q0 88 37 62 Z" fill="url(#bsPan)" stroke="#262C36"/>' +
      '<ellipse cx="0" cy="62" rx="37" ry="4.2" fill="#C9D1D9" stroke="#484f58"/><g data-r="bk-' + k + '"></g>' +
      '<rect x="-17" y="90" width="34" height="14" rx="3" fill="#0D1117" stroke="#30363D"/><text data-r="' + k + 't" x="0" y="101" text-anchor="middle" font-size="10.5" font-weight="800" fill="#E6EDF3" font-family="ui-monospace,monospace">0</text></g>';
    return '<svg class="bl-scale" viewBox="0 0 340 214" xmlns="http://www.w3.org/2000/svg"><defs>' +
      '<linearGradient id="bsBrass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0CF73"/><stop offset=".5" stop-color="#B8862B"/><stop offset="1" stop-color="#6E4F14"/></linearGradient>' +
      '<linearGradient id="bsBrassV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5a3f0f"/><stop offset=".35" stop-color="#F0CF73"/><stop offset=".7" stop-color="#B8862B"/><stop offset="1" stop-color="#4d360c"/></linearGradient>' +
      '<linearGradient id="bsIron" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#434b56"/><stop offset="1" stop-color="#12161c"/></linearGradient>' +
      '<linearGradient id="bsPan" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d0d7de"/><stop offset=".5" stop-color="#8b949e"/><stop offset="1" stop-color="#3b434d"/></linearGradient></defs>' +
      '<rect width="340" height="214" fill="#090C10"/>' +
      '<path d="M92 208 L106 190 L234 190 L248 208 Z" fill="url(#bsIron)" stroke="#262C36"/><rect x="84" y="206" width="172" height="6" rx="2" fill="#12161c" stroke="#262C36"/>' +
      '<rect x="162" y="48" width="16" height="144" rx="3" fill="url(#bsBrassV)" stroke="#4d360c"/><rect x="154" y="176" width="32" height="14" rx="3" fill="url(#bsIron)" stroke="#262C36"/>' +
      '<path d="M' + P(d(-19), 115) + ' A115 115 0 0 0 ' + P(d(19), 115) + ' L' + P(d(19), 96) + ' A96 96 0 0 1 ' + P(d(-19), 96) + ' Z" fill="#161B22" stroke="#30363D"/>' + ticks +
      '<g data-r="beamg"><path d="M52 50 L76 43 L264 43 L288 50 L264 57 L76 57 Z" fill="url(#bsBrass)" stroke="#5c3f0b"/>' +
      '<circle cx="104" cy="50" r="3" fill="#0D1117"/><circle cx="132" cy="50" r="3" fill="#0D1117"/><circle cx="208" cy="50" r="3" fill="#0D1117"/><circle cx="236" cy="50" r="3" fill="#0D1117"/>' +
      '<path d="M168 58 L172 58 L170.7 158 L169.3 158 Z" fill="#F85149" stroke="#8d1d1a" stroke-width=".6"/><circle cx="170" cy="50" r="8" fill="url(#bsBrass)" stroke="#5c3f0b"/><circle cx="170" cy="50" r="3" fill="#0D1117"/></g>' +
      pan('pl') + pan('pr') + '</svg>';
  }

  GAMES.balancer = function (ctx, mode) {
    const eq = ctx.pick(BL_EQ[mode]);
    const sp = eq.r.concat(eq.p), nR = eq.r.length, comp = sp.map(parseFormula);
    const els = [];
    comp.forEach((c) => Object.keys(c).forEach((e) => { if (els.indexOf(e) < 0) els.push(e); }));
    const co = sp.map(() => 1), opt = eq.c.reduce((a, c) => a + c - 1, 0);
    let done = false, moves = 0, ang = 0, tgt = 0;
    const tally = (from, to) => { const r = {}; els.forEach((e) => { r[e] = 0; }); for (let i = from; i < to; i++) els.forEach((e) => { r[e] += (comp[i][e] || 0) * co[i]; }); return r; };

    ctx.stage.innerHTML =
      '<div class="cge-card">' + bi('Balance the equation so every element has the <b>same count on both pans</b>, in the <b>simplest whole-number ratio</b>.', 'समीकरण को इस प्रकार संतुलित करें कि प्रत्येक तत्व की संख्या <b>दोनों पलड़ों पर समान</b> हो और गुणांक <b>सरलतम पूर्ण-संख्या अनुपात</b> में हों।') + '</div>' +
      blScaleSvg() +
      '<div class="bl-sides"><span>' + bi('◀ Reactants', '◀ अभिकारक (Reactants)') + '</span><span>' + bi('Products ▶', 'उत्पाद (Products) ▶') + '</span></div>' +
      '<div class="bl-rows" data-r="rows"></div><div class="bl-eq" data-r="eq"></div>' +
      '<div class="fg-acts"><button class="cge-btn" data-act="reset">' + bi('↺ Reset coefficients', '↺ गुणांक रीसेट') + '</button><button class="cge-btn pri" data-act="submit" data-r="sub">' + bi('✅ Submit Equation', '✅ समीकरण जमा करें') + '</button></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    ctx.moveFmt = (m) => bi('Moves ' + m + ' · Optimal ' + opt, 'चालें ' + m + ' · इष्टतम ' + opt);
    ctx.setMoves(ctx.moveFmt(0));
    ctx.hintFn = () => [eq.tip + ' Atoms are conserved (law of conservation of mass): never change a subscript — only the coefficients.', eq.th + ' द्रव्यमान संरक्षण के नियम के अनुसार परमाणु नष्ट नहीं होते — पादांक (subscript) कभी न बदलें, केवल गुणांक बदलें।'];

    const blocks = (cntMap, u) => {
      let list = [];
      els.forEach((e) => { const n = cntMap[e] > 0 ? Math.max(1, Math.round(cntMap[e] / u)) : 0; for (let i = 0; i < n; i++) list.push(e); });
      return list.slice(0, 15).map((e, i) => {
        const col = cpk(e), x = -31 + (i % 5) * 12.5, y = 58 - 10 * (Math.floor(i / 5) + 1);
        return '<rect x="' + x + '" y="' + y + '" width="11" height="9" rx="1.6" fill="' + col + '" stroke="' + shade(col, -0.6) + '" stroke-width=".8"/><rect x="' + x + '" y="' + y + '" width="11" height="2.4" rx="1" fill="#fff" opacity=".34"/>';
      }).join('');
    };
    function refresh() {
      const Lc = tally(0, nR), Rc = tally(nR, sp.length);
      let sl = 0, sr = 0, okc = 0, mx = 1;
      els.forEach((e) => { sl += Lc[e]; sr += Rc[e]; if (Lc[e] === Rc[e]) okc++; mx = Math.max(mx, Lc[e], Rc[e]); });
      $('rows').innerHTML = els.map((e) => '<div class="bl-row ' + (Lc[e] === Rc[e] ? 'ok' : 'bad') + '"><b style="color:' + cpk(e) + '">' + e + '</b><span class="bl-n">' + Lc[e] + '</span><div class="bl-bars"><div class="hl"><i style="width:' + (Lc[e] / mx * 100) + '%"></i></div><div class="hr"><i style="width:' + (Rc[e] / mx * 100) + '%"></i></div></div><span class="bl-n">' + Rc[e] + '</span></div>').join('');
      let h = '';
      sp.forEach((f, i) => {
        if (i === nR) h += '<span class="bl-arrow">→</span>'; else if (i) h += '<span class="bl-op">+</span>';
        h += '<div class="bl-sp"><div class="bl-f">' + chem(f) + '</div><div class="bl-st"><button data-i="' + i + '" data-d="-1" aria-label="decrease">−</button><b>' + co[i] + '</b><button data-i="' + i + '" data-d="1" aria-label="increase">+</button></div></div>';
      });
      $('eq').innerHTML = h;
      tgt = clamp((sr - sl) / Math.max(1, sl + sr) * 1.1, -0.28, 0.28);
      const u = Math.max(1, Math.ceil(Math.max(sl, sr) / 15));
      $('bk-pl').innerHTML = blocks(Lc, u); $('bk-pr').innerHTML = blocks(Rc, u);
      $('plt').textContent = sl; $('prt').textContent = sr;
      $('sub').classList.toggle('glow', okc === els.length);
      ctx.setStatus(['⚖️ ' + okc + '/' + els.length + ' balanced', '⚖️ ' + okc + '/' + els.length + ' संतुलित']);
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
      if (t.getAttribute('data-act') === 'reset') { sp.forEach((f, i) => { co[i] = 1; }); ctx.move(); ctx.say(null); refresh(); return; }
      const Lc = tally(0, nR), Rc = tally(nR, sp.length), bad = els.filter((x) => Lc[x] !== Rc[x]);
      if (bad.length) {
        const x = bad[0], more = bad.length - 1;
        ctx.bad(['Not balanced: <b>' + x + '</b> has ' + Lc[x] + ' atom(s) on the left but ' + Rc[x] + ' on the right' + (more ? ' (and ' + more + ' more element(s) differ).' : '.'),
          'संतुलित नहीं: <b>' + x + '</b> के बाएँ पक्ष में ' + Lc[x] + ' परमाणु हैं पर दाएँ पक्ष में ' + Rc[x] + (more ? ' (और ' + more + ' तत्वों में अंतर है)।' : '।')]);
        return;
      }
      let g = 0; co.forEach((c) => { g = gcd(g, c); });
      if (g > 1) { ctx.bad(['Atoms balance, but all coefficients share a factor of <b>' + g + '</b>. Reduce to the simplest whole-number ratio.', 'परमाणु संतुलित हैं, पर सभी गुणांकों में उभयनिष्ठ गुणनखंड <b>' + g + '</b> है। इन्हें सरलतम पूर्ण-संख्या अनुपात में घटाएँ।']); return; }
      done = true; refresh();
      ctx.win({
        effStars: moves <= opt ? 3 : moves <= Math.ceil(opt * 1.5) + 1 ? 2 : 1,
        concept: mode === 'hard' ? ['Redox balancing: n-factor / electron gain = electron loss', 'रेडॉक्स संतुलन: n-गुणांक / इलेक्ट्रॉन लब्धि = इलेक्ट्रॉन हानि'] : ['Law of conservation of mass — balancing chemical equations', 'द्रव्यमान संरक्षण का नियम — रासायनिक समीकरण संतुलन'],
        detail: ['<b>' + chem(eqText()) + '</b> (' + moves + ' moves, optimal ' + opt + ')', '<b>' + chem(eqText()) + '</b> (' + moves + ' चालें, इष्टतम ' + opt + ')']
      });
    };
    refresh(); ang = tgt;
    const beam = $('beamg'), pl = $('pl'), pr = $('pr');
    ctx.loop(() => {
      ang += (tgt - ang) * 0.12;
      const c = Math.cos(ang), s = Math.sin(ang);
      beam.setAttribute('transform', 'rotate(' + (ang * 180 / Math.PI).toFixed(2) + ' 170 50)');
      pl.setAttribute('transform', 'translate(' + (170 - 118 * c).toFixed(1) + ' ' + (50 - 118 * s).toFixed(1) + ')');
      pr.setAttribute('transform', 'translate(' + (170 + 118 * c).toFixed(1) + ' ' + (50 + 118 * s).toFixed(1) + ')');
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
  const SS_HI = { 'Linear': 'रैखिक (Linear)', 'Trigonal planar': 'त्रिकोणीय समतलीय (Trigonal planar)', 'Bent': 'कोणीय (Bent)', 'Tetrahedral': 'चतुष्फलकीय (Tetrahedral)', 'Trigonal pyramidal': 'त्रिकोणीय पिरामिडी (Trigonal pyramidal)', 'Bent (V-shaped)': 'V-आकार / कोणीय (Bent)', 'Trigonal bipyramidal': 'त्रिकोणीय द्विपिरामिडी (Trigonal bipyramidal)', 'See-saw': 'सी-सॉ (See-saw)', 'T-shaped': 'T-आकार (T-shaped)', 'Octahedral': 'अष्टफलकीय (Octahedral)', 'Square pyramidal': 'वर्ग पिरामिडी (Square pyramidal)', 'Square planar': 'वर्ग समतलीय (Square planar)' };
  const SS_DIRS = {
    1: [[1, 0, 0]],
    2: [[-1, 0, 0], [1, 0, 0]],
    3: [0, 120, 240].map((a) => [Math.cos(a * Math.PI / 180), 0, Math.sin(a * Math.PI / 180)]),
    4: [[0, 1, 0], [0.9428, -0.3333, 0], [-0.4714, -0.3333, 0.8165], [-0.4714, -0.3333, -0.8165]],
    5: [[0, 1, 0], [0, -1, 0]].concat([0, 120, 240].map((a) => [Math.cos(a * Math.PI / 180), 0, Math.sin(a * Math.PI / 180)])),
    6: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]
  };
  const SS_LPORD = { 1: [0], 2: [0, 1], 3: [0, 1, 2], 4: [0, 1, 2, 3], 5: [2, 3, 4, 0, 1], 6: [1, 0, 2, 3, 4, 5] };
  function ssDomains(bp, lp) {
    const sn = clamp(bp + lp, 0, 6);
    if (!sn) return { bonds: [], lones: [] };
    const dirs = SS_DIRS[sn], order = SS_LPORD[sn], Ln = Math.min(lp, sn), lset = order.slice(0, Ln);
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
  function ssPear(g, cx, cy, rot, len, w) {
    g.save(); g.translate(cx, cy); g.rotate(rot);
    g.beginPath(); g.moveTo(4, 0); g.bezierCurveTo(len * 0.22, -w * 0.9, len * 0.95, -w * 1.3, len, 0); g.bezierCurveTo(len * 0.95, w * 1.3, len * 0.22, w * 0.9, 4, 0); g.closePath();
    const gr = g.createLinearGradient(0, 0, len, 0); gr.addColorStop(0, 'rgba(210,153,34,.12)'); gr.addColorStop(1, 'rgba(227,179,65,.4)');
    g.fillStyle = gr; g.fill(); g.lineWidth = 1.6; g.strokeStyle = 'rgba(227,179,65,.95)'; g.stroke();
    g.restore();
    const ux = Math.cos(rot), uy = Math.sin(rot), px = -uy * w * 0.34, py = ux * w * 0.34, mx = cx + ux * len * 0.62, my = cy + uy * len * 0.62;
    sphere(g, mx + px, my + py, 3, '#F4E7B0', true); sphere(g, mx - px, my - py, 3, '#F4E7B0', true);
  }

  GAMES.shapeshift = function (ctx, mode) {
    const T = ctx.pick(SS_MOLS[mode]);
    const tyaw = (Math.random() < 0.5 ? -1 : 1) * (35 + rand(110)) * Math.PI / 180;
    let bp = 0, lp = 0, yaw = 0, moves = 0, done = false, score = 0;
    const CX = 170, CY = 128, R = 78;
    const angHi = T.ang.replace(' and ', ' और ');

    ctx.stage.innerHTML =
      '<div class="cge-card">' + bi(
        'Build the shape of <b>' + chem(T.f) + '</b>. Add <b>bond pairs</b> (atoms) and <b>lone pairs</b> (..) around <b>' + T.c + '</b>, then <b>rotate</b> your model onto the dashed silhouette and lock it.',
        '<b>' + chem(T.f) + '</b> की आकृति बनाएँ। केंद्रीय परमाणु <b>' + T.c + '</b> के चारों ओर <b>आबंध युग्म (bond pairs)</b> (परमाणु) और <b>एकाकी युग्म (lone pairs)</b> (..) जोड़ें, फिर अपने मॉडल को <b>घुमाकर</b> बिंदीदार छाया पर मिलाएँ और लॉक करें।') + '</div>' +
      '<div class="ss-cv"></div>' +
      '<div class="ss-info"><span>' + bi('Central atom', 'केंद्रीय परमाणु') + ' <b>' + T.c + '</b></span><span>' + bi('Valence e⁻', 'संयोजी e⁻') + ' <b>' + T.ve + '</b></span><span>' + bi('Bonded atoms', 'जुड़े परमाणु') + ' <b>' + T.bp + ' × ' + T.l + '</b></span><span>' + bi('Target angle', 'लक्ष्य कोण') + ' <b>' + bi(T.ang, angHi) + '</b></span></div>' +
      '<div class="ss-build"><div class="ss-step"><span>' + bi('Bond pairs', 'आबंध युग्म') + '</span><button data-s="bp" data-d="-1">−</button><b data-r="bp">0</b><button data-s="bp" data-d="1">+</button></div>' +
      '<div class="ss-step"><span>' + bi('Lone pairs', 'एकाकी युग्म') + '</span><button data-s="lp" data-d="-1">−</button><b data-r="lp">0</b><button data-s="lp" data-d="1">+</button></div></div>' +
      '<div class="ss-rot"><button class="cge-btn" data-rot="-15">🔄 −15°</button><input type="range" min="-180" max="180" step="1" value="0" data-r="sl" aria-label="Rotate model"><button class="cge-btn" data-rot="15">🔄 +15°</button></div>' +
      '<div class="ss-meter"><div class="ss-bar"><i data-r="bar"></i></div><span data-r="pct"></span></div>' +
      '<div class="fg-acts"><button class="cge-btn pri" data-act="lock">' + bi('🔒 Lock Shape', '🔒 आकृति लॉक करें') + '</button></div><div data-r="res"></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, 250);
    ctx.stage.querySelector('.ss-cv').appendChild(cvh.cv);
    ctx.moveFmt = (m) => bi('Moves ' + m, 'चालें ' + m);
    ctx.hintFn = () => [
      'Steric number = bond pairs + lone pairs (2 linear <i>sp</i>, 3 trigonal planar <i>sp²</i>, 4 tetrahedral <i>sp³</i>, 5 trigonal bipyramidal <i>sp³d</i>, 6 octahedral <i>sp³d²</i>). Lone pairs = (valence e⁻ of the central atom − e⁻ it uses in bonds) ÷ 2. ' + T.c + ' has ' + T.ve + ' valence electrons and its ' + T.bp + ' bonded atom(s) use ' + T.used + ' of them. Lone pairs repel more than bond pairs, so bond angles shrink (CH₄ 109.5° → NH₃ 107° → H₂O 104.5°).',
      'त्रिविम संख्या (steric number) = आबंध युग्म + एकाकी युग्म (2 रैखिक <i>sp</i>, 3 त्रिकोणीय समतलीय <i>sp²</i>, 4 चतुष्फलकीय <i>sp³</i>, 5 त्रिकोणीय द्विपिरामिडी <i>sp³d</i>, 6 अष्टफलकीय <i>sp³d²</i>)। एकाकी युग्म = (केंद्रीय परमाणु के संयोजी e⁻ − आबंधन में प्रयुक्त e⁻) ÷ 2। ' + T.c + ' में ' + T.ve + ' संयोजी इलेक्ट्रॉन हैं और उसके ' + T.bp + ' जुड़े परमाणु उनमें से ' + T.used + ' का उपयोग करते हैं। एकाकी युग्म, आबंध युग्म से अधिक प्रतिकर्षण करते हैं, इसलिए आबंध कोण घटते हैं (CH₄ 109.5° → NH₃ 107° → H₂O 104.5°)।'];

    function bondPoints(b, l, ya) { return ssDomains(b, l).bonds.map((v) => ssProj(v, ya, R, CX, CY)); }
    function alignment() {
      if (bp !== T.bp) return 0;
      const Pp = bondPoints(bp, lp, yaw), Qp = bondPoints(T.bp, T.lp, tyaw);
      let sum = 0;
      Qp.forEach((q) => { let m = 1e9; Pp.forEach((p) => { m = Math.min(m, Math.hypot(p.x - q.x, p.y - q.y)); }); sum += m; });
      return clamp(1 - (sum / Qp.length) / (0.65 * R), 0, 1);
    }
    function sync() {
      $('bp').textContent = bp; $('lp').textContent = lp;
      score = alignment();
      $('bar').style.width = Math.round(score * 100) + '%';
      $('bar').className = score >= 0.8 ? 'ok' : '';
      const pc = Math.round(score * 100);
      $('pct').innerHTML = bp === T.bp ? bi('Alignment ' + pc + '% (need 80%)', 'संरेखण ' + pc + '% (80% चाहिए)') : bi('Alignment — (add all ' + T.bp + ' bonded atoms)', 'संरेखण — (सभी ' + T.bp + ' जुड़े परमाणु जोड़ें)');
      ctx.setStatus(['🧩 ' + bp + ' BP · ' + lp + ' LP', '🧩 ' + bp + ' आबंध · ' + lp + ' एकाकी']);
    }
    ctx.stage.onclick = (e) => {
      if (done) return;
      const t = e.target.closest ? e.target.closest('[data-s],[data-rot],[data-act]') : null;
      if (!t) return;
      if (t.hasAttribute('data-s')) {
        const k = t.getAttribute('data-s'), d = +t.getAttribute('data-d');
        const nb = k === 'bp' ? bp + d : bp, nl = k === 'lp' ? lp + d : lp;
        if (nb < 0 || nl < 0) return;
        if (nb + nl > 6) { ctx.say(['Maximum 6 electron domains around a central atom (sp³d² is the limit in Class 11).', 'केंद्रीय परमाणु के चारों ओर अधिकतम 6 इलेक्ट्रॉन-क्षेत्र (electron domains) हो सकते हैं (कक्षा 11 में sp³d² सीमा है)।'], 'info'); return; }
        bp = nb; lp = nl; moves++; ctx.move(); sfx.pop(); ctx.say(null); sync();
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
      if (bp < 1) { ctx.say(['Add bond pairs and lone pairs first.', 'पहले आबंध युग्म और एकाकी युग्म जोड़ें।'], 'info'); return; }
      if (bp !== T.bp || lp !== T.lp) {
        const nm = SS_NAME[bp + '-' + lp], nmEn = nm || 'an unstable arrangement', nmHi = nm ? SS_HI[nm] : 'अस्थायी विन्यास';
        ctx.bad(['Your model is <b>' + nmEn + '</b> (' + bp + ' BP + ' + lp + ' LP). ' + chem(T.f) + ' does not match — recount the central atom\'s lone pairs: ' + T.c + ' has ' + T.ve + ' valence e⁻.',
          'आपका मॉडल <b>' + nmHi + '</b> (' + bp + ' आबंध + ' + lp + ' एकाकी) है। ' + chem(T.f) + ' इससे मेल नहीं खाता — केंद्रीय परमाणु के एकाकी युग्म दोबारा गिनें: ' + T.c + ' में ' + T.ve + ' संयोजी e⁻ हैं।']);
        return;
      }
      if (score < 0.8) { ctx.say(['Right electron pairs! Now <b>rotate</b> until the alignment reaches 80%.', 'इलेक्ट्रॉन युग्म सही हैं! अब संरेखण 80% होने तक <b>घुमाएँ</b>।'], 'info'); return; }
      done = true;
      $('res').innerHTML = '<div class="cge-card ok">' + bi('<b>' + chem(T.f) + '</b> — ' + T.shape + '<br>' + T.bp + ' BP + ' + T.lp + ' LP · hybridisation <b>' + T.hyb + '</b> · bond angle ' + T.ang,
        '<b>' + chem(T.f) + '</b> — ' + SS_HI[T.shape] + '<br>' + T.bp + ' आबंध + ' + T.lp + ' एकाकी · संकरण <b>' + T.hyb + '</b> · आबंध कोण ' + angHi) + '</div>';
      ctx.win({
        effStars: moves <= T.bp + T.lp + 6 ? 3 : moves <= T.bp + T.lp + 14 ? 2 : 1,
        concept: mode === 'easy' ? ['VSEPR: bond pairs only — linear, trigonal planar, tetrahedral', 'VSEPR: केवल आबंध युग्म — रैखिक, त्रिकोणीय समतलीय, चतुष्फलकीय']
          : mode === 'moderate' ? ['Lone-pair repulsion: bent, pyramidal & trigonal bipyramidal shapes', 'एकाकी युग्म प्रतिकर्षण: कोणीय, पिरामिडी व त्रिकोणीय द्विपिरामिडी आकृतियाँ']
            : ['VSEPR specials: see-saw, T-shape, square planar & sp³d / sp³d² hybridisation', 'VSEPR विशेष: सी-सॉ, T-आकार, वर्ग समतलीय व sp³d / sp³d² संकरण'],
        detail: [chem(T.f) + ' is ' + T.shape + ' (' + T.hyb + ').', chem(T.f) + ' की आकृति ' + SS_HI[T.shape] + ' है (' + T.hyb + ')।']
      });
    }
    sync();

    ctx.loop((t) => {
      const g = cvh.g, ok = score >= 0.8 && bp === T.bp;
      blueprint(g, 340, 250);
      /* ---- target silhouette: crisp dashed outline of the bonded atoms ---- */
      const tp = bondPoints(T.bp, T.lp, tyaw), sc = ok ? PAL.em2 : PAL.amber2;
      g.setLineDash([4, 4]); g.lineWidth = 1.6; g.strokeStyle = sc;
      tp.forEach((p) => { g.beginPath(); g.moveTo(CX, CY); g.lineTo(p.x, p.y); g.stroke(); });
      tp.forEach((p) => {
        g.setLineDash([]); g.fillStyle = ok ? 'rgba(46,160,67,.12)' : 'rgba(227,179,65,.08)'; g.beginPath(); g.arc(p.x, p.y, 17 * p.p, 0, 6.2832); g.fill();
        g.setLineDash([5, 4]); g.lineWidth = 2; g.strokeStyle = sc; g.beginPath(); g.arc(p.x, p.y, 17 * p.p, 0, 6.2832); g.stroke();
        g.setLineDash([]); g.lineWidth = 1; g.beginPath(); g.moveTo(p.x - 4, p.y); g.lineTo(p.x + 4, p.y); g.moveTo(p.x, p.y - 4); g.lineTo(p.x, p.y + 4); g.stroke();
      });
      g.setLineDash([]);
      g.font = cf(9, 800); const lbl = L('TARGET SILHOUETTE', 'लक्ष्य छाया'), lw = g.measureText(lbl).width + 14;
      g.fillStyle = PAL.bg; rr(g, 8, 8, lw, 16, 4); g.fill(); g.strokeStyle = sc; g.lineWidth = 1; g.stroke();
      g.fillStyle = sc; g.textAlign = 'left'; g.fillText(lbl, 15, 20);
      /* ---- player's model ---- */
      const dm = ssDomains(bp, lp), items = [];
      dm.bonds.forEach((v) => items.push({ k: 'b', p: ssProj(v, yaw, R, CX, CY) }));
      dm.lones.forEach((v) => items.push({ k: 'l', p: ssProj(v, yaw, R * 0.6, CX, CY), tip: ssProj(v, yaw, R * 0.98, CX, CY) }));
      items.push({ k: 'c', p: { x: CX, y: CY, z: 0, p: 1 } });
      items.sort((a, b) => a.p.z - b.p.z);
      items.forEach((it) => { if (it.k === 'b') rod(g, CX, CY, it.p.x, it.p.y, 5, 3.6 * it.p.p, '#C9D1D9'); });
      items.forEach((it) => {
        const p = it.p;
        if (it.k === 'b') {
          sphere(g, p.x, p.y, 14.5 * p.p, cpk(T.l));
          g.fillStyle = 'rgba(8,10,14,.85)'; g.font = nf(Math.round(11 * p.p), 800); g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(T.l, p.x, p.y + 1); g.textBaseline = 'alphabetic';
        } else if (it.k === 'l') {
          const dx = it.tip.x - CX, dy = it.tip.y - CY, len = Math.max(16, Math.hypot(dx, dy) * 0.96);
          ssPear(g, CX, CY, Math.atan2(dy, dx), len, 12 * p.p);
        } else {
          sphere(g, CX, CY, 21, cpk(T.c));
          if (ok) { g.strokeStyle = PAL.em2; g.lineWidth = 2.5; g.beginPath(); g.arc(CX, CY, 25, 0, 6.2832); g.stroke(); }
          g.fillStyle = 'rgba(8,10,14,.9)'; g.font = nf(14, 800); g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(T.c, CX, CY + 1); g.textBaseline = 'alphabetic';
        }
      });
      g.fillStyle = PAL.mut; g.font = cf(10, 600); g.textAlign = 'right'; g.fillText(L('drag to rotate ⟲', 'घुमाने के लिए खींचें ⟲'), 332, 242);
      g.textAlign = 'center';
    });
  };

  /* ==========================================================================
     5. TREND DETECTIVE  (Ch 3 · Periodic trends)
     ========================================================================== */
  const DT_EL = [
    ['H', 1, 'Hydrogen', 1, 1, 'हाइड्रोजन'], ['He', 2, 'Helium', 1, 18, 'हीलियम'],
    ['Li', 3, 'Lithium', 2, 1, 'लिथियम'], ['Be', 4, 'Beryllium', 2, 2, 'बेरिलियम'], ['B', 5, 'Boron', 2, 13, 'बोरॉन'], ['C', 6, 'Carbon', 2, 14, 'कार्बन'], ['N', 7, 'Nitrogen', 2, 15, 'नाइट्रोजन'], ['O', 8, 'Oxygen', 2, 16, 'ऑक्सीजन'], ['F', 9, 'Fluorine', 2, 17, 'फ्लुओरीन'], ['Ne', 10, 'Neon', 2, 18, 'नियॉन'],
    ['Na', 11, 'Sodium', 3, 1, 'सोडियम'], ['Mg', 12, 'Magnesium', 3, 2, 'मैग्नीशियम'], ['Al', 13, 'Aluminium', 3, 13, 'ऐलुमिनियम'], ['Si', 14, 'Silicon', 3, 14, 'सिलिकॉन'], ['P', 15, 'Phosphorus', 3, 15, 'फॉस्फोरस'], ['S', 16, 'Sulphur', 3, 16, 'सल्फर (गंधक)'], ['Cl', 17, 'Chlorine', 3, 17, 'क्लोरीन'], ['Ar', 18, 'Argon', 3, 18, 'आर्गन'],
    ['K', 19, 'Potassium', 4, 1, 'पोटैशियम'], ['Ca', 20, 'Calcium', 4, 2, 'कैल्सियम'], ['Sc', 21, 'Scandium', 4, 3, 'स्कैंडियम'], ['Ti', 22, 'Titanium', 4, 4, 'टाइटेनियम'], ['V', 23, 'Vanadium', 4, 5, 'वैनेडियम'], ['Cr', 24, 'Chromium', 4, 6, 'क्रोमियम'], ['Mn', 25, 'Manganese', 4, 7, 'मैंगनीज़'], ['Fe', 26, 'Iron', 4, 8, 'आयरन (लोहा)'], ['Co', 27, 'Cobalt', 4, 9, 'कोबाल्ट'], ['Ni', 28, 'Nickel', 4, 10, 'निकैल'], ['Cu', 29, 'Copper', 4, 11, 'कॉपर (ताँबा)'], ['Zn', 30, 'Zinc', 4, 12, 'ज़िंक (जस्ता)'],
    ['Ga', 31, 'Gallium', 4, 13, 'गैलियम'], ['Ge', 32, 'Germanium', 4, 14, 'जर्मेनियम'], ['As', 33, 'Arsenic', 4, 15, 'आर्सेनिक'], ['Se', 34, 'Selenium', 4, 16, 'सेलेनियम'], ['Br', 35, 'Bromine', 4, 17, 'ब्रोमीन'], ['Kr', 36, 'Krypton', 4, 18, 'क्रिप्टॉन'],
    ['Rb', 37, 'Rubidium', 5, 1, 'रुबिडियम'], ['Sr', 38, 'Strontium', 5, 2, 'स्ट्रॉन्शियम'], ['In', 49, 'Indium', 5, 13, 'इंडियम'], ['Sn', 50, 'Tin', 5, 14, 'टिन (वंग)'], ['Sb', 51, 'Antimony', 5, 15, 'ऐंटिमनी'], ['Te', 52, 'Tellurium', 5, 16, 'टेल्यूरियम'], ['I', 53, 'Iodine', 5, 17, 'आयोडीन'], ['Xe', 54, 'Xenon', 5, 18, 'ज़ीनॉन'],
    ['Cs', 55, 'Caesium', 6, 1, 'सीज़ियम'], ['Ba', 56, 'Barium', 6, 2, 'बेरियम'], ['Tl', 81, 'Thallium', 6, 13, 'थैलियम'], ['Pb', 82, 'Lead', 6, 14, 'लेड (सीसा)'], ['Bi', 83, 'Bismuth', 6, 15, 'बिस्मथ'], ['Po', 84, 'Polonium', 6, 16, 'पोलोनियम'], ['At', 85, 'Astatine', 6, 17, 'ऐस्टेटीन'], ['Rn', 86, 'Radon', 6, 18, 'रेडॉन']
  ];
  const DT_POS = {};
  DT_EL.forEach((e) => { DT_POS[e[0]] = { z: e[1], name: e[2], p: e[3], g: e[4], hi: e[5] }; });
  const S = (s) => s.split(' ');
  const stp = (q, qh, am, a, why, wh) => ({ q: q, qh: qh, am: S(am), a: a, why: why, wh: wh });
  const DT_CASES = {
    easy: [
      { start: 'Li', concept: 'Periodic trends: atomic radius & metallic character', ch: 'आवर्ती प्रवृत्तियाँ: परमाणु त्रिज्या व धात्विक गुण', steps: [
        stp('Atomic radius <b>increases down a group</b>. Among Li, Na and K, tap the element with the <b>largest</b> atomic radius.', 'परमाणु त्रिज्या किसी वर्ग में <b>ऊपर से नीचे बढ़ती है</b>। Li, Na और K में से <b>सबसे बड़ी</b> परमाणु त्रिज्या वाला तत्व चुनें।', 'Li Na K', 'K', 'Each period adds a shell, so radius grows down the group: K &gt; Na &gt; Li.', 'प्रत्येक आवर्त में एक नया कोश जुड़ता है, इसलिए वर्ग में नीचे जाने पर त्रिज्या बढ़ती है: K &gt; Na &gt; Li।'),
        stp('Atomic radius <b>decreases across a period</b> (noble gas excluded). From K, tap the element with the <b>smallest</b> radius among K, Ca, Ga, Ge, As, Se and Br.', 'परमाणु त्रिज्या किसी आवर्त में <b>बाएँ से दाएँ घटती है</b> (उत्कृष्ट गैस छोड़कर)। K से आगे, K, Ca, Ga, Ge, As, Se और Br में से <b>सबसे छोटी</b> त्रिज्या वाला तत्व चुनें।', 'K Ca Ga Ge As Se Br', 'Br', 'Same number of shells but rising nuclear charge pulls the electrons in: Br is the smallest.', 'कोशों की संख्या समान रहती है पर नाभिकीय आवेश बढ़ता है, जो इलेक्ट्रॉनों को भीतर खींचता है: Br सबसे छोटा है।'),
        stp('Metallic character <b>increases down a group</b>. Among N, P and As, tap the <b>most metallic</b> element.', 'धात्विक गुण किसी वर्ग में <b>ऊपर से नीचे बढ़ता है</b>। N, P और As में से <b>सबसे अधिक धात्विक</b> तत्व चुनें।', 'N P As', 'As', 'Ionisation enthalpy falls down the group, so electron loss (metallic character) is easiest for As.', 'वर्ग में नीचे जाने पर आयनन एन्थैल्पी घटती है, इसलिए As में इलेक्ट्रॉन त्यागना (धात्विक गुण) सबसे आसान है।')] },
      { start: 'Na', concept: 'Periodic trends: atomic radius & metallic character', ch: 'आवर्ती प्रवृत्तियाँ: परमाणु त्रिज्या व धात्विक गुण', steps: [
        stp('Atomic radius <b>decreases across a period</b>. Tap the element with the <b>smallest</b> radius among Na, Mg, Al, Si, P, S and Cl.', 'परमाणु त्रिज्या आवर्त में <b>बाएँ से दाएँ घटती है</b>। Na, Mg, Al, Si, P, S और Cl में से <b>सबसे छोटी</b> त्रिज्या वाला तत्व चुनें।', 'Na Mg Al Si P S Cl', 'Cl', 'Effective nuclear charge increases from Na to Cl within the same shell.', 'उसी कोश में Na से Cl तक प्रभावी नाभिकीय आवेश (effective nuclear charge) बढ़ता है।'),
        stp('From Cl, go up the halogens. Tap the halogen with the <b>smallest</b> atomic radius among F, Cl, Br and I.', 'Cl से हैलोजन वर्ग में ऊपर चलें। F, Cl, Br और I में से <b>सबसे छोटी</b> परमाणु त्रिज्या वाला हैलोजन चुनें।', 'F Cl Br I', 'F', 'F has only two shells, so it is the smallest halogen.', 'F में केवल दो कोश हैं, इसलिए यह सबसे छोटा हैलोजन है।'),
        stp('From F, look along Period 2. Tap the element with the <b>largest</b> atomic radius among Li, Be, B, C, N, O and F.', 'F से आवर्त 2 में देखें। Li, Be, B, C, N, O और F में से <b>सबसे बड़ी</b> परमाणु त्रिज्या वाला तत्व चुनें।', 'Li Be B C N O F', 'Li', 'Radius is greatest at the left end of a period: Li.', 'आवर्त के बाएँ सिरे पर त्रिज्या सबसे अधिक होती है: Li।')] },
      { start: 'Be', concept: 'Periodic trends: atomic radius & metallic character', ch: 'आवर्ती प्रवृत्तियाँ: परमाणु त्रिज्या व धात्विक गुण', steps: [
        stp('Metallic character <b>decreases across a period</b>. Tap the <b>most metallic</b> element among Li, Be, B, C, N, O and F.', 'धात्विक गुण आवर्त में <b>बाएँ से दाएँ घटता है</b>। Li, Be, B, C, N, O और F में से <b>सबसे अधिक धात्विक</b> तत्व चुनें।', 'Li Be B C N O F', 'Li', 'Metals lose electrons most easily at the left end of the period: Li.', 'आवर्त के बाएँ सिरे पर धातुएँ इलेक्ट्रॉन सबसे आसानी से त्यागती हैं: Li।'),
        stp('Metallic character <b>increases down a group</b>. From Li, tap the <b>most metallic</b> element among Li, Na and K.', 'धात्विक गुण वर्ग में <b>नीचे जाने पर बढ़ता है</b>। Li से आगे, Li, Na और K में से <b>सबसे अधिक धात्विक</b> तत्व चुनें।', 'Li Na K', 'K', 'Larger atoms hold the valence electron less tightly: K.', 'बड़े परमाणु संयोजी इलेक्ट्रॉन को कम मज़बूती से पकड़ते हैं: K।'),
        stp('From K, cross Period 4. Tap the <b>least metallic</b> (most non-metallic) element among K, Ca, Ga, Ge, As, Se and Br.', 'K से आवर्त 4 पार करें। K, Ca, Ga, Ge, As, Se और Br में से <b>सबसे कम धात्विक</b> (सबसे अधिक अधात्विक) तत्व चुनें।', 'K Ca Ga Ge As Se Br', 'Br', 'Non-metallic character grows across the period: Br.', 'आवर्त में आगे बढ़ने पर अधात्विक गुण बढ़ता है: Br।')] },
      { start: 'Mg', concept: 'Periodic trends: atomic radius & metallic character', ch: 'आवर्ती प्रवृत्तियाँ: परमाणु त्रिज्या व धात्विक गुण', steps: [
        stp('Tap the alkaline earth metal with the <b>largest</b> atomic radius among Be, Mg, Ca and Sr.', 'Be, Mg, Ca और Sr में से <b>सबसे बड़ी</b> परमाणु त्रिज्या वाली क्षारीय मृदा धातु चुनें।', 'Be Mg Ca Sr', 'Sr', 'Radius increases down Group 2: Sr &gt; Ca &gt; Mg &gt; Be.', 'वर्ग 2 में त्रिज्या बढ़ती है: Sr &gt; Ca &gt; Mg &gt; Be।'),
        stp('Metallic character <b>increases down a group</b>. Among C, Si, Ge and Sn, tap the <b>most metallic</b> element.', 'धात्विक गुण वर्ग में <b>नीचे जाने पर बढ़ता है</b>। C, Si, Ge और Sn में से <b>सबसे अधिक धात्विक</b> तत्व चुनें।', 'C Si Ge Sn', 'Sn', 'Group 14 changes from non-metal (C) to metal (Sn, Pb).', 'वर्ग 14 अधातु (C) से धातु (Sn, Pb) की ओर बदलता है।'),
        stp('From Sn, cross Period 5. Tap the element with the <b>smallest</b> atomic radius among Sn, Sb, Te and I.', 'Sn से आवर्त 5 पार करें। Sn, Sb, Te और I में से <b>सबसे छोटी</b> परमाणु त्रिज्या वाला तत्व चुनें।', 'Sn Sb Te I', 'I', 'Radius shrinks across the period: I is the smallest of the four.', 'आवर्त में त्रिज्या घटती है: चारों में I सबसे छोटा है।')] },
      { start: 'Ne', concept: 'Periodic trends: atomic radius & metallic character', ch: 'आवर्ती प्रवृत्तियाँ: परमाणु त्रिज्या व धात्विक गुण', steps: [
        stp('Tap the <b>most metallic</b> element among Li, Na and K.', 'Li, Na और K में से <b>सबसे अधिक धात्विक</b> तत्व चुनें।', 'Li Na K', 'K', 'Metallic character rises down Group 1: K.', 'वर्ग 1 में नीचे जाने पर धात्विक गुण बढ़ता है: K।'),
        stp('From K, move within Period 4. Tap the element with the <b>smallest</b> atomic radius among K, Ca, Sc and Zn.', 'K से आवर्त 4 में चलें। K, Ca, Sc और Zn में से <b>सबसे छोटी</b> परमाणु त्रिज्या वाला तत्व चुनें।', 'K Ca Sc Zn', 'Zn', 'Nuclear charge rises (and 3d electrons shield poorly), so Zn is the smallest of these.', 'नाभिकीय आवेश बढ़ता है (और 3d इलेक्ट्रॉन कमज़ोर परिरक्षण देते हैं), इसलिए इनमें Zn सबसे छोटा है।'),
        stp('From Zn, go to the halogens. Tap the halogen with the <b>largest</b> atomic radius among F, Cl and Br.', 'Zn से हैलोजन की ओर जाएँ। F, Cl और Br में से <b>सबसे बड़ी</b> परमाणु त्रिज्या वाला हैलोजन चुनें।', 'F Cl Br', 'Br', 'Radius increases down the group: Br &gt; Cl &gt; F.', 'वर्ग में नीचे जाने पर त्रिज्या बढ़ती है: Br &gt; Cl &gt; F।')] }
    ],
    moderate: [
      { start: 'O', concept: 'Electronegativity, valency & isoelectronic species', ch: 'विद्युतऋणात्मकता, संयोजकता व समइलेक्ट्रॉनिक स्पीशीज़', steps: [
        stp('Electronegativity <b>increases across a period and decreases down a group</b>. Tap the <b>most electronegative</b> element among N, O, F and Cl.', 'विद्युतऋणात्मकता आवर्त में <b>बढ़ती</b> और वर्ग में नीचे जाने पर <b>घटती</b> है। N, O, F और Cl में से <b>सबसे अधिक विद्युतऋणात्मक</b> तत्व चुनें।', 'N O F Cl', 'F', 'F is the most electronegative element of all (Pauling 4.0).', 'F सभी तत्वों में सबसे अधिक विद्युतऋणात्मक है (पॉलिंग 4.0)।'),
        stp('N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ and Al³⁺ are <b>isoelectronic</b> (10 e⁻): more protons pull harder, so the ion is smaller. Tap the element whose ion is the <b>largest</b>.', 'N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ और Al³⁺ <b>समइलेक्ट्रॉनिक</b> (isoelectronic, 10 e⁻) हैं: प्रोटॉन जितने अधिक, आयन उतना छोटा। उस तत्व को चुनें जिसका आयन <b>सबसे बड़ा</b> है।', 'N O F Na Mg Al', 'N', 'N³⁻ has the fewest protons (7) holding 10 electrons, so it is the largest.', 'N³⁻ में सबसे कम प्रोटॉन (7) 10 इलेक्ट्रॉनों को पकड़े हैं, इसलिए यह सबसे बड़ा है।'),
        stp('Valency towards <b>hydrogen</b> first increases and then decreases across Period 3 (NaH, MgH₂, AlH₃, SiH₄, PH₃, H₂S, HCl). Tap the element with the <b>maximum</b> valency (4).', 'हाइड्रोजन के प्रति संयोजकता आवर्त 3 में पहले बढ़ती फिर घटती है (NaH, MgH₂, AlH₃, SiH₄, PH₃, H₂S, HCl)। <b>अधिकतम</b> संयोजकता (4) वाला तत्व चुनें।', 'Na Mg Al Si P S Cl', 'Si', 'SiH₄: silicon shows its maximum valency of 4 towards hydrogen.', 'SiH₄: सिलिकॉन हाइड्रोजन के प्रति अपनी अधिकतम संयोजकता 4 दर्शाता है।')] },
      { start: 'Na', concept: 'Electronegativity, valency & isoelectronic species', ch: 'विद्युतऋणात्मकता, संयोजकता व समइलेक्ट्रॉनिक स्पीशीज़', steps: [
        stp('Electronegativity <b>decreases down a group</b>. Tap the <b>most electronegative</b> element among Cl, Br and I.', 'विद्युतऋणात्मकता वर्ग में <b>नीचे जाने पर घटती है</b>। Cl, Br और I में से <b>सबसे अधिक विद्युतऋणात्मक</b> तत्व चुनें।', 'Cl Br I', 'Cl', 'Cl (3.0) &gt; Br (2.8) &gt; I (2.5).', 'Cl (3.0) &gt; Br (2.8) &gt; I (2.5)।'),
        stp('S²⁻, Cl⁻, K⁺ and Ca²⁺ are <b>isoelectronic</b> (18 e⁻). Tap the element whose ion is the <b>smallest</b>.', 'S²⁻, Cl⁻, K⁺ और Ca²⁺ <b>समइलेक्ट्रॉनिक</b> (18 e⁻) हैं। उस तत्व को चुनें जिसका आयन <b>सबसे छोटा</b> है।', 'S Cl K Ca', 'Ca', 'Ca²⁺ has the most protons (20) for 18 electrons, so it is the smallest.', 'Ca²⁺ में 18 इलेक्ट्रॉनों के लिए सबसे अधिक प्रोटॉन (20) हैं, इसलिए यह सबसे छोटा है।'),
        stp('From Ca, cross Period 4. Tap the <b>most electronegative</b> element among K, Ca, Ga, Ge, As, Se and Br.', 'Ca से आवर्त 4 पार करें। K, Ca, Ga, Ge, As, Se और Br में से <b>सबसे अधिक विद्युतऋणात्मक</b> तत्व चुनें।', 'K Ca Ga Ge As Se Br', 'Br', 'Electronegativity rises across the period: Br (2.96).', 'आवर्त में विद्युतऋणात्मकता बढ़ती है: Br (2.96)।')] },
      { start: 'C', concept: 'Electronegativity, valency & isoelectronic species', ch: 'विद्युतऋणात्मकता, संयोजकता व समइलेक्ट्रॉनिक स्पीशीज़', steps: [
        stp('Tap the <b>most electronegative</b> element among O, S and Se.', 'O, S और Se में से <b>सबसे अधिक विद्युतऋणात्मक</b> तत्व चुनें।', 'O S Se', 'O', 'Electronegativity decreases down Group 16: O (3.5) is highest.', 'वर्ग 16 में विद्युतऋणात्मकता घटती है: O (3.5) सबसे अधिक है।'),
        stp('Valency towards <b>oxygen</b> rises from 1 (Na₂O) to 7 (Cl₂O₇) across Period 3. Tap the element with the <b>highest</b> valency towards oxygen.', 'ऑक्सीजन के प्रति संयोजकता आवर्त 3 में 1 (Na₂O) से 7 (Cl₂O₇) तक बढ़ती है। ऑक्सीजन के प्रति <b>सर्वाधिक</b> संयोजकता वाला तत्व चुनें।', 'Na Mg Al Si P S Cl', 'Cl', 'Cl₂O₇ — chlorine reaches its group valency of 7.', 'Cl₂O₇ — क्लोरीन अपनी वर्ग संयोजकता 7 तक पहुँचता है।'),
        stp('From Cl, go down Group 17. Tap the <b>least electronegative</b> element among F, Cl, Br and I.', 'Cl से हैलोजन वर्ग में नीचे जाएँ। F, Cl, Br और I में से <b>सबसे कम विद्युतऋणात्मक</b> तत्व चुनें।', 'F Cl Br I', 'I', 'Electronegativity falls down the group: I is lowest.', 'वर्ग में नीचे जाने पर विद्युतऋणात्मकता घटती है: I सबसे कम है।')] },
      { start: 'Mg', concept: 'Electronegativity, valency & isoelectronic species', ch: 'विद्युतऋणात्मकता, संयोजकता व समइलेक्ट्रॉनिक स्पीशीज़', steps: [
        stp('O²⁻, F⁻, Na⁺ and Mg²⁺ are <b>isoelectronic</b> (10 e⁻). Tap the element whose ion is the <b>largest</b>.', 'O²⁻, F⁻, Na⁺ और Mg²⁺ <b>समइलेक्ट्रॉनिक</b> (10 e⁻) हैं। उस तत्व को चुनें जिसका आयन <b>सबसे बड़ा</b> है।', 'O F Na Mg', 'O', 'O²⁻ has the lowest nuclear charge (8 protons) for 10 electrons.', 'O²⁻ में 10 इलेक्ट्रॉनों के लिए नाभिकीय आवेश सबसे कम (8 प्रोटॉन) है।'),
        stp('Tap the <b>most electronegative</b> element among N, P and As.', 'N, P और As में से <b>सबसे अधिक विद्युतऋणात्मक</b> तत्व चुनें।', 'N P As', 'N', 'Electronegativity falls down Group 15: N (3.0) is highest.', 'वर्ग 15 में विद्युतऋणात्मकता घटती है: N (3.0) सबसे अधिक है।'),
        stp('From N, think of Period 3. Tap the <b>most electronegative</b> element among Na, Mg, Al, Si, P, S and Cl.', 'N से आवर्त 3 पर सोचें। Na, Mg, Al, Si, P, S और Cl में से <b>सबसे अधिक विद्युतऋणात्मक</b> तत्व चुनें।', 'Na Mg Al Si P S Cl', 'Cl', 'Electronegativity increases across a period: Cl.', 'आवर्त में विद्युतऋणात्मकता बढ़ती है: Cl।')] },
      { start: 'K', concept: 'Electronegativity, valency & isoelectronic species', ch: 'विद्युतऋणात्मकता, संयोजकता व समइलेक्ट्रॉनिक स्पीशीज़', steps: [
        stp('P³⁻, S²⁻, Cl⁻, K⁺ and Ca²⁺ are <b>isoelectronic</b> (18 e⁻). Tap the element whose ion is the <b>largest</b>.', 'P³⁻, S²⁻, Cl⁻, K⁺ और Ca²⁺ <b>समइलेक्ट्रॉनिक</b> (18 e⁻) हैं। उस तत्व को चुनें जिसका आयन <b>सबसे बड़ा</b> है।', 'P S Cl K Ca', 'P', 'P³⁻ has the fewest protons (15), so it is the largest ion.', 'P³⁻ में प्रोटॉन सबसे कम (15) हैं, इसलिए यह सबसे बड़ा आयन है।'),
        stp('Tap the <b>least electronegative</b> element among Li, Na and K.', 'Li, Na और K में से <b>सबसे कम विद्युतऋणात्मक</b> तत्व चुनें।', 'Li Na K', 'K', 'Electronegativity falls down Group 1: K (0.82).', 'वर्ग 1 में विद्युतऋणात्मकता घटती है: K (0.82)।'),
        stp('From K, think of Period 3. Tap the <b>most electronegative</b> element among Si, P and S.', 'K से आवर्त 3 पर सोचें। Si, P और S में से <b>सबसे अधिक विद्युतऋणात्मक</b> तत्व चुनें।', 'Si P S', 'S', 'S (2.58) &gt; P (2.19) &gt; Si (1.90).', 'S (2.58) &gt; P (2.19) &gt; Si (1.90)।')] }
    ],
    hard: [
      { start: 'Li', concept: 'NCERT exceptions: ionisation enthalpy Be &gt; B and N &gt; O', ch: 'NCERT अपवाद: आयनन एन्थैल्पी Be &gt; B तथा N &gt; O', steps: [
        stp('Ionisation enthalpy normally rises across a period, but there is a dip at boron. Tap the element with the <b>higher</b> first ionisation enthalpy: Be or B.', 'आयनन एन्थैल्पी सामान्यतः आवर्त में बढ़ती है, पर बोरॉन पर गिरावट आती है। <b>अधिक</b> प्रथम आयनन एन्थैल्पी वाला तत्व चुनें: Be या B।', 'Be B', 'Be', 'Be (2s²) has a stable filled s-subshell; boron\'s 2p electron is better shielded and easier to remove.', 'Be (2s²) में पूर्ण-पूरित s-उपकोश स्थायी है; बोरॉन का 2p इलेक्ट्रॉन अधिक परिरक्षित होकर आसानी से निकल जाता है।'),
        stp('Another dip occurs at oxygen. Tap the element with the <b>higher</b> first ionisation enthalpy: N or O.', 'ऑक्सीजन पर एक और गिरावट आती है। <b>अधिक</b> प्रथम आयनन एन्थैल्पी वाला तत्व चुनें: N या O।', 'N O', 'N', 'N has the stable half-filled 2p³ configuration; O loses an electron from a paired orbital.', 'N का अर्ध-पूरित 2p³ विन्यास स्थायी है; O युग्मित कक्षक से इलेक्ट्रॉन त्यागता है।'),
        stp('The same half-filled effect appears in Period 3. Tap the element with the <b>higher</b> first ionisation enthalpy: P or S.', 'यही अर्ध-पूरित प्रभाव आवर्त 3 में भी दिखता है। <b>अधिक</b> प्रथम आयनन एन्थैल्पी वाला तत्व चुनें: P या S।', 'P S', 'P', 'P (3p³, half-filled) &gt; S (3p⁴).', 'P (3p³, अर्ध-पूरित) &gt; S (3p⁴)।')] },
      { start: 'Cl', concept: 'NCERT exception: electron gain enthalpy Cl &gt; F', ch: 'NCERT अपवाद: इलेक्ट्रॉन लब्धि एन्थैल्पी Cl &gt; F', steps: [
        stp('Tap the element with the <b>most negative</b> electron gain enthalpy among O, F, S, Cl and Br.', 'O, F, S, Cl और Br में से <b>सबसे अधिक ऋणात्मक</b> इलेक्ट्रॉन लब्धि एन्थैल्पी वाला तत्व चुनें।', 'O F S Cl Br', 'Cl', 'Cl (−349 kJ/mol) beats F (−328 kJ/mol): the compact 2p subshell of F suffers strong inter-electronic repulsion.', 'Cl (−349 kJ/mol), F (−328 kJ/mol) से आगे है: F का छोटा 2p उपकोश तीव्र अंतर-इलेक्ट्रॉनिक प्रतिकर्षण झेलता है।'),
        stp('The same anomaly appears in Group 16. Tap the element with the <b>more negative</b> electron gain enthalpy: O or S.', 'यही विसंगति वर्ग 16 में भी है। <b>अधिक ऋणात्मक</b> इलेक्ट्रॉन लब्धि एन्थैल्पी वाला तत्व चुनें: O या S।', 'O S', 'S', 'S (−200 kJ/mol) is more negative than O (−141 kJ/mol).', 'S (−200 kJ/mol), O (−141 kJ/mol) से अधिक ऋणात्मक है।'),
        stp('Down Group 17 (after the F/Cl reversal) the values become less negative. Tap the halogen with the <b>least negative</b> electron gain enthalpy among F, Cl, Br and I.', 'वर्ग 17 में (F/Cl उलटफेर के बाद) मान कम ऋणात्मक होते जाते हैं। F, Cl, Br और I में से <b>सबसे कम ऋणात्मक</b> इलेक्ट्रॉन लब्धि एन्थैल्पी वाला हैलोजन चुनें।', 'F Cl Br I', 'I', 'I (−295 kJ/mol) is the least negative of the four.', 'I (−295 kJ/mol) चारों में सबसे कम ऋणात्मक है।')] },
      { start: 'Na', concept: 'Amphoteric oxides: Al₂O₃, ZnO, BeO, SnO, PbO', ch: 'उभयधर्मी ऑक्साइड: Al₂O₃, ZnO, BeO, SnO, PbO', steps: [
        stp('Oxides turn from basic to acidic across Period 3. Tap the element whose oxide is <b>amphoteric</b> among Na, Mg, Al, Si and P.', 'आवर्त 3 में ऑक्साइड क्षारीय से अम्लीय होते जाते हैं। Na, Mg, Al, Si और P में से वह तत्व चुनें जिसका ऑक्साइड <b>उभयधर्मी</b> (amphoteric) है।', 'Na Mg Al Si P', 'Al', 'Al₂O₃ reacts with both acids and bases.', 'Al₂O₃ अम्ल और क्षार दोनों से अभिक्रिया करता है।'),
        stp('From Al, tap the element whose oxide is <b>amphoteric</b> among K, Ca and Zn.', 'Al से आगे, K, Ca और Zn में से वह तत्व चुनें जिसका ऑक्साइड <b>उभयधर्मी</b> है।', 'K Ca Zn', 'Zn', 'ZnO dissolves in both HCl and NaOH; K₂O and CaO are basic.', 'ZnO, HCl और NaOH दोनों में घुलता है; K₂O और CaO क्षारीय हैं।'),
        stp('Tap the element with the <b>strongest inert-pair effect</b> among C, Sn and Pb (Pb²⁺ is more stable than Pb⁴⁺); its oxides PbO and PbO₂ are amphoteric.', 'C, Sn और Pb में से सबसे <b>प्रबल अक्रिय युग्म प्रभाव</b> (inert-pair effect) वाला तत्व चुनें (Pb²⁺, Pb⁴⁺ से अधिक स्थायी); इसके ऑक्साइड PbO और PbO₂ उभयधर्मी हैं।', 'C Sn Pb', 'Pb', 'The inert-pair effect increases down Group 14, making +2 most stable for Pb.', 'वर्ग 14 में नीचे जाने पर अक्रिय युग्म प्रभाव बढ़ता है, इसलिए Pb में +2 सबसे स्थायी है।')] },
      { start: 'Li', concept: 'Diagonal relationships: Li–Mg, Be–Al, B–Si', ch: 'विकर्ण संबंध: Li–Mg, Be–Al, B–Si', steps: [
        stp('Li shows a <b>diagonal relationship</b> with an element of Period 3 (both form nitrides directly and have covalent halides). Tap it.', 'Li का आवर्त 3 के एक तत्व से <b>विकर्ण संबंध</b> (diagonal relationship) है (दोनों नाइट्राइड सीधे बनाते हैं और इनके हैलाइड सहसंयोजी हैं)। उसे चुनें।', 'Na Mg Al Si', 'Mg', 'Li and Mg have similar polarising power (charge/size ratio).', 'Li और Mg की ध्रुवण क्षमता (आवेश/आकार अनुपात) समान है।'),
        stp('Be has a diagonal partner in Period 3: both form amphoteric oxides and covalent chlorides. Tap it.', 'Be का भी आवर्त 3 में विकर्ण साथी है: दोनों उभयधर्मी ऑक्साइड और सहसंयोजी क्लोराइड बनाते हैं। उसे चुनें।', 'Na Mg Al Si', 'Al', 'Be–Al: similar charge/size ratio, amphoteric oxides.', 'Be–Al: समान आवेश/आकार अनुपात, उभयधर्मी ऑक्साइड।'),
        stp('B has a diagonal partner in Period 3: both are metalloids forming weakly acidic oxides. Tap it.', 'B का आवर्त 3 में विकर्ण साथी है: दोनों उपधातु (metalloid) हैं और दुर्बल अम्लीय ऑक्साइड बनाते हैं। उसे चुनें।', 'Mg Al Si P', 'Si', 'B–Si: similar electronegativity, acidic oxides, covalent hydrides.', 'B–Si: समान विद्युतऋणात्मकता, अम्लीय ऑक्साइड, सहसंयोजी हाइड्राइड।')] },
      { start: 'Ne', concept: 'Ionisation enthalpy extremes: He highest, Cs lowest, IE₂ of Li', ch: 'आयनन एन्थैल्पी की चरम सीमाएँ: He उच्चतम, Cs न्यूनतम, Li की IE₂', steps: [
        stp('Tap the element with the <b>highest</b> first ionisation enthalpy among H, He, F and Ne.', 'H, He, F और Ne में से <b>सर्वाधिक</b> प्रथम आयनन एन्थैल्पी वाला तत्व चुनें।', 'H He F Ne', 'He', 'He (2372 kJ/mol): the smallest atom holds its electrons most tightly.', 'He (2372 kJ/mol): सबसे छोटा परमाणु अपने इलेक्ट्रॉनों को सबसे मज़बूती से पकड़ता है।'),
        stp('Tap the alkali metal with the <b>lowest</b> first ionisation enthalpy among Li, Na, K, Rb and Cs.', 'Li, Na, K, Rb और Cs में से <b>न्यूनतम</b> प्रथम आयनन एन्थैल्पी वाली क्षार धातु चुनें।', 'Li Na K Rb Cs', 'Cs', 'The largest atom loses its outer electron most easily: Cs (376 kJ/mol).', 'सबसे बड़ा परमाणु बाहरी इलेक्ट्रॉन सबसे आसानी से त्यागता है: Cs (376 kJ/mol)।'),
        stp('After losing one electron, Li⁺ has a 1s² core, so removing a second electron is extremely hard. Tap the element with the <b>highest second</b> ionisation enthalpy among Li, Be, B, C, N, O and F.', 'एक इलेक्ट्रॉन त्यागने के बाद Li⁺ का 1s² क्रोड बन जाता है, इसलिए दूसरा इलेक्ट्रॉन निकालना अत्यंत कठिन है। Li, Be, B, C, N, O और F में से <b>सर्वाधिक द्वितीय</b> आयनन एन्थैल्पी वाला तत्व चुनें।', 'Li Be B C N O F', 'Li', 'IE₂ of Li is about 7298 kJ/mol — a noble-gas core must be broken.', 'Li की IE₂ लगभग 7298 kJ/mol है — उत्कृष्ट गैस क्रोड को तोड़ना पड़ता है।')] },
      { start: 'Be', concept: 'Nature of oxides & the inert-pair effect', ch: 'ऑक्साइडों की प्रकृति व अक्रिय युग्म प्रभाव', steps: [
        stp('Acidic character of oxides increases across a period. Tap the element forming the <b>most acidic</b> oxide among Na, Mg, Al, Si, P, S and Cl.', 'आवर्त में ऑक्साइडों का अम्लीय गुण बढ़ता है। Na, Mg, Al, Si, P, S और Cl में से <b>सबसे अधिक अम्लीय</b> ऑक्साइड बनाने वाला तत्व चुनें।', 'Na Mg Al Si P S Cl', 'Cl', 'Cl₂O₇ gives HClO₄, the strongest acid of the set.', 'Cl₂O₇ से HClO₄ बनता है, जो इस समूह का सबसे प्रबल अम्ल है।'),
        stp('Basic character of oxides increases down a group. Tap the element forming the <b>most basic</b> oxide among Be, Mg, Ca and Sr.', 'वर्ग में नीचे जाने पर ऑक्साइडों का क्षारीय गुण बढ़ता है। Be, Mg, Ca और Sr में से <b>सबसे अधिक क्षारीय</b> ऑक्साइड बनाने वाला तत्व चुनें।', 'Be Mg Ca Sr', 'Sr', 'BeO is amphoteric; SrO is the most basic.', 'BeO उभयधर्मी है; SrO सबसे अधिक क्षारीय है।'),
        stp('Inert-pair effect: tap the Group 14 element for which the <b>+2 state is most stable</b> among Si, Ge, Sn and Pb.', 'अक्रिय युग्म प्रभाव: Si, Ge, Sn और Pb में से वह वर्ग 14 तत्व चुनें जिसके लिए <b>+2 अवस्था सबसे स्थायी</b> है।', 'Si Ge Sn Pb', 'Pb', 'The 6s² pair of lead is reluctant to take part in bonding.', 'सीसे का 6s² युग्म आबंधन में भाग लेने से हिचकता है।')] }
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
      '<div class="dt-read" data-r="sel"></div>' +
      '<div class="fg-acts"><button class="cge-btn" data-act="scan">' + bi('🔍 Scan Clue', '🔍 सुराग़ स्कैन') + '</button><button class="cge-btn pri" data-act="lock" data-r="lock" disabled>' + bi('🔒 Lock Answer', '🔒 उत्तर लॉक करें') + '</button></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    ctx.moveFmt = (m) => bi('Guesses ' + m, 'अनुमान ' + m);
    ctx.setMoves(ctx.moveFmt(0));
    const prompt0 = bi('Tap an element on the map…', 'मानचित्र पर कोई तत्व चुनें…');
    ctx.hintFn = () => mode === 'easy'
      ? ['Across a period (left → right) atomic radius <b>decreases</b> and metallic character <b>decreases</b>. Down a group atomic radius <b>increases</b> and metallic character <b>increases</b>.', 'आवर्त में (बाएँ → दाएँ) परमाणु त्रिज्या <b>घटती</b> है और धात्विक गुण <b>घटता</b> है। वर्ग में नीचे जाने पर परमाणु त्रिज्या <b>बढ़ती</b> है और धात्विक गुण <b>बढ़ता</b> है।']
      : mode === 'moderate'
        ? ['Electronegativity <b>increases</b> across a period and <b>decreases</b> down a group (F is highest). In an isoelectronic series more protons ⇒ smaller ion (N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺). Valency towards H rises 1 → 4 then falls; towards O it rises 1 → 7 across Period 3.',
          'विद्युतऋणात्मकता आवर्त में <b>बढ़ती</b> और वर्ग में नीचे जाने पर <b>घटती</b> है (F सर्वाधिक)। समइलेक्ट्रॉनिक श्रेणी में प्रोटॉन जितने अधिक, आयन उतना छोटा (N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺)। हाइड्रोजन के प्रति संयोजकता 1 → 4 तक बढ़कर फिर घटती है; ऑक्सीजन के प्रति आवर्त 3 में 1 → 7 तक बढ़ती है।']
        : ['First ionisation enthalpy dips at Be → B and N → O (filled / half-filled stability). Electron gain enthalpy: Cl is more negative than F, S more than O. Amphoteric oxides: BeO, Al₂O₃, ZnO, SnO, PbO. Diagonal pairs: Li–Mg, Be–Al, B–Si. The inert-pair effect strengthens down Group 14.',
          'प्रथम आयनन एन्थैल्पी Be → B और N → O पर गिरती है (पूर्ण / अर्ध-पूरित स्थायित्व)। इलेक्ट्रॉन लब्धि एन्थैल्पी: Cl, F से और S, O से अधिक ऋणात्मक है। उभयधर्मी ऑक्साइड: BeO, Al₂O₃, ZnO, SnO, PbO। विकर्ण युग्म: Li–Mg, Be–Al, B–Si। वर्ग 14 में नीचे जाने पर अक्रिय युग्म प्रभाव प्रबल होता है।'];

    let g = '<div class="dt-c0"></div>' + range(1, 18).map((n) => '<div class="dt-gh">' + n + '</div>').join('');
    for (let p = 1; p <= 6; p++) {
      g += '<div class="dt-ph">' + p + '</div>';
      for (let n = 1; n <= 18; n++) {
        const e = DT_EL.find((x) => x[3] === p && x[4] === n);
        g += e ? '<button class="dt-cell b-' + dtBlock(n, e[0]) + '" data-el="' + e[0] + '"><small>' + e[1] + '</small><span>' + e[0] + '</span></button>' : '<div class="dt-e' + (p >= 5 && n >= 3 && n <= 12 ? ' gap' : '') + '"></div>';
      }
    }
    $('grid').innerHTML = g;
    const cells = {}; ctx.stage.querySelectorAll('.dt-cell').forEach((b) => { cells[b.getAttribute('data-el')] = b; });
    const nm = (s) => DT_POS[s].name, nh = (s) => DT_POS[s].hi;

    function paint() {
      Object.keys(cells).forEach((s) => {
        const c = cells[s].classList;
        c.toggle('dt-here', s === here); c.toggle('dt-sel', s === sel); c.toggle('dt-done', !!visited[s]);
        c.toggle('dt-scan', !!(scanSet && scanSet.indexOf(s) >= 0));
      });
    }
    function showClue() {
      const st = C.steps[si];
      $('brief').innerHTML = bi('📍 You are at <b>' + here + '</b> (' + nm(here) + '). Clue <b>' + (si + 1) + ' of 3</b> — each correct answer becomes your next stop.', '📍 आप <b>' + here + '</b> (' + nh(here) + ') पर हैं। सुराग़ <b>' + (si + 1) + ' / 3</b> — प्रत्येक सही उत्तर आपका अगला पड़ाव बनता है।');
      $('clue').innerHTML = '<b>' + bi('🕵️ Clue ' + (si + 1), '🕵️ सुराग़ ' + (si + 1)) + '</b><br>' + bi(st.q, st.qh);
      sel = null; $('sel').innerHTML = prompt0; $('lock').disabled = true; scanSet = null;
      ctx.setStatus(['🔎 Clue ' + (si + 1) + '/3', '🔎 सुराग़ ' + (si + 1) + '/3']); paint();
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
          ctx.win({ effStars: scans === 0 ? 3 : scans <= 2 ? 2 : 1, concept: [C.concept, C.ch], detail: ['Mystery element: <b>' + sel + '</b> — ' + nm(sel) + '. ' + st.why, 'रहस्यमय तत्व: <b>' + sel + '</b> — ' + nh(sel) + '। ' + st.wh] });
          return;
        }
        ctx.ok(['<b>' + sel + '</b> (' + nm(sel) + ') is correct. ' + st.why, '<b>' + sel + '</b> (' + nh(sel) + ') सही है। ' + st.wh]);
        si++; showClue(); focusOn(here);
      } else {
        const a = DT_POS[st.a], b = DT_POS[sel], d = Math.abs(a.p - b.p) + Math.abs(a.g - b.g);
        const temp = d <= 1 ? ['🔥 Burning hot — right next door!', '🔥 बहुत गर्म — बिल्कुल पास!'] : d <= 3 ? ['♨️ Warm — close to the target.', '♨️ गुनगुना — लक्ष्य के क़रीब।'] : d <= 6 ? ['🌤 Cool — keep exploring.', '🌤 ठंडा — खोज जारी रखें।'] : ['🧊 Cold — far from the target.', '🧊 बहुत ठंडा — लक्ष्य से दूर।'];
        ctx.bad(['<b>' + sel + '</b> is not the answer. ' + temp[0], '<b>' + sel + '</b> उत्तर नहीं है। ' + temp[1]]);
      }
    }
    ctx.stage.onclick = (e) => {
      if (locked) return;
      const t = e.target.closest ? e.target.closest('[data-el],[data-act]') : null;
      if (!t) return;
      if (t.hasAttribute('data-el')) {
        sel = t.getAttribute('data-el'); sfx.tap(); const d = DT_POS[sel];
        $('sel').innerHTML = bi('Selected: <b>' + sel + '</b> — ' + d.name + ' · Z = ' + d.z + ' · Period ' + d.p + ', Group ' + d.g, 'चुना गया: <b>' + sel + '</b> — ' + d.hi + ' · Z = ' + d.z + ' · आवर्त ' + d.p + ', वर्ग ' + d.g);
        $('lock').disabled = false; paint();
      } else if (t.getAttribute('data-act') === 'scan') {
        scans++; scanSet = C.steps[si].am; scanT = performance.now(); sfx.pop();
        const r = $('radar'); r.classList.remove('go'); void r.offsetWidth; r.classList.add('go');
        focusOn(scanSet[0]); paint();
        ctx.say(['🔍 Radar sweep: the candidate elements are highlighted. One of them is the answer.', '🔍 रडार स्कैन: संभावित तत्व चिह्नित हैं। इनमें से एक ही उत्तर है।'], 'info');
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

  /* isometric crate (x,y = bottom-centre) */
  function mfCrate(g, x, y, col, txt, waste) {
    g.fillStyle = shade(col, -0.18); g.fillRect(x - 9, y - 14, 14, 14);
    g.fillStyle = shade(col, -0.55); g.beginPath(); g.moveTo(x + 5, y); g.lineTo(x + 10, y - 3); g.lineTo(x + 10, y - 17); g.lineTo(x + 5, y - 14); g.closePath(); g.fill();
    g.fillStyle = shade(col, 0.4); g.beginPath(); g.moveTo(x - 9, y - 14); g.lineTo(x - 4, y - 17); g.lineTo(x + 10, y - 17); g.lineTo(x + 5, y - 14); g.closePath(); g.fill();
    g.strokeStyle = waste ? PAL.red2 : 'rgba(0,0,0,.55)'; g.lineWidth = waste ? 1.6 : 1; g.strokeRect(x - 8.5, y - 13.5, 13, 13);
    g.fillStyle = '#E6EDF3'; g.fillRect(x - 7, y - 10, 10, 7);
    g.fillStyle = '#0D1117'; g.font = '800 5.4px ui-monospace,monospace'; g.textAlign = 'center'; g.fillText(subs(txt), x - 2, y - 4.6);
  }

  GAMES.molefactory = function (ctx, mode) {
    const task = ctx.pick(MF_POOL[mode]), rx = MF_RX[task.k];
    const unit = mode === 'hard' ? 'g' : 'mol', unitHi = unit === 'g' ? 'ग्राम' : 'मोल';
    const names = rx.r.map((x) => x[1]), multi = rx.r.length > 1;
    const feed = {}; names.forEach((f) => { feed[f] = mode === 'easy' ? 0 : task.f[f]; });
    const mainP = mode === 'easy' ? rx.p[0][1] : null;
    const toMol = (f, v) => (unit === 'g' ? v / MF_MM[f] : v);
    const unitOf = (f, mol) => (unit === 'g' ? mol * MF_MM[f] : mol);
    let lrSel = null, busy = false, over = false;
    const allSp = names.concat(rx.p.map((x) => x[1]));
    const COLS = [PAL.blue2, PAL.amber2], PCOL = [PAL.em2, '#C9D1D9'];

    let order;
    if (mode === 'easy') order = bi('📦 <b>Production order:</b> make exactly <b>' + task.T + ' mol</b> of ' + chem(mainP) + ' with <b>zero wasted</b> reactant. Load the hoppers, choose the limiting reagent (or <i>Exact mix</i>) and run the line.',
      '📦 <b>उत्पादन आदेश:</b> ठीक <b>' + task.T + ' मोल</b> ' + chem(mainP) + ' बनाएँ, <b>बिना किसी अभिकारक की बर्बादी</b> के। हॉपर भरें, सीमांत अभिकर्मक (limiting reagent) चुनें (या <i>सटीक मिश्रण</i>) और लाइन चलाएँ।');
    else order = bi('📦 <b>Hopper stock:</b> ' + names.map((f) => '<b>' + task.f[f] + ' ' + unit + ' ' + chem(f) + '</b>').join(' and ') + '. ' + (multi ? 'Predict the limiting reagent, the yield and the excess left over, ' : 'Predict the mass of each product ') + 'then run the line to check.',
      '📦 <b>हॉपर स्टॉक:</b> ' + names.map((f) => '<b>' + task.f[f] + ' ' + unitHi + ' ' + chem(f) + '</b>').join(' और ') + '। ' + (multi ? 'सीमांत अभिकर्मक, उपज (yield) और बचा हुआ आधिक्य अनुमानित करें, ' : 'प्रत्येक उत्पाद का द्रव्यमान अनुमानित करें, ') + 'फिर जाँचने के लिए लाइन चलाएँ।');
    let ui = '';
    if (mode === 'easy') {
      ui += '<div class="mf-hop">' + names.map((f, i) => '<div class="mf-h"><div><span style="color:' + COLS[i] + '">■</span> ' + chem(f) + '</div><div class="mf-st"><button data-f="' + f + '" data-d="-1">−</button><b data-r="v-' + f + '">0</b><span>' + bi('mol', 'मोल') + '</span><button data-f="' + f + '" data-d="1">+</button></div></div>').join('') + '</div>';
    } else {
      const asks = task.ask.map((f, i) => '<label class="mf-q"><span>' + bi('Yield of ' + chem(f) + ' (' + unit + ')', chem(f) + ' की उपज (' + unitHi + ')') + '</span><input type="number" inputmode="decimal" step="any" data-q="p' + i + '" placeholder="?"></label>').join('');
      ui += '<div class="mf-ans">' + asks + (multi ? '<label class="mf-q"><span>' + bi('Excess reactant left (' + unit + ')', 'बचा आधिक्य अभिकारक (' + unitHi + ')') + '</span><input type="number" inputmode="decimal" step="any" data-q="ex" placeholder="?"></label>' : '') + '</div>';
    }
    if (multi) ui += '<div class="mf-lr"><span>' + bi('Limiting reagent:', 'सीमांत अभिकर्मक:') + '</span>' + names.map((f) => '<button class="cge-chip" data-lr="' + f + '">' + chem(f) + '</button>').join('') + '<button class="cge-chip" data-lr="EXACT">' + bi('Exact mix ⚖️', 'सटीक मिश्रण ⚖️') + '</button></div>';
    ctx.stage.innerHTML =
      '<div class="cge-card">' + order + '</div>' +
      '<div class="mf-eq">' + chem(mfEq(rx)) + '</div>' +
      '<div class="mf-mm">' + allSp.map((f) => '<span>' + chem(f) + ' = ' + MF_MM[f] + ' g/mol</span>').join('') + '</div>' +
      '<div class="mf-cv"></div><div class="mf-legend">' + names.map((f, i) => '<span><i style="background:' + COLS[i] + '"></i>' + chem(f) + '</span>').join('') + rx.p.map((x, i) => '<span><i style="background:' + PCOL[i] + '"></i>' + chem(x[1]) + '</span>').join('') + '<span><i class="w"></i>' + bi('Excess / waste', 'आधिक्य / बर्बादी') + '</span></div>' +
      ui + '<div class="fg-acts"><button class="cge-btn pri" data-act="run" data-r="run">' + bi('⚙️ Run Factory Conveyor', '⚙️ फ़ैक्टरी कन्वेयर चलाएँ') + '</button></div><div data-r="res"></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, 200);
    ctx.stage.querySelector('.mf-cv').appendChild(cvh.cv);
    ctx.moveFmt = (m) => bi('Moves ' + m, 'चालें ' + m);
    ctx.hintFn = () => mode === 'easy'
      ? ['The coefficients of a balanced equation are <b>mole ratios</b>: ' + chem(mfEq(rx)) + '. Moles of a reactant needed = (target moles of ' + chem(mainP) + ') × (reactant coefficient ÷ ' + chem(mainP) + ' coefficient). Feeding exactly these amounts leaves nothing in excess — an exact mix.',
        'संतुलित समीकरण के गुणांक <b>मोल अनुपात</b> होते हैं: ' + chem(mfEq(rx)) + '। आवश्यक अभिकारक के मोल = (' + chem(mainP) + ' के लक्ष्य मोल) × (अभिकारक का गुणांक ÷ ' + chem(mainP) + ' का गुणांक)। ठीक इतनी मात्रा भरने पर कुछ भी आधिक्य में नहीं बचता — यही सटीक मिश्रण है।']
      : mode === 'moderate'
        ? ['Divide each given amount (mol) by its coefficient. The <b>smaller quotient</b> belongs to the limiting reagent and fixes the extent of reaction. Yield = product coefficient × extent; excess = given − coefficient × extent.',
          'दी गई प्रत्येक मात्रा (मोल) को उसके गुणांक से भाग दें। <b>छोटा भागफल</b> सीमांत अभिकर्मक का होता है और अभिक्रिया की सीमा (extent) तय करता है। उपज = उत्पाद का गुणांक × extent; आधिक्य = दी गई मात्रा − गुणांक × extent।']
        : ['Convert mass to moles with <b>n = m ÷ M</b> (molar masses are shown above), apply the mole ratio from the balanced equation (limiting reagent first, if there are two reactants), then convert back with <b>m = n × M</b>.',
          '<b>n = m ÷ M</b> से द्रव्यमान को मोल में बदलें (मोलर द्रव्यमान ऊपर दिए हैं), संतुलित समीकरण का मोल अनुपात लगाएँ (दो अभिकारक हों तो पहले सीमांत अभिकर्मक), फिर <b>m = n × M</b> से वापस द्रव्यमान निकालें।'];

    /* ----- plant scene state ----- */
    const scene = { phase: 'idle', clock: 0, pk: [], pend: [], arrived: 0, need: 0, outLeft: 0, gear: 0, rt: 0, spawned: {}, total: {}, onDone: null, prodN: 0, wasteN: 0, press: 0 };
    const hx = names.length === 1 ? [88] : [46, 116];
    function addPk(pts, sp, col, kind, txt, onEnd) { scene.pk.push({ x: pts[0][0], y: pts[0][1], pts: pts, i: 1, sp: sp, col: col, kind: kind, txt: txt, onEnd: onEnd }); }
    function startRun(truth, done) {
      const feedMol = {}; names.forEach((f) => { feedMol[f] = toMol(f, feed[f]); });
      const mx = Math.max.apply(null, names.map((f) => feedMol[f]).concat(Object.keys(truth.prod).map((k) => truth.prod[k]), names.map((f) => truth.excess[f])));
      const u = Math.max(1, Math.ceil(mx / 8)), bx = (m) => (m > 1e-9 ? Math.max(1, Math.round(m / u)) : 0);
      Object.assign(scene, { phase: 'feed', clock: 0, pk: [], pend: [], arrived: 0, need: 0, outLeft: 0, spawned: {}, total: {}, onDone: done, prodN: 0, wasteN: 0 });
      let tt = 0.15; const lists = names.map((f) => bx(feedMol[f])); const mxl = Math.max.apply(null, lists.concat(0));
      names.forEach((f, i) => { scene.total[f] = lists[i]; scene.spawned[f] = 0; scene.need += lists[i]; });
      for (let k = 0; k < mxl; k++) names.forEach((f, i) => {
        if (k < lists[i]) { scene.pend.push({ t: tt, f: () => { scene.spawned[f]++; addPk([[hx[i], 74], [hx[i], 118], [172, 118]], 150, COLS[i], 'r', f, () => { scene.arrived++; }); } }); tt += 0.26; }
      });
      scene.truth = truth; scene.bx = bx;
      if (!scene.need) { scene.phase = 'done'; done(); }
    }
    function reactDone() {
      const truth = scene.truth; let tt = scene.clock + 0.05;
      scene.phase = 'out';
      rx.p.forEach((x, i) => { const n = scene.bx(truth.prod[x[1]]); for (let k = 0; k < n; k++) { scene.outLeft++; scene.pend.push({ t: tt, f: () => addPk([[262, 118], [304, 118], [304, 166]], 95, PCOL[i], 'p', x[1], () => { scene.outLeft--; scene.prodN++; }) }); tt += 0.24; } });
      names.forEach((f, i) => { const n = scene.bx(truth.excess[f]); for (let k = 0; k < n; k++) { scene.outLeft++; scene.pend.push({ t: tt, f: () => addPk([[214, 164], [214, 184]], 90, COLS[i], 'w', f, () => { scene.outLeft--; scene.wasteN++; }) }); tt += 0.24; } });
    }
    const label = (f) => (mode === 'easy' ? feed[f] + ' ' + L('mol', 'मोल') : feed[f] + ' ' + L(unit, unitHi));
    ctx.loop((t, dt) => {
      const g = cvh.g;
      blueprint(g, 340, 200);
      if (scene.phase !== 'idle' && scene.phase !== 'done') {
        scene.clock += dt;
        for (let i = scene.pend.length - 1; i >= 0; i--) if (scene.pend[i].t <= scene.clock) { const p = scene.pend.splice(i, 1)[0]; p.f(); }
        if (scene.phase === 'feed' && scene.arrived >= scene.need && !scene.pend.length) { scene.phase = 'react'; scene.rt = scene.clock; }
        if (scene.phase === 'react' && scene.clock - scene.rt > 1.0) reactDone();
        if (scene.phase === 'out' && !scene.pend.length && scene.outLeft <= 0 && !scene.pk.length) { scene.phase = 'done'; if (scene.onDone) scene.onDone(); }
      }
      const hot = scene.phase === 'react', run = scene.phase === 'feed' || hot || scene.phase === 'out';
      scene.gear += dt * (hot ? 9 : run ? 3 : 0.5);
      scene.press += ((hot ? 0.92 : scene.phase === 'feed' ? 0.35 + 0.3 * (scene.need ? scene.arrived / scene.need : 0) : 0.08) - scene.press) * 0.06;
      g.fillStyle = '#0a0d12'; g.fillRect(0, 186, 340, 14);
      /* ---- belts with segmented rollers ---- */
      [[8, 176], [256, 334]].forEach((b) => {
        g.fillStyle = '#12161c'; g.fillRect(b[0], 118, b[1] - b[0], 10); g.fillStyle = '#262C36'; g.fillRect(b[0], 118, b[1] - b[0], 2);
        const off = run ? (t / 30) % 12 : 0;
        for (let x = b[0] - 12 + off; x < b[1]; x += 12) if (x >= b[0]) { g.fillStyle = '#30363D'; g.fillRect(x, 121, 6, 4); }
        for (let x = b[0] + 8; x < b[1] - 4; x += 20) {
          g.fillStyle = steel(g, x - 5, 128, x + 5, 128); g.beginPath(); g.arc(x, 128, 5, 0, 6.2832); g.fill();
          g.strokeStyle = '#05070a'; g.lineWidth = 1; g.beginPath(); g.moveTo(x, 128); g.lineTo(x + Math.cos(scene.gear) * 4, 128 + Math.sin(scene.gear) * 4); g.stroke();
        }
        g.fillStyle = '#1b2027'; [b[0] + 12, (b[0] + b[1]) / 2, b[1] - 14].forEach((lx) => g.fillRect(lx, 133, 5, 53));
      });
      /* ---- stainless hoppers with sight-glass level tubes ---- */
      names.forEach((f, i) => {
        const x = hx[i], tot = scene.total[f], frac = scene.phase === 'idle' || scene.phase === 'done' ? (mode === 'easy' ? Math.min(1, feed[f] / 12) : 1) : (tot ? 1 - scene.spawned[f] / tot : 0);
        g.fillStyle = '#12161c'; g.fillRect(x - 5, 56, 10, 62);
        const pg = g.createLinearGradient(x - 5, 0, x + 5, 0); pg.addColorStop(0, '#59616b'); pg.addColorStop(0.45, '#d0d7de'); pg.addColorStop(1, '#4b535d');
        g.fillStyle = pg; g.fillRect(x - 4, 56, 8, 60);
        g.strokeStyle = '#05070a'; g.lineWidth = 1; g.beginPath(); g.arc(x, 88, 7, 0, 6.2832); g.stroke(); g.fillStyle = PAL.red; g.beginPath(); g.arc(x, 88, 4.4, 0, 6.2832); g.fill();
        g.fillStyle = steel(g, x - 28, 0, x + 28, 0); g.beginPath(); g.moveTo(x - 28, 22); g.lineTo(x + 28, 22); g.lineTo(x + 5, 58); g.lineTo(x - 5, 58); g.closePath(); g.fill();
        g.fillStyle = steel(g, x - 28, 0, x + 28, 0); g.beginPath(); g.ellipse(x, 22, 28, 6, 0, 0, 6.2832); g.fill();
        g.fillStyle = '#0a0d12'; g.beginPath(); g.ellipse(x, 22, 24, 4, 0, 0, 6.2832); g.fill();
        g.fillStyle = COLS[i]; g.beginPath(); g.ellipse(x, 22 + (1 - frac) * 4, 22, 3.2, 0, 0, 6.2832); g.fill();
        /* sight glass */
        g.fillStyle = '#05070a'; rr(g, x + 24, 18, 11, 38, 3); g.fill(); g.strokeStyle = '#8b949e'; g.lineWidth = 1.2; g.stroke();
        g.fillStyle = COLS[i]; g.fillRect(x + 26, 54 - 34 * frac, 7, 34 * frac);
        g.strokeStyle = 'rgba(230,237,243,.55)'; g.lineWidth = 0.8; for (let k = 0; k < 5; k++) { g.beginPath(); g.moveTo(x + 24, 22 + k * 8); g.lineTo(x + 27, 22 + k * 8); g.stroke(); }
        g.fillStyle = '#0D1117'; rr(g, x - 20, 62, 40, 13, 3); g.fill(); g.strokeStyle = '#30363D'; g.stroke();
        g.fillStyle = PAL.amber2; g.font = cf(9, 800); g.textAlign = 'center'; g.fillText(label(f), x, 72);
      });
      /* ---- reaction vessel: windowed, stirrer, pressure gauge ---- */
      g.fillStyle = '#1b2027'; [186, 214, 238].forEach((lx) => g.fillRect(lx, 160, 6, 26));
      g.fillStyle = steel(g, 182, 0, 250, 0); g.fillRect(184, 62, 64, 98);
      g.fillStyle = steel(g, 182, 0, 250, 0); g.beginPath(); g.ellipse(216, 62, 32, 8, 0, 0, 6.2832); g.fill();
      g.fillStyle = '#59616b'; g.beginPath(); g.ellipse(216, 160, 32, 8, 0, 0, Math.PI); g.fill();
      g.fillStyle = '#3b434d'; g.beginPath(); g.ellipse(216, 62, 24, 5, 0, 0, 6.2832); g.fill();
      g.fillStyle = '#12161c'; rr(g, 205, 44, 22, 14, 3); g.fill(); g.strokeStyle = '#59616b'; g.lineWidth = 1; g.stroke();
      g.fillStyle = '#9AA4AF'; g.fillRect(214, 56, 4, 10);
      g.fillStyle = '#05070a'; rr(g, 196, 80, 40, 56, 8); g.fill(); g.strokeStyle = '#c9d1d9'; g.lineWidth = 2.5; g.stroke();
      const liq = hot ? '#9a5b0e' : scene.phase === 'done' ? '#176a38' : run ? '#243a5e' : '#151a21';
      g.fillStyle = liq; rr(g, 198, 96, 36, 38, 6); g.fill();
      g.strokeStyle = '#8b949e'; g.lineWidth = 2; g.beginPath(); g.moveTo(216, 66); g.lineTo(216, 128); g.stroke();
      const bw = 14 * Math.abs(Math.cos(scene.gear));
      g.fillStyle = '#c9d1d9'; g.fillRect(216 - bw, 121, bw * 2, 3); g.fillRect(216 - bw * 0.8, 107, bw * 1.6, 3);
      g.fillStyle = 'rgba(255,255,255,.14)'; g.fillRect(200, 83, 5, 50);
      g.fillStyle = '#0D1117'; g.font = cf(8, 800); g.textAlign = 'center'; g.fillText(L('REACTOR', 'रिएक्टर'), 216, 152);
      const gx = 243, gy = 48;
      g.fillStyle = '#05070a'; g.beginPath(); g.arc(gx, gy, 12, 0, 6.2832); g.fill();
      g.strokeStyle = steel(g, gx - 12, gy - 12, gx + 12, gy + 12); g.lineWidth = 2.5; g.beginPath(); g.arc(gx, gy, 11, 0, 6.2832); g.stroke();
      g.fillStyle = '#0f141b'; g.beginPath(); g.arc(gx, gy, 9, 0, 6.2832); g.fill();
      for (let k = 0; k <= 6; k++) { const a = (150 + k * 40) * Math.PI / 180; g.strokeStyle = k >= 5 ? PAL.red2 : '#8b949e'; g.lineWidth = 1; g.beginPath(); g.moveTo(gx + Math.cos(a) * 6.5, gy + Math.sin(a) * 6.5); g.lineTo(gx + Math.cos(a) * 8.5, gy + Math.sin(a) * 8.5); g.stroke(); }
      const pa = (150 + scene.press * 240) * Math.PI / 180;
      g.strokeStyle = PAL.red2; g.lineWidth = 1.6; g.beginPath(); g.moveTo(gx, gy); g.lineTo(gx + Math.cos(pa) * 8, gy + Math.sin(pa) * 8); g.stroke();
      g.fillStyle = '#c9d1d9'; g.beginPath(); g.arc(gx, gy, 1.6, 0, 6.2832); g.fill();
      /* ---- product rack & waste bin ---- */
      g.strokeStyle = PAL.em2; g.lineWidth = 2; g.beginPath(); g.moveTo(286, 142); g.lineTo(286, 186); g.lineTo(334, 186); g.lineTo(334, 142); g.stroke();
      for (let k = 0; k < Math.min(scene.prodN, 6); k++) mfCrate(g, 304 + (k % 2) * 17, 186 - Math.floor(k / 2) * 15, PCOL[0], rx.p[0][1], false);
      g.fillStyle = PAL.em2; g.font = cf(8, 800); g.textAlign = 'center'; g.fillText(L('PRODUCT', 'उत्पाद'), 310, 197);
      g.fillStyle = '#12161c'; g.fillRect(190, 166, 48, 20); g.strokeStyle = PAL.red2; g.lineWidth = 2; g.strokeRect(190, 166, 48, 20);
      for (let k = 0; k < Math.min(scene.wasteN, 3); k++) mfCrate(g, 203 + k * 14, 186, '#6e7681', '·', true);
      g.fillStyle = PAL.red2; g.fillText(L('WASTE', 'अपशिष्ट'), 214, 197);
      /* ---- crates in transit ---- */
      for (let i = scene.pk.length - 1; i >= 0; i--) {
        const p = scene.pk[i], tx = p.pts[p.i][0], ty = p.pts[p.i][1], dx = tx - p.x, dy = ty - p.y, d = Math.hypot(dx, dy), st = p.sp * dt;
        if (d <= st) { p.x = tx; p.y = ty; p.i++; if (p.i >= p.pts.length) { scene.pk.splice(i, 1); if (p.onEnd) p.onEnd(); continue; } }
        else { p.x += dx / d * st; p.y += dy / d * st; }
        mfCrate(g, p.x, p.y, p.col, p.txt, p.kind === 'w');
      }
      g.textAlign = 'center';
    });

    /* ----- worked solution & verdict ----- */
    function worked(truth, feedMol) {
      const E = [], H = [], ln = (e, h) => { E.push(e); H.push(h); };
      names.forEach((f) => { const s = unit === 'g' ? 'n(' + chem(f) + ') = ' + feed[f] + ' ÷ ' + MF_MM[f] + ' = ' + num(feedMol[f]) + ' mol' : 'n(' + chem(f) + ') = ' + num(feedMol[f]) + ' mol'; ln(s, s.replace(/ mol$/, ' मोल')); });
      const rat = rx.r.map((x) => num(feedMol[x[1]] / x[0]) + ' (' + chem(x[1]) + ')').join(', ');
      if (multi) ln('Ratios n ÷ coefficient: ' + rat + ' → ' + (truth.lr === 'EXACT' ? 'equal, so an <b>exact mix</b>' : '<b>' + chem(truth.lr) + '</b> is limiting') + '; extent = ' + num(truth.ext),
        'अनुपात n ÷ गुणांक: ' + rat + ' → ' + (truth.lr === 'EXACT' ? 'बराबर हैं, अतः <b>सटीक मिश्रण</b>' : '<b>' + chem(truth.lr) + '</b> सीमांत है') + '; extent = ' + num(truth.ext));
      else ln('Extent of reaction = ' + num(truth.ext) + ' mol', 'अभिक्रिया की सीमा (extent) = ' + num(truth.ext) + ' मोल');
      rx.p.forEach((x) => {
        const base = 'n(' + chem(x[1]) + ') = ' + x[0] + ' × ' + num(truth.ext) + ' = ' + num(truth.prod[x[1]]);
        ln(base + ' mol' + (unit === 'g' ? ' → ' + num(truth.prod[x[1]] * MF_MM[x[1]]) + ' g' : ''), base + ' मोल' + (unit === 'g' ? ' → ' + num(truth.prod[x[1]] * MF_MM[x[1]]) + ' ग्राम' : ''));
      });
      return '<div class="mf-work">' + bi(E.join('<br>'), H.join('<br>')) + '</div>';
    }
    function results(truth) {
      const ex = names.filter((f) => truth.excess[f] > 1e-9);
      const y = rx.p.map((x) => num(truth.prod[x[1]]) + ' mol ' + chem(x[1]) + ' (' + num(truth.prod[x[1]] * MF_MM[x[1]]) + ' g)').join(' + ');
      const yh = rx.p.map((x) => num(truth.prod[x[1]]) + ' मोल ' + chem(x[1]) + ' (' + num(truth.prod[x[1]] * MF_MM[x[1]]) + ' ग्राम)').join(' + ');
      const e = ex.length ? ex.map((f) => chem(f) + ' ' + num(truth.excess[f]) + ' mol (' + num(truth.excess[f] * MF_MM[f]) + ' g)').join(', ') : 'none — zero waste ✨';
      const eh = ex.length ? ex.map((f) => chem(f) + ' ' + num(truth.excess[f]) + ' मोल (' + num(truth.excess[f] * MF_MM[f]) + ' ग्राम)').join(', ') : 'कोई नहीं — शून्य बर्बादी ✨';
      return '<div class="mf-res"><div>' + bi('<b>Limiting reagent:</b> ' + (truth.lr === 'EXACT' ? 'none — exact stoichiometric mix' : chem(truth.lr)), '<b>सीमांत अभिकर्मक:</b> ' + (truth.lr === 'EXACT' ? 'कोई नहीं — सटीक रससमीकरणमितीय मिश्रण' : chem(truth.lr))) + '</div>' +
        '<div>' + bi('<b>Yield:</b> ' + y, '<b>उपज:</b> ' + yh) + '</div><div>' + bi('<b>Excess / waste:</b> ' + e, '<b>आधिक्य / बर्बादी:</b> ' + eh) + '</div></div>';
    }
    const near = (a, b) => Math.abs(a - b) <= Math.max(0.02, 0.006 * Math.abs(b));
    function judge(truth) {
      const bad = [];
      if (multi && lrSel !== truth.lr) bad.push(['limiting reagent', 'सीमांत अभिकर्मक']);
      if (mode === 'easy') {
        if (Math.abs(truth.prod[mainP] - task.T) > 1e-9) bad.push(['yield (' + num(truth.prod[mainP]) + ' mol, ordered ' + task.T + ' mol)', 'उपज (' + num(truth.prod[mainP]) + ' मोल, आदेश ' + task.T + ' मोल)']);
        if (names.some((f) => truth.excess[f] > 1e-9)) bad.push(['waste (order says zero)', 'बर्बादी (आदेश में शून्य है)']);
      } else {
        task.ask.forEach((f, i) => { const v = parseFloat(ctx.stage.querySelector('[data-q="p' + i + '"]').value); if (!near(v, unitOf(f, truth.prod[f]))) bad.push(['yield of ' + chem(f), chem(f) + ' की उपज']); });
        if (multi) { const v = parseFloat(ctx.stage.querySelector('[data-q="ex"]').value); const exv = Math.max.apply(null, names.map((f) => unitOf(f, truth.excess[f]))); if (!near(v, exv)) bad.push(['excess left', 'बचा आधिक्य']); }
      }
      return bad;
    }
    function runLine() {
      if (busy || over) return;
      const feedMol = {}; names.forEach((f) => { feedMol[f] = toMol(f, feed[f]); });
      if (mode === 'easy') {
        if (!names.some((f) => feed[f] > 0)) { ctx.say(['Load at least one hopper first.', 'पहले कम से कम एक हॉपर भरें।'], 'info'); return; }
      } else {
        const ins = ctx.stage.querySelectorAll('[data-q]');
        for (let i = 0; i < ins.length; i++) if (!isFinite(parseFloat(ins[i].value))) { ctx.say(['Fill in every answer box first.', 'पहले हर उत्तर-बॉक्स भरें।'], 'info'); return; }
      }
      if (multi && !lrSel) { ctx.say(['Choose the limiting reagent (or <b>Exact mix</b>) first.', 'पहले सीमांत अभिकर्मक (या <b>सटीक मिश्रण</b>) चुनें।'], 'info'); return; }
      busy = true; ctx.move(); $('run').disabled = true; ctx.say(['⚙️ Running the line…', '⚙️ लाइन चल रही है…'], 'info'); $('res').innerHTML = '';
      const truth = mfSolve(rx, feedMol);
      startRun(truth, () => {
        busy = false;
        const bad = judge(truth);
        $('res').innerHTML = results(truth);
        if (!bad.length) {
          over = true;
          ctx.win({
            concept: mode === 'easy' ? ['Mole ratios from a balanced equation', 'संतुलित समीकरण से मोल अनुपात'] : mode === 'moderate' ? ['Limiting reagent & excess reactant', 'सीमांत अभिकर्मक व आधिक्य अभिकारक'] : ['Mass ↔ mole ↔ mass stoichiometry (n = m ÷ M)', 'द्रव्यमान ↔ मोल ↔ द्रव्यमान रससमीकरणमिति (n = m ÷ M)'],
            detail: ['Yield ' + rx.p.map((x) => num(truth.prod[x[1]]) + ' mol ' + chem(x[1])).join(' + ') + '.', 'उपज ' + rx.p.map((x) => num(truth.prod[x[1]]) + ' मोल ' + chem(x[1])).join(' + ') + '।']
          });
          return;
        }
        ctx.bad(['Check your <b>' + bad.map((b) => b[0]).join(', ') + '</b>.', 'अपने <b>' + bad.map((b) => b[1]).join(', ') + '</b> जाँचें।']);
        if (mode === 'easy') { $('run').disabled = false; }
        else {
          over = true; $('res').innerHTML += worked(truth, feedMol) + '<div class="fg-acts"><button class="cge-btn pri" data-act="fresh">' + bi('🔁 Try fresh numbers', '🔁 नई संख्याएँ आज़माएँ') + '</button></div>';
        }
      });
    }
    ctx.stage.onclick = (e) => {
      const t = e.target.closest ? e.target.closest('[data-f],[data-lr],[data-act]') : null;
      if (!t) return;
      if (t.hasAttribute('data-act')) { if (t.getAttribute('data-act') === 'fresh') ctx.restart(); else runLine(); return; }
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
      { n: 'Propane', nh: 'प्रोपेन', f: 'C3H8', s: 'CCC', cond: 'CH₃–CH₂–CH₃', hint: 'Alkanes follow CₙH₂ₙ₊₂ with only single bonds. Three carbons in a row: the two end carbons become CH₃, the middle one CH₂.', hh: 'एल्केन का सूत्र CₙH₂ₙ₊₂ है और इसमें केवल एकल आबंध होते हैं। तीन कार्बन एक पंक्ति में: दोनों सिरों के कार्बन CH₃ और बीच वाला CH₂ बनता है।' },
      { n: 'Butane', nh: 'ब्यूटेन', f: 'C4H10', s: 'CCCC', cond: 'CH₃–CH₂–CH₂–CH₃', hint: 'Four carbons in an unbranched chain; end carbons are CH₃, the two middle carbons are CH₂.', hh: 'चार कार्बन की सीधी श्रृंखला; सिरे के कार्बन CH₃ और बीच के दोनों कार्बन CH₂ हैं।' },
      { n: 'Propene', nh: 'प्रोपीन', f: 'C3H6', s: 'C=CC', cond: 'CH₂=CH–CH₃', hint: 'Alkenes (CₙH₂ₙ) contain one C=C. Put the double bond between C-1 and C-2; carbon uses 2 of its 4 bonds there, so it keeps fewer hydrogens.', hh: 'एल्कीन (CₙH₂ₙ) में एक C=C होता है। C-1 और C-2 के बीच द्विबंध रखें; यहाँ कार्बन अपने 4 आबंधों में से 2 का उपयोग करता है, इसलिए हाइड्रोजन कम रहते हैं।' },
      { n: 'But-1-ene', nh: 'ब्यूट-1-ईन', f: 'C4H8', s: 'C=CCC', cond: 'CH₂=CH–CH₂–CH₃', hint: 'The locant 1 means the double bond starts at carbon 1: CH₂=CH–CH₂–CH₃.', hh: 'स्थान-अंक 1 का अर्थ है कि द्विबंध कार्बन 1 से शुरू होता है: CH₂=CH–CH₂–CH₃।' },
      { n: 'But-2-ene', nh: 'ब्यूट-2-ईन', f: 'C4H8', s: 'CC=CC', cond: 'CH₃–CH=CH–CH₃', hint: 'The locant 2 places the double bond between C-2 and C-3, in the middle of the chain.', hh: 'स्थान-अंक 2 का अर्थ है कि द्विबंध C-2 और C-3 के बीच, श्रृंखला के मध्य में है।' },
      { n: 'Propyne', nh: 'प्रोपाइन', f: 'C3H4', s: 'C#CC', cond: 'CH≡C–CH₃', hint: 'Alkynes (CₙH₂ₙ₋₂) contain one C≡C: a triple bond uses 3 of carbon\'s 4 valencies, leaving 1 hydrogen on a terminal carbon.', hh: 'एल्काइन (CₙH₂ₙ₋₂) में एक C≡C होता है: त्रिबंध कार्बन की 4 संयोजकताओं में से 3 लेता है, सिरे वाले कार्बन पर 1 हाइड्रोजन बचता है।' },
      { n: 'But-1-yne', nh: 'ब्यूट-1-आइन', f: 'C4H6', s: 'C#CCC', cond: 'CH≡C–CH₂–CH₃', hint: 'Terminal triple bond between C-1 and C-2, followed by a CH₂ and a CH₃.', hh: 'C-1 और C-2 के बीच सिरे पर त्रिबंध, उसके बाद एक CH₂ और एक CH₃।' }
    ],
    moderate: [
      { n: '2-Methylpropane', nh: '2-मेथिलप्रोपेन', alt: 'isobutane', alth: 'आइसोब्यूटेन', f: 'C4H10', s: 'CC(C)C', cond: 'CH₃–CH(CH₃)–CH₃', o: ['2-Methylpropane', 'Butane', '2-Methylbutane', '1,1-Dimethylethane'], hint: 'The central carbon carries three other carbons, so it keeps only one hydrogen (CH). Longest chain: 3 carbons.', hh: 'केंद्रीय कार्बन पर तीन अन्य कार्बन जुड़े हैं, इसलिए उस पर केवल एक हाइड्रोजन बचता है (CH)। सबसे लंबी श्रृंखला: 3 कार्बन।', why: 'Longest chain = 3 C (propane) with a methyl on C-2 → 2-methylpropane (isobutane).', wh: 'सबसे लंबी श्रृंखला = 3 C (प्रोपेन), C-2 पर मेथिल → 2-मेथिलप्रोपेन (आइसोब्यूटेन)।' },
      { n: '2-Methylbutane', nh: '2-मेथिलब्यूटेन', alt: 'isopentane', alth: 'आइसोपेंटेन', f: 'C5H12', s: 'CC(C)CC', cond: 'CH₃–CH(CH₃)–CH₂–CH₃', o: ['2-Methylbutane', '3-Methylbutane', 'Pentane', '2,2-Dimethylbutane'], hint: 'Longest chain has 4 carbons; one CH₃ branch is attached to the second carbon from one end.', hh: 'सबसे लंबी श्रृंखला में 4 कार्बन हैं; एक CH₃ शाखा किसी सिरे से दूसरे कार्बन पर जुड़ी है।', why: 'Longest chain = 4 C; numbering from the end nearer the branch gives locant 2 (not 3) → 2-methylbutane.', wh: 'सबसे लंबी श्रृंखला = 4 C; शाखा के निकट वाले सिरे से क्रमांकन करने पर स्थान-अंक 2 (3 नहीं) → 2-मेथिलब्यूटेन।' },
      { n: '2,2-Dimethylpropane', nh: '2,2-डाइमेथिलप्रोपेन', alt: 'neopentane', alth: 'निओपेंटेन', f: 'C5H12', s: 'CC(C)(C)C', cond: 'CH₃–C(CH₃)₂–CH₃', o: ['2,2-Dimethylpropane', '2-Methylbutane', 'Pentane', '1,1,1-Trimethylethane'], hint: 'A central carbon bonded to four other carbons has no hydrogen left (a quaternary carbon).', hh: 'चार अन्य कार्बनों से जुड़े केंद्रीय कार्बन पर कोई हाइड्रोजन नहीं बचता (चतुर्थक कार्बन, quaternary carbon)।', why: 'Longest chain = 3 C (propane); two methyl groups both on C-2 → 2,2-dimethylpropane (neopentane).', wh: 'सबसे लंबी श्रृंखला = 3 C (प्रोपेन); दो मेथिल समूह दोनों C-2 पर → 2,2-डाइमेथिलप्रोपेन (निओपेंटेन)।' },
      { n: 'Pent-2-ene', nh: 'पेन्ट-2-ईन', f: 'C5H10', s: 'CC=CCC', cond: 'CH₃–CH=CH–CH₂–CH₃', o: ['Pent-2-ene', 'Pent-3-ene', 'Pent-1-ene', '2-Methylbut-2-ene'], hint: 'An unbranched five-carbon chain with one C=C between the 2nd and 3rd carbon.', hh: 'पाँच कार्बन की सीधी श्रृंखला जिसमें दूसरे और तीसरे कार्बन के बीच एक C=C है।', why: 'Number from the end nearer the double bond so it gets the lowest locant: 2 (not 3) → pent-2-ene.', wh: 'द्विबंध को न्यूनतम स्थान-अंक देने के लिए उस सिरे से क्रमांकन करें जो द्विबंध के निकट हो: 2 (3 नहीं) → पेन्ट-2-ईन।' },
      { n: '2-Methylpropene', nh: '2-मेथिलप्रोपीन', alt: 'isobutylene', alth: 'आइसोब्यूटिलीन', f: 'C4H8', s: 'C=C(C)C', cond: 'CH₂=C(CH₃)–CH₃', o: ['2-Methylpropene', 'But-1-ene', '2-Methylpropane', 'But-2-ene'], hint: 'A three-carbon chain with the C=C at one end and a methyl group on the middle carbon (which has no hydrogen).', hh: 'तीन कार्बन की श्रृंखला जिसके एक सिरे पर C=C है और मध्य कार्बन (जिस पर कोई H नहीं) पर मेथिल समूह है।', why: 'Longest chain containing C=C is 3 C (propene); methyl on C-2 → 2-methylpropene.', wh: 'C=C युक्त सबसे लंबी श्रृंखला 3 C (प्रोपीन) है; C-2 पर मेथिल → 2-मेथिलप्रोपीन।' }
    ],
    hard: [
      { n: 'Butan-2-ol', nh: 'ब्यूटेन-2-ऑल', f: 'C4H10O', s: 'CC(OH)CC', cond: 'CH₃–CH(OH)–CH₂–CH₃', o: ['Butan-2-ol', 'Butan-1-ol', 'Butan-3-ol', '2-Methylpropan-2-ol'], hint: 'The –OH group sits on an internal carbon of a four-carbon chain; that carbon keeps one hydrogen (CH).', hh: '–OH समूह चार कार्बन की श्रृंखला के आंतरिक कार्बन पर है; उस कार्बन पर एक हाइड्रोजन बचता है (CH)।', why: 'Suffix -ol; number from the end nearer –OH so it gets locant 2 (not 3) → butan-2-ol.', wh: 'प्रत्यय -ऑल (-ol); –OH के निकट वाले सिरे से क्रमांकन करने पर स्थान-अंक 2 (3 नहीं) → ब्यूटेन-2-ऑल।' },
      { n: 'Propanal', nh: 'प्रोपेनल', f: 'C3H6O', s: 'CCCHO', cond: 'CH₃–CH₂–CHO', o: ['Propanal', 'Propan-1-ol', 'Propanone', 'Propanoic acid'], hint: '–CHO (aldehyde) is always at the chain end and its carbon counts as C-1 of the parent chain.', hh: '–CHO (ऐल्डिहाइड) सदैव श्रृंखला के सिरे पर होता है और उसका कार्बन मूल श्रृंखला का C-1 गिना जाता है।', why: 'Three carbons including the –CHO carbon; suffix -al → propanal.', wh: 'तीन कार्बन (–CHO का कार्बन सहित); प्रत्यय -ऐल (-al) → प्रोपेनल।' },
      { n: 'Propanoic acid', nh: 'प्रोपेनोइक अम्ल', f: 'C3H6O2', s: 'CCCOOH', cond: 'CH₃–CH₂–COOH', o: ['Propanoic acid', 'Propanal', 'Ethanoic acid', 'Butanoic acid'], hint: 'The –COOH carbon is C-1 of the chain and is included in the count: CH₃–CH₂ plus the acid carbon = 3 carbons.', hh: '–COOH का कार्बन श्रृंखला का C-1 है और गिनती में शामिल है: CH₃–CH₂ और अम्ल कार्बन = 3 कार्बन।', why: 'Three carbons including the –COOH carbon; suffix -oic acid → propanoic acid.', wh: 'तीन कार्बन (–COOH का कार्बन सहित); प्रत्यय -ओइक अम्ल (-oic acid) → प्रोपेनोइक अम्ल।' },
      { n: '2-Chloropropane', nh: '2-क्लोरोप्रोपेन', f: 'C3H7Cl', s: 'CC(Cl)C', cond: 'CH₃–CHCl–CH₃', o: ['2-Chloropropane', '1-Chloropropane', '2-Chlorobutane', '1,2-Dichloropropane'], hint: 'Halogens are substituents (prefix chloro-). Here Cl is on the middle carbon of a three-carbon chain.', hh: 'हैलोजन प्रतिस्थापी (substituent) है (पूर्वलग्न क्लोरो-)। यहाँ Cl तीन कार्बन की श्रृंखला के मध्य कार्बन पर है।', why: 'Parent chain propane; chloro substituent on C-2 → 2-chloropropane.', wh: 'मूल श्रृंखला प्रोपेन; C-2 पर क्लोरो प्रतिस्थापी → 2-क्लोरोप्रोपेन।' },
      { n: 'Buta-1,3-diene', nh: 'ब्यूटा-1,3-डाइईन', f: 'C4H6', s: 'C=CC=C', cond: 'CH₂=CH–CH=CH₂', o: ['Buta-1,3-diene', 'Buta-1,2-diene', 'But-1-yne', 'Buta-2,3-diene'], hint: 'Two C=C bonds separated by one single bond (a conjugated diene) in a four-carbon chain.', hh: 'चार कार्बन की श्रृंखला में दो C=C एक एकल आबंध से अलग हैं (संयुग्मी डाईईन)।', why: 'Double bonds start at C-1 and C-3; two of them → buta-1,3-diene (note the extra "a").', wh: 'द्विबंध C-1 और C-3 से शुरू होते हैं; दो हैं → ब्यूटा-1,3-डाइईन (अतिरिक्त "आ" ध्यान दें)।' },
      { n: 'Pent-1-en-4-yne', nh: 'पेन्ट-1-ईन-4-आइन', f: 'C5H6', s: 'C=CCC#C', cond: 'CH₂=CH–CH₂–C≡CH', o: ['Pent-1-en-4-yne', 'Pent-4-en-1-yne', 'Pent-1-en-3-yne', 'Penta-1,4-diene'], hint: 'Five carbons: a C=C at one end, one CH₂ in the middle, and a C≡C at the other end.', hh: 'पाँच कार्बन: एक सिरे पर C=C, बीच में एक CH₂ और दूसरे सिरे पर C≡C।', why: 'Locants {1,4} either way; the tie is broken by giving the double bond the lower number → pent-1-en-4-yne.', wh: 'स्थान-अंक दोनों ओर से {1,4} आते हैं; बराबरी होने पर द्विबंध को कम अंक मिलता है → पेन्ट-1-ईन-4-आइन।' }
    ]
  };
  const CB_STYLE = { C: ['#4A5260', '#2EA043'], OH: ['#C0392F', '#7a1f18'], CHO: ['#BD561D', '#6e2f0e'], COOH: ['#BD561D', '#6e2f0e'], Cl: ['#2E8B47', '#14461f'], Br: ['#8B3A1D', '#4a1d0e'] };

  GAMES.carbon = function (ctx, mode) {
    const T = ctx.pick(CB_POOL[mode]), TG = cbParse(T.s);
    const COLS = 6, ROWS = 5, CELL = 340 / COLS, CHH = Math.round(CELL * ROWS), MAXN = 14;
    const nodes = [], edges = [];
    let tool = 'C', sel = null, drag = null, down = null, ops = 0, structOk = false, finished = false;
    const minOps = TG.nodes.length + TG.edges.reduce((a, e) => a + e[2], 0);

    const prompt = mode === 'easy'
      ? bi('Build <b>' + T.n + '</b> (' + subs(T.f) + '). Hydrogens fill automatically: H = 4 − bonds.', '<b>' + T.nh + ' (' + T.n + ')</b> (' + subs(T.f) + ') बनाएँ। हाइड्रोजन अपने-आप भर जाते हैं: H = 4 − आबंध।')
      : bi('Build <b>' + T.cond + '</b> (' + subs(T.f) + '), then choose its correct <b>IUPAC name</b>.', '<b>' + T.cond + '</b> (' + subs(T.f) + ') बनाएँ, फिर उसका सही <b>IUPAC नाम</b> चुनें।');
    ctx.stage.innerHTML =
      '<div class="cge-card">' + prompt + '<br><span class="cge-dim">' + bi('Tap a grid point to place the chosen atom/group. Tap one node, then another (or drag between them) to cycle the bond: single → double → triple → delete.', 'चुना हुआ परमाणु/समूह रखने के लिए ग्रिड बिंदु पर टैप करें। आबंध बदलने के लिए एक नोड और फिर दूसरे पर टैप करें (या दोनों के बीच खींचें): एकल → द्वि → त्रि → हटाएँ।') + '</span></div>' +
      '<div class="cb-tools">' + ['C', 'OH', 'CHO', 'COOH', 'Cl', 'Br'].map((t) => '<button class="cb-tool' + (t === 'C' ? ' on' : '') + '" data-t="' + t + '">' + (t === 'C' ? 'C' : '–' + t) + '</button>').join('') + '<button class="cb-tool" data-t="erase">🧽</button></div>' +
      '<div class="cb-cv"></div><div class="cb-live" data-r="live"></div>' +
      '<div class="fg-acts"><button class="cge-btn" data-act="clear">' + bi('↺ Clear', '↺ साफ़ करें') + '</button><button class="cge-btn pri" data-act="check">' + bi('✅ Check Structure', '✅ संरचना जाँचें') + '</button></div><div data-r="names"></div>';
    const $ = (n) => ctx.stage.querySelector('[data-r="' + n + '"]');
    const cvh = ctx.canvas(340, CHH);
    ctx.stage.querySelector('.cb-cv').appendChild(cvh.cv);
    ctx.moveFmt = (m) => bi('Edits ' + m, 'संपादन ' + m);
    ctx.setMoves(ctx.moveFmt(0));
    ctx.hintFn = () => [T.hint + ' Carbon is tetravalent: hydrogens on each carbon = 4 − (sum of bond orders). A carbon with more than 4 bonds is impossible (“Texas carbon”).', T.hh + ' कार्बन चतुःसंयोजी है: प्रत्येक कार्बन पर H = 4 − (आबंध कोटि का योग)। 4 से अधिक आबंध असंभव हैं (“टेक्सास कार्बन”)।'];

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
      $('live').innerHTML = tex ? bi('⚠ <b>Texas carbon!</b> A carbon cannot form more than 4 bonds.', '⚠ <b>टेक्सास कार्बन!</b> कार्बन 4 से अधिक आबंध नहीं बना सकता।')
        : bi('Your molecule: <b>' + (f === '—' ? f : subs(f)) + '</b> · target <b>' + subs(T.f) + '</b>', 'आपका अणु: <b>' + (f === '—' ? f : subs(f)) + '</b> · लक्ष्य <b>' + subs(T.f) + '</b>');
      ctx.setStatus(['🧪 ' + nodes.length + ' atoms', '🧪 ' + nodes.length + ' परमाणु']);
    }
    function edit() { ops++; ctx.move(); updateLive(); }
    function cycle(a, b) {
      const fa = nodes[a].t !== 'C', fb = nodes[b].t !== 'C', k = edgeOf(a, b);
      if (fa && fb) { ctx.say(['Functional groups attach to a carbon, not to each other.', 'क्रियात्मक समूह कार्बन से जुड़ते हैं, एक-दूसरे से नहीं।'], 'info'); return; }
      if (k < 0) {
        if ((fa && degree(a) >= 1) || (fb && degree(b) >= 1)) { ctx.say(['A functional group has just one attachment point.', 'क्रियात्मक समूह का जुड़ाव-बिंदु केवल एक होता है।'], 'info'); return; }
        edges.push({ a: a, b: b, o: 1 }); sfx.pop();
      } else if (fa || fb) edges.splice(k, 1);
      else { edges[k].o++; if (edges[k].o > 3) edges.splice(k, 1); sfx.pop(); }
      ctx.say(null); edit();
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
      if (nodes.length >= MAXN) { ctx.say(['That is plenty of atoms — try erasing one.', 'परमाणु काफ़ी हो गए — एक मिटाकर देखें।'], 'info'); return; }
      nodes.push({ c: c, r: r, t: tool }); sel = null; sfx.pop(); ctx.say(null); edit();
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
      $('names').innerHTML = '<div class="cge-card ok">' + bi('✅ Structure matches! Now pick the correct <b>IUPAC name</b>:', '✅ संरचना मेल खाती है! अब सही <b>IUPAC नाम</b> चुनें:') + '</div><div class="cb-opts">' + opts.map((o, i) => '<button class="cge-btn cb-opt" data-n="' + i + '">' + esc(o) + '</button>').join('') + '</div>';
      $('names').opts = opts;
    }
    function check() {
      if (finished) return;
      if (!nodes.length) { ctx.say(['Place some atoms on the grid first.', 'पहले ग्रिड पर कुछ परमाणु रखें।'], 'info'); return; }
      const G = graph(), bs = bsums();
      const ti = nodes.findIndex((n, i) => n.t === 'C' && bs[i] > 4);
      if (ti >= 0) { ctx.bad(['Texas carbon! A carbon cannot have more than <b>4 bonds</b> (this one has ' + bs[ti] + ').', 'टेक्सास कार्बन! कार्बन के <b>4 से अधिक आबंध</b> नहीं हो सकते (इसके ' + bs[ti] + ' हैं)।']); return; }
      const seen = {}, q = [0]; seen[0] = 1;
      while (q.length) { const x = q.pop(); edges.forEach((e) => { const y = e.a === x ? e.b : e.b === x ? e.a : -1; if (y >= 0 && !seen[y]) { seen[y] = 1; q.push(y); } }); }
      if (Object.keys(seen).length !== nodes.length) { ctx.bad(['Your atoms form <b>separate fragments</b>. A single molecule must be connected.', 'आपके परमाणु <b>अलग-अलग टुकड़े</b> बनाते हैं। एक अणु जुड़ा हुआ होना चाहिए।']); return; }
      const f = cbFormulaOf(G);
      if (f !== T.f) { ctx.bad(['Your formula is <b>' + subs(f) + '</b> but the target is <b>' + subs(T.f) + '</b>. Check the number of carbons, bonds and groups.', 'आपका सूत्र <b>' + subs(f) + '</b> है पर लक्ष्य <b>' + subs(T.f) + '</b> है। कार्बन, आबंध और समूहों की संख्या जाँचें।']); return; }
      if (!cbIso(G, TG)) { ctx.bad(['Right formula, wrong connectivity — check where the double/triple bond, branch or group sits.', 'सूत्र सही है, पर जुड़ाव ग़लत है — द्वि/त्रि-आबंध, शाखा या समूह की स्थिति जाँचें।']); return; }
      structOk = true; sel = null; ctx.say(null);
      if (mode === 'easy') { finished = true; finish(); } else names();
    }
    function finish() {
      ctx.win({
        effStars: ops <= minOps + 3 ? 3 : ops <= minOps + 8 ? 2 : 1,
        concept: mode === 'easy' ? ['Tetravalency of carbon: alkanes, alkenes & alkynes', 'कार्बन की चतुःसंयोजकता: एल्केन, एल्कीन व एल्काइन']
          : mode === 'moderate' ? ['Branched chains & IUPAC longest-chain / lowest-locant rules', 'शाखित श्रृंखलाएँ व IUPAC सबसे लंबी श्रृंखला / न्यूनतम स्थान-अंक नियम']
            : ['Functional groups & IUPAC suffixes, prefixes and locants', 'क्रियात्मक समूह व IUPAC प्रत्यय, पूर्वलग्न और स्थान-अंक'],
        detail: ['<b>' + esc(T.n) + '</b>' + (T.alt ? ' (' + T.alt + ')' : '') + ' — ' + T.cond + (T.why ? '<br>' + T.why : ''), '<b>' + T.nh + '</b>' + (T.alth ? ' (' + T.alth + ')' : '') + ' — ' + T.cond + (T.wh ? '<br>' + T.wh : '')]
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
        else { t.classList.add('wrong'); t.disabled = true; ctx.bad(['“' + esc(nm) + '” is not the IUPAC name of this structure.', '“' + esc(nm) + '” इस संरचना का IUPAC नाम नहीं है।']); }
      } else if (t.getAttribute('data-act') === 'clear') {
        if (structOk) return;
        nodes.length = 0; edges.length = 0; sel = null; ctx.move(); ctx.say(null); updateLive();
      } else check();
    };
    updateLive();

    ctx.loop((t) => {
      const g = cvh.g, bs = bsums();
      blueprint(g, 340, CHH);
      for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
        const x = (c + 0.5) * CELL, y = (r + 0.5) * CELL;
        g.strokeStyle = 'rgba(139,148,158,.45)'; g.lineWidth = 1; g.beginPath(); g.moveTo(x - 3, y); g.lineTo(x + 3, y); g.moveTo(x, y - 3); g.lineTo(x, y + 3); g.stroke();
      }
      edges.forEach((e) => {
        const p = center(nodes[e.a]), q = center(nodes[e.b]), dx = q.x - p.x, dy = q.y - p.y, len = Math.hypot(dx, dy) || 1, nx = -dy / len, ny = dx / len;
        const offs = e.o === 1 ? [0] : e.o === 2 ? [-3.8, 3.8] : [-6.5, 0, 6.5];
        offs.forEach((o) => rod(g, p.x + nx * o, p.y + ny * o, q.x + nx * o, q.y + ny * o, 2.1, 2.1, '#C9D1D9'));
      });
      if (drag && down && down.moved) {
        const p = center(nodes[drag.from]); g.setLineDash([5, 5]); g.strokeStyle = PAL.amber2; g.lineWidth = 2;
        g.beginPath(); g.moveTo(p.x, p.y); g.lineTo(drag.x, drag.y); g.stroke(); g.setLineDash([]);
      }
      nodes.forEach((n, i) => {
        const p = center(n), st = CB_STYLE[n.t], over = n.t === 'C' && bs[i] > 4;
        let lab = n.t, hcount = 0;
        if (n.t === 'C') { hcount = Math.max(0, 4 - bs[i]); lab = 'C' + (hcount ? 'H' + (hcount > 1 ? SUB[hcount] : '') : ''); }
        const w = lab.length > 3 ? 48 : 40, h = 26, x = p.x - w / 2, y = p.y - h / 2;
        capsule(g, x, y, w, h, over ? PAL.red : st[0], over ? '#ffb3b0' : sel === i ? PAL.amber2 : st[1]);
        if (sel === i) { g.strokeStyle = PAL.amber2; g.lineWidth = 2; g.setLineDash([4, 3]); rr(g, x - 4, y - 4, w + 8, h + 8, h / 2 + 4); g.stroke(); g.setLineDash([]); }
        g.fillStyle = '#fff'; g.font = nf(13, 800); g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(lab, p.x, p.y + 1); g.textBaseline = 'alphabetic';
        if (n.t === 'C') {
          const val = bs[i] + hcount;
          g.fillStyle = val > 4 ? PAL.red2 : PAL.em; g.beginPath(); g.arc(x + w - 2, y + 1, 8, 0, 6.2832); g.fill();
          g.strokeStyle = '#0D1117'; g.lineWidth = 1.5; g.stroke();
          g.fillStyle = '#fff'; g.font = nf(9, 800); g.textBaseline = 'middle'; g.fillText(String(val), x + w - 2, y + 1.5); g.textBaseline = 'alphabetic';
        }
        if (over) { g.fillStyle = PAL.red2; g.font = nf(9, 800); g.fillText('⚠ ' + bs[i], p.x, y - 6); }
      });
      if (!nodes.length) { g.fillStyle = 'rgba(190,200,215,.6)'; g.font = cf(13, 700); g.textAlign = 'center'; g.fillText(tool === 'C' ? L('Tap a dot to place a carbon', 'कार्बन रखने के लिए बिंदु पर टैप करें') : tool === 'erase' ? '—' : L('Tap a dot to place –' + tool, '–' + tool + ' रखने के लिए बिंदु पर टैप करें'), 170, CHH / 2); }
    });
  };

  /* ==========================================================================
     Data self-test (call window.ChemGamesEngine.selfTest() from the console)
     ========================================================================== */
  function selfTest() {
    const issues = [], bad = (m) => issues.push(m);
    const hiOk = (s, where) => { if (!s || !/[\u0900-\u097F]/.test(s)) bad('missing Hindi: ' + where); };
    Object.keys(BL_EQ).forEach((m) => BL_EQ[m].forEach((e) => {
      const sp = e.r.concat(e.p), comp = sp.map(parseFormula), Lc = {}, Rc = {};
      if (e.c.length !== sp.length) bad('balancer coeff length ' + sp.join());
      e.r.forEach((f, i) => Object.keys(comp[i]).forEach((el) => { Lc[el] = (Lc[el] || 0) + comp[i][el] * e.c[i]; }));
      e.p.forEach((f, j) => { const i = e.r.length + j; Object.keys(comp[i]).forEach((el) => { Rc[el] = (Rc[el] || 0) + comp[i][el] * e.c[i]; }); });
      Object.keys(Lc).concat(Object.keys(Rc)).forEach((el) => { if (Lc[el] !== Rc[el]) bad('unbalanced ' + sp.join('+') + ' on ' + el); });
      if (e.c.reduce(gcd, 0) !== 1) bad('not lowest terms ' + sp.join('+'));
      hiOk(e.th, 'balancer tip ' + sp.join('+'));
    }));
    Object.keys(FG_POOL).forEach((m) => FG_POOL[m].forEach((x) => {
      const c = fgCounts(x[0], x[1]);
      if (c[0] * FG_ION[x[0]].q + c[1] * FG_ION[x[1]].q !== 0) bad('forge net charge ' + x[2]);
      hiOk(x[3], 'forge name ' + x[2]);
    }));
    Object.keys(PK_POOL).forEach((m) => PK_POOL[m].forEach((x) => {
      const c = pkConfig(x[0], x[1]);
      let tot = 0; PK_SUBS.forEach((s) => { tot += c[s.id]; if (c[s.id] > s.cap) bad('parking cap ' + x); });
      if (tot !== x[0] - x[1]) bad('parking electrons ' + x);
    }));
    Object.keys(SS_MOLS).forEach((m) => SS_MOLS[m].forEach((x) => {
      if ((x.ve - x.used) / 2 !== x.lp) bad('VSEPR lone pairs ' + x.f);
      if (SS_NAME[x.bp + '-' + x.lp] === undefined) bad('VSEPR name missing ' + x.f);
      if (!SS_HI[x.shape]) bad('VSEPR Hindi shape missing ' + x.shape);
      const sn = x.bp + x.lp; if (SS_DIRS[sn].length !== sn) bad('VSEPR dirs ' + x.f);
    }));
    let nCases = 0;
    Object.keys(DT_CASES).forEach((m) => DT_CASES[m].forEach((c) => {
      nCases++;
      if (!DT_POS[c.start]) bad('detective start ' + c.start);
      if (c.steps.length !== 3) bad('detective steps ' + c.start);
      hiOk(c.ch, 'detective concept ' + c.start);
      c.steps.forEach((s) => {
        if (s.am.indexOf(s.a) < 0) bad('detective answer not in options ' + s.a);
        s.am.forEach((x) => { if (!DT_POS[x]) bad('detective element ' + x); });
        hiOk(s.qh, 'detective clue ' + s.a); hiOk(s.wh, 'detective why ' + s.a);
      });
    }));
    if (nCases < 15) bad('detective needs at least 15 cases');
    DT_EL.forEach((e) => hiOk(e[5], 'element name ' + e[0]));
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
      if (m !== 'easy') { if (!c.o || c.o.length !== 4 || c.o.indexOf(c.n) < 0 || new Set(c.o).size !== 4) bad('carbon options ' + c.n); hiOk(c.wh, 'carbon why ' + c.n); }
      hiOk(c.hh, 'carbon hint ' + c.n); hiOk(c.nh, 'carbon Hindi name ' + c.n);
    }));
    CATALOG.forEach((c) => { hiOk(c.titleHi, 'catalog title ' + c.id); hiOk(c.subHi, 'catalog sub ' + c.id); hiOk(c.chapterHi, 'catalog chapter ' + c.id); });
    return { ok: !issues.length, issues: issues };
  }
  api.selfTest = selfTest;

  /* ==========================================================================
     Stylesheet — matte studio slate, tactile keycaps (namespaced cge-/pk-/fg-/bl-/ss-/dt-/mf-/cb-)
     ========================================================================== */
  const CSS = `
.cge-root,.cge-modal{--bg:#0D1117;--card:#161B22;--ln:#262C36;--key:#21262D;--keyln:#30363D;--deep:#010409;--ink:#E6EDF3;--mut:#8B949E;--em:#238636;--em2:#2EA043;--amber:#D29922;--amber2:#E3B341;--red:#DA3633;--red2:#F85149;--blue:#1F6FEB;--blue2:#388BFD;--terra:#BD561D;--fh:"Teko","Noto Sans Devanagari","Mukta",system-ui,sans-serif}
.cge-root{--acc:#388BFD;position:relative;box-sizing:border-box;width:100%;max-width:560px;margin:0 auto;padding:10px;color:var(--ink);background:var(--bg);border:1px solid var(--ln);border-radius:16px;box-shadow:inset 0 1px 0 rgba(255,255,255,.06);font:14px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;overflow:hidden;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}
.cge-root *{box-sizing:border-box}
.cge-root b{font-weight:800}
.cge-root sub,.cge-root sup{font-size:.7em;line-height:0}
/* Hindi typography: Teko for headers & definitions */
.cge-root[lang=hi] .cge-title,.cge-root[lang=hi] .cge-btn,.cge-root[lang=hi] .cge-chip,.cge-root[lang=hi] .cge-badge,.cge-root[lang=hi] .cge-card,.cge-root[lang=hi] .cge-hint,.cge-root[lang=hi] .cge-msg,.cge-root[lang=hi] .dt-clue,.cge-root[lang=hi] .fg-lab,.cge-root[lang=hi] .mf-q span,.cge-root[lang=hi] .mf-lr,.cge-root[lang=hi] .ss-step span,.cge-root[lang=hi] .cge-cnt,.cge-root[lang=hi] .cge-live,.cge-root[lang=hi] .cb-live,.cge-root[lang=hi] .mf-res,.cge-root[lang=hi] .mf-work,.cge-root[lang=hi] .bl-sides,.cge-root[lang=hi] .dt-read,.cge-root[lang=hi] .ss-info span,.cge-root[lang=hi] .ss-meter,.cge-root[lang=hi] .fg-net,.cge-root[lang=hi] .fg-qty,.cge-modal[lang=hi] .cge-btn,.cge-modal[lang=hi] .cge-mtitle{font-family:var(--fh);font-size:16.5px;line-height:1.3;font-weight:500}
.cge-root[lang=hi] .cge-title{font-size:20px;font-weight:600}
.cge-root[lang=hi] .cge-btn,.cge-modal[lang=hi] .cge-btn{font-size:17px;font-weight:600}
.cge-root[lang=hi] .cge-badge{font-size:15px;font-weight:600;letter-spacing:0}
.cge-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px}
.cge-bar3{margin-bottom:6px;gap:8px}
.cge-bar2 .cge-btn{flex:1 1 150px}
.cge-badge{padding:3px 11px;border-radius:6px;font-weight:900;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#0D1117;background:var(--acc);border-bottom:2px solid rgba(0,0,0,.4)}
.cge-m-easy{background:#2EA043}.cge-m-moderate{background:#E3B341}.cge-m-hard{background:#F85149}
.cge-title{font-weight:800;font-size:14px;flex:1 1 auto;min-width:120px}
.cge-cnt{font-size:12px;font-weight:800;padding:3px 9px;border-radius:6px;background:var(--card);border:1px solid var(--ln)}
.cge-live{font-size:12px;font-weight:700;color:var(--amber2)}
/* tactile mechanical keys */
.cge-btn,.pk-slot,.fg-tile,.bl-st button,.cb-tool,.ss-step button,.mf-st button,.cge-chip,.fg-chip button{border:1px solid #30363D;border-bottom:4px solid #010409;border-radius:10px;background:#21262D;color:var(--ink);cursor:pointer;touch-action:manipulation;transition:transform .05s}
.cge-btn:active,.pk-slot:active,.fg-tile:active,.bl-st button:active,.cb-tool:active,.ss-step button:active,.mf-st button:active,.cge-chip:active,.fg-chip button:active{transform:translateY(3px);border-bottom-width:1px}
.cge-btn{min-height:44px;padding:8px 12px;font:800 13px/1.2 system-ui,sans-serif}
.cge-btn.pri{background:#238636;border:1px solid #2EA043;border-bottom:4px solid #144620;color:#fff}
.cge-btn.pri:active{border-bottom-width:1px}
.cge-btn:disabled,.pk-slot:disabled,.mf-st button:disabled{opacity:.45;cursor:default;transform:none}
.cge-btn.glow{outline:2px solid transparent;outline-offset:2px;animation:cge-pulse 1.1s ease-in-out infinite}
.lang-btn{min-height:36px;padding:4px 10px;font-size:12px;flex:0 0 auto}
.cge-chip{min-height:40px;padding:6px 14px;border-radius:999px;font:800 13px system-ui,sans-serif}
.cge-chip.on{background:#238636;border-color:#2EA043;border-bottom-color:#144620;color:#fff}
.cge-msg{margin:0 0 8px;padding:8px 10px;border-radius:10px;font-size:13px;background:var(--card);border:1px solid var(--ln);border-left:4px solid var(--blue2);animation:cge-pop .22s}
.cge-msg.ok{border-left-color:var(--em2)}.cge-msg.bad{border-left-color:var(--red2);background:#1c1416}
.cge-hint{margin:0 0 8px;padding:9px 11px;border-radius:10px;font-size:13px;background:#1b1810;border:1px solid #4a3a12;border-left:4px solid var(--amber2)}
.cge-stage{display:flex;flex-direction:column;gap:8px}
.cge-card{padding:9px 11px;border-radius:10px;background:var(--card);border:1px solid var(--ln);box-shadow:inset 0 1px 0 rgba(255,255,255,.06);font-size:13.5px}
.cge-card.ok{border-left:4px solid var(--em2)}
.cge-dim{color:var(--mut);font-size:12px}
.cge-shake{animation:cge-shake .45s}
.cge-won{box-shadow:0 0 0 2px var(--em2)}
.fg-acts{display:flex;gap:8px;flex-wrap:wrap}.fg-acts .cge-btn{flex:1 1 140px}
@keyframes cge-shake{0%,100%{transform:translateX(0)}15%{transform:translateX(-9px)}30%{transform:translateX(8px)}45%{transform:translateX(-6px)}60%{transform:translateX(5px)}75%{transform:translateX(-3px)}}
@keyframes cge-pop{from{transform:scale(.97);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes cge-pulse{0%,100%{outline-color:rgba(46,160,67,0)}50%{outline-color:rgba(46,160,67,.95)}}
@keyframes cge-fade{from{opacity:0}to{opacity:1}}
@keyframes cge-fall{to{transform:translateY(110vh) rotate(720deg)}}

/* parking */
.pk-cv canvas,.fg-cv canvas,.ss-cv canvas,.mf-cv canvas,.cb-cv canvas{border:1px solid var(--ln)}
.pk-shells{display:flex;gap:6px;justify-content:center;flex-wrap:wrap}
.pk-sh{padding:3px 10px;border-radius:6px;background:var(--card);border:1px solid var(--ln);border-bottom:3px solid var(--deep);font-size:12px;color:var(--mut)}
.pk-sh.on{color:var(--ink);border-color:var(--c)}.pk-sh small{opacity:.6}
.pk-slots{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.pk-slot{display:flex;flex-direction:column;align-items:center;gap:4px;min-height:74px;padding:7px 3px}
.pk-slot b{font-size:16px}.pk-slot em{font-style:normal;font-size:11px;color:var(--mut)}
.pk-slot.has{border-color:#388BFD;background:#1b2330}
.pk-pips{display:flex;flex-wrap:wrap;gap:2px;justify-content:center;max-width:58px}
.pk-pips i{width:8px;height:8px;border-radius:50%;border:1.5px solid #4b535d}
.pk-pips i.on{background:#388BFD;border-color:#79C0FF}
.pk-cfgtxt{font-size:16px;letter-spacing:.03em}

/* forge */
.fg-qty{display:flex;gap:6px;align-items:center;font-weight:800;font-size:12px;color:var(--mut)}
.fg-lab{font-size:11px;font-weight:800;color:var(--mut);text-transform:uppercase;letter-spacing:.08em}
.fg-tiles{display:flex;flex-wrap:wrap;gap:6px}
.fg-tile{--band:#BD561D;position:relative;overflow:hidden;min-width:68px;min-height:60px;padding:10px 8px 6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;background:linear-gradient(#F6F1E6,#DCD5C5);color:#1B1A17;border:1px solid #A39B88;border-bottom:4px solid #6b6556}
.fg-tile.cat{--band:#BD561D}.fg-tile.an{--band:#1F6FEB}
.fg-tile::before{content:"";position:absolute;left:0;right:0;top:0;height:5px;background:var(--band)}
.fg-sym{font-size:17px;font-weight:800}
.fg-tile small{font-size:10px;font-weight:800;color:#fff;background:var(--band);border-radius:8px;padding:0 7px}
.fg-pot{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;font-size:13px;min-height:30px}
.fg-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 3px 3px 10px;border-radius:8px;font-weight:800;animation:cge-pop .2s;background:var(--card);border:1px solid var(--ln)}
.fg-chip.cat{border-left:4px solid var(--terra)}.fg-chip.an{border-left:4px solid var(--blue2)}
.fg-chip button{width:28px;height:28px;border-radius:7px;font-weight:900}
.fg-formula{font-size:26px;font-weight:900;letter-spacing:.02em;text-align:center}
.fg-net{text-align:center;font-weight:900;font-size:13px;color:var(--amber2)}
.fg-net.z{color:var(--em2)}

/* balancer */
.bl-scale{width:100%;height:auto;display:block;border:1px solid var(--ln);border-radius:12px;background:#090C10}
.bl-sides{display:flex;justify-content:space-between;font-size:11px;font-weight:800;color:var(--mut);padding:0 8px}
.bl-rows{display:flex;flex-direction:column;gap:4px}
.bl-row{display:grid;grid-template-columns:28px 26px 1fr 26px;gap:6px;align-items:center}
.bl-row b{text-align:center}.bl-n{text-align:center;font-weight:800;font-size:13px}
.bl-bars{display:grid;grid-template-columns:1fr 1fr;gap:2px;height:11px}
.bl-bars .hl,.bl-bars .hr{background:#0b0f14;display:flex;overflow:hidden;border:1px solid var(--ln)}
.bl-bars .hl{justify-content:flex-end;border-radius:5px 0 0 5px}.bl-bars .hr{border-radius:0 5px 5px 0}
.bl-bars i{display:block;height:100%;background:var(--red2);transition:width .25s}
.bl-row.ok i{background:var(--em2)}
.bl-eq{display:flex;flex-wrap:wrap;gap:6px;align-items:center;justify-content:center;padding:4px 0}
.bl-sp{display:flex;flex-direction:column;align-items:center;gap:5px;padding:7px;border-radius:10px;background:var(--card);border:1px solid var(--ln);box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}
.bl-f{font-size:17px;font-weight:800}
.bl-st{display:flex;align-items:center;gap:5px}
.bl-st b{min-width:24px;text-align:center;font-size:17px;color:var(--amber2)}
.bl-st button{width:36px;height:36px;font-size:18px;font-weight:900}
.bl-op,.bl-arrow{font-size:20px;font-weight:900;color:var(--mut)}

/* shape shift */
.ss-cv canvas{touch-action:none;cursor:grab}
.ss-info{display:flex;flex-wrap:wrap;gap:6px;font-size:12px}
.ss-info>span{padding:3px 9px;border-radius:6px;background:var(--card);border:1px solid var(--ln);color:var(--mut)}.ss-info b{color:var(--ink)}
.ss-build{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ss-step{display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:10px;background:var(--card);border:1px solid var(--ln);font-size:12px;font-weight:700}
.ss-step>span{flex:1}.ss-step b{min-width:18px;text-align:center;font-size:17px;color:var(--amber2)}
.ss-step button{width:38px;height:38px;font-size:18px;font-weight:900}
.ss-rot{display:flex;gap:8px;align-items:center}
.ss-rot input{flex:1;height:34px;accent-color:#2EA043}.ss-rot .cge-btn{min-height:40px;padding:6px 9px}
.ss-meter{display:flex;gap:10px;align-items:center;font-size:12px;font-weight:700}
.ss-bar{flex:1;height:12px;border-radius:4px;background:#0b0f14;border:1px solid var(--ln);overflow:hidden}
.ss-bar i{display:block;height:100%;width:0;background:var(--amber);transition:width .12s}
.ss-bar i.ok{background:var(--em2)}

/* trend detective: museum / lab reference board */
.dt-clue{padding:10px 12px;border-radius:10px;background:var(--card);border:1px solid var(--ln);border-left:4px solid var(--amber2);box-shadow:inset 0 1px 0 rgba(255,255,255,.06);font-size:14px}
.dt-wrap{position:relative;border-radius:10px;overflow:hidden;border:1px solid var(--ln)}
.dt-gridwrap{overflow-x:auto;-webkit-overflow-scrolling:touch;background:#0a0d12}
.dt-grid{display:grid;grid-template-columns:22px repeat(18,38px);gap:3px;width:max-content;padding:5px}
.dt-c0{height:16px}.dt-gh{height:16px;text-align:center;font:700 10px ui-monospace,monospace;color:var(--mut)}
.dt-ph{position:sticky;left:0;z-index:3;background:#0a0d12;display:flex;align-items:center;justify-content:center;font:700 10px ui-monospace,monospace;color:var(--mut)}
.dt-e{height:40px;border-radius:6px}.dt-e.gap{background:repeating-linear-gradient(45deg,rgba(255,255,255,.035) 0 4px,transparent 4px 8px)}
.dt-cell{position:relative;height:40px;border-radius:6px;border:1px solid rgba(255,255,255,.1);border-bottom:3px solid rgba(0,0,0,.55);box-shadow:inset 0 1px 0 rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;touch-action:manipulation}
.dt-cell span{font-size:14px;font-weight:800;letter-spacing:.01em}
.dt-cell small{position:absolute;left:3px;top:2px;font:700 7.5px ui-monospace,monospace;opacity:.75}
.dt-cell.b-s{background:#1a3254;color:#C2DAFF}.dt-cell.b-p{background:#173a20;color:#C3EBCB}.dt-cell.b-d{background:#47240f;color:#F4D0AE}.dt-cell.b-n{background:#2a2f38;color:#D0D7DE}
.dt-cell:active{transform:translateY(2px);border-bottom-width:1px}
.dt-cell.dt-done::before{content:"";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-radius:50%;background:var(--em2)}
.dt-cell.dt-here{outline:2px solid var(--amber2);outline-offset:1px}
.dt-cell.dt-here::after{content:"";position:absolute;top:-5px;right:-5px;width:10px;height:10px;border-radius:50%;background:var(--amber2);border:2px solid var(--bg)}
.dt-cell.dt-sel{outline:2px solid var(--blue2);outline-offset:1px;transform:translateY(-1px);z-index:2}
.dt-cell.dt-scan{outline:2px dashed var(--em2);outline-offset:2px;animation:dt-beacon 1s ease-in-out infinite}
@keyframes dt-beacon{0%,100%{outline-offset:2px}50%{outline-offset:4px}}
.dt-radar{position:absolute;inset:0;pointer-events:none;opacity:0;background:linear-gradient(90deg,rgba(46,160,67,0),rgba(46,160,67,.18) 80%,rgba(46,160,67,.95) 99%,rgba(46,160,67,0)) no-repeat;background-size:30% 100%}
.dt-radar.go{animation:dt-sweep 1.3s linear}
@keyframes dt-sweep{0%{opacity:1;background-position:-40% 0}100%{opacity:0;background-position:140% 0}}
.dt-read{font-size:12.5px;min-height:18px;color:var(--mut)}

/* mole factory */
.mf-eq{text-align:center;font-size:20px;font-weight:900;padding:4px 0}
.mf-mm{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}
.mf-mm span{font:700 11px ui-monospace,monospace;padding:2px 8px;border-radius:6px;background:var(--card);border:1px solid var(--ln);color:var(--mut)}
.mf-legend{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;font-size:12px;font-weight:700}
.mf-legend i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:4px;vertical-align:-1px;border:1px solid rgba(0,0,0,.5)}.mf-legend i.w{background:transparent;border:2px solid var(--red2)}
.mf-hop{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px}
.mf-h{padding:8px;border-radius:10px;background:var(--card);border:1px solid var(--ln);font-weight:800;display:flex;flex-direction:column;gap:6px}
.mf-st{display:flex;align-items:center;gap:6px}.mf-st b{min-width:26px;text-align:center;font-size:18px;color:var(--amber2)}.mf-st span{font-size:11px;color:var(--mut)}
.mf-st button{width:40px;height:40px;font-size:18px;font-weight:900}
.mf-lr{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-size:12px;font-weight:800;color:var(--mut)}
.mf-ans{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;align-items:end}
.mf-q{display:flex;flex-direction:column;gap:4px;font-size:12px;font-weight:700;color:var(--mut)}
.mf-q input{min-height:44px;padding:6px 10px;border-radius:8px;border:1px solid var(--keyln);border-bottom:2px solid var(--deep);background:#090C10;color:var(--ink);font:800 16px ui-monospace,monospace;-webkit-user-select:text;user-select:text}
.mf-q input:focus{outline:2px solid var(--blue2);outline-offset:1px}
.mf-res,.mf-work{padding:9px 11px;border-radius:10px;background:var(--card);border:1px solid var(--ln);font-size:13px;line-height:1.55}
.mf-work{border-style:dashed;color:var(--mut)}

/* carbon */
.cb-tools{display:flex;gap:6px}
.cb-tool{flex:1 1 0;min-width:38px;min-height:44px;padding:6px 2px;white-space:nowrap;font:800 12.5px system-ui,sans-serif}
.cb-tool.on{background:#238636;border-color:#2EA043;border-bottom-color:#144620;color:#fff}
.cb-live{font-size:13px;padding:6px 10px;border-radius:8px;background:var(--card);border:1px solid var(--ln)}
.cb-live.warn{border-color:var(--red2);background:#1c1416;color:#ffc4c0}
.cb-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}
.cb-opt{min-height:48px}.cb-opt.wrong{border-color:var(--red2);background:#2a1618;text-decoration:line-through}
.cb-opt.right{border-color:var(--em2);background:#14301c}

/* victory modal */
.cge-modal{position:fixed;inset:0;z-index:99999;background:rgba(1,4,9,.88);display:flex;align-items:flex-start;justify-content:center;padding:12px;overflow-y:auto;animation:cge-fade .3s;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.cge-confetti{position:fixed;inset:0;overflow:hidden;pointer-events:none}
.cge-confetti i{position:absolute;top:-16px;width:8px;height:14px;border-radius:2px;animation:cge-fall linear forwards}
.cge-mbox{position:relative;width:min(100%,380px);margin:auto;padding:14px 12px 12px;border-radius:16px;background:var(--bg);border:1px solid var(--keyln);box-shadow:inset 0 1px 0 rgba(255,255,255,.06);color:var(--ink);animation:cge-pop .3s}
.cge-mtitle{text-align:center;font-weight:900;font-size:17px;margin:0 0 10px}
.cge-x{position:absolute;top:8px;right:8px;width:34px;height:34px;border-radius:8px;border:1px solid var(--keyln);border-bottom:3px solid var(--deep);background:var(--key);color:#fff;font-size:15px;cursor:pointer}
.cge-cardcv{width:100%;height:auto;display:block;border-radius:10px}
.cge-macts{display:flex;flex-direction:column;gap:8px;margin-top:10px}
.cge-macts .cge-btn{min-height:46px}
.cge-macts .lang-btn{align-self:center}
@media (prefers-reduced-motion:reduce){.cge-root *,.cge-modal *{animation-duration:.01ms!important;animation-iteration-count:1!important}}
`;

  W.ChemGamesEngine = api;
})();
