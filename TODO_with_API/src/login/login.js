import { LoginEngine } from "./loginEngine.js";

// form, input for username and password, are stored
const form = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

//& eventlistner on submit
/// new instanse is created form the class login engine,
// login.Api methocd is called
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const login = new LoginEngine(username, password);
  loginInfo = login.loginApi();
  // storing the user data, to the local storage
  localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
  // sending the user to index.html
  window.location.href = "index.html";
});
