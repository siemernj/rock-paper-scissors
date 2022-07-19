const selectionButtons = document.querySelectorAll('[data-selection]');
let computerScore = document.querySelector('[data-computer-score]');
let yourScore = document.querySelector('[data-your-score]');
const mainContainer = document.querySelector('.mainContainer');
const announcement = document.querySelector('.announcement');
const active = document.querySelector('.active');
const active2 = document.querySelector('.active2');
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
    const rockPlayer = document.getElementById('iconRockPlayer');
    const scissorsPlayer = document.getElementById('iconScissorsPlayer');
    const iconScissorsPlayer = scissorsPlayer.getAttribute('hidden');
    const paperPlayer = document.getElementById('iconPaperPlayer');
    const iconPaperPlayer = paperPlayer.getAttribute('hidden');
    const selectionName = selectionButtons.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
    if (selection.name === 'paper') {
      rockPlayer.setAttribute("hidden", "hidden");
      scissorsPlayer.setAttribute("hidden", "hidden");
      paperPlayer.removeAttribute("hidden");
    } else if (selection.name === 'scissors') {
      rockPlayer.setAttribute("hidden", "hidden");
      paperPlayer.setAttribute("hidden", "hidden");
      scissorsPlayer.removeAttribute("hidden");
    } else if (selection.name === 'rock') {
      paperPlayer.setAttribute("hidden", "hidden");
      scissorsPlayer.setAttribute("hidden", "hidden");
      rockPlayer.removeAttribute("hidden");
    }
  })
})


function makeSelection(selection) {
  const computerSelection = randomSelection()
  const youreWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  const rockComputer = document.getElementById('iconRockComputer');
  const scissorsComputer = document.getElementById('iconScissorsComputer');
  const iconScissorsComputer = scissorsComputer.getAttribute('hidden');
  const paperComputer = document.getElementById('iconPaperComputer');
  const iconPaperCompter = paperComputer.getAttribute('hidden');
  const cRock = document.querySelector('.cRock');
  const cScissors = document.querySelector('.cScissors');
  const cPaper = document.querySelector('.cPaper');


  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, youreWinner);

  if (youreWinner) incrementScore(yourScore);
  if (computerWinner) incrementScore(computerScore);

  if (youreWinner) h1.innerText = winResponses[Math.floor(Math.random() * 3)];
  else if (computerWinner) h1.innerText = lossResponses[Math.floor(Math.random() * 3)];
  else h1.innerText = tieResponses[Math.floor(Math.random() * 3)];

  if (computerSelection.name === 'paper') {
    rockComputer.setAttribute("hidden", "hidden");
    scissorsComputer.setAttribute("hidden", "hidden");
    paperComputer.removeAttribute("hidden");
    cPaper.style.backgroundColor = "#ffbe0b";
    cScissors.style.backgroundColor = "#FFD4C5";
    cRock.style.backgroundColor = "#FFD4C5";
  } else if (computerSelection.name === 'scissors') {
    rockComputer.setAttribute("hidden", "hidden");
    paperComputer.setAttribute("hidden", "hidden");
    scissorsComputer.removeAttribute("hidden");
    cScissors.style.backgroundColor = "#ffbe0b";
    cRock.style.backgroundColor = "#FFD4C5";
    cPaper.style.backgroundColor = "#FFD4C5";
  } else if (computerSelection.name === 'rock') {
    paperComputer.setAttribute("hidden", "hidden");
    scissorsComputer.setAttribute("hidden", "hidden");
    rockComputer.removeAttribute("hidden");
    cRock.style.backgroundColor = "#ffbe0b";
    cPaper.style.backgroundColor = "#FFD4C5";
    cScissors.style.backgroundColor = "#FFD4C5";
  }



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
    active2.style.display = 'flex';
    mainContainer.style.display = 'none';
    restartGame()
  } 
}


function addSelectionResult(selection, winner) {
}

function showSelection (selection) {
   if (selection.name === 'rock') {
    console.log('hello World')
   }
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
  
}

function randomSelection () {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function restartGame() {
 announcement.addEventListener('click', () => {
    mainContainer.style.display = 'flex';
    active.style.display = 'none';
  });
  loseAnnouncement.addEventListener('click', () => {
    active2.style.display = 'none';
    mainContainer.style.display = 'flex';
  });
  pScore.innerText = 0;
  cScore.innerText = 0
  h1.innerText = `Let's Play`;
  makeSelection();

}









