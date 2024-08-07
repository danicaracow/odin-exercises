let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;


function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function pointsUpdate(humanPointsIncrease, computerPointsIncrease){
    humanScore += humanPointsIncrease;
    computerScore += computerPointsIncrease;
}

function playRound(humanChoice, computerChoice){
    let message;
    let humanPointsIncrease = 0;
    let computerPointsIncrease = 0;

    if (humanChoice === computerChoice){
        message = "Tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        message = "You lose! Paper beats Rock!";
        computerPointsIncrease = 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        message = "You win! Rock beats Scissors!";
        humanPointsIncrease = 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        message = "You lose! Scissors beats paper!";
        computerPointsIncrease = 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        message = "You win! Paper beats Rock!";
        humanPointsIncrease = 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        message = "You lose! Rock beats Scissors!";
        computerPointsIncrease = 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        message = "You win! Scissors beats Paper!";
        humanPointsIncrease = 1;
    }

    pointsUpdate(humanPointsIncrease, computerPointsIncrease);

    playerChoiceDiv.textContent = "You: " + humanChoice;
    computerChoiceDiv.textContent = "Computer: " + computerChoice;
    roundResultDiv.textContent = message;
    totalResultDiv.textContent = 
        "--POINTS--\n" 
        + "Computer: " + computerScore + "\n"
        + "You: " + humanScore
    ;
}

function evaluateGame(humanScore, computerScore){
    if (humanScore > computerScore){
        totalResultDiv.textContent = "YOU WIN!!!";
    }
    else if (humanScore === computerScore){
        totalResultDiv.textContent = "We have a TIE!";
    }
    else{
        totalResultDiv.textContent = "You lose... better luck next time!";
    }
}

function playGame(){
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if(humanScore === 5 || computerScore === 5){
        evaluateGame(humanScore, computerScore);
    }
}


////// UI //////
const playerChoiceDiv = document.querySelector("#playerChoiceDiv");
const computerChoiceDiv = document.querySelector("#computerChoiceDiv");
const roundResultDiv = document.querySelector("#roundResultDiv");
const totalResultDiv = document.querySelector("#totalResultDiv");
const menu = document.querySelector("#menu");

menu.addEventListener("click", (e) => {
    switch (e.target.id){
        case "rock":
            humanChoice = "rock";
            console.log("rock");
            break;
            
        case "paper":
            humanChoice = "paper";
            console.log("paper");
            break;
        case "scissors":
            humanChoice = "scissors";
            console.log("scissors");
            break;
    }

    playGame();
});