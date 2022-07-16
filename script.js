const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScore = document.querySelector('[data-computer-score]');
const yourScore = document.querySelector('[data-your-score]');
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '',
    beats: 'paper'
  }

]

selectionButtons.forEach(selectionButtons => {
  selectionButtons.addEventListener('click', e => {
    const selectionName = selectionButtons.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const youreWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  console.log(computerSelection)

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, youreWinner);

  if (youreWinner) incrementScore(yourScore)
  if (computerWinner) incrementScore(computerScore)
} 

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {

}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection () {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}




function game(){
  let playerPoints = 4; 
  let computerPoints = 0; 
  let wins = 5;

  for(let i = 0; playerPoints < wins; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = computerPlay();
    function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
  
    let round = playRound(playerSelection, computerSelection);
    if(round === "wins"){
      playerPoints++;
      console.log("You Win");
    } else if(round === "loses"){
      computerPoints++;
      console.log("You Lose");
    } else if(round === "ties") {
      console.log("tied");
    } 
  }

  if(playerPoints > computerPoints){
    console.log('');
    console.log("Congratulations!  You beat the computer " + playerPoints + " to " + computerPoints);
  } else {
    console.log("Sorry!  You lost to the computer " + computerPoints + " to " + playerPoints);
  }
} 

function playRound(playerSelection, computerSelection) {  
  if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      return 'wins';
    } else if (computerSelection == 'paper') {
      return 'loses';
    } else {
      return 'ties';
    } 
  }
  if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      return 'wins';
    } else if (computerSelection == 'scissors') {
      return 'loses';
    } else {
      return 'ties';
    } 
  }
  if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      return 'loses';
    } else if (computerSelection == 'paper') {
      return 'wins';
    } else {
      return 'ties';
    } 
  }
}





