

//ComputerPlay returns one of three values: 1, 2 or 3.
// 1= scissor
// 2= rock
// 3= paper
function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);
    return computerSelection;
}


function result1() {
    const result1= 'you win';
    document.getElementById('result').innerHTML = result1;
}
function result2() {
    const result2= 'pair';
    document.getElementById('result').innerHTML = result2;
}
function result3() {
    const result3= 'you lose';
    document.getElementById('result').innerHTML = result3;
}


//ComputerPlay plays aginst RockButton
const rockbut = document.querySelector('#rock');
rockbut.addEventListener('click', () => {
    if (computerPlay() === 1) {
        result1();
    }
    if (computerPlay() === 2) {
        result2();
    }
    if (computerPlay() === 3) {
        result3();
    }
});

//ComputerPlay plays aginst Paper Button
const paperbut = document.querySelector('#paper');
paperbut.addEventListener('click', () => {
    if (computerPlay() === 2) {
        result1();
    }
    if (computerPlay() === 2) {
        result2();
    }
    if (computerPlay() === 1) {
        result3();
    }
});


//ComputerPlay plays against Scissor Button
const scissorbut = document.querySelector('#scissor');
scissorbut.addEventListener('click', () => {
    if (computerPlay() === 3) {
        result1();
    }
    if (computerPlay() === 1) {
        result2();
    }
    if (computerPlay() === 2) {
        result3();
    }
});