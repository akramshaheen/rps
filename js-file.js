const playerSelection = document.querySelector(".player-selection");

const mainCallBack = (e) => {
  if (e.target.matches("#rock")) {
    playGame("✊");
  }

  if (e.target.matches("#paper")) {
    playGame("✋");
  }

  if (e.target.matches("#scissors")) {
    playGame("✌");
  }
};

playerSelection.addEventListener("click", mainCallBack);

function getComputerChoice() {
  const choices = ["✊", "✋", "✌"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function GameOverState(isScoreFive) {
  if (isScoreFive) {
    playText.textContent = "GAME OVER";

    if (humanScoreNum > computerScoreNum) {
      roundResult.innerHTML = `You <span class="won">Won</span>`;
    } else {
      roundResult.innerHTML = `You <span class="lost">Lost</span>`;
    }

    playAgain.classList.add("active");

    playerSelectionBtn.forEach((btn) => {
      btn.classList.remove("active");
    });

    playerSelection.removeEventListener("click", mainCallBack);

    return true;
  }
}

const humanScore = document.querySelector(".human-score");
let humanScoreNum = 0;

const computerScore = document.querySelector(".computer-score");
let computerScoreNum = 0;

const playText = document.querySelector(".play-text");

const versus = document.querySelector(".versus");
const roundResult = document.querySelector(".round-result");

const playAgain = document.querySelector(".play-again");
const playerSelectionBtn = document.querySelectorAll(".play-btn");

//Play game

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();

  if (
    (humanChoice === "✊" && computerChoice === "✌") ||
    (humanChoice === "✌" && computerChoice === "✋") ||
    (humanChoice === "✋" && computerChoice === "✊")
  ) {
    humanScoreNum++;
    humanScore.textContent = `Player: ${humanScoreNum}`;
    versus.textContent = `${humanChoice} vs ${computerChoice}`;
    roundResult.innerHTML = `You <span class="won">won</span> this round!`;
  } else if (humanChoice === computerChoice) {
    versus.textContent = `${humanChoice} vs ${computerChoice}`;
    roundResult.innerHTML = `It's a <span class="tie">tie</span>!`;
  } else {
    computerScoreNum++;
    computerScore.textContent = `Computer: ${computerScoreNum}`;
    versus.textContent = `${humanChoice} vs ${computerChoice}`;
    roundResult.innerHTML = `You <span class="lost">lost</span> this round!`;
  }

  const isScoreFive = humanScoreNum >= 5 || computerScoreNum >= 5;

  const gameOver = GameOverState(isScoreFive);

  const callBack = () => {
    humanScoreNum = 0;
    computerScoreNum = 0;

    playText.textContent = "Choose your move!";
    versus.textContent = "You vs Computer";
    roundResult.textContent = "First to five wins";

    humanScore.textContent = `Player: ${humanScoreNum}`;
    computerScore.textContent = `Computer: ${computerScoreNum}`;

    playAgain.classList.remove("active");

    playerSelectionBtn.forEach((btn) => {
      btn.classList.add("active");
    });

    playerSelection.addEventListener("click", mainCallBack);

    playAgain.removeEventListener("click", callBack);
  };

  if (gameOver) {
    playAgain.addEventListener("click", callBack);
  }
}
