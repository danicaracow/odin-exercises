////// Game State //////
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const CHOICES = ["rock", "paper", "scissors"];
const WINNING_SCORE = 5;

////// Game Logic //////
function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    return CHOICES[num];
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
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ){
        message = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}!`;
        computerPointsIncrease = 1;
    } else {
        message = `You win! ${capitalize(humanChoice)} beats ${computerChoice}!`;
        humanPointsIncrease = 1;
    }

    pointsUpdate(humanPointsIncrease, computerPointsIncrease);

    updateUI(humanChoice, computerChoice, message);
}

function evaluateGame(){
    if (humanScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
        if (humanScore > computerScore){
            totalResultDiv.textContent = "YOU WIN!!!";
        } else if (humanScore === computerScore){
            totalResultDiv.textContent = "We have a TIE!";
        } else {
            totalResultDiv.textContent = "You lose... better luck next time!";
        }
        resetGame();
    }
}

function playGame(){
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    evaluateGame();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

////// UI Update //////
function updateUI(humanChoice, computerChoice, message) {
    playerChoiceDiv.textContent = "You: " + humanChoice;
    computerChoiceDiv.textContent = "Computer: " + computerChoice;
    roundResultDiv.textContent = message;
    totalResultDiv.textContent = 
        "--POINTS--\n" 
        + "Computer: " + computerScore + "\n"
        + "You: " + humanScore;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

////// UI Event Listener //////
const playerChoiceDiv = document.querySelector("#playerChoiceDiv");
const computerChoiceDiv = document.querySelector("#computerChoiceDiv");
const roundResultDiv = document.querySelector("#roundResultDiv");
const totalResultDiv = document.querySelector("#totalResultDiv");
const menu = document.querySelector("#menu");

menu.addEventListener("click", (e) => {
    const choice = e.target.id;
    if (CHOICES.includes(choice)) {
        humanChoice = choice;
        playGame();
    }
});