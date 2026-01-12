import { TodoEngine } from "./todoEngine.js";

const todoHolder = document.querySelector("#todo-holder");

//& new instanse is created form the class todo engine
const todos = new TodoEngine();
todos.getAllTodos(); // get all todos method is called
