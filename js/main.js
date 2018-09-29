const form        = document.querySelector('form');
const todosList   = document.querySelector('ul');
const button      = document.getElementById('clear');
const input       = document.getElementById('user-todo');

form.addEventListener('submit',(e)=>{
e.preventDefault();
todoMaker(input.value);
input.value = "";
});

const todoMaker=(task)=>{
let todo = document.createElement('li');
todo.textContent=task;
todosList.appendChild(todo);
};


button.addEventListener('click',()=>{
    while(todosList.firstChild){
        todosList.removeChild(todosList.firstChild);
    }
});

