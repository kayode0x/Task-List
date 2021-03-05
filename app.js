// create all UI variables
const form = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector(".collection");
const filter = document.querySelector("#filter");
const clearTask = document.querySelector(".clearTasks");

loadEventListeners();

function loadEventListeners() {
    form.addEventListener("submit", addNewTask);
    taskList.addEventListener("click", removeTask);
}

function addNewTask(e){
    if (taskInput.value === ""){
        alert("Please enter a task");
    } else {
        const li = document.createElement('li');
        li.className = 'collectionItem';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fas fa-times"></i>';
        li.appendChild(link);

        //append li to the ul
        taskList.appendChild(li);

        //clear task input
        taskInput.value = "";
    }

    

    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        e.target.parentElement.parentElement.remove();
    }
}