// console.log("hello");

const display = document.querySelector("#display");

// console.log(display);
const themeBtn = document.querySelector("#theme-btn");
const themeTxt = document.querySelector("#theme-txt");
// console.log(themeTxt);

themeBtn.addEventListener("click", () => {
  if (themeBtn.classList.contains("dark_btn")) {
    display.classList.remove("light");
    display.classList.add("dark");

    themeBtn.classList.remove("dark_btn");
    themeBtn.classList.add("light_btn");

    themeTxt.textContent = "light mode";
  } else if (themeBtn.classList.contains("light_btn")) {
    display.classList.remove("dark");
    display.classList.add("light");

    themeBtn.classList.remove("light_btn");
    themeBtn.classList.add("dark_btn");

    themeTxt.textContent = "dark mode";
  }
});
