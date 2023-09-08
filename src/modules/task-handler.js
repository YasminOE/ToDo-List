// import date library for due date
import { addDays } from "date-fns";
export function Task(taskName, description, dueDate, priority, type) {
  // const priorityTypes = ['P1', 'P2', 'P3', 'P4'];
  // const taskType = ['inbox', 'Home 🏡', 'My work 🎯'];

  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate || addDays(new Date(), 0);
  this.priority = priority;
  this.type = type;
}

class TaskManager {
  constructor() {
    // Load tasks from local storage if available, or initialize an empty array
    this.tasks = this.loadTasksFromLocalStorage() || [];
  }

  addTask(task) {
    this.tasks.push(task);
    this.saveTasksToLocalStorage(); // Save tasks to local storage after adding
  }
  

  saveTasksToLocalStorage() {
    // Serialize and save the tasks array to local storage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasksFromLocalStorage() {
    // Retrieve and deserialize tasks from local storage
    const tasksJSON = localStorage.getItem('tasks');
    return JSON.parse(tasksJSON);
  }

  removeTask(taskName) {
    const index = this.tasks.findIndex(task => task.taskName === taskName);

    if (index !== -1) {
      const removedTask = this.tasks.splice(index, 1);
      console.log(`${removedTask[0].taskName} has been removed`);
    }
  }

  updateDueDate(taskName, newDueDate) {
    const task = this.tasks.find(task => task.taskName === taskName);

    if (task) {
      task.dueDate = newDueDate;
      console.log(`${task.taskName}'s due date has been updated to ${newDueDate}`);
    }
  }

  updateTask(taskName, updatedProperties) {
    const task = this.tasks.find(task => task.taskName === taskName);

    if (task) {
      Object.assign(task, updatedProperties);
      console.log(`${task.taskName}'s information has been updated`);
    }
  }
}

export function addNewTask(manager, addBlock, block, area, btn) {

  btn.addEventListener('click', () => {
     // Get the input values for the new task
     let nameInput = document.querySelector('.task-name').value;
     let descriptionInput = document.querySelector('.task-description').value;
     let dueDateInput = document.querySelector('.task-due-date').value;
     let priorityInput = document.querySelector('.priority-type').value;
     let typeInput = document.querySelector('.task-type').value;
 
     // Create a new task instance with unique properties
     let newTask = new Task(nameInput, descriptionInput, dueDateInput, priorityInput, typeInput);
 
     // Add the new task to the manager's tasks array
     manager.addTask(newTask);
 
     // Create a clone of the task block template
     let newTaskBlock = block.cloneNode(true);

  // Set the values in the new task block
    newTaskBlock.querySelector('.taskName').value = newTask.taskName;
    newTaskBlock.querySelector('.description').value = newTask.description;
    newTaskBlock.querySelector('.due-date').value = newTask.dueDate;
    newTaskBlock.querySelector('.task-priority-type').value = newTask.priority;
    newTaskBlock.querySelector('.type').value = newTask.type;

   console.log(newTaskBlock);
   
   
   // // Append the new taskBlock to the area
   area.appendChild(newTaskBlock);
   disableEditing(newTaskBlock);

    let editBtn = newTaskBlock.querySelector('.edit');
    let actionsSec = newTaskBlock.querySelector('.task-action');
     editBtn.classList.remove('active');
     actionsSec.style.visibility = 'hidden';
     newTaskBlock.classList.remove('edit-mode');

    editBtn.addEventListener('click', () => {
      // Update the edit mode when the edit button is clicked
      toggleEditMode(editBtn, actionsSec, newTaskBlock);
      // Enable editing (if needed)
      enableEditing(newTaskBlock);
      // Handle editing (if needed)
      const editIt = handleEditing(manager, newTaskBlock);
      editIt;
      
    });

    let saveTheTask = newTaskBlock.querySelector('.edit-btn')
    saveTheTask.addEventListener('click', () =>{
      editBtn.classList.remove('active');
      actionsSec.style.visibility = 'hidden';
      newTaskBlock.classList.remove('edit-mode');
    });

    let cancelTheTask = newTaskBlock.querySelector('.cancel-btn');
    cancelTheTask.addEventListener('click', () => {
      editBtn.classList.remove('active');
      actionsSec.style.visibility = 'hidden';
      newTaskBlock.classList.remove('edit-mode');
    });
 
  console.log('iam working');

let deleteButton = newTaskBlock.querySelector('.delete');
deleteButton.addEventListener('click', () => {
  // Remove the task from the manager when the user deletes it
  let taskIndex = manager.tasks.findIndex(task => task.nameInput === newTask.taskName);
  if (taskIndex !== -1) {
    manager.removeTask(taskName);
  }
  area.removeChild(newTaskBlock);
});

area.removeChild(addBlock);

// Clear input fields or perform any necessary updates
// Optionally, you can re-render the task list or update the view
// based on the new task added.
});
return btn;
}

