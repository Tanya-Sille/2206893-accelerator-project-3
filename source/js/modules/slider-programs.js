import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

const programSlideButtons = document.querySelectorAll('.programs__slide-link');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');

const tabIndexSet = (index) => {
  programSlideButtons.forEach((button) => button.setAttribute('tabindex', '-1'));
  programSlideButtons[index].setAttribute('tabindex', '0');
  if (mediaQueryTablet.matches) {
    programSlideButtons[index + 1].setAttribute('tabindex', '0');
  }
  if (mediaQueryDesktop.matches) {
    programSlideButtons[index + 2].setAttribute('tabindex', '0');
  }
};

new Swiper('.programs__slider', {
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
  slideClass: 'programs__item',
  scrollbar: {
    el: '.programs__control-scrollbar',
    dragSize: 326,
    draggable: true,
  },
  navigation: {
    nextEl: '.slider-control__button--next',
    prevEl: '.slider-control__button--prev',
  },
  on: {
    init: (swiper) => {
      tabIndexSet(swiper.realIndex);
    },
    slideChangeTransitionStart: (swiper) => {
      tabIndexSet(swiper.realIndex);
    }
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      speed: 400,
      spaceBetween: 30,
    },
    1440: {
      speed: 600,
      slidesPerView: 3,
      simulateTouch: false,
      allowTouchMove: false,
      scrollbar: {
        dragSize: 394,
      },
    }
  },
});
