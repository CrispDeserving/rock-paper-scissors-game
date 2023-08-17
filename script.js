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
    const result_box = document.querySelector(".result");
    
    let result = gameResults(playerChoice, getComputerChoice());
    updateScore(result);

    result_box.textContent = result;
}

function removeEvents() {
    const choices = document.querySelectorAll(".player-choice");
    
    choices.forEach((choice) => {
        choice.removeEventListener("click", handlePlayerChoice);
    });
}
