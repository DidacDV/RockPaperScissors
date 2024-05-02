const rock = 0;
const paper = 1;
const scissors = 2;

let computerChoice;
let humanChoice;
let humanWins = 0;
let computerWins = 0;
let winner; //if 0, human, if 1 , computer

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let choice = (prompt("Your choice"));
    if (choice == "rock") return 0;
    else if (choice == "paper") return 1;
    else if (choice == "scissors") return 2;
}


function playround(humanChoice,computerChoice) {
    if(humanChoice == computerChoice) console.log("Draw");
    else {
        if (humanChoice == 0) {
            if (computerChoice == 1) {
                ++computerWins; //paper beats rock
                console.log("Computer won");    
            }
            else if (computerChoice == 2) {
                ++humanWins; //rock beats scissor
                console.log("You won");   
            }
        }
        else if(humanChoice == 1) {
            if (computerChoice == 0) {
                ++humanWins;
                console.log("You won");
            } 
            else if (computerChoice == 2) {
                ++computerWins;
                console.log("Computer won");
            }
        }
        else if (humanChoice == 2) {
            if (computerChoice == 0) {
                ++computerWins;
                console.log("Computer won");
            }
            else if (computerChoice == 1) {
                ++humanWins;
                console.log("You won");
            }
        }
    }
    console.log(`Score: Computer:" ${computerWins} - ${humanWins} :Human`);   
}

function play() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playround(humanChoice,computerChoice);
    }
    winner = computerWins > humanWins;
    if (winner = "computer") console.log("Computer won :(");
    else console.log("You won!");
}