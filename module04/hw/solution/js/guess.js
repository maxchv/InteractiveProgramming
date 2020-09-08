/* 
    Домашнее задание: реализовать игру Угадай число.
    Внимательно читайте инструкции представленные ниже
*/

/* 1. Обявить глобальные переменные: range, secretNumber, remainingGuesses, message, message2

   1.1 Переменной range задать значение 100

   Пояснение: 
        - переменная range предназначена для хранения целого числа - максимального значения угадываемого числа
        - переменная secretNumber предназначена для хранения целого числа - загаданного компьютером числа
        - переменная remainingGuesses предназначена для хранения целого числа - оставшегося количества попыток угадать число
        - переменная message предназначена для хранения строки - сообщения выводимого о количестве оставшихся попыток
        - переменная message2 предназначена для хранения строки - сообщения выводимого о том угадал игрок, число больше или меньше
*/
let range = 100;
let secretNumber;
let remainingGuesses;
let message;
let message2;

/*
    2. Объявить функцию newGame()

    Пояснение: функция предназначена для инициализации глобальных переменных secretNumber, remainingGuesses 
    и message. Эта функция будет вызываться в функциях range100() и range1000()
*/
function newGame() {
    console.log(`New game. Ragne is from 0 to ${range}`);
    // 2.1 Сгенерировать случайное число в диапазоне от 0 до range и сохранить в переменную secretNumber
    secretNumber = Phaser.Math.Between(0, range);
    console.log(`Secret number ${secretNumber}`);
    // 2.2 Если range == 100, то задать переменной remainingGuesses значение 7, иначе - 10
    remainingGuesses = Math.ceil(Math.log2(range));
    console.log(`Number of remaining guesses is  ${remainingGuesses}`);
    // 2.3 В переменную message задать сообщение `New game [0, ${range})`
    message = `New game [0, ${range})`;
}

/* 
    3. Объявить функцию range100()

    Пояснение: функция предназначена для инициализации переменных range и message2.
    Эта функция будет вызываться при нажатии по кнопке Range [0, 100)
*/
function range100() {
    // 3.1 Задать переменной range значение 100
    range = 100;
    // 3.2 Задать переменной message2 пустую строку ''
    message2 = '';
    // 3.3 Вызвать функцию new_game()
    newGame();
}

/* 
    4. Объявить функцию range1000()
    
    Пояснение: функция предназначена для инициализации переменных range и message2.
    Эта функция будет вызываться при нажатии по кнопке Range [0, 100)
*/
function range1000() {
    // 4.1 Задать переменной range значение 1000
    range = 1000;
    // 4.2 Задать переменной message2 пустую строку ''
    message2 = '';
    // 4.3 Вызвать функцию new_game()
    newGame();
}

/*
    5. Объявить функцию getInput(guess), которая принимает один целочисленный аргумент guess - то число, которое
    ввел игрок.

    Пояснение: эта функция вызывается после ввода игроком числа и нажатия кнопки Enter на клавиатуре.
    В этой функции необходимо проверить угадал ли игрок число, загаданное компьютером в secretNumber
    И изменить переменные remainingGuesses, message, message2
*/
function getInput(guess) {
    console.log(`Guess was ${guess}`);
    // 5.1 Уменьшить значение переменной remainingGuesses на 1
    remainingGuesses--;
    // 5.2 В переменную message задать в виде строки сообщение о количестве оставшихся попыток у игрока (т.е. remainingGuesses)
    message = `Number of remaining guesses is ${remainingGuesses}`;
    // 5.3 Добавить условие: если remainingGuesses > 0, т.е. остались попытки, то
    if (remainingGuesses > 0) {
        // 5.4 Если введенное игроком число в переменную guess больше, чем значение secretNumber, то
        if (guess > secretNumber) {
            // 5.5 Задать переменной message2 строковое значение 'Lower!'
            message2 = 'Lower!';
            console.log('Lower!');
        }
        // 5.6 Иначе, если введенное число игроком меньше, чем значение в secretNumber, то
        else if (guess < secretNumber) {
            // 5.7 Задать переменной message2 строковое значение 'Higher!'
            message2 = "Higher!";
            console.log('Higher!');
        }
        // 5.8 Иначе, если число guess не больше и не меньше, то игрок угадал, а это значит
        else {
            // 5.9 Задать переменной message2 строковое значение 'Correct!'
            message2 = "Correct!";
            console.log('Correct!');
            // 5.10 И запустить новую игру вызвав функцию newGame()
            newGame();
        }
    }
    // 5.11 Если же попыток у игрока больше не осталось, то
    else {
        // 5.12 Задать переменной message2 строковое значение 'You are looser!'
        message2 = "You are looser";
        console.log('You did not guess secret number.');
        console.log('Secret number was ' + secretNumber);
        // 5.13 И запустить новую игру вызвав функцию newGame()
        newGame();
    }
}