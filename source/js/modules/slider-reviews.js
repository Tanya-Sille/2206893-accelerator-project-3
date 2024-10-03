import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';


new Swiper('.reviews__slider', {
  modules: [Navigation, Scrollbar],
  watchOverflow: true,
  slidesPerView: 1,
  speed: 300,
  spaceBetween: 15,
  lazy: true,
  simulateTouch: true,
  allowTouchMove: true,
  grabCursor: true,
  autoHeight: true,
  preventClicks: true,
  slideClass: 'reviews__item',
  scrollbar: {
    el: '.reviews__slider-scrollbar',
    dragSize: 326,
    draggable: true,
  },
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
    1440: {
      speed: 400,
      slidesPerView: 2,
      simulateTouch: false,
      allowTouchMove: false,
      scrollbar: {
        dragSize: 394,
      },
    }
  },
});
