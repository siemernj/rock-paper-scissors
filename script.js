const selectionButtons = document.querySelectorAll('[data-selection]');
let computerScore = document.querySelector('[data-computer-score]');
let yourScore = document.querySelector('[data-your-score]');
const mainContainer = document.querySelector('.mainContainer');
const announcement = document.querySelector('.announcement');
const active = document.querySelector('.active');
const loseAnnouncement = document.querySelector('.lose');
const winAnnouncement = document.querySelector('.win');
const cScore = document.querySelector('.cScore');
const pScore = document.querySelector('.pScore');
const h1 = document.querySelector('h1');
const tieResponses = [
  `You Tied!`, 
  `A tie, Not bad, not great!`, 
  `You both picked the same thing!`
];
const winResponses = [
	`Hooray you won!`,
	`You have defeated the computer!`,
	`Well done!`,
	`Winner Winner Chicken Dinner!`,
];
const lossResponses = [
	`Ouch you lost to a computer!`,
	`Maybe next time!`,
	`The computer has won!`,
	`You are NOT smarter than a computer!`,
];
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
  

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, youreWinner);

  if (youreWinner) incrementScore(yourScore);
  if (computerWinner) incrementScore(computerScore);

  if (youreWinner) h1.innerText = winResponses[Math.floor(Math.random() * 3)];
  else if (computerWinner) h1.innerText = lossResponses[Math.floor(Math.random() * 3)];
  else h1.innerText = tieResponses[Math.floor(Math.random() * 3)];

} 

function incrementScore(scoreSpan) {
  const wins = '5'
  const loses = '5'
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
  if (pScore.innerText === wins) {
    active.style.display = 'flex'
    mainContainer.style.display = 'none';
    restartGame()
  } else if (cScore.innerText === loses) {
    winAnnouncement.classList.remove('active');
    loseAnnouncement.classList.add('active');
    mainContainer.style.display = 'none';
    restartGame()
  } 
}


function addSelectionResult(selection, winner) {

}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
  
}

function randomSelection () {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function showComputerSelection (computerSelection) {
  const computerButtons = document.querySelector('.computerButtons');

}

function restartGame() {
 announcement.addEventListener('click', () => {
    mainContainer.style.display = 'flex';
    active.style.display = 'none';
  });
  loseAnnouncement.addEventListener('click', () => {
    loseAnnouncement.classList.remove('active');
    winAnnouncement.classList.add('active');
    mainContainer.style.display = 'flex';
  });
  pScore.innerText = 0;
  cScore.innerText = 0
  h1.innerText = `Let's Play`;
  makeSelection();

}









