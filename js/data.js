import {randomInteger, createRandomIdFromRangeGenerator} from './util.js';

// Объект с описанием к фотографиям
const PHOTO_DESCRIPTION = {
  1: 'Бухта с галечным пляжем',
  2: 'Указатель на пляж',
  3: 'Пляж на необитаемом острове',
  4: 'Девушка с фотоаппартом на пляжу',
  5: 'Веселый суп',
  6: 'Спортивная черная машина',
  7: 'Завтрак с клубникой',
  8: 'Виноградный компот',
  9: 'Пролетающий самолет над пляжем',
  10: 'Выкатная обувница',
  11: 'Песчанная дорога на пляж',
  12: 'Белая audi',
  13: 'Салат из рыбы',
  14: 'Ролл из кота',
  15: 'Отдых на диване',
  16: 'Вид на горы из окна самолета',
  17: 'Музыкальное представление',
  18: 'Классический автомобиль',
  19: 'Ночные тапочки с фонариками',
  20: 'Отель с пальмами',
  21: 'Тайский салат',
  22: 'Закат на море',
  23: 'Мраморный краб',
  24: 'Ночной концерт',
  25: 'Переправа через реку с бегемотами',
};

// Начальное и конечное значение id
const INITIAL_VALUE_ID = 1;
const FINAL_VALUE_ID = 25;

// Лайки
const INITIAL_VALUE_LIKES = 15;
const FINAL_VALUE_LIKES = 200;

// Начальное и конечное значение id в комментариях
const INITIAL_VALUE_ID_COMMENT = 1;
const FINAL_VALUE_ID_COMMENT = 1000;


// Массив с текстом комментария
const TEXT_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Объект с именами
const NAMES = [
  'Алиса',
  'Никита',
  'Сергей',
  'Наталья',
  'Арсений',
  'Мира',
  'Дмитрий',
  'Юлия',
  'Константин',
  'Виктория',
];

// Начальное и конечное значения аватата и имени

const INITIAL_VALUE_AVATAR = 1;
const FINAL_VALUE_AVATAR = 6;

const INITIAL_VALUE_NAME = 1;
const FINAL_VALUE_NAME = 10;


//Уникальный индификатор для фото
const generateId = createRandomIdFromRangeGenerator(INITIAL_VALUE_ID, FINAL_VALUE_ID);

//Уникальный индификатор для комметария
const generateIdComment = createRandomIdFromRangeGenerator(INITIAL_VALUE_ID_COMMENT, FINAL_VALUE_ID_COMMENT);

// Генерация объекта комментария
const createComment = () => {
  const numberOfAvatar = randomInteger(INITIAL_VALUE_AVATAR, FINAL_VALUE_AVATAR);
  const numberOfName = randomInteger(INITIAL_VALUE_NAME, FINAL_VALUE_NAME);
  const uniqueNumber = generateIdComment();

  return {
    id: uniqueNumber,
    avatar: `img/avatar-${numberOfAvatar}.svg`,
    message: TEXT_COMMENTS[numberOfAvatar - 1],
    name: NAMES[numberOfName - 1],
  };
};

// Функция для генерации объектов
const createPhoto = () => {
  const uniqueNumber = generateId();

  return {
    id: uniqueNumber,
    url: `photos/${uniqueNumber}.jpg`,
    description: PHOTO_DESCRIPTION[uniqueNumber],
    likes: randomInteger(INITIAL_VALUE_LIKES, FINAL_VALUE_LIKES),
    comments: Array.from({length: randomInteger(1,10)}, (_,commentIndex) =>
      createComment(commentIndex + 1)
    ),
  };
};

const getPictures = () =>
  Array.from({length: FINAL_VALUE_ID}, (_,pictureIndex) =>
    createPhoto(pictureIndex + 1)
  );

export{getPictures};
