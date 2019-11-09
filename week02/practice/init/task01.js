/*
## Задание 1

Написать скрипт в котором пользователь вводит номер месяца в году (1 - Январь, 2 - Февраль и т.д.)
а на экран выводится название этого месяца.

Пример экрана вывода:

```
> Введите номер месяца: 9
Сентябрь
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

// Необходимо реализовать функцию printMonthName
// Функция принимает строковый аргумент line - число введенное игроком
// Алгоритм решения задачи:
//    1. Строку line необходимо привести к целому числу используя функцию parseInt и сохранить в переменной month
//    2. Через switch определить номер месяца и вывести имя через console.log
function printMonthName(line) {
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
    printMonthName(line);
    showPrompt();
}).on('close', function () {
    process.exit(0);
});