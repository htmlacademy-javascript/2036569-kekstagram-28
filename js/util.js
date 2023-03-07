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
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
export {randomInteger, createRandomIdFromRangeGenerator};

