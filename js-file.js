//Get user choice
function getHumanChoice(round) {
  while (true) {
    let hChoice = prompt(`Round ${round}: choose Rock, Paper, or Scissors:`);

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

let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice, computerChoice, round) {
  if (humanChoice === null) {
    return;
  }

  //alert what each player chose
  alert(
    `You chose "${humanChoice}" and the computer chose "${computerChoice}".`,
  );

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
  if (round < 5) {
    alert(
      `The score is => You: ${humanScore} | The computer: ${computerScore}`,
    );
  }
}

// for (let i = 1; i < 6; i++) {
//   const humanChoice = getHumanChoice(i);
//   const computerChoice = getComputerChoice();

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
