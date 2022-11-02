function getComputerChoice() {
    let max = 2;
    let min = 0;
    let result = Math.floor(Math.random() * (max - min + 1) + min);

    if (result == 0) {
        return "Rock";
    }

    if (result == 1) {
        return "Paper";
    }

    if (result == 2) {
        return "Scissors";
    }

}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            return "Tie!";
        } else if (computerSelection.toLowerCase() == "paper") {
            return "Computer Wins!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            return "Player Wins!";
        }
    }

    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            return "Player Wins";
        } else if (computerSelection.toLowerCase() == "paper") {
            return "Tie!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            return "Computer Wins";
        }
    }

    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            return "Computer Wins!";
        } else if (computerSelection.toLowerCase() == "paper") {
            return "Player Wins!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            return "Tie!";
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let input = prompt("Rock, paper, or scissors?");

        if (playRound(input) == "Player Wins!") {
            playerScore ++;
        } else if (playRound(input) == "Computer Wins!") {
            computerScore ++;
        } else if (playRound(input) == "Tie") {
            playerScore ++;
            computerScore ++;
        }
    }

    if (playerScore == computerScore) {
        return "Tie game!";
    } else if (playerScore > computerScore) {
        return "Player Wins the Game!";
    } else if (playerScore < computerScore) {
            return "Computer Wins the Game!";
        }
}

