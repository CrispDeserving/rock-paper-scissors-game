let playerScore = 0;
let computerScore = 0;

window.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");

    choices.forEach((choice) => {
        choice.addEventListener("click", handlePlayerChoice);
    });
});

function handlePlayerChoice(event) {
    const playerChoice = event.target.id;
    const result_box = document.querySelector(".result");
    
    let result = gameResults(playerChoice, getComputerChoice());

    result_box.textContent = result;
    updateScore(result);
    console.log(`Score: ${playerScore} - ${computerScore}`);
}
