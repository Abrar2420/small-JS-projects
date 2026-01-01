// storing the main tag
const display = document.querySelector("#display");

// storing the theme switcher btn and bth text
const themeBtn = document.querySelector("#theme-btn");
const themeTxt = document.querySelector("#theme-txt");

// getting when theme switcher is clcked
themeBtn.addEventListener("click", () => {
  // this block of code runs every time the btn is clicked

  // if the btn has the class of "dark_btn" this if block runs
  if (themeBtn.classList.contains("dark_btn")) {
    display.classList.remove("light"); // removing the light class form the main
    display.classList.add("dark"); // adding the dark class instead, the dark theme applies here

    themeBtn.classList.remove("dark_btn"); // removing the dark_btn class
    themeBtn.classList.add("light_btn"); // adding the light_btn class

    themeTxt.textContent = "light mode"; // changing the text

    // if esle dose the opposite of the if block
  } else if (themeBtn.classList.contains("light_btn")) {
    display.classList.remove("dark");
    display.classList.add("light");

    themeBtn.classList.remove("light_btn");
    themeBtn.classList.add("dark_btn");

    themeTxt.textContent = "dark mode";
  }
});
