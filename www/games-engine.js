/* ============================================================================
   CHEMISTRY EXPLORER — CLASS 11  •  www/games-engine.js   (v3 — "Brain Out" hand-drawn warm-paper puzzle engine)
   Seven playable games • 75–100+ Class 11 NCERT / NEET / JEE questions per level • bookmarks.
   Global controller: window.ChemGamesEngine
   (NEW_GAMES_CATALOG, mountGame, showVictoryPopup, selfTest, openBookmarksModal, bookmark helpers)
   Language: window.appState.cardLang  ('hi' | 'en'), toggled live in every game.
   ========================================================================== */
(function () {
  'use strict';

  const W = window, D = document;
  const MODES = ['easy', 'moderate', 'hard'];
  const MODE_LABEL = { easy: ['Easy', 'आसान'], moderate: ['Moderate', 'मध्यम'], hard: ['Hard', 'कठिन'] };
  const XP_WIN = { easy: 50, moderate: 75, hard: 100 };
  const MODE_COLOR = { easy: '#2EA043', moderate: '#E3B341', hard: '#F85149' };
  const PAL = { bg: '#FFFDF6', card: '#FFFFFF', line: '#1E1E1E', key: '#21262D', keyLine: '#30363D', keyDeep: '#010409', ink: '#111111', mut: '#4D493C', em: '#238636', em2: '#2EA043', amber: '#D29922', amber2: '#E3B341', red: '#DA3633', red2: '#F85149', blue: '#1F6FEB', blue2: '#388BFD', terra: '#BD561D', canvas: '#FDF9EE' };
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
  function mulberry32(a) { return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
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
  const STACK_EN = '"Fredoka","Patrick Hand",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';
  const cf = (px, w) => Math.min(w || 700, 600) + ' ' + Math.round(px * (lang() === 'hi' ? 1.14 : 1)) + 'px ' + (lang() === 'hi' ? STACK_HI : STACK_EN);
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
  const muted = () => !!(W.appState && (W.appState.muted || W.appState.soundOff || W.appState.soundEnabled === false));
  function ac() {
    AC = AC || new (W.AudioContext || W.webkitAudioContext)();
    if (AC.state === 'suspended') safe(() => AC.resume());
    return AC;
  }
  /* oscillator with exponential envelope; f1 -> f2 glide */
  function osc(type, f1, f2, dur, vol, delay) {
    if (muted()) return;
    safe(() => {
      const c = ac(), t0 = c.currentTime + (delay || 0), o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(f1, t0);
      if (f2 && f2 !== f1) o.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol || 0.15, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(c.destination); o.start(t0); o.stop(t0 + dur + 0.05);
    });
  }
  /* filtered noise burst (steam, swish, thud, creak) */
  function noise(dur, vol, ftype, f1, f2, delay) {
    if (muted()) return;
    safe(() => {
      const c = ac(), n = Math.max(1, Math.floor(c.sampleRate * dur)), buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      const s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(), t0 = c.currentTime + (delay || 0);
      s.buffer = buf; fl.type = ftype || 'lowpass'; fl.frequency.setValueAtTime(f1 || 1000, t0);
      if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol || 0.1, t0 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      s.connect(fl); fl.connect(g); g.connect(c.destination); s.start(t0);
    });
  }
  let _flip = 0;
  const sfx = {
    tap() { tone(560, 'sine', 0.06, 0); },
    pop() { tone(760, 'triangle', 0.08, 0); },
    ok() { if (typeof W.soundSuccess === 'function') safe(() => W.soundSuccess()); else { tone(660, 'sine', 0.1, 0); tone(880, 'sine', 0.14, 0.09); } },
    err() { if (typeof W.soundError === 'function') safe(() => W.soundError()); else tone(180, 'sawtooth', 0.18, 0); },
    win() { if (typeof W.soundLevelVictory === 'function') safe(() => W.soundLevelVictory()); else [523, 659, 784, 1047].forEach((f, i) => tone(f, 'triangle', 0.16, i * 0.11)); },
    /* cheerful 3-note marimba / woodblock start chime */
    levelStart() { [523.25, 659.25, 783.99].forEach((f, i) => { osc('sine', f, f, 0.28, 0.16, i * 0.12); osc('triangle', f * 2, f * 2, 0.08, 0.06, i * 0.12); noise(0.03, 0.05, 'bandpass', 2400, 2400, i * 0.12); }); },
    /* magnetic snap + orbital hum */
    orbitSnap() { osc('square', 900, 220, 0.06, 0.08, 0); osc('sine', 330, 440, 0.32, 0.07, 0.04); },
    elecWhoosh() { noise(0.28, 0.07, 'bandpass', 400, 2200, 0); osc('sine', 220, 330, 0.3, 0.05, 0); },
    /* ceramic tile clink */
    ceramicTile() { osc('sine', 2300, 2100, 0.09, 0.1, 0); osc('sine', 3400, 3300, 0.06, 0.05, 0); noise(0.02, 0.06, 'highpass', 4000, 4000, 0); },
    /* heavy anvil ring + steam hiss */
    anvilClank() { osc('square', 1180, 1170, 0.9, 0.09, 0); osc('sine', 1760, 1750, 0.7, 0.06, 0.01); osc('sine', 150, 90, 0.25, 0.2, 0); noise(0.9, 0.07, 'highpass', 3500, 6500, 0.1); },
    /* brass balance creak + swish; weight clink */
    scaleCreak() { osc('sawtooth', 180, 260, 0.18, 0.05, 0); osc('sawtooth', 260, 150, 0.2, 0.04, 0.12); noise(0.25, 0.04, 'bandpass', 900, 1800, 0); },
    weightClink() { osc('sine', 1568, 1500, 0.18, 0.1, 0); osc('triangle', 2350, 2300, 0.1, 0.05, 0); },
    balance() { if ((_flip ^= 1)) sfx.scaleCreak(); else sfx.weightClink(); },
    /* ball-and-stick socket pop + ratchet tick */
    bondSnap() { osc('sine', 700, 180, 0.09, 0.16, 0); noise(0.03, 0.06, 'lowpass', 1500, 600, 0); },
    rotateTick() { osc('square', 1500, 1300, 0.025, 0.05, 0); osc('square', 1100, 1000, 0.025, 0.04, 0.05); },
    /* sonar radar ping */
    radarPing() { osc('sine', 1250, 1240, 0.9, 0.14, 0); osc('sine', 1250, 1240, 0.9, 0.05, 0.28); },
    /* chugging conveyor + steam valve + crate thud */
    factoryRun() { for (let i = 0; i < 6; i++) { noise(0.07, 0.09, 'lowpass', 500, 200, i * 0.2); osc('square', 90, 70, 0.07, 0.05, i * 0.2); } noise(0.5, 0.05, 'highpass', 4000, 7000, 0.4); osc('sine', 80, 45, 0.18, 0.2, 1.25); noise(0.1, 0.1, 'lowpass', 300, 100, 1.25); },
    /* sparkly electric ding */
    hintBulb() { [1319, 1760, 2349].forEach((f, i) => osc('sine', f, f, 0.35, 0.09, i * 0.07)); noise(0.1, 0.03, 'highpass', 6000, 8000, 0); },
    /* paper-clip / staple snap */
    bookmark() { osc('square', 2600, 900, 0.03, 0.09, 0); noise(0.04, 0.08, 'highpass', 3000, 3000, 0.005); osc('sine', 600, 500, 0.08, 0.06, 0.04); }
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
    for (let x = 0; x <= w; x += 16) { g.strokeStyle = x % 80 === 0 ? 'rgba(160,150,110,.30)' : '#EFEAD8'; g.beginPath(); g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, h); g.stroke(); }
    for (let y = 0; y <= h; y += 16) { g.strokeStyle = y % 80 === 0 ? 'rgba(160,150,110,.30)' : '#EFEAD8'; g.beginPath(); g.moveTo(0, y + 0.5); g.lineTo(w, y + 0.5); g.stroke(); }
  }
  /* authentic CPK-style ball: off-centre specular, ambient shadow */
  function sphere(g, x, y, r, col, noShadow) {
    if (!noShadow) { g.fillStyle = 'rgba(0,0,0,.38)'; g.beginPath(); g.ellipse(x + r * 0.22, y + r * 0.98, r * 0.86, r * 0.26, 0, 0, 6.2832); g.fill(); }
    const gr = g.createRadialGradient(x - r * 0.38, y - r * 0.42, r * 0.06, x, y, r * 1.08);
    gr.addColorStop(0, shade(col, 0.78)); gr.addColorStop(0.3, shade(col, 0.2)); gr.addColorStop(0.7, col); gr.addColorStop(1, shade(col, -0.62));
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 6.2832); g.fill();
    g.fillStyle = 'rgba(255,255,255,.6)'; g.beginPath(); g.ellipse(x - r * 0.4, y - r * 0.46, r * 0.22, r * 0.13, -0.62, 0, 6.2832); g.fill();
    g.strokeStyle = '#1E1E1E'; g.lineWidth = 2.5; g.beginPath(); g.arc(x, y, r, 0, 6.2832); g.stroke();
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
    cv.style.cssText = 'width:100%;height:auto;display:block;touch-action:none;border-radius:14px;';
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    /* 2D hand-drawn sketch look: every solid fill gets a crisp ink outline (instrument colours stay untouched) */
    const _fill = g.fill.bind(g), _stroke = g.stroke.bind(g), _fillRect = g.fillRect.bind(g), _strokeRect = g.strokeRect.bind(g);
    const solid = () => {
      if (g.globalAlpha < 0.9) return false;
      const fs = g.fillStyle;
      if (typeof fs === 'string') { const m = fs.match(/rgba?\(([^)]*)\)/); if (m) { const p = m[1].split(','); if (p.length > 3 && parseFloat(p[3]) < 0.85) return false; } if (fs === 'transparent') return false; }
      return true;
    };
    const ink = (fn) => { g.save(); g.setLineDash([]); g.strokeStyle = '#1E1E1E'; g.lineWidth = 2.5; g.lineJoin = 'round'; g.lineCap = 'round'; g.globalAlpha = 1; fn(); g.restore(); };
    g.fill = function () {
      const a = arguments; _fill.apply(g, a);
      if (!solid()) return;
      ink(() => { if (a[0] && typeof Path2D !== 'undefined' && a[0] instanceof Path2D) _stroke(a[0]); else _stroke(); });
    };
    g.fillRect = function (x, y, w, h) {
      const ok = solid(); _fillRect(x, y, w, h);
      if (!ok || w >= lw - 1 || h >= lh - 1 || w < 12 || h < 7) return;
      ink(() => _strokeRect(x, y, w, h));
    };
    return {
      cv, g, w: lw, h: lh,
      pos(e) { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * lw / (r.width || lw), y: (e.clientY - r.top) * lh / (r.height || lh) }; }
    };
  }

  /* ----------------------------------------- Brain-Out question state & helpers */
  const INK = '#1E1E1E';
  const SEED_KEY = (g, m, i) => g + '|' + m + '|' + i;
  function qStat(id, mode) {
    const g = gstat(id), m = g.modes[mode] = g.modes[mode] || { plays: 0, wins: 0, bestStars: 0 };
    if (!(m.qIndex >= 1)) m.qIndex = 1;
    if (!Array.isArray(m.hist)) m.hist = [];
    return m;
  }
  function bookmarks() {
    const s = ensureState();
    if (!Array.isArray(s.bookmarks)) s.bookmarks = [];
    return s.bookmarks;
  }
  function isBookmarked(id) { return bookmarks().some((b) => b.id === id); }
  function toggleBookmark(entry) {
    const list = bookmarks(), at = list.findIndex((b) => b.id === entry.id);
    if (at >= 0) { list.splice(at, 1); persist(); return false; }
    list.push({ id: entry.id, gameId: entry.gameId, mode: entry.mode, qNum: entry.qNum, titleEn: entry.titleEn, titleHi: entry.titleHi, seedData: entry.seedData, timestamp: Date.now() });
    persist(); sfx.bookmark(); return true;
  }
  const starSvg = (on) => '<svg viewBox="0 0 100 96" class="cge-star"><path d="M50 6 L62 36 L94 38 L69 58 L78 90 L50 72 L22 90 L31 58 L6 38 L38 36 Z" fill="' + (on ? '#FFD600' : '#FFFFFF') + '" stroke="#000000" stroke-width="4" stroke-linejoin="round"/></svg>';
  const BULB_SVG = '<svg viewBox="0 0 40 40" width="26" height="26" aria-hidden="true"><path d="M20 4c-7 0-12 5-12 11.5 0 4.4 2.4 7 4.4 9.2 1.3 1.4 2 2.7 2 4.3h11.2c0-1.6.7-2.9 2-4.3 2-2.2 4.4-4.8 4.4-9.2C32 9 27 4 20 4z" fill="#FFD600" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M14 13c1-3 3.4-4.6 6-4.8" fill="none" stroke="#FFF7B0" stroke-width="2.4" stroke-linecap="round"/><rect x="14.5" y="29.5" width="11" height="4" rx="1.5" fill="#B8B8B8" stroke="' + INK + '" stroke-width="2.5"/><rect x="16.5" y="33.5" width="7" height="3.5" rx="1.5" fill="#8E8E8E" stroke="' + INK + '" stroke-width="2.5"/><path d="M16.5 22l3.5-4 3.5 4" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ------------------------------------------------ generic Brain-Out popups */
  const OPEN_POPUPS = [];
  function popup(o) {
    const ov = D.createElement('div');
    ov.className = 'cge-ov'; ov.setAttribute('lang', lang());
    ov.innerHTML = '<div class="cge-pop ' + (o.cls || '') + '" role="dialog"><div class="cge-pop-top"><div class="cge-pop-title">' + (o.title || '') + '</div><span class="cge-lock" data-p="lock"></span><button class="cge-x" data-p="x" aria-label="Close">✕</button></div><div class="cge-pop-body">' + o.html + '</div></div>';
    D.body.appendChild(ov);
    const lockEl = ov.querySelector('[data-p="lock"]'), xBtn = ov.querySelector('[data-p="x"]');
    let left = o.lockSec || 0, timer = 0, closed = false;
    const api2 = { el: ov, closed: false };
    api2.close = () => {
      if (closed) return; closed = true; api2.closed = true; clearInterval(timer);
      const i = OPEN_POPUPS.indexOf(api2); if (i >= 0) OPEN_POPUPS.splice(i, 1);
      safe(() => ov.remove()); if (o.onClose) safe(o.onClose);
    };
    const unlock = () => { left = 0; lockEl.hidden = true; xBtn.hidden = false; xBtn.classList.add('pop'); };
    if (left > 0) {
      xBtn.hidden = true; lockEl.hidden = false; lockEl.textContent = left + 's';
      timer = setInterval(() => { left--; if (left <= 0) { clearInterval(timer); unlock(); sfx.pop(); } else lockEl.textContent = left + 's'; }, 1000);
    } else { lockEl.hidden = true; }
    ov.addEventListener('click', (e) => {
      if (e.target === ov) { if (left <= 0) api2.close(); return; }
      const b = e.target.closest && e.target.closest('[data-p]');
      if (!b) return;
      const k = b.getAttribute('data-p');
      if (k === 'x') { if (left <= 0) api2.close(); }
      else if (o.on) o.on(k, b, api2, e);
    });
    OPEN_POPUPS.push(api2);
    render(ov);
    return api2;
  }
  function closePopupsOf(owner) { OPEN_POPUPS.slice().forEach((p) => { if (!owner || p.owner === owner) p.close(); }); }

  /* --------------------------------------------- game context / top bar / mount */
  function createCtx(meta, mode, container) {
    const qs = qStat(meta.id, mode);
    const ctx = { meta, mode, container, cleanups: [], moves: 0, good: 0, wrong: 0, hints: 0, finished: false, t0: Date.now(), hintFn: null, hintPaid: false, instrHtml: '', forced: null, seed: null, qNum: qs.qIndex, titleP: null, moveFmt: (m) => bi('Moves ' + m, 'चालें ' + m) };
    container.innerHTML = '';
    const root = D.createElement('div');
    root.className = 'cge-root';
    root.setAttribute('lang', lang());
    root.setAttribute('style', '--acc:' + meta.color);
    root.innerHTML =
      '<div class="cge-top">' +
      '<button class="cge-i" data-bar="info" aria-label="Question info">i</button>' +
      '<span class="cge-badge cge-m-' + mode + '">' + mlab(mode) + '</span>' +
      '<span class="cge-qn" data-r="qn"></span><span class="cge-sp"></span>' +
      '<button class="cge-ib" data-bar="hint" aria-label="Hint">' + BULB_SVG + '</button>' +
      '<button class="cge-ib" data-bar="skip" aria-label="Skip"><span class="cge-ico">⏭️</span></button>' +
      '<button class="cge-ib" data-bar="bm" data-r="bm" aria-label="Bookmark"><span class="cge-ico">🔖</span></button>' +
      '<button class="cge-btn lang-btn" data-bar="lang">🌐 हिंदी / EN</button></div>' +
      '<div class="cge-bar cge-bar3"><span class="cge-title">' + meta.icon + ' ' + bi(meta.title, meta.titleHi) + '</span><span class="cge-cnt" data-r="cnt"></span><span class="cge-live" data-r="live"></span></div>' +
      '<button class="cge-bmbar" data-bar="bmlist">🔖 ' + bi('Bookmarked Questions', 'बुकमार्क प्रश्न') + ' <span data-r="bmn"></span></button>' +
      '<div class="cge-msg" data-r="msg" hidden></div>' +
      '<div class="cge-stage" data-r="stage"></div>';
    container.appendChild(root);
    const q = (n) => root.querySelector('[data-r="' + n + '"]');
    const cnt = q('cnt'), live = q('live'), msg = q('msg'), qn = q('qn'), bmBtn = q('bm'), bmn = q('bmn');
    let msgState = null, statusState = null;
    ctx.root = root; ctx.stage = q('stage');

    const bmEntry = () => ({ id: SEED_KEY(meta.id, mode, ctx.seed ? ctx.seed.i : 'x'), gameId: meta.id, mode, qNum: ctx.qNum, titleEn: ctx.titleP ? ctx.titleP[0] : meta.title + ' — Q. ' + ctx.qNum, titleHi: ctx.titleP ? ctx.titleP[1] : meta.titleHi + ' — Q. ' + ctx.qNum, seedData: { i: ctx.seed ? ctx.seed.i : 0, qNum: ctx.qNum } });
    ctx.bookmarkEntry = bmEntry;
    const paintTop = () => {
      qn.textContent = '(Q. ' + ctx.qNum + ')';
      const on = isBookmarked(bmEntry().id);
      bmBtn.firstChild.textContent = on ? '⭐' : '🔖'; bmBtn.classList.toggle('on', on);
      const n = bookmarks().filter((b) => b.gameId === meta.id).length;
      bmn.textContent = n ? '(' + n + ')' : '';
    };
    ctx.paintTop = paintTop;
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
    ctx.qTitle = (p) => { ctx.titleP = pair(p); paintTop(); };
    ctx.badgeP = null;
    ctx.badge = (p) => { ctx.badgeP = pair(p); };
    ctx.instr = (html) => { ctx.instrHtml = html; };
    /* history ring-buffer + deterministic seed (index into the static pool) */
    ctx.pick = (pool) => {
      const hist = qs.hist, keep = Math.min(Math.max(1, pool.length - 1), 70);
      let i;
      if (ctx.forced && ctx.forced.i >= 0 && ctx.forced.i < pool.length) { i = ctx.forced.i; }
      else {
        const free = []; for (let k = 0; k < pool.length; k++) if (hist.indexOf(k) < 0) free.push(k);
        i = free.length ? free[rand(free.length)] : rand(pool.length);
      }
      hist.push(i); while (hist.length > keep) hist.shift();
      ctx.seed = { i: i }; persist();
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

    /* ---------- popups: instructions (5 s lock on auto-open), hint, skip ---------- */
    const modeLine = () => '<div class="cge-pop-tag">' + meta.icon + ' ' + bi(meta.title, meta.titleHi) + ' · ' + mlab(mode) + ' · (Q. ' + ctx.qNum + ')</div>';
    ctx.openInstr = (auto) => {
      closePopupsOf(ctx.instrOwner);
      const p = popup({ cls: 'cge-pop-q', title: bi('Mission', 'मिशन'), lockSec: auto ? 5 : 0, html: modeLine() + '<div class="cge-pop-txt">' + (ctx.instrHtml || bi('Solve the challenge on the board.', 'बोर्ड पर दी गई चुनौती हल करें।')) + '</div>' });
      p.owner = ctx; ctx.instrOwner = p.owner; return p;
    };
    ctx.openHint = () => {
      if (!ctx.hintFn) return;
      if (!ctx.hintPaid) { ctx.hintPaid = true; ctx.hints++; xp(-10, '💡 Hint (-10 XP)'); }
      sfx.hintBulb();
      const p = popup({ cls: 'cge-pop-h', title: '💡 ' + bi('NCERT concept hint', 'NCERT संकल्पना संकेत'), html: '<div class="cge-pop-txt">' + bip(ctx.hintFn()) + '</div>' + (ctx.hintPaid ? '<div class="cge-pop-note">' + bi('Hint costs 10 XP (charged once per question).', 'संकेत का शुल्क 10 XP (प्रति प्रश्न एक बार)।') + '</div>' : '') });
      p.owner = ctx; render(p.el);
    };
    ctx.openSkip = () => {
      const p = popup({ cls: 'cge-pop-s', title: '⏭️ ' + bi('Skip?', 'छोड़ें?'),
        html: '<div class="cge-pop-txt"><b>' + bi('Skip this question? It will cost 25 XP!', 'क्या आप यह प्रश्न छोड़ना चाहते हैं? इसके लिए 25 XP लगेंगे!') + '</b></div>' +
          '<div class="cge-row2"><button class="cge-btn" data-p="cancel">' + bi('Cancel', 'रद्द करें') + '</button><button class="cge-btn danger" data-p="skip">' + bi('Skip (-25 XP)', 'छोड़ें (-25 XP)') + '</button></div>',
        on: (k, b, pp) => {
          if (k === 'cancel') { sfx.tap(); pp.close(); }
          else if (k === 'skip') { pp.close(); xp(-25, '⏭️ Skipped (-25 XP)'); sfx.pop(); qs.qIndex = ctx.qNum + 1; persist(); ctx.forced = null; ctx.qNum = qs.qIndex; ctx.restart(); }
        } });
      p.owner = ctx;
    };
    ctx.nextQ = () => { qs.qIndex = Math.max(qs.qIndex, ctx.qNum + 1); persist(); ctx.forced = null; ctx.qNum = qs.qIndex; ctx.restart(); };
    ctx.replay = () => { ctx.forced = { i: ctx.seed ? ctx.seed.i : 0 }; ctx.restart(); };
    ctx.applyLang = () => {
      root.setAttribute('lang', lang());
      cnt.innerHTML = ctx.moveFmt(ctx.moves);
      paintMsg(); paintTop();
      live.innerHTML = statusState ? bip(statusState) : '';
      swapLang(root);
      OPEN_POPUPS.forEach((p) => { p.el.setAttribute('lang', lang()); swapLang(p.el); });
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
      qs.qIndex = Math.max(qs.qIndex, ctx.qNum + 1); persist();
      const d = o.detail ? pair(o.detail) : ['', ''];
      ctx.say(['🏆 Challenge cleared! ' + d[0], '🏆 चैलेंज पूरा हुआ! ' + d[1]], 'ok');
      ctx.root.classList.add('cge-won');
      closePopupsOf(ctx);
      api.showVictoryPopup({ gameId: meta.id, mode, qNum: ctx.qNum, title: meta.title, icon: meta.icon, color: meta.color, accuracy: acc, moves: ctx.moves, timeSec: secs, stars: st, xp: gain, concept: o.concept, bm: bmEntry(), onReplay: () => ctx.replay(), onNext: () => ctx.nextQ() });
    };
    ctx.runCleanup = () => { const c = ctx.cleanups; ctx.cleanups = []; c.forEach((f) => safe(f)); };
    ctx.finalizeStage = () => {
      const card = ctx.stage.querySelector('.cge-card:not([data-keep])');
      if (card && !card.classList.contains('ok')) { if (!ctx.instrHtml) ctx.instrHtml = card.innerHTML; card.remove(); }
      if (ctx.badgeP) { const b = D.createElement('div'); b.className = 'cge-target'; b.innerHTML = bip(ctx.badgeP); ctx.stage.insertBefore(b, ctx.stage.firstChild); }
    };
    ctx.restart = () => {
      ctx.runCleanup(); closePopupsOf(ctx);
      ctx.moves = 0; ctx.good = 0; ctx.wrong = 0; ctx.hints = 0; ctx.hintPaid = false; ctx.finished = false; ctx.t0 = Date.now();
      ctx.hintFn = null; ctx.instrHtml = ''; ctx.titleP = null; ctx.seed = null; ctx.badgeP = null;
      ctx.moveFmt = (m) => bi('Moves ' + m, 'चालें ' + m);
      root.classList.remove('cge-won');
      ctx.setMoves(ctx.moveFmt(0)); ctx.setStatus(null); ctx.say(null);
      ctx.stage.onclick = null; ctx.stage.innerHTML = '';
      if (ctx.forced && ctx.forced.qNum) ctx.qNum = ctx.forced.qNum;
      recordPlay(meta.id, mode);
      GAMES[meta.id](ctx, mode);
      ctx.forced = null;
      ctx.finalizeStage();
      paintTop();
      render(ctx.stage);
      sfx.levelStart();
      ctx.openInstr(true);
    };
    ctx.destroy = () => { ctx.runCleanup(); closePopupsOf(ctx); safe(() => root.remove()); };
    root.addEventListener('click', (e) => {
      const b = e.target.closest && e.target.closest('[data-bar]');
      if (!b) return;
      const k = b.getAttribute('data-bar');
      if (k === 'info') { sfx.tap(); ctx.openInstr(false); }
      else if (k === 'hint') ctx.openHint();
      else if (k === 'skip') { sfx.tap(); ctx.openSkip(); }
      else if (k === 'bm') { toggleBookmark(bmEntry()); paintTop(); }
      else if (k === 'bmlist') { sfx.tap(); api.openBookmarksModal(meta.id, container); }
      else if (k === 'lang') { toggleLang(); sfx.tap(); ctx.applyLang(); }
    });
    return ctx;
  }

  function resolveContainer(c) { return typeof c === 'string' ? D.querySelector(c) : c; }
  function mountGame(gameId, mode, container, forcedItem) {
    const meta = CATALOG.find((g) => g.id === gameId);
    container = resolveContainer(container);
    if (!meta || !container || !GAMES[gameId]) { safe(() => console.warn('[ChemGamesEngine] cannot mount', gameId)); return null; }
    mode = String(mode || 'easy').toLowerCase();
    if (MODES.indexOf(mode) < 0) mode = 'easy';
    injectStyle();
    if (container.__cge) safe(() => container.__cge.destroy());
    const ctx = createCtx(meta, mode, container);
    container.__cge = ctx;
    LAST_MOUNT = { gameId, mode, container };
    let f = forcedItem;
    if (f && f.seedData) f = f.seedData;
    if (typeof f === 'number') f = { i: f };
    if (f && typeof f.i === 'number') { ctx.forced = { i: f.i, qNum: f.qNum }; }
    ctx.restart();
    return ctx;
  }

  function injectStyle() {
    if (D.getElementById('cge-style')) return;
    const s = D.createElement('style');
    s.id = 'cge-style'; s.textContent = CSS;
    (D.head || D.documentElement).appendChild(s);
  }

  /* -------------------------------------------- bookmarked-questions modal */
  function openBookmarksModal(gameId, target) {
    injectStyle();
    let filter = 'all', gid = gameId || null;
    const tgt = typeof target === 'function' ? target : resolveContainer(target) || (LAST_MOUNT && LAST_MOUNT.container);
    const body = () => {
      let list = bookmarks().filter((b) => !gid || b.gameId === gid && true).filter((b) => filter === 'all' || b.mode === filter);
      list = list.slice().sort((a, b) => b.timestamp - a.timestamp);
      const tabs = ['all', 'easy', 'moderate', 'hard'].map((m) => '<button class="cge-chip' + (m === filter ? ' on' : '') + '" data-p="f-' + m + '">' + (m === 'all' ? bi('All', 'सभी') : mlab(m)) + '</button>').join('');
      const items = list.length ? list.map((b) => {
        const meta = CATALOG.find((c) => c.id === b.gameId) || { icon: '🧪' };
        return '<div class="cge-bmi"><button class="cge-bmgo" data-p="go-' + b.id.replace(/"/g, '') + '"><span class="cge-badge cge-m-' + b.mode + '">' + mlab(b.mode) + '</span> <b>' + meta.icon + ' (Q. ' + b.qNum + ')</b> ' + bi(b.titleEn, b.titleHi) + '</button><button class="cge-bmdel" data-p="del-' + b.id.replace(/"/g, '') + '" aria-label="Remove">🗑</button></div>';
      }).join('') : '<div class="cge-pop-note">' + bi('No bookmarked questions yet. Tap 🔖 in a game to save one.', 'अभी कोई बुकमार्क प्रश्न नहीं। किसी प्रश्न को सहेजने के लिए गेम में 🔖 दबाएँ।') + '</div>';
      return '<div class="cge-tabs">' + tabs + '</div><div class="cge-bmlist">' + items + '</div>';
    };
    const p = popup({ cls: 'cge-pop-b', title: '🔖 ' + bi('Bookmarked Questions', 'बुकमार्क प्रश्न'), html: body(),
      on: (k, b, pp) => {
        const bodyEl = pp.el.querySelector('.cge-pop-body');
        if (k.indexOf('f-') === 0) { filter = k.slice(2); sfx.tap(); bodyEl.innerHTML = body(); swapLang(bodyEl); return; }
        if (k.indexOf('del-') === 0) { const id = k.slice(4), l = bookmarks(), at = l.findIndex((x) => x.id === id); if (at >= 0) { l.splice(at, 1); persist(); } bodyEl.innerHTML = body(); swapLang(bodyEl);
          const lm = LAST_MOUNT; if (lm && lm.container && lm.container.__cge) safe(() => lm.container.__cge.paintTop()); return; }
        if (k.indexOf('go-') === 0) {
          const id = k.slice(3), e = bookmarks().find((x) => x.id === id); if (!e) return;
          pp.close();
          if (typeof tgt === 'function') tgt(e);
          else if (tgt) mountGame(e.gameId, e.mode, tgt, e.seedData);
        }
      } });
    return p;
  }

  /* ----------------------------------------------------- victory popup (black) */
  function showVictoryPopup(s) {
    s = Object.assign({}, s || {});
    const meta = CATALOG.find((g) => g.id === s.gameId) || {};
    s.mode = String(s.mode || 'easy').toLowerCase();
    if (MODES.indexOf(s.mode) < 0) s.mode = 'easy';
    s.title = s.title || meta.title || 'Chemistry Game';
    s.icon = s.icon || meta.icon || '🧪';
    s.accuracy = s.accuracy == null ? 100 : Math.round(s.accuracy);
    s.moves = s.moves == null ? 0 : s.moves;
    s.timeSec = s.timeSec == null ? 0 : s.timeSec;
    s.stars = clamp(Math.round(s.stars == null ? 3 : s.stars), 0, 3);
    s.xp = s.xp == null ? XP_WIN[s.mode] : s.xp;
    s.qNum = s.qNum || 1;
    s.concept = s.concept || ['Class 11 Chemistry mastery', 'कक्षा 11 रसायन में निपुणता'];
    injectStyle();
    const old = D.getElementById('cge-modal'); if (old) old.remove();
    const modal = D.createElement('div');
    modal.id = 'cge-modal'; modal.className = 'cge-modal'; modal.setAttribute('lang', lang());
    let cf2 = '';
    for (let i = 0; i < 26; i++) cf2 += '<i style="left:' + rand(100) + '%;background:' + ['#FFD600', '#2EA043', '#388BFD', '#F85149', '#FFFFFF'][i % 5] + ';animation-delay:' + (rand(900) / 1000).toFixed(2) + 's;animation-duration:' + (1.7 + rand(14) / 10).toFixed(1) + 's"></i>';
    const cc = pair(s.concept);
    const bmOn = () => s.bm && isBookmarked(s.bm.id);
    const bmLabel = () => (bmOn() ? '⭐ ' + bi('Bookmarked — tap to remove', 'बुकमार्क किया — हटाने के लिए दबाएँ') : '🔖 ' + bi('Bookmark Question', 'प्रश्न बुकमार्क करें'));
    modal.innerHTML =
      '<div class="cge-confetti">' + cf2 + '</div>' +
      '<div class="cge-mbox"><button class="cge-x light" data-m="lang" aria-label="Language" style="right:auto;left:10px;width:auto;padding:0 10px;font-size:12px">🌐</button>' +
      '<div class="cge-stars">' + [0, 1, 2].map((i) => '<span class="cge-starw s' + i + '">' + starSvg(i < s.stars) + '</span>').join('') + '</div>' +
      '<div class="cge-mtitle">' + bi('Challenge Cleared!', 'चैलेंज पूरा!') + '</div>' +
      '<div class="cge-mmeta">' + s.icon + ' ' + bi(s.title, meta.titleHi || s.title) + ' · (Q. ' + s.qNum + ') · ' + mlab(s.mode) + '</div>' +
      '<div class="cge-grid"><div><small>' + bi('Time', 'समय') + '</small><b>' + fmtTime(s.timeSec) + '</b></div><div><small>' + bi('Moves', 'चालें') + '</small><b>' + s.moves + '</b></div><div><small>' + bi('Accuracy', 'सटीकता') + '</small><b>' + s.accuracy + '%</b></div></div>' +
      '<div class="cge-xpv">+' + s.xp + ' XP</div>' +
      '<div class="cge-conc"><small>🧠 ' + bi('Chemistry Concept Mastered', 'महारत हासिल रसायन संकल्पना') + '</small><div>' + bi(cc[0], cc[1]) + '</div></div>' +
      (s.bm ? '<button class="cge-vbtn bm" data-m="bm">' + bmLabel() + '</button>' : '') +
      '<div class="cge-row2"><button class="cge-vbtn" data-m="replay">↺ ' + bi('Replay', 'दोहराएँ') + '</button><button class="cge-vbtn go" data-m="next">' + bi('Next', 'अगला') + ' ▶</button></div></div>';
    D.body.appendChild(modal);
    render(modal);
    const close = () => { safe(() => modal.remove()); };
    modal.addEventListener('click', (e) => {
      const b = e.target.closest && e.target.closest('[data-m]');
      if (!b) return;
      const k = b.getAttribute('data-m');
      if (k === 'lang') {
        toggleLang(); modal.setAttribute('lang', lang()); swapLang(modal);
        const lm = LAST_MOUNT; if (lm && lm.container && lm.container.__cge) safe(() => lm.container.__cge.applyLang());
      } else if (k === 'bm') {
        toggleBookmark(s.bm); b.innerHTML = bmLabel(); swapLang(b);
        const lm = LAST_MOUNT; if (lm && lm.container && lm.container.__cge) safe(() => lm.container.__cge.paintTop());
      } else if (k === 'replay' || k === 'next') {
        close(); sfx.pop();
        const fn = k === 'replay' ? s.onReplay : s.onNext;
        if (typeof fn === 'function') { fn(); return; }
        const lm = LAST_MOUNT;
        if (lm && lm.container && lm.container.isConnected) mountGame(lm.gameId, lm.mode, lm.container, k === 'replay' && s.bm ? s.bm.seedData : null);
      }
    });
    return modal;
  }

  const api = { NEW_GAMES_CATALOG: CATALOG, mountGame: mountGame, showVictoryPopup: showVictoryPopup, openBookmarksModal: openBookmarksModal,
    getBookmarks: (gid) => bookmarks().filter((b) => !gid || b.gameId === gid).sort((a, b) => b.timestamp - a.timestamp), isBookmarked: isBookmarked, toggleBookmark: toggleBookmark };

  /* ==========================================================================
     1. ELECTRON PARKING  (Ch 2 · Structure of Atom)
     ========================================================================== */
  const PK_SUBS = [
    { id: '1s', n: 1, cap: 2 }, { id: '2s', n: 2, cap: 2 }, { id: '2p', n: 2, cap: 6 },
    { id: '3s', n: 3, cap: 2 }, { id: '3p', n: 3, cap: 6 }, { id: '4s', n: 4, cap: 2 }, { id: '3d', n: 3, cap: 10 }
  ];
  const PK_SYM = ['', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'];
  const PK_POOL = (function () {
    const core = (N) => (N >= 19 ? 18 : N >= 11 ? 10 : N >= 3 ? 2 : 0);
    const add = (L, Z, q, pre) => { const N = Z - q; if (pre >= 0 && pre < N && !L.some((x) => x[0] === Z && x[1] === q && x[2] === pre)) L.push([Z, q, pre]); };
    const easy = [], mod = [], hard = [];
    range(1, 30).forEach((Z) => add(easy, Z, 0, 0));
    range(3, 30).forEach((Z) => add(easy, Z, 0, core(Z)));
    range(11, 30).forEach((Z) => add(easy, Z, 0, 2));
    [[3, 1], [4, 2], [7, -3], [8, -2], [9, -1], [11, 1], [12, 2], [13, 3], [15, -3], [16, -2], [17, -1], [19, 1], [20, 2], [21, 3], [22, 2], [22, 4], [23, 2], [23, 3], [30, 2]].forEach((a) => [0, 2, 10, 18].forEach((pre) => add(mod, a[0], a[1], pre)));
    range(19, 30).forEach((Z) => [0, 10, 18].forEach((pre) => add(mod, Z, 0, pre)));
    [[24, 0], [29, 0], [24, 1], [24, 2], [24, 3], [25, 0], [25, 2], [25, 3], [25, 4], [26, 0], [26, 2], [26, 3], [27, 0], [27, 2], [27, 3], [28, 0], [28, 2], [28, 3], [29, 1], [29, 2], [22, 3], [23, 2]].forEach((a) => [0, 10, 12, 18].forEach((pre) => add(hard, a[0], a[1], pre)));
    return { easy: easy, moderate: mod, hard: hard };
  })();
  const pkUnpaired = (c) => { let u = 0; PK_SUBS.forEach((s) => { const e = c[s.id] || 0, o = s.cap / 2; if (e > 0 && e < s.cap) u += e <= o ? e : s.cap - e; }); return u; };
  function pkConfig(Z, q) {
    const c = {}; let left = Z + (q < 0 ? -q : 0);
    PK_SUBS.forEach((s) => { const t = Math.min(s.cap, left); c[s.id] = t; left -= t; });
    if (Z === 24) { c['4s'] = 1; c['3d'] = 5; }
    if (Z === 29) { c['4s'] = 1; c['3d'] = 10; }
    let k = Math.max(0, q || 0);
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
    const [Z, q, pre] = ctx.pick(PK_POOL[mode]);
    const target = pkConfig(Z, q), N = Z - q;
    const limit = N - pre + { easy: 5, moderate: 4, hard: 3 }[mode];
    const label = PK_SYM[Z] + (q ? '^{' + (Math.abs(q) > 1 ? Math.abs(q) : '') + (q > 0 ? '+' : '\u2212') + '}' : '');
    const lh = chem(label), unp = pkUnpaired(target);
    ctx.qTitle(['Configure ' + lh + (pre ? ' (first ' + pre + ' e\u207B pre-filled)' : ''), '\u0935\u093F\u0928\u094D\u092F\u093E\u0938 ' + lh + (pre ? ' (\u092A\u0939\u0932\u0947 ' + pre + ' e\u207B \u092D\u0930\u0947)' : '')]);
    ctx.badge(['Configure: ' + lh + ' (Z=' + Z + ')' + (mode === 'hard' ? ' \u00B7 unpaired e\u207B = ' + unp : ''), '\u0935\u093F\u0928\u094D\u092F\u093E\u0938: ' + lh + ' (Z=' + Z + ')' + (mode === 'hard' ? ' \u00B7 \u0905\u092F\u0941\u0917\u094D\u092E\u093F\u0924 e\u207B = ' + unp : '')]);
    const placed = {}; PK_SUBS.forEach((s) => { placed[s.id] = 0; });
    let used = 0, done = false, locked = false;
    const pulses = [];
    const nextSub = () => PK_SUBS.find((s) => placed[s.id] < target[s.id]);
    const total = () => PK_SUBS.reduce((a, s) => a + placed[s.id], 0);
    for (let i0 = 0; i0 < pre; i0++) { const s0 = nextSub(); if (s0) placed[s0.id]++; }
    const A = clamp(Math.round(Z * 1.8), 6, 24), nuc = [];
    for (let i = 0; i < A; i++) nuc.push({ a: i * 2.39996, r: 4.1 * Math.sqrt(i + 0.4), red: i % 2 === 0 });

    ctx.stage.innerHTML =
      '<div class="cge-card">' + bi(
        (pre ? 'Park the remaining <b>' : 'Park all <b>') + (N - pre) + '</b> electrons of <b>' + lh + '</b> <span class="cge-dim">(Z = ' + Z + (q ? ', charge +' + q : '') + ')</span> in the correct subshells — lowest energy first. A wrong tap costs a move.',
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
        placed[id]++; sfx.orbitSnap(); setTimeout(sfx.elecWhoosh, 45); pulses.push({ n: s.n, t0: performance.now() });
        refresh();
        if (total() === N) {
          done = true; refresh();
          const cfg = PK_SUBS.filter((x) => target[x.id] > 0).map((x) => x.id + '<sup>' + target[x.id] + '</sup>').join(' ');
          $('cfg').innerHTML = '<div class="cge-card ok">' + bi('✅ Ground-state configuration of ' + lh + ':', '✅ ' + lh + ' का मूल अवस्था विन्यास (ground-state configuration):') + '<br><b class="pk-cfgtxt">' + cfg + '</b></div>';
          ctx.win({
            effStars: used <= N - pre + 1 ? 3 : used <= N - pre + 2 ? 2 : 1,
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
  const FG_ROWS = [
    ['Na+', 'Na', 1, 0, 'Sodium', 'सोडियम'], ['K+', 'K', 1, 0, 'Potassium', 'पोटैशियम'], ['Li+', 'Li', 1, 0, 'Lithium', 'लिथियम'], ['Mg2+', 'Mg', 2, 0, 'Magnesium', 'मैग्नीशियम'],
    ['Ca2+', 'Ca', 2, 0, 'Calcium', 'कैल्सियम'], ['Ba2+', 'Ba', 2, 0, 'Barium', 'बेरियम'], ['Al3+', 'Al', 3, 0, 'Aluminium', 'ऐलुमिनियम'], ['Zn2+', 'Zn', 2, 0, 'Zinc', 'ज़िंक'],
    ['Ag+', 'Ag', 1, 0, 'Silver', 'सिल्वर'], ['H+', 'H', 1, 0, 'Hydrogen', 'हाइड्रोजन'], ['NH4+', 'NH4', 1, 1, 'Ammonium', 'अमोनियम'], ['Fe2+', 'Fe', 2, 0, 'Iron(II)', 'आयरन(II)'],
    ['Fe3+', 'Fe', 3, 0, 'Iron(III)', 'आयरन(III)'], ['Cr3+', 'Cr', 3, 0, 'Chromium(III)', 'क्रोमियम(III)'], ['Cu2+', 'Cu', 2, 0, 'Copper(II)', 'कॉपर(II)'], ['Pb2+', 'Pb', 2, 0, 'Lead(II)', 'लेड(II)'], ['Sn2+', 'Sn', 2, 0, 'Tin(II)', 'टिन(II)'],
    ['F-', 'F', -1, 0, 'fluoride', 'फ्लोराइड'], ['Cl-', 'Cl', -1, 0, 'chloride', 'क्लोराइड'], ['Br-', 'Br', -1, 0, 'bromide', 'ब्रोमाइड'], ['I-', 'I', -1, 0, 'iodide', 'आयोडाइड'],
    ['O2-', 'O', -2, 0, 'oxide', 'ऑक्साइड'], ['S2-', 'S', -2, 0, 'sulphide', 'सल्फाइड'], ['N3-', 'N', -3, 0, 'nitride', 'नाइट्राइड'], ['OH-', 'OH', -1, 1, 'hydroxide', 'हाइड्रॉक्साइड'],
    ['NO3-', 'NO3', -1, 1, 'nitrate', 'नाइट्रेट'], ['HCO3-', 'HCO3', -1, 1, 'hydrogencarbonate', 'हाइड्रोजनकार्बोनेट'],
    ['SO42-', 'SO4', -2, 1, 'sulphate', 'सल्फेट'], ['SO32-', 'SO3', -2, 1, 'sulphite', 'सल्फाइट'], ['PO43-', 'PO4', -3, 1, 'phosphate', 'फॉस्फेट'], ['HPO42-', 'HPO4', -2, 1, 'hydrogenphosphate', 'हाइड्रोजनफॉस्फेट'],
    ['H2PO4-', 'H2PO4', -1, 1, 'dihydrogenphosphate', 'डाइहाइड्रोजनफॉस्फेट'], ['CO32-', 'CO3', -2, 1, 'carbonate', 'कार्बोनेट'], ['CrO42-', 'CrO4', -2, 1, 'chromate', 'क्रोमेट'], ['Cr2O72-', 'Cr2O7', -2, 1, 'dichromate', 'डाइक्रोमेट'],
    ['MnO4-', 'MnO4', -1, 1, 'permanganate', 'परमैंगनेट'], ['ClO3-', 'ClO3', -1, 1, 'chlorate', 'क्लोरेट'], ['ClO4-', 'ClO4', -1, 1, 'perchlorate', 'परक्लोरेट'], ['C2O42-', 'C2O4', -2, 1, 'oxalate', 'ऑक्सैलेट'], ['CH3COO-', 'CH3COO', -1, 1, 'acetate', 'ऐसीटेट'],
    ['pO22-', 'O2', -2, 1, 'peroxide', 'परऑक्साइड'], ['sO2-', 'O2', -1, 1, 'superoxide', 'सुपरऑक्साइड'], ['S2O32-', 'S2O3', -2, 1, 'thiosulphate', 'थायोसल्फेट'], ['S4O62-', 'S4O6', -2, 1, 'tetrathionate', 'टेट्राथायोनेट'],
    ['S2O82-', 'S2O8', -2, 1, 'peroxodisulphate', 'परऑक्सोडाइसल्फेट'], ['P2O74-', 'P2O7', -4, 1, 'pyrophosphate', 'पायरोफॉस्फेट'], ['BO33-', 'BO3', -3, 1, 'borate', 'बोरेट'], ['AlO2-', 'AlO2', -1, 1, 'aluminate', 'ऐलुमिनेट'],
    ['FeCN63-', '[Fe(CN)6]', -3, 1, 'ferricyanide', 'फेरिसायनाइड'], ['FeCN64-', '[Fe(CN)6]', -4, 1, 'ferrocyanide', 'फेरोसायनाइड'], ['HSO3-', 'HSO3', -1, 1, 'hydrogensulphite', 'हाइड्रोजनसल्फाइट'],
    ['SCN-', 'SCN', -1, 1, 'thiocyanate', 'थायोसायनेट'], ['ClO-', 'ClO', -1, 1, 'hypochlorite', 'हाइपोक्लोराइट'], ['ClO2-', 'ClO2', -1, 1, 'chlorite', 'क्लोराइट'], ['BrO3-', 'BrO3', -1, 1, 'bromate', 'ब्रोमेट'], ['IO3-', 'IO3', -1, 1, 'iodate', 'आयोडेट']
  ];
  const FG_ION = {};
  FG_ROWS.forEach((r) => { FG_ION[r[0]] = { s: r[1], q: r[2], en: r[4], hi: r[5] }; if (r[3]) FG_ION[r[0]].poly = 1; });
  const FG_POOL = (function () {
    const nm = (c, a) => {
      if (c === 'H+' && a === 'O2-') return ['Hydrogen oxide (water)', 'हाइड्रोजन ऑक्साइड (जल)'];
      const C = FG_ION[c], A = FG_ION[a];
      return [C.en + ' ' + A.en, C.hi + ' ' + A.hi];
    };
    const combos = (cs, as, bad) => { const L = []; cs.forEach((c) => as.forEach((a) => { if (bad(c, a)) return; const n = nm(c, a); L.push([c, a, n[0], n[1]]); })); return L; };
    const easyC = ['Na+', 'K+', 'Mg2+', 'Ca2+', 'Al3+', 'Zn2+', 'Ag+', 'H+', 'Li+', 'Ba2+'], easyA = ['F-', 'Cl-', 'Br-', 'I-', 'O2-', 'S2-', 'N3-', 'OH-', 'NO3-', 'HCO3-'];
    const easy = combos(easyC, easyA, (c, a) => (c === 'H+' && (a === 'OH-' || a === 'HCO3-' || a === 'N3-')) || (a === 'HCO3-' && (c === 'Ag+' || c === 'Al3+' || c === 'Zn2+')));
    const modC = ['Na+', 'K+', 'Mg2+', 'Ca2+', 'Ba2+', 'Al3+', 'NH4+', 'Zn2+'], modA = ['SO42-', 'SO32-', 'PO43-', 'HPO42-', 'H2PO4-', 'CO32-', 'CrO42-', 'Cr2O72-', 'MnO4-', 'ClO3-', 'ClO4-', 'C2O42-', 'CH3COO-'];
    const moderate = combos(modC, modA, (c, a) => c === 'Al3+' && (a === 'CO32-' || a === 'SO32-'));
    const hardMap = {
      'pO22-': ['Na+', 'K+', 'Li+', 'Ba2+', 'Ca2+', 'Mg2+', 'Zn2+', 'H+'], 'sO2-': ['Na+', 'K+'], 'S2O32-': ['Na+', 'K+', 'Ca2+', 'Ba2+', 'Mg2+', 'NH4+', 'Ag+', 'Zn2+'],
      'S4O62-': ['Na+', 'K+', 'Ca2+', 'Ba2+', 'Mg2+'], 'S2O82-': ['Na+', 'K+', 'NH4+', 'Ba2+', 'Mg2+', 'Ag+'], 'P2O74-': ['Na+', 'K+', 'Ca2+', 'Mg2+', 'Ba2+', 'Zn2+', 'Fe3+', 'Al3+', 'NH4+'],
      'BO33-': ['Na+', 'K+', 'Mg2+', 'Ca2+', 'Ba2+', 'Al3+', 'Zn2+', 'Fe3+'], 'AlO2-': ['Na+', 'K+', 'Ca2+', 'Ba2+', 'Mg2+', 'Zn2+', 'Li+'],
      'FeCN63-': ['K+', 'Na+', 'Ag+', 'Ba2+', 'Ca2+', 'Mg2+', 'NH4+', 'Zn2+', 'Cu2+', 'Fe2+', 'Pb2+'], 'FeCN64-': ['K+', 'Na+', 'Ca2+', 'Ba2+', 'Mg2+', 'Zn2+', 'Cu2+', 'Fe3+', 'Ag+', 'NH4+'],
      'HSO3-': ['Na+', 'K+', 'Ca2+', 'Mg2+', 'Ba2+', 'NH4+'], 'SCN-': ['K+', 'Na+', 'NH4+', 'Ag+', 'Fe3+', 'Pb2+'], 'ClO-': ['Na+', 'K+', 'Ca2+'], 'ClO2-': ['Na+', 'K+', 'Ba2+', 'Ag+'], 'BrO3-': ['Na+', 'K+', 'Ba2+', 'Ag+', 'Mg2+'], 'IO3-': ['Na+', 'K+', 'Ca2+', 'Ba2+', 'Ag+']
    };
    const hard = [];
    Object.keys(hardMap).forEach((a) => hardMap[a].forEach((c) => { const n = nm(c, a); hard.push([c, a, n[0], n[1]]); }));
    return { easy: easy, moderate: moderate, hard: hard };
  })();
  const FG_DIS = { easy: { c: ['Na+', 'K+', 'Mg2+', 'Ca2+', 'Al3+', 'Zn2+', 'Ag+', 'Li+', 'Ba2+'], a: ['F-', 'Cl-', 'Br-', 'I-', 'O2-', 'S2-', 'N3-', 'OH-', 'NO3-'] },
    moderate: { c: ['Na+', 'K+', 'Mg2+', 'Ca2+', 'Ba2+', 'Al3+', 'NH4+', 'Zn2+'], a: ['SO42-', 'SO32-', 'PO43-', 'CO32-', 'CrO42-', 'MnO4-', 'ClO3-', 'C2O42-', 'CH3COO-'] },
    hard: { c: ['Na+', 'K+', 'Ca2+', 'Ba2+', 'Mg2+', 'Al3+', 'Zn2+', 'Fe3+', 'NH4+', 'Ag+'], a: ['S2O32-', 'P2O74-', 'BO33-', 'AlO2-', 'pO22-', 'S2O82-', 'FeCN63-', 'IO3-', 'SCN-'] } };
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
    ctx.qTitle([cname, cnameHi]); ctx.badge(['Target: ' + cname, '\u0932\u0915\u094D\u0937\u094D\u092F: ' + cnameHi]);
    const allC = FG_DIS[mode].c.filter((k) => k !== cat), allA = FG_DIS[mode].a.filter((k) => k !== an);
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
        qty = +t.getAttribute('data-q'); sfx.ceramicTile();
        ctx.stage.querySelectorAll('[data-q]').forEach((b) => b.classList.toggle('on', +b.getAttribute('data-q') === qty));
      } else if (t.hasAttribute('data-add')) {
        const k = t.getAttribute('data-add'); counts[k] = Math.min(9, (counts[k] || 0) + qty); moves++; ctx.move(); sfx.ceramicTile(); refresh();
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
      sfx.anvilClank();
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
  const BL_FAM = {
    comb: ['Combination: start with the element that appears in only one compound on each side, and leave H and O for last.', 'संयोजन अभिक्रिया: पहले वह तत्व संतुलित करें जो प्रत्येक ओर केवल एक यौगिक में हो; H और O सबसे अंत में।'],
    dec: ['Decomposition: balance the element that sits in just one product first, then the gases (O₂, H₂) last.', 'अपघटन: पहले वह तत्व संतुलित करें जो केवल एक उत्पाद में हो; गैसें (O₂, H₂) अंत में।'],
    disp: ['Displacement: treat a polyatomic ion (SO₄, NO₃, Cl) as one unit, balance metals first, then H.', 'विस्थापन: बहुपरमाणुक आयन (SO₄, NO₃, Cl) को एक इकाई मानें; पहले धातु, फिर H संतुलित करें।'],
    burn: ['Combustion: balance C → CO₂, then H → H₂O, and finally O (use half-coefficients ×2 if O is odd).', 'दहन: पहले C → CO₂, फिर H → H₂O, अंत में O संतुलित करें (O विषम हो तो सभी गुणांक ×2)।'],
    acid: ['Neutralisation: acid H⁺ + base OH⁻ → H₂O; balance the metal and the acid radical first, then H₂O last.', 'उदासीनीकरण: अम्ल H⁺ + क्षार OH⁻ → H₂O; पहले धातु व अम्ल मूलक, अंत में H₂O संतुलित करें।'],
    metal: ['Metal + acid/alkali: balance the metal and the radical, then count H atoms for H₂.', 'धातु + अम्ल/क्षार: पहले धातु व मूलक संतुलित करें, फिर H₂ के लिए H गिनें।'],
    prec: ['Double decomposition: swap the partners, then balance each ion as a unit (metal, then radical).', 'द्विअपघटन: साझेदार बदलें, फिर प्रत्येक आयन को इकाई मानकर (पहले धातु, फिर मूलक) संतुलित करें।'],
    redox: ['Redox: find the elements whose oxidation number changes, equalise electrons lost = gained, then balance K, Cl, S, H and finally O.', 'रेडॉक्स: जिन तत्वों की ऑक्सीकरण संख्या बदलती है उन्हें पहचानें, इलेक्ट्रॉन-हानि = लाभ करें, फिर K, Cl, S, H और अंत में O संतुलित करें।'],
    disprop: ['Disproportionation: the same element is oxidised and reduced – write both product oxidation states, balance electrons, then the rest.', 'असमानुपातन: एक ही तत्व ऑक्सीकृत व अपचयित होता है – दोनों उत्पादों की ऑक्सीकरण अवस्थाएँ लिखें, इलेक्ट्रॉन संतुलित करें, फिर शेष।']
  };
  function blNull(M, n) {
    const A = M.map((r) => r.slice()), piv = []; let r = 0;
    const g2 = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; };
    for (let c = 0; c < n && r < A.length; c++) {
      let p = -1; for (let i = r; i < A.length; i++) if (A[i][c] !== 0) { p = i; break; }
      if (p < 0) continue;
      const tmp = A[r]; A[r] = A[p]; A[p] = tmp;
      for (let i = 0; i < A.length; i++) {
        if (i === r || A[i][c] === 0) continue;
        const a = A[r][c], b = A[i][c];
        A[i] = A[i].map((v, k) => v * a - A[r][k] * b);
        const g = A[i].reduce((x, y) => g2(x, y), 0); if (g > 1) A[i] = A[i].map((v) => v / g);
      }
      piv.push(c); r++;
    }
    if (piv.length !== n - 1) return null;
    let free = -1; for (let c = 0; c < n; c++) if (piv.indexOf(c) < 0) { free = c; break; }
    let L = 1; piv.forEach((c, i) => { const a = Math.abs(A[i][c]); L = L / g2(L, a) * a; });
    const x = new Array(n).fill(0); x[free] = L;
    piv.forEach((c, i) => { x[c] = -A[i][free] * L / A[i][c]; });
    const g = x.reduce((a, b) => g2(a, b), 0);
    let v = x.map((t) => t / g); if (v[free] < 0) v = v.map((t) => -t);
    return v.every((t) => t > 0 && Number.isInteger(t)) ? v : null;
  }
  /* solve "A + B > C + D" with the atom-balance null-space (guarantees correct coefficients) */
  function blSolveStr(str) {
    const sides = str.split('>'), R = sides[0].split('+').map((x) => x.trim()), P = sides[1].split('+').map((x) => x.trim());
    const sp = R.concat(P), comp = sp.map(parseFormula), els = {};
    comp.forEach((c) => Object.keys(c).forEach((e) => { els[e] = 1; }));
    const M = Object.keys(els).map((e) => comp.map((c, j) => (c[e] || 0) * (j < R.length ? 1 : -1)));
    const v = blNull(M, sp.length);
    return v ? { r: R, p: P, c: v } : null;
  }
  const BL_EQ = (function () {
    const E = [], M = [], H = [];
    const burnAlk = (n) => 'C' + n + 'H' + (2 * n + 2), burnEne = (n) => 'C' + n + 'H' + (2 * n), burnYne = (n) => 'C' + n + 'H' + (2 * n - 2), burnOl = (n) => 'C' + n + 'H' + (2 * n + 1) + 'OH';
    const fam = (L, tag, list) => list.forEach((s) => L.push([tag, s]));
    fam(E, 'comb', ['N2 + H2 > NH3', 'H2 + O2 > H2O', 'Mg + O2 > MgO', 'Fe + O2 > Fe2O3', 'Na + Cl2 > NaCl', 'Al + O2 > Al2O3', 'Ca + O2 > CaO', 'K + O2 > K2O', 'Li + N2 > Li3N', 'Mg + N2 > Mg3N2', 'Al + Cl2 > AlCl3', 'Fe + Cl2 > FeCl3', 'Cu + O2 > CuO', 'Zn + O2 > ZnO', 'P4 + O2 > P4O10', 'S8 + O2 > SO2', 'C + O2 > CO2', 'CO + O2 > CO2', 'SO2 + O2 > SO3', 'NO + O2 > NO2', 'H2 + Cl2 > HCl', 'H2 + Br2 > HBr', 'H2 + F2 > HF', 'Ca + N2 > Ca3N2', 'Na + O2 > Na2O', 'Na + S8 > Na2S', 'Al + S8 > Al2S3', 'Fe + S8 > FeS', 'Mg + Cl2 > MgCl2', 'Na + H2 > NaH', 'Ca + H2 > CaH2', 'N2 + O2 > NO', 'C + H2 > CH4', 'P4 + Cl2 > PCl3', 'H2O + CO2 > H2CO3', 'CaO + H2O > Ca(OH)2', 'Na2O + H2O > NaOH', 'SO3 + H2O > H2SO4', 'SO2 + H2O > H2SO3', 'N2O5 + H2O > HNO3', 'P4O10 + H2O > H3PO4', 'CaO + CO2 > CaCO3', 'NH3 + HCl > NH4Cl', 'Zn + S8 > ZnS', 'Mg + S8 > MgS', 'K + Cl2 > KCl', 'Li + O2 > Li2O', 'Ba + O2 > BaO', 'Al + N2 > AlN']);
    fam(E, 'dec', ['CaCO3 > CaO + CO2', 'H2O > H2 + O2', 'KClO3 > KCl + O2', 'NaHCO3 > Na2CO3 + CO2 + H2O', 'HgO > Hg + O2', 'H2O2 > H2O + O2', 'NH4Cl > NH3 + HCl', 'Cu(OH)2 > CuO + H2O', 'Mg(OH)2 > MgO + H2O', 'Al(OH)3 > Al2O3 + H2O', 'NH4NO3 > N2O + H2O', 'Ag2O > Ag + O2', 'KNO3 > KNO2 + O2', 'CuCO3 > CuO + CO2', 'MgCO3 > MgO + CO2', 'ZnCO3 > ZnO + CO2', 'BaCO3 > BaO + CO2', 'Ca(HCO3)2 > CaCO3 + H2O + CO2', 'N2O > N2 + O2', 'NH3 > N2 + H2', 'HI > H2 + I2', 'PCl5 > PCl3 + Cl2', 'SO3 > SO2 + O2', 'NO2 > NO + O2', 'Fe(OH)3 > Fe2O3 + H2O', 'PbO2 > PbO + O2', 'KBrO3 > KBr + O2', '(NH4)2CO3 > NH3 + CO2 + H2O', 'Zn(OH)2 > ZnO + H2O', 'Ca(OH)2 > CaO + H2O']);
    fam(E, 'disp', ['Zn + HCl > ZnCl2 + H2', 'Mg + HCl > MgCl2 + H2', 'Na + H2O > NaOH + H2', 'K + H2O > KOH + H2', 'Ca + H2O > Ca(OH)2 + H2', 'Zn + CuSO4 > ZnSO4 + Cu', 'Fe + CuSO4 > FeSO4 + Cu', 'Mg + CuSO4 > MgSO4 + Cu', 'Cu + AgNO3 > Cu(NO3)2 + Ag', 'Zn + AgNO3 > Zn(NO3)2 + Ag', 'Cl2 + KBr > KCl + Br2', 'Cl2 + NaI > NaCl + I2', 'Br2 + KI > KBr + I2', 'Al + CuCl2 > AlCl3 + Cu', 'Fe + AgNO3 > Fe(NO3)2 + Ag', 'Mg + H2SO4 > MgSO4 + H2', 'Zn + H2SO4 > ZnSO4 + H2', 'Mg + AgNO3 > Mg(NO3)2 + Ag', 'Zn + FeSO4 > ZnSO4 + Fe', 'Mg + FeSO4 > MgSO4 + Fe', 'Fe + HCl > FeCl2 + H2', 'Cl2 + KI > KCl + I2', 'Br2 + NaI > NaBr + I2']);
    for (let n = 1; n <= 8; n++) E.push(['burn', burnAlk(n) + ' + O2 > CO2 + H2O']);
    for (let n = 2; n <= 6; n++) E.push(['burn', burnEne(n) + ' + O2 > CO2 + H2O']);
    for (let n = 2; n <= 4; n++) E.push(['burn', burnYne(n) + ' + O2 > CO2 + H2O']);
    fam(M, 'acid', ['HCl + NaOH > NaCl + H2O', 'H2SO4 + NaOH > Na2SO4 + H2O', 'H2SO4 + KOH > K2SO4 + H2O', 'H3PO4 + NaOH > Na3PO4 + H2O', 'H3PO4 + Ca(OH)2 > Ca3(PO4)2 + H2O', 'HNO3 + Ca(OH)2 > Ca(NO3)2 + H2O', 'HCl + Ca(OH)2 > CaCl2 + H2O', 'HCl + Al(OH)3 > AlCl3 + H2O', 'H2SO4 + Al(OH)3 > Al2(SO4)3 + H2O', 'H2SO4 + Ba(OH)2 > BaSO4 + H2O', 'HCl + Mg(OH)2 > MgCl2 + H2O', 'HNO3 + Al(OH)3 > Al(NO3)3 + H2O', 'H3PO4 + KOH > K3PO4 + H2O', 'H3PO4 + Mg(OH)2 > Mg3(PO4)2 + H2O', 'H2SO4 + NH3 > (NH4)2SO4', 'H3PO4 + NH3 > (NH4)3PO4', 'H2SO4 + Fe(OH)3 > Fe2(SO4)3 + H2O', 'HCl + Fe(OH)3 > FeCl3 + H2O', 'HCl + Zn(OH)2 > ZnCl2 + H2O', 'HNO3 + NaOH > NaNO3 + H2O', 'CH3COOH + NaOH > CH3COONa + H2O', 'H2SO4 + Ca(OH)2 > CaSO4 + H2O', 'H3PO4 + Al(OH)3 > AlPO4 + H2O', 'HNO3 + Mg(OH)2 > Mg(NO3)2 + H2O', 'H2SO4 + Mg(OH)2 > MgSO4 + H2O', 'HCl + Ba(OH)2 > BaCl2 + H2O', 'HNO3 + Ba(OH)2 > Ba(NO3)2 + H2O', 'H2SO4 + Zn(OH)2 > ZnSO4 + H2O']);
    fam(M, 'metal', ['Al + H2SO4 > Al2(SO4)3 + H2', 'Al + HCl > AlCl3 + H2', 'Mg + H3PO4 > Mg3(PO4)2 + H2', 'Zn + H3PO4 > Zn3(PO4)2 + H2', 'Al + H3PO4 > AlPO4 + H2', 'Ca + HCl > CaCl2 + H2', 'K + HCl > KCl + H2', 'Ca + H2SO4 > CaSO4 + H2', 'Na + H2SO4 > Na2SO4 + H2', 'Na + H3PO4 > Na3PO4 + H2', 'Fe + H2SO4 > FeSO4 + H2', 'Ca + H3PO4 > Ca3(PO4)2 + H2', 'Zn + NaOH > Na2ZnO2 + H2', 'Al + NaOH + H2O > NaAlO2 + H2', 'Al + KOH + H2O > KAlO2 + H2', 'Ba + H2O > Ba(OH)2 + H2', 'Mg + H2O > MgO + H2', 'Fe + H2O > Fe3O4 + H2', 'Li + H2O > LiOH + H2', 'Na + HCl > NaCl + H2', 'Al + H2O > Al2O3 + H2']);
    fam(M, 'prec', ['AgNO3 + NaCl > AgCl + NaNO3', 'BaCl2 + Na2SO4 > BaSO4 + NaCl', 'Pb(NO3)2 + KI > PbI2 + KNO3', 'FeCl3 + NaOH > Fe(OH)3 + NaCl', 'Al2(SO4)3 + NaOH > Al(OH)3 + Na2SO4', 'CuSO4 + NaOH > Cu(OH)2 + Na2SO4', 'Na2CO3 + CaCl2 > CaCO3 + NaCl', 'AgNO3 + K2CrO4 > Ag2CrO4 + KNO3', 'BaCl2 + Na3PO4 > Ba3(PO4)2 + NaCl', 'ZnS + HCl > ZnCl2 + H2S', 'FeS + HCl > FeCl2 + H2S', 'Na2S + HCl > NaCl + H2S', 'Na2CO3 + HCl > NaCl + H2O + CO2', 'CaCO3 + HCl > CaCl2 + H2O + CO2', 'NaHCO3 + HCl > NaCl + H2O + CO2', 'Na2CO3 + H2SO4 > Na2SO4 + H2O + CO2', 'Al2O3 + HCl > AlCl3 + H2O', 'Fe2O3 + HCl > FeCl3 + H2O', 'Ca3(PO4)2 + H2SO4 > CaSO4 + H3PO4', 'NaCl + H2SO4 > Na2SO4 + HCl', 'NaNO3 + H2SO4 > Na2SO4 + HNO3', 'CO2 + NaOH > Na2CO3 + H2O', 'SO2 + NaOH > Na2SO3 + H2O', 'CO2 + Ca(OH)2 > CaCO3 + H2O']);
    fam(M, 'comb', ['Fe2O3 + CO > Fe + CO2', 'Fe3O4 + H2 > Fe + H2O', 'Fe3O4 + CO > Fe + CO2', 'CuO + H2 > Cu + H2O', 'ZnO + C > Zn + CO', 'Fe2O3 + Al > Al2O3 + Fe', 'Cr2O3 + Al > Al2O3 + Cr', 'PbO + C > Pb + CO2', 'Fe2O3 + C > Fe + CO', 'SO2 + H2S > S8 + H2O', 'NH3 + O2 > NO + H2O', 'NH3 + O2 > N2 + H2O', 'CaC2 + H2O > Ca(OH)2 + C2H2', 'Al4C3 + H2O > Al(OH)3 + CH4', 'Ca3P2 + H2O > Ca(OH)2 + PH3', 'Mg3N2 + H2O > Mg(OH)2 + NH3', 'FeS2 + O2 > Fe2O3 + SO2', 'ZnS + O2 > ZnO + SO2', 'Cu2S + O2 > Cu2O + SO2', 'PbS + O2 > PbO + SO2', '(NH4)2Cr2O7 > N2 + Cr2O3 + H2O', 'Na2O2 + H2O > NaOH + O2', 'Na2O2 + CO2 > Na2CO3 + O2', 'KO2 + CO2 > K2CO3 + O2', 'KO2 + H2O > KOH + O2 + H2O2']);
    for (let n = 1; n <= 6; n++) M.push(['burn', burnOl(n) + ' + O2 > CO2 + H2O']);
    [9, 10].forEach((n) => M.push(['burn', burnAlk(n) + ' + O2 > CO2 + H2O'])); [7, 8].forEach((n) => M.push(['burn', burnEne(n) + ' + O2 > CO2 + H2O'])); [5, 6].forEach((n) => M.push(['burn', burnYne(n) + ' + O2 > CO2 + H2O']));
    fam(M, 'burn', ['C6H6 + O2 > CO2 + H2O', 'C7H8 + O2 > CO2 + H2O', 'C6H12O6 + O2 > CO2 + H2O', 'C12H22O11 + O2 > CO2 + H2O', 'C3H6O + O2 > CO2 + H2O', 'C4H10O + O2 > CO2 + H2O', 'CH3COOH + O2 > CO2 + H2O', 'C2H4O + O2 > CO2 + H2O', 'C2H6O2 + O2 > CO2 + H2O', 'C3H8O3 + O2 > CO2 + H2O']);
    fam(H, 'redox', ['KMnO4 + HCl > KCl + MnCl2 + Cl2 + H2O', 'K2Cr2O7 + HCl > KCl + CrCl3 + Cl2 + H2O', 'MnO2 + HCl > MnCl2 + Cl2 + H2O', 'Cu + HNO3 > Cu(NO3)2 + NO2 + H2O', 'Cu + HNO3 > Cu(NO3)2 + NO + H2O', 'Zn + HNO3 > Zn(NO3)2 + NH4NO3 + H2O', 'Zn + HNO3 > Zn(NO3)2 + N2O + H2O', 'Mg + HNO3 > Mg(NO3)2 + NH4NO3 + H2O', 'Ag + HNO3 > AgNO3 + NO + H2O', 'Ag + HNO3 > AgNO3 + NO2 + H2O', 'Fe + HNO3 > Fe(NO3)3 + NO + H2O', 'Pb + HNO3 > Pb(NO3)2 + NO + H2O', 'Cu + H2SO4 > CuSO4 + SO2 + H2O', 'Zn + H2SO4 > ZnSO4 + SO2 + H2O', 'Zn + H2SO4 > ZnSO4 + H2S + H2O', 'Ag + H2SO4 > Ag2SO4 + SO2 + H2O', 'C + H2SO4 > CO2 + SO2 + H2O', 'S8 + H2SO4 > SO2 + H2O', 'C + HNO3 > CO2 + NO2 + H2O', 'S8 + HNO3 > H2SO4 + NO2 + H2O', 'P4 + HNO3 > H3PO4 + NO2 + H2O', 'I2 + HNO3 > HIO3 + NO2 + H2O', 'Sn + HNO3 > SnO2 + NO2 + H2O', 'H2S + HNO3 > S8 + NO + H2O', 'H2S + H2SO4 > S8 + SO2 + H2O', 'HI + H2SO4 > I2 + SO2 + H2O', 'HBr + H2SO4 > Br2 + SO2 + H2O', 'KI + H2SO4 > K2SO4 + I2 + SO2 + H2O', 'KBr + H2SO4 > K2SO4 + Br2 + SO2 + H2O', 'KMnO4 + FeSO4 + H2SO4 > K2SO4 + MnSO4 + Fe2(SO4)3 + H2O', 'KMnO4 + H2C2O4 + H2SO4 > K2SO4 + MnSO4 + CO2 + H2O', 'KMnO4 + H2O2 + H2SO4 > K2SO4 + MnSO4 + O2 + H2O', 'KMnO4 + KI + H2SO4 > K2SO4 + MnSO4 + I2 + H2O', 'K2Cr2O7 + H2SO4 + FeSO4 > K2SO4 + Cr2(SO4)3 + Fe2(SO4)3 + H2O', 'K2Cr2O7 + H2SO4 + KI > K2SO4 + Cr2(SO4)3 + I2 + H2O', 'K2Cr2O7 + H2SO4 + H2S > K2SO4 + Cr2(SO4)3 + S8 + H2O', 'K2Cr2O7 + H2SO4 + SO2 > K2SO4 + Cr2(SO4)3 + H2O', 'KMnO4 + SO2 + H2O > K2SO4 + MnSO4 + H2SO4', 'KMnO4 + H2S + H2SO4 > K2SO4 + MnSO4 + S8 + H2O', 'KMnO4 > K2MnO4 + MnO2 + O2', 'Na2C2O4 + KMnO4 + H2SO4 > Na2SO4 + K2SO4 + MnSO4 + CO2 + H2O', 'FeC2O4 + KMnO4 + H2SO4 > Fe2(SO4)3 + MnSO4 + K2SO4 + CO2 + H2O', 'Na2S2O3 + I2 > Na2S4O6 + NaI', 'Na2S2O3 + Cl2 + H2O > NaHSO4 + HCl', 'H2S + Cl2 > S8 + HCl', 'H2S + I2 > S8 + HI', 'SO2 + I2 + H2O > H2SO4 + HI', 'SO2 + Cl2 + H2O > H2SO4 + HCl', 'H2O2 + KI > KOH + I2', 'PbS + H2O2 > PbSO4 + H2O', 'H2O2 + O3 > H2O + O2', 'PbO2 + HCl > PbCl2 + Cl2 + H2O', 'Pb3O4 + HNO3 > Pb(NO3)2 + PbO2 + H2O', 'Pb3O4 + HCl > PbCl2 + Cl2 + H2O', 'CuSO4 + KI > CuI + I2 + K2SO4', 'FeCl3 + SnCl2 > FeCl2 + SnCl4', 'FeCl3 + KI > FeCl2 + KCl + I2', 'HgCl2 + SnCl2 > Hg2Cl2 + SnCl4', 'K2CrO4 + H2SO4 > K2Cr2O7 + K2SO4 + H2O', 'NH3 + CuO > Cu + N2 + H2O', 'NH3 + Cl2 > N2 + NH4Cl', 'NH3 + Cl2 > NCl3 + HCl', 'As2O3 + HNO3 + H2O > H3AsO4 + NO', 'Cu2S + HNO3 > Cu(NO3)2 + H2SO4 + NO + H2O', 'CuS + HNO3 > Cu(NO3)2 + S8 + NO + H2O', 'KClO3 + HCl > KCl + Cl2 + H2O', 'Ca(OCl)2 + HCl > CaCl2 + Cl2 + H2O', 'KIO3 + KI + H2SO4 > K2SO4 + I2 + H2O', 'HBr + HBrO3 > Br2 + H2O', 'HI + HIO3 > I2 + H2O', 'Cu + FeCl3 > CuCl2 + FeCl2', 'Zn + FeCl3 > ZnCl2 + FeCl2', 'Fe2O3 + CO > Fe3O4 + CO2']);
    fam(H, 'disprop', ['Cl2 + NaOH > NaCl + NaClO + H2O', 'Cl2 + NaOH > NaCl + NaClO3 + H2O', 'Cl2 + H2O > HCl + HClO', 'I2 + NaOH > NaI + NaIO3 + H2O', 'Br2 + NaOH > NaBr + NaBrO3 + H2O', 'S8 + NaOH > Na2S + Na2S2O3 + H2O', 'S8 + KOH > K2S + K2SO3 + H2O', 'P4 + NaOH + H2O > PH3 + NaH2PO2', 'P4 + KOH + H2O > PH3 + KH2PO2', 'H2O2 > H2O + O2', 'NO2 + H2O > HNO3 + NO', 'NO2 + NaOH > NaNO2 + NaNO3 + H2O', 'HNO2 > HNO3 + NO + H2O', 'H3PO3 > H3PO4 + PH3', 'H3PO2 > H3PO4 + PH3', 'HClO3 > HClO4 + ClO2 + H2O', 'NaClO3 > NaCl + NaClO4', 'KClO3 > KCl + KClO4', 'Cl2 + Ca(OH)2 > CaCl2 + Ca(OCl)2 + H2O', 'Cl2 + KOH > KCl + KClO3 + H2O', 'Br2 + H2O > HBr + HBrO', 'Cu2O + H2SO4 > Cu + CuSO4 + H2O', 'Hg2Cl2 > Hg + HgCl2', 'MnO2 + KOH + O2 > K2MnO4 + H2O', 'K2MnO4 + H2O > KMnO4 + MnO2 + KOH']);
    const out = { easy: [], moderate: [], hard: [] }, seen = {};
    [[E, 'easy'], [M, 'moderate'], [H, 'hard']].forEach((a) => a[0].forEach((it) => {
      if (seen[it[1]]) return;
      const sol = blSolveStr(it[1]); if (!sol || Math.max.apply(null, sol.c) > 24 || sol.c.every((x) => x === 1)) return;
      seen[it[1]] = 1;
      const t = BL_FAM[it[0]];
      out[a[1]].push({ r: sol.r, p: sol.p, c: sol.c, tip: t[0], th: t[1], fam: it[0] });
    }));
    return out;
  })();

  function blScaleSvg() {
    const P = (a, r) => (170 + Math.sin(a) * r).toFixed(1) + ' ' + (50 + Math.cos(a) * r).toFixed(1);
    const d = (x) => x * Math.PI / 180;
    let ticks = '';
    for (let k = -16; k <= 16; k += 2) {
      const a = d(k), major = k % 8 === 0, r0 = major ? 99 : 103;
      ticks += '<line x1="' + (170 + Math.sin(a) * r0).toFixed(1) + '" y1="' + (50 + Math.cos(a) * r0).toFixed(1) + '" x2="' + (170 + Math.sin(a) * 111).toFixed(1) + '" y2="' + (50 + Math.cos(a) * 111).toFixed(1) + '" stroke="' + (k === 0 ? '#2EA043' : '#C9D1D9') + '" stroke-width="' + (major ? 1.6 : 0.9) + '"/>';
      if (major) ticks += '<text x="' + (170 + Math.sin(a) * 122).toFixed(1) + '" y="' + (50 + Math.cos(a) * 122 + 3).toFixed(1) + '" text-anchor="middle" font-size="7.5" font-weight="700" fill="#8B949E" font-family="ui-monospace,monospace">' + Math.abs(k) + '°</text>';
    }
    const pan = (k) => '<g data-r="' + k + '"><line x1="0" y1="0" x2="-33" y2="62" stroke="#1E1E1E" stroke-width="1.8" stroke-dasharray="2 1.6"/><line x1="0" y1="0" x2="33" y2="62" stroke="#1E1E1E" stroke-width="1.8" stroke-dasharray="2 1.6"/>' +
      '<circle cx="0" cy="0" r="3.2" fill="url(#bsBrass)" stroke="#1E1E1E"/><path d="M-37 62 Q0 88 37 62 Z" fill="url(#bsPan)" stroke="#1E1E1E"/>' +
      '<ellipse cx="0" cy="62" rx="37" ry="4.2" fill="#C9D1D9" stroke="#1E1E1E"/><g data-r="bk-' + k + '"></g>' +
      '<rect x="-17" y="90" width="34" height="14" rx="3" fill="#0D1117" stroke="#1E1E1E"/><text data-r="' + k + 't" x="0" y="101" text-anchor="middle" font-size="10.5" font-weight="800" fill="#E6EDF3" font-family="ui-monospace,monospace">0</text></g>';
    return '<svg class="bl-scale" viewBox="0 0 340 214" xmlns="http://www.w3.org/2000/svg"><defs>' +
      '<linearGradient id="bsBrass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0CF73"/><stop offset=".5" stop-color="#B8862B"/><stop offset="1" stop-color="#6E4F14"/></linearGradient>' +
      '<linearGradient id="bsBrassV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5a3f0f"/><stop offset=".35" stop-color="#F0CF73"/><stop offset=".7" stop-color="#B8862B"/><stop offset="1" stop-color="#4d360c"/></linearGradient>' +
      '<linearGradient id="bsIron" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#434b56"/><stop offset="1" stop-color="#12161c"/></linearGradient>' +
      '<linearGradient id="bsPan" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d0d7de"/><stop offset=".5" stop-color="#8b949e"/><stop offset="1" stop-color="#3b434d"/></linearGradient></defs>' +
      '<rect width="340" height="214" fill="#FDF9EE"/>' +
      '<path d="M92 208 L106 190 L234 190 L248 208 Z" fill="url(#bsIron)" stroke="#1E1E1E"/><rect x="84" y="206" width="172" height="6" rx="2" fill="#12161c" stroke="#1E1E1E"/>' +
      '<rect x="162" y="48" width="16" height="144" rx="3" fill="url(#bsBrassV)" stroke="#1E1E1E"/><rect x="154" y="176" width="32" height="14" rx="3" fill="url(#bsIron)" stroke="#1E1E1E"/>' +
      '<path d="M' + P(d(-19), 115) + ' A115 115 0 0 0 ' + P(d(19), 115) + ' L' + P(d(19), 96) + ' A96 96 0 0 1 ' + P(d(-19), 96) + ' Z" fill="#161B22" stroke="#1E1E1E"/>' + ticks +
      '<g data-r="beamg"><path d="M52 50 L76 43 L264 43 L288 50 L264 57 L76 57 Z" fill="url(#bsBrass)" stroke="#1E1E1E"/>' +
      '<circle cx="104" cy="50" r="3" fill="#0D1117"/><circle cx="132" cy="50" r="3" fill="#0D1117"/><circle cx="208" cy="50" r="3" fill="#0D1117"/><circle cx="236" cy="50" r="3" fill="#0D1117"/>' +
      '<path d="M168 58 L172 58 L170.7 158 L169.3 158 Z" fill="#F85149" stroke="#1E1E1E" stroke-width=".6"/><circle cx="170" cy="50" r="8" fill="url(#bsBrass)" stroke="#1E1E1E"/><circle cx="170" cy="50" r="3" fill="#0D1117"/></g>' +
      pan('pl') + pan('pr') + '</svg>';
  }

  GAMES.balancer = function (ctx, mode) {
    const eq = ctx.pick(BL_EQ[mode]);
    ctx.qTitle([eq.r.join(' + ') + ' \u2192 ' + eq.p.join(' + '), eq.r.join(' + ') + ' \u2192 ' + eq.p.join(' + ')]);
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
        co[i] = v; moves++; ctx.move(); sfx.balance(); refresh(); return;
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
  const SS_NAME = { '2-0': 'Linear', '3-0': 'Trigonal planar', '2-1': 'Bent', '4-0': 'Tetrahedral', '3-1': 'Trigonal pyramidal', '2-2': 'Bent (V-shaped)', '5-0': 'Trigonal bipyramidal', '4-1': 'See-saw', '3-2': 'T-shaped', '2-3': 'Linear', '6-0': 'Octahedral', '5-1': 'Square pyramidal', '4-2': 'Square planar' };
  const SS_HI = { 'Linear': 'रैखिक (Linear)', 'Trigonal planar': 'त्रिकोणीय समतलीय (Trigonal planar)', 'Bent': 'कोणीय (Bent)', 'Tetrahedral': 'चतुष्फलकीय (Tetrahedral)', 'Trigonal pyramidal': 'त्रिकोणीय पिरामिडी (Trigonal pyramidal)', 'Bent (V-shaped)': 'V-आकार / कोणीय (Bent)', 'Trigonal bipyramidal': 'त्रिकोणीय द्विपिरामिडी (Trigonal bipyramidal)', 'See-saw': 'सी-सॉ (See-saw)', 'T-shaped': 'T-आकार (T-shaped)', 'Octahedral': 'अष्टफलकीय (Octahedral)', 'Square pyramidal': 'वर्ग पिरामिडी (Square pyramidal)', 'Square planar': 'वर्ग समतलीय (Square planar)' };
  const SS_MOLS = (function () {
    const key = (bp, lp) => bp + '-' + lp;
    const rows = {
      easy: [['BeF2', 'Be', 'F', 2, 2, 2, 0, '180°'], ['BeCl2', 'Be', 'Cl', 2, 2, 2, 0, '180°'], ['CO2', 'C', 'O', 4, 4, 2, 0, '180°'], ['CS2', 'C', 'S', 4, 4, 2, 0, '180°'], ['BF3', 'B', 'F', 3, 3, 3, 0, '120°'], ['BCl3', 'B', 'Cl', 3, 3, 3, 0, '120°'], ['AlCl3', 'Al', 'Cl', 3, 3, 3, 0, '120°'], ['SO3', 'S', 'O', 6, 6, 3, 0, '120°'], ['NO3^{-}', 'N', 'O', 6, 6, 3, 0, '120°'], ['CO3^{2-}', 'C', 'O', 6, 6, 3, 0, '120°'], ['CH4', 'C', 'H', 4, 4, 4, 0, '109.5°'], ['CCl4', 'C', 'Cl', 4, 4, 4, 0, '109.5°'], ['SiF4', 'Si', 'F', 4, 4, 4, 0, '109.5°'], ['NH4^{+}', 'N', 'H', 4, 4, 4, 0, '109.5°'], ['BF4^{-}', 'B', 'F', 4, 4, 4, 0, '109.5°']],
      moderate: [['NH3', 'N', 'H', 5, 3, 3, 1, '107°'], ['PH3', 'P', 'H', 5, 3, 3, 1, '93.5°'], ['NF3', 'N', 'F', 5, 3, 3, 1, '102°'], ['PCl3', 'P', 'Cl', 5, 3, 3, 1, '100°'], ['H3O^{+}', 'O', 'H', 5, 3, 3, 1, '107°'], ['H2O', 'O', 'H', 6, 2, 2, 2, '104.5°'], ['H2S', 'S', 'H', 6, 2, 2, 2, '92°'], ['OF2', 'O', 'F', 6, 2, 2, 2, '103°'], ['SO2', 'S', 'O', 6, 4, 2, 1, '119°'], ['O3', 'O', 'O', 6, 4, 2, 1, '117°'], ['NO2^{-}', 'N', 'O', 6, 4, 2, 1, '115°'], ['SnCl2', 'Sn', 'Cl', 4, 2, 2, 1, '≈ 95°'], ['PCl5', 'P', 'Cl', 5, 5, 5, 0, '90° / 120°'], ['PF5', 'P', 'F', 5, 5, 5, 0, '90° / 120°'], ['SbCl5', 'Sb', 'Cl', 5, 5, 5, 0, '90° / 120°']],
      hard: [['SF4', 'S', 'F', 6, 4, 4, 1, '≈ 102° / 173°'], ['SeF4', 'Se', 'F', 6, 4, 4, 1, '≈ 100° / 169°'], ['ClF3', 'Cl', 'F', 7, 3, 3, 2, '≈ 87.5°'], ['BrF3', 'Br', 'F', 7, 3, 3, 2, '≈ 86°'], ['ICl3', 'I', 'Cl', 7, 3, 3, 2, '< 90°'], ['XeF2', 'Xe', 'F', 8, 2, 2, 3, '180°'], ['I3^{-}', 'I', 'I', 8, 2, 2, 3, '180°'], ['ICl2^{-}', 'I', 'Cl', 8, 2, 2, 3, '180°'], ['SF6', 'S', 'F', 6, 6, 6, 0, '90°'], ['XeF4', 'Xe', 'F', 8, 4, 4, 2, '90°'], ['ICl4^{-}', 'I', 'Cl', 8, 4, 4, 2, '90°'], ['BrF5', 'Br', 'F', 7, 5, 5, 1, '< 90°'], ['IF5', 'I', 'F', 7, 5, 5, 1, '< 90°'], ['XeOF4', 'Xe', 'F', 8, 6, 5, 1, 'near 90°'], ['XeO3', 'Xe', 'O', 8, 6, 3, 1, '≈ 103°']]
    };
    const HYB = { 2: 'sp', 3: 'sp²', 4: 'sp³', 5: 'sp³d', 6: 'sp³d²' };
    const YAW = [-140, -95, -50, 50, 95, 140];
    const out = {};
    Object.keys(rows).forEach((m) => {
      out[m] = [];
      rows[m].forEach((r) => YAW.forEach((y) => out[m].push({ f: r[0], c: r[1], l: r[2], ve: r[3], used: r[4], bp: r[5], lp: r[6], shape: SS_NAME[key(r[5], r[6])], hyb: HYB[r[5] + r[6]], ang: r[7], yaw: y })));
    });
    return out;
  })();
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
    ctx.qTitle(['Build ' + chem(T.f), '\u092C\u0928\u093E\u090F\u0901 ' + chem(T.f)]); ctx.badge(['Build: ' + chem(T.f) + ' \u00B7 target \u2220 ' + T.ang, '\u0928\u093F\u0930\u094D\u092E\u093E\u0923: ' + chem(T.f) + ' \u00B7 \u0932\u0915\u094D\u0937\u094D\u092F \u2220 ' + T.ang]);
    const tyaw = T.yaw * Math.PI / 180;
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
        bp = nb; lp = nl; moves++; ctx.move(); sfx.bondSnap(); ctx.say(null); sync();
      } else if (t.hasAttribute('data-rot')) {
        yaw += (+t.getAttribute('data-rot')) * Math.PI / 180;
        yaw = Math.atan2(Math.sin(yaw), Math.cos(yaw)); $('sl').value = Math.round(yaw * 180 / Math.PI);
        moves++; ctx.move(); sfx.rotateTick(); sync();
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
  const DT_CASES = (function () {
    const RAD = { Li: 152, Be: 111, B: 88, C: 77, N: 74, O: 66, F: 64, Na: 186, Mg: 160, Al: 143, Si: 117, P: 110, S: 104, Cl: 99, K: 231, Ca: 197, Ga: 135, Ge: 122, As: 120, Se: 117, Br: 114, Rb: 244, Sr: 215, In: 167, Sn: 140, Sb: 140, Te: 137, I: 133, Cs: 262, Ba: 217, Bi: 150, Pb: 146 };
    const EN = { Li: 1.0, Be: 1.5, B: 2.0, C: 2.5, N: 3.0, O: 3.5, F: 4.0, Na: 0.9, Mg: 1.2, Al: 1.5, Si: 1.8, P: 2.1, S: 2.5, Cl: 3.0, K: 0.8, Ca: 1.0, Ga: 1.6, Ge: 1.8, As: 2.0, Se: 2.4, Br: 2.8, Rb: 0.8, Sr: 1.0, In: 1.7, Sn: 1.8, Sb: 1.9, Te: 2.1, I: 2.5, Cs: 0.7, Ba: 0.9, Bi: 1.9, Po: 2.0, At: 2.2 };
    const IE1 = { Li: 520, Be: 899, B: 801, C: 1086, N: 1402, O: 1314, F: 1681, Na: 496, Mg: 738, Al: 578, Si: 786, P: 1012, S: 1000, Cl: 1251, K: 419, Ca: 590, Ga: 579, Ge: 762, As: 947, Se: 941, Br: 1140, Rb: 403, Sr: 550, Sn: 709, Sb: 834, Te: 869, I: 1008, Cs: 376, Ba: 503, Pb: 716, Bi: 703 };
    const IE2 = { Li: 7298, Be: 1757, B: 2427, C: 2353, N: 2856, O: 3388, F: 3374, Na: 4562, Mg: 1451, Al: 1817, Si: 1577, P: 1907, S: 2252, Cl: 2298, K: 3052, Ca: 1145 };
    const EA = { F: 328, Cl: 349, Br: 325, I: 295, O: 141, S: 200, Se: 195, Te: 190, C: 122, Si: 134, P: 72, Li: 60, Na: 53, K: 48 };
    const HV = { C: 4, N: 3, O: 2, F: 1, Si: 4, P: 3, S: 2, Cl: 1, Ge: 4, As: 3, Se: 2, Br: 1, Sn: 4, Sb: 3, Te: 2, I: 1 };
    const OV = { Li: 1, Be: 2, B: 3, C: 4, N: 5, Na: 1, Mg: 2, Al: 3, Si: 4, P: 5, S: 6, Cl: 7 };
    const SC = { P2: ['Li', 'Be', 'B', 'C', 'N', 'O', 'F'], P3: ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl'], P4: ['K', 'Ca', 'Ga', 'Ge', 'As', 'Se', 'Br'], P5: ['Rb', 'Sr', 'In', 'Sn', 'Sb', 'Te', 'I'],
      G1: ['Li', 'Na', 'K', 'Rb', 'Cs'], G2: ['Be', 'Mg', 'Ca', 'Sr', 'Ba'], G13: ['B', 'Al', 'Ga', 'In', 'Tl'], G14: ['C', 'Si', 'Ge', 'Sn', 'Pb'], G15: ['N', 'P', 'As', 'Sb', 'Bi'], G16: ['O', 'S', 'Se', 'Te', 'Po'], G17: ['F', 'Cl', 'Br', 'I', 'At'] };
    const ZOF = (s) => DT_POS[s].z, byZ = (a) => a.slice().sort((x, y) => ZOF(x) - ZOF(y));
    const typeOf = (id) => (id[0] === 'P' ? 'P' : 'G');
    const listEn = (a) => a.length < 2 ? a[0] : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];
    const listHi = (a) => a.length < 2 ? a[0] : a.slice(0, -1).join(', ') + ' और ' + a[a.length - 1];
    const ASK = { max: ['highest', 'सबसे अधिक'], min: ['lowest', 'सबसे कम'] };
    function sample(rng, scope, prev, val, ask, kmin) {
      const base = scope.filter((s) => val(s) !== undefined && DT_POS[s]);
      if (base.length < 3) return null;
      for (let t = 0; t < 40; t++) {
        const k = (kmin || 3) + Math.floor(rng() * (Math.min(6, base.length) - (kmin || 3) + 1)), pool = base.slice(), set = [];
        const pi = pool.indexOf(prev); if (pi >= 0) { set.push(prev); pool.splice(pi, 1); }
        while (set.length < k && pool.length) set.push(pool.splice(Math.floor(rng() * pool.length), 1)[0]);
        const vs = set.map(val), ex = ask === 'max' ? Math.max.apply(null, vs) : Math.min.apply(null, vs);
        if (set.length >= 3 && vs.filter((v) => v === ex).length === 1) return byZ(set);
      }
      return null;
    }
    const from = (prev, set) => (set.indexOf(prev) >= 0 ? ['From <b>' + prev + '</b>, ', '<b>' + prev + '</b> से आगे बढ़ते हुए, '] : ['', '']);
    const brief = (set, val, unit, ask) => byZ(set).sort((a, b) => (ask === 'max' ? val(b) - val(a) : val(a) - val(b))).map((s) => s + ' ' + (unit === null ? '' : val(s) + (unit || ''))).join(' › ');
    /* generic "numeric property" kind */
    const numKind = (o) => ({ tier: o.tier, concept: o.concept, ch: o.ch, build(rng, prev) {
      const sid = o.scopes[Math.floor(rng() * o.scopes.length)], ty = typeOf(sid), ask = rng() < 0.5 ? 'max' : 'min';
      const val = o.val(ty), set = sample(rng, SC[sid] || o.sets[sid], prev, val, ask); if (!set) return null;
      const f = from(prev, set), a = set.slice().sort((x, y) => (ask === 'max' ? val(y) - val(x) : val(x) - val(y)))[0];
      const tr = o.trend[ty] || o.trend.X;
      const q = tr[0] + ' ' + f[0] + (f[0] ? 'tap' : 'Tap') + ' the element with the <b>' + ASK[ask][0] + '</b> ' + o.en + ' among ' + listEn(set) + '.';
      const qh = tr[1] + ' ' + f[1] + listHi(set) + ' में से <b>' + ASK[ask][1] + '</b> ' + o.hi + ' वाला तत्व चुनें।';
      const vals = o.unit === null ? '' : ' ' + o.en + ': ' + brief(set, val, o.unit, ask) + '.';
      const valsH = o.unit === null ? '' : ' ' + o.hi + ': ' + brief(set, val, o.unit, ask) + '।';
      return { q: q, qh: qh, am: set, a: a, why: o.why(ty, ask, a) + vals + (o.extra ? ' ' + o.extra[0] : ''), wh: o.whyH(ty, ask, a) + valsH + (o.extra ? ' ' + o.extra[1] : '') };
    } });
    const KIND = {};
    KIND.rad = numKind({ tier: 'easy', concept: 'Periodic trends: atomic radius', ch: 'आवर्त प्रवृत्तियाँ: परमाणु त्रिज्या', scopes: ['P2', 'P3', 'P4', 'P5', 'G1', 'G2', 'G14', 'G15', 'G16', 'G17'], val: () => (s) => RAD[s], en: 'atomic radius', hi: 'परमाणु त्रिज्या', unit: ' pm',
      trend: { P: ['Atomic radius <b>decreases across a period</b> (noble gases excluded).', 'परमाणु त्रिज्या आवर्त में <b>बाएँ से दाएँ घटती है</b> (उत्कृष्ट गैसें छोड़कर)।'], G: ['Atomic radius <b>increases down a group</b>.', 'परमाणु त्रिज्या वर्ग में <b>ऊपर से नीचे बढ़ती है</b>।'] },
      why: (t) => (t === 'P' ? 'Across a period the nuclear charge rises while the shell stays the same, so atoms shrink.' : 'Each step down a group adds a new shell, so radius grows.'), whyH: (t) => (t === 'P' ? 'आवर्त में नाभिकीय आवेश बढ़ता है पर कोश वही रहता है, इसलिए त्रिज्या घटती है।' : 'वर्ग में नीचे जाने पर नया कोश जुड़ता है, इसलिए त्रिज्या बढ़ती है।') });
    KIND.met = numKind({ tier: 'easy', concept: 'Periodic trends: metallic character', ch: 'आवर्त प्रवृत्तियाँ: धात्विक गुण', scopes: ['P2', 'P3', 'P4', 'P5', 'G1', 'G2', 'G13', 'G14', 'G15', 'G16', 'G17'], val: (t) => (t === 'P' ? (s) => -DT_POS[s].g : (s) => DT_POS[s].p), en: 'metallic character', hi: 'धात्विक गुण', unit: null,
      trend: { P: ['Metallic character <b>decreases across a period</b>.', 'धात्विक गुण आवर्त में <b>बाएँ से दाएँ घटता है</b>।'], G: ['Metallic character <b>increases down a group</b>.', 'धात्विक गुण वर्ग में <b>ऊपर से नीचे बढ़ता है</b>।'] },
      why: (t) => (t === 'P' ? 'Left-side elements lose electrons most easily (low ionisation enthalpy), so they are the most metallic.' : 'Ionisation enthalpy falls down a group, so electron loss (metallic character) becomes easier.'), whyH: (t) => (t === 'P' ? 'बाईं ओर के तत्व इलेक्ट्रॉन सबसे आसानी से त्यागते हैं (कम आयनन एन्थैल्पी), अतः अधिक धात्विक होते हैं।' : 'वर्ग में नीचे आयनन एन्थैल्पी घटती है, इसलिए इलेक्ट्रॉन त्यागना (धात्विक गुण) आसान होता है।') });
    KIND.en = numKind({ tier: 'moderate', concept: 'Electronegativity trend (Pauling scale)', ch: 'विद्युत ऋणात्मकता प्रवृत्ति (पॉलिंग मापक्रम)', scopes: ['P2', 'P3', 'P4', 'P5', 'G1', 'G2', 'G15', 'G16', 'G17'], val: () => (s) => EN[s], en: 'electronegativity', hi: 'विद्युत ऋणात्मकता', unit: '',
      trend: { P: ['Electronegativity <b>increases across a period</b>.', 'विद्युत ऋणात्मकता आवर्त में <b>बाएँ से दाएँ बढ़ती है</b>।'], G: ['Electronegativity <b>decreases down a group</b>.', 'विद्युत ऋणात्मकता वर्ग में <b>ऊपर से नीचे घटती है</b>।'] },
      why: (t) => (t === 'P' ? 'Smaller atoms with a higher effective nuclear charge attract the bonding pair more strongly.' : 'Larger atoms hold the bonding pair farther from the nucleus, so the pull weakens.'), whyH: (t) => (t === 'P' ? 'छोटे परमाणु व अधिक प्रभावी नाभिकीय आवेश बंध-युग्म को अधिक कसकर खींचते हैं।' : 'बड़े परमाणुओं में बंध-युग्म नाभिक से दूर होता है, इसलिए आकर्षण घटता है।') });
    KIND.ie1 = numKind({ tier: 'hard', concept: 'First ionisation enthalpy and its exceptions', ch: 'प्रथम आयनन एन्थैल्पी व उसके अपवाद', scopes: ['P2', 'P3', 'P4', 'G1', 'G2', 'G14', 'G15', 'G16', 'G17'], val: () => (s) => IE1[s], en: 'first ionisation enthalpy (IE₁)', hi: 'प्रथम आयनन एन्थैल्पी (IE₁)', unit: ' kJ/mol',
      trend: { X: ['IE₁ generally rises across a period – but <b>watch the exceptions</b> (Be &gt; B, N &gt; O, Mg &gt; Al, P &gt; S).', 'IE₁ सामान्यतः आवर्त में बढ़ती है – पर <b>अपवादों पर ध्यान दें</b> (Be &gt; B, N &gt; O, Mg &gt; Al, P &gt; S)।'], P: ['IE₁ generally rises across a period – but <b>watch the exceptions</b> (Be &gt; B, N &gt; O, Mg &gt; Al, P &gt; S).', 'IE₁ सामान्यतः आवर्त में बढ़ती है – पर <b>अपवादों पर ध्यान दें</b> (Be &gt; B, N &gt; O, Mg &gt; Al, P &gt; S)।'], G: ['IE₁ generally falls down a group (watch Sn/Pb and Bi irregularities).', 'IE₁ सामान्यतः वर्ग में नीचे घटती है (Sn/Pb व Bi की अनियमितताओं पर ध्यान दें)।'] },
      why: () => 'Filled s² (Be, Mg) and half-filled p³ (N, P) subshells are extra stable, so they resist ionisation more than the next element.', whyH: () => 'पूर्ण-भरित s² (Be, Mg) व अर्ध-भरित p³ (N, P) उपकोश अतिरिक्त स्थायी होते हैं, इसलिए अगले तत्व की तुलना में आयनन कठिन होता है।' });
    KIND.ie2 = numKind({ tier: 'hard', concept: 'Second ionisation enthalpy jump', ch: 'द्वितीय आयनन एन्थैल्पी में उछाल', scopes: ['P2', 'P3', 'G1', 'G2'], sets: { G1: ['Li', 'Na', 'K'], G2: ['Be', 'Mg', 'Ca'] }, val: () => (s) => IE2[s], en: 'second ionisation enthalpy (IE₂)', hi: 'द्वितीय आयनन एन्थैल्पी (IE₂)', unit: ' kJ/mol',
      trend: { X: ['After losing one electron an alkali metal has a noble-gas core, so its <b>IE₂ jumps</b>.', 'एक इलेक्ट्रॉन त्यागने पर क्षार धातु का क्रोड उत्कृष्ट गैस जैसा हो जाता है, इसलिए उसकी <b>IE₂ में उछाल</b> आता है।'], P: ['After losing one electron an alkali metal has a noble-gas core, so its <b>IE₂ jumps</b>.', 'एक इलेक्ट्रॉन त्यागने पर क्षार धातु का क्रोड उत्कृष्ट गैस जैसा हो जाता है, इसलिए उसकी <b>IE₂ में उछाल</b> आता है।'], G: ['After losing one electron an alkali metal has a noble-gas core, so its <b>IE₂ jumps</b>.', 'एक इलेक्ट्रॉन त्यागने पर क्षार धातु का क्रोड उत्कृष्ट गैस जैसा हो जाता है, इसलिए उसकी <b>IE₂ में उछाल</b> आता है।'] },
      why: () => 'Removing a second electron from a stable noble-gas-like (ns²np⁶ / s¹ → core) ion needs far more energy.', whyH: () => 'स्थायी उत्कृष्ट गैस जैसे आयन से दूसरा इलेक्ट्रॉन निकालने में कहीं अधिक ऊर्जा लगती है।' });
    const EAS = { EA1: ['F', 'Cl', 'Br', 'I'], EA2: ['O', 'S', 'Se', 'Te'], EA3: ['C', 'Si', 'P', 'S', 'Cl', 'F', 'O'], EA4: ['F', 'Cl', 'Br', 'I', 'O', 'S', 'Se', 'Te'] };
    KIND.ea = numKind({ tier: 'hard', concept: 'Electron gain enthalpy exceptions', ch: 'इलेक्ट्रॉन लब्धि एन्थैल्पी के अपवाद', scopes: ['EA1', 'EA2', 'EA3', 'EA4'], sets: EAS, val: () => (s) => EA[s], en: 'magnitude of negative electron gain enthalpy (Δ<sub>eg</sub>H)', hi: 'ऋणात्मक इलेक्ट्रॉन लब्धि एन्थैल्पी (Δ<sub>eg</sub>H) का परिमाण', unit: ' kJ/mol',
      trend: { X: ['Δ<sub>eg</sub>H becomes more negative towards the right, but <b>Cl &gt; F and S &gt; O</b> because of the tiny 2p subshell’s electron repulsion.', 'Δ<sub>eg</sub>H दाईं ओर अधिक ऋणात्मक होती है, पर छोटे 2p उपकोश में इलेक्ट्रॉन प्रतिकर्षण के कारण <b>Cl &gt; F तथा S &gt; O</b> होता है।'], P: ['Δ<sub>eg</sub>H becomes more negative towards the right, but <b>Cl &gt; F and S &gt; O</b> because of the tiny 2p subshell’s electron repulsion.', 'Δ<sub>eg</sub>H दाईं ओर अधिक ऋणात्मक होती है, पर छोटे 2p उपकोश में इलेक्ट्रॉन प्रतिकर्षण के कारण <b>Cl &gt; F तथा S &gt; O</b> होता है।'], G: ['Δ<sub>eg</sub>H becomes more negative towards the right, but <b>Cl &gt; F and S &gt; O</b> because of the tiny 2p subshell’s electron repulsion.', 'Δ<sub>eg</sub>H दाईं ओर अधिक ऋणात्मक होती है, पर छोटे 2p उपकोश में इलेक्ट्रॉन प्रतिकर्षण के कारण <b>Cl &gt; F तथा S &gt; O</b> होता है।'] },
      why: () => 'The compact 2p subshell of F and O repels the incoming electron, so Cl and S release more energy than F and O.', whyH: () => 'F व O का सघन 2p उपकोश आने वाले इलेक्ट्रॉन को प्रतिकर्षित करता है, इसलिए Cl व S, F व O से अधिक ऊर्जा मुक्त करते हैं।' });
    /* ranking kinds on custom value functions */
    const custom = (o) => ({ tier: o.tier, concept: o.concept, ch: o.ch, build: o.build });
    KIND.iso = custom({ tier: 'moderate', concept: 'Isoelectronic species: ionic radii', ch: 'समइलेक्ट्रॉनिक स्पीशीज़: आयनिक त्रिज्या', build(rng, prev) {
      const sid = rng() < 0.5 ? ['N', 'O', 'F', 'Na', 'Mg', 'Al'] : ['P', 'S', 'Cl', 'K', 'Ca'], ask = rng() < 0.5 ? 'max' : 'min', val = (s) => -ZOF(s);
      const set = sample(rng, sid, prev, val, ask); if (!set) return null;
      const ion = { N: 'N³⁻', O: 'O²⁻', F: 'F⁻', Na: 'Na⁺', Mg: 'Mg²⁺', Al: 'Al³⁺', P: 'P³⁻', S: 'S²⁻', Cl: 'Cl⁻', K: 'K⁺', Ca: 'Ca²⁺' };
      const a = set.slice().sort((x, y) => (ask === 'max' ? val(y) - val(x) : val(x) - val(y)))[0], f = from(prev, set);
      const ions = set.map((s) => ion[s]).join(', ');
      return { q: 'The ions <b>' + ions + '</b> are isoelectronic. ' + f[0] + (f[0] ? 'tap' : 'Tap') + ' the element whose ion has the <b>' + (ask === 'max' ? 'largest' : 'smallest') + '</b> ionic radius.', qh: 'आयन <b>' + ions + '</b> समइलेक्ट्रॉनिक हैं। ' + f[1] + 'उस तत्व को चुनें जिसके आयन की त्रिज्या <b>' + (ask === 'max' ? 'सबसे अधिक' : 'सबसे कम') + '</b> है।', am: set, a: a,
        why: 'Same number of electrons, so radius ∝ 1/(nuclear charge): the ion with the lower Z (' + a + ', Z = ' + ZOF(a) + ') has the ' + (ask === 'max' ? 'weakest' : 'strongest') + ' pull on the electron cloud.', wh: 'इलेक्ट्रॉन संख्या समान है, अतः त्रिज्या ∝ 1/(नाभिकीय आवेश): ' + (ask === 'max' ? 'कम' : 'अधिक') + ' Z वाला आयन (' + a + ', Z = ' + ZOF(a) + ') इलेक्ट्रॉन-बादल को ' + (ask === 'max' ? 'सबसे कम' : 'सबसे अधिक') + ' कसकर खींचता है।' };
    } });
    KIND.hv = custom({ tier: 'moderate', concept: 'Valency towards hydrogen', ch: 'हाइड्रोजन के प्रति संयोजकता', build(rng, prev) {
      const sid = ['C', 'N', 'O', 'F', 'Si', 'P', 'S', 'Cl', 'Ge', 'As', 'Se', 'Br'], per = [['C', 'N', 'O', 'F'], ['Si', 'P', 'S', 'Cl'], ['Ge', 'As', 'Se', 'Br'], ['Sn', 'Sb', 'Te', 'I']][Math.floor(rng() * 4)], ask = rng() < 0.5 ? 'max' : 'min';
      void sid; const val = (s) => HV[s], set = sample(rng, per, prev, val, ask); if (!set) return null;
      const a = set.slice().sort((x, y) => (ask === 'max' ? val(y) - val(x) : val(x) - val(y)))[0], f = from(prev, set);
      return { q: 'Valency towards hydrogen = 8 − (group number) for groups 14–17. ' + f[0] + (f[0] ? 'tap' : 'Tap') + ' the element with the <b>' + ASK[ask][0] + '</b> valency towards hydrogen among ' + listEn(set) + '.', qh: 'हाइड्रोजन के प्रति संयोजकता = 8 − (वर्ग संख्या) (वर्ग 14–17)। ' + f[1] + listHi(set) + ' में से हाइड्रोजन के प्रति <b>' + ASK[ask][1] + '</b> संयोजकता वाला तत्व चुनें।', am: set, a: a,
        why: 'Hydride valencies: ' + brief(set, val, '', ask) + ' (CH₄, NH₃, H₂O, HF type).', wh: 'हाइड्राइड संयोजकताएँ: ' + brief(set, val, '', ask) + ' (CH₄, NH₃, H₂O, HF प्रकार)।' };
    } });
    KIND.ov = custom({ tier: 'moderate', concept: 'Valency towards oxygen', ch: 'ऑक्सीजन के प्रति संयोजकता', build(rng, prev) {
      const per = rng() < 0.5 ? ['Li', 'Be', 'B', 'C', 'N'] : ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl'], ask = rng() < 0.5 ? 'max' : 'min', val = (s) => OV[s], set = sample(rng, per, prev, val, ask); if (!set) return null;
      const a = set.slice().sort((x, y) => (ask === 'max' ? val(y) - val(x) : val(x) - val(y)))[0], f = from(prev, set);
      return { q: 'Maximum valency towards oxygen equals the group number (1–7). ' + f[0] + (f[0] ? 'tap' : 'Tap') + ' the element with the <b>' + ASK[ask][0] + '</b> valency towards oxygen among ' + listEn(set) + '.', qh: 'ऑक्सीजन के प्रति अधिकतम संयोजकता = समूह संख्या (1–7)। ' + f[1] + listHi(set) + ' में से ऑक्सीजन के प्रति <b>' + ASK[ask][1] + '</b> संयोजकता वाला तत्व चुनें।', am: set, a: a,
        why: 'Oxide valencies: ' + brief(set, val, '', ask) + ' (e.g. Na₂O, MgO, Al₂O₃, SiO₂, P₂O₅, SO₃, Cl₂O₇).', wh: 'ऑक्साइड संयोजकताएँ: ' + brief(set, val, '', ask) + ' (जैसे Na₂O, MgO, Al₂O₃, SiO₂, P₂O₅, SO₃, Cl₂O₇)।' };
    } });
    KIND.acid = custom({ tier: 'moderate', concept: 'Acidic / basic character of oxides', ch: 'ऑक्साइडों का अम्लीय / क्षारीय गुण', build(rng, prev) {
      const mode = Math.floor(rng() * 3), ask = rng() < 0.5 ? 'max' : 'min';
      const cfg = mode === 0 ? { sc: SC.P3, val: (s) => DT_POS[s].g > 10 ? DT_POS[s].g - 10 : DT_POS[s].g, hi: 'acidic', t: 'Oxides turn from basic to acidic across a period (Na₂O basic → Al₂O₃ amphoteric → Cl₂O₇ strongly acidic).', th: 'आवर्त में ऑक्साइड क्षारीय से अम्लीय होते जाते हैं (Na₂O क्षारीय → Al₂O₃ उभयधर्मी → Cl₂O₇ प्रबल अम्लीय)।' } : mode === 1 ? { sc: SC.G1, val: (s) => DT_POS[s].p, hi: 'basic', t: 'Basic strength of oxides increases down Group 1.', th: 'वर्ग 1 में नीचे जाने पर ऑक्साइडों की क्षारीय प्रबलता बढ़ती है।' } : { sc: SC.G2, val: (s) => DT_POS[s].p, hi: 'basic', t: 'Basic strength of oxides increases down Group 2 (BeO amphoteric → BaO strongly basic).', th: 'वर्ग 2 में नीचे जाने पर ऑक्साइडों की क्षारीय प्रबलता बढ़ती है (BeO उभयधर्मी → BaO प्रबल क्षारीय)।' };
      const set = sample(rng, cfg.sc, prev, cfg.val, ask); if (!set) return null;
      const a = set.slice().sort((x, y) => (ask === 'max' ? cfg.val(y) - cfg.val(x) : cfg.val(x) - cfg.val(y)))[0], f = from(prev, set);
      const word = cfg.hi === 'acidic' ? (ask === 'max' ? ['most acidic', 'सबसे अधिक अम्लीय'] : ['most basic', 'सबसे अधिक क्षारीय']) : (ask === 'max' ? ['most basic', 'सबसे अधिक क्षारीय'] : ['least basic', 'सबसे कम क्षारीय']);
      return { q: f[0] + (f[0] ? 'tap' : 'Tap') + ' the element whose oxide is the <b>' + word[0] + '</b> among ' + listEn(set) + '.', qh: f[1] + listHi(set) + ' में से उस तत्व को चुनें जिसका ऑक्साइड <b>' + word[1] + '</b> है।', am: set, a: a, why: cfg.t, wh: cfg.th };
    } });
    const DIAG = [['Li', 'Mg'], ['Be', 'Al'], ['B', 'Si']];
    KIND.diag = custom({ tier: 'moderate', concept: 'Diagonal relationship', ch: 'विकर्ण संबंध', build(rng) {
      const pr = DIAG[Math.floor(rng() * 3)], rev = rng() < 0.5, src = rev ? pr[1] : pr[0], ans = rev ? pr[0] : pr[1];
      const others = ['Na', 'Mg', 'Al', 'Si', 'K', 'Ca', 'Li', 'Be', 'B', 'C', 'P'].filter((s) => s !== src && s !== ans && s !== pr[0] && s !== pr[1]);
      const set = [ans]; while (set.length < 4) { const x = others.splice(Math.floor(rng() * others.length), 1)[0]; set.push(x); }
      const sorted = byZ(set);
      return { q: '<b>' + src + '</b> shows a <b>diagonal relationship</b> with an element of the next period/group. Tap that element among ' + listEn(sorted) + '.', qh: '<b>' + src + '</b> अगले आवर्त/वर्ग के एक तत्व के साथ <b>विकर्ण संबंध</b> दर्शाता है। ' + listHi(sorted) + ' में से उस तत्व को चुनें।', am: sorted, a: ans,
        why: 'Diagonal pairs (Li–Mg, Be–Al, B–Si) have similar charge/size ratio (polarising power), hence similar properties.', wh: 'विकर्ण युग्मों (Li–Mg, Be–Al, B–Si) का आवेश/आकार अनुपात (ध्रुवण क्षमता) समान होता है, इसलिए गुण भी समान होते हैं।' };
    } });
    KIND.amph = custom({ tier: 'hard', concept: 'Amphoteric oxides', ch: 'उभयधर्मी ऑक्साइड', build(rng, prev) {
      const am = ['Be', 'Al', 'Zn', 'Sn', 'Pb'], non = ['Na', 'Mg', 'Ca', 'K', 'Li', 'Si', 'P', 'S', 'Cl', 'B'].filter((s) => s !== prev);
      const a = am[Math.floor(rng() * am.length)], set = [a]; while (set.length < 4) set.push(non.splice(Math.floor(rng() * non.length), 1)[0]);
      if (prev && DT_POS[prev] && set.indexOf(prev) < 0 && am.indexOf(prev) < 0) set[1] = prev;
      const s2 = byZ(set), f = from(prev, s2);
      return { q: f[0] + (f[0] ? 'tap' : 'Tap') + ' the element whose oxide is <b>amphoteric</b> (reacts with both acids and bases) among ' + listEn(s2) + '.', qh: f[1] + listHi(s2) + ' में से उस तत्व को चुनें जिसका ऑक्साइड <b>उभयधर्मी</b> है (अम्ल व क्षार दोनों से अभिक्रिया)।', am: s2, a: a, why: 'Amphoteric oxides: BeO, Al₂O₃, ZnO, SnO/SnO₂, PbO/PbO₂ – the rest here are basic (metals) or acidic (non-metals).', wh: 'उभयधर्मी ऑक्साइड: BeO, Al₂O₃, ZnO, SnO/SnO₂, PbO/PbO₂ – शेष क्षारीय (धातु) या अम्लीय (अधातु) हैं।' };
    } });
    KIND.neut = custom({ tier: 'hard', concept: 'Neutral oxides', ch: 'उदासीन ऑक्साइड', build(rng, prev) {
      const a = rng() < 0.5 ? 'C' : 'N', non = ['Na', 'Mg', 'Ca', 'K', 'Li', 'Si', 'P', 'S', 'Cl', 'B', 'Al'].filter((s) => s !== prev), set = [a];
      while (set.length < 4) set.push(non.splice(Math.floor(rng() * non.length), 1)[0]);
      const s2 = byZ(set), f = from(prev, s2);
      return { q: f[0] + (f[0] ? 'tap' : 'Tap') + ' the element that forms a <b>neutral oxide</b> (neither acidic nor basic) among ' + listEn(s2) + '.', qh: f[1] + listHi(s2) + ' में से वह तत्व चुनें जो <b>उदासीन ऑक्साइड</b> (न अम्लीय, न क्षारीय) बनाता है।', am: s2, a: a, why: a === 'C' ? 'CO is a neutral oxide (no acid/base reaction). The other elements form acidic, basic or amphoteric oxides.' : 'NO and N₂O are neutral oxides. The other elements form acidic, basic or amphoteric oxides.', wh: a === 'C' ? 'CO उदासीन ऑक्साइड है। अन्य तत्व अम्लीय, क्षारीय या उभयधर्मी ऑक्साइड बनाते हैं।' : 'NO व N₂O उदासीन ऑक्साइड हैं। अन्य तत्व अम्लीय, क्षारीय या उभयधर्मी ऑक्साइड बनाते हैं।' };
    } });
    KIND.inert = custom({ tier: 'hard', concept: 'Inert-pair effect', ch: 'अक्रिय युग्म प्रभाव', build(rng) {
      const g = [['G13', 'Tl', '+1', 'Tl⁺'], ['G14', 'Pb', '+2', 'Pb²⁺'], ['G15', 'Bi', '+3', 'Bi³⁺']][Math.floor(rng() * 3)], base = SC[g[0]].filter((s) => s !== g[1] && s !== 'Po' && s !== 'At'), set = [g[1]];
      const n = 2 + Math.floor(rng() * 2); while (set.length < n + 1) set.push(base.splice(Math.floor(rng() * base.length), 1)[0]);
      const s2 = byZ(set);
      return { q: 'Among ' + listEn(s2) + ', tap the element that shows its <b>lower oxidation state (' + g[2] + ')</b> most stably – the <b>inert-pair effect</b>.', qh: listHi(s2) + ' में से उस तत्व को चुनें जो अपनी <b>निम्न ऑक्सीकरण अवस्था (' + g[2] + ')</b> सबसे स्थायी रूप से दर्शाता है – <b>अक्रिय युग्म प्रभाव</b>।', am: s2, a: g[1],
        why: 'The heaviest member holds its ns² pair tightly (poor shielding by d/f electrons), so ' + g[3] + ' is more stable than the group oxidation state.', wh: 'सबसे भारी सदस्य अपने ns² युग्म को कसकर पकड़ता है (d/f इलेक्ट्रॉनों का कमज़ोर परिरक्षण), इसलिए ' + g[3] + ' समूह की ऑक्सीकरण अवस्था से अधिक स्थायी है।' };
    } });
    /* easy: block / position / valence electrons */
    const dtBlock = (g, sym) => (sym === 'H' ? 's' : g <= 2 ? 's' : g === 18 ? 'n' : g <= 12 ? 'd' : 'p');
    const MAINS = DT_EL.filter((e) => e[4] !== 18 && e[0] !== 'H');
    const BN = { s: ['s-block', 's-ब्लॉक'], p: ['p-block', 'p-ब्लॉक'], d: ['d-block', 'd-ब्लॉक'] };
    KIND.block = custom({ tier: 'easy', concept: 'Block placement (s, p, d)', ch: 'ब्लॉक स्थिति (s, p, d)', build(rng, prev) {
      const b = ['s', 'p', 'd'][Math.floor(rng() * 3)], inB = MAINS.filter((e) => dtBlock(e[4], e[0]) === b).map((e) => e[0]), out = MAINS.filter((e) => dtBlock(e[4], e[0]) !== b).map((e) => e[0]).filter((s) => s !== prev);
      const a = (prev && inB.indexOf(prev) >= 0 && rng() < 0.5) ? prev : inB[Math.floor(rng() * inB.length)], set = [a];
      while (set.length < 4) set.push(out.splice(Math.floor(rng() * out.length), 1)[0]);
      const s2 = byZ(set), f = from(prev, s2);
      return { q: 'Elements of Groups 1–2 are <b>s-block</b>, Groups 3–12 are <b>d-block</b>, Groups 13–18 are <b>p-block</b>. ' + f[0] + (f[0] ? 'tap' : 'Tap') + ' the <b>' + BN[b][0] + '</b> element among ' + listEn(s2) + '.', qh: 'वर्ग 1–2 के तत्व <b>s-ब्लॉक</b>, वर्ग 3–12 <b>d-ब्लॉक</b> तथा वर्ग 13–18 <b>p-ब्लॉक</b> के होते हैं। ' + f[1] + listHi(s2) + ' में से <b>' + BN[b][1] + '</b> का तत्व चुनें।', am: s2, a: a,
        why: a + ' lies in Group ' + DT_POS[a].g + ', Period ' + DT_POS[a].p + ' → ' + BN[b][0] + '.', wh: a + ' वर्ग ' + DT_POS[a].g + ', आवर्त ' + DT_POS[a].p + ' में है → ' + BN[b][1] + '।' };
    } });
    KIND.pos = custom({ tier: 'easy', concept: 'Period and group identification', ch: 'आवर्त व वर्ग की पहचान', build(rng, prev) {
      const pool = MAINS.filter((e) => e[4] !== 3 || true), tgt = pool[Math.floor(rng() * pool.length)], a = (prev && DT_POS[prev] && DT_POS[prev].g !== 18 && rng() < 0.4) ? prev : tgt[0], P = DT_POS[a];
      const near = MAINS.filter((e) => e[0] !== a && (e[3] === P.p || e[4] === P.g) && !(e[3] === P.p && e[4] === P.g)).map((e) => e[0]), set = [a];
      while (set.length < 5 && near.length) set.push(near.splice(Math.floor(rng() * near.length), 1)[0]);
      if (set.length < 4) return null;
      const s2 = byZ(set);
      return { q: 'Tap the element placed in <b>Period ' + P.p + ', Group ' + P.g + '</b> among ' + listEn(s2) + '.', qh: listHi(s2) + ' में से <b>आवर्त ' + P.p + ', वर्ग ' + P.g + '</b> में स्थित तत्व चुनें।', am: s2, a: a, why: a + ' (Z = ' + P.z + ') has ' + P.p + ' shell(s) → Period ' + P.p + ', and sits in Group ' + P.g + '.', wh: a + ' (Z = ' + P.z + ') में ' + P.p + ' कोश हैं → आवर्त ' + P.p + ', और यह वर्ग ' + P.g + ' में स्थित है।' };
    } });
    KIND.val = custom({ tier: 'easy', concept: 'Valence electrons and group number', ch: 'संयोजी इलेक्ट्रॉन व वर्ग संख्या', build(rng, prev) {
      const ve = (e) => (e[4] <= 2 ? e[4] : e[4] - 10), mains = MAINS.filter((e) => e[4] <= 2 || e[4] >= 13), n = 1 + Math.floor(rng() * 7), inN = mains.filter((e) => ve(e) === n).map((e) => e[0]), out = mains.filter((e) => ve(e) !== n).map((e) => e[0]).filter((s) => s !== prev);
      if (!inN.length) return null;
      const a = (prev && inN.indexOf(prev) >= 0 && rng() < 0.5) ? prev : inN[Math.floor(rng() * inN.length)], set = [a];
      while (set.length < 4) { const x = out.splice(Math.floor(rng() * out.length), 1)[0]; if (ve(DT_EL.find((e) => e[0] === x)) !== n) set.push(x); }
      const s2 = byZ(set), f = from(prev, s2);
      return { q: 'Valence electrons = group number (Groups 1–2) or group number − 10 (Groups 13–17). ' + f[0] + (f[0] ? 'tap' : 'Tap') + ' the element with <b>' + n + ' valence electron' + (n > 1 ? 's' : '') + '</b> among ' + listEn(s2) + '.', qh: 'संयोजी इलेक्ट्रॉन = वर्ग संख्या (वर्ग 1–2) या वर्ग संख्या − 10 (वर्ग 13–17)। ' + f[1] + listHi(s2) + ' में से <b>' + n + ' संयोजी इलेक्ट्रॉन</b> वाला तत्व चुनें।', am: s2, a: a, why: a + ' is in Group ' + DT_POS[a].g + ' → ' + n + ' valence electron' + (n > 1 ? 's' : '') + '.', wh: a + ' वर्ग ' + DT_POS[a].g + ' में है → ' + n + ' संयोजी इलेक्ट्रॉन।' };
    } });
    const KINDS = { easy: ['rad', 'met', 'block', 'pos', 'val'], moderate: ['en', 'iso', 'hv', 'ov', 'acid', 'diag'], hard: ['ie1', 'ie2', 'ea', 'amph', 'neut', 'inert'] };
    const OUT = { easy: [], moderate: [], hard: [] }, WANT = { easy: 90, moderate: 90, hard: 95 };
    Object.keys(OUT).forEach((tier, ti) => {
      const rng = mulberry32(7000 + ti * 131), seen = {}; let guard = 0;
      const startPool = MAINS.filter((e) => e[4] !== 18).map((e) => e[0]);
      while (OUT[tier].length < WANT[tier] && guard++ < 9000) {
        const start = startPool[Math.floor(rng() * startPool.length)], steps = [], ks = [];
        let prev = start, bad = false;
        for (let k = 0; k < 3 && !bad; k++) {
          let st = null, kid = null;
          for (let t = 0; t < 30 && !st; t++) { kid = KINDS[tier][Math.floor(rng() * KINDS[tier].length)]; if (ks.length && ks[ks.length - 1] === kid && rng() < 0.7) continue; st = KIND[kid].build(rng, prev); }
          if (!st) { bad = true; break; }
          steps.push(stp(st.q, st.qh, st.am.join(' '), st.a, st.why, st.wh)); ks.push(kid); prev = st.a;
        }
        if (bad) continue;
        const sig = steps.map((s) => s.q).join('|'); if (seen[sig]) continue; seen[sig] = 1;
        const K = KIND[ks[0]];
        OUT[tier].push({ start: start, concept: K.concept, ch: K.ch, steps: steps });
      }
    });
    return OUT;
  })();
  const dtBlock = (g, sym) => (sym === 'H' ? 's' : g <= 2 ? 's' : g === 18 ? 'n' : g <= 12 ? 'd' : 'p');

  GAMES.detective = function (ctx, mode) {
    const C = ctx.pick(DT_CASES[mode]);
    ctx.qTitle([C.concept + ' (start ' + C.start + ')', C.ch + ' (' + C.start + ' \u0938\u0947)']);
    ctx.instr(bi('Follow the <b>3 clues</b>. Tap an element on the table, press <b>Scan Clue</b> to light up the candidates, then <b>Lock Answer</b>. Each correct answer moves you to the next element; the last one is the mystery element.', '<b>3 \u0938\u0902\u0915\u0947\u0924\u094B\u0902</b> \u0915\u093E \u0905\u0928\u0941\u0938\u0930\u0923 \u0915\u0930\u0947\u0902\u0964 \u0924\u093E\u0932\u093F\u0915\u093E \u092A\u0930 \u0924\u0924\u094D\u0935 \u091A\u0941\u0928\u0947\u0902, \u0909\u092E\u094D\u092E\u0940\u0926\u0935\u093E\u0930\u094B\u0902 \u0915\u094B \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F <b>Scan Clue</b> \u0926\u092C\u093E\u090F\u0901, \u092B\u093F\u0930 <b>Lock Answer</b>\u0964 \u0939\u0930 \u0938\u0939\u0940 \u0909\u0924\u094D\u0924\u0930 \u0905\u0917\u0932\u0947 \u0924\u0924\u094D\u0935 \u092A\u0930 \u0932\u0947 \u091C\u093E\u0924\u093E \u0939\u0948; \u0905\u0902\u0924\u093F\u092E \u0924\u0924\u094D\u0935 \u0930\u0939\u0938\u094D\u092F\u092E\u092F \u0924\u0924\u094D\u0935 \u0939\u0948\u0964'));
    let si = 0, here = C.start, sel = null, scans = 0, locked = false;
    const visited = {}; let scanSet = null, scanT = 0;
    ctx.stage.innerHTML =
      '<div class="cge-card" data-r="brief" data-keep="1"></div><div class="dt-clue" data-r="clue"></div>' +
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
        scans++; scanSet = C.steps[si].am; scanT = performance.now(); sfx.radarPing();
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
  const MF_AM = { H: 1, C: 12, N: 14, O: 16, F: 19, Na: 23, Mg: 24, Al: 27, Si: 28, P: 31, S: 32, Cl: 35.5, K: 39, Ca: 40, Cr: 52, Mn: 55, Fe: 56, Cu: 63.5, Zn: 65, Br: 80, Ag: 108, I: 127, Ba: 137, Pb: 207 };
  const mfMass = (f) => { const c = parseFormula(f); return Object.keys(c).reduce((s, e) => s + c[e] * MF_AM[e], 0); };
  const MF_RX = {}, MF_MM = {};
  const MF_LIST = { easy: ['N2 + H2 > NH3', 'H2 + O2 > H2O', 'C + O2 > CO2', 'SO2 + O2 > SO3', 'CH4 + O2 > CO2 + H2O', 'CaCO3 > CaO + CO2', 'Fe2O3 + CO > Fe + CO2', 'Mg + O2 > MgO', 'Na + Cl2 > NaCl', 'Al + O2 > Al2O3', 'H2 + Cl2 > HCl', 'C3H8 + O2 > CO2 + H2O', 'C2H6 + O2 > CO2 + H2O', 'C2H4 + O2 > CO2 + H2O', 'Zn + HCl > ZnCl2 + H2', 'Mg + HCl > MgCl2 + H2', 'Al + HCl > AlCl3 + H2', 'NaOH + HCl > NaCl + H2O', 'CuO + H2 > Cu + H2O', 'KClO3 > KCl + O2', 'H2O2 > H2O + O2', 'Fe + O2 > Fe2O3', 'NO + O2 > NO2', 'CO + O2 > CO2', 'N2 + O2 > NO', 'Ca + O2 > CaO'],
    two: ['N2 + H2 > NH3', 'H2 + O2 > H2O', 'SO2 + O2 > SO3', 'CH4 + O2 > CO2 + H2O', 'Fe2O3 + CO > Fe + CO2', 'Mg + O2 > MgO', 'Al + O2 > Al2O3', 'C3H8 + O2 > CO2 + H2O', 'Zn + HCl > ZnCl2 + H2', 'Al + HCl > AlCl3 + H2', 'NaOH + H2SO4 > Na2SO4 + H2O', 'CuO + H2 > Cu + H2O', 'Fe + O2 > Fe2O3', 'NO + O2 > NO2', 'C2H6 + O2 > CO2 + H2O', 'Ca(OH)2 + HCl > CaCl2 + H2O', 'Al + H2SO4 > Al2(SO4)3 + H2'] };
  const mfAdd = (s) => {
    const k = s.replace(/\s/g, '');
    if (MF_RX[k]) return k;
    const sol = blSolveStr(s); if (!sol) throw new Error('mole reaction not balanceable: ' + s);
    MF_RX[k] = { r: sol.r.map((f, i) => [sol.c[i], f]), p: sol.p.map((f, i) => [sol.c[sol.r.length + i], f]) };
    sol.r.concat(sol.p).forEach((f) => { MF_MM[f] = mfMass(f); });
    return k;
  };
  [].concat(MF_LIST.easy, MF_LIST.two).forEach(mfAdd);
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
    const easy = [], mod = [], hard = [], rng = mulberry32(99);
    const g2 = (a, b) => { while (b) { const t = a % b; a = b; b = t; } return a; };
    MF_LIST.easy.forEach((s) => {
      const k = s.replace(/\s/g, ''), rx = MF_RX[k], cp = rx.p[0][0];
      let step = 1; rx.r.forEach((x) => { const d = cp / g2(cp, x[0]); step = step / g2(step, d) * d; });
      const ts = []; for (let T = step; T <= 12; T += step) { const need = rx.r.map((x) => T * x[0] / cp); if (Math.max.apply(null, need) <= 12) ts.push(T); }
      ts.slice(0, 4).forEach((T) => easy.push({ k: k, T: T }));
    });
    MF_LIST.two.forEach((s) => {
      const k = s.replace(/\s/g, ''), rx = MF_RX[k], seen = {}; let tries = 0, got = 0;
      while (got < 7 && tries++ < 200) {
        const a = 1 + Math.floor(rng() * 6), b = 1 + Math.floor(rng() * 8), f = {}; f[rx.r[0][1]] = a; f[rx.r[1][1]] = b;
        if (a * rx.r[0][0] > 40 || seen[a + ',' + b]) continue;
        const sol = mfSolve(rx, f); if (sol.prod[rx.p[0][1]] > 24) continue;
        seen[a + ',' + b] = 1; got++; mod.push({ k: k, f: f, ask: [rx.p[0][1]] });
      }
      got = 0; tries = 0; const seen2 = {};
      while (got < 5 && tries++ < 200) {
        const a = [0.5, 1, 1.5, 2, 3, 4][Math.floor(rng() * 6)], b = [0.5, 1, 1.5, 2, 3, 4, 5, 6][Math.floor(rng() * 8)];
        if (seen2[a + ',' + b]) continue; seen2[a + ',' + b] = 1;
        const f = {}; f[rx.r[0][1]] = +(a * MF_MM[rx.r[0][1]]).toFixed(1); f[rx.r[1][1]] = +(b * MF_MM[rx.r[1][1]]).toFixed(1);
        got++; hard.push({ k: k, f: f, ask: rng() < 0.35 && rx.p.length > 1 ? [rx.p[0][1], rx.p[1][1]] : [rx.p[Math.floor(rng() * rx.p.length)][1]] });
      }
    });
    ['CaCO3 > CaO + CO2', 'KClO3 > KCl + O2', 'H2O2 > H2O + O2'].forEach((s) => { const k = mfAdd(s), rx = MF_RX[k]; [0.5, 1, 1.5, 2, 2.5, 3, 4, 5].forEach((m) => hard.push({ k: k, f: (function () { const f = {}; f[rx.r[0][1]] = +(m * MF_MM[rx.r[0][1]]).toFixed(1); return f; })(), ask: rx.p.map((x) => x[1]) })); });
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
    ctx.qTitle([mfEq(rx), mfEq(rx)]);
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
    ctx.instr(order);
    if (mode === 'easy') ctx.badge(['Target: ' + task.T + ' mol ' + chem(mainP), '\u0932\u0915\u094D\u0937\u094D\u092F: ' + task.T + ' \u092E\u094B\u0932 ' + chem(mainP)]);
    let ui = '';
    if (mode === 'easy') {
      ui += '<div class="mf-hop">' + names.map((f, i) => '<div class="mf-h"><div><span style="color:' + COLS[i] + '">■</span> ' + chem(f) + '</div><div class="mf-st"><button data-f="' + f + '" data-d="-1">−</button><b data-r="v-' + f + '">0</b><span>' + bi('mol', 'मोल') + '</span><button data-f="' + f + '" data-d="1">+</button></div></div>').join('') + '</div>';
    } else {
      const asks = task.ask.map((f, i) => '<label class="mf-q"><span>' + bi('Yield of ' + chem(f) + ' (' + unit + ')', chem(f) + ' की उपज (' + unitHi + ')') + '</span><input type="number" inputmode="decimal" step="any" data-q="p' + i + '" placeholder="?"></label>').join('');
      ui += '<div class="mf-ans">' + asks + (multi ? '<label class="mf-q"><span>' + bi('Excess reactant left (' + unit + ')', 'बचा आधिक्य अभिकारक (' + unitHi + ')') + '</span><input type="number" inputmode="decimal" step="any" data-q="ex" placeholder="?"></label>' : '') + '</div>';
    }
    if (multi) ui += '<div class="mf-lr"><span>' + bi('Limiting reagent:', 'सीमांत अभिकर्मक:') + '</span>' + names.map((f) => '<button class="cge-chip" data-lr="' + f + '">' + chem(f) + '</button>').join('') + '<button class="cge-chip" data-lr="EXACT">' + bi('Exact mix ⚖️', 'सटीक मिश्रण ⚖️') + '</button></div>';
    ctx.stage.innerHTML =
      (mode === 'easy' ? '<div class="cge-card">' + order + '</div>' : '<div class="cge-card" data-keep="1">\uD83D\uDCE6 ' + names.map((f) => '<b>' + task.f[f] + ' ' + unit + ' ' + chem(f) + '</b>').join(' + ') + '</div>') +
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
      sfx.factoryRun();
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
      if (ch === '(' || ch === ')' || ch === '=' || ch === '#' || /[1-9]/.test(ch)) { toks.push(ch); i++; continue; }
      const t = CB_TOK.find((x) => s.startsWith(x, i));
      if (!t) throw new Error('bad structure token at ' + i + ' in ' + s);
      toks.push(t); i += t.length;
    }
    const nodes = [], edges = [], stack = [], ring = {}; let prev = -1, order = 1;
    toks.forEach((k) => {
      if (k === '(') stack.push(prev);
      else if (k === ')') prev = stack.pop();
      else if (k === '=') order = 2;
      else if (k === '#') order = 3;
      else if (/[1-9]/.test(k)) { if (ring[k] === undefined) ring[k] = prev; else { edges.push([ring[k], prev, 1]); delete ring[k]; } }
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

  /* ---- IUPAC namer: works on the parsed graph (longest/most-unsaturated chain, lowest locants) ---- */
  const CB_STEM = ['meth', 'eth', 'prop', 'but', 'pent', 'hex', 'hept', 'oct', 'non', 'dec'];
  const CB_STEM_HI = ['मेथ', 'एथ', 'प्रोप', 'ब्यूट', 'पेन्ट', 'हेक्स', 'हेप्ट', 'ऑक्ट', 'नोन', 'डेक'];
  const CB_MUL = ['', '', 'di', 'tri', 'tetra'], CB_MUL_HI = ['', '', 'डाई', 'ट्राई', 'टेट्रा'];
  const CB_SUBHI = { methyl: 'मेथिल', ethyl: 'एथिल', chloro: 'क्लोरो', bromo: 'ब्रोमो', hydroxy: 'हाइड्रॉक्सी' };
  const cmpArr = (a, b) => { for (let i = 0; i < Math.max(a.length, b.length); i++) { if (a[i] === undefined) return -1; if (b[i] === undefined) return 1; if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1; } return 0; };
  /* spec: { n, dbl:[loc], tri:[loc], pg:'' | 'ol' | 'al' | 'oic', pgloc:[..], subs:[[loc,'methyl'],...] } -> {en, hi} */
  function cbNameFromSpec(sp) {
    const n = sp.n, D = sp.dbl.slice().sort((a, b) => a - b), T = sp.tri.slice().sort((a, b) => a - b), pg = sp.pg || '';
    const stem = CB_STEM[n - 1], stemH = CB_STEM_HI[n - 1];
    const multi = D.length + T.length;
    const noLoc = (n <= 2 || (n === 3 && multi === 1 && !pg)) && multi <= 1 && !(pg === 'ol' && n > 2);
    let en, hi;
    const lst = (a) => a.join(',');
    const sufEn = pg === 'ol' ? 'ol' : pg === 'al' ? 'al' : pg === 'oic' ? 'oic acid' : '';
    const sufHi = pg === 'ol' ? 'ऑल' : pg === 'al' ? 'ऐल' : pg === 'oic' ? 'ओइक अम्ल' : '';
    const pgLocEn = pg === 'ol' && n > 2 ? '-' + lst(sp.pgloc) + '-' : '';
    const vowel = sufEn && /^[aeiou]/.test(sufEn);
    if (!multi) {
      const base = stem + 'an' + (sufEn ? '' : 'e');
      en = pg === 'ol' ? stem + 'an' + (n > 2 ? '-' + lst(sp.pgloc) + '-' : '') + 'ol' : sufEn ? stem + 'an' + sufEn : base;
      if (pg === 'oic') en = stem + 'an' + 'oic acid';
      hi = pg === 'ol' ? (n > 2 ? stemH + 'ेन-' + lst(sp.pgloc) + '-ऑल' : stemH + 'ेनॉल') : pg === 'al' ? stemH + 'ेनल' : pg === 'oic' ? stemH + 'ेनोइक अम्ल' : stemH + 'ेन';
    } else {
      const parts = [], partsH = [];
      const mk = (arr, w, wh) => {
        const mul = arr.length;
        parts.push((noLoc ? '' : '-' + lst(arr) + '-') + (mul > 1 ? CB_MUL[mul] : '') + w);
        partsH.push((noLoc ? '' : '-' + lst(arr) + '-') + (mul > 1 ? CB_MUL_HI[mul] : '') + wh);
      };
      if (D.length) mk(D, 'en', 'ईन'); if (T.length) mk(T, 'yn', 'आइन');
      let body = parts.join(''), bodyH = partsH.join('');
      const hasMul = D.length > 1 || T.length > 1;
      const endE = (D.length && T.length) ? '' : '';
      if (sufEn) {
        en = stem + (hasMul ? 'a' : '') + body + (vowel ? '' : 'e') + (pg === 'ol' ? pgLocEn.replace(/^-?/, '-') .replace(/-$/, '') : '');
        /* build explicitly */
        const last = T.length ? 'yn' : 'en';
        en = stem + (hasMul ? 'a' : '') + body + (pg === 'ol' ? (n > 2 ? '-' + lst(sp.pgloc) + '-ol' : 'ol') : pg === 'al' ? 'al' : 'oic acid');
        if (pg === 'ol' && n <= 2) en = stem + body + 'ol';
        void last; void endE;
        hi = stemH + (hasMul ? 'ा' : '') + bodyH + (pg === 'ol' ? (n > 2 ? '-' + lst(sp.pgloc) + '-ऑल' : 'ऑल') : pg === 'al' ? 'ल' : 'ोइक अम्ल');
      } else {
        en = stem + (hasMul ? 'a' : '') + body + 'e';
        hi = stemH + (hasMul ? 'ा' : '') + bodyH;
        if (noLoc) { hi = stemH + (T.length ? 'ाइन' : 'ीन'); }
      }
      en = en.replace('--', '-');
    }
    /* prefixes */
    const groups = {};
    sp.subs.forEach((x) => { (groups[x[1]] = groups[x[1]] || []).push(x[0]); });
    const names = Object.keys(groups).sort((a, b) => (a < b ? -1 : 1));
    const omitLoc = n === 1 || (n === 2 && sp.subs.length === 1 && !multi && !pg);
    const pre = names.map((k) => { const l = groups[k].slice().sort((a, b) => a - b); return (omitLoc ? '' : lst(l) + '-') + (l.length > 1 ? CB_MUL[l.length] : '') + k; });
    const preH = names.map((k) => { const l = groups[k].slice().sort((a, b) => a - b); return (omitLoc ? '' : lst(l) + '-') + (l.length > 1 ? CB_MUL_HI[l.length] : '') + CB_SUBHI[k]; });
    en = pre.join('-') + en; hi = preH.join('-') + hi;
    en = en.replace(/^([^a-z]*)([a-z])/, (m, a, b) => a + b.toUpperCase());
    return { en: en, hi: hi };
  }
  /* extract the IUPAC spec from a graph */
  function cbSpecOf(G) {
    const N = G.nodes.length, isC = (i) => G.nodes[i] === 'C' || G.nodes[i] === 'CHO' || G.nodes[i] === 'COOH';
    const adj = G.nodes.map(() => []);
    G.edges.forEach((e) => { adj[e[0]].push([e[1], e[2]]); adj[e[1]].push([e[0], e[2]]); });
    const has = (t) => G.nodes.some((x) => x === t);
    const pgTok = has('COOH') ? 'COOH' : has('CHO') ? 'CHO' : has('OH') ? 'OH' : '';
    const pgName = pgTok === 'COOH' ? 'oic' : pgTok === 'CHO' ? 'al' : pgTok === 'OH' ? 'ol' : '';
    const pgCarb = (i) => (pgTok === 'OH' ? adj[i].some((x) => G.nodes[x[0]] === 'OH') : G.nodes[i] === pgTok);
    const paths = [];
    const dfs = (path) => {
      paths.push(path.slice());
      const last = path[path.length - 1];
      adj[last].forEach((x) => { if (isC(x[0]) && path.indexOf(x[0]) < 0) { path.push(x[0]); dfs(path); path.pop(); } });
    };
    for (let i = 0; i < N; i++) if (isC(i)) dfs([i]);
    let best = null;
    paths.forEach((p0) => {
      [p0, p0.slice().reverse()].forEach((p) => {
        if (p.length > 1 && p === p0 && false) return;
        const inP = {}; p.forEach((x, k) => { inP[x] = k + 1; });
        const dbl = [], tri = [], pgl = [], subs = []; let ok = true;
        for (let k = 0; k < p.length - 1; k++) { const o = (adj[p[k]].find((x) => x[0] === p[k + 1]) || [0, 1])[1]; if (o === 2) dbl.push(k + 1); if (o === 3) tri.push(k + 1); }
        p.forEach((c, k) => {
          if (pgCarb(c)) pgl.push(k + 1);
          adj[c].forEach((x) => {
            if (inP[x[0]]) return;
            const t = G.nodes[x[0]];
            if (t === 'Cl') subs.push([k + 1, 'chloro']); else if (t === 'Br') subs.push([k + 1, 'bromo']);
            else if (t === 'OH') { if (pgTok !== 'OH') subs.push([k + 1, 'hydroxy']); }
            else if (t === 'C') {
              if (x[1] !== 1) { ok = false; return; }
              const nb = adj[x[0]].filter((y) => y[0] !== c);
              if (!nb.length) subs.push([k + 1, 'methyl']);
              else if (nb.length === 1 && G.nodes[nb[0][0]] === 'C' && nb[0][1] === 1 && adj[nb[0][0]].length === 1) subs.push([k + 1, 'ethyl']);
              else ok = false;
            } else ok = false;
          });
        });
        if (!ok) return;
        const cnt = G.nodes.filter((t, i) => isC(i)).length;
        const totMulti = G.edges.filter((e) => e[2] > 1).length;
        const totPg = G.nodes.filter((t, i) => isC(i) && pgCarb(i)).length;
        const multiAll = dbl.concat(tri).sort((a, b) => a - b);
        const alpha = subs.slice().sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : a[0] - b[0])).map((x) => x[0]);
        const key = [-pgl.length, -(dbl.length + tri.length), -p.length, -subs.length, pgl, multiAll, dbl, subs.map((x) => x[0]).sort((a, b) => a - b), alpha];
        void cnt; void totMulti; void totPg;
        const cmp = (A, B) => { for (let i = 0; i < A.length; i++) { const r = Array.isArray(A[i]) ? cmpArr(A[i], B[i]) : (A[i] === B[i] ? 0 : A[i] < B[i] ? -1 : 1); if (r) return r; } return 0; };
        if (!best || cmp(key, best.key) < 0) best = { key: key, spec: { n: p.length, dbl: dbl, tri: tri, pg: pgName, pgloc: pgl, subs: subs.map((x) => [x[0], x[1]]) } };
      });
    });
    return best && best.spec;
  }
  const cbName = (G) => { const sp = cbSpecOf(G); return sp ? cbNameFromSpec(sp) : null; };

  /* ---- spec -> structure string, condensed formula, formula ---- */
  function cbBuild(c) {
    /* c: { n, c0: 'C'|'CHO'|'COOH', b: [orders], subs: [[tokens]...] } */
    let s = '';
    for (let i = 0; i < c.n; i++) {
      s += i === 0 ? c.c0 : 'C';
      (c.subs[i] || []).forEach((t) => { s += '(' + t + ')'; });
      if (i < c.n - 1) s += c.b[i] === 2 ? '=' : c.b[i] === 3 ? '#' : '';
    }
    return s;
  }
  function cbCond(c) {
    const out = [];
    for (let i = 0; i < c.n; i++) {
      if (i === 0 && c.c0 !== 'C') { out.push(c.c0); continue; }
      const bs = (i > 0 ? c.b[i - 1] : 0) + (i < c.n - 1 ? c.b[i] : 0), sub = c.subs[i] || [];
      const h = 4 - bs - sub.length;
      let t = 'C' + (h > 0 ? 'H' + (h > 1 ? subs(String(h)) : '') : '');
      const cnt = {}; sub.forEach((x) => { cnt[x] = (cnt[x] || 0) + 1; });
      ['Cl', 'Br'].forEach((x) => { if (cnt[x]) t += x + (cnt[x] > 1 ? subs(String(cnt[x])) : ''); });
      ['C', 'CC'].forEach((x) => { if (cnt[x]) t += '(' + (x === 'C' ? 'CH₃' : 'CH₂CH₃') + ')' + (cnt[x] > 1 ? subs(String(cnt[x])) : ''); });
      if (cnt.OH) t += (sub.length === 1 && (i === 0 || i === c.n - 1)) ? 'OH' : '(OH)';
      out.push(t);
    }
    return out.map((t, i) => (i < c.n - 1 ? t + (c.b[i] === 2 ? '=' : c.b[i] === 3 ? '≡' : '–') : t)).join('').replace(/–$/, '');
  }
  function cbValid(c) {
    for (let i = 0; i < c.n; i++) {
      const bs = (i > 0 ? c.b[i - 1] : 0) + (i < c.n - 1 ? c.b[i] : 0) + (c.subs[i] || []).length;
      if (bs > 4) return false;
      if (i === 0 && c.c0 !== 'C' && ((c.subs[0] || []).length || c.b[0] !== 1)) return false;
      if ((c.subs[i] || []).indexOf('OH') >= 0 && ((i > 0 ? c.b[i - 1] : 1) > 1 || (i < c.n - 1 ? c.b[i] : 1) > 1)) return false;
    }
    return true;
  }
  const cbMk = (n, o) => { const c = { n: n, c0: o.c0 || 'C', b: o.b || new Array(Math.max(0, n - 1)).fill(1), subs: [] }; for (let i = 0; i < n; i++) c.subs.push([]); (o.s || []).forEach((x) => { c.subs[x[0]].push(x[1]); }); return c; };

  /* ---- bilingual explanation text from a spec ---- */
  function cbText(sp, nm, f, mode) {
    const ch = sp.n, st = CB_STEM[ch - 1], stH = CB_STEM_HI[ch - 1];
    const parts = [], partsH = [];
    if (sp.pg) { const w = { ol: ['the –OH (alcohol) group', '–OH (ऐल्कोहॉल) समूह'], al: ['the –CHO (aldehyde) group', '–CHO (ऐल्डिहाइड) समूह'], oic: ['the –COOH (acid) group', '–COOH (अम्ल) समूह'] }[sp.pg]; parts.push('Parent chain = longest chain holding ' + w[0] + ' (' + ch + ' C, ' + st + '-)'); partsH.push('मूल श्रृंखला = वह सबसे लंबी श्रृंखला जिसमें ' + w[1] + ' हो (' + ch + ' C, ' + stH + '-)'); }
    else if (sp.dbl.length + sp.tri.length) { parts.push('Parent chain = longest chain containing every C=C / C≡C (' + ch + ' C, ' + st + '-)'); partsH.push('मूल श्रृंखला = वह सबसे लंबी श्रृंखला जिसमें सभी C=C / C≡C हों (' + ch + ' C, ' + stH + '-)'); }
    else { parts.push('Parent chain = longest carbon chain (' + ch + ' C, ' + st + 'ane)'); partsH.push('मूल श्रृंखला = सबसे लंबी कार्बन श्रृंखला (' + ch + ' C, ' + stH + 'ेन)'); }
    parts.push('number from the end giving the principal group, then multiple bonds, then substituents the lowest locants'); partsH.push('उस सिरे से क्रमांकन करें जिससे मुख्य समूह, फिर बहुआबंध, फिर प्रतिस्थापियों को न्यूनतम स्थान-अंक मिलें');
    if (sp.subs.length) { parts.push('substituents ' + sp.subs.map((x) => x[1] + ' on C-' + x[0]).join(', ') + ' are named alphabetically'); partsH.push('प्रतिस्थापी ' + sp.subs.map((x) => CB_SUBHI[x[1]] + ' (C-' + x[0] + ')').join(', ') + ' वर्णानुक्रम में लिखे जाते हैं'); }
    return { why: parts.join('; ') + ' → ' + nm.en + '.', wh: partsH.join('; ') + ' → ' + nm.hi + '।' };
  }
  /* distractor names by perturbing the spec */
  function cbDistract(sp, nm, extra) {
    const out = [], seen = {}; seen[nm.en] = 1;
    const add = (s2) => { if (!s2 || s2.n < 1 || s2.n > 10) return; const lc = {}; let bad = false; s2.subs.forEach((x) => { lc[x[0]] = (lc[x[0]] || 0) + 1; if (lc[x[0]] > 2 || x[0] > s2.n || x[0] < 1) bad = true; }); if (bad) return; const r = cbNameFromSpec(s2); if (!seen[r.en]) { seen[r.en] = 1; out.push(r.en); } };
    const cp = () => JSON.parse(JSON.stringify(sp));
    const mir = (l) => sp.n + 1 - l, mirB = (l) => sp.n - l;
    let a = cp(); a.dbl = sp.dbl.map(mirB); a.tri = sp.tri.map(mirB); a.pgloc = sp.pgloc.map(mir); a.subs = sp.subs.map((x) => [mir(x[0]), x[1]]); add(a);
    if (sp.subs.length) { a = cp(); a.subs[0][0] = Math.min(sp.n, a.subs[0][0] + 1); add(a); a = cp(); a.subs[a.subs.length - 1][0] = Math.max(1, a.subs[a.subs.length - 1][0] - 1); add(a); a = cp(); a.subs[0][1] = a.subs[0][1] === 'chloro' ? 'bromo' : a.subs[0][1] === 'bromo' ? 'chloro' : a.subs[0][1] === 'methyl' ? 'ethyl' : a.subs[0][1] === 'hydroxy' ? 'chloro' : 'methyl'; add(a); }
    if (sp.dbl.length) { a = cp(); a.dbl[0] = Math.min(sp.n - 1, a.dbl[0] + 1); add(a); a = cp(); a.dbl[0] = Math.max(1, a.dbl[0] - 1); add(a); }
    if (sp.tri.length) { a = cp(); a.tri[0] = Math.min(sp.n - 1, a.tri[0] + 1); add(a); a = cp(); a.tri[0] = Math.max(1, a.tri[0] - 1); add(a); }
    if (sp.pg === 'ol' || sp.pg === 'al' || sp.pg === 'oic') { a = cp(); a.pg = sp.pg === 'ol' ? 'al' : sp.pg === 'al' ? 'oic' : 'al'; a.pgloc = [1]; add(a); if (sp.pg === 'ol' && sp.n > 2) { a = cp(); a.pgloc = [Math.min(sp.n, sp.pgloc[0] + 1)]; add(a); } }
    a = cp(); a.n = sp.n + 1; add(a); a = cp(); a.n = Math.max(2, sp.n - 1); a.subs = a.subs.map((x) => [Math.min(a.n, x[0]), x[1]]); a.dbl = a.dbl.map((x) => Math.min(a.n - 1, x)); a.tri = a.tri.map((x) => Math.min(a.n - 1, x)); a.pgloc = a.pgloc.map((x) => Math.min(a.n, x)); add(a);
    (extra || []).forEach((x) => { if (!seen[x]) { seen[x] = 1; out.push(x); } });
    return out;
  }
  const hNames = (s) => s; void hNames;

  const CB_POOL = (function () {
    const rng = mulberry32(2025), seen = {}, E = [], M = [], H = [];
    const hintOf = (kind, sp) => {
      const en = { alkane: 'Alkanes (CₙH₂ₙ₊₂) have only single bonds: every carbon keeps 4 − (bonds) hydrogens.', alkene: 'Alkenes (CₙH₂ₙ) contain one C=C: each carbon on the double bond keeps 2 fewer H.', alkyne: 'Alkynes (CₙH₂ₙ₋₂) contain one C≡C: a triple bond uses 3 of carbon\'s 4 valencies.', halo: 'Halogens are substituents (prefix chloro-/bromo-); the carbon keeps 4 − (bonds) hydrogens.', mix: 'Count the carbons of the longest chain first, then place every substituent and multiple bond.' }[kind];
      const hi = { alkane: 'एल्केन (CₙH₂ₙ₊₂) में केवल एकल आबंध होते हैं: प्रत्येक कार्बन पर 4 − (आबंध) हाइड्रोजन बचते हैं।', alkene: 'एल्कीन (CₙH₂ₙ) में एक C=C होता है: द्विबंध वाले प्रत्येक कार्बन पर 2 हाइड्रोजन कम रहते हैं।', alkyne: 'एल्काइन (CₙH₂ₙ₋₂) में एक C≡C होता है: त्रिबंध कार्बन की 4 संयोजकताओं में से 3 लेता है।', halo: 'हैलोजन प्रतिस्थापी (substituent) हैं (पूर्वलग्न क्लोरो-/ब्रोमो-); कार्बन पर 4 − (आबंध) हाइड्रोजन बचते हैं।', mix: 'पहले सबसे लंबी श्रृंखला के कार्बन गिनें, फिर प्रत्येक प्रतिस्थापी व बहुआबंध रखें।' }[kind];
      return [en, hi];
    };
    function push(list, c, kind, mcq) {
      if (!cbValid(c)) return;
      const s = cbBuild(c); let G; try { G = cbParse(s); } catch (e) { return; }
      const sp = cbSpecOf(G); if (!sp) return;
      const nm = cbNameFromSpec(sp); if (seen[nm.en]) return;
      seen[nm.en] = 1;
      const f = cbFormulaOf(G), t = cbText(sp, nm, f), h = hintOf(kind, sp);
      const it = { n: nm.en, nh: nm.hi, f: f, s: s, cond: cbCond(c), hint: h[0], hh: h[1], why: t.why, wh: t.wh, sp: sp };
      if (mcq) { const d = cbDistract(sp, nm); if (d.length < 3) return; const o = [nm.en].concat(d.slice(0, 3)); it.o = o; }
      list.push(it);
    }
    /* ---------- EASY: straight chains C1-C6 ---------- */
    for (let n = 1; n <= 6; n++) push(E, cbMk(n, {}), 'alkane');
    for (let n = 2; n <= 6; n++) for (let p = 0; p <= Math.floor((n - 2) / 1) && p < n - 1; p++) { if (p + 1 > n - 1 - p) break; const b = new Array(n - 1).fill(1); b[p] = 2; push(E, cbMk(n, { b: b }), 'alkene'); const b3 = new Array(n - 1).fill(1); b3[p] = 3; push(E, cbMk(n, { b: b3 }), 'alkyne'); }
    ['Cl', 'Br'].forEach((x) => {
      for (let n = 1; n <= 6; n++) for (let i = 0; i < n; i++) push(E, cbMk(n, { s: [[i, x]] }), 'halo');
      for (let n = 1; n <= 4; n++) for (let i = 0; i < n; i++) for (let j = i; j < n; j++) push(E, cbMk(n, { s: [[i, x], [j, x]] }), 'halo');
    });
    for (let n = 1; n <= 3; n++) for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) push(E, cbMk(n, { s: [[i, 'Cl'], [j, 'Br']] }), 'halo');
    for (let n = 2; n <= 4; n++) for (let p = 0; p < n - 1; p++) for (let i = 0; i < n; i++) { const b = new Array(n - 1).fill(1); b[p] = 2; push(E, cbMk(n, { b: b, s: [[i, 'Cl']] }), 'halo'); }
    /* ---------- MODERATE: branched alkanes / alkenes / alkynes / rings ---------- */
    for (let n = 4; n <= 7; n++) {
      const pos = []; for (let i = 1; i < n - 1; i++) pos.push(i);
      const subsets = [];
      pos.forEach((a) => { subsets.push([a]); pos.forEach((b) => { if (b >= a) { subsets.push([a, b]); pos.forEach((d) => { if (d >= b && (d !== b || b !== a) ) subsets.push([a, b, d]); }); } }); });
      subsets.forEach((ss) => push(M, cbMk(n, { s: ss.map((x) => [x, 'C']) }), 'alkane', true));
    }
    for (let n = 3; n <= 6; n++) for (let p = 0; p < n - 1; p++) for (let i = 0; i < n; i++) {
      const b = new Array(n - 1).fill(1); b[p] = 2; push(M, cbMk(n, { b: b, s: [[i, 'C']] }), 'alkene', true);
      for (let j = i; j < n; j++) push(M, cbMk(n, { b: b, s: [[i, 'C'], [j, 'C']] }), 'alkene', true);
      const b3 = new Array(n - 1).fill(1); b3[p] = 3; push(M, cbMk(n, { b: b3, s: [[i, 'C']] }), 'alkyne', true);
    }
    const RING = [['C1CC1', 'Cyclopropane', 'साइक्लोप्रोपेन', '(CH₂)₃', ['Cyclopropane', 'Propane', 'Propene', 'Cyclobutane']], ['C1CCC1', 'Cyclobutane', 'साइक्लोब्यूटेन', '(CH₂)₄', ['Cyclobutane', 'Butane', 'But-1-ene', 'Cyclopropane']], ['C1CCCC1', 'Cyclopentane', 'साइक्लोपेन्टेन', '(CH₂)₅', ['Cyclopentane', 'Pentane', 'Pent-1-ene', 'Cyclohexane']], ['C1CCCCC1', 'Cyclohexane', 'साइक्लोहेक्सेन', '(CH₂)₆', ['Cyclohexane', 'Hexane', 'Hex-1-ene', 'Cyclopentane']], ['C1(C)CC1', 'Methylcyclopropane', 'मेथिलसाइक्लोप्रोपेन', 'C₃H₅–CH₃', ['Methylcyclopropane', 'Cyclobutane', 'But-1-ene', 'Cyclopropylmethane']], ['C1(C)CCC1', 'Methylcyclobutane', 'मेथिलसाइक्लोब्यूटेन', 'C₄H₇–CH₃', ['Methylcyclobutane', 'Cyclopentane', 'Methylcyclopropane', 'Pent-1-ene']], ['C1(C)CCCC1', 'Methylcyclopentane', 'मेथिलसाइक्लोपेन्टेन', 'C₅H₉–CH₃', ['Methylcyclopentane', 'Cyclohexane', 'Methylcyclobutane', 'Hex-1-ene']], ['C1=CC1', 'Cyclopropene', 'साइक्लोप्रोपीन', 'C₃H₄ ring', ['Cyclopropene', 'Propyne', 'Cyclopropane', 'Propene']], ['C1=CCC1', 'Cyclobutene', 'साइक्लोब्यूटीन', 'C₄H₆ ring', ['Cyclobutene', 'Cyclobutane', 'But-1-yne', 'Buta-1,3-diene']], ['C1=CCCC1', 'Cyclopentene', 'साइक्लोपेन्टीन', 'C₅H₈ ring', ['Cyclopentene', 'Cyclopentane', 'Pent-1-yne', 'Cyclohexene']], ['C1=CCCCC1', 'Cyclohexene', 'साइक्लोहेक्सीन', 'C₆H₁₀ ring', ['Cyclohexene', 'Cyclohexane', 'Hex-1-yne', 'Cyclopentene']]];
    RING.forEach((r) => { const G = cbParse(r[0]); if (seen[r[1]]) return; seen[r[1]] = 1; M.push({ n: r[1], nh: r[2], f: cbFormulaOf(G), s: r[0], cond: r[3], o: r[4], hint: 'A ring of ' + (r[1].match(/(prop|but|pent|hex)/) || ['', ''])[1] + ' carbons: cycloalkanes are CₙH₂ₙ (same as alkenes) because the ring replaces one C–H pair; a ring C=C removes two more H.', hh: 'वलय (ring) वाले साइक्लोऐल्केन CₙH₂ₙ होते हैं (एल्कीन के समान सूत्र) क्योंकि वलय एक आबंध जोड़ता है; वलय में C=C होने पर 2 हाइड्रोजन और कम होते हैं।', why: 'Ring names take the prefix "cyclo-" before the alkane/alkene stem; a substituent on the ring is numbered C-1.', wh: 'वलय के नाम में ऐल्केन/ऐल्कीन मूल के पहले "साइक्लो-" जुड़ता है; वलय पर प्रतिस्थापी C-1 माना जाता है।' }); });
    /* ---------- HARD: poly-functional / unsaturated GOC ---------- */
    let guard = 0;
    while (H.length < 110 && guard++ < 6000) {
      const n = 2 + Math.floor(rng() * 5), b = new Array(n - 1).fill(1), sb = [];
      const kind = Math.floor(rng() * 6);
      const pgPick = Math.floor(rng() * 4);
      const o = { c0: 'C', b: b, s: sb };
      if (pgPick === 0) o.c0 = 'COOH'; else if (pgPick === 1) o.c0 = 'CHO'; else if (pgPick === 2) { sb.push([Math.floor(rng() * n), 'OH']); }
      const lo = o.c0 === 'C' ? 0 : 1;
      if (kind === 1 || kind === 4) { const p = lo + Math.floor(rng() * Math.max(1, n - 1 - lo)); if (p < n - 1) b[p] = 2; }
      if (kind === 2) { const p = lo + Math.floor(rng() * Math.max(1, n - 1 - lo)); if (p < n - 1) b[p] = 3; }
      if (kind === 3 && n >= 4) { const p = lo + Math.floor(rng() * Math.max(1, n - 3 - lo)); if (p + 2 < n - 1 + 1 && p + 2 <= n - 2) { b[p] = 2; b[p + 2] = 2; } }
      if (kind === 5 && n >= 4) { const p = lo + Math.floor(rng() * Math.max(1, n - 3 - lo)); if (p + 2 <= n - 2) { b[p] = 2; b[p + 2] = 3; } }
      const extra = Math.floor(rng() * 3);
      for (let k = 0; k < extra; k++) sb.push([Math.floor(rng() * n), ['Cl', 'Br', 'OH', 'C'][Math.floor(rng() * 4)]]);
      if (o.c0 !== 'C') o.s = sb.filter((x) => x[0] !== 0);
      const c = cbMk(n, o);
      if (c.subs[0].indexOf('C') >= 0 || c.subs[n - 1].indexOf('C') >= 0) continue;
      const flat = c.subs.reduce((a, x) => a.concat(x), []);
      if (flat.filter((x) => x === 'OH').length > (pgPick === 2 ? 1 : 1)) continue;
      push(H, c, 'mix', true);
    }
    return { easy: E, moderate: M, hard: H };
  })();

  const CB_STYLE = { C: ['#4A5260', '#2EA043'], OH: ['#C0392F', '#7a1f18'], CHO: ['#BD561D', '#6e2f0e'], COOH: ['#BD561D', '#6e2f0e'], Cl: ['#2E8B47', '#14461f'], Br: ['#8B3A1D', '#4a1d0e'] };

  GAMES.carbon = function (ctx, mode) {
    const T = ctx.pick(CB_POOL[mode]), TG = cbParse(T.s);
    ctx.qTitle([T.n, T.nh]);
    ctx.badge(mode === 'easy' ? ['Build: ' + T.n + ' (' + subs(T.f) + ')', '\u0928\u093F\u0930\u094D\u092E\u093E\u0923: ' + T.nh + ' (' + subs(T.f) + ')'] : ['Build: ' + T.cond + ' (' + subs(T.f) + ')', '\u0928\u093F\u0930\u094D\u092E\u093E\u0923: ' + T.cond + ' (' + subs(T.f) + ')']);
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
        edges.push({ a: a, b: b, o: 1 }); sfx.bondSnap();
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
      if (!nodes.length) { g.fillStyle = 'rgba(60,55,40,.8)'; g.font = cf(13, 600); g.textAlign = 'center'; g.fillText(tool === 'C' ? L('Tap a dot to place a carbon', 'कार्बन रखने के लिए बिंदु पर टैप करें') : tool === 'erase' ? '—' : L('Tap a dot to place –' + tool, '–' + tool + ' रखने के लिए बिंदु पर टैप करें'), 170, CHH / 2); }
    });
  };

  /* ==========================================================================
     Data self-test (call window.ChemGamesEngine.selfTest() from the console)
     Verifies pool sizes (>= 75 per game per mode), stoichiometry, valencies,
     electroneutrality, structure formulas, bilingual strings and uniqueness.
     ========================================================================== */
  function selfTest() {
    const out = { ok: true, errors: [], counts: {}, games: CATALOG.length };
    const err = (m) => { out.ok = false; if (out.errors.length < 60) out.errors.push(m); };
    const MIN = 75, DEV = /[\u0900-\u097F]/;
    const need = (cond, m) => { if (!cond) err(m); };
    const cnt = (id, mode, n) => { out.counts[id + '.' + mode] = n; need(n >= MIN, id + '.' + mode + ' has only ' + n + ' questions (need >= ' + MIN + ')'); };
    need(CATALOG.length === 7, 'catalog must list 7 games');
    CATALOG.forEach((g) => { need(typeof GAMES[g.id] === 'function', 'missing game ' + g.id); need(g.title && DEV.test(g.titleHi || ''), g.id + ': bilingual title'); });
    ['mountGame', 'showVictoryPopup', 'openBookmarksModal'].forEach((k) => need(typeof api[k] === 'function', 'api.' + k));
    MODES.forEach((m) => {
      /* parking */
      const pk = PK_POOL[m], pks = {}; cnt('parking', m, pk.length);
      pk.forEach((a) => {
        const Z = a[0], q = a[1], pre = a[2], N = Z - q, c = pkConfig(Z, q), sum = PK_SUBS.reduce((s, x) => s + (c[x.id] || 0), 0);
        need(sum === N, 'parking config of Z=' + Z + ' q=' + q + ' has ' + sum + ' e, expected ' + N);
        need(pre >= 0 && pre < N && N <= 30, 'parking prefill invalid Z=' + Z + ' q=' + q + ' pre=' + pre);
        PK_SUBS.forEach((x) => need((c[x.id] || 0) <= x.cap && (c[x.id] || 0) >= 0, 'parking overfilled ' + x.id));
        const k = a.join(','); need(!pks[k], 'parking duplicate ' + k); pks[k] = 1;
      });
      /* forge */
      const fg = FG_POOL[m], fgs = {}; cnt('forge', m, fg.length);
      fg.forEach((a) => {
        const C = FG_ION[a[0]], A = FG_ION[a[1]]; need(C && A && C.q > 0 && A.q < 0, 'forge ion invalid ' + a[0] + '/' + a[1]);
        if (!C || !A) return;
        const n = fgCounts(a[0], a[1]); need(n[0] * C.q + n[1] * A.q === 0 && n[0] <= 9 && n[1] <= 9, 'forge charge imbalance ' + a[0] + a[1]);
        need(a[2] && DEV.test(a[3] || ''), 'forge bilingual name ' + a[0] + a[1]);
        const k = a[0] + '|' + a[1]; need(!fgs[k], 'forge duplicate ' + k); fgs[k] = 1;
      });
      /* balancer */
      const bl = BL_EQ[m], bls = {}; cnt('balancer', m, bl.length);
      bl.forEach((e) => {
        const sp = e.r.concat(e.p), comp = sp.map(parseFormula), L2 = {}, R2 = {};
        comp.forEach((c, i) => Object.keys(c).forEach((el) => { const t = i < e.r.length ? L2 : R2; t[el] = (t[el] || 0) + c[el] * e.c[i]; }));
        const els = Object.keys(Object.assign({}, L2, R2));
        need(els.every((el) => (L2[el] || 0) === (R2[el] || 0)), 'balancer atoms unbalanced: ' + sp.join('+'));
        need(e.c.every((x) => x >= 1 && x <= 24), 'balancer coefficient range ' + sp.join('+'));
        need(e.c.reduce((a, b) => { while (b) { const t = a % b; a = b; b = t; } return a; }, 0) === 1, 'balancer not simplest ratio ' + sp.join('+'));
        need(e.tip && DEV.test(e.th || ''), 'balancer bilingual tip');
        const k = sp.join('+'); need(!bls[k], 'balancer duplicate ' + k); bls[k] = 1;
      });
      /* shapeshift */
      const ss = SS_MOLS[m], sss = {}; cnt('shapeshift', m, ss.length);
      ss.forEach((t) => {
        need((t.ve - t.used) % 2 === 0 && (t.ve - t.used) / 2 === t.lp, 'shape lone pairs ' + t.f);
        need(!!SS_NAME[t.bp + '-' + t.lp] && t.shape === SS_NAME[t.bp + '-' + t.lp] && !!SS_HI[t.shape], 'shape name ' + t.f);
        need(!!t.hyb && !!t.ang, 'shape hyb/angle ' + t.f);
        const k = t.f + '|' + t.yaw; need(!sss[k], 'shape duplicate ' + k); sss[k] = 1;
      });
      /* detective */
      const dt = DT_CASES[m], dts = {}; cnt('detective', m, dt.length);
      dt.forEach((c) => {
        need(c.steps.length === 3 && !!DT_POS[c.start], 'detective chain shape');
        c.steps.forEach((s) => { need(s.am.indexOf(s.a) >= 0 && s.am.every((x) => !!DT_POS[x]) && s.am.length >= 3, 'detective answer not in set: ' + s.q.slice(0, 40)); need(DEV.test(s.qh) && DEV.test(s.wh) && s.why, 'detective bilingual'); });
        const k = c.steps.map((s) => s.q).join('|'); need(!dts[k], 'detective duplicate'); dts[k] = 1;
      });
      /* mole factory */
      const mf = MF_POOL[m]; cnt('molefactory', m, mf.length);
      mf.forEach((t) => {
        const rx = MF_RX[t.k]; need(!!rx, 'mole reaction missing ' + t.k); if (!rx) return;
        const at = {}; [['r', 1], ['p', -1]].forEach((s2) => rx[s2[0]].forEach((x) => { const p = parseFormula(x[1]); Object.keys(p).forEach((el) => { at[el] = (at[el] || 0) + s2[1] * x[0] * p[el]; }); }));
        need(Object.keys(at).every((el) => at[el] === 0), 'mole equation unbalanced ' + t.k);
        need(rx.r.length <= 2 && rx.p.length <= 2, 'mole species count ' + t.k);
        rx.r.concat(rx.p).forEach((x) => need(MF_MM[x[1]] > 0, 'molar mass missing ' + x[1]));
        if (m === 'easy') { rx.r.forEach((x) => need(Number.isInteger(t.T * x[0] / rx.p[0][0]) && t.T * x[0] / rx.p[0][0] <= 12, 'mole easy needs ' + t.k + ' T=' + t.T)); }
        else { const s3 = mfSolve(rx, t.f); need(isFinite(s3.ext) && s3.ext > 0, 'mole feeds ' + t.k); }
      });
      /* carbon */
      const cb = CB_POOL[m], cbs = {}; cnt('carbon', m, cb.length);
      cb.forEach((t) => {
        let G; try { G = cbParse(t.s); } catch (e) { err('carbon parse ' + t.s); return; }
        need(cbFormulaOf(G) === t.f, 'carbon formula ' + t.n);
        const bs = G.nodes.map(() => 0); G.edges.forEach((e) => { bs[e[0]] += e[2]; bs[e[1]] += e[2]; });
        G.nodes.forEach((x, i) => need(x !== 'C' || bs[i] <= 4, 'carbon valency > 4 in ' + t.n));
        need(t.n && DEV.test(t.nh || '') && t.cond && t.hint && DEV.test(t.hh || '') && t.why && DEV.test(t.wh || ''), 'carbon bilingual fields ' + t.n);
        need(G.nodes.length <= 14, 'carbon too large ' + t.n);
        if (m !== 'easy') need(t.o && t.o.length === 4 && t.o[0] === t.n && new Set(t.o).size === 4, 'carbon options ' + t.n);
        need(!cbs[t.n], 'carbon duplicate ' + t.n); cbs[t.n] = 1;
      });
    });
    FG_ROWS.forEach((r) => need(r[2] !== 0 && r[4] && DEV.test(r[5]), 'ion table ' + r[0]));
    out.summary = out.ok ? 'ChemGamesEngine selfTest PASSED — all pools ≥ ' + MIN + ' per mode' : 'ChemGamesEngine selfTest FAILED (' + out.errors.length + ' issue(s))';
    safe(() => console[out.ok ? 'log' : 'warn'](out.summary, out));
    return out;
  }
  api.selfTest = selfTest;

  const CSS = `@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Patrick+Hand&family=Teko:wght@500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&display=swap');
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

/* ===== Brain-Out hand-drawn warm-paper theme (overrides) ===== */
.cge-root,.cge-modal,.cge-ov{--bg:#FFFDF5;--card:#FFFFFF;--ln:#1E1E1E;--key:#FFFDF6;--keyln:#1E1E1E;--deep:#1E1E1E;--ink:#111111;--mut:#4D493C;--amber2:#B7791F;--em2:#1E8E3E;--red2:#D93025;--blue2:#1F6FEB;--fe:"Fredoka","Patrick Hand",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;--fh:"Teko","Noto Sans Devanagari","Mukta",system-ui,sans-serif}
.cge-root{background-color:#FFFDF5;background-image:linear-gradient(#EFEAD8 1px,transparent 1px),linear-gradient(90deg,#EFEAD8 1px,transparent 1px);background-size:22px 22px;color:#111111;border:2.5px solid #1E1E1E;box-shadow:0 4px 0 #1E1E1E;font-family:var(--fe);font-weight:500;font-size:15px}
.cge-root[lang=hi],.cge-ov[lang=hi],.cge-modal[lang=hi]{font-family:var(--fh);font-size:17px}
.cge-root button,.cge-root input,.cge-ov button,.cge-modal button{font-family:inherit!important}
.cge-root b,.cge-ov b{font-weight:600}
.cge-root[lang=hi] .cge-title{font-size:21px}
/* surfaces: white / cream, ink border, offset shadow, black text */
.cge-card,.cge-msg,.bl-sp,.fg-chip,.mf-h,.mf-res,.mf-work,.dt-clue,.cb-live,.pk-sh,.ss-step,.ss-info>span,.cge-cnt,.mf-mm span{background:#FFFFFF;color:#111111;border:2.5px solid #1E1E1E;box-shadow:0 4px 0 #1E1E1E}
.cge-card,.dt-clue{background:#FFFDF6;border-radius:14px;font-size:15px}
.cge-card.ok{background:#EAF8E6;border-left:2.5px solid #1E1E1E}
.dt-clue{border-left:2.5px solid #1E1E1E}
.cge-msg{border-left-width:2.5px;border-radius:14px}.cge-msg.ok{background:#EAF8E6}.cge-msg.bad{background:#FFE5E1}
.cge-dim,.cge-live,.pk-sh,.bl-sides,.dt-read,.fg-qty,.fg-lab,.mf-lr,.mf-q,.mf-st span,.mf-work{color:#4D493C}
.cge-live{color:#8A5A00;font-weight:600}
.pk-sh.on{color:#111}.mf-work{border-style:dashed;box-shadow:none}
.fg-net{color:#8A5A00}.fg-net.z{color:#1E8E3E}.bl-st b,.ss-step b,.mf-st b{color:#8A5A00}
.pk-slot.has{background:#DDEBFF}.pk-pips i{border-color:#1E1E1E}.pk-pips i.on{background:#388BFD;border-color:#1E1E1E}
/* tactile keys */
.cge-btn,.pk-slot,.fg-tile,.bl-st button,.cb-tool,.ss-step button,.mf-st button,.cge-chip,.fg-chip button,.cge-ib,.cge-bmbar{background:#FFFDF6;color:#111111;border:2.5px solid #1E1E1E;border-bottom:2.5px solid #1E1E1E;box-shadow:0 4px 0 #1E1E1E;border-radius:12px}
.cge-btn:active,.pk-slot:active,.fg-tile:active,.bl-st button:active,.cb-tool:active,.ss-step button:active,.mf-st button:active,.cge-chip:active,.fg-chip button:active,.cge-ib:active,.cge-bmbar:active{transform:translateY(3px);box-shadow:0 1px 0 #1E1E1E;border-bottom-width:2.5px}
.cge-btn{font-weight:600;font-size:14px}
.cge-btn.pri,.cge-chip.on,.cb-tool.on{background:#8EE08A;color:#111;border:2.5px solid #1E1E1E;border-bottom:2.5px solid #1E1E1E}
.cge-btn.danger{background:#FF9B90;color:#111}
.fg-tile{background:linear-gradient(#F6F1E6,#DCD5C5);color:#1B1A17}
.fg-chip{box-shadow:0 3px 0 #1E1E1E}.fg-chip.cat,.fg-chip.an{border-left:2.5px solid #1E1E1E}
.cb-opt.wrong{background:#FFD6D1;color:#111}.cb-opt.right{background:#C9F2C5;color:#111}.cb-live.warn{background:#FFE5E1;color:#111;border-color:#1E1E1E}
.cge-hint{background:#FFF6C8;border:2.5px solid #1E1E1E;color:#111}
/* canvases / instruments sit on paper with an ink frame */
.pk-cv canvas,.fg-cv canvas,.ss-cv canvas,.mf-cv canvas,.cb-cv canvas{border:2.5px solid #1E1E1E;border-radius:14px;background:#FDF9EE;box-shadow:0 4px 0 #1E1E1E}
.bl-scale{background:#FDF9EE;border:2.5px solid #1E1E1E;box-shadow:0 4px 0 #1E1E1E}
.bl-scale :is(path,rect,circle,ellipse):not([stroke-width]){stroke-width:2.2px}
.bl-bars .hl,.bl-bars .hr{background:#EFEAD8;border:2px solid #1E1E1E}.bl-bars i{background:#E8473F}.bl-row.ok i{background:#2EA043}
.ss-bar{background:#EFEAD8;border:2px solid #1E1E1E}.ss-bar i{background:#E3B341}.ss-bar i.ok{background:#2EA043}
.mf-q input{background:#FFFFFF;color:#111111;border:2.5px solid #1E1E1E;box-shadow:0 3px 0 #1E1E1E;border-radius:10px}
/* trend detective board on paper */
.dt-wrap{border:2.5px solid #1E1E1E;box-shadow:0 4px 0 #1E1E1E;border-radius:14px}
.dt-gridwrap,.dt-ph{background:#FDF9EE}.dt-gh,.dt-ph{color:#4D493C}
.dt-e.gap{background:repeating-linear-gradient(45deg,rgba(30,30,30,.07) 0 4px,transparent 4px 8px)}
.dt-cell{border:2px solid #1E1E1E;border-bottom:3px solid #1E1E1E;box-shadow:none}
.dt-cell.b-s{background:#CFE3FF;color:#111}.dt-cell.b-p{background:#CDEBCB;color:#111}.dt-cell.b-d{background:#F8D9B8;color:#111}.dt-cell.b-n{background:#E4E0D2;color:#111}
.dt-cell.dt-here::after{border-color:#FFFDF5}.dt-cell.dt-done::before{background:#1E8E3E}
/* ===== Brain-Out top bar ===== */
.cge-top{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:8px}
.cge-sp{flex:1 1 auto}
.cge-i{width:40px;height:40px;border-radius:50%;background:#388BFD;color:#FFFFFF;font:700 22px/1 Georgia,"Times New Roman",serif;font-style:italic;border:2.5px solid #1E1E1E;box-shadow:0 3px 0 #1E1E1E;cursor:pointer;flex:0 0 auto}
.cge-i:active{transform:translateY(3px);box-shadow:0 0 0 #1E1E1E}
.cge-qn{font-weight:600;font-size:16px;color:#111}
.cge-badge{color:#111;border:2.5px solid #1E1E1E;border-radius:10px;box-shadow:0 2px 0 #1E1E1E;font-weight:600}
.cge-m-easy{background:#8EE08A}.cge-m-moderate{background:#FFD95A}.cge-m-hard{background:#FF9B90}
.cge-ib{width:40px;height:40px;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex:0 0 auto}
.cge-ib.on{background:#FFE98A}
.cge-ico{font-size:19px;line-height:1}
.lang-btn{min-height:40px}
.cge-bmbar{display:block;width:100%;margin:0 0 8px;padding:7px 10px;font-weight:600;font-size:13px;cursor:pointer;text-align:center;border-radius:12px}
.cge-target{align-self:flex-start;display:inline-block;padding:7px 14px;border-radius:14px;background:#FFF1A8;color:#111;border:2.5px solid #1E1E1E;box-shadow:0 4px 0 #1E1E1E;font-weight:600;font-size:16px}
.cge-bar3{margin-bottom:8px}
/* ===== curved-square white popups ===== */
.cge-ov{position:fixed;inset:0;z-index:99998;background:rgba(30,30,30,.55);display:flex;align-items:center;justify-content:center;padding:14px;overflow-y:auto;animation:cge-fade .2s}
.cge-pop{position:relative;width:min(100%,420px);max-height:88vh;overflow-y:auto;background:#FFFFFF;color:#111111;border:3px solid #1E1E1E;border-radius:22px;box-shadow:0 6px 0 #1E1E1E;padding:12px 14px 14px;animation:cge-pop .22s;font-weight:500}
.cge-pop *{box-sizing:border-box}
.cge-pop-top{display:flex;align-items:center;gap:8px;min-height:40px;margin-bottom:6px}
.cge-pop-title{flex:1;font-weight:600;font-size:19px;color:#111}
.cge-lock{padding:4px 10px;border-radius:999px;background:#FFF1A8;border:2.5px solid #1E1E1E;font-weight:600;font-size:14px;color:#111;min-width:46px;text-align:center}
.cge-pop .cge-x{position:static;width:38px;height:38px;border-radius:50%;background:#E5322D;color:#FFFFFF;border:2.5px solid #1E1E1E;border-bottom:2.5px solid #1E1E1E;box-shadow:0 3px 0 #1E1E1E;font-size:17px;font-weight:700;cursor:pointer;flex:0 0 auto}
.cge-pop .cge-x.pop{animation:cge-pop .3s}
.cge-pop .cge-x[hidden],.cge-lock[hidden]{display:none}
.cge-pop-tag{display:inline-block;margin-bottom:8px;padding:3px 10px;border-radius:10px;background:#FFFDF6;border:2px solid #1E1E1E;font-weight:600;font-size:13px;color:#111}
.cge-pop-txt{font-size:16px;line-height:1.55;color:#111}
.cge-pop-txt .cge-dim,.cge-pop-note{color:#4D493C;font-size:13px}
.cge-pop-note{margin-top:10px;padding:8px 10px;border-radius:12px;background:#FFFDF6;border:2px dashed #1E1E1E}
.cge-pop-h{background:#FFFDF6}
.cge-row2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
.cge-tabs{display:flex;gap:6px;flex-wrap:wrap;margin:4px 0 10px}
.cge-tabs .cge-chip{min-height:36px;padding:4px 12px;font-size:13px}
.cge-bmlist{display:flex;flex-direction:column;gap:8px}
.cge-bmi{display:flex;gap:6px;align-items:stretch}
.cge-bmgo{flex:1;text-align:left;padding:9px 11px;background:#FFFDF6;color:#111;border:2.5px solid #1E1E1E;box-shadow:0 3px 0 #1E1E1E;border-radius:14px;font-size:14px;cursor:pointer;line-height:1.35}
.cge-bmgo:active{transform:translateY(2px);box-shadow:0 1px 0 #1E1E1E}
.cge-bmdel{width:40px;background:#FFFFFF;border:2.5px solid #1E1E1E;box-shadow:0 3px 0 #1E1E1E;border-radius:12px;cursor:pointer}
.cge-pop .cge-badge{font-size:11px;padding:1px 8px}
/* ===== Victory popup: black Brain-Out ===== */
.cge-modal{background:rgba(5,6,9,.9);align-items:center}
.cge-mbox{background:#0F1218;color:#FFFFFF;border:3px solid #1E1E1E;border-radius:26px;box-shadow:0 0 0 2px #2b3040,0 8px 0 #000;padding:16px 14px 14px;width:min(100%,390px)}
.cge-modal[lang=hi] .cge-mbox{font-size:17px}
.cge-stars{display:flex;justify-content:center;align-items:flex-end;gap:4px;margin:2px 0 8px}
.cge-starw{display:block;width:84px}.cge-starw.s1{width:100px;margin-bottom:10px}
.cge-star{width:100%;height:auto;display:block;overflow:visible;filter:drop-shadow(0 3px 0 rgba(0,0,0,.6))}
.cge-starw{animation:cge-star .55s both}.cge-starw.s1{animation-delay:.15s}.cge-starw.s2{animation-delay:.3s}
@keyframes cge-star{0%{transform:scale(.2) rotate(-40deg);opacity:0}70%{transform:scale(1.15) rotate(6deg);opacity:1}100%{transform:scale(1) rotate(0)}}
.cge-mtitle{font-size:22px;font-weight:600;color:#FFFFFF}
.cge-mmeta{text-align:center;color:#C9D1D9;font-size:13px;margin:-4px 0 10px}
.cge-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px}
.cge-grid>div{background:#1A1F2B;border:2px solid #343b4f;border-radius:14px;padding:7px 4px;text-align:center}
.cge-grid small{display:block;color:#9AA4B5;font-size:11px}.cge-grid b{font-size:18px;color:#FFFFFF;font-weight:600}
.cge-xpv{text-align:center;font-size:30px;font-weight:700;color:#FFD600;margin:2px 0 10px;text-shadow:0 3px 0 #000}
.cge-conc{background:#1A1F2B;border:2px solid #343b4f;border-radius:14px;padding:9px 11px;margin-bottom:12px;color:#FFFFFF;font-size:14px;line-height:1.45}
.cge-conc small{display:block;color:#FFD600;font-weight:600;margin-bottom:3px}
.cge-vbtn{min-height:48px;padding:8px 10px;border-radius:14px;background:#FFFFFF;color:#111111;border:3px solid #000;box-shadow:0 4px 0 #000;font-weight:600;font-size:16px;cursor:pointer;width:100%}
.cge-vbtn:active{transform:translateY(3px);box-shadow:0 1px 0 #000}
.cge-vbtn.go{background:#FFD600}.cge-vbtn.bm{margin-bottom:10px;background:#E8F0FF}
.cge-modal .cge-row2{margin-top:0}
.cge-x.light{background:#1A1F2B;color:#fff;border:2px solid #343b4f;box-shadow:none;position:absolute;top:10px;height:30px;border-radius:10px;cursor:pointer}

.bl-row b,.mf-legend span,.pk-sh b{-webkit-text-stroke:.7px #1E1E1E;paint-order:stroke fill}
.lang-btn{padding:4px 9px;font-size:12px}
`;

  W.ChemGamesEngine = api;
})();
