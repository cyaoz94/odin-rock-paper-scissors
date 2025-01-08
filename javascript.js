console.log("Hello World!");

const choices = ["rock", "paper", "scissors"];

// score variables
let computerScore = 0;
let humanScore = 0;

// function that randomly returns string values "rock", "paper" or "scissors"
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

// function to get human choice
function getHumanChoice(round) {
  let validAnswer = false;
  while (!validAnswer) {
    answer = prompt(
      `Round: ${round}! Please select an option. rock, paper or scissors`
    ).toLowerCase();

    validAnswer =
      (typeof answer === "string" || answer instanceof String) &&
      choices.includes(answer);
  }

  return answer;
}

// play 1 round
function playRound(computerChoice, humanChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("You tied");
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats rocks");
      computerScore++;
    } else if (computerChoice === "scissors") {
      console.log("You win! Rock beats scissors");
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats rock");
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log("You tied");
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats paper");
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats scissors");
      computerScore++;
    } else if (computerChoice === "paper") {
      console.log("You win! Scissors beats paper");
      humanScore++;
    } else if (computerChoice === "scissors") {
      console.log("You tied");
    }
  }
}

// play game, where there are 5 rounds
function playGame() {
  for (i = 0; i < 5; i++) {
    let round = i + 1;
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice(round);
    playRound(computerChoice, humanChoice);
  }

  if (humanScore > computerScore) {
    console.log(
      `Human score: ${humanScore}, Computer score: ${computerScore}. You win!`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Human score: ${humanScore}, Computer score: ${computerScore}. You lose!`
    );
  } else {
    console.log(
      `Human score: ${humanScore}, Computer score: ${computerScore}. You tied!`
    );
    
  }
}
