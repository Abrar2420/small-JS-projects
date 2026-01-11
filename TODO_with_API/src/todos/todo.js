import { TodoEngine } from "./todoEngine.js";

const todoHolder = document.querySelector("#todo-holder");

const todos = new TodoEngine();
todos.getAllTodos();
