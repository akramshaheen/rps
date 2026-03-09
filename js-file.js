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

// function gameReset(isTrue) {
//
// }

function playGame(humanChoice) {
  const isGameOver = humanScoreNum === 5 || computerScoreNum === 5;

  if (isGameOver) {
    versus.textContent = "GAME OVER";

    if (humanScoreNum > computerScoreNum) {
      roundResult.textContent = "You won. Nice!";
    } else {
      roundResult.textContent = "You lost. Too bad!";
    }

    const playAgain = document.querySelector(".play-again");
    playAgain.classList.add("active");

    const playerSelectionBtn = document.querySelectorAll(".play-btn");
    playerSelectionBtn.forEach((btn) => {
      btn.classList.remove("active");
    });

    playAgain.addEventListener("click", () => {
      humanScoreNum = 0;
      computerScoreNum = 0;

      versus.textContent = "You vs Computer";
      roundResult.textContent = "First to five wins";

      humanScore.textContent = `Player: ${humanScoreNum}`;
      computerScore.textContent = `Computer: ${computerScoreNum}`;

      playAgain.classList.remove("active");
      playerSelectionBtn.forEach((btn) => {
        btn.classList.add("active");
      });
    });

    return;
  }

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
//
//
//
//
//add three variable: tie, won, and lost and give each one a color. place them inside the round-result
