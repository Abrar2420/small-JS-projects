console.log("hello");

const sliders = document.querySelectorAll(".range");

sliders.forEach((slider) => {
  const updateFill = () => {
    const val = slider.value;
    const percent = (val / 255) * 100;
    // Use a full width gradient with the same percent
    slider.style.background = `linear-gradient(to right, black 0%, black ${percent}%, #ddd ${percent}%, #ddd 100%)`;
  };

  // Attach input event
  slider.addEventListener("input", updateFill);

  // Initialize the fill on page load
  updateFill();
});

// getting the input and color box
const color = document.querySelector(".color_box");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

const copy = document.querySelector(".copy_box");
const wrapper = document.querySelector(".wrapper");

// let b = document.querySelector(".#btn");

// changes the style (background color)
// to the value of the range dynamically
const showColor = () => {
  let NewColor =
    (color.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`);
  return NewColor;
};

// adding the eventListner to all the range inputs
red.addEventListener("input", showColor);
green.addEventListener("input", showColor);
blue.addEventListener("input", showColor);
showColor(); // calling the function afterwards

// creating, styling and adding the popup
let popup = document.createElement("div");
popup.classList.add("notify");
popup.textContent = "Copied! to clip-board";
wrapper.appendChild(popup);

const showPopup = () => {
  popup.classList.add("notify2"); // adds the style for the popup position
  setTimeout(() => {
    popup.classList.remove("notify2"); // removes the class after 1.5s
  }, 1500);
};

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(showColor()); // copies the provided text to clip-board
  showPopup();
});

// console.log(showColor());

// getting the button
const button = document.querySelector("#btn");

const randomColor = () => {
  let randomRed = Math.floor(Math.random() * 255); // random red value
  let randomGreen = Math.floor(Math.random() * 255); // random blue value
  let randomBlue = Math.floor(Math.random() * 255); // random green value
  color.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
};

button.addEventListener("click", () => {
  randomColor(); //calling the function when clicked on button
});
