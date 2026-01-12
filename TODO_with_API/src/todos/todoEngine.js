import { TodoHtmlContentSupplier } from "./todoHtmlContent.js";

export class TodoEngine {
  allTodos;

  //& fetch all todos
  async getAllTodos() {
    try {
      // storing the <tbody> to render all todos in it.
      const todoHolder = document.querySelector("#todo-items");
      // setting the innerHTML to loading skeleton for the todos
      todoHolder.innerHTML = TodoHtmlContentSupplier.renderTodoSkeleton();

      //& all todos are fetched and stored in respose
      const response = await fetch("https://dummyjson.com/todos");
      //& the response is converted to .json() and sotred as data
      const data = await response.json();

      this.allTodos = data.todos; // all todos are accesed form data.
      console.log(this.allTodos);
      //   console.log(this.renderHTML());

      // setting the innerHTML to renderd html from suppoier class
      todoHolder.innerHTML = TodoHtmlContentSupplier.renderTodoHTML(
        this.allTodos // all todos is passed as the parameter
      );
    } catch (error) {
      console.log(error);
    }
  }
}
