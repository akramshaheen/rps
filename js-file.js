//get user choice and make it case unsensitive (humanChoice)
const humanChoice = prompt("choose rock, paper, or scissors:").toLowerCase();

//get computer choice with a randomizer (computerChoice)
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

const computerChoice = getComputerChoice();

// function getComputerChoice() {
//   let randomizer = Math.random();

//   if (randomizer < 0.33) {
//     computerChoice = "rock";
//   } else if (randomizer >= 0.33 && randomizer < 0.66) {
//     computerChoice = "paper";
//   } else {
//     computerChoice = "scissors";
//   }
//   return computerChoice;
// }
//compare humanChoice with computerChoice and decide the winner
//track scores and store them in two variables (humanScore, computerScore)

//alert what each player chose, who won the round, and the current score all in one alert like this:

//you chose ... and the computer chose ...
//X won this round.
//The score is => You: ... / The computer: ...

//play the game for 5 rounds

//compare humanScore and computerScore then alert; The winner is: ...
