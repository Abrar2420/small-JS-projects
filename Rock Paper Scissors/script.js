const computerChoiceDisplay = document.querySelector("#computerChoice");
const humanChoiceDisplay = document.querySelector("#humanChoice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll(".inputImg");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((choices) => {
  choices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    // console.log(userChoice);
    generateComputerChoice();
    generateHumanChoice();
    generateResult();
    reset();
  });
});

const generateComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * possibleChoices.length + 1);
  // console.log(randomChoice, typeof randomChoice);
  if (randomChoice === 1) {
    computerChoice = "rock";
    computerChoiceDisplay.src = "./images/rock_left.png";
    computerChoiceDisplay.classList.add("computerChoice");
    // console.log("rock");
  } else if (randomChoice === 2) {
    computerChoice = "paper";
    computerChoiceDisplay.src = "./images/paper_left.png";
    computerChoiceDisplay.classList.add("computerChoice");
  } else {
    computerChoice = "scissors";
    computerChoiceDisplay.src = "./images/scissors_left.png";
    computerChoiceDisplay.classList.add("computerChoice");

    // console.log("scissors");
  }
};

const generateHumanChoice = () => {
  if (userChoice === "rock") {
    humanChoiceDisplay.src = "./images/rock_right.png";
    humanChoiceDisplay.classList.add("humanChoice");

    // console.log("rock");
  } else if (userChoice === "paper") {
    humanChoiceDisplay.src = "./images/paper_right.png";
    humanChoiceDisplay.classList.add("humanChoice");

    // console.log("paper");
  } else {
    humanChoiceDisplay.src = "./images/scissors_right.png";
    humanChoiceDisplay.classList.add("humanChoice");
    // console.log("scissors");
  }
};

const generateResult = () => {
  if (userChoice === computerChoice) {
    resultDisplay.classList.add("draw");
    resultDisplay.textContent = "It's a Draw!";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    resultDisplay.classList.add("win");
    resultDisplay.textContent = "You Won!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    resultDisplay.classList.add("lose");
    resultDisplay.textContent = "You Lose !";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    resultDisplay.classList.add("win");
    resultDisplay.textContent = "You Won !";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    resultDisplay.classList.add("lose");
    resultDisplay.textContent = "You Lose !";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    resultDisplay.classList.add("win");
    resultDisplay.textContent = "You Won !";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    resultDisplay.classList.add("lose");
    resultDisplay.textContent = "You Lose !";
  }
};
const reset = () => {
  setTimeout(() => {
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("lose");
    resultDisplay.classList.remove("draw");
    resultDisplay.classList.remove("win");
    computerChoiceDisplay.src = "";
    computerChoiceDisplay.classList.remove("computerChoice");
    humanChoiceDisplay.src = "";
    humanChoiceDisplay.classList.remove("humanChoice");
  }, 1000);
};
