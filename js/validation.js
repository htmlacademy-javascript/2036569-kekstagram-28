import {isEscapeKey} from './util.js';
import {sendData} from './api.js';
import {removeForm} from './forms.js';

const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_SYMBOL_COMMENT = 140;
const MAX_HASHTAG_NUMBERS = 5;

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикуется...'
};

const imageUpload = document.querySelector('.img-upload__form');
const imageHashtags = document.querySelector('.text__hashtags');
const imageDescription = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

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

const closeMessage = (message) => {
  document.body.removeChild(message);
};


const closeMessageByEscape = (message) => {
  if (isEscapeKey) {
    closeMessage(message);
  }
};

const closeMessageByOutside = (evt, message) => {
  if (evt.target.className === 'error' || evt.target.className === 'success') {
    closeMessage(message);
  }
};

const messageGenearte = (marker) => {
  let messageID = 0;
  if (marker) {
    messageID = document.querySelector('#success').content.querySelector('section');
  } else {
    messageID = document.querySelector('#error').content.querySelector('section');
  }
  const message = messageID.cloneNode(true);
  const button = message.querySelector('button');
  document.body.appendChild(message);
  button.addEventListener('click',() => closeMessage(message));
  message.addEventListener('click', (evt) => {
    closeMessageByOutside(evt, message);
  });
  document.addEventListener('keydown', () => {
    closeMessageByEscape(message);
  });
};

const success = () => {
  removeForm();
  messageGenearte(true);
};

function validateHashtags (value) {

  const hashTagArray = value.toLowerCase().trim().split(' ');
  const uniqueHashTags = [...new Set(hashTagArray)];

  if(uniqueHashTags[0] === '') {
    return true;
  }
  for (const hashtag of uniqueHashTags) {
    if(!HASHTAG_VALID_REGEX.test(hashtag)) {
      return false;
    }
  }
  return hashTagArray.length <= MAX_HASHTAG_NUMBERS && hashTagArray.length === uniqueHashTags.length;
}

const validateComment = (value) => value.length <= MAX_SYMBOL_COMMENT;

pristine.addValidator(imageHashtags, validateHashtags, 'Введен неверный Хэш-тег, количество Хэш-тегов не больше 5');
pristine.addValidator(imageDescription, validateComment, 'Количество символов не должно привышать 140');

const onStopWhenFocused = (evt) => {
  if (isEscapeKey) {
    evt.stopPropagation();
  }
};

imageDescription.onkeydown = onStopWhenFocused;
imageHashtags.onkeydown = onStopWhenFocused;

const setUserFormSubmit = (onSuccess) => {
  imageUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(
          () => {
            messageGenearte(false);
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit, success};