function disableEditing(taskBlock) {
  const elementsToDisable = taskBlock.querySelectorAll('.taskName, .description, .due-date, .task-priority-type, .type');
  elementsToDisable.forEach(element => {
    element.disabled = true;
  });
}

function enableEditing(taskBlock) {
  const elementsToEnable = taskBlock.querySelectorAll('.taskName, .description, .due-date, .task-priority-type, .type');
  elementsToEnable.forEach(element => {
    element.disabled = false;
  });
}

export function toggleEditMode(btn, section, block) {
  let editModeActive = block.classList.contains('edit-mode'); // Check if the block already has the 'edit-mode' class

  editModeActive = !editModeActive; // Toggle the edit mode state

  if (editModeActive) {
    // Enable edit mode
    btn.classList.add('active');
    section.style.visibility = 'visible';
    block.classList.add('edit-mode');
  } else {
    // Disable edit mode
    btn.classList.remove('active');
    section.style.visibility = 'hidden';
    block.classList.remove('edit-mode');
  }
}



export function handleEditing(manager, taskBlock) {
  let save = taskBlock.querySelector('.edit-btn');
  let cancel = taskBlock.querySelector('.cancel-btn');
  let taskNameInput = taskBlock.querySelector('.taskName');
  let descriptionInput = taskBlock.querySelector('.description');
  let dueDateInput = taskBlock.querySelector('.due-date');
  let priorityInput = taskBlock.querySelector('.task-priority-type');
  let typeInput = taskBlock.querySelector('.type');

  let originalTaskName = taskNameInput.value;
  let originalDescription = descriptionInput.value;
  let originalDueDate = dueDateInput.value;
  let originalPriority = priorityInput.value;
  let originalType = typeInput.value;

  save.addEventListener('click', () => {
    let newTaskName = taskNameInput.value;
    let newDescription = descriptionInput.value;
    let newDueDate = dueDateInput.value;
    let newPriority = priorityInput.value;
    let newType = typeInput.value;

    let updatedProperties = {
      taskName: newTaskName,
      description: newDescription,
      dueDate: newDueDate,
      priority: newPriority,
      type: newType
    };

    manager.updateTask(originalTaskName, updatedProperties);

    console.log(manager);
    // Exit edit mode
    disableEditing(taskBlock);
  });

  cancel.addEventListener('click', () => {
    // Restore original values
    taskNameInput.value = originalTaskName;
    descriptionInput.value = originalDescription;
    dueDateInput.value = originalDueDate;
    priorityInput.value = originalPriority;
    typeInput.value = originalType;

    // Exit edit mode
    disableEditing(taskBlock);
  });

  enableEditing(taskBlock);
}

function displayTasks(manager, block, area) {
  // Get the task container element within the area
  const taskContainer = area.querySelector('.task-container');

  // Remove existing task blocks (if any)
  const existingTaskBlocks = taskContainer.querySelectorAll('.task-block');
  existingTaskBlocks.forEach(taskBlock => {
    taskContainer.removeChild(taskBlock);
  });

  // Loop through the tasks in the manager and create HTML elements for each task
  manager.tasks.forEach(task => {
    let taskBlock = block.cloneNode(true);

    // Set the values in the task block
    taskBlock.querySelector('.taskName').value = task.taskName;
    taskBlock.querySelector('.description').value = task.description;
    taskBlock.querySelector('.due-date').value = task.dueDate;
    taskBlock.querySelector('.task-priority-type').value = task.priority;
    taskBlock.querySelector('.type').value = task.type;

    // Append the task block to the task container
    taskContainer.appendChild(taskBlock);
    disableEditing(taskBlock);

    // Add event listeners (edit, save, delete) here as needed
    // ...
  });
}



export default function handleTask() {
  
  const taskManager = new TaskManager();  
  taskManager.tasks.forEach(task => console.log(task));
  return {taskManager};

  // localStorage.clear();
}
