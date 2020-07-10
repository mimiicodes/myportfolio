
// Swiper JS

//   Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    autoplay: {
      delay: 4000,
    },
  });