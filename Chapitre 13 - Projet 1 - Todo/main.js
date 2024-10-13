const ul = document.querySelector("ul"); // Select the unordered list element

const todos = [
  // Array of todo objects with text and done properties
  // { text: "Je suis une todo", done: false },
  // { text: "Faire du javascript", done: true },
];

const displayTodo = () => {
  ul.innerHTML = ""; // Clear existing content before appending new elements

  const todosNode = todos.map((todo, index) => {
    const li = createTodoElement(todo, index); // Create a new list item element
    return li;
  });
  
  ul.append(...todosNode); // Efficiently append all created list items
  const deleteButton = li.querySelector(".delete-button")
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  // Build the HTML structure for the list item
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}">${todo.done ? "✅" : "🔃"}</span>
    <p>${todo.text}</p>
    <button class="edit-button" data-index="${index}">Editer</button>
    <button class="delete-button" data-index="${index}">Supprimer</button>
  `;

  return li;
};
const addTodo = (text) => {
  todos.push({
    text,
    done: false,
  });
};
const addButton = document.querySelector(".add-button");
const deleteButton = document.querySelector(".delete-button");
const input = document.querySelector("input");
console.log(addButton, ul, input,deleteButton); // Log for verification

// addButton.addEventListener("click", addTodo);

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const value = input.value;
  input.value = '';
  addTodo(value)
  displayTodo();
  // Prevent default form submission behavior (reloading the page)
  // Handle form submission for editing or deleting todos (implementation not provided here)
  // Retrieve values from form input elements, use data-index attributes to identify the target todo, and update the todos array accordingly
});

//displayTodo(); // Call displayTodo() to initially render the existing todos

