export class TodoHtmlContentSupplier {
  static renderTodoHTML(todoItem) {
    function todoStatusCheck(status) {
      let todoStatus = ``;
      if (status === true) {
        todoStatus = `<td class="border px-4 py-2 text-green-600 font-medium">Yes <span>✔️</span></td>`;
        return todoStatus;
      } else {
        todoStatus = `<td class="border px-4 py-2 text-red-600 font-medium">No <span>❌</span></td>`;
        return todoStatus;
      }
    }

    let todoContent = ``;
    todoItem.forEach((item) => {
      todoContent += `            <tr class="hover:bg-gray-50">
              <td class="border px-4 py-2">${item.id}</td>
              <td class="border px-4 py-2">${item.todo}</td>
              ${todoStatusCheck(item.completed)}
              <td class="border px-4 py-2">${item.userId}</td>
            </tr>`;
    });
    return todoContent;
  }

  static renderTodoSkeleton() {
    return `
  <!-- Skeleton row 1 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-32 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>

  <!-- Skeleton row 2 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-28 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>

  <!-- Skeleton row 3 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-24 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>

  <!-- Skeleton row 4 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-24 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>

  <!-- Skeleton row 5 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-24 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>
   <!-- Skeleton row 1 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-32 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>

  <!-- Skeleton row 2 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-28 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>

  <!-- Skeleton row 3 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-24 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>

  <!-- Skeleton row 4 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-24 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>

  <!-- Skeleton row 5 -->
  <tr class="bg-neutral-primary animate-pulse">
    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
      <div class="h-4 w-24 bg-gray-300 rounded"></div>
    </th>
    <td class="px-6 py-4"><div class="h-4 w-20 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-24 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-16 bg-gray-300 rounded"></div></td>
    <td class="px-6 py-4"><div class="h-4 w-12 bg-gray-300 rounded"></div></td>
  </tr>`;
  }
}
