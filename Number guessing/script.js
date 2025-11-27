const player1Box = document.querySelector("#player1");
const player2Box = document.querySelector("#player2");
const player1number = document.querySelector("#player1Input");
const player1Submit = document.querySelector("#player1Btn");

const player2Input = document.querySelector("#player2Input");
const player2Submit = document.querySelector("#player2Btn");
const tries = document.querySelector("#tries");
const result = document.querySelector("#result");

const reset = document.querySelector("#reset");

console.log(player2Input, player2Submit, tries, result);

let secretNumber = 0;

player1Submit.addEventListener("click", () => {
  const num = +player1number.value;
  //   console.log(num, typeof num);

  if (num >= 1 && num <= 20) {
    secretNumber = num;
    player1Box.style.display = "none";
    player2Box.style.display = "flex";
  } else {
    alert("Please enter a number between 1 and 20!");
  }
});

let triesLeft = 5;

player2Submit.addEventListener("click", () => {
  const guess = +player2Input.value;

  if (guess >= 1 && guess <= 20) {
    if (guess === secretNumber) {
      result.textContent = "You won!";
      result.style.color = "green";
      player2Submit.disabled = true;
    } else {
      triesLeft--;
      tries.textContent = triesLeft;

      if (triesLeft === 0) {
        result.textContent = `You Lost! The number was ${secretNumber}`;
        result.style.color = "red";
        player2Submit.disabled = true;
      } else {
        result.textContent = "Incorrect! Guess again.";
        result.style.color = "orange";
      }
    }
  } else {
    alert("Please enter a number between 1 and 20! ");
  }

  player2Input.value = "";
});

reset.addEventListener("click", () => {
  player2Box.style.display = "none";
  player2Submit.disabled = false;
  triesLeft = 5;
  tries.textContent = triesLeft;
  result.textContent = "";
  player2Input.value = "";

  player1Box.style.display = "flex";
  player1number.value = "";
  secretNumber = 0;
});
