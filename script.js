let playerScore = 0;
let computerScore = 0;

window.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".player-choice");

    choices.forEach((choice) => {
        choice.addEventListener("click", handlePlayerChoice);
    });
});

function handlePlayerChoice(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    
    let result = gameResults(playerChoice, computerChoice);
    updateScore(result);
    updateChoices(playerChoice, computerChoice);
}

function removeEvents() {
    const choices = document.querySelectorAll(".player-choice");
    
    choices.forEach((choice) => {
        choice.removeEventListener("click", handlePlayerChoice);
    });
}
