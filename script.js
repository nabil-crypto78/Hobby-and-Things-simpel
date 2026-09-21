/* =========================================================================
   SCRIPT BERSAMA — dipakai semua halaman (index, jenis, manfaat, contoh)
   -------------------------------------------------------------------------
   File ini dipanggil lewat <script src="script.js"></script>
   sebelum tag </body> di tiap halaman. Isinya 2 fitur:
   1. Tombol menu HP (buka/tutup daftar menu di layar kecil)
   2. Animasi muncul pelan-pelan untuk elemen ber-class "reveal" pas discroll
   ========================================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Menu HP (hamburger) ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var navLinks = document.querySelector('nav ul');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
    // Tutup menu otomatis kalau salah satu link diklik
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  /* ---------- 2. Animasi muncul pas discroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Kalau browser lama tidak dukung, langsung tampilkan saja semua
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

});