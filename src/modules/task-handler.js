// import date library for due date
import { addDays } from "date-fns";
import { createNewTaskBlock } from "..";

export function Task(taskName, description, dueDate, priority, type) {
  const priorityTypes = ['P1', 'P2', 'P3', 'P4'];
  const taskType = ['inbox', 'Home 🏡', 'My work 🎯'];

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

export function addNewTask(manager, addBlock, block, area, btn) {

  btn.addEventListener('click', () => {
    // this os the taskBlock = createaddBlock()
    const nameInput = document.querySelector('.task-name').value;
    const descriptionInput = document.querySelector('.task-description').value;
    const dueDateInput = document.querySelector('.task-due-date').value;
    const priorityInput = document.querySelector('.priority-type').value;
    const typeInput = document.querySelector('.task-type').value;


// Create a new task instance
let newTask = new Task(nameInput, descriptionInput, dueDateInput, priorityInput, typeInput);
// Add the new task to the manager's tasks array
manager.addTask(newTask);
const newTaskBlock = block.cloneNode(true);

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

  // Pass the edit button of the new task block
  let editBtn = newTaskBlock.querySelector('.edit');
  showEditTask(editBtn, manager);
  console.log('iam working');

  //  // Reset input fields
  //  const today = new Date();
  //  const setToday = today.toISOString().split('T')[0];
  //  document.getElementById('task-name').value = '';
  //  document.getElementById('task-description').value = '';
  //  document.getElementById('task-due-date').value = setToday;
  //  document.getElementById('priority-type').value = 'P1';
  //  document.getElementById('task-type').value = 'Inbox';
let deleteButton = newTaskBlock.querySelector('.delete');
deleteButton.addEventListener('click', () => {
  // Remove the task from the manager when the user deletes it
  let taskIndex = manager.tasks.findIndex(task => task.nameInput === task.taskName);
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
console.log(manager)
return btn;
}


export function showEditTask(editBtn, manager) {
  // document.addEventListener('DOMContentLoaded', function () {
    console.log('the editing is  working');
    const theTaskBlock = document.querySelector('.a-task');
     editBtn = document.querySelector('.edit');
    let actionsSec = theTaskBlock.querySelector('.task-action');
    console.log(actionsSec);
  
    console.log(editBtn);

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
    
    // Call disableEditing to initially disable editing
    disableEditing();
    
    // Store original values
    let originalTaskName = '' ;
    let originalDescription= '' ;
    let originalDueDate= '' ;
    let originalPriority= '' ;
    let originalType= '' ;
  
    let editModeActive = true; // Track the edit mode state
  
    // Function to toggle edit mode
    function toggleEditMode() {
      editModeActive = !editModeActive; // Toggle the edit mode state
  
      if (editModeActive) {
        // Enable edit mode
        editBtn.classList.add('active');
        actionsSec.style.visibility = 'visible';
        theTaskBlock.classList.add('edit-mode');
  
        // Store the original values when entering edit mode
        originalTaskName = theTaskBlock.querySelector('.taskName').value;
        originalDescription = theTaskBlock.querySelector('.description').value;
        originalDueDate = theTaskBlock.querySelector('.due-date').value;
        originalPriority = theTaskBlock.querySelector('.task-priority-type').value;
        originalType = theTaskBlock.querySelector('.type').value;
      } else {
        // Disable edit mode
        editBtn.classList.remove('active');
        actionsSec.style.visibility = 'hidden';
        theTaskBlock.classList.remove('edit-mode');
      }
    }
    
    toggleEditMode();
    editBtn.addEventListener('click', () => {
      toggleEditMode();
      enableEditing();
    });
    
  
    const cancelBtn = theTaskBlock.querySelector('.cancel-btn');
    const saveBtn = theTaskBlock.querySelector('.edit-btn'); // Corrected button ID
  
    console.log(cancelBtn, saveBtn);
  
    if (cancelBtn && saveBtn) {
      // Add event listeners directly to both buttons
      saveBtn.addEventListener('click', () => {
        console.log(document.querySelector('.task-name'));
        console.log(document.querySelector('.task-description'));
        console.log(document.querySelector('.task-due-date'));
        console.log(document.querySelector('.priority-type'));
        console.log(document.querySelector('.task-type'));

        const newTaskName = theTaskBlock.querySelector('.taskName').value;
        const newDescription = theTaskBlock.querySelector('.description').value;
        const newDueDate = theTaskBlock.querySelector('.due-date').value;
        const newPriority = theTaskBlock.querySelector('.task-priority-type').value;
        const newType = theTaskBlock.querySelector('.type').value;
      
        // Prepare an object with the updated properties
        const updatedProperties = {
          taskName: newTaskName,
          description: newDescription,
          dueDate: newDueDate,
          priority: newPriority,
          type: newType
        };

        // Call the updateTask method of your TaskManager instance
        manager.updateTask(Task.taskName, updatedProperties);
      
        // Update the displayed task information in the UI
        const taskNameElement = document.querySelector('.task-name');
        const descriptionElement = document.querySelector('.task-description');
        const dueDateElement = document.querySelector('.task-due-date');
        const priorityElement = document.querySelector('.priority-type');
        const typeElement = document.querySelector('.task-type');
      
        // Update the elements with the new values
        taskNameElement.textContent = newTaskName;
        descriptionElement.textContent = newDescription;
        dueDateElement.textContent = newDueDate;
        priorityElement.textContent = newPriority;
        typeElement.textContent = newType;
      
        // Optionally, you can also update the input fields to reflect the changes
        document.querySelector('.taskName').value = newTaskName;
        document.querySelector('.description').value = newDescription;
        document.getElementById('due-date').value = newDueDate;
        document.getElementById('task-priority-type').value = newPriority;
        document.getElementById('type').value = newType;
      
        // Disable editing again
        toggleEditMode();
        disableEditing();
      });
      
      
      cancelBtn.addEventListener('click', () => {
        // Restore the original values
        theTaskBlock.querySelector('.taskName').value = originalTaskName;
        theTaskBlock.querySelector('.description').value = originalDescription;
        theTaskBlock.querySelector('.due-date').value = originalDueDate;
        theTaskBlock.querySelector('.task-priority-type').value = originalPriority;
        theTaskBlock.querySelector('.type').value = originalType;
      
        // Disable editing again
        toggleEditMode();
        disableEditing();        
      });
    }
    return toggleEditMode; // Return the toggleEditMode function
  // });
}
// TODO: fix edti functionality





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
