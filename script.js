// Create a function named getComputerChoice that will randomly return
//Rock, paper or scissors for the computer.

//                  Computer choice Function!

//Create an array containing all 3 choices
//Create Function getComputerChoice()
//Use Math.floor and Math.random function to select random choice from array
//choices[math.floor(math.random() * array length)]

const choices = ['rock','paper','scissors'];

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}


function getPlayerChoice(){
    let choice = prompt('Pick your choice!').toLowerCase();

   if (choice == 'rock')
    {
        return 'rock';
} 
else if (choice == 'paper'){
    return 'paper';
}
else if (choice == 'scissors'){
    return 'scissors';
}else{
    return 'Not a valid choice';
}
}

// Write a function that plays a single round
// Create playerSelection parameter (case sensitive)
// Function for playing round requires 2 parameters playerSelection and computerSelection
//Return string that declares winner


let playerPoint = 0;

function playRound(){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors')||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) 
        
        {
            playerPoint ++;
            console.log(`You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
            return playerPoint;
        } 
        else if (playerSelection == computerSelection){
            console.log("Its a tie!!");
        } else if ((playerSelection != 'rock') ||
                   (playerSelection != 'paper') ||
                   (playerSelection != 'scissors')){
                    return 'Enter a valid choice';
                   }else {

            console.log(`You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        }
   
 }

console.log(playRound());
console.log(playerPoint);


