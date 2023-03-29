// Функция для определния случайного числа
const ALERT_ERROR_TIME = 5000;

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

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const errorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '10';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '25%';
  alertContainer.style.top = '0';
  alertContainer.style.right = '25%';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.borderRadius = '2px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.fontWeight = '700';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';


  alertContainer.textContent = message;

  alertContainer.style.color = 'black';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_ERROR_TIME);
};

export {randomInteger, createRandomIdFromRangeGenerator, isEscapeKey, isEnterKey, errorAlert};

