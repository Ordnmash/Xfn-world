const inputEl = document.getElementById("todo-inputEl");
const errorMessage = document.getElementById("error-message");
const todoOut = document.getElementById("todo-output");

const todoList = ['watch youtube'];
function addTodo(){
  let todoInput = inputEl.value;
  if (!todoInput){
    errorMessage.innerText = "please enter todo name!";
  } else {
    todoList.push(todoInput)
    inputEl.value = '';
  }
  renderTodo();
};
function renderTodo(){
  if (todoList.length !== 0){
    todoOut.innerHTML = '';
    for (let i = 0; i < todoList.length; i++){
      const eachTodo = `
        <p>
          ${todoList[i]} 
          <span class="edit-button" onclick="showEdit()">Edit</span>
          <button onclick="todoList.splice(${i}, 1); renderTodo()">Delete</button>
          <div class="edit-todo">
            <input type="text" id="todo-inputEl" placeholder="todo name...">
            <button onclick="addTodo()">save</button>
          </div>
        </p>
      `;
      todoOut.innerHTML += eachTodo;
    }
  } else{
    todoOut.innerHTML = `<p>Todo is empty!</p>`;
  }
};

const editBtn = document.querySelector('.edit-button').innerText;
const editcont = document.querySelector('.edit-todo');

function showEdit(){
  if (editinnerTx !== "Edit"){
    editBtn.innerText = "Cancel";
    editcont.style.display = 'flex';
  } else {
    editBtn.innerText = "Edit";
    editcont.style.display = 'none';
  }
};

renderTodo();