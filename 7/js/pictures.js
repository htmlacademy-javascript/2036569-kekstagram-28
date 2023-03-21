import {getPictures} from './data.js';
import {addBigPicture} from './full-photo.js';

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const patternPhoto = getPictures();

const renderPhoto = () => {
  const patternPhotoFragment = document.createDocumentFragment();

  patternPhoto.forEach((post) => {
    const photo = pictureTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = post.url;
    photo.querySelector('.picture__likes').textContent = post.likes;
    photo.querySelector('.picture__comments').textContent = post.comments.length;
    patternPhotoFragment.append(photo);
    photo.addEventListener('click', () => {
      addBigPicture(post);
    });
  });
  pictures.append(patternPhotoFragment);
};

renderPhoto();


