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

function playRound() {
    let result;
    let computerChoice = computerPlay();
    let playerChoice = this.id;
    
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
    const div = document.querySelector('#Results');
    div.textContent = result;
    game(result);
    return result;  
}

let playerScore = 0;
let computerScore = 0;

function game(result) {
    if (result.substr(4, 3) === "win") {
        playerScore++;
    }
    else if (result.substr(4, 4) === "lose") {
        computerScore++;
    }
    const div = document.querySelector('#Score');
    div.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

    if (playerScore == 5) {
        div.textContent = "You win! Final score is " + playerScore + " to " + computerScore + ".";
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        div.textContent = "You Lose! Final score is " + playerScore + " to " + computerScore + ".";
        playerScore = 0;
        computerScore = 0;
    }
}

document.getElementById('Rock').onclick = playRound;
document.getElementById('Paper').onclick = playRound;
document.getElementById('Scissors').onclick = playRound;

/* const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', function() { 
        playRound(button.textContent, computerPlay());
    });
}); */