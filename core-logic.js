const ROCK = "Rock".toLowerCase();
const PAPER = "Paper".toLowerCase();
const SCISSORS = "Scissors".toLowerCase();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function gameResults(playerSelection, computerSelection) { 
    let winMessage = "You win! ";
    let loseMessage = "You lose! ";
    
    let rockPaperMessage = "Paper beats Rock!";
    let paperScissorsMessage = "Scissors beats Paper!";
    let scissorsRockMessage = "Rock beats Scissors!";

    let loweredPlayerInput = playerSelection.toLowerCase(); 
    let loweredComputerInput = computerSelection.toLowerCase();
    let genericDrawMessage = (choice) => `Both the player and the computer is in a draw. Both picked ${choice}.`;

    let genericDidNotPickMessage = " did not pick rock, paper, or scissors.";
    let playerDidNotPickMessage = "Player(is a loss)" + genericDidNotPickMessage;
    let computerDidNotPickMessage = "Computer(is a win)" + genericDidNotPickMessage;

    switch(loweredPlayerInput) {
        case ROCK:
            switch(loweredComputerInput) {
                case ROCK:
                    return genericDrawMessage(ROCK); 
                case PAPER:
                    return loseMessage + rockPaperMessage;
                case SCISSORS:
                    return winMessage + scissorsRockMessage;
                default:
                    return computerDidNotPickMessage;
            }

        case PAPER:
            switch(loweredComputerInput) {
                case ROCK:
                    return winMessage + rockPaperMessage;
                case PAPER:
                    return genericDrawMessage(PAPER);
                case SCISSORS:
                    return loseMessage + paperScissorsMessage;
                default:
                    return computerDidNotPickMessage;
            }

        case SCISSORS:
            switch(loweredComputerInput) {
                case ROCK:
                    return loseMessage + scissorsRockMessage;
                case PAPER:
                    return winMessage + paperScissorsMessage;
                case SCISSORS:
                    return genericDrawMessage(SCISSORS);
                default:
                    return computerDidNotPickMessage;    
            }

        default:
            return playerDidNotPickMessage;
    }
}

function updateScore(resultText){
    if (result.indexOf("win") != -1) {
        playerScore += 1;
    } else if (result.indexOf("lose") != -1 || result.indexOf("loss") != -1) {
        computerScore += 1;
    }
}