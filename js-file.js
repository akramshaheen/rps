//Get user choice
function getHumanChoice() {
  while (true) {
    let humanChoice = prompt("choose Rock, Paper, or Scissors:");

    if (humanChoice === null) {
      alert("Game Over!");
      break;
    }

    humanChoice =
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    if (humanChoice === "") {
      alert("You didn't type anything!");
    } else if (
      humanChoice !== "Rock" &&
      humanChoice !== "Paper" &&
      humanChoice !== "Scissors"
    ) {
      alert("Invalid choice!");
    } else {
      break;
    }
  }
}

//Get computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
const computerChoice = getComputerChoice();

//compare humanChoice with computerChoice and decide the winner
//track scores and store them in two variables (humanScore, computerScore)

//alert what each player chose, who won the round, and the current score all in one alert like this:

//you chose ... and the computer chose ...
//X won this round.
//The score is => You: ... / The computer: ...

//play the game for 5 rounds

//compare humanScore and computerScore then alert; The winner is: ...
