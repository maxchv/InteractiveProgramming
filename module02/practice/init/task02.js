/*
## Задание 2


Написать скрипт в котором пользователь вводит номер месяца в году (1 - Январь, 2 - Февраль и т.д.)
а на экран выводится время года.

Пример экрана вывода:

```
> Введите номер месяца: 9
Осень
```
*/

// Загружаем модуль для работы с консолью
const readline = require('readline');
// Через объект rl будем работать с консольным вводом/выводом 
const rl = readline.createInterface(process.stdin, process.stdout);

// Вспомогательная функция отображающая строку приглашение для ввода номера месяца
function showPrompt() {
    rl.setPrompt(`Введите номер месяца: `);
    rl.prompt();
}

// Необходимо реализовать функцию printSeasonName
// Функция принимает строковый аргумент line - число введенное игроком
// Алгоритм решения задачи аналогичен задаче 1
function printSeasonName(line) {
    console.log(typeof (line) + ' ' + line);

    // TODO: здесь будет ваш код
    // FIXME: Убрать этот коментарий и строку ниже
    throw new Error('Not implemented yet');




    // Закрываем консоль
    rl.close();
}

// Здесь ничего менять не нужно
showPrompt();
rl.on('line', function (line) {
    if (line === "выход" || line === "exit") rl.close();
    printSeasonName(line);
    showPrompt();
}).on('close', function () {
    process.exit(0);
});