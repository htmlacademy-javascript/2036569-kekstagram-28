import {addBigPicture} from './full-photo.js';

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPhoto = (cratePicture) => {
  const patternPhotoFragment = document.createDocumentFragment();

  cratePicture.forEach((post) => {
    const photo = pictureTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = post.url;
    photo.querySelector('.picture__likes').textContent = post.likes;
    photo.querySelector('.picture__comments').textContent = post.comments.length;
    patternPhotoFragment.appendChild(photo);
    photo.addEventListener('click', () => {
      addBigPicture(post);
    });
  });
  pictures.appendChild(patternPhotoFragment);
};

export {renderPhoto};
