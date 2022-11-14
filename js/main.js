const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: "coverflow",
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});