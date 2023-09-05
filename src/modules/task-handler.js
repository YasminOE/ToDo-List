// import date library for due date
import { addDays } from "date-fns";
import { createNewTaskBlock } from "..";

export function Task(taskName, description, dueDate, priority, type) {
  const priorityTypes = ['priorityOne', 'priorityTwo', 'priorityThree', 'priorityFour'];
  const taskType = ['inbox', 'home', 'projects'];

  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate || addDays(new Date(), 0);
  this.priority = priorityTypes[priority];
  this.type = taskType[type];
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
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

export function addNewTask(manager, addBlock, taskBlock, area, btn) {

  btn.addEventListener('click', () => {
    // this os the taskBlock = createaddBlock()
    const taskName = document.getElementById('task-name').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('priority-type').value;
    const type = document.getElementById('task-type').value;


// Create a new task instance
let newTask = new Task(taskName, description, dueDate, priority, type);
// Add the new task to the manager's tasks array
manager.addTask(newTask);
const newTaskBlock = createNewTaskBlock(newTask);

  // Call the callback function to create the new task block
  // createNewTaskBlock(newTask);

   console.log(newTaskBlock);



// // Append the new taskBlock to the area
  area.appendChild(newTaskBlock);


   // Reset input fields
   const today = new Date();
   const setToday = today.toISOString().split('T')[0];
   document.getElementById('task-name').value = '';
   document.getElementById('task-description').value = '';
   document.getElementById('task-due-date').value = setToday;
   document.getElementById('priority-type').value = 'P1';
   document.getElementById('task-type').value = 'Inbox';

let editBtn = newTaskBlock.querySelector('#edit');
let deleteButton = newTaskBlock.querySelector('#delete');
let actions = newTaskBlock.querySelector('#task-action'); 

console.log(editBtn, deleteButton);
// disableEdit;
function disableEditing() {
  const elementsToDisable = document.querySelectorAll('#taskName, #description, #due-date, #task-priority-type, #type');
  elementsToDisable.forEach(element => {
    element.disabled = true;
  });
}

function enableEditing() {
  const elementsToEnable = document.querySelectorAll('#taskName, #description, #due-date, #task-priority-type, #type');
  elementsToEnable.forEach(element => {
    element.disabled = false;
  });
}

disableEditing();

editBtn.addEventListener('click', () => {
enableEditing();
editBtn.classList.add('active');
newTaskBlock.classList.add('edit-mode');
actions.style.visibility = 'visible';
// taskBlock = document.querySelector('#a-task');
console.log(editBtn);

// Store original values
let originalTaskName = '';
let originalDescription = '';
let originalDueDate = '';
let originalPriority = '';
let originalType = '';

 // Track the edit mode state
// Store the original values when entering edit mode
originalTaskName = newTaskBlock.querySelector('#taskName').value;
originalDescription = newTaskBlock.querySelector('#description').value;
originalDueDate = newTaskBlock.querySelector('#due-date').value;
originalPriority = newTaskBlock.querySelector('#task-priority-type').value;
originalType = newTaskBlock.querySelector('#type').value;
// Function to toggle edit mode


let cancelBtn = document.querySelector('#cancel-btn');
let saveBtn = document.querySelector('#edit-btn'); 

console.log(cancelBtn, saveBtn);

if (cancelBtn && saveBtn) {
  // Add event listeners directly to both buttons
  saveBtn.addEventListener('click', () => {
    const newTaskName = newTaskBlock.querySelector('#taskName').value;
    const newDescription = newTaskBlock.querySelector('#description').value;
    const newDueDate = newTaskBlock.querySelector('#due-date').value;
    const newPriority = newTaskBlock.querySelector('#task-priority-type').value;
    const newType = newTaskBlock.querySelector('#type').value;
  
    // Update only the fields that have changed
    // TODO: accept null values ad newTaskInput
    if (newTaskName !== originalTaskName || newTaskName === null) {
     document.getElementById('task-name').value = newTaskName;
    }
   if (newDescription !== originalDescription || newDescription === null) {
     document.getElementById('task-description').value = newDescription;
   }
    if (newDueDate !== originalDueDate || newDueDate === null) {
      document.getElementById('task-due-date').value = newDueDate;
   }
   if (newPriority !== originalPriority || newPriority === null) {
     document.getElementById('priority-type').value = newPriority;
    }
    if (newType !== originalType || newType === null) {
      document.getElementById('task-type').value = newType;
    }
  
    // Disable editing again
    editBtn.classList.remove('active');
    newTaskBlock.classList.remove('edit-mode');
    actions.style.visibility = 'hidden';

    // actions.style.visibility = 'hidden';
    // editBtn.classList.remove('active');
    // newTaskBlock.classList.remove('edit-mode');
    disableEditing();
  });

  cancelBtn.addEventListener('click', () => {
    // Restore the original values
    newTaskBlock.querySelector('#taskName').value = originalTaskName;
    newTaskBlock.querySelector('#description').value = originalDescription;
    newTaskBlock.querySelector('#due-date').value = originalDueDate;
    newTaskBlock.querySelector('#task-priority-type').value = originalPriority;
    newTaskBlock.querySelector('#type').value = originalType;
  
    // Disable editing again
    editBtn.classList.remove('active');
    newTaskBlock.classList.remove('edit-mode');
    actions.style.visibility = 'hidden';

    // actions.style.visibility = 'hidden';
    // editBtn.classList.remove('active');
    // newTaskBlock.classList.remove('edit-mode');
    disableEditing();      
  });
}
return {saveBtn, cancelBtn};

  // enableEdit;

});

deleteButton.addEventListener('click', () => {
  // Remove the task from the manager when the user deletes it
  let taskIndex = manager.tasks.findIndex(task => task.taskName === taskName);
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



export default function handleTask() {
  
  const taskManager = new TaskManager();

  taskManager.addTask(new Task('add task test', 'add test', new Date(), '1', '2'));


  taskManager.tasks.forEach(task => console.log(task));

  taskManager.updateDueDate('add task test', addDays(new Date(), 7));

  taskManager.updateTask('add another task test', { description: 'Updated description', priority: 'priorityOne' });

  console.log(taskManager.tasks);
  
  // const edit = showEditTask();
  // edit;

  // const enableEdit = enableEditing();
  // const disableEdit = disableEditing();
  
  // const deleteTask = deleteTask();
  // deleteTask;

  


  return {taskManager};
}
