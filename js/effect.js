const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectsLevel = document.querySelector('.effect-level__slider');
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
  step: 0,
});

let elementaryEffect = 'effects__preview--none';

const updateSliderOptions = (newOptions) => {
  effectsLevel.noUiSlider.updateOptions({
    range: {
      min: newOptions.min,
      max: newOptions.max
    },
    start: newOptions.start,
    step: newOptions.step
  });
};

const removeFilter = () => {
  imageUploadPreview.classList.remove(elementaryEffect);
  imageUploadPreview.classList.add('effects__preview--none');
  imageUploadPreview.style.filter = 'none';
  effectsLevel.classList.toggle('hidden');
  elementaryEffect = 'effects__preview--none';
};

const onUpdateSlider = (slider, effect) => {
  slider.noUiSlider.on('update', () => {
    effectsValue.value = slider.noUiSlider.get();
    const filter = effects[effect].filter.replace(' ', effectsValue.value);
    imageUploadPreview.style.filter = filter;
  });
};

const changeEffect = (evt) => {
  if(evt.target.name === 'effect') {
    const nameNewEffect = evt.target.value;
    const newEffect = `effects__preview--${nameNewEffect}`;
    imageUploadPreview.classList.remove(elementaryEffect);
    imageUploadPreview.classList.add(newEffect);
    elementaryEffect = newEffect;
    if (nameNewEffect === 'none') {
      imageUploadPreview.style.filter = 'none';
      effectsLevel.classList.toggle('hidden');
    } else {
      if(effectsLevel.classList.contains('hidden')) {
        effectsLevel.classList.remove('hidden');
      }
      updateSliderOptions(effects[nameNewEffect].options);
      onUpdateSlider(effectsLevel, nameNewEffect);
    }
  }
};

export{changeEffect, removeFilter};
