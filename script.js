// Create a function named getComputerChoice that will randomly return
//Rock, paper or scissors for the computer.

//                  Computer choice Function!

//Create an array containing all 3 choices
//Create Function getComputerChoice()
//Use Math.floor and Math.random function to select random choice from array
//arr[math.floor(math.random() * array length)]

let arr = ['Rock','Paper','Scissors'];

function getComputerChoice(){

    console.log(arr[Math.floor(Math.random() * 3)]);

}
getComputerChoice();