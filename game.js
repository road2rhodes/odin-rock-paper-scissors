// function game() { // wrapper for game functions
      
   // Variables for choices
   let rock = "rock";
   let paper = "paper";
   let scissors = "scissors";

  let playerChoice = "" // prompt("Rock, Paper, Scissors?").toLowerCase();
  let computerChoice = getComputerChoice(); /* Variable acts like function. Important to define as function without () so variable can be called like function */

  let playWins = "Player wins!";
  let compWins = "Computer wins!";
  let tie = "It's a tie!"

  function getComputerChoice() {

    let calculation = Math.random();
    let choice;

    /* Converting random number to choice. 0.1-0.3 = rock, 0.4-0.6 = scissors, 0.7-0.9 = paper. This assumes random number won't be 0 or 1*/

      if (calculation > 0 && calculation < 0.4) {
        choice = rock;
        }

      else if (calculation >= 0.4 && calculation < 0.7) { // Paper
        choice = paper;
      }

      else if (calculation >= 0.7 && calculation < 1) { // Scissors
        choice = scissors;
      }

      else {
        console.log('Oops');
      }

      return choice; // Only this line should have return so it is value of function.
    }

    // console.log(typeof choice, choice);

    const rockButton = document.getElementById('rock');
    rockButton.addEventListener('click', () => {playerChoice = rock; console.log(playerChoice); playRound(playerChoice,computerChoice)})

    const paperButton = document.getElementById('paper');
    paperButton.addEventListener('click', () => {playerChoice = paper; console.log(playerChoice); playRound(playerChoice,computerChoice)})

    const scissorsButton = document.getElementById('scissors');
    scissorsButton.addEventListener('click', () => {playerChoice = scissors; console.log(playerChoice); playRound(playerChoice,computerChoice)})

    const displayResults = document.createElement('div');
    displayResults.classList = "results";

    const buttons = document.querySelector('.buttons');
    buttons.appendChild(displayResults);


console.log(buttons);

  function playRound(playerSelection, computerSelection) {
  

    let results = `Player chose ${playerSelection}.
    Computer chose ${computerSelection}.`
    let winner;

    console.log(`Player chose ${playerSelection}. Computer chose ${computerSelection}.`)

    // Player win scenarios
  
    if (playerSelection === rock && computerSelection === scissors) {
      winner = playWins
    }
    else if (playerSelection === scissors && computerSelection === paper) {
      winner = playWins
    }
    else if (playerSelection === paper && computerSelection === rock) {
      winner = playWins
    }

    // Computer wins scenarios

    else if (computerSelection === rock && playerSelection === paper) {
      winner = compWins
    }
    else if (computerSelection === scissors && playerSelection === paper) {
      winner = compWins
    }
    else if (computerSelection === paper && playerSelection === rock) {
      winner = compWins
    }
    else {
      winner = tie;
    }

    return displayResults.innerText = results + winner;

  }

  playRound(playerChoice,computerChoice);

// }

// const newGame = document.querySelector('#new-game');
// newGame.addEventListener('click', game);


