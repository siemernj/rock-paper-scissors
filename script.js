function playGame(){
    let playerPoints = 0; 
    let computerPoints = 0; 
    let wins = 5;
  
    for(let i = 0; playerPoints < wins; i++) {
      let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
      let computerSelection = computerPlay();
      function computerPlay () { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
    
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
 







