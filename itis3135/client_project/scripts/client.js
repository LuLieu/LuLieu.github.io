$(document).ready(function () {
  
  $('#anonForm').on('submit', function (e) {
    e.preventDefault();
    const first = $('#firstName').val().trim();
    const last = $('#lastName').val().trim();
    const phone = $('#phone').val().trim();

    if (first && last && phone) {
      $('#successMessage').fadeIn();
      $('#anonForm')[0].reset();
    }
  });

  
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.swiper-pagination'
    }
  });
});
