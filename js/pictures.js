import {addBigPicture} from './full-photo.js';
import {randomElement, debounce} from './util.js';

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const imgFilterForms = document.querySelector('.img-filters__form');
const imgFilters = document.querySelector('.img-filters');
const filterDefailt = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

let newPost = [];
let tempForPosts = [];

const renderPhoto = () => {
  tempForPosts.forEach((post) => pictures.removeChild(post));
  tempForPosts = [];

  const patternPhotoFragment = document.createDocumentFragment();
  newPost
    .forEach((post) => {
      const photo = pictureTemplate.cloneNode(true);
      photo.querySelector('.picture__img').src = post.url;
      photo.querySelector('.picture__likes').textContent = post.likes;
      photo.querySelector('.picture__comments').textContent = post.comments.length;
      patternPhotoFragment.appendChild(photo);
      tempForPosts.push(photo);
      photo.addEventListener('click', () => {
        addBigPicture(post);
      });
    });
  pictures.appendChild(patternPhotoFragment);
};

const changeFilter = (post, cb) => {
  imgFilterForms.addEventListener('click', (evt) => {
    newPost = [...post];
    if(evt.target.id === 'filter-default') {
      filterDefailt.classList.add('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
    } if(evt.target.id === 'filter-random') {
      filterDefailt.classList.remove('img-filters__button--active');
      filterRandom.classList.add('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
      newPost = randomElement(newPost, 10);
    } if(evt.target.id === 'filter-discussed') {
      filterDefailt.classList.remove('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');
      filterDiscussed.classList.add('img-filters__button--active');
      newPost.sort((a,b) => b.comments.length - a.comments.length);
    }
    cb();
  });
};

const applicationFilter = (post) => {
  imgFilters.classList.remove('img-filters--inactive');
  newPost = [...post];
  renderPhoto();
  changeFilter(post, debounce(() => renderPhoto(), 500));
};


export {renderPhoto, applicationFilter};
