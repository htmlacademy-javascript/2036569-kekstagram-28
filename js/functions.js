// Функция JS для проверки длины строки

function checkingLengthString (string, numberCharacters) {
  return string.length <= numberCharacters;
}

checkingLengthString('проверяемая строка', 20);
checkingLengthString('проверяемая строка', 18);
checkingLengthString('проверяемая строка', 10);

// Функция JS для проверки, является ли строка палиндромом

function palindromeCheck(string) {
  return string.split('').reverse().join('').replaceAll(' ', '').toLowerCase() === string.replaceAll(' ', '').toLowerCase();
}

palindromeCheck('Топот');
palindromeCheck('ДовОд');
palindromeCheck('Кекс');
palindromeCheck('Лёша на полке клопа нашёл ');

// Функция JS, которая принимает строку и возвращает положительные числа

function returnNumber (string) {
  const number = string.replace(/\D/g, '');
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
