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

  $('.header-burger').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.header-burger').toggleClass('header-burger--active');
    $('.header-burger__line').toggleClass('header-burger__line--active');
    $('.header-info').toggleClass('header-info--active');
    $('body').toggleClass('lock');
  });


  $('.swiper-button-prev-left, .swiper-button-next-right').on('click', function (e) {
    $('.swiper-button-prev-left, .swiper-button-next-right').removeClass('swiper-button-prev-left--active, swiper-button-next-right--active');
    $(this).addClass('swiper-button-prev-left--active, swiper-button-next-right--active');
  });


  $(".search-form__icon,.search-form__btn").on('click', function () {
    $(".search-form").toggleClass("search-form--active");
    $(".search-form__input").toggleClass("search-form__input--active");
    $(".search-form__btn").toggleClass("search-form__btn--active");
    $("input[type='search']").on('focus');
  });
});

// mixitup

$(function () {
  var mixer = mixitup('.popular-categories__list');
});