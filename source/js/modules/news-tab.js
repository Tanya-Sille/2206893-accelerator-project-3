const tabButtons = document.querySelectorAll('.news__tab-button');
let currentButton = document.querySelector('.news__tab-button--current');

const onTabButtonClick = (button) => {
  button.classList.add('news__tab-button--current');
  button.setAttribute('tabindex', '-1');
  currentButton.classList.remove('news__tab-button--current');
  currentButton.setAttribute('tabindex', '0');
  currentButton = button;
};

const initTabs = () => tabButtons.forEach((button) => button.addEventListener('click', () => onTabButtonClick(button)));

export {initTabs};
