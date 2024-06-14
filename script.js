const rock = 0;
const paper = 1;
const scissors = 2;

let computerChoice;
let humanChoice;
let humanWins = 0;
let computerWins = 0;
let winner; //if 0, human, if 1 , computer

const currentScore = document.querySelector("#points");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const hscore = document.querySelector("#hscore");
const cscore = document.querySelector("#cscore");

function incrhscore() {
    let current = parseInt(hscore.textContent);
    current++;
    hscore.textContent = current.toString();
}

function incrcscore() {
    let current = parseInt(cscore.textContent);
    current++;
    cscore.textContent = current.toString();
}

rockButton.addEventListener("click",function() {
    playround(0,getComputerChoice());
})

paperButton.addEventListener("click",function() {
    playround(1,getComputerChoice());
})

scissorsButton.addEventListener("click",function() {
    playround(2,getComputerChoice());
})

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
                incrcscore();
                console.log("Computer won");    
            }
            else if (computerChoice == 2) {
                ++humanWins; //rock beats scissor
                incrhscore();
                console.log("You won");   
            }
        }
        else if(humanChoice == 1) {
            if (computerChoice == 0) {
                ++humanWins;
                incrhscore();
                console.log("You won");
            } 
            else if (computerChoice == 2) {
                ++computerWins;
                incrcscore();
                console.log("Computer won");
            }
        }
        else if (humanChoice == 2) {
            if (computerChoice == 0) {
                ++computerWins;
                incrcscore();
                console.log("Computer won");
            }
            else if (computerChoice == 1) {
                ++humanWins;
                incrhscore();
                console.log("You won");
            }
        }
    }
    console.log(`Score: Computer:" ${computerWins} - ${humanWins} :Human`);   
    checkAndUpdate();
}

function checkAndUpdate() {
    let bc = computerWins === 5;
    let bh = humanWins === 5; 
    if (bc || bh) {
        var text =  document.createElement("label");
        var div = document.createElement("div");
        div.id = "winnerd";
        div.appendChild(text)

        currentScore.appendChild(div);
        computerWins = humanWins = 0;
        hscore.textContent = "0";
        cscore.textContent = "0";
        if (bc) {
            text.textContent = "Computer Won :(";
        }
        else if (bh) {
            text.textContent = "You Won :D";
        }
        setTimeout(function(){
            currentScore.removeChild(div);
        },1700);
    }
}

