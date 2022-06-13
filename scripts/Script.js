const mainContainer = document.querySelector(".Container");
const ScoreBoard = document.querySelector(".ScoreBoard");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const ROCK = 0;         //beats scissors (Scissors + 1) % 3 = 0
const PAPER = 1;        //Beats Rock   (Rock + 1) % 3 = 1
const SCISSORS = 2;     //Beats Paper  (Paper + !) % 3 = 2
let computerScore = 0;
let playerScore = 0;
let playerChoice = "";
let playerValue = -1;
let computerValue = "";

mainContainer.appendChild(rockBtn);
rockBtn.innerText = "ROCK";
rockBtn.classList.add('Rock');
rockBtnClick = document.querySelector(".Rock");
rockBtnClick.addEventListener('click', () =>{
    let result = playerChoice = "ROCK"
    playRound();
    return result; 
})
mainContainer.appendChild(paperBtn);
paperBtn.innerText = "PAPER";
paperBtn.classList.add('Paper');
paperBtnClick = document.querySelector(".Paper");
paperBtnClick.addEventListener('click', () =>{
    let result = playerChoice = "PAPER"
    playRound();
    return result; 
})
mainContainer.appendChild(scissorsBtn);
scissorsBtn.innerText = "SCISSORS";
scissorsBtn.classList.add('Scissors');
scissorsBtnClick = document.querySelector(".Scissors");
scissorsBtnClick.addEventListener('click', () =>{
    let result = playerChoice = "SCISSORS"
    playRound();
    return result; 
})

ScoreBoard.innerText = "The First to win 5 rounds, win!"

function computerPlay(min, max) {
    if (Math.floor(Math.random() * (max - min + 1) + min) == 0) {
        return ROCK;
    } else if (Math.floor(Math.random() * (max - min + 1) + min) == 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}
// Computer Const. value is assigned to a string name
function assignComputer(computerValue) {
    if (computerValue === ROCK) {
        return computerChoice = "ROCK";
    } else if (computerValue === PAPER) {
        return computerChoice = "PAPER";
    } else {
        return computerChoice = "SCISSORS";
    }
}

//Player Choice is assigned to one of the const. values and to check if the choice is valid.
function playerPlay(playerChoice) {
    if (playerChoice === "ROCK") {
        return ROCK;
    } else if (playerChoice === "PAPER") {
        return PAPER;
    } else if(playerChoice === "SCISSORS"){
        return SCISSORS;
    }else if(playerChoice != "SCISSORS" || "PAPER" || "ROCK" ){
        return playerValue;
    }
}

function playRound() {
    let playerValue = playerPlay(playerChoice);
    let computerValue = computerPlay(0, 2);
    let computerChoice = assignComputer(computerValue);
    if (playerScore == 5 || computerScore == 5){
        endGame();
    }else{
        if (playerValue == -1) {
            computerScore++
            let result = `Computer Chose: ${computerChoice} | You Chose an INVALID option\n\nYou forfeit the point! (Your Score: ${playerScore} | Computer Score: ${computerScore})`
            ScoreBoard.innerText = (result);
        } else if (playerValue == computerValue) {
            let result = `Computer Chose: ${computerChoice} | You Chose: ${playerChoice}\n\nIt's a draw.\n\n (Your Score: ${playerScore} | Computer Score: ${computerScore})`
            ScoreBoard.innerText = (result);
            // ((playerValue - 1 == computerValue) || (playerValue == Rock && computerValue == Scissors))
        } else if (playerValue == (computerValue + 1) % 3) {
            playerScore++;
            let result = `Computer Chose: ${computerChoice} | You Chose: ${playerChoice}\n\nYou win. ${playerChoice} beats ${computerChoice}!\n\n (Your Score: ${playerScore} | Computer Score: ${computerScore})`
            ScoreBoard.innerText = (result);
        } else {
            computerScore++;
            let result = `Computer Chose: ${computerChoice} | You Chose: ${playerChoice}\n\nComputer Wins. ${computerChoice} beats ${playerChoice}!\n\n (Your Score: ${playerScore} | Computer Score: ${computerScore})`
            ScoreBoard.innerText = (result);
        }
    }
}

function endGame() {
    if (playerScore > computerScore) {
        ScoreBoard.innerText =`GAME OVER! YOU WON!\n\nRefresh the page to play again!\n\nYour Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if (computerScore > playerScore) {
        ScoreBoard.innerText =`GAME OVER! YOU LOST!\n\nRefresh the page to retry\n\nYour Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else {
        ScoreBoard.innerText =`GAME OVER! IT'S A TIE\n\nRefresh the page to retry\n\nYour Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
}


