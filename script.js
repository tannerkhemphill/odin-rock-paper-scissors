function computerPlay() {
    let string;
    let num =  Math.floor(Math.random() * 3);
    if (num === 0) {
        string = "Rock";
    }
    else if (num === 1) {
        string = "Paper"
    }
    else {
        string = "Scissors"
    }
    return string;
}

function playRound(playerSelection, computerSelection) {
    let result;
    let computerChoice = computerSelection;
    let playerChoice = playerSelection.trim();
    playerChoice = playerChoice.toLowerCase();
    char = playerChoice.charAt(0).toUpperCase();
    playerChoice = playerChoice.replace(playerChoice.charAt(0), char);
    
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        result = "You win! Rock beats Scissors."; 
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        result = "You win! Paper beats Rock.";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        result = "You win! Scissors beats Paper.";
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper") {
        result = "You lose! Paper beats Rock.";
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        result = "You lose! Scissors beats Paper.";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        result = "You lose! Rock beats Scissors.";
    }
    else {
        result = "Draw! " + playerChoice + " ties " + computerChoice + ".";
    }
    return result;  
}

function game() {
    let numRounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let finalResult;
    for (let i = 0; i < numRounds; i++) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors to play:", "");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.substr(4, 3) === "win") {
            playerScore++;
        }
        else if (result.substr(4, 4) === "lose") {
            computerScore++;
        }
        console.log(result);
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }
    if (playerScore > computerScore) {
        finalResult = "You win! Final score is " + playerScore + " to " + computerScore + ".";
    }
    else if (computerScore > playerScore) {
        finalResult = "You Lose! Final score is " + playerScore + " to " + computerScore + ".";
    }
    else {
        finalResult = "Draw! Final score is " + playerScore + " to " + computerScore + ".";
    }
    console.log(finalResult);
}

game();