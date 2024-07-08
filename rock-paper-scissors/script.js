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

function getHumanChoice(message){
    const choice = prompt(message).toLowerCase();

    if(choice === "rock" | choice === "paper" | choice === "scissors"){
        return choice;
    }
    else{
        return getHumanChoice("I did not understand your choice. Please try again!");
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
    alert("Computer: " + computerChoice + "\n"
         + "You: " + humanChoice + "\n\n"
         + message + "\n\n"
         + "--POINTS--\n" 
         + "Computer: " + computerScore + "\n"
         + "You: " + humanScore
        );
}

function evaluateGame(humanScore, computerScore){
    if (humanScore > computerScore){
        alert("YOU WIN!!!");
    }
    else if (humanScore === computerScore){
        alert("We have a TIE!");
    }
    else{
        alert("You lose... better luck next time!")
    }
}

function playGame(roundsNumber){
    for (i=0; i<roundsNumber; i++){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice("Rock, Paper or Scissors?");
        playRound(humanChoice, computerChoice);
    }

    evaluateGame(humanScore, computerScore);
}



playGame(5);