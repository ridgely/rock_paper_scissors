// TODO: Ask if the user wants to play the game

const choices = ["rock", "paper", "scissors"];

// TODO: Store USER selection into variable

// TODO: Create COMPUTER variable

// TODO: Generate random variable and store it in the COMPUTER variable
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
// TODO: Compare USER and COMPUTER choices
function playRound(playerSelection, computerSelection) {
  if (choices.includes(playerSelection)) {
    if (playerSelection === computerSelection) {
      return "Draw!";
    }

    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
      } else {
        return "You lose. Rock loses to Paper :(";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You win! Paper beats Rock!";
      } else {
        return "You lose. Paper loses to Scissors :(";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        return "You win! Scissors beats Paper!";
      } else {
        return "You lose. Scissors loses to Rock :(";
      }
    }
  } else {
    console.log("You did not type a valid choice. Please try again");
    game();
  }
}

function game() {
  const playerSelection = prompt(
    "Select rock, paper, scissors: "
  ).toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
  game();
}
