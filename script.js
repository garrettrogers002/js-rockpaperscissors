let humanScore = 0, computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Please enter your choice: ", "rock, paper, or scissors");
    switch (choice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors"
        default:
            return "error"
    }
}

function playRound(computerChoice, humanChoice) {


    if (humanChoice !== "error") {
        if (computerChoice === humanChoice) {
            console.log("tie, go again")
            playRound();
        } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
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
let computer = getComputerChoice();
let human = getHumanChoice();

playRound(computer, human);