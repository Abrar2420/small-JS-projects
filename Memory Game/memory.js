const cards = document.querySelectorAll(".card"); // geting all the cards
// console.log(cards)
// getting all the images in an array
// which can be dynamically put in the img src
const images = [
  "game_img_1.png",
  "game_img_2.png",
  "game_img_3.png",
  "game_img_4.png",
  "game_img_5.png",
  "game_img_6.png",
  "game_img_7.png",
  "game_img_8.png",
];

// getting 2 copies for each images using array spreed [...arr]
const gameImages = [...images, ...images];
//~ sorting all the images randomly with this trick
gameImages.sort(() => Math.random() - 0.5);
// console.log(gameImages);

// looping through all the cards
// to add the random img src on every card
cards.forEach((card, index) => {
  // getting the img tag from every card
  const backImage = card.querySelector(".card-back img");
  // setting the src for all the img
  backImage.src = `./images/${gameImages[index]}`;
  //   console.log(backImage);

  card.dataset.image = gameImages[index];
});

// the changing values on these variables will work as the gaems brain
// the dession made by the game fucntions be based on the variables value
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// handling card clicks
function cardClick() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  checkMatch();
}

function checkMatch() {
  const isMatch = firstCard.dataset.image === secondCard.dataset.image;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", cardClick);
  secondCard.removeEventListener("click", cardClick);

  resetTurn();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");

    resetTurn();
  }, 800);
}

function resetTurn() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

cards.forEach((card) => {
  card.addEventListener("click", cardClick);
});
