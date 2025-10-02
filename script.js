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
      `<div class=todo-container>
           <p class=todo-txt>${todoData[i]}</p>
       </div>`);
  }
}

// function to add new todo from input
const addTodo = () => {
  const currentTodo = todoInput.value;
  todoData.push(currentTodo);
  localStorage.setItem("data", JSON.stringify(todoData));
  todoInput.value = "";
  renderTodos();
};

// call the loading of todos
renderTodos();
// event listener to handle add todo action
addBtn.addEventListener('click', addTodo);
