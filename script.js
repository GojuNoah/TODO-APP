// get info from html
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('initial-btn');
const todoList = document.getElementById('todo-list');

// get data from local storage
const todoData = JSON.parse(localStorage.getItem("data")) || [];

// load previously added todos
const renderTodos = () => {
  todoList.innerHTML = "";
  for (let i = 0; i < todoData.length; i++) {
    todoList.insertAdjacentHTML("afterbegin", 
      `<div class=todo-container id=${i}>
           <p class=todo-txt>${todoData[i]}</p>
           <button onclick=deleteTodo(this) class=del-btn>Delete Todo</button>
           <button onclick=editTodo(this) class=edit-btn id=edit-btn>Edit Todo</button>
       </div>`);
  };
};

// function to add new todo from input
const addTodo = () => {
  const currentTodo = todoInput.value.trim();
  if (currentTodo === "") {
    alert("Please enter a todo");
  } else {
    todoData.push(currentTodo);
    localStorage.setItem("data", JSON.stringify(todoData));
    todoInput.value = "";
    renderTodos();
  };
};

// function to delete todo from list
const deleteTodo = button => {
  thisTodo = button.parentElement.id;
  thisTodo = parseInt(thisTodo);
  todoData.splice(thisTodo, 1);
  localStorage.setItem("data", JSON.stringify(todoData));
  renderTodos();
};

// function to edit selected todo from list
const editTodo = button => {
  thisTodo = button.parentElement.id;
  thisTodoInt = parseInt(thisTodo);
  thisTodo = todoData[thisTodoInt];
  const newText = prompt("Edit your todo:", thisTodo);
  if (newText === "") {
    alert("Please enter new text.");
  } else if (newText !== null && newText.trim() !== "") {
    todoData[thisTodoInt] = newText;
    localStorage.setItem("data", JSON.stringify(todoData));
    renderTodos();
  };
};

// call the loading of todos
renderTodos();

// event listeners to handle add todo action
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
