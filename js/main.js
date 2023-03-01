// Объект с описанием к фотографиям
const photoDescription = {
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
const initialValueId = 1;
const finalValueId = 25;

// Лайки
const initialValueLikes = 15;
const finalValueLikes = 200;

const numberOfLikes = randomInteger(initialValueLikes, finalValueLikes);

// Начальное и конечное значение id в комментариях
const initialValueIdComment = 1;
const finalValueIdComment = 1000;


// Объекты с текстом комментария
const textComment = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Объект с именами
const name = [
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

const initialValueAvatar = 1;
const finalValueAvatar = 6;

const initialValueName = 1;
const finalValueName = 10;

// Функция для определния случайного числа
function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Функция для получения уникальных индификаторов
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = randomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateId = createRandomIdFromRangeGenerator(initialValueId, finalValueId);

//Уникальный индификатор для комметария
const generateIdComment = createRandomIdFromRangeGenerator(initialValueIdComment, finalValueIdComment);

// Генерация объекта комментария
const createComment = () => {
  const numberOfAvatar = randomInteger(initialValueAvatar, finalValueAvatar);
  const numberOfName = randomInteger(initialValueName, finalValueName);
  const uniqueNumber = generateIdComment();

    return {
      id: uniqueNumber,
      avatar: `img/avatar-${numberOfAvatar}.svg`,
      message: textComment[numberOfAvatar - 1],
      name: name[numberOfName - 1],
    };
  };

// Функция для генерации объектов
const createPhoto = () => {
const uniqueNumber = generateId();

  return {
    id: uniqueNumber,
    url: `photos/${uniqueNumber}.jpg`,
    description: photoDescription[uniqueNumber],
    likes: numberOfLikes,
    comments: [createComment(), createComment()]
  };
};
