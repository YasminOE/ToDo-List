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

export function addNewTask(manager, addBlock, block, area, btn) {

  btn.addEventListener('click', () => {
    // this os the taskBlock = createaddBlock()
    let nameInput = document.querySelector('.task-name').value;
    let descriptionInput = document.querySelector('.task-description').value;
    let dueDateInput = document.querySelector('.task-due-date').value;
    let priorityInput = document.querySelector('.priority-type').value;
    let typeInput = document.querySelector('.task-type').value;


// Create a new task instance
let newTask = new Task(nameInput, descriptionInput, dueDateInput, priorityInput, typeInput);
// Add the new task to the manager's tasks array
manager.addTask(newTask);
let newTaskBlock = block.cloneNode(true);

newTaskBlock.querySelector('.taskName').value = nameInput;
newTaskBlock.querySelector('.description').value = descriptionInput;
newTaskBlock.querySelector('.due-date').value = dueDateInput;
newTaskBlock.querySelector('.task-priority-type').value = priorityInput;
newTaskBlock.querySelector('.type').value = typeInput;


  // Call the callback function to create the new task block
  // createNewTaskBlock(newTask);

   console.log(newTaskBlock);
   
   
   // // Append the new taskBlock to the area
   area.appendChild(newTaskBlock);
   let editBtn = newTaskBlock.querySelector('.edit');
   let actionsSec = newTaskBlock.querySelector('.task-action');
  //  toggleEditMode(editBtn, actionsSec, newTaskBlock);
   disableEditing();
  
   editBtn.addEventListener('click', () => {

     console.log(editBtn, actionsSec , newTaskBlock);
    //  toggleEditMode(editBtn, actionsSec, newTaskBlock);
    enableEditing();
    const editIt = handelEdting(manager);
    editIt;
   });
   
  //  let saveTheEdit = newTaskBlock.querySelector('.edit-btn');
  //  saveTheEdit.addEventListener('click', toggleEditMode(editBtn, actionsSec, newTaskBlock));
 
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

function disableEditing() {
  const elementsToDisable = document.querySelectorAll('.taskName, .description, .due-date, .task-priority-type, .type');
  elementsToDisable.forEach(element => {
    element.disabled = true;
  });
}

function enableEditing() {
  const elementsToEnable = document.querySelectorAll('.taskName, .description, .due-date, .task-priority-type, .type');
  elementsToEnable.forEach(element => {
    element.disabled = false;
  });
}

export function toggleEditMode(btn, section,block) {
  let editModeActive = false
      editModeActive = !editModeActive; // Toggle the edit mode state
      
  
      if (editModeActive) {
        // Enable edit mode
        btn.classList.add('active');
        section.style.visibility = 'visible';
        block.classList.add('edit-mode');
  
        // Store the original values when entering edit mode
   
      } else {
        // Disable edit mode
        btn.classList.remove('active');
        section.style.visibility = 'hidden';
        block.classList.remove('edit-mode');
      }
}

export  function handelEdting(manager){
  let block = document.querySelector('.a-task');
  let save = block.querySelector('.edit-btn');
  let cancel = block.querySelector('.cancel-btn');

  console.log(block, save, cancel);

  save.addEventListener('click', () => {
    let newTaskName = block.querySelector('.taskName').value; // Get the new task name as a string
    let newDescription = block.querySelector('.description').value;
    let newDueDate = block.querySelector('.due-date').value;
    let newPriority = block.querySelector('.task-priority-type').value;
    let newType = block.querySelector('.type').value;

    let updatedProperties = {
      taskName: newTaskName,
      description: newDescription,
      dueDate: newDueDate,
      priority: newPriority,
      type: newType
    };

    console.log('I am for updating properties and I am working!');
    manager.updateTask(newTaskName, updatedProperties); // Pass the task name as a string
    console.log('Done');
    console.log(manager);
  });

  cancel.addEventListener('click', () => {
    let originalTaskName = block.querySelector('.taskName').value;
    let originalDescription = block.querySelector('.description').value;
    let originalDueDate = block.querySelector('.due-date').value;
    let originalPriority = block.querySelector('.task-priority-type').value;
    let originalType = block.querySelector('.type').value;
    console.log(originalTaskName, originalDescription, originalDueDate, originalPriority, originalType);
  
    console.log(block.querySelector('.task-name'));
    console.log(block.querySelector('.task-description'));
    console.log(block.querySelector('.task-due-date'));
    console.log(block.querySelector('.priority-type'));
    console.log(block.querySelector('.task-type'));

    block.querySelector('.taskName').value = originalTaskName;
    block.querySelector('.description').value = originalDescription;
    block.querySelector('.due-date').value = originalDueDate;
    block.querySelector('.task-priority-type').value = originalPriority;
    block.querySelector('.type').value = originalType;
    console.log(manager);
  });
return block;

}


export default function handleTask() {
  
  const taskManager = new TaskManager();  
  taskManager.tasks.forEach(task => console.log(task));
  return {taskManager};
}
