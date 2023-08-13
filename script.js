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
    
    if (loweredPlayerInput === loweredComputerInput) {
        return "The player and the computer is in a draw. Both got " + playerSelection;
    }    

    switch(loweredPlayerInput) {
        case "Rock".toLowerCase():
            switch(loweredComputerInput) {
                case "Paper".toLowerCase():
                    return loseMessage + rockPaperMessage;
                default:
                    return winMessage + scissorsRockMessage;
            }

        case "Paper".toLowerCase():
            switch(loweredComputerInput) {
                case "Rock".toLowerCase():
                    return winMessage + rockPaperMessage;
                default:
                    return loseMessage + paperScissorsMessage;
            }

        default:
            switch(loweredComputerInput) {
                case "Rock".toLowerCase():
                    return loseMessage + scissorsRockMessage;
                default:
                    return winMessage + paperScissorsMessage;
            }
    }
}
