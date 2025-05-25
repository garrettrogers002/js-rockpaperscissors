let humanScore = 0, computerScore = 0, winningScore = 5;


const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const resultbox = document.querySelector("#result");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}



function playGame(human) {
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore >= 5) {
            resultbox.textContent = `human wins 5 to ${computerScore}`;
        } else if (computerScore >= 5) {
            resultbox.textContent = `computer wins 5 to ${humanScore}`;
        }
        return
    }
    let computerChoice = getComputerChoice();


    if (human !== "error") {
        if (computerChoice === human) {
            resultbox.textContent = (`tie, go again, computer score: ${computerScore} humanScore: ${humanScore}`);
        } else if ((computerChoice === "rock" && human === "scissors") || (computerChoice === "paper" && human === "rock") || (computerChoice === "scissors" && human === "paper")) {
            resultbox.textContent = (`computer wins, computer score: ${++computerScore}, humanScore: ${humanScore}`);
            if (humanScore >= 5 || computerScore >= 5) {
                if (humanScore >= 5) {
                    resultbox.textContent = `human wins 5 to ${computerScore}`;
                } else if (computerScore >= 5) {
                    resultbox.textContent = `computer wins 5 to ${humanScore}`;
                }
                return
            }
        } else {
            resultbox.textContent = (`player wins, computer score: ${computerScore}, humanScore: ${++humanScore}`)
            if (humanScore >= 5 || computerScore >= 5) {
                if (humanScore >= 5) {
                    resultbox.textContent = `human wins 5 to ${computerScore}`;
                } else if (computerScore >= 5) {
                    resultbox.textContent = `computer wins 5 to ${humanScore}`;
                }
                return
            }
        }
    } else {
        console.log("player choice error");
    }
    
}

rockbtn.addEventListener("click", function () {
    playGame("rock")
});
paperbtn.addEventListener("click", function () {
    playGame("paper");
});
scissorsbtn.addEventListener("click", function () {
    playGame("scissors");
});