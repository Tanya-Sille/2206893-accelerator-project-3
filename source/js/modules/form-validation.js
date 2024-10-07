const contactForm = document.querySelector('.contact-form__form');

const addErrorCheckClass = (fields) => {
  if (fields) {
    fields.forEach((field) => field.classList.add('form__error'));
  }
};

const initValidation = (form) => {
  const inputs = form.querySelectorAll('.form__input');
  const submitButton = form.querySelector('.form__button');

  submitButton.addEventListener('click', () => addErrorCheckClass(inputs));
};

const initValidationContact = () => initValidation(contactForm);

export {initValidationContact};
