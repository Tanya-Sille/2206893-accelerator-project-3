
const aboutButton = document.querySelector('.about__button');
const modalContainer = document.querySelector('.modal');
const modalForm = modalContainer.querySelector('.modal__form');
const modalSubmitButton = modalContainer.querySelector('.form__button--modal');
const modalCloseButton = modalContainer.querySelector('.modal__close-button');


const onModalSubmitButton = (evt) => {
  evt.preventDefault();
  closeModal();
};

const onModalCloseButton = (evt) => {
  evt.preventDefault();
  closeModal();
};

const onDocumentClick = (evt) => {
  if (!evt.target.closest('.modal__content')) {
    evt.preventDefault();
    closeModal();
  }
};

const onDocumentEscapeKeydown = (evt) => {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

function closeModal () {
  modalContainer.classList.add('modal--close');
  modalSubmitButton.removeEventListener('click', onModalSubmitButton);
  modalCloseButton.removeEventListener('click', onModalCloseButton);
  modalContainer.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
  modalForm.reset();
}

const initModal = () => {
  aboutButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.remove('modal--close');
    modalSubmitButton.addEventListener('click', onModalSubmitButton);
    modalCloseButton.addEventListener('click', onModalCloseButton);
    modalContainer.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onDocumentEscapeKeydown);
  });
};

export {initModal};
