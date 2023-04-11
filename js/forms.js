import {isEscapeKey} from './util.js';
import {changeEffect, removeFilter} from './effect.js';
import {imageUploadPreview, valueScale} from './scale.js';

const uploadFile = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadStart = document.querySelector('.img-upload__start');
const effectsLevel = document.querySelector('.effect-level__slider');
const uploadForm = document.querySelector('.img-upload__form');
const imageHashtags = document.querySelector('.text__hashtags');
const imageDescription = document.querySelector('.text__description');


const removeForm = () => {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  imageDescription.value = '';
  imageHashtags.value = '';
  valueScale.value = '100%';
  imageUploadPreview.style = 'transform: scale(1)';
  uploadForm.removeEventListener('change', changeEffect);
  removeFilter();
};

imgUploadStart.addEventListener('change', () => {
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  effectsLevel.classList.add('hidden');
  uploadForm.addEventListener('change', changeEffect);
});

uploadCancel.addEventListener('click', () => {
  removeForm();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    removeForm();
  }
});

export {removeForm};
