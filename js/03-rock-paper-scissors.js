
var choices = {
    PAPER: 'paper',
    ROCK: 'rock',
    SCISSORS: 'spscissors',
    NONE: 'NONE'
}

let userChoice = prompt("Do you choose rock, paper or scissors?");
let computerChoice = getComputerChoice(choices);
let message = '';

function getComputerChoice(choices) {
    var randomNumber = Math.round(Math.random() * 15);
        
    console.log('number selected by computer => ', randomNumber);
    
    if (randomNumber >= 0 && randomNumber <= 5) {
        return choices.PAPER;
    }
    
    if (randomNumber >= 6 && randomNumber <= 10) {
        return choices.ROCK;
    } 

    if (randomNumber >= 11 && randomNumber <= 15) {
        return choices.ROCK;
    }

    if(!choices){
        throw new Error('Choice is not defined')
    }
    
}

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.

if (computerChoice == choices.ROCK ) {        
    if (userChoice == choices.SCISSORS) {
        message = "You lose! Rock destroys scissors \n"; 
    }

    if (userChoice == choices.PAPER) {
        message = "You win! Paper covers rock \n"; 
    }

    if (userChoice == choices.ROCK) {
        message = "Equal choices, No one win! \n"; 
    }

}

if (computerChoice == choices.PAPER ) {        
    if (userChoice == choices.SCISSORS) {
        message = "You win! Scissors cut paper \n"; 
    }

    if (userChoice == choices.PAPER) {
        message = "Equal choices, No one win! \n";         
    }

    if (userChoice == choices.ROCK) {
        message = "You lose! Paper covers rock \n"; 
    }    
}

if (computerChoice == choices.SCISSORS ) {        
    if (userChoice == choices.SCISSORS) {        
        message = "Equal choices, No one win! \n";         
    }

    if (userChoice == choices.PAPER) {
        message = "You lose! Scissors cut paper \n";         
    }

    if (userChoice == choices.ROCK) {
        message = "You win! Rock destroys scissors \n"; 
    }    
}

message = message + `Computer choice was ${computerChoice} and your choice was ${userChoice}`;    

alert(message);
