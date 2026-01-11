import { LoginEngine } from "./loginEngine.js";

const form = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const login = new LoginEngine(username, password);
  loginInfo = login.loginApi();
  localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
  window.location.href = "index.html";
});
