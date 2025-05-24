let humanScore = 0, computerScore = 0, winningScore = 5;


const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

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
        return
    }
    let computerChoice = getComputerChoice();


    if (human !== "error") {
        if (computerChoice === human) {
            console.log("tie, go again");
        } else if ((computerChoice === "rock" && human === "scissors") || (computerChoice === "paper" && human === "rock") || (computerChoice === "scissors" && human === "paper")) {
            console.log("computer wins");
            console.log("computerScore: ", ++computerScore);
            console.log("humanScore: ", humanScore);
        } else {
            console.log("player wins");
            console.log("computerScore: ", computerScore);
            console.log("playerScore: ", ++humanScore);
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