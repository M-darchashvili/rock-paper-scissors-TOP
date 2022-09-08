let computerScore = playerScore = 0

//selecting elements 
const rockIcon = document.querySelector("#rock");
const paperIcon = document.querySelector("#paper");
const scissorsIcon  = document.querySelector("#scissors");
const result = document.querySelector(".result");
const playerCount= document.querySelector("#player-score");
const computerCount = document.querySelector("#computer-score");
const scoreBoard = document.querySelector(".score-board");

//Function for the computer to randomly pick its play
function getComputerChoice() {
    const rps = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    const computer = rps[randomIndex]

    return computer
} 

// The game rules
function rounds(computer, player) {
  if (computer === player) {
      return 'Tie';
      
  } else if (computer === 'rock' && player === 'scissors') {
      computerScore++
      return 'Computer wins';
  } else if (computer === 'rock' && player === 'paper') {
      playerScore++
      return 'Player wins';
  } else if (computer === 'paper' && player === 'scissors') {
      ComputerScore++
      return 'Player wins';
  } else if (computer === 'paper' && player === 'rock') {
      playerScore++
      return 'Player wins';
  } else if (computer === 'scissors' && player === 'paper') {
      computerScore++
      return 'Computer wins';
  } else if (computer === 'scissors' && player === 'rock') {
      PlayerScore++
      return 'Player wins wins';
  }
}

function game() {
  for (let i = 0; i < 5; i++) { //scoring 
     const player = prompt('Rock, Paper, Or Scissors?').trim().toLowerCase()
     const computer = getComputerChoice()
     console.log(rounds(computer, player))
  }

      //Winning and losing message output
  if (computerScore > playerScore) {
    return 'The Computer beat you'
  } else if (computerScore < playerScore) {
    return 'You beat the computer'
  } else {
    return 'You and computer Tied'
  }

  }
console.log(game());

