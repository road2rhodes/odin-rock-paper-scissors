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

    let choice = Math.random();

    /* Converting random number to choice. 0.1-0.3 = rock, 0.4-0.6 = scissors, 0.7-0.9 = paper. This assumes random number won't be 0 or 1*/

      if (choice > 0 && choice < 0.4) {
        choice = rock;
        }

      else if (choice >= 0.4 && choice < 0.7) { // Paper
        choice = paper;
      }

      else if (choice >= 0.7 && choice < 1) { // Scissors
        choice = scissors;
      }

      else {
        console.log('Oops');
      }

      return choice; // Only this line should have return so it is value of function.
    }

    // console.log(typeof choice, choice);


  function playRound(playerSelection, computerSelection) {
  
    console.log(`Player chose ${playerSelection}. Computer chose ${computerSelection}.`)

    // Player win scenarios
  
    if (playerSelection === rock && computerSelection === scissors) {
      console.log (playWins)
    }
    else if (playerSelection === scissors && computerSelection === paper) {
      console.log (playWins)
    }
    else if (playerSelection === paper && computerSelection === rock) {
      console.log (playWins)
    }

    // Computer wins scenarios

    else if (computerSelection === rock && playerSelection === paper) {
      console.log (compWins)
    }
    else if (computerSelection === scissors && playerSelection === paper) {
      console.log (compWins)
    }
    else if (computerSelection === paper && playerSelection === rock) {
      console.log (compWins)
    }
    else {
      console.log(tie);
    }


  }

  playRound(playerChoice,computerChoice);

// }

// const newGame = document.querySelector('#new-game');
// newGame.addEventListener('click', game);

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {playerChoice = rock; console.log(playerChoice); playRound(playerChoice,computerChoice)})