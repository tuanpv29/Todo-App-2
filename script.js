// Selectors
const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list');
const todoTotal = document.querySelector('.todo-total');

// Event Listeners
todoAdd.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDeleteTodo)

// Function
function addTodo(event) {
  // Prevent submitting
  event.preventDefault();

  if (todoInput.value == '') {
    alert('Write something!');
  } else {
    // Create Div elements
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);

    // Create Checkbox elements
    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.classList.add('todo-check');
    todoDiv.appendChild(todoCheckbox);

    // Create Input elements
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;
    todoLi.classList.add('todo-item');
    todoDiv.appendChild(todoLi);

    // Create Button elements
    const todoButton = document.createElement('button');
    todoButton.innerText = 'Delete';
    todoButton.classList.add('todo-delete')
    todoDiv.appendChild(todoButton)

    // Clear Todo Input Value
    todoInput.value = '';
  };

  // Sum items left
  var numTodo = todoList.childElementCount;
  var numDone = todoList.getElementsByClassName('done').length;
  todoTotal.innerText = numTodo - numDone;
};


function checkDeleteTodo(some) {
  const x = some.target;
  // Check Todo
  if (x.classList[0] == 'todo-check') {
    const item = x.parentElement.children[1]
    item.classList.toggle('done');
  };

  // Delete Todo
  if (x.classList[0] == 'todo-delete') {
    const item = x.parentElement;
    item.remove();
  };

  // Sum items left
  var numTodo = todoList.childElementCount;
  var numDone = todoList.getElementsByClassName('done').length;
  todoTotal.innerText = numTodo - numDone;
};