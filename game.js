// function game() { // wrapper for game functions
      
   // Variables for choices
   let rock = "rock";
   let paper = "paper";
   let scissors = "scissors";

  let playerChoice = "" // prompt("Rock, Paper, Scissors?").toLowerCase();
    /* Variable acts like function. Important to define as function without () so variable can be called like function */
    let calculation = Math.random(); // keeps choice random
    let choice // placeholder for computer choice calculation
    let computerChoice = getComputerChoice; // turn computer choice into function, so getComputerChoice is re-called each time. When I assigned getComputerChoice() by itself, it never updated.

 


  // | Functionality for game buttons and results div |

    const rockButton = document.getElementById('rock');
    rockButton.addEventListener('click', () => {playerChoice = rock; playRound(playerChoice,computerChoice())})

    const paperButton = document.getElementById('paper');
    paperButton.addEventListener('click', () => {playerChoice = paper; playRound(playerChoice,computerChoice())})

    const scissorsButton = document.getElementById('scissors');
    scissorsButton.addEventListener('click', () => {playerChoice = scissors; playRound(playerChoice,computerChoice())})

    // Results div

    const displayResults = document.createElement('div');
    displayResults.classList = "results";

    const buttons = document.querySelector('.buttons');
    document.body.insertBefore(displayResults, document.querySelector('script'));

 

// | Calculate computer choice |

function getComputerChoice() {

  /* Converting random number to choice. 0.1-0.3 = rock, 0.4-0.6 = scissors, 0.7-0.9 = paper. This assumes random number won't be 0 or 1*/

  let calculation 
  calculation = Math.random(); // 
  let choice

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

   // Win scenarios

  let playWins = "Player wins!";
  let compWins = "Computer wins!";
  let tie = "It's a tie!"

  let playerScore = 0;
  let computerScore = 0;
  const scores = document.getElementById('scores');

 

// | Play Rounds Function |

  function playRound(playerSelection, computerSelection) {
  

    let results = `Player chose ${playerSelection}.
    Computer chose ${computerSelection}.`
    let winner;

    // Player win scenarios
  
    if (playerSelection === rock && computerSelection === scissors) {
      winner = playWins; playerScore += 1;
    }
    else if (playerSelection === scissors && computerSelection === paper) {
      winner = playWins; playerScore += 1;
    }
    else if (playerSelection === paper && computerSelection === rock) {
      winner = playWins; playerScore += 1;
    }

    // Computer wins scenarios

    else if (computerSelection === rock && playerSelection === paper) {
      winner = compWins; computerScore += 1;
    }
    else if (computerSelection === scissors && playerSelection === paper) {
      winner = compWins; computerScore += 1;
    }
    else if (computerSelection === paper && playerSelection === rock) {
      winner = compWins; computerScore += 1;
    }
    else {
      winner = tie;
    }

    if (playerScore === 5 && computerScore < playerScore) {
      alert('Player wins the match!');
      playerScore = 0;
      computerScore = 0;
    }
    else if (computerScore=== 5 && computerScore > playerScore) {
      alert('Computer wins the match!');
      playerScore = 0;
      computerScore = 0;
    }

    // Updates scores
    scores.innerText = `\n Player: ${playerScore} --- Computer: ${computerScore}`;
     
    displayResults = displayResults.innerText = `${results} \n ${winner}`;
    
    return displayResults;

  }

  

// }

// const newGame = document.querySelector('#new-game');
// newGame.addEventListener('click', game);


