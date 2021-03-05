// create all UI variables
const form = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector(".collection");
const filter = document.querySelector("#filter");
const clearTask = document.querySelector(".clearTask");

//load all the event listeners
loadEventListeners();

function loadEventListeners() {
    //add new task
    form.addEventListener("submit", addNewTask);

    //remove existing task
    taskList.addEventListener("click", removeTask);

    //remove all tasks
    clearTask.addEventListener("click", clearTasks);

    //filter through all tasks
    filter.addEventListener("keyup", filterTasks);
}

//add a new task 
function addNewTask(e){
    const isEmpty = str => !str.trim().length; // check for empty strings

    if (isEmpty(taskInput.value)){
        alert("Please enter a task"); //alert the user, to enter a valid input
        taskInput.value = ""; //set the input value to empty
    } else {
        const li = document.createElement('li'); //create a list
        li.className = 'collectionItem'; //set a class for the created list
        li.appendChild(document.createTextNode(taskInput.value)); //insert the input value into the list
        const link = document.createElement('a'); //create an anchor tag for to clear a task
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fas fa-times"></i>'; //
        li.appendChild(link); //insert the link into the list

        //append li to the ul
        taskList.appendChild(li); //finally insert the li into the ul 

        //clear task input
        taskInput.value = ""; //after that, set the input value to empty
    }

    e.preventDefault(); // prevent default ie, on "ADD TASK" click, don't refresh or go to a new page'
}

// remove a task from the list
function removeTask(e){
    //select just the "X" icon
    if(e.target.parentElement.classList.contains("delete-item")){
        //confirm if the user really wants to remove the task
        if(confirm("Are you sure you want to delete this task?")){
            e.target.parentElement.parentElement.remove(); //on clicking "X", remove the task from the list
        }
    }
}

//clear all tasks
function clearTasks(){
    //two ways to clear the tasks
    // if (taskList.innerHTML == "") {
    //     alert("No task to clear")
    // } else {
    //     if (confirm("Are you sure you want to clear all tasks?")) {
               //first way is to set innerHTML to empty
    //         taskList.innerHTML = "";
    //     }
    // }

    
    if(taskList.innerHTML == ""){
        alert("No task to clear")
    } else {
        if (confirm("Are you sure you want to clear all tasks?")) {
            while (taskList.firstChild) {
                //second way is to loop through the tasks and remove the children
                taskList.removeChild(taskList.firstChild);
            }
        }
    }
    //use whichever one you want, the second method is faster, but really not noticeable
}

//filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();//set the text input to lower case

    //loop each task
    document.querySelectorAll('.collectionItem').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'flex'
            } else {
                task.style.display = 'none';
            }
        }
    )
}

