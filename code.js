const choices = ["rock", "paper", "scissors"];
let score = {
  player: 0,
  computer: 0,
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let choice = e.target.textContent;
    let roundResult = playSingleRound(
      getPlayerChoice(choice),
      getComputerChoice()
    );
    setRoundResult(roundResult);
    setScore();
    setGameResult();
  });
});

function setRoundResult(roundResult) {
  document.querySelector("#round-result").textContent = roundResult;
}
function setScore() {
  document.querySelector(
    "#score"
  ).textContent = `Player: ${score.player} Computer: ${score.computer}`;
}
function setGameResult() {
  if (score.player === 5 || score.computer === 5) {
    document.querySelector("#game-result").textContent = `You ${
      score.player > score.computer ? "won" : "lost"
    }!`;
    score.player = 0;
    score.computer = 0;
  } else {
    document.querySelector("#game-result").textContent = "";
  }
}
function game() {
  while (score.player + score.computer < 5) {
    console.log(playSingleRound(getPlayerChoice(), getComputerChoice()));
  }
  console.log(score);
  console.log(score.player > score.computer ? "You won!" : "You lost!");
}

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function getPlayerChoice(choice) {
  choice = choice.toLowerCase().trim();
  console.log(choice);
  return choice;
}

//returns string with round results
function playSingleRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `It's a tie! ${capitalize(playerChoice)} ties with ${capitalize(
      computerChoice
    )}.`;
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    score.computer += 1;
    return `You lose! Paper beats Rock.`;
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    score.player += 1;
    return `You win! Rock beats Scissors.`;
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    score.player += 1;
    return `You win! Paper beats Rock.`;
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    score.computer += 1;
    return `You lose! Scissors beat Paper.`;
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    score.computer += 1;
    return `You lose! Rock beats Scissors.`;
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    score.player += 1;
    return `You win! Scissors beat Paper.`;
  }
}

function capitalize(word) {
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);

  return firstLetterCap + remainingLetters;
}

// game();
