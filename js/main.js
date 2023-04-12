import './util.js';
import './pictures.js';
import './full-photo.js';
import './validation.js';
import './forms.js';
import './scale.js';
import './effect.js';
import './api.js';
import './uploading-image.js';
import {applyingFilter} from './pictures.js';
import {getData} from './api.js';
import {closeUploadPhoto} from './full-photo.js';
import {setUserFormSubmit} from './validation.js';
import {errorOutput} from './util.js';

getData()
  .then((picture) => {
    applyingFilter(picture);
  })
  .catch(()=> {
    errorOutput('Не удалось загрузить данные. Попробуйте ещё раз');
  });

setUserFormSubmit(closeUploadPhoto);
