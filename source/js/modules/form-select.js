const select = document.querySelector('.form__select');
const selectTitle = select.querySelector('.form__select-title');
const selectLabels = select.querySelectorAll('.form__select-label');
const selectOptions = select.querySelectorAll('.form__select-option');
let selectedOption = document.querySelector('.form__select-option:checked');

const closeSelect = () => {
  select.setAttribute('data-state', '');
  selectLabels.forEach((selectLabel) => selectLabel.setAttribute('tabindex', '-1'));
};

const onDocumentEscapeKeydown = (evt) => {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    closeSelect();
  }
};


const onDocumentClick = (evt) => {
  if (!evt.target.closest('.form__select')) {
    evt.preventDefault();
    closeSelect();
  }
};

const changeSelectedOption = (index) => {
  selectedOption.setAttribute('checked', 'false');
  selectedOption = selectOptions[index];
  selectedOption.setAttribute('checked', 'true');
  selectLabels.forEach((selectLabel) => selectLabel.classList.remove('form__select-label--active'));
  selectLabels[index].classList.add('form__select-label--active');
};

const setSelectState = () => {
  if (select.getAttribute('data-state') === 'active') {
    closeSelect();
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onDocumentEscapeKeydown);
  } else {
    select.setAttribute('data-state', 'active');
    selectLabels.forEach((selectLabel) => selectLabel.setAttribute('tabindex', '0'));
    select.querySelector('.form__select-label--active').focus();
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onDocumentEscapeKeydown);
  }
};

const onSelectTitleClick = () => selectTitle.addEventListener('click', () => setSelectState());

const onSelectOptionClick = (evt, index) => {
  selectTitle.textContent = evt.target.dataset.value;
  changeSelectedOption(index);
  setSelectState();
};

const onSelectOptionKeyClick = (evt, index) => {
  if (evt.code === 'Enter') {
    setSelectState();
  } else if (evt.code === 'ArrowDown' && index !== selectLabels.length - 1) {
    evt.preventDefault();
    selectLabels[index + 1].focus();
    changeSelectedOption(index + 1);
    selectTitle.textContent = selectLabels[index + 1].dataset.value;
  } else if (evt.code === 'ArrowUp' && index !== 0) {
    evt.preventDefault();
    selectLabels[index - 1].focus();
    changeSelectedOption(index - 1);
    selectTitle.textContent = selectLabels[index - 1].dataset.value;
  }
};

const activateFormSelect = () => {
  onSelectTitleClick();
  selectLabels.forEach((selectLabel, index) => {
    selectLabel.addEventListener('click', (evt) => onSelectOptionClick(evt, index));
    selectLabel.addEventListener('keydown', (evt) => onSelectOptionKeyClick(evt, index));
  });
};

export {activateFormSelect};
