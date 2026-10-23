/* austinbeaulier.com — System 7 desktop.
   Plain JavaScript, no build step. All windows, icons and text live in index.html;
   this file adds the behavior: menus, dragging, sounds, startup, and the extras. */
(() => {
  'use strict';

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const html = document.documentElement;
  const desk = $('#desktop');
  const menubar = $('.menubar');
  const phoneMQ = matchMedia('(max-width: 767px)');
  const calmMQ = matchMedia('(prefers-reduced-motion: reduce)');
  const isPhone = () => phoneMQ.matches;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const visible = el => !!(el && el.getClientRects().length);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const EMAIL = 'austinbeaulier@gmail.com';
  const ICON_COL = 112;              // room kept clear for the desktop icons
  const MIN_W = 220, MIN_H = 120;    // smallest a window can be resized to
  const PUZZLE_IMG = 'https://media.sketchfab.com/models/69dfad2593604fb68b16eb83a0c41648/thumbnails/6832e8fd430347b4b88c73eeee6a4fe0/3862bcfcd28742fa8ad9733e33c58384.jpeg';

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode: fine */ } },
  };

  /* ── Pixel icons ──────────────────────────────────────
     16×16 art: '#' ink, '.' paper, ' ' clear. Drawn at 2× by the CSS.
     To add one: draw it here, then use <i class="ic" data-icon="name"></i>. */
  const FOLDER_TOP = ['                ', '                ', ' #####          ', '#.....#         ', '#.....##########', '#..............#'];
  const FOLDER_END = ['#..............#', '#..............#', '################', '                ', '                '];
  const folder = (...mid) => [...FOLDER_TOP, ...mid, ...FOLDER_END];
  const ICONS = {
    folder: folder('#..............#', '#..............#', '#..............#', '#..............#', '#..............#'),
    'folder-apps': folder('#......##......#', '#.....#..#.....#', '#....#....#....#', '#.....#..#.....#', '#......##......#'),
    'folder-scans': folder('#......####....#', '#.....#..##....#', '#....####.#....#', '#....#..##.....#', '#....####......#'),
    'folder-films': folder('#......#.......#', '#......##......#', '#......###.....#', '#......##......#', '#......#.......#'),
    'folder-system': folder('#.....####.....#', '#.....#..#.....#', '#.....####.....#', '#.....#..#.....#', '#.....####.....#'),
    hd: [
      '                ', '                ', '                ',
      '################',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#..............#',
      '#.##...........#',
      '#..............#',
      '################',
      ' ############## ',
      '                ', '                ', '                ',
    ],
    doc: [
      '  #########     ',
      '  #.......##    ',
      '  #.......#.#   ',
      '  #.......####  ',
      '  #..........#  ',
      '  #.#######..#  ',
      '  #..........#  ',
      '  #.########.#  ',
      '  #..........#  ',
      '  #.########.#  ',
      '  #..........#  ',
      '  #.#####....#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  ############  ',
      '                ',
    ],
    movie: [
      '  #########     ',
      '  #.......##    ',
      '  #.......#.#   ',
      '  #.......####  ',
      '  #..........#  ',
      '  #.########.#  ',
      '  #.#.#....#.#  ',
      '  #.#.##...#.#  ',
      '  #.#.###..#.#  ',
      '  #.#.##...#.#  ',
      '  #.#.#....#.#  ',
      '  #.########.#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  ############  ',
      '                ',
    ],
    clapper: [
      '                ', '                ',
      ' ############## ',
      ' #..###..###..# ',
      ' ##..###..###.# ',
      ' ############## ',
      ' #............# ',
      ' #.##########.# ',
      ' #............# ',
      ' #.########...# ',
      ' #............# ',
      ' #.##########.# ',
      ' #............# ',
      ' ############## ',
      '                ', '                ',
    ],
    letter: [
      '                ', '                ', '                ',
      '################',
      '##............##',
      '#.#..........#.#',
      '#..#........#..#',
      '#...#......#...#',
      '#....#....#....#',
      '#.....#..#.....#',
      '#......##......#',
      '#..............#',
      '#..............#',
      '################',
      '                ', '                ',
    ],
    trash: [
      '                ',
      '      ####      ',
      '     #....#     ',
      ' ############## ',
      ' #............# ',
      ' ############## ',
      '  #..........#  ',
      '  #.#..##..#.#  ',
      '  #.#..##..#.#  ',
      '  #.#..##..#.#  ',
      '  #.#..##..#.#  ',
      '  #.#..##..#.#  ',
      '  #.#..##..#.#  ',
      '  #..........#  ',
      '   ##########   ',
      '                ',
    ],
    trashfull: [
      '   ##   ###     ',
      '  #..# #...##   ',
      ' #...##.....#   ',
      ' ############## ',
      ' #............# ',
      ' ############## ',
      ' #............# ',
      ' #..#..##..#..# ',
      ' #..#..##..#..# ',
      ' #..#..##..#..# ',
      ' #..#..##..#..# ',
      '  #.#..##..#.#  ',
      '  #.#..##..#.#  ',
      '  #..........#  ',
      '   ##########   ',
      '                ',
    ],
    mac: [
      '  ############  ',
      '  #..........#  ',
      '  #.########.#  ',
      '  #.#......#.#  ',
      '  #.#......#.#  ',
      '  #.#......#.#  ',
      '  #.#......#.#  ',
      '  #.#......#.#  ',
      '  #.########.#  ',
      '  #..........#  ',
      '  #.....####.#  ',
      '  #..........#  ',
      '  ############  ',
      '  #..........#  ',
      '  ############  ',
      '                ',
    ],
    happymac: [
      '  ############  ',
      '  #..........#  ',
      '  #.########.#  ',
      '  #.#......#.#  ',
      '  #.#.#..#.#.#  ',
      '  #.#......#.#  ',
      '  #.#.#..#.#.#  ',
      '  #.#..##..#.#  ',
      '  #.########.#  ',
      '  #..........#  ',
      '  #.....####.#  ',
      '  #..........#  ',
      '  ############  ',
      '  #..........#  ',
      '  ############  ',
      '                ',
    ],
    app: [
      '       ##       ',
      '      #..#      ',
      '     #....#     ',
      '    #......#    ',
      '   #........#   ',
      '  #...####...#  ',
      ' #...#....#...# ',
      '#....#....#....#',
      '#....#....#....#',
      ' #...#....#...# ',
      '  #...####...#  ',
      '   #........#   ',
      '    #......#    ',
      '     #....#     ',
      '      #..#      ',
      '       ##       ',
    ],
    ext: [
      '                ',
      '      ####      ',
      '     #....#     ',
      '     #....#     ',
      '  ####....####  ',
      '  #..........#  ',
      '  #..........###',
      '  #............#',
      '  #............#',
      '  #..........###',
      '  #..........#  ',
      '  #..........#  ',
      '  ############  ',
      '                ', '                ', '                ',
    ],
    puzzle: [
      '                ',
      ' #############  ',
      ' #...#...#...#  ',
      ' #...#...#...#  ',
      ' #...#...#...#  ',
      ' #############  ',
      ' #...#...#####  ',
      ' #...#...#####  ',
      ' #...#...#####  ',
      ' #############  ',
      ' #...#...#...#  ',
      ' #...#...#...#  ',
      ' #...#...#...#  ',
      ' #############  ',
      '                ', '                ',
    ],
    cpanel: [
      '                ',
      ' ############## ',
      ' #............# ',
      ' #..#...#...#.# ',
      ' #.###..#...#.# ',
      ' #..#...#...#.# ',
      ' #..#..###..#.# ',
      ' #..#...#...#.# ',
      ' #..#...#...#.# ',
      ' #..#...#..#### ',
      ' #..#...#...#.# ',
      ' #............# ',
      ' ############## ',
      '                ', '                ', '                ',
    ],
    globe: [
      '                ',
      '     ######     ',
      '   ##..##..##   ',
      '  #...#..#...#  ',
      ' #...#....#...# ',
      ' #...#....#...# ',
      '#....#....#....#',
      '################',
      '#....#....#....#',
      ' #...#....#...# ',
      ' #...#....#...# ',
      '  #...#..#...#  ',
      '   ##..##..##   ',
      '     ######     ',
      '                ', '                ',
    ],
    caution: [
      '                ',
      '       ##       ',
      '      #..#      ',
      '      #..#      ',
      '     #....#     ',
      '     #.##.#     ',
      '    #..##..#    ',
      '    #..##..#    ',
      '   #...##...#   ',
      '   #...##...#   ',
      '  #..........#  ',
      '  #....##....#  ',
      ' #.....##.....# ',
      ' #............# ',
      '################',
      '                ',
    ],
    box: [
      '                ', '                ',
      ' ############## ',
      ' #.....##.....# ',
      ' #.....##.....# ',
      ' ############## ',
      '  #....##....#  ',
      '  #....##....#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  ############  ',
      '                ', '                ', '                ',
    ],
    bag: [
      '                ',
      '      ####      ',
      '     #    #     ',
      '     #    #     ',
      '  ############  ',
      '  #..........#  ',
      '  #..#....#..#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  #..........#  ',
      '  ############  ',
      '                ', '                ',
    ],
    // The next five match the icons on the Projects page.
    tf: [
      '################', '#    #    #    #', '#    #    #    #', '#    #    #    #', '################',
      '#  #    #    # #', '#  #    #    # #', '#  #    #    # #', '################',
      '#    #    #    #', '#    #    #    #', '#    #    #    #', '################',
      '#  #    #    # #', '#  #    #    # #', '################',
    ],
    pr: [
      '                ', '  #######       ', ' #       #      ', ' # ##### #      ', ' # #   # #   #  ',
      ' # #   # # #  # ', ' # #   # #  #  #', ' # #   # #  #  #', ' # #   # #  #  #', ' # #   # # #  # ',
      ' # ##### #   #  ', ' #       #      ', ' #   #   #      ', ' #       #      ', '  #######       ', '                ',
    ],
    ss: [
      '################', '# #          # #', '###          ###', '# #          # #', '###          ###',
      '# #        # # #', '###       ## ###', '# #      ##  # #', '### #   ##   ###', '# # ## ##    # #',
      '###  ###     ###', '# #   #      # #', '###          ###', '# #          # #', '###          ###', '################',
    ],
    grid: [
      '################', '######    #    #', '######    #    #', '######    #    #', '######    #    #',
      '################', '######    #    #', '######    #    #', '######    #    #', '######    #    #',
      '################', '###########    #', '###########    #', '###########    #', '###########    #', '################',
    ],
    dice: [
      '                ', '       ##       ', '     ######     ', '   ##########   ', ' ############## ',
      ' ######  ###### ', ' #####    ##### ', ' ####      #### ', ' ###        ### ', ' ##          ## ',
      ' ############## ', ' ############## ', '   ##########   ', '     ######     ', '       ##       ', '                ',
    ],
  };

  // One <path> per color, each row merged into runs, so an icon is two small paths.
  function svgFor(name) {
    const rows = ICONS[name];
    if (!rows) return '';
    let ink = '', paper = '';
    rows.forEach((row, y) => {
      for (let x = 0; x < row.length;) {
        const c = row[x];
        let n = 1;
        while (row[x + n] === c) n++;
        if (c === '#') ink += `M${x} ${y}h${n}v1h-${n}z`;
        else if (c === '.') paper += `M${x} ${y}h${n}v1h-${n}z`;
        x += n;
      }
    });
    return `<svg viewBox="0 0 16 ${rows.length}" aria-hidden="true" focusable="false">` +
      (paper ? `<path fill="#fff" d="${paper}"/>` : '') + `<path fill="#000" d="${ink}"/></svg>`;
  }
  function paintIcons(scope = document) {
    $$('[data-icon]', scope).forEach(el => {
      if (el.dataset.painted === el.dataset.icon) return;
      el.innerHTML = svgFor(el.dataset.icon);
      el.dataset.painted = el.dataset.icon;
    });
  }

  /* ── Sound ────────────────────────────────────────────
     Everything is synthesized with Web Audio; no sound files.
     Browsers stay silent until the visitor's first click or key press. */
  const Sound = (() => {
    let ctx = null, out = null, room = null;
    let muted = store.get('ab-muted') === '1';
    const btn = $('#sound-btn');

    function init() {
      if (ctx) return ctx;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      out = ctx.createGain();
      out.gain.value = 0.55;
      out.connect(ctx.destination);
      // A small synthetic room, so the startup chord blooms instead of stopping dead.
      const len = Math.floor(ctx.sampleRate * 2.4), ir = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let c = 0; c < 2; c++) {
        const d = ir.getChannelData(c);
        for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
      }
      room = ctx.createConvolver();
      room.buffer = ir;
      const wet = ctx.createGain();
      wet.gain.value = 0.3;
      room.connect(wet);
      wet.connect(out);
      return ctx;
    }
    const unlock = () => { const c = init(); if (c && c.state === 'suspended') c.resume().catch(() => {}); };
    ['pointerdown', 'touchend', 'keydown'].forEach(t => document.addEventListener(t, unlock, true));

    function tone(type, f0, f1, dur, vol, at = 0) {
      const t = ctx.currentTime + at, o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f0, t);
      if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g);
      g.connect(out);
      o.start(t);
      o.stop(t + dur + 0.03);
    }

    const FX = {
      click: () => tone('square', 1500, 900, 0.02, 0.035),
      open: () => tone('sine', 300, 900, 0.1, 0.1),
      close: () => tone('sine', 760, 240, 0.09, 0.09),
      beep: () => { tone('square', 990, 990, 0.09, 0.05); tone('square', 660, 660, 0.12, 0.045, 0.09); },
      slide: () => tone('triangle', 480, 330, 0.045, 0.08),
      win: () => [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone('triangle', f, f, 0.24, 0.1, i * 0.09)),
      chime() {
        // A warm F-major chord: detuned saws and triangles through a closing low-pass.
        const t = ctx.currentTime + 0.03;
        const lp = ctx.createBiquadFilter(), g = ctx.createGain();
        lp.type = 'lowpass';
        lp.Q.value = 0.5;
        lp.frequency.setValueAtTime(5000, t);
        lp.frequency.exponentialRampToValueAtTime(600, t + 2.8);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.2, t + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 3.4);
        lp.connect(g);
        g.connect(out);
        g.connect(room);
        [87.31, 174.61, 261.63, 349.23, 440, 523.25].forEach((f, i) => {
          [['sawtooth', 0.07, -6], ['triangle', 0.15, 5]].forEach(([type, vol, cents]) => {
            const o = ctx.createOscillator(), v = ctx.createGain();
            o.type = type;
            o.frequency.value = f;
            o.detune.value = cents + (i % 2 ? 2 : -2);
            v.gain.value = vol;
            o.connect(v);
            v.connect(lp);
            o.start(t);
            o.stop(t + 3.5);
          });
        });
      },
      crunch() {
        // Paper being crumpled: noise with random crackle bursts.
        const dur = 0.55, n = Math.floor(ctx.sampleRate * dur), b = ctx.createBuffer(1, n, ctx.sampleRate), d = b.getChannelData(0);
        let burst = 0;
        for (let i = 0; i < n; i++) {
          if (Math.random() < 0.0018) burst = 0.6 + Math.random() * 0.6;
          burst *= 0.9986;
          d[i] = (Math.random() * 2 - 1) * (0.18 + burst) * Math.pow(1 - i / n, 1.4);
        }
        const s = ctx.createBufferSource(), bp = ctx.createBiquadFilter(), g = ctx.createGain();
        s.buffer = b;
        bp.type = 'bandpass';
        bp.frequency.value = 2000;
        bp.Q.value = 0.6;
        g.gain.value = 0.55;
        s.connect(bp);
        bp.connect(g);
        g.connect(out);
        s.start();
      },
    };

    function play(name) {
      if (muted || !ctx || !FX[name]) return;
      const go = () => { try { FX[name](); } catch (e) { /* audio is a nicety */ } };
      if (ctx.state === 'running') go();
      else if (name === 'chime') ctx.resume().then(go).catch(() => {});
    }
    function sync() {
      if (!btn) return;
      btn.setAttribute('aria-pressed', String(!muted));
      btn.title = muted ? 'Sound off' : 'Sound on';
      btn.setAttribute('aria-label', btn.title);
    }
    function toggle() {
      muted = !muted;
      store.set('ab-muted', muted ? '1' : '0');
      sync();
      play('click');
    }
    return { play, toggle, sync };
  })();

  /* ── Window manager ───────────────────────────────── */
  const wins = new Map();            // id → { rect, zoomed, prev }
  let zTop = 20, cascade = 0;

  const deskSize = () => ({ W: desk.clientWidth, H: desk.clientHeight });
  const openWins = () => $$('.win.open', desk);
  const topWin = () => openWins().sort((a, b) => (+b.style.zIndex || 0) - (+a.style.zIndex || 0))[0] || null;
  const rectOf = win => ({
    x: parseFloat(win.style.left) || 0,
    y: parseFloat(win.style.top) || 0,
    w: parseFloat(win.style.width) || win.offsetWidth,
    h: parseFloat(win.style.height) || win.offsetHeight,
  });

  function setBox(el, r) {
    el.style.left = Math.round(r.x) + 'px';
    el.style.top = Math.round(r.y) + 'px';
    el.style.width = Math.round(r.w) + 'px';
    el.style.height = Math.round(r.h) + 'px';
  }

  // Keep a rectangle fully on the desktop.
  function fit(r) {
    const { W, H } = deskSize();
    const w = Math.min(Math.max(r.w, MIN_W), W - 16), h = Math.min(Math.max(r.h, 60), H - 16);
    return { x: clamp(r.x, 8, W - w - 8), y: clamp(r.y, 8, H - h - 8), w, h };
  }

  // First-open position. Read Me (and Scans, on wide screens) get a composed layout;
  // big app windows are centered; everything else cascades.
  function defaultRect(win) {
    const { W, H } = deskSize();
    const free = Math.max(320, W - ICON_COL);
    const w = Math.min(+win.dataset.w || 460, free - 24), h = Math.min(+win.dataset.h || 360, H - 24);
    const readW = Math.min(580, free - 24);
    const pair = free >= 1200;
    const left = Math.max(16, Math.round(pair ? (free - (readW + 28 + 580)) / 2 : (free - readW) / 2));
    if (win.id === 'readme') return fit({ x: left, y: 18, w, h });
    if (win.id === 'scans' && pair) return fit({ x: left + readW + 28, y: 70, w, h });
    if ('center' in win.dataset || w > free * 0.6) return fit({ x: (free - w) / 2, y: Math.max(16, (H - h) / 3), w, h });
    const k = cascade++ % 6;
    return fit({ x: Math.min(left + 48 + k * 28, free - w - 12), y: 34 + k * 26, w, h });
  }

  function iconFor(id) {
    const sel = id.startsWith('scan-') ? `.icon[data-slug="${id.slice(5)}"]` : `.icon[data-open="${id}"]`;
    return $$(sel).find(visible) || null;
  }
  // Where an icon (or a rect) sits, in desktop coordinates. Used by the zoom animation.
  function boxOf(el) {
    if (!el) return null;
    const t = el.matches('.icon') ? ($('.ic, img', el) || el) : el;
    const a = t.getBoundingClientRect(), d = desk.getBoundingClientRect();
    return a.width ? { x: a.left - d.left, y: a.top - d.top, w: a.width, h: a.height } : null;
  }

  // System 7 "zoom rects": a quick trail of outlines between an icon and its window.
  function zoomRects(a, b) {
    return new Promise(done => {
      if (!a || !b || calmMQ.matches || isPhone()) return done();
      const steps = 9, trail = 3, boxes = [];
      for (let i = 1; i <= steps; i++) {
        const t = i / steps, el = document.createElement('div');
        el.className = 'zr';
        el.hidden = true;
        setBox(el, { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, w: a.w + (b.w - a.w) * t, h: a.h + (b.h - a.h) * t });
        desk.append(el);
        boxes.push(el);
      }
      let i = 0;
      const tick = () => {
        if (boxes[i]) boxes[i].hidden = false;
        if (boxes[i - trail]) boxes[i - trail].remove();
        i++;
        if (i < steps + trail) requestAnimationFrame(tick);
        else { boxes.forEach(el => el.remove()); done(); }
      };
      requestAnimationFrame(tick);
    });
  }

  function setHash(id) {
    const want = id && id !== 'readme' ? '#' + id : '';
    if (location.hash === want) return;
    try { history.replaceState(null, '', want || location.pathname + location.search); } catch (e) { /* file:// */ }
  }

  function focusWin(win) {
    if (!win || !win.classList.contains('open')) return;
    if (!win.classList.contains('active')) {
      $$('.win.active', desk).forEach(w => w.classList.remove('active'));
      win.classList.add('active');
    }
    if (+win.style.zIndex !== zTop) win.style.zIndex = ++zTop;
    if (!win.contains(document.activeElement)) win.focus({ preventScroll: true });
    setHash(win.id);
    updateMenus();
  }

  function openWin(id, from, opts = {}) {
    const win = document.getElementById(id);
    if (!win || !win.classList.contains('win')) return null;
    closeMenus();
    if (win.classList.contains('open')) {
      win.classList.remove('shaded');
      focusWin(win);
      return win;
    }
    if (win.dataset.opening) return win;
    let st = wins.get(id);
    if (!st) wins.set(id, st = { rect: defaultRect(win), zoomed: false });
    else st.rect = fit(st.rect);
    setBox(win, st.rect);
    if ('fixed' in win.dataset) win.style.height = '';   // fixed windows hug their content
    const reveal = () => {
      delete win.dataset.opening;
      win.classList.add('open');
      loadFrames(win);
      focusWin(win);
      win.dispatchEvent(new Event('winopen'));
    };
    const src = !opts.quiet && boxOf(from);
    if (!opts.quiet) Sound.play('open');
    if (src) {
      win.dataset.opening = '1';
      zoomRects(src, st.rect).then(reveal);
    } else reveal();
    return win;
  }

  function closeWin(win, opts = {}) {
    if (!win || !win.classList.contains('open')) return;
    const st = wins.get(win.id);
    let from = null;
    if (st && !isPhone()) {
      st.rect = rectOf(win);
      from = { ...st.rect, h: win.offsetHeight };
    }
    win.classList.remove('open', 'active');
    unloadFrames(win);
    if (!opts.quiet) {
      Sound.play('close');
      zoomRects(from, boxOf(iconFor(win.id)));
    }
    win.dispatchEvent(new Event('winclose'));
    const next = topWin();
    if (next) focusWin(next);
    else {
      setHash('');
      updateMenus();
    }
  }

  function toggleZoom(win) {
    const st = wins.get(win.id);
    if (!st) return;
    if (st.zoomed) {
      setBox(win, fit(st.prev));
      st.zoomed = false;
    } else {
      const { W, H } = deskSize();
      st.prev = rectOf(win);
      setBox(win, { x: 8, y: 8, w: Math.max(MIN_W, W - ICON_COL - 16), h: H - 16 });
      st.zoomed = true;
    }
    st.rect = rectOf(win);
    Sound.play('click');
  }

  // Move or resize by dragging an outline, then drop the window into place (as System 7 did).
  function startDrag(e, win, mode) {
    if (e.button !== 0 || isPhone()) return;
    e.preventDefault();
    focusWin(win);
    const st = wins.get(win.id);
    const r0 = { ...rectOf(win), h: win.offsetHeight };
    const sx = e.clientX, sy = e.clientY, handle = e.currentTarget;
    let ghost = null, r = r0;
    try { handle.setPointerCapture(e.pointerId); } catch (err) { /* old browsers */ }
    html.classList.add('dragging');
    const move = ev => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (!ghost) {
        if (Math.abs(dx) + Math.abs(dy) < 3) return;
        ghost = document.createElement('div');
        ghost.className = 'ghost';
        desk.append(ghost);
      }
      const { W, H } = deskSize();
      r = mode === 'move'
        ? { ...r0, x: clamp(r0.x + dx, 48 - r0.w, W - 48), y: clamp(r0.y + dy, 0, H - 22) }
        : { ...r0, w: clamp(r0.w + dx, MIN_W, W - r0.x - 4), h: clamp(r0.h + dy, MIN_H, H - r0.y - 4) };
      setBox(ghost, r);
    };
    const up = () => {
      handle.removeEventListener('pointermove', move);
      handle.removeEventListener('pointerup', up);
      handle.removeEventListener('pointercancel', up);
      html.classList.remove('dragging');
      if (!ghost) return;
      ghost.remove();
      if (mode === 'move') {
        win.style.left = Math.round(r.x) + 'px';
        win.style.top = Math.round(r.y) + 'px';
      } else {
        win.style.width = Math.round(r.w) + 'px';
        win.style.height = Math.round(r.h) + 'px';
      }
      if (st) { st.rect = rectOf(win); st.zoomed = false; }
    };
    handle.addEventListener('pointermove', move);
    handle.addEventListener('pointerup', up);
    handle.addEventListener('pointercancel', up);
  }

  function enhance(win) {
    if (win.dataset.ready) return;
    win.dataset.ready = '1';
    win.tabIndex = -1;
    if (!('fixed' in win.dataset)) {
      let foot = $(':scope > .foot', win);
      if (!foot) win.insertAdjacentHTML('beforeend', '<div class="foot bare"></div>');
      foot = $(':scope > .foot', win);
      foot.insertAdjacentHTML('beforeend', '<div class="grow" aria-hidden="true"></div>');
      $('.grow', foot).addEventListener('pointerdown', e => startDrag(e, win, 'size'));
    }
    const tb = $('.tb', win);
    win.addEventListener('pointerdown', () => focusWin(win), true);
    tb.addEventListener('pointerdown', e => { if (!e.target.closest('button')) startDrag(e, win, 'move'); });
    tb.addEventListener('dblclick', e => {
      if (e.target.closest('button') || isPhone()) return;
      win.classList.toggle('shaded');
      Sound.play('click');
    });
    const cb = $('.cb', tb), zb = $('.zb', tb);
    if (cb) cb.addEventListener('click', e => { e.stopPropagation(); closeWin(win); });
    if (zb) zb.addEventListener('click', e => { e.stopPropagation(); toggleZoom(win); });
  }

  // Web apps and 3D viewers load only while their window is open.
  function loadFrames(win) {
    $$('.frame[data-src]', win).forEach(f => {
      if ($('iframe', f)) return;
      const ifr = document.createElement('iframe');
      ifr.src = f.dataset.src;
      ifr.title = f.dataset.title || '';
      if (f.dataset.allow) ifr.allow = f.dataset.allow;
      ifr.setAttribute('allowfullscreen', '');
      f.prepend(ifr);
    });
  }
  const unloadFrames = win => $$('.frame iframe', win).forEach(i => i.remove());

  // Scan viewers are built the first time a scan is opened.
  function openScan(icon) {
    const id = 'scan-' + icon.dataset.slug;
    if (!document.getElementById(id)) {
      const name = $('.nm', icon).textContent;
      const w = document.createElement('section');
      w.className = 'win viewer';
      w.id = id;
      w.dataset.w = 700;
      w.dataset.h = 500;
      w.setAttribute('aria-label', name + ', 3D scan');
      w.innerHTML =
        '<header class="tb"><button class="cb" aria-label="Close"></button><h2 class="tt"></h2><button class="zb" aria-label="Zoom"></button></header>' +
        `<div class="body"><div class="frame" data-src="https://sketchfab.com/models/${icon.dataset.scan}/embed?autostart=1&ui_theme=dark&dnt=1" data-allow="autoplay; fullscreen; xr-spatial-tracking"><p class="loading">Loading scan…</p><div class="shield"></div></div></div>` +
        '<div class="foot"><span>Photogrammetry scan · drag to spin</span><a target="_blank" rel="noopener">View on Sketchfab ↗</a></div>';
      $('.tt', w).textContent = name;
      $('.frame', w).dataset.title = name + ' — 3D scan by Austin Beaulier';
      $('.foot a', w).href = icon.href;
      desk.append(w);
      enhance(w);
    }
    openWin(id, icon);
  }

  /* ── Icons ────────────────────────────────────────── */
  let selected = null, lastPointer = 'mouse';
  document.addEventListener('pointerdown', e => { lastPointer = e.pointerType || 'mouse'; }, true);

  function select(icon) {
    if (selected === icon) return;
    if (selected) selected.classList.remove('sel');
    selected = icon;
    if (icon) icon.classList.add('sel');
    updateMenus();
  }

  function activate(icon) {
    icon.classList.remove('blink');
    void icon.offsetWidth;
    icon.classList.add('blink');
    setTimeout(() => icon.classList.remove('blink'), 400);
    const d = icon.dataset;
    if (d.open) openWin(d.open, icon);
    else if (d.scan) openScan(icon);
    else if ('ext' in d) { Sound.play('click'); window.open(icon.href, '_blank', 'noopener'); }
    else if (d.alert) alertBox({ text: d.alert, icon: d.alertIcon || 'caution' });
  }

  function kindOf(icon) {
    const k = $('.kind', icon);
    if (k) return k.textContent;
    const w = icon.dataset.open && document.getElementById(icon.dataset.open);
    if (icon.classList.contains('trash')) return 'trash';
    if (icon.dataset.open === 'hd') return 'disk';
    if (w && w.classList.contains('folder')) return 'folder';
    return 'document';
  }

  function getInfo(icon) {
    if (!icon) return;
    const host = icon.closest('.win');
    const where = host ? $('.tt', host).textContent : 'Desktop';
    const note = icon.dataset.info || (icon.dataset.scan ? 'Click and drag inside the viewer to spin it.' : '');
    const img = $('img', icon);
    alertBox({
      icon: ($('[data-icon]', icon) || {}).dataset?.icon || 'doc',
      img: img && img.src,
      html: `<b>${esc($('.nm', icon).textContent)} Info</b>` +
        `<span class="kv"><i>Kind:</i> ${esc(kindOf(icon))}</span>` +
        `<span class="kv"><i>Where:</i> ${esc(where)}</span>` +
        (note ? `<span class="kv"><i>Comments:</i> ${esc(note)}</span>` : ''),
    });
  }

  /* ── Alerts ───────────────────────────────────────── */
  let alertOpen = null;
  // Resolves with the label of the button pressed. The last button is the default.
  function alertBox({ text = '', html: rich = '', icon = 'happymac', img = '', buttons = ['OK'] }) {
    return new Promise(resolve => {
      closeMenus();
      const m = document.createElement('div');
      const id = 'alert-' + Date.now();
      m.className = 'modal';
      m.innerHTML = `<div class="alert" role="alertdialog" aria-modal="true" aria-labelledby="${id}"><div class="alert-in">` +
        (img ? `<img src="${esc(img)}" alt="">` : `<i class="ic" data-icon="${esc(icon)}"></i>`) +
        `<div class="alert-msg" id="${id}"></div><div class="btns"></div></div></div>`;
      const msg = $('.alert-msg', m);
      if (rich) msg.innerHTML = rich; else msg.textContent = text;
      const prev = document.activeElement;
      const done = label => {
        m.remove();
        alertOpen = null;
        if (prev && prev.focus) prev.focus({ preventScroll: true });
        resolve(label);
      };
      buttons.forEach((label, i) => {
        const b = document.createElement('button');
        b.className = 'btn' + (i === buttons.length - 1 ? ' default' : '');
        b.textContent = label;
        b.addEventListener('click', () => done(label));
        $('.btns', m).append(b);
      });
      m.addEventListener('pointerdown', e => { if (e.target === m) Sound.play('beep'); });
      alertOpen = { done, cancel: buttons[0], el: m };
      document.body.append(m);
      paintIcons(m);
      $('.btn.default', m).focus();
      Sound.play('beep');
    });
  }
  function alertKeys(e) {
    if (!alertOpen) return false;
    if (e.key === 'Escape') {
      e.preventDefault();
      alertOpen.done(alertOpen.cancel);
    } else if (e.key === 'Tab') {
      const bs = $$('.btn', alertOpen.el), i = bs.indexOf(document.activeElement);
      e.preventDefault();
      bs[(i + (e.shiftKey ? -1 : 1) + bs.length) % bs.length].focus();
    }
    return true;
  }

  /* ── Menus ────────────────────────────────────────── */
  let openMenu = null;
  const menuItems = m => $$('[role^="menuitem"]', m).filter(i => !i.disabled);

  function showMenu(m) {
    if (openMenu === m) return;
    closeMenus();
    if (!m) return;
    updateMenus();
    m.classList.add('open');
    $('.mt', m).setAttribute('aria-expanded', 'true');
    openMenu = m;
  }
  function closeMenus() {
    if (!openMenu) return;
    openMenu.classList.remove('open');
    $('.mt', openMenu).setAttribute('aria-expanded', 'false');
    openMenu = null;
  }

  $$('.menu', menubar).forEach(m => {
    const mt = $('.mt', m);
    mt.addEventListener('click', e => {
      if (openMenu === m) return closeMenus();
      showMenu(m);
      if (e.detail === 0) (menuItems(m)[0] || mt).focus();
    });
    mt.addEventListener('pointerenter', () => { if (openMenu && openMenu !== m) showMenu(m); });
    $('.dd', m).addEventListener('click', e => {
      const item = e.target.closest('[role^="menuitem"]');
      if (!item || item.disabled) return;
      Sound.play('click');
      if (!item.dataset.cmd) { closeMenus(); return; }   // plain links open normally
      e.preventDefault();
      // Menu items blink once before the menu closes.
      item.classList.add('flash');
      setTimeout(() => {
        item.classList.remove('flash');
        closeMenus();
        run(item.dataset.cmd);
      }, 120);
    });
  });
  document.addEventListener('pointerdown', e => { if (openMenu && !e.target.closest('.menu')) closeMenus(); }, true);

  function menuKeys(e) {
    if (!openMenu) return false;
    const items = menuItems(openMenu), i = items.indexOf(document.activeElement);
    if (e.key === 'Escape') {
      const mt = $('.mt', openMenu);
      closeMenus();
      mt.focus();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const next = e.key === 'ArrowDown' ? (items[i + 1] || items[0]) : (items[i - 1] || items[items.length - 1]);
      if (next) next.focus();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const all = $$('.menu', menubar).filter(visible);
      const next = all[(all.indexOf(openMenu) + (e.key === 'ArrowRight' ? 1 : -1) + all.length) % all.length];
      showMenu(next);
      (menuItems(next)[0] || $('.mt', next)).focus();
    } else return false;
    e.preventDefault();
    return true;
  }

  function updateMenus() {
    const top = topWin(), items = top && top.classList.contains('folder') ? $('.items', top) : null;
    const set = (cmd, off) => $$(`[data-cmd="${cmd}"]`, menubar).forEach(b => { b.disabled = off; });
    const check = (cmd, on) => $$(`[data-cmd="${cmd}"]`, menubar).forEach(b => b.setAttribute('aria-checked', String(!!on)));
    set('open-selected', !selected);
    set('info', !selected);
    set('close', !top);
    set('close-all', !top);
    set('cleanup', !top || isPhone());
    set('empty-trash', !trashFull);
    set('view-icon', !items);
    set('view-name', !items);
    check('view-icon', items && !items.classList.contains('list'));
    check('view-name', items && items.classList.contains('list'));
  }

  /* ── Commands (menus and buttons with data-cmd) ───── */
  function run(cmd, from) {
    const [name, arg] = cmd.split(':');
    const top = topWin();
    switch (name) {
      case 'open': openWin(arg, iconFor(arg)); break;
      case 'open-selected': if (selected) activate(selected); break;
      case 'close': closeWin((from && from.closest('.win')) || top); break;
      case 'close-all': openWins().forEach(w => closeWin(w, { quiet: true })); Sound.play('close'); break;
      case 'info': getInfo(selected); break;
      case 'copy-email': copyEmail(); break;
      case 'view-icon':
      case 'view-name':
        if (top && top.classList.contains('folder')) $('.items', top).classList.toggle('list', name === 'view-name');
        updateMenus();
        break;
      case 'cleanup': cleanUp(); break;
      case 'empty-trash': emptyTrash(); break;
      case 'restart': restart(); break;
      case 'shutdown': shutDown(); break;
      case 'shuffle': Puzzle.shuffle(); break;
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      alertBox({ icon: 'letter', text: `Copied ${EMAIL} to the clipboard.` });
    } catch (e) {
      alertBox({ icon: 'letter', text: `Email Austin at ${EMAIL}` });
    }
  }

  function cleanUp() {
    if (isPhone()) return;
    openWins().sort((a, b) => a.style.zIndex - b.style.zIndex).forEach((w, i) => {
      const st = wins.get(w.id), r = fit({ ...rectOf(w), x: 24 + i * 28, y: 16 + i * 26 });
      setBox(w, r);
      if ('fixed' in w.dataset) w.style.height = '';
      if (st) { st.rect = r; st.zoomed = false; }
    });
    Sound.play('click');
  }

  /* ── Trash ────────────────────────────────────────── */
  let trashFull = true;
  async function emptyTrash() {
    if (!trashFull) return;
    const items = $$('#trash .items > .icon');
    const ok = await alertBox({
      icon: 'caution',
      text: `The Trash contains ${items.length} items, which use 48.2 GB of disk space. Are you sure you want to permanently remove these items?`,
      buttons: ['Cancel', 'OK'],
    });
    if (ok !== 'OK') return;
    items.forEach(i => i.remove());
    if (items.includes(selected)) select(null);
    trashFull = false;
    $('#trash .trash-size').textContent = 'zero K';
    $$('.icon.trash [data-icon]').forEach(el => { el.dataset.icon = 'trash'; });
    paintIcons();
    updateFolderCounts();
    updateMenus();
    Sound.play('crunch');
  }

  function updateFolderCounts() {
    $$('.win.folder').forEach(w => {
      const c = $('.hdr .count', w), n = $$('.items > .icon', w).length;
      if (c) c.textContent = n + (n === 1 ? ' item' : ' items');
    });
  }

  /* ── Desktop patterns (Control Panels) ────────────── */
  const PATTERNS = [
    { id: 'classic', name: 'Classic Gray', css: 'conic-gradient(#aeaeae 25%, #b9b9b9 0 50%, #aeaeae 0 75%, #b9b9b9 0) 0 0/4px 4px' },
    { id: 'dither', name: '50% Gray', fg: '#808080', bg: '#c9c9c9', px: ['#.', '.#'] },
    { id: 'bricks', name: 'Bricks', fg: '#868686', bg: '#bdbdbd', px: ['########', '...#....', '...#....', '...#....', '########', '.......#', '.......#', '.......#'] },
    { id: 'diagonal', name: 'Diagonal', fg: '#8a8a8a', bg: '#c3c3c3', px: ['#.......', '.#......', '..#.....', '...#....', '....#...', '.....#..', '......#.', '.......#'] },
    { id: 'lattice', name: 'Lattice', fg: '#868686', bg: '#c1c1c1', px: ['#.......', '.#.....#', '..#...#.', '...#.#..', '....#...', '...#.#..', '..#...#.', '.#.....#'] },
    { id: 'dots', name: 'Dots', fg: '#7d7d7d', bg: '#bfbfbf', px: ['#...', '....', '..#.', '....'] },
    { id: 'teal', name: 'Teal', css: '#3f8686' },
    { id: 'lavender', name: 'Lavender', css: '#9896c8' },
  ];
  function patternCSS(p) {
    if (p.css) return p.css;
    const n = p.px.length;
    let d = '';
    p.px.forEach((row, y) => [...row].forEach((c, x) => { if (c === '#') d += `M${x} ${y}h1v1h-1z`; }));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${n}" shape-rendering="crispEdges"><rect width="${n}" height="${n}" fill="${p.bg}"/><path fill="${p.fg}" d="${d}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 0 0/${n * 2}px ${n * 2}px`;
  }
  function applyPattern(id) {
    const p = PATTERNS.find(x => x.id === id) || PATTERNS[0];
    html.style.setProperty('--desk', patternCSS(p));
    store.set('ab-pattern', p.id);
    $$('#patterns .swatch').forEach(s => s.setAttribute('aria-checked', String(s.dataset.id === p.id)));
    const label = $('#patterns .pat-name');
    if (label) label.textContent = p.name;
  }
  function buildPatterns() {
    const box = $('#patterns .swatches');
    if (!box) return;
    PATTERNS.forEach(p => {
      const b = document.createElement('button');
      b.className = 'swatch';
      b.dataset.id = p.id;
      b.title = p.name;
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-label', p.name);
      b.style.background = patternCSS(p);
      b.addEventListener('click', () => { applyPattern(p.id); Sound.play('click'); });
      box.append(b);
    });
  }

  /* ── Puzzle (the System 7 desk accessory, with a scan) ── */
  const Puzzle = (() => {
    const N = 4, GAP = N * N - 1;
    const win = $('#puzzle'), board = $('#puzzle .board'), movesEl = $('#puzzle .moves');
    let order = [], moves = 0, built = false;   // order[cell] = tile number; GAP is the hole

    const solved = () => order.every((t, i) => t === i);
    function neighbors(c) {
      const x = c % N, y = Math.floor(c / N), out = [];
      if (x > 0) out.push(c - 1);
      if (x < N - 1) out.push(c + 1);
      if (y > 0) out.push(c - N);
      if (y < N - 1) out.push(c + N);
      return out;
    }
    function layout() {
      if (!built) return;
      const B = board.clientWidth, t = B / N, iw = B * 16 / 9, ox = (iw - B) / 2;
      $$('.tile', board).forEach(b => {
        const tile = +b.dataset.t, cell = order.indexOf(tile);
        Object.assign(b.style, {
          width: t + 'px', height: t + 'px',
          left: (cell % N) * t + 'px', top: Math.floor(cell / N) * t + 'px',
          backgroundSize: `${iw}px ${B}px`,
          backgroundPosition: `${-((tile % N) * t + ox)}px ${-(Math.floor(tile / N) * t)}px`,
        });
      });
      movesEl.textContent = moves + (moves === 1 ? ' move' : ' moves');
    }
    // Shuffle with random legal moves, so every puzzle can be solved.
    function shuffle() {
      order = [...Array(N * N).keys()];
      let gap = GAP, prev = -1;
      for (let i = 0; i < 260; i++) {
        const options = neighbors(gap).filter(c => c !== prev);
        const c = options[Math.floor(Math.random() * options.length)];
        [order[gap], order[c]] = [order[c], order[gap]];
        prev = gap;
        gap = c;
      }
      if (solved()) return shuffle();
      moves = 0;
      board.classList.remove('solved');
      layout();
    }
    // Slide the tile(s) between `cell` and the hole, like the original.
    function tap(cell) {
      const gap = order.indexOf(GAP);
      const gx = gap % N, gy = Math.floor(gap / N), cx = cell % N, cy = Math.floor(cell / N);
      if (cell === gap || (cx !== gx && cy !== gy) || board.classList.contains('solved')) return;
      const step = cx === gx ? (cy > gy ? N : -N) : (cx > gx ? 1 : -1);
      for (let g = gap; g !== cell; g += step) [order[g], order[g + step]] = [order[g + step], order[g]];
      moves++;
      Sound.play('slide');
      layout();
      if (solved()) finish();
    }
    async function finish() {
      board.classList.add('solved');
      Sound.play('win');
      const pick = await alertBox({
        icon: 'happymac',
        text: `Solved in ${moves} moves! The picture is a photogrammetry scan of the Game Over videogame museum.`,
        buttons: ['Shuffle', 'Open the Scan'],
      });
      if (pick === 'Open the Scan') {
        const icon = $('.icon[data-slug="videogame-museum"]');
        if (icon) openScan(icon);
      }
      shuffle();
    }
    function build() {
      if (built) return;
      built = true;
      for (let t = 0; t < GAP; t++) {
        const b = document.createElement('button');
        b.className = 'tile';
        b.dataset.t = t;
        b.setAttribute('aria-label', 'Tile ' + (t + 1));
        b.style.backgroundImage = `url("${PUZZLE_IMG}")`;
        b.innerHTML = `<span>${t + 1}</span>`;
        board.append(b);
      }
      board.addEventListener('click', e => {
        const b = e.target.closest('.tile');
        if (b) tap(order.indexOf(+b.dataset.t));
      });
      shuffle();
    }
    // Arrow keys push the tile next to the hole into it.
    function key(e) {
      const gap = order.indexOf(GAP), gx = gap % N, gy = Math.floor(gap / N);
      const target = { ArrowLeft: gx < N - 1 && gap + 1, ArrowRight: gx > 0 && gap - 1, ArrowUp: gy < N - 1 && gap + N, ArrowDown: gy > 0 && gap - N }[e.key];
      if (target === undefined) return false;
      e.preventDefault();
      if (target !== false) tap(target);
      return true;
    }
    if (win) win.addEventListener('winopen', () => { build(); layout(); });
    return { shuffle: () => { if (built) { shuffle(); Sound.play('click'); } }, layout, key };
  })();

  /* ── Startup, Restart, Shut Down ──────────────────── */
  const bootEl = $('#boot');
  const PARADE = ['ext', 'tf', 'pr', 'ss', 'grid', 'dice', 'globe', 'cpanel'];

  // Happy Mac, then the welcome box while extension icons march across the bottom.
  // Any click or key skips it.
  function boot({ chime = false } = {}) {
    return new Promise(resolve => {
      const short = isPhone();
      const t1 = short ? 450 : 750, t2 = short ? 800 : 1200;
      const parade = $('.parade', bootEl);
      const timers = [];
      html.classList.add('booting');
      bootEl.className = '';
      parade.innerHTML = '';
      paintIcons(bootEl);
      const finish = () => {
        timers.forEach(clearTimeout);
        document.removeEventListener('pointerdown', skip, true);
        document.removeEventListener('keydown', skip, true);
        html.classList.remove('booting');
        bootEl.className = '';
        store.set('ab-booted', '1');
        resolve();
      };
      const skip = e => {
        if (e.type === 'pointerdown') {
          // Swallow the click that follows, so it doesn't land on whatever is underneath.
          const eat = ev => { ev.stopPropagation(); ev.preventDefault(); };
          document.addEventListener('click', eat, { capture: true, once: true });
          setTimeout(() => document.removeEventListener('click', eat, true), 600);
        }
        finish();
      };
      document.addEventListener('pointerdown', skip, true);
      document.addEventListener('keydown', skip, true);
      if (chime) Sound.play('chime');
      timers.push(setTimeout(() => {
        bootEl.className = 's2';
        PARADE.forEach((name, i) => timers.push(setTimeout(() => {
          parade.insertAdjacentHTML('beforeend', `<i class="ic" data-icon="${name}"></i>`);
          paintIcons(parade);
        }, 60 + i * Math.floor((t2 - 160) / PARADE.length))));
      }, t1));
      timers.push(setTimeout(finish, t1 + t2));
    });
  }

  function openDefaults() {
    const { W, H } = deskSize();
    if (!isPhone() && W - ICON_COL >= 1200 && H >= 620) openWin('scans', null, { quiet: true });
    openWin('readme', null, { quiet: true });
  }

  async function restart() {
    openWins().forEach(w => closeWin(w, { quiet: true }));
    select(null);
    $$('.shutdown').forEach(s => s.remove());
    await boot({ chime: true });
    openDefaults();
  }

  function shutDown() {
    openWins().forEach(w => closeWin(w, { quiet: true }));
    select(null);
    const s = document.createElement('div');
    s.className = 'shutdown';
    s.innerHTML = '<div class="alert" role="alertdialog" aria-modal="true" aria-label="Shut down"><div class="alert-in"><i class="ic" data-icon="mac"></i>' +
      '<div class="alert-msg">It is now safe to switch off your Macintosh.</div>' +
      '<div class="btns"><button class="btn default">Restart</button></div></div></div>';
    document.body.append(s);
    paintIcons(s);
    const b = $('button', s);
    b.addEventListener('click', restart);
    b.focus();
  }

  /* ── Deep links: austinbeaulier.com/#scans opens Scans ── */
  function route(hash) {
    const id = decodeURIComponent((hash || '').replace(/^#/, ''));
    if (!id) return false;
    if (id.startsWith('scan-')) {
      const icon = $(`.icon[data-slug="${id.slice(5).replace(/[^a-z0-9-]/gi, '')}"]`);
      if (icon) openScan(icon);
      return !!icon;
    }
    const w = document.getElementById(id);
    if (!w || !w.classList.contains('win')) return false;
    openWin(id);
    return true;
  }
  window.addEventListener('hashchange', () => route(location.hash));

  /* ── Clicks and keys ──────────────────────────────── */
  document.addEventListener('click', e => {
    if (e.target.closest('.dd')) return;
    const icon = e.target.closest('.icon');
    if (icon) {
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;   // let the browser open the link in a new tab
      e.preventDefault();
      select(icon);
      // Mouse: click selects, double-click opens. Touch, pen and keyboard: one tap opens.
      if (e.detail === 0 || lastPointer !== 'mouse' || isPhone() || e.detail >= 2) activate(icon);
      return;
    }
    const cmdBtn = e.target.closest('button[data-cmd]');
    if (cmdBtn) { run(cmdBtn.dataset.cmd, cmdBtn); return; }
    const link = e.target.closest('a[href^="#"]');
    if (link && link.hash) {
      e.preventDefault();
      route(link.hash);
      return;
    }
    if (e.target === desk || e.target.matches('.desk-icons, .items, .folder .body')) select(null);
  });

  document.addEventListener('keydown', e => {
    if (alertKeys(e) || menuKeys(e)) return;
    const icon = e.target.closest && e.target.closest('.icon');
    if (icon && /^Arrow/.test(e.key)) {
      const group = $$(':scope > .icon', icon.parentElement).filter(visible);
      const next = group[group.indexOf(icon) + (e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 1)];
      if (next) {
        e.preventDefault();
        next.focus();
        select(next);
      }
      return;
    }
    const top = topWin();
    if (top && top.id === 'puzzle' && /^Arrow/.test(e.key) && Puzzle.key(e)) return;
    if (e.key === 'Escape' && top) {
      e.preventDefault();
      closeWin(top);
    }
  });

  $('#sound-btn').addEventListener('click', () => Sound.toggle());

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      Puzzle.layout();
      if (isPhone()) return;
      openWins().forEach(w => {
        const st = wins.get(w.id), r = fit(rectOf(w));
        setBox(w, r);
        if ('fixed' in w.dataset) w.style.height = '';
        if (st) st.rect = r;
      });
    }, 120);
  });
  phoneMQ.addEventListener('change', () => { updateMenus(); setTimeout(Puzzle.layout, 50); });

  /* ── Menu bar clock (click for the date) ──────────── */
  (() => {
    const el = $('#menu-clock');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let showDate = false;
    const tick = () => {
      const d = new Date();
      if (showDate) { el.textContent = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`; return; }
      const m = d.getMinutes(), ap = d.getHours() >= 12 ? 'PM' : 'AM', h = d.getHours() % 12 || 12;
      el.textContent = `${days[d.getDay()]} ${h}:${m < 10 ? '0' : ''}${m} ${ap}`;
    };
    el.addEventListener('click', () => { showDate = !showDate; tick(); Sound.play('click'); });
    tick();
    setInterval(tick, 15000);
  })();

  // Put the right store first: Android visitors get Google Play as the default button.
  (() => {
    const ua = navigator.userAgent, android = /Android/i.test(ua);
    if (android) {
      const ios = $('#tf-ios'), and = $('#tf-android');
      ios.classList.remove('default');
      and.classList.add('default');
      and.parentNode.insertBefore(and, ios);
    }
    if (android || /iPhone|iPad|iPod/i.test(ua)) $('#ss-phone-note').hidden = false;
  })();

  /* ── Start ────────────────────────────────────────── */
  paintIcons();
  buildPatterns();
  applyPattern(store.get('ab-pattern') || 'classic');
  Sound.sync();
  $$('.win', desk).forEach(enhance);
  updateFolderCounts();
  updateMenus();

  const land = () => {
    const h = location.hash;
    if (!h || h === '#readme') return openDefaults();
    if (!isPhone()) openWin('readme', null, { quiet: true });
    if (!route(h) && isPhone()) openWin('readme', null, { quiet: true });
  };
  // Some embedded browsers report a zero-size window for a moment; wait for a real one.
  const whenSized = fn => (desk.clientWidth ? fn() : requestAnimationFrame(() => whenSized(fn)));
  whenSized(() => {
    if (html.classList.contains('booting')) boot().then(land);
    else land();
  });
})();
