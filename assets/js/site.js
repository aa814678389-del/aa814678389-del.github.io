/* The only JavaScript on the site (~2 KB). Everything works without it:
   the theme follows the OS, content is visible, videos show their still frame. */
(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ── Theme toggle ─────────────────────────────────────────────
     Follows the OS setting until the visitor picks one. */
  var btn = document.querySelector('.theme-toggle');
  if (btn) {
    var dark = window.matchMedia('(prefers-color-scheme: dark)');
    var current = function () { return root.dataset.theme || (dark.matches ? 'dark' : 'light'); };
    var sync = function () { btn.setAttribute('aria-pressed', current() === 'dark' ? 'true' : 'false'); };
    btn.hidden = false;
    sync();
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
    dark.addEventListener('change', sync);
  }

  /* ── Scroll reveal ────────────────────────────────────────────
     Sections fade up once as they enter the viewport. CSS skips the
     effect entirely when reduced motion is on. */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
    root.dataset.reveal = 'on';
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    root.dataset.reveal = 'off';
  }

  /* ── Card thumbnail videos ────────────────────────────────────
     Play only while the card is hovered or focused; never with reduced motion. */
  document.querySelectorAll('video[data-hover-play]').forEach(function (video) {
    var card = video.closest('.card');
    if (!card) return;
    var play = function () {
      if (reduceMotion.matches) return;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    };
    var stop = function () { video.pause(); };
    card.addEventListener('mouseenter', play);
    card.addEventListener('mouseleave', stop);
    card.addEventListener('focusin', play);
    card.addEventListener('focusout', stop);
  });

  /* ── In-page links move keyboard focus to their target ────── */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="#"]');
    if (!a || a.pathname !== location.pathname) return;
    var target = document.getElementById(decodeURIComponent(a.hash.slice(1)));
    if (target && target.tabIndex < 0 && target.hasAttribute('tabindex')) {
      setTimeout(function () { target.focus({ preventScroll: true }); }, 0);
    }
  });
})();
