import {isEscapeKey, isEnterKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');

const social = bigPicture.querySelector('.social');
const commentsLoader = social.querySelector('.comments-loader');

let postCommentsCounter = 0;
let loadedCommentsCounter = 0;
let postComments;

const genFiveComments = (comments) => {
  for (let i = 0; i < comments.length; i++) {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');
    const img = document.createElement('img');
    const p = document.createElement('p');

    loadedCommentsCounter++;

    img.classList.add('social__picture');
    img.src = comments[i].avatar;
    img.alt = comments[i].name;
    img.width = '35';
    img.height = '35';

    p.classList.add('social__text');
    p.textContent = comments[i].message;

    comment.append(img);
    comment.append(p);
    bigPicture.querySelector('.social__comments').append(comment);
    if (loadedCommentsCounter === postCommentsCounter) {
      commentsLoader.classList.add('hidden');
    }
  }
};

const slicePost = (comment) => {
  genFiveComments(comment.slice(loadedCommentsCounter, loadedCommentsCounter + 5));
  document.querySelector('.current-comments-count').textContent = loadedCommentsCounter;
};

const loadFiveCmts = (evt) => {
  evt.preventDefault();
  slicePost(postComments);
};

const resetComments = () => {
  loadedCommentsCounter = 0;
  postCommentsCounter = 0;
};

const addBigPicture = (post) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = post.url;
  bigPicture.querySelector('.likes-count').textContent = post.likes;
  postComments = post.comments;
  bigPicture.querySelector('.comments-count').textContent = postComments.length;
  postCommentsCounter = postComments.length;
  slicePost(postComments);
  commentsLoader.addEventListener('click', loadFiveCmts);
  bigPicture.querySelector('.social__caption').textContent = post.description;
  document.querySelector('body').classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigPicture.querySelector('.comments-loader').classList.remove('hidden');
  document.querySelector('body').classList.remove('modal-open');
  resetComments();
};

bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => {
  closeBigPicture();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    addBigPicture();
  }
});

export {addBigPicture};
