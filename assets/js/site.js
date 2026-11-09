/* The site's only JavaScript (~4 KB). Everything works without it: the theme follows
   the OS, all content is visible, the footer has every link, videos show a still frame. */
(function () {
  var root = document.documentElement;
  var reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduce = function () { return reduceQuery.matches; };

  /* ── Theme toggle (one in the menu, one in the footer) ─────────── */
  var toggles = document.querySelectorAll('.theme-toggle');
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  var currentTheme = function () { return root.dataset.theme || (darkQuery.matches ? 'dark' : 'light'); };
  var syncTheme = function () {
    toggles.forEach(function (b) { b.setAttribute('aria-pressed', currentTheme() === 'dark' ? 'true' : 'false'); });
  };
  toggles.forEach(function (b) {
    b.hidden = false;
    b.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncTheme();
    });
  });
  syncTheme();
  darkQuery.addEventListener('change', syncTheme);

  /* ── Menu: native modal <dialog> keeps focus inside and closes on Escape ── */
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.getElementById('site-menu');
  if (menuBtn && menu && typeof menu.showModal === 'function') {
    menuBtn.addEventListener('click', function () {
      menu.showModal();
      menuBtn.setAttribute('aria-expanded', 'true');
    });
    menu.querySelector('.menu__close').addEventListener('click', function () { menu.close(); });
    menu.addEventListener('close', function () {
      menuBtn.setAttribute('aria-expanded', 'false');
      if (!menu.dataset.navigating) menuBtn.focus();
      delete menu.dataset.navigating;
    });
    menu.querySelectorAll('.menu__list a').forEach(function (a) {
      a.addEventListener('click', function () { menu.dataset.navigating = '1'; menu.close(); });
    });
  } else if (menuBtn) {
    menuBtn.style.display = 'none'; /* very old browsers: footer links remain */
  }

  /* ── In-page links (scroll cue, Learn more, menu) move focus to their target ── */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="#"]');
    if (!a || a.pathname !== location.pathname || !a.hash) return;
    var target = document.getElementById(decodeURIComponent(a.hash.slice(1)));
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    setTimeout(function () { target.focus({ preventScroll: true }); }, 0);
  });

  /* ── Scroll reveal ─────────────────────────────────────────── */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce()) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
    root.dataset.reveal = 'on';
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    root.dataset.reveal = 'off';
  }

  /* ── Gentle parallax, opener only ──────────────────────────── */
  var opener = document.querySelector('.opener');
  var media = opener && opener.querySelector('.opener__media');
  if (media && !reduce()) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, opener.offsetHeight);
        media.style.transform = 'translate3d(0,' + (y * 0.18).toFixed(1) + 'px,0)';
        ticking = false;
      });
    }, { passive: true });
  }

  /* ── Video: never autoplays. Plays on hover/focus; visible Play/Pause button. ── */
  document.querySelectorAll('[data-video]').forEach(function (wrap) {
    var video = wrap.querySelector('video');
    var btn = wrap.querySelector('.video__toggle');
    if (!video || !btn) return;
    var label = btn.querySelector('.video__toggle-text');
    var hoverHost = wrap.closest('.card') || wrap;
    var userPaused = false;
    var sync = function () {
      var playing = !video.paused;
      btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
      label.textContent = playing ? 'Pause' : 'Play';
    };
    var play = function () { var p = video.play(); if (p && p.catch) p.catch(function () {}); };
    btn.hidden = false;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (video.paused) { userPaused = false; play(); } else { userPaused = true; video.pause(); }
    });
    hoverHost.addEventListener('mouseenter', function () { if (!reduce() && !userPaused) play(); });
    hoverHost.addEventListener('mouseleave', function () { video.pause(); });
    hoverHost.addEventListener('focusin', function () { if (!reduce() && !userPaused) play(); });
    hoverHost.addEventListener('focusout', function (e) { if (!hoverHost.contains(e.relatedTarget)) video.pause(); });
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    sync();
  });

  /* ── "On this page": mark the section in view ───────────── */
  var tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var byId = {};
    tocLinks.forEach(function (l) { byId[decodeURIComponent(l.hash.slice(1))] = l; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        tocLinks.forEach(function (l) { l.removeAttribute('aria-current'); });
        var link = byId[entry.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '0px 0px -70% 0px' });
    Object.keys(byId).forEach(function (id) { var h = document.getElementById(id); if (h) spy.observe(h); });
  }

  /* ── Cursor ring: pointer devices only, never with reduced motion. Native cursor stays. ── */
  var ring = document.querySelector('.cursor');
  if (ring && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce()) {
    var x = -100, y = -100, rx = -100, ry = -100, running = false;
    var loop = function () {
      rx += (x - rx) * 0.22; ry += (y - ry) * 0.22;
      ring.style.transform = 'translate3d(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px,0)';
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) requestAnimationFrame(loop); else running = false;
    };
    window.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      x = e.clientX; y = e.clientY;
      ring.classList.add('is-on');
      if (!running) { running = true; requestAnimationFrame(loop); }
    }, { passive: true });
    document.addEventListener('pointerleave', function () { ring.classList.remove('is-on'); });
    document.addEventListener('pointerover', function (e) {
      ring.classList.toggle('is-big', !!(e.target.closest && e.target.closest('a, button, summary, .card')));
    });
  }
})();
