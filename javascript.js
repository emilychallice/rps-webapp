let roundsPlayed = 0;
let humanWins = 0;
let cpuWins = 0;

let humanChoice;
let cpuChoice;



function playRound() {

  // Intro text
  console.log(`This is round ${roundsPlayed + 1}. Human: ${humanWins} | CPU: ${cpuWins}`)

  // Human makes a choice...
  let humanChoiceInput = prompt("Rock, paper, or scissors?").toLowerCase();

  // Keep prompting until one of the options is chosen
  while (humanChoiceInput != "rock" &&
         humanChoiceInput != "paper" &&
         humanChoiceInput != "scissors")
  {
    humanChoiceInput = prompt("Rock, paper, or scissors?").toLowerCase();
  }

  // Process the human input
  if (humanChoiceInput == "rock") {
    console.log("You chose Rock!");
    humanChoice = 0;
  } else if (humanChoiceInput == "paper") {
    console.log("You chose Paper!");
    humanChoice = 1;
  } else if (humanChoiceInput == "scissors") {
    console.log("You chose Scissors!");
    humanChoice = 2;
  } else {
    console.log("Input undefined! You panicked and chose Rock.")
    humanChoice = 0;
  }

  // Computer makes a random choice...
  let cpuChoiceInput = Math.random();
  if (0 <= cpuChoiceInput  && cpuChoiceInput <= 1/3) {
    console.log("CPU chose Rock!");
    cpuChoice = 0;
  } else if (cpuChoiceInput <= 2/3) {
    console.log("CPU chose Paper!");
    cpuChoice = 1;
  } else {
    console.log("CPU chose Scissors!");
    cpuChoice = 2;
  }

  // Show the computer's actual random number choice, if desired
  // console.log("Computer chose: " + cpuChoiceInput);

  // Rock vs Paper vs Scissors!
  let loseCond1 = humanChoice == 0 && cpuChoice == 1;
  let loseCond2 = humanChoice == 1 && cpuChoice == 2;
  let loseCond3 = humanChoice == 2 && cpuChoice == 0;

  let winCond1 = humanChoice == 0 && cpuChoice == 2;
  let winCond2 = humanChoice == 1 && cpuChoice == 0;
  let winCond3 = humanChoice == 2 && cpuChoice == 1;

  if (humanChoice == cpuChoice) {
    console.log("It's a tie!");
  } else if (loseCond1 || loseCond2 || loseCond3) {
    console.log("You lose!");
    cpuWins++;
  } else if (winCond1 || winCond2 || winCond3) {
    console.log("You win!");
    humanWins++;
  }

  roundsPlayed++;
}


function playGame() {
  for (let i = 1; i < 6; i++) {
    playRound();
  }
  console.log(`Final score: Human: ${humanWins} | CPU: ${cpuWins}`)
}

playGame();