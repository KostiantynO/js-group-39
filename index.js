document.body.style.backgroundColor = '#212121';
document.body.style.color = '#eee';

// Задача 1 - Базовые операции с массивом

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-ролл");
// genres.unshift("Folk");
// console.log("genres", genres);

// const lastIndex = genres.length - 1;
// console.log(lastIndex);
// const lastElement = genres[lastIndex];
// console.log(lastElement);

// const firstElement = genres.shift();
// console.log(genres);
// console.log(firstElement);

// genres.unshift("Country", "Reggy");

// console.log(genres);

// Задача 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = "8 11";

// const numbers = values.split(" ");
// console.log("numbers", numbers);
// const result = numbers[0] * numbers[1];
// // const result = Number(numbers[0]) + Number(numbers[1]);
// // const result = +numbers[0] + +numbers[1];
// console.log(`result`, result);

// Задача 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log("order number", i + 1);
// //   console.log("element", fruits[i]);
// // }

// for (let fruit of fruits) {
//   let index = fruits.indexOf(fruit);
//   console.log("index", index + 1);
//   console.log("element", fruit);
// }

// Задача 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");
// console.log(`namesArray`, namesArray);
// console.log(`phonesArray`, phonesArray);

// for (let i = 0; i < namesArray.length; i += 1) {
//     console.log(`${namesArray[i]} - ${phonesArray[i]}`);
// }

// Задача 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = "Welcome to the future";
// const array = string.split(" ");
// array.shift();
// array.pop();
// console.log(`array`, array);
// const newString = array.join(" ");
// console.log(newString);

// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (i === 0 || i === array.length - 1) {
//     continue;
//   }

//   const word = array[i];

//   newArray.push(word);
// }

// console.log(`newArray`, newArray);
// const newString = newArray.join(" ");
// console.log(newString);

// Задача 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = "Welcome to the future";

// const array = string.split(" ");
// const reversedArray = array.reverse();
// const reversedString = reversedArray.join(" ");
// console.log(`array`, array);
// console.log(`reversedArray`, reversedArray);
// console.log("reversedString", reversedString);

// const array = string.split(" ");
// console.log(`array`, array);

// const newArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   const word = array[i];
//   newArray.push(word);
// }

// const reversedString = newArray.join(" ");
// console.log(`newArray`, newArray);
// console.log("reversedString", reversedString);

// const result = string === reversedString;

// console.log(`result`, result);

// Задача 7 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [1, 17, 94, 2, 23, 37, -1];

// let min = numbers[0];

// for (let number of numbers) {
//   if (min > number) {
//     min = number;
//   }
// }

// min = 2; min = 2; min 2; min = 2; min = 1; min = 1
// number = 2; number = 17; number = 94; number = 1; number = 23; number = 37

// console.log(min); // 1

// console.log(`numbers`, Math.min(...numbers));

// Задача 8 - использование includes

// const emails = ["user@gmail.com", "admin@gmail.com", "student@gmail.com"];

// const userMail = prompt("Enter your email");

// if (emails.includes(userMail)) {
//   console.log("Login");
// } else {
//   console.log("Wrong email");
// }
