/*
Реализовать игру Камень-Ножницы-Бумага. 
Игра продолжается до 7 попыток
*/

const readline = require('readline');
// работа с консольным вводом/выводом 
const rl = readline.createInterface(process.stdin, process.stdout);

// Объявление глобальных переменных
// rndNumber - Загаданное число компьютером
var rndNumber = Math.round(Math.random() * 100) + 1;
// guessCount - Количество попыток отгадать число
var guessCount = 0;


// Вспомогательная функция отображающая количество попыток
function showPrompt() {
    guessCount++;
    rl.setPrompt(`Попытка ${guessCount}> `);
    rl.prompt();
}

// Сообщение отображается только один раз при запуске игры
console.log("Игра угадай число");
console.log("Необходимо за 7 попыток угадать число загаданное компьютером.");
console.log("Число находится в диапазоне от 1 до 100");

// Необходимо реализовать функцию game
// Функция принимает строковый аргумент line - число введенное игроком
function game(line) {
    let num = parseInt(line);
    console.log(num);
    if (isNaN(num)) {
        console.log(`Введенная строка "${line}" не является числом`);
    } else {
        if (rndNumber === num) {
            console.log(`Число ${rndNumber} угадано c ${guessCount} попыток`);
            rl.close();
        } else if (rndNumber > num) {
            console.log('Загаданное число больше введенного');
        } else if (rndNumber < num) {
            console.log('Загаданное число меньше введенного');
        } else if (guessCount > 7) {
            console.log("Игра окончена. Вы не угадали.");
            rl.close();
        }
    }
}

// Здесь ничего менять не нужно
showPrompt();
rl.on('line', function (line) {
    if (line === "выход" || line === "exit") rl.close();
    game(line);
    showPrompt();
}).on('close', function () {
    process.exit(0);
});