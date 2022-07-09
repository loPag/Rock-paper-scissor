// Script Rock Paper Scissor


//ComputerPlay Function
function computerPlay(max) {
    //it returns one of three numbers: 0, 1 or 2
    return Math.floor(Math.random()*max);
}
// 0 mean Scissor
    let computerSelection = computerPlay(3)
    
    if (computerSelection === 0) {
        console.log("Scissor!");
    }
// 1 mean Paper
    if (computerSelection === 1) {
        console.log("Paper!");
    }
// 2 mean Rock
    if (computerSelection === 2) {
        console.log("Rock!")
    }


//Opening a Window for storing the user input
let playerInput= prompt("Enter: Paper, Rock or Scissor");

//Storing the user input in the variable playerSet in lower case characters
let playerSelection= playerInput.toLocaleLowerCase();

if (computerSelection===0 && playerSelection=='paper') {
    console.log("Computer win");
}
if (computerSelection===0 && playerSelection=='rock') {
    console.log("User Win");
}
if (computerSelection===0 && playerSelection=='scissor') {
    console.log("Pair");
}
if (computerSelection===1 && playerSelection=='rock') {
    console.log("Computer win");
}
if (computerSelection===1 && playerSelection=='scissor') {
    console.log("User Win");
}
if (computerSelection===1 && playerSelection=='paper') {
    console.log("Pair");
}
if (computerSelection===2 && playerSelection=='scissor') {
    console.log("Computer win");
}
if (computerSelection===2 && playerSelection=='paper') {
    console.log("User Win");
}
if (computerSelection===2 && playerSelection=='rock') {
    console.log("Pair");
}
