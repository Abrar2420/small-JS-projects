export class CustomError {
  constructor(message) {
    this.message = message;
  }

  static giveError(msg) {
    const errorMessage = new CustomError(msg);
    throw new Error(errorMessage.message, "hello");
  }
}
