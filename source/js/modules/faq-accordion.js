const accordionItems = document.querySelectorAll('.faq__item');
const accordionButtons = document.querySelectorAll('.faq__accordion-button');

const onAccordionButtonClick = (index) => {
  accordionItems[index].classList.toggle('faq__item--active');
};

const initAccordion = () => {
  accordionButtons.forEach((accordionButton, index) => accordionButton.addEventListener('click', () => onAccordionButtonClick(index)));
};

export {initAccordion};
