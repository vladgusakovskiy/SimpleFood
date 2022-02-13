const swiper = new Swiper('.swiper', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  // autoplay: {
  //   delay: 6000,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 800,
});



// mixitup

$(function () {
  var mixer = mixitup('.popular-categories__list');
});