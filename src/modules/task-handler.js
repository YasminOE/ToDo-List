// Import necessary libraries and functions
import { addDays, isToday } from "date-fns";
import { createTaskBlock } from "./initial-load-page";

// Define the Task class
export function Task(taskName, description, dueDate, priority, type) {
  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate || addDays(new Date(), 0);
  this.priority = priority;
  this.type = type;
  this.completed = false; // Add a completed property with an initial value of false
}

// Define the TaskManager class
export class TaskManager {
  constructor() {
    // Load tasks from local storage if available, or initialize an empty array
    this.tasks = this.loadTasksFromLocalStorage() || [];
  }

  loadTasksFromLocalStorage() {
    // Retrieve and deserialize tasks from local storage
    const tasksJSON = localStorage.getItem('tasks');
    return JSON.parse(tasksJSON);
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task) {
    this.tasks.push(task);
    this.updateLocalStorage(); // Update local storage
  }

  removeTask(taskName) {
    const index = this.tasks.findIndex(task => task.taskName === taskName);

    if (index !== -1) {
      const removedTask = this.tasks.splice(index, 1);
      console.log(`${removedTask[0].taskName} has been removed`);
      this.updateLocalStorage(); // Update local storage
    }
  }

  updateDueDate(taskName, newDueDate) {
    const task = this.tasks.find(task => task.taskName === taskName);

    if (task) {
      task.dueDate = newDueDate;
      console.log(`${task.taskName}'s due date has been updated to ${newDueDate}`);
      this.updateLocalStorage(); // Update local storage
    }
  }

  updateTask(taskName, updatedProperties) {
    const task = this.tasks.find(task => task.taskName === taskName);

    if (task) {
      Object.assign(task, updatedProperties);
      console.log(`${task.taskName}'s information has been updated`);
      this.updateLocalStorage(); // Update local storage
    }
  }
}

// Define a function to add a new task
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
    newTask.completed = false; // Set completed property to false for new tasks

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
    // Append the new taskBlock to the area
    area.appendChild(newTaskBlock);
  //  completeTask(newTaskBlock);
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

// Define a function to disable editing
function disableEditing(taskBlock) {
  const elementsToDisable = taskBlock.querySelectorAll('.taskName, .description, .due-date, .task-priority-type, .type');
  elementsToDisable.forEach(element => {
    element.disabled = true;
  });
}

// Define a function to enable editing
function enableEditing(taskBlock) {
  const elementsToEnable = taskBlock.querySelectorAll('.taskName, .description, .due-date, .task-priority-type, .type');
  elementsToEnable.forEach(element => {
    element.disabled = false;
  });
}
// Define a function to toggle edit mode
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

function completeTask(completeBlocks, manager) {
  // manager = new TaskManager();
  completeBlocks.forEach(completeBlock => {
    let completeName = completeBlock.querySelector('.taskName');
    let completeBtn = completeBlock.querySelector('.complete');
    
    completeBtn.addEventListener('click', () => {
      completeBtn.classList.add('after');
      completeName.classList.add('done');
      
      // Find the task in the manager's tasks array and mark it as completed
      let taskName = completeBlock.querySelector('.taskName').value;
      let task = manager.tasks.find(task => task.taskName === taskName);
      if (task) {
        task.completed = true;
        manager.updateLocalStorage(); // Update local storage
      }
    });
  });
}



export function displayTasks(manager, block, area, types, view) {
  area = document.querySelector('#tasks-area');
  // Remove existing task blocks (if any)
  const existingTaskBlocks = area.querySelectorAll('.a-task');
  block = createTaskBlock();
  existingTaskBlocks.forEach(taskBlock => {
    area.removeChild(taskBlock);
  });

  // Filter tasks based on types and view
  const filteredTasks = manager.tasks.filter(task => {
    if (view === 'today') {
      // Filter tasks for today's view
      if (types.includes(task.type) && isToday(new Date(task.dueDate))) {
        return true;
      }
    } else if (view === 'upcoming') {
      // Filter tasks for upcoming view
      if (types.includes(task.type) && !isToday(new Date(task.dueDate))) {
        return true;
      }
    } else {
      // Filter tasks for other views (inbox, Home, My work)
      return types.includes(task.type);
    }
    return false;
  });

  // Create an array to store the task blocks
  const taskBlocks = [];

  // Loop through the filtered tasks and create HTML elements for each task
  filteredTasks.forEach(task => {
    let taskBlock = block.cloneNode(true);
  
    // Set the values in the task block
    taskBlock.querySelector('.taskName').value = task.taskName;
    taskBlock.querySelector('.description').value = task.description;
    taskBlock.querySelector('.due-date').value = task.dueDate;
    taskBlock.querySelector('.task-priority-type').value = task.priority;
    taskBlock.querySelector('.type').value = task.type;
  
    if (task.completed) {
      // If the task is completed, add the necessary CSS classes
      let completeBtn = taskBlock.querySelector('.complete');
      let taskName = taskBlock.querySelector('.taskName');
      completeBtn.classList.add('after');
      taskName.classList.add('done');
    }

    // Append the task block to the task container
    area.appendChild(taskBlock);
    taskBlocks.push(taskBlock); // Add the task block to the array

    // Rest of your code...

    let editBtn = taskBlock.querySelector('.edit');
    let actionsSec = taskBlock.querySelector('.task-action');
    editBtn.classList.remove('active');
    actionsSec.style.visibility = 'hidden';
    taskBlock.classList.remove('edit-mode');

    editBtn.addEventListener('click', () => {
      // Update the edit mode when the edit button is clicked
      toggleEditMode(editBtn, actionsSec, taskBlock);
      // Enable editing (if needed)
      enableEditing(taskBlock);
      // Handle editing (if needed)
      const editIt = handleEditing(manager, taskBlock);
      editIt;
      manager.updateLocalStorage();
    });

    let saveTheTask = taskBlock.querySelector('.edit-btn')
    saveTheTask.addEventListener('click', () =>{
      editBtn.classList.remove('active');
      actionsSec.style.visibility = 'hidden';
      taskBlock.classList.remove('edit-mode');
    });

    let cancelTheTask = taskBlock.querySelector('.cancel-btn');
    cancelTheTask.addEventListener('click', () => {
      editBtn.classList.remove('active');
      actionsSec.style.visibility = 'hidden';
      taskBlock.classList.remove('edit-mode');
    });

    let deleteButton = taskBlock.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
      // Get the task name from the task block
      let taskName = taskBlock.querySelector('.taskName').value;

      // Remove the task from the manager when the user deletes it
      let taskIndex = manager.tasks.findIndex(task => task.taskName === taskName);

      if (taskIndex !== -1) {
        manager.removeTask(taskName);
      }

      area.removeChild(taskBlock);
    });
  });

  // Apply complete button functionality to all task blocks
  completeTask(taskBlocks, manager);

  // ...
}





export default function handleTask() {
  let theTaskBlock = document.querySelector('#tasks-area');
  const taskManager = new TaskManager();  
  taskManager.tasks.forEach(task => console.log(task));
  displayTasks(taskManager, createTaskBlock ,theTaskBlock, 'inbox');

  return {taskManager};

  // localStorage.clear();
}
