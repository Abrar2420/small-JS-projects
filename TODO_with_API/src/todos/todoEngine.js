import { TodoHtmlContentSupplier } from "./todoHtmlContent.js";

export class TodoEngine {
  allTodos;

  //& fetch all todos
  async getAllTodos() {
    try {
      const todoHolder = document.querySelector("#todo-items");
      todoHolder.innerHTML = TodoHtmlContentSupplier.renderTodoSkeleton();

      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();

      this.allTodos = data.todos;
      console.log(this.allTodos);
      //   console.log(this.renderHTML());

      todoHolder.innerHTML = TodoHtmlContentSupplier.renderTodoHTML(
        this.allTodos
      );
    } catch (error) {
      console.log(error);
    }
  }
}
