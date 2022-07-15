const iconRockPlayer = document.querySelector(".iconPlayerRock");
const iconPaperPlayer = document.querySelector(".iconPlayerPaper");
const iconScissorsPlayer = document.querySelector(".iconScissorsPlayer");
const iconRockComputer = document.querySelector(".iconRockComputer");
const iconPaperComputer = document.querySelector(".iconPaperComputer");
const iconScissorsComputer = document.querySelector(".iconScissorsComputer");
const rockButtonPlayer = document.querySelector(".rockButtonPlayer");
const paperButtonPlayer = document.querySelector(".paperButtonPlayer");
const scissorButtonPlayer = document.querySelector(".scissorsButtonPlayer");
const rockButtonComputer = document.querySelector(".rockButtonComputer");
const paperButtonComputer = document.querySelector(".paperButtonComputer");
const scissorsButtonComputer = document.querySelector(".scissorsButtonComputer");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const phrase = document.querySelector(".phrase");



const startGame = `Let's PLAY!`
const tieResponses = [`Rats you tied!`, `You're exactly as good as the computer!`, `It's a tie!`];
const winResponses = [`Hooray you win!`, `Wow you won!`, `Congrats! Winner!`, `Winner Winner Chicken Dinner`];
const lossResponses = [`Haha you Lost!`, `You Lose!`, `Try Again!`, `Better luck next time!`];


const iconsPlayer = [iconRockPlayer, iconPaperPlayer, iconScissorsPlayer];
const iconsComputer = [iconRockComputer, iconPaperComputer, iconScissorsComputer];

const playerChoice = [rockButtonPlayer, paperButtonPlayer, scissorButtonPlayer];
const computerChoice = [rockButtonComputer, paperButtonComputer, scissorsButtonComputer];

const options = [`rock`, `paper`, `scissors`]



const playerButtons = document.querySelector("#buttons")





const keyCodes = {
  82: `rock`,
  80: `paper`,
  83: `scissors`,
}

let playerPoints = 0; 
let computerPoints = 0; 
let wins = 0;


function pageLoad () {
  document.getElementById("iconScissorsComputer").style.display = "none";
  document.getElementById("iconPaperComputer").style.display = ""
  document.getElementById("iconRockComputer").style.display = "none"
  document.getElementById("iconScissorsPlayer").style.display = "none"
  document.getElementById("iconPaperPlayer").style.display = "none"
  document.getElementById("iconRockPlayer").style.display = ""
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  phrase.textContent = startGame;
}

playerButtons.addEventListener("click", function onClick(e) {
  e.target.style.backgroundColor = `#FFBE0B`;
});





console.log(pageLoad())






















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





