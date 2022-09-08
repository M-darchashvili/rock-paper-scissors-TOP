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

// The gameplay
function rounds (computer, player) {
  if (computer === player) {
    result.innerText = 'draw'
  } else if ((computer === 'rock' && player === 'scissors')
    || (computer === 'paper' && computer === 'rock') 
    || (computer === 'scissors' && player === 'paper')) {
    computerCount.innerText = ++computerScore
    result.innerText = 'computer wins'
  } else if ((computer === 'rock' && player === 'paper') 
    || (computer === 'paper' && player === "scissors") 
    || (computer === 'scissors' && player === 'rock')){
    playerCount.innerText = ++playerScore
    result.innerText = 'player wins'
  }
checkingWinner();
}

//Message output at the end of the game;
const checkingWinner = (computerScore, playerScore) => {
  if (playerScore === 5) {
    result.innerText = 'Player beat the computer'
  } else {
    result.innerText = 'Computer beat the player';
  }
}

//event listeners
rockIcon.addEventListener('click', () => {
  const computer = getComputerChoice();
  const player = "rock"
  rounds(computer, player);
})

paperIcon.addEventListener('click', () => {
  const computer = getComputerChoice();
  const player = "paper"
  rounds(computer, player);
})

scissorsIcon.addEventListener('click', () => {
  const computer = getComputerChoice();
  const player = "scissors"
  rounds(computer, player);
})