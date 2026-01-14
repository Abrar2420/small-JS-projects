export class SigninEngine {
  #username;
  #password;

  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }

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
        throw new Error("network error", data);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}
