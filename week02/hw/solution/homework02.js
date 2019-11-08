const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Глобальные переменные */
var gamesCount = -1;
var winCount = 0;

/* Вывод сообщения */
function showPrompt() {
    gamesCount++;
    rl.setPrompt(`(${winCount}/${gamesCount}) 1. ${names.rock} 2. ${names.scissors} 3. ${names.paper}> `);
    rl.prompt();
}

// Вспомогательные функции

const names = {
    rock: "Камень",
    scissors: "Ножницы",
    paper: "Бумага"
}
/*  
    Задание 1. 
    Преобразовать число в имя используя switch

    1 - rock
    2 - scissors
    3 - paper
*/
function numberToName(num) {
    // Здесь ваш код
    switch (num) {
        case 1:
            return names.rock;
        case 2:
            return names.scissors;
        case 3:
            return names.paper;
        default:
            break;
    }
    // Не забудте вернуть результат через return
}

const results = {
    wins: 1,
    lose: -1,
    tie: 0
}
/*
    Задание 2. Сравнить два значения

    Вернуть 0 - если ничья,
            1 - если игрок (human) выиграл
           -1 - если компьютер (comp) выиграл
*/
function compare(comp, human) {
    if (comp === human) {
        return results.tie;
    } else if (human === names.rock) {
        if (comp === names.scissors) {
            return results.wins;
        } else { // Бумага
            return results.lose;
        }
    } else if (human === names.scissors) {
        if (comp === names.rock) {
            return results.lose;
        } else { // Бумага
            return results.wins;
        }
    } else if (human === names.paper) {
        if (comp === names.rock) {
            return results.wins;
        } else { // Ножницы
            return results.lose;
        }
    }
}

/* Ход компьютера */
function getNextCompName() {
    let n = Math.round(Math.random() * 100) % 3 + 1;
    return numberToName(n);
}

/*
    Задание 3. Логика игры
*/
function game(line) {
    /* Используя функцию parseInt преобразовать строку line в целое число и сохранить
       в переменной playerNumber */
    let playerNumber = parseInt(line);

    /* При помощи функции isNaN проверить, что в переменной playerNumber - целое число  */
    if (!isNaN(playerNumber)) {
        /* Вызвать функцию numberToName, в которую передать переменную playerNumber, результат
           сохранить в переменной humanName */
        let humanName = numberToName(playerNumber);
        /* Вызвать функцию getNextCompName() и сохранить результат в переменной compName */
        let compName = getNextCompName();
        /* Сравнить результат используя функцию compare, в которую передать два аргумента - compName и humanName,
           результат сохранить в переменной result */
        let result = compare(compName, humanName);
        /* Через switch проверяем результат */
        switch (result) {
            case results.wins:
                winCount++;
                console.log(`Победа! ${humanName} бъет ${compName}`);
                break;
            case results.lose:
                console.log(`Поражение! ${compName} бъет ${humanName}`);
                break;
            case results.tie:
                console.log(`Ничья! ${compName} равен ${humanName}`);
                break;
            default:
                console.log("Error");
                break;
        }
    } else {
        console.log(`Введенная строка "${line}" не является числом`);
    }
}

showPrompt();
rl.on('line', function (line) {
    if (line === "выход" || line === "exit") rl.close();
    game(line);
    showPrompt();
}).on('close', function () {
    process.exit(0);
});
