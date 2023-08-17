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
    
    let result = gameResults(playerInput, getComputerChoice());

    result_box.textContent = gameResults(playerChoice, getComputerChoice());

    if (result.indexOf("win") != -1) {
        playerScore += 1;
    } else if (result.indexOf("lose") != -1 || result.indexOf("loss") != -1) {
        computerScore += 1;
    }
}
