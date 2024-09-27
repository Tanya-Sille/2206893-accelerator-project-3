const phoneInputs = document.querySelectorAll('input[type="tel"]');
const COUNTRY_CODE = '+7';
const length = COUNTRY_CODE.length;

const replacePhoneValue = (element) => {
  const matrix = `${COUNTRY_CODE} ___ ___ __ __`;
  const def = matrix.replace(/\D/g, '');
  let i = 0;
  let elementValue = element.value.replace(/\D/g, '');
  if (def.length >= elementValue.length) {
    elementValue = def;
  }
  element.value = matrix.replace(/./g, (a) => {
    if (/[_\d]/.test(a) && i < elementValue.length) {
      return elementValue.charAt(i++);
    } else if (i >= elementValue.length) {
      return '';
    } else {
      return a;
    }
  });
};

const onInputPhoneInput = ({target}) => {
  replacePhoneValue(target);
};

const onKeydownPhoneInput = (evt) => {
  if (evt.target.selectionStart <= length && evt.keyCode !== 8 && evt.keyCode !== 46) {
    evt.target.setSelectionRange(length, length);
  }
  if ((evt.target.selectionStart === length || evt.target.selectionStart === 1) && evt.keyCode === 8) {
    evt.preventDefault();
  }
  if (evt.target.selectionStart === 1 && evt.keyCode === 46) {
    evt.preventDefault();
  }
};

const onBlurPhoneInput = ({target}) => {
  if (target.value === COUNTRY_CODE) {
    target.value = '';
    target.removeEventListener('input', onInputPhoneInput);
    target.removeEventListener('blur', onBlurPhoneInput);
  }
};

const onFocusPhoneInput = ({target}) => {
  if (!target.value) {
    target.value = COUNTRY_CODE;
    target.addEventListener('input', onInputPhoneInput);
    target.addEventListener('blur', onBlurPhoneInput);
    target.addEventListener('keydown', onKeydownPhoneInput);
  }
};

const initPhoneMask = () => {
  if (phoneInputs.length) {
    phoneInputs.forEach((input) => {
      input.addEventListener('focus', onFocusPhoneInput);
      if (input.value) {
        replacePhoneValue(input);
        input.addEventListener('input', onInputPhoneInput);
        input.addEventListener('blur', onBlurPhoneInput);
        input.addEventListener('keydown', onKeydownPhoneInput);
      }
    });
  }
};

export {initPhoneMask};
