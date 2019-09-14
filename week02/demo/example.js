const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
const rndNumber = Math.round(Math.random() * 100);

var guessCount = 0;
function show() {
    guessCount++;
    rl.setPrompt(`Попытка ${guessCount}> `);
    rl.prompt();
}

show();

rl.on('line', function (line) {
    if (line === "выход") rl.close();

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

    show();
}).on('close', function () {
    process.exit(0);
});