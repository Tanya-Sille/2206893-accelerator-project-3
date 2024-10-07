import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';

const BULLETS_COUNT = 4;

const newsSlideButtons = document.querySelectorAll('.news__slide-link');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');

const tabIndexSet = (index) => {
  newsSlideButtons.forEach((button) => button.setAttribute('tabindex', '-1'));
  newsSlideButtons[index].setAttribute('tabindex', '0');
  if (mediaQueryDesktop.matches) {
    if (newsSlideButtons[index + 1]) {
      newsSlideButtons[index + 1].setAttribute('tabindex', '0');
    }
    if (newsSlideButtons[index + 2]) {
      newsSlideButtons[index + 2].setAttribute('tabindex', '0');
    }
  } else if (mediaQueryTablet.matches) {
    if (newsSlideButtons[index + 1]) {
      newsSlideButtons[index + 1].setAttribute('tabindex', '0');
    }
    if (newsSlideButtons[index + 2]) {
      newsSlideButtons[index + 2].setAttribute('tabindex', '0');
    }
    if (newsSlideButtons[index + 3]) {
      newsSlideButtons[index + 3].setAttribute('tabindex', '0');
    }
  }
};

new Swiper('.news__slider', {
  modules: [Pagination, Navigation, Grid],
  watchOverflow: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 300,
  spaceBetween: 20,
  lazy: true,
  simulateTouch: true,
  allowTouchMove: true,
  grabCursor: true,
  preventClicks: true,
  slideClass: 'news__item',

  pagination: {
    el: '.news__pagination',
    clickable: true,
    bulletClass: 'news__pagination-button',
    bulletActiveClass: 'news__pagination-button--current',
    renderBullet: function (index, className) {
      if (index >= BULLETS_COUNT) {
        return `<button class="${className}" type="button" aria-label="Показать страницу ${index + 1}." style="display: none">${index + 1}</button>`;
      } else {
        return `<button class="${className}" type="button" aria-label="Показать страницу ${index + 1}." style="display: inline-flex">${index + 1}</button>`;
      }
    },
  },

  navigation: {
    nextEl: '.news__button-next',
    prevEl: '.news__button-prev',
  },

  grid: {
    rows: 2,
    fill: 'column',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
      },
    },
    1440: {
      speed: 400,
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 32,
      simulateTouch: false,
      allowTouchMove: false,
      grid: {
        rows: 1,
        fill: 'column',
      },
    }
  },
  on: {
    init: (swiper) => {
      tabIndexSet(swiper.realIndex);
    },
    slideChangeTransitionStart: (swiper) => {
      const paginationBullets = swiper.pagination.bullets;
      tabIndexSet(swiper.realIndex);
      paginationBullets.forEach((paginationBullet, realIndex) => {
        paginationBullet.addEventListener('click', () => {
          paginationBullets.forEach((bullet, index) => {
            bullet.style.display = 'none';
            if (realIndex <= index + 2) {
              bullet.style.display = 'inline-flex';
            }
            if (index > realIndex + 1) {
              bullet.style.display = 'none';
            }
            if (realIndex <= 2 && index <= 3) {
              bullet.style.display = 'inline-flex';
            }
            if (realIndex === paginationBullets.length - 1 && index === paginationBullets.length - BULLETS_COUNT) {
              bullet.style.display = 'inline-flex';
            }
          });
        });
      });
    },
    realIndexChange: (swiper) => {
      swiper.pagination.bullets.forEach((bullet) => {
        if (bullet.classList.contains('news__pagination-button--current')) {
          bullet.click();
        }
      });
    }
  },
});
