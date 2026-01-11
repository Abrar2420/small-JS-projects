export class LoginEngine {
  allTodos;

  //& fetch all todos
  async getAllTodos() {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();

      this.allTodos = data.todos;

      //   if (!response.ok) console.log("wrong api");
    } catch (error) {
      console.log(error.message);
    }
  }

  renderHTML() {}

  //   static initialLog() {
  //     console.log("All working for now");
  //   }
}
