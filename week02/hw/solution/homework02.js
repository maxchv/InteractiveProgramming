const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

const names = {
    rock: "Камень",
    scissors: "Ножницы",
    paper: "Бумага"
}

const results = {
    wins: 1,
    lose: -1,
    tie: 0
}

/*
# Rock-paper-scissors-lizard-Spock template


# The key idea of this program is to equate the strings
# "rock", "paper", "scissors", "lizard", "Spock" to numbers
# as follows:
#
# 0 - rock
# 1 - Spock
# 2 - paper
# 3 - lizard
# 4 - scissors

# helper functions

def name_to_number(name):
    # delete the following pass statement and fill in your code below
    pass

    # convert name to number using if/elif/else
    # don't forget to return the result!


def number_to_name(number):
    # delete the following pass statement and fill in your code below
    pass
    
    # convert number to a name using if/elif/else
    # don't forget to return the result!
    

def rpsls(player_choice): 
    # delete the following pass statement and fill in your code below
    pass
    
    # print a blank line to separate consecutive games

    # print out the message for the player's choice

    # convert the player's choice to player_number using the function name_to_number()

    # compute random guess for comp_number using random.randrange()

    # convert comp_number to comp_choice using the function number_to_name()
    
    # print out the message for computer's choice

    # compute difference of comp_number and player_number modulo five

    # use if/elif/else to determine winner, print winner message

    
# test your code - THESE CALLS MUST BE PRESENT IN YOUR SUBMITTED CODE
rpsls("rock")
rpsls("Spock")
rpsls("paper")
rpsls("lizard")
rpsls("scissors")

# always remember to check your completed program against the grading rubric

*/

var gamesCount = -1;
var winCount = 0;
function showPrompt() {
    gamesCount++;
    rl.setPrompt(`(${winCount}/${gamesCount}) 1. Кмень 2. Ножницы 3. Бумага> `);
    rl.prompt();
}

function numberToName(num) {
    let choice;
    switch (num) {
        case 1:
            choice = names.rock;
            break;
        case 2:
            choice = names.scissors;
            break;
        case 3:
            choice = names.paper;
            break;
        default:
            break;
    }
    return choice;
}

function game(comp, human) {
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

function getNextCompName() {
    let n = Math.round(Math.random() * 100) % 3 + 1;
    return numberToName(n);
}

showPrompt();

rl.on('line', function (line) {
    if (line === "выход") rl.close();

    let playerNumber = parseInt(line);
    if (!isNaN(playerNumber)) {
        let compName = getNextCompName();
        let humanName = numberToName(playerNumber);
        let result = game(compName, humanName);

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

    showPrompt();
}).on('close', function () {
    process.exit(0);
});