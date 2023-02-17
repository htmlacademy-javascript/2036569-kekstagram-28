// Функция JS для проверки длины строки

function checkingLengthString (string, numberCharacters) {
  if (string.length <= numberCharacters) {
    return true;
  }
  return false;
}

checkingLengthString('проверяемая строка', 20);
checkingLengthString('проверяемая строка', 18);
checkingLengthString('проверяемая строка', 10);

// Функция JS для проверки, является ли строка палиндромом

function palindromeCheck(string) {
  const str = string.replaceAll(' ', '').toLowerCase();
  const half = Math.floor(str.length / 2);
  for (let i = 0; i < half; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
    return true;
  }
}

palindromeCheck('Топот');
palindromeCheck('ДовОд');
palindromeCheck('Кекс');
palindromeCheck('Лёша на полке клопа нашёл ');

// Функция JS, которая принимает строку и возвращает положительные числа

function returnNumber (string) {
  let number = string.replace(/\D/g, '');
  if (number === '') {
    number = NaN;
  }
  return parseFloat(number);
}


returnNumber('2023 год');
returnNumber('ECMAScript 2022');
returnNumber('1 кефир, 0.5 батона');
returnNumber('а я томат');
returnNumber('-1');

// Функция JS, которая возвращает исходную строку и допольтельные символы до заданной длинны

function addressFormation (string, maxLength, additionalСharacters) {
  if (string.length >= maxLength) {
    return string;
  }
  const str = maxLength - string.length;
  if (additionalСharacters.length < str) {
    return String(additionalСharacters).slice(0, str).repeat(str) + string;
  }
  return String(additionalСharacters).slice(0, str) + string;
}

addressFormation('1', 2, '0');
addressFormation('1', 4, '0');
addressFormation('q', 4, 'werty');
addressFormation('q', 4, 'we');
addressFormation('qwerty', 4, '0');
