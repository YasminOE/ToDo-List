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
    const taskName = document.getElementById('task-name').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('priority-type').value;
    const type = document.getElementById('task-type').value;


// Create a new task instance
let newTask = new Task(taskName, description, dueDate, priority, type);
// Add the new task to the manager's tasks array
manager.addTask(newTask);
const newTaskBlock = block;

newTaskBlock.querySelector('#taskName').value = taskName;
newTaskBlock.querySelector('#description').value = description;
newTaskBlock.querySelector('#due-date').value = dueDate;
newTaskBlock.querySelector('#task-priority-type').value = priority;
newTaskBlock.querySelector('#type').value = type;


  // Call the callback function to create the new task block
  // createNewTaskBlock(newTask);

   console.log(newTaskBlock);



// // Append the new taskBlock to the area
  area.appendChild(newTaskBlock);

  // Pass the edit button of the new task block
  const editBtn = newTaskBlock.querySelector('#edit');
  showEditTask(editBtn);
  console.log('iam working');

  //  // Reset input fields
  //  const today = new Date();
  //  const setToday = today.toISOString().split('T')[0];
  //  document.getElementById('task-name').value = '';
  //  document.getElementById('task-description').value = '';
  //  document.getElementById('task-due-date').value = setToday;
  //  document.getElementById('priority-type').value = 'P1';
  //  document.getElementById('task-type').value = 'Inbox';
let deleteButton = newTaskBlock.querySelector('#delete');
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
console.log(manager)
return btn;
}


export function showEditTask(editBtn) {
  // document.addEventListener('DOMContentLoaded', function () {
    console.log('the editing is  working');
    const theTaskBlock = document.querySelector('#a-task');
     editBtn = document.querySelector('#edit');
    const actionsSec = theTaskBlock.querySelector('#task-action');
    console.log(actionsSec);
  
    console.log(editBtn);

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
    
    // Call disableEditing to initially disable editing
    disableEditing();
    
    // Store original values
    let originalTaskName ;
    let originalDescription ;
    let originalDueDate ;
    let originalPriority ;
    let originalType ;
  
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
        originalTaskName = theTaskBlock.querySelector('#taskName').value;
        originalDescription = theTaskBlock.querySelector('#description').value;
        originalDueDate = theTaskBlock.querySelector('#due-date').value;
        originalPriority = theTaskBlock.querySelector('#task-priority-type').value;
        originalType = theTaskBlock.querySelector('#type').value;
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
    
  
    const cancelBtn = theTaskBlock.querySelector('#cancel-btn');
    const saveBtn = theTaskBlock.querySelector('#edit-btn'); // Corrected button ID
  
    console.log(cancelBtn, saveBtn);
  
    // if (cancelBtn && saveBtn) {
      // Add event listeners directly to both buttons
      saveBtn.addEventListener('click', () => {
        const newTaskName = theTaskBlock.querySelector('#taskName').value;
        const newDescription = theTaskBlock.querySelector('#description').value;
        const newDueDate = theTaskBlock.querySelector('#due-date').value;
        const newPriority = theTaskBlock.querySelector('#task-priority-type').value;
        const newType = theTaskBlock.querySelector('#type').value;
        
        // Update only the fields that have changed
        if (newTaskName !== originalTaskName) {
          document.getElementById('task-name').value = newTaskName ? newTaskName : '';
        }
        if (newDescription !== originalDescription) {
          document.getElementById('task-description').value = newDescription ? newDescription : '';
        }
        if (newDueDate !== originalDueDate) {
          document.getElementById('task-due-date').value = newDueDate ? newDueDate : setToday;
        }
        if (newPriority !== originalPriority) {
          document.getElementById('priority-type').value = newPriority ? newPriority : 'P1';
        }
        if (newType !== originalType) {
          document.getElementById('task-type').value = newType ? newType : 'inbox';
        }
        
        // Disable editing again
        toggleEditMode();
        disableEditing();
      });
      
      cancelBtn.addEventListener('click', () => {
        // Restore the original values
        theTaskBlock.querySelector('#taskName').value = originalTaskName;
        theTaskBlock.querySelector('#description').value = originalDescription;
        theTaskBlock.querySelector('#due-date').value = originalDueDate;
        theTaskBlock.querySelector('#task-priority-type').value = originalPriority;
        theTaskBlock.querySelector('#type').value = originalType;
      
        // Disable editing again
        toggleEditMode();
        disableEditing();        
      });
    // }
    return toggleEditMode; // Return the toggleEditMode function
  // });
}

// export function deleteTask(){
//   document.addEventListener('DOMContentLoaded', function() {
//     const taskBlock = document.querySelector('#a-task');
//     const deleteIcon = document.querySelector('#delete');
//     const taskArea = document.querySelector('#task-area');
//     deleteIcon.addEventListener('click', () => {
//       taskArea.removeChild(taskBlock);
//     })
//     return 1;

//   });
// }





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
