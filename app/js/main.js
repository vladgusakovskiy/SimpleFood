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


$(function () {
  $('.swiper-button-prev-left, .swiper-button-next-right').on('click', function (e) {
    $('.swiper-button-prev-left, .swiper-button-next-right').removeClass('swiper-button-prev-left--active, swiper-button-next-right--active');
    $(this).addClass('swiper-button-prev-left--active, swiper-button-next-right--active');
  });
});


$(document).ready(function () {

  $(".search-form__btn").click(function () {
    $(".search-form").toggleClass("search-form--active");
    $(".search-form__input").toggleClass("search-form__input--active");
    $("input[type='text']").focus();
  });

});







// mixitup

$(function () {
  var mixer = mixitup('.popular-categories__list');
});