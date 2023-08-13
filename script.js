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
    if (playerSelection === computerSelection) {
        return "The player and the computer is in a draw. Both got " + playerSelection;
    }

    let winMessage = "You win! ";
    let loseMessage = "You lose! ";

    let rockPaperMessage = "Paper beats Rock!";
    let paperScissorsMessage = "Scissors beats Paper!";
    let scissorsRockMessage = "Rock beats Scissors!";

    switch(playerSelection) {
        case "Rock":
            switch(computerSelection) {
                case "Paper":
                    return loseMessage + rockPaperMessage;
                default:
                    return winMessage + scissorsRockMessage;
            }

        case "Paper":
            switch(computerSelection) {
                case "Rock":
                    return winMessage + rockPaperMessage;
                default:
                    return loseMessage + paperScissorsMessage;
            }

        default:
            switch(computerSelection) {
                case "Rock":
                    return loseMessage + scissorsRockMessage;
                default:
                    return winMessage + paperScissorsMessage;
            }
    }
}
