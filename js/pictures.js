import {getPictures} from './data.js';

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const patternPhoto = getPictures();

const patternPhotoFragment = document.createDocumentFragment();

patternPhoto.forEach(({url, likes, comments}) => {
  const photo = pictureTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = comments.length;
  patternPhotoFragment.appendChild(photo);
});

pictures.appendChild(patternPhotoFragment);
