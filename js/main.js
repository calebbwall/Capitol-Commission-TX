/* =========================================
   Capitol Commission Texas — main.js
   ========================================= */

(function () {
  'use strict';

  /* ── HAMBURGER / NAV DROPDOWN ── */
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

  /* ── FORM SUCCESS REDIRECT (Formspree) ── */
  // After Formspree submission, show a simple thank-you message
  const forms = document.querySelectorAll('form[action*="formspree"]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      // Only intercept if Formspree ID has been set
      if (form.action.includes('YOUR_FORMSPREE_ID') || form.action.includes('YOUR_NEWSLETTER_FORMSPREE_ID')) {
        e.preventDefault();
        alert('Thank you! Please set up your Formspree form ID in contact.html to enable form submissions.');
        return;
      }
      // Otherwise let Formspree handle it normally (AJAX or redirect)
    });
  });

})();
