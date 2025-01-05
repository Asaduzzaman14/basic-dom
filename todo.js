const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function addTodo() {
  const task = todoInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = task;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    todoList.removeChild(li);
  };

  // Append text and delete button to the list item
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add the list item to the list
  todoList.appendChild(li);

  // Clear the input field
  todoInput.value = "";
}
