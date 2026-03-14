/* =========================================
   Capitol Commission Texas — main.js
   ========================================= */

(function () {
  'use strict';

  /* ── HAMBURGER / NAV DROPDOWN (mobile) ── */
  const menuBtn     = document.getElementById('menuBtn');
  const navDropdown = document.getElementById('navDropdown');

  if (menuBtn && navDropdown) {
    menuBtn.addEventListener('click', function () {
      const isOpen = navDropdown.classList.toggle('open');
      menuBtn.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    navDropdown.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navDropdown.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!menuBtn.contains(e.target) && !navDropdown.contains(e.target)) {
        navDropdown.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── SCROLL TO TOP ── */
  const scrollTopBtn = document.getElementById('scrollTop');

  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── FORM THANK-YOU BANNER (Formsubmit.co) ── */
  // After a form is submitted, Formsubmit redirects back with ?sent=1
  // We show a thank-you banner at the top of the page.
  if (window.location.search.indexOf('sent=1') !== -1) {
    const banner = document.createElement('div');
    banner.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'right:0',
      'background:#16a34a', 'color:#fff',
      'text-align:center', 'padding:14px 20px',
      'font-weight:700', 'font-size:1rem',
      'z-index:2000', 'box-shadow:0 2px 8px rgba(0,0,0,.2)'
    ].join(';');
    banner.textContent = 'Thank you! Your message has been sent. We\'ll be in touch soon.';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = [
      'margin-left:16px', 'background:none', 'border:none',
      'color:#fff', 'font-size:1rem', 'cursor:pointer', 'font-weight:700'
    ].join(';');
    closeBtn.addEventListener('click', function () { banner.remove(); });
    banner.appendChild(closeBtn);

    document.body.prepend(banner);

    // Remove the ?sent=1 from the URL without reloading
    history.replaceState(null, '', window.location.pathname);
  }

})();
