const form        = document.querySelector('form');
const todosList   = document.querySelector('ul');
const button      = document.getElementById('clear');
const input       = document.getElementById('user-todo');
//check if any items exist in localStorage.
//If they exist parse them and set them to todosArray else set empty array.
const todosArray  = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')) : [];
//Store array in localStorage as String
localStorage.setItem('todos',JSON.stringify(todosArray));

//Get data from localstorage and convert it to JS Object
form.addEventListener('submit',(e)=>{
e.preventDefault();
todosArray.push(input.value);
localStorage.setItem('todos',JSON.stringify(todosArray));
todoMaker(input.value);
input.value = "";
});

const todoMaker=(task)=>{
let todo = document.createElement('li');
todo.textContent=task;
todosList.appendChild(todo);
};

//loop through all items and create a list on page load
todosArray.map(item=>todoMaker(item));

button.addEventListener('click',()=>{
    localStorage.clear();
    while(todosList.firstChild){
        todosList.removeChild(todosList.firstChild);    
    }
});

