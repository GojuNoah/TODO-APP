// get info from html
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// get data from local storage
const todoData = JSON.parse(localStorage.getItem("data")) || [];

// load previously added todos
const renderTodos = () => {
  todoList.innerHTML = "";
  for (let i = 0; i < todoData.length; i++) {
    todoList.insertAdjacentHTML("afterbegin", 
      `<div class=todo-container id=${i}>
           <p class=todo-txt>${todoData[i]}</p><button onclick=deleteTodo(this) class=del-btn>Delete Todo</button>
       </div>`);
  }
}

// function to add new todo from input
const addTodo = () => {
  const currentTodo = todoInput.value.trim();
  todoData.push(currentTodo);
  localStorage.setItem("data", JSON.stringify(todoData));
  todoInput.value = "";
  renderTodos();
};

// function to delete todo from list
const deleteTodo = button => {
  thisTodo = button.parentElement.id;
  thisTodo = parseInt(thisTodo);
  todoData.splice(thisTodo, 1);
  localStorage.setItem("data", JSON.stringify(todoData));
  renderTodos();
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