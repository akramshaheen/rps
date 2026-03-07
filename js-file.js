//get user choice and make it case unsensitive (humanChoice)
let humanChoice = prompt("choose rock, paper, or scissors:");
humanChoice =
  humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

//get computer choice with a randomizer (computerChoice)
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
