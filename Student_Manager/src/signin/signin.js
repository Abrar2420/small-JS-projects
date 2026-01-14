import { SigninEngine } from "./signinEngine.js";

const form = document.querySelector("#loginForm");

form.addEventListener("click", async (e) => {
  e.preventDefault();

  const user = document.querySelector("#username").value;
  const pass = document.querySelector("#password").value;

  const login = new SigninEngine(user, pass);
  const loginInfo = await login.loginApi();

  console.log("login succes");
  window.location.href = "index.html";
});
