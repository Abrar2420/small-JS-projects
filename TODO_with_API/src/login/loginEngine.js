export class LoginEngine {
  #username;
  #password;

  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }

  async loginApi() {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.#username,
        password: this.#password,
        expiresInMins: 300, // optional, defaults to 60
      }),
    });
  }
}
