import {Swiper} from 'swiper';
import {Pagination} from 'swiper/modules';

const modalOpenButtons = document.querySelectorAll('.promo__content-link');

new Swiper('.promo', {
  modules: [Pagination],
  watchOverflow: true,
  slidesPerView: 1,
  speed: 300,
  spaceBetween: 0,
  simulateTouch: true,
  allowTouchMove: true,
  grabCursor: true,
  loop: true,
  autoHeight: true,
  slideClass: 'promo__item',
  pagination: {
    el: '.swiper-slide-active .promo__pagination-wrapper',
    clickable: true,
    bulletElement: 'button type="button" aria-label="Кнопка переключения слайдов."',
    bulletClass: 'promo__pagination-button',
    bulletActiveClass: 'promo__pagination-button--current',
  },
  breakpoints: {
    768: {
      speed: 400,
    },
    1440: {
      speed: 600,
      simulateTouch: false,
      allowTouchMove: false,
    }
  },
  on: {
    slideChangeTransitionStart: (swiper) => {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();

      modalOpenButtons.forEach((button) => button.setAttribute('tabindex', '-1'));
      modalOpenButtons[swiper.realIndex].setAttribute('tabindex', '0');
    }
  }
});
