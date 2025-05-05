$(document).ready(function () {
  
  $('#anonForm').on('submit', function (e) { /* submit form with success message, no storage of input */
    e.preventDefault();
    const first = $('#firstName').val().trim();
    const last = $('#lastName').val().trim();
    const phone = $('#phone').val().trim();

    if (first && last && phone) {
      $('#successMessage').fadeIn();
      $('#anonForm')[0].reset();
    }
  });

  
  const swiper = new Swiper('.mySwiper', { /* swiper.js */
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.swiper-pagination'
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const page = document.body.getAttribute("data-page");

  const waitForHeader = setInterval(() => {
    const navLinks = document.querySelectorAll('nav a[data-nav]');

    if (navLinks.length > 0) {
      navLinks.forEach((link) => {
        if (link.dataset.nav === page) {
          link.classList.add("active-tab");
        }
      });

      clearInterval(waitForHeader); // stop once nav is ready
    }
  }, 100);
});

