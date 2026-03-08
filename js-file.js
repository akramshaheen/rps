//Get user choice
function getHumanChoice() {
  while (true) {
    let hChoice = prompt("choose Rock, Paper, or Scissors:");

    if (hChoice === null) {
      alert("Game Over!");
      return null;
    }

    hChoice = hChoice.charAt(0).toUpperCase() + hChoice.slice(1).toLowerCase();

    if (hChoice === "") {
      alert("You didn't type anything!");
    } else if (
      hChoice !== "Rock" &&
      hChoice !== "Paper" &&
      hChoice !== "Scissors"
    ) {
      alert("Invalid choice!");
    } else {
      return hChoice;
    }
  }
}

//Get computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame() {
  const humanChoice = getHumanChoice();
  if (humanChoice === null) {
    return;
  }

  const computerChoice = getComputerChoice();

  //alert what each player chose
  alert(`You chose ${humanChoice} and the computer chose ${computerChoice}.`);

  let humanScore = 0;
  let computerScore = 0;

  //compare humanChoice with computerChoice and decide the winner
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    alert(`You won this round!`);
    humanScore++;
  } else if (humanChoice === computerChoice) {
    alert("It's a tie!");
  } else {
    alert(`You lost this round!`);
    computerScore++;
  }
  //alert the score
  alert(`The score is => You: ${humanScore} | The computer: ${computerScore}`);
  //play the game for 5 rounds
}

playGame();
//compare humanScore and computerScore then alert; The winner is: ...
