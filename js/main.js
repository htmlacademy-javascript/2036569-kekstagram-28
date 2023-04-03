import './data.js';
import './util.js';
import './pictures.js';
import './full-photo.js';
import './validation.js';
import './forms.js';
import './scale.js';
import './effect.js';
import './api.js';
import './uploading-image.js';
import {applicationFilter} from './pictures.js';
import {getData} from './api.js';
import {closeUploadPhoto} from './full-photo.js';
import {setUserFormSubmit} from './validation.js';

getData()
  .then((picture) => {
    applicationFilter(picture);
  });

setUserFormSubmit(closeUploadPhoto);
