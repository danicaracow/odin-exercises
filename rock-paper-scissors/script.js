function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
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
    let choice = prompt(message).toLowerCase();

    if(choice === "rock" | choice === "paper" | choice === "scissors"){
        // console.log(choice);
        return choice;
    }
    else{
        return getHumanChoice("I did not understand your choice. Please try again!");
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice("Rock, Paper or Scissors?"));

