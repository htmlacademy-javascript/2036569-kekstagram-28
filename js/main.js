// Функция для определния случайного числа
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Функция для получения уникальных индификаторов
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = randomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateId = createRandomIdFromRangeGenerator(1, 25);

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

// Лайки
const numberOfLikes = randomInteger(15, 200);

//Уникальный индификатор для комметария
const generateIdComment = createRandomIdFromRangeGenerator(1, 1000);

// Объекты с текстом комментария
const textComment = {
  1: 'Всё отлично!',
  2: 'В целом всё неплохо. Но не всё.',
  3: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  4: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  5: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  6: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
};

// Объект с именами
const name = {
  1: 'Алиса',
  2: 'Никита',
  3: 'Сергей',
  4: 'Наталья',
  5: 'Арсений',
  6: 'Мира',
  7: 'Дмитрий',
  8: 'Юлия',
  9: 'Константин',
  10: 'Виктория',
};

// Генерация объекта комментария
const createComment = () => {
  const numberOfAvatar = randomInteger(1, 6);
  const numberOfName = randomInteger(1, 10);
  const uniqueNumber = generateIdComment();

    return {
      id: uniqueNumber,
      avatar: 'img/avatar-' + numberOfAvatar + '.svg',
      message: textComment[numberOfAvatar],
      name: name[numberOfName],
    };
  };

// Функция для генерации объектов
const createPhoto = () => {
const uniqueNumber = generateId();

  return {
    id: uniqueNumber,
    url: 'photos/' + uniqueNumber + '.jpg',
    description: photoDescription[uniqueNumber],
    likes: numberOfLikes,
    comments: [createComment(), createComment()]
  };
};
