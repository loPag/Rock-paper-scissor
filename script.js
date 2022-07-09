// Script Rock Paper Scissor

for(let i=0; i<5; i++) {

//ComputerPlay Function
function computerPlay(max) {
    //it returns one of three numbers: 0, 1 or 2
    return Math.floor(Math.random()*max);
}
// computerSelection store the computer shot: 0=Scissor, 1=paper, 2=rock
    let computerSelection = computerPlay(3)
   


//Opening a Window for storing the user input
    let playerInput= prompt("Enter: Paper, Rock or Scissor");

//Storing the user input in the variable playerSet in lower case characters
    let playerSelection= playerInput.toLocaleLowerCase();


//This function match the shot from Computer to the user Selection and return a result
    function playRound(playerSelection, computerSelection) {

    let result;

        if (computerSelection===0 && playerSelection=='paper') {
            result="Computer win";
        }
        if (computerSelection===0 && playerSelection=='rock') {
             result="User Win";
        }
        if (computerSelection===0 && playerSelection=='scissor') {
             result="Pair";
        }
        if (computerSelection===1 && playerSelection=='rock') {
             result="Computer win";
        }
        if (computerSelection===1 && playerSelection=='scissor') {
             result="User Win";
        }
        if (computerSelection===1 && playerSelection=='paper') {
             result="Pair";
        }
        if (computerSelection===2 && playerSelection=='scissor') {
             result="Computer win";
        }
        if (computerSelection===2 && playerSelection=='paper') {
             result="User Win";
        }
        if (computerSelection===2 && playerSelection=='rock') {
             result="Pair";
        }
    return result;
}

console.log(playRound(playerSelection, computerSelection));

}