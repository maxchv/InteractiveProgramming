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
// Алгоритм решения задачи:
//  1. Преобразовать строку line - в целое число и сохранить в переменной num
//  2. Если в num хранитьсе не NaN, то
//  3. Чрез if проверить, что число num эквивалентно rndNumber, то вывести сообщение, 
//       что число угадано с guessCount попыток; закрыть консоль (rl.close())
//  4. Иначе (else if) если число rndNumber > num - вывести сообщение 'Загаданное число больше введенного'
//  5. Иначе (else if) если число rndNumber < num - вывести сообщение 'Загаданное число меньше введенного'
//  6. Иначе (else if) если число guessCount > 7 - вывести сообщение 'Игра окончена. Вы не угадали'; закрыть консоль (rl.close())
function game(line) {
    // TODO: здесь будет ваш код
    // FIXME: Убрать этот коментарий и строку ниже
    throw new Error('Not implemented yet');


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