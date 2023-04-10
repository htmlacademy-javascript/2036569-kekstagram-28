const STEP_SCALE = 25;
const MAX_STEP = 100;

const imageUploadPreview = document.querySelector('.img-upload__preview');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const valueScale = document.querySelector('.scale__control--value');

let scale = +valueScale.value.replace('%', ' ');

const subtraction = () => {
  if(scale - STEP_SCALE < STEP_SCALE) {
    scale = STEP_SCALE;
  } else {
    scale -= STEP_SCALE;
  }
  valueScale.value = `${scale}%`;
  imageUploadPreview.style = `transform: scale(${scale / MAX_STEP})`;
};

const addition = () => {
  if(scale + STEP_SCALE > MAX_STEP) {
    scale = MAX_STEP;
  } else {
    scale += STEP_SCALE;
  }
  valueScale.value = `${scale}%`;
  imageUploadPreview.style = `transform: scale(${scale / MAX_STEP})`;
};

buttonSmaller.addEventListener('click', subtraction);
buttonBigger.addEventListener('click', addition);

export {imageUploadPreview, valueScale};
