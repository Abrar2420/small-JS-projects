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

const color = document.querySelector(".color_box");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

const copy = document.querySelector(".copy_box");
const wrapper = document.querySelector(".wrapper");

// let b = document.querySelector(".#btn");

const showColor = () => {
  let NewColor =
    (color.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`);
  return NewColor;
};
red.addEventListener("input", showColor);
green.addEventListener("input", showColor);
blue.addEventListener("input", showColor);
showColor();

let popup = document.createElement("div");
popup.classList.add("notify");
popup.textContent = "Copied! to clip-board";
wrapper.appendChild(popup);

const showPopup = () => {
  popup.classList.add("notify2");
  setTimeout(() => {
    popup.classList.remove("notify2");
  }, 1500);
};

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(showColor());
  showPopup();
});

console.log(showColor());

const button = document.querySelector("#btn");

const randomColor = () => {
  let randomRed = Math.floor(Math.random() * 255);
  let randomGreen = Math.floor(Math.random() * 255);
  let randomBlue = Math.floor(Math.random() * 255);
  color.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
};

button.addEventListener("click", () => {
  randomColor();
});
