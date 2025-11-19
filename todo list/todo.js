const todoInput = document.querySelector(".add_todo");
const addBtn = document.querySelector(".add_btn");
const todoList = document.querySelector(".todo_list");

// creates the todo list item (li>checkbox,span,button)
const createTodoItem = () => {
  let todoItem = document.createElement("li");
  todoItem.classList.add("todo_list_item");

  let todoCheck = document.createElement("input");
  todoCheck.classList.add("todo_check");
  todoCheck.setAttribute("type", "checkbox");

  let todoText = document.createElement("span");
  todoText.classList.add("todo_text");
  todoText.textContent = todoInput.value;

  let todoBtn = document.createElement("button");
  todoBtn.classList.add("todo_btn");
  todoBtn.textContent = "Delete";

  todoCheck.addEventListener("click", () => {
    todoText.classList.toggle("todo_done");
  });

  todoBtn.addEventListener("click", () => {
    todoItem.remove();
  });

  todoItem.append(todoCheck, todoText, todoBtn);
  todoList.appendChild(todoItem);
};

addBtn.addEventListener("click", () => {
  // checks for empty add
  if (todoInput.value !== "") {
    createTodoItem();
  }
});

todoInput.addEventListener("keydown", (event) => {
  if (todoInput.value !== "" && event.key == "Enter") {
    createTodoItem();
  }
});
