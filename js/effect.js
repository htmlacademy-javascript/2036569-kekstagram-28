// const effectsRadio = document.querySelector('.effects__radio');
const effectsUpload = document.querySelector('.img-upload__effects');
const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectsLevel = document.querySelector('.img-upload__effect-level');
const effectsValue = document.querySelector('.effect-level__value');

const effects = {
  'chrome': {
    filter: 'grayscale( )',
    options: {
      min: 0,
      max: 1,
      start: 0,
      step: 0.1
    }
  },
  'sepia': {
    filter: 'sepia( )',
    options: {
      min: 0,
      max: 1,
      start: 0,
      step: 0.1
    }
  },
  'marvin': {
    filter: 'invert( %)',
    options: {
      min: 0,
      max: 100,
      start: 0,
      step: 1
    }
  },
  'phobos': {
    filter: 'blur( px)',
    options: {
      min: 0,
      max: 3,
      start: 0,
      step: 0.1
    }
  },
  'heat': {
    filter: 'brightness( )',
    options: {
      min: 1,
      max: 3,
      start: 1,
      step: 0.1
    }
  },
};

noUiSlider.create(effectsLevel, {
  range: {
    min:0,
    max:100,
  },
  start: 0,
});

effectsUpload.addEventListener('click', (evt) => {
  imageUploadPreview.className = `img-upload__preview effects__preview--${evt.target.value}`;
});
