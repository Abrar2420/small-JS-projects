import { CustomError } from "../libs/error.js";

export class LoginEngine {
  // setting the usernae and password as privet
  #username;
  #password;

  // constructor take 2 parameters when called in an instanse
  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }

  //& this method fetches the auth api and posts the username and password
  //& if the fetch resolves, the response is converted to to .json(), and the data is returned
  //& if the response is not ok, custom error class is called, error is thrown
  async loginApi() {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.#username,
          password: this.#password,
          expiresInMins: 300, // optional, defaults to 60
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        CustomError.giveError(data);
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
