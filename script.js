function computerPlay () {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

function playRound (playerSelection, computerSelection){

if (playerSelection === computerSelection) {    
    return (`It's a Draw!`);
}   else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
    return (`You Win! Rock beats Scissors!`);
}
    else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
    return (`You Lose! Scissors beats Rock!`);
}
    else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
    return (`You Lose! Scissors beats Paper!`);
}
    else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
    return (`You Win! Paper beats Rock!`);
}
    else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
    return (`You Win! Scissors beats Paper!`);
}
    else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
    return (`You Lose! Rock beats Scissors`);
}

    return (`You Lose! Paper beats Rock`);
}

let playerSelection = prompt("What do you Select").toLocaleLowerCase();
//have this tied into the playRound function?

console.log(computerPlay(), playerSelection)