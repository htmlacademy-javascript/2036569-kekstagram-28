import {isEscapeKey} from './util.js';
import {errorAlert} from './util.js';
import {sendData} from './api.js';

const imageUpload = document.querySelector('.img-upload__form');
const imageHashtags = document.querySelector('.text__hashtags');
const imageDescription = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикуется...'
};

const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_SYMBOL_COMMENT = 140;
const MAX_HASHTAG_NUMBERS = 5;

const pristine = new Pristine(imageUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field--invalid',
  successClass: 'fimg-upload__field--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

function validateHashtags (value) {

  const hashTagArray = value.toLowerCase().trim().split(' ');
  const uniqueHashTag = [...new Set(hashTagArray)];

  for (const hashtag of uniqueHashTag) {
    if(!HASHTAG_VALID_REGEX.test(hashtag)) {
      return false;
    }
  }

  return hashTagArray.length <= MAX_HASHTAG_NUMBERS && hashTagArray.length === uniqueHashTag.length;
}

const validateComment = (value) => value.length <= MAX_SYMBOL_COMMENT;

pristine.addValidator(imageHashtags, validateHashtags, 'Введен неверный Хэш-тег, количество Хэш-тегов не больше 5');
pristine.addValidator(imageDescription, validateComment, 'Количество символов не должно привышать 140');

const stopHandlerWhenFocused = (evt) => {
  if (isEscapeKey) {
    evt.stopPropagation();
  }
};

imageDescription.onkeydown = stopHandlerWhenFocused;
imageHashtags.onkeydown = stopHandlerWhenFocused;

const setUserFormSubmit = (onSuccess) => {
  imageUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(
          (err) => {
            errorAlert(err.message);
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit};
