import { LoginEngine } from "./loginEngine.js";

// form, input for username and password, are stored
const form = document.querySelector("#loginForm");

//& eventlistner on submit
/// new instanse is created form the class login engine,
// login.Api methocd is called
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const login = new LoginEngine(username, password);
  const loginInfo = await login.loginApi();
  // storing the user data, to the local storage
  localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
  // sending the user to index.html
  window.location.href = "index.html";
});
