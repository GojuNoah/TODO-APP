const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const taskListData = JSON.parse(localStorage.getItem("data")) || [];
const currentTodo = todoInput.value();

const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '');
}

const addTodo = () => {
    
};

addBtn.addEventListener('click', addTodo);
