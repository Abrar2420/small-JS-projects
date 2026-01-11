export class TodoEngine {
  allTodos;

  //& fetch all todos
  async getAllTodos() {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();

      this.allTodos = data.todos;
      console.log(this.allTodos);

      //   if (!response.ok) console.log("wrong api");
    } catch (error) {
      console.log(error.message);
    }
  }

  renderHTML() {
    function todoStatusCheck(status) {
      const todoStatus = ``;
      if (status === true) {
        todoStatus = `<td class="border px-4 py-2 text-green-600 font-medium">Yes</td>`;
        return todoStatus;
      } else {
        todoStatus = `<td class="border px-4 py-2 text-red-600 font-medium">No</td>`;
        return todoStatus;
      }
    }

    const todoContent = ``;
    this.allTodos.forEach((todoItem) => {
      todoContent += `            <tr class="hover:bg-gray-50">
              <td class="border px-4 py-2">${todoItem.id}</td>
              <td class="border px-4 py-2">${todoItem.todo}</td>
              ${todoStatusCheck(todoItem.completed)}
              <td class="border px-4 py-2">${todoItem.userId}</td>
            </tr>`;
    });
  }

  //   static initialLog() {
  //     console.log("All working for now");
  //   }
}
