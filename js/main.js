const swiper = new Swiper('.swiper', {

  loop: true,

   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  }

});


const swiperComment = new Comment('.comment-slider', {

  loop: true,

   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: '.slider-button__prev',
    prevEl: '.slider-button__next',
  }

});