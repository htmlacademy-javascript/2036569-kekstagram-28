import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadStart = document.querySelector('.img-upload__start');

const imgUploadClose = () => {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
};

imgUploadStart.addEventListener('change', () => {
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

uploadCancel.addEventListener('click', () => {
  imgUploadClose();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    imgUploadClose();
  }
});
