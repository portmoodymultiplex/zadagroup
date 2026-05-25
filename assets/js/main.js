// ============================================================
// Zada Group — site interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // --- Nav scroll behavior ---
  // Pages with a full-bleed hero: nav starts transparent, gets background after scroll.
  // Other pages: nav has solid background from the start (.nav.solid is set in HTML).
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');
  if (nav && hero && !nav.classList.contains('solid')) {
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- Hero "loaded" state — triggers content slide-in ---
  if (hero) {
    requestAnimationFrame(() => hero.classList.add('is-loaded'));
  }

  // --- Hero slider — auto-rotating with Ken Burns ---
  const slider = document.querySelector('.hero-slider');
  if (slider) {
    const slides = slider.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicators button');
    let idx = 0;
    const ROTATE_MS = 6000;

    const show = (next) => {
      slides[idx].classList.remove('active');
      if (indicators[idx]) indicators[idx].classList.remove('active');
      idx = (next + slides.length) % slides.length;
      slides[idx].classList.add('active');
      if (indicators[idx]) indicators[idx].classList.add('active');
    };

    let timer = setInterval(() => show(idx + 1), ROTATE_MS);

    indicators.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        clearInterval(timer);
        show(i);
        timer = setInterval(() => show(idx + 1), ROTATE_MS);
      });
    });
  }

  // --- Reveal-on-scroll for elements with .reveal ---
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }
});

// MLS / IDX integration hook
// When the user signs up with an IDX provider (REW, Realtyna, Showcase IDX, etc.),
// drop the provider's embed snippet into elements with id="idx-featured" or id="idx-listings".
