// Define UI Vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');


// Load all event listeners
loadEvenListeners();

// Make functionality to load all event liseners
 function loadEvenListeners(){
  //DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);

   //Add task event
   form.addEventListener('submit', addTask);

   //Remove task event
   taskList.addEventListener('click', removeTask);

   //Clear task event
   clearBtn.addEventListener('click', clearTasks);

   //Filter task events
   filter.addEventListener('keyup', filterTasks);
}

// Get tasks from local storage
function getTasks(){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create the li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(task));

    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append link to li
    li.appendChild(link);
    // console.log(li);

    //Append li to ul
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }

  // Create the li element
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content';
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append link to li
  li.appendChild(link);
  // console.log(li);

  //Append li to ul
  taskList.appendChild(li);

  // Store tasks into Local Storage
  storeTaskInLocalStorage(taskInput.value);

  //Clear input field
  taskInput.value = '';

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Tasks
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();
    // Remove Tasks from Local Storage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//Remove from LS
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if (taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks(){
  // Two ways to clear tasks: 
      // 1. Easy - empty the string
      // 2. Faster - loop through (while) and call removeChild()
  
  // 1. Easy
  // taskList.innerHTML = '';

  // 2. Faster (runs faster in browser)
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // Clear Tasks from Local Storage
  clearTasksFromLocalStorage();

}

// Clear Tasks from LS
function clearTasksFromLocalStorage(){
  localStorage.clear();
}


//Filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}