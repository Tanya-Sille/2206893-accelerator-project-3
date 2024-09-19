const mainMenu = document.querySelector('.header__navigation');
const menuToggle = document.querySelector('.header__navigation-toggle');
const menuLinks = mainMenu.querySelectorAll('.header__link:not(.header__sub-navigation-button)');
const menuSubNavigationLinks = mainMenu.querySelectorAll('.header__sub-navigation-button');

let currentPageLink = mainMenu.querySelector('.header__link--current');

const onDocumentClick = (evt) => {
  if (!evt.target.closest('.header')) {
    evt.preventDefault();
    document.body.classList.remove('menu-open-overlay');
    mainMenu.classList.add('header__navigation--hidden');
  }
};

const toggleDocumentClick = () => {
  if (mainMenu.classList.contains('header__navigation--hidden')) {
    document.removeEventListener('click', onDocumentClick);
  } else {
    document.addEventListener('click', onDocumentClick);
  }
};

const onMenuToggleClick = () => {
  mainMenu.classList.toggle('header__navigation--hidden');
  document.body.classList.toggle('menu-open-overlay');
  toggleDocumentClick();
};

const onMenuClick = () => {
  onMenuToggleClick();

  if (currentPageLink) {
    currentPageLink.classList.remove('header__link--current');
  }
};

const openMainMenu = () => menuToggle.addEventListener('click', onMenuToggleClick);

const onMenuLinkClick = (menuLink) => menuLink.addEventListener('click', () => {
  onMenuClick();
  menuLink.classList.add('header__link--current');
  currentPageLink = menuLink;
});

const clickMenuLinks = () => menuLinks.forEach((menuLink) => onMenuLinkClick(menuLink));

const clickSubMenuLinks = () => menuSubNavigationLinks.forEach((menuSubNavigationLink) => menuSubNavigationLink.addEventListener('click', () => {
  menuSubNavigationLink.classList.toggle('header__link--current');
  menuSubNavigationLink.nextElementSibling.classList.toggle('header__sub-navigation--hidden');
}));

export {openMainMenu, clickMenuLinks, clickSubMenuLinks};
