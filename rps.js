let humanWins = 0;
let cpuWins = 0;
let roundsPlayed = humanWins + cpuWins

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

const header = document.querySelector("header")
let headerTitle = document.querySelector("#page-header-title");
let headerStatement = document.querySelector("#page-header-statement");

const scoreboardHumanScore = document.querySelector("#scoreboard-human-score");
const scoreboardCPUScore = document.querySelector("#scoreboard-cpu-score");


rockButton.addEventListener("click", selectButton);
paperButton.addEventListener("click", selectButton);
scissorsButton.addEventListener("click", selectButton);


function selectButton(e)
{
  let buttons = [rockButton, paperButton, scissorsButton];
  let choiceNames = ["Rock", "Paper", "Scissors"];

  let buttonID = buttons.findIndex( (elem) => {return (elem == e.target);} );

  // Activate correct button
  buttons.map( (b) => {b.classList.remove("active");} );
  e.target.classList.add("active");

  // Update player's selection
  humanChoice = buttonID;
  headerTitle.textContent = "You chose " + choiceNames[buttonID];

  // Play round based on player's selection
  playRound(buttonID);
}

function playRound(humanChoice)
{
  let cpuChoice = getCpuChoice();

  // Update CPU choice text
  switch (cpuChoice)
  {
    case 0:
      headerTitle.textContent += "... and CPU chooses Rock.";
      break;
    case 1:
      headerTitle.textContent += "... and CPU chooses Paper.";
      break;
    case 2:
      headerTitle.textContent += "... and CPU chooses Scissors.";
      break;
  }

  let winState = checkWinLose(humanChoice, cpuChoice);
  let gameOverText = "";
  switch (winState)
  {
    case 0:
      gameOverText = "Tie!";
      break;
    case 1:
      gameOverText = "CPU wins!";
      cpuWins++;
      break;
    case 2:
      gameOverText = "You win!";
      humanWins++;
      break;
  }

  // Update win state text - replace the entire node so the fadein animation replays
  replaceText(headerStatement, gameOverText);

  // Update scoreboard
  scoreboardHumanScore.textContent = "HUMAN: " + humanWins;
  scoreboardCPUScore.textContent = "CPU: " + cpuWins;
}

/*===========================*/
/*----- OTHER FUNCTIONS -----*/
/*===========================*/
function checkWinLose(humanChoice, cpuChoice)
{// Rock vs Paper vs Scissors!
  let loseCond1 = humanChoice == 0 && cpuChoice == 1;
  let loseCond2 = humanChoice == 1 && cpuChoice == 2;
  let loseCond3 = humanChoice == 2 && cpuChoice == 0;

  let winCond1 = humanChoice == 0 && cpuChoice == 2;
  let winCond2 = humanChoice == 1 && cpuChoice == 0;
  let winCond3 = humanChoice == 2 && cpuChoice == 1;

  if (cpuChoice === humanChoice)                 return 0; // TIE
  else if (loseCond1 || loseCond2 || loseCond3)  return 1; // CPU WINS / HUMAN LOSES
  else if (winCond1 || winCond2 || winCond3)     return 2; // HUMAN WINS / CPU LOSES
}

function replaceText(node, newText)
{
  let nodeNew = node;
  nodeNew.textContent = newText;
  node.parentNode.replaceChild(nodeNew, node);

  node = nodeNew;
}

function getCpuChoice()
{
  let cpuChoiceInput = Math.random();
  if (0 <= cpuChoiceInput  && cpuChoiceInput <= 1/3) return 0; // CPU CHOOSES ROCK
  else if (cpuChoiceInput <= 2/3)                    return 1; // CPU CHOOSES PAPER
  else                                               return 2; // CPU CHOOSES SCISSORS
}