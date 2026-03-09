//Call the playGame function if a move was selected
const playerSelection = document.querySelector(".player-selection");
playerSelection.addEventListener("click", (e) => {
  if (e.target.matches("#rock")) {
    playGame("Rock");
  }

  if (e.target.matches("#paper")) {
    playGame("Paper");
  }

  if (e.target.matches("#scissors")) {
    playGame("Scissors");
  }
});

//Get computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

const humanScore = document.querySelector(".human-score");
let humanScoreNum = 0;

const computerScore = document.querySelector(".computer-score");
let computerScoreNum = 0;

const versus = document.querySelector(".versus");
const roundResult = document.querySelector(".round-result");

function playGame(humanChoice) {
  //get the computer choice
  const computerChoice = getComputerChoice();

  //compare humanChoice with computerChoice and decide the winner
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScoreNum++;
    humanScore.textContent = `Player: ${humanScoreNum}`;
    versus.textContent = `${humanChoice} vs ${computerChoice}`;
    roundResult.textContent = `You won this round!`;
  } else if (humanChoice === computerChoice) {
    versus.textContent = `${humanChoice} vs ${computerChoice}`;
    roundResult.textContent = `It's a tie!`;
  } else {
    computerScoreNum++;
    computerScore.textContent = `Computer: ${computerScoreNum}`;
    versus.textContent = `${humanChoice} vs ${computerChoice}`;
    roundResult.textContent = `You lost this round!`;
  }
}

// for (let i = 1; i < 6; i++) {
//
//   const computerChoice = getComputerChoice();

//   here was the player choice function call

//   playGame(humanChoice, computerChoice, i);

//   if ((humanChoice === null && i > 1) || (humanChoice !== null && i === 5)) {
//     alert(
//       `Final score is => You: ${humanScore} | The computer: ${computerScore}`,
//     );

//     if (humanScore > computerScore) {
//       alert("You won the game! Nice!");
//     } else if (humanScore < computerScore) {
//       alert("You lost the game! Too bad!");
//     } else if (humanScore === computerScore) {
//       alert("The game ended in a draw.");
//     }

//     break;
//   }

//   if (humanChoice === null) {
//     break;
//   }
// }
