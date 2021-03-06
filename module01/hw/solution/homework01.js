/**
 * Домашнее задание №1
 * Написать программу на `JavaScript`, в которой определить
 * средний возраст ваших ближайших родственников (мамы, папы, братьев, сестёр и,
 * конечно, себя).
 *
 * Результат напечатать в консоль.
 */


// Инструкция:

// 1. Задайте через переменные (их должно быть столько, сколько у вас 
//    ближайших родственников) возраст родственников.
//    Помните, что имя переменной должно отражать содержимое, т.е.
//    Переменная mamaAge содержит возраст вашей мамы, а myAge - ваш 

let mamaAge = 45;
let papaAge = 47;
let sisterAge = 11;
let myAge = 16;

// 2. Вычислите средний возраст ваших родственников и сохраните в перменную avgAge

let avgAge = (mamaAge + papaAge + sisterAge + myAge) / 4;

//  3. Используя метод console.log() вывести значение переменной avgAge на консоль

console.log('Средний возраст моих родственниов: ' + avgAge);

// 4. Протестируйте вашу программу запустив ее так: node homework01.js в консоли или
//    в терминале Visual Studio Code

// 5. При отсутвии ошибок и корректности работы программы этот файл необходимо загрузить
//    на сайт mystat.itstep.org

