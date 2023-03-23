const imageUploadPreview = document.querySelector('.img-upload__preview');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const valueScale = document.querySelector('.scale__control--value');

let scale = valueScale.value.replace('%', ' ');

const minus = () => {
  if(scale - 25 < 25) {
    scale = 25;
  } else {
    scale -= 25;
  }
  valueScale.value = `${scale}%`;
  imageUploadPreview.style = `transform: scale(${scale / 100})`;
};

const plus = () => {
  if(scale + 25 > 100) {
    scale = 100;
  } else {
    scale += 25;
  }
  valueScale.value = `${scale}%`;
  imageUploadPreview.style = `transform: scale(${scale / 100})`;
};

buttonSmaller.addEventListener('click', minus);
buttonBigger.addEventListener('click', plus);
