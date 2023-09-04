// import date library for due date
import { addDays } from "date-fns";

// Task Constructor
export function Task(taskName, description, dueDate, priority, type) {
  const priorityTypes = ['priorityOne', 'priorityTwo', 'priorityThree', 'priorityFour'];
  const taskType = ['inbox', 'home', 'projects'];

  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate || addDays(new Date(), 0); // Use the provided dueDate or default to today
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
  // TODO: add project task 
}


export function showEditTask() {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    const taskBlock = document.querySelector('#a-task');
    const editIcon = document.querySelector('#edit');
    const actionsSec = document.querySelector('#task-action');
  
    console.log(editIcon);
    editIcon.classList.add('active');

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
    let originalTaskName = '';
    let originalDescription = '';
    let originalDueDate = '';
    let originalPriority = '';
    let originalType = '';
  
    let editModeActive = false; // Track the edit mode state
  
    // Function to toggle edit mode
    function toggleEditMode() {
      editModeActive = !editModeActive; // Toggle the edit mode state
  
      if (editModeActive) {
        // Enable edit mode
        actionsSec.style.visibility = 'visible';
        editIcon.classList.add('active');
        taskBlock.classList.add('edit-mode');
  
        // Store the original values when entering edit mode
        originalTaskName = taskBlock.querySelector('#taskName').value;
        originalDescription = taskBlock.querySelector('#description').value;
        originalDueDate = taskBlock.querySelector('#due-date').value;
        originalPriority = taskBlock.querySelector('#task-priority-type').value;
        originalType = taskBlock.querySelector('#type').value;
      } else {
        // Disable edit mode
        actionsSec.style.visibility = 'hidden';
        editIcon.classList.remove('active');
        taskBlock.classList.remove('edit-mode');
      }
    }
  
    editIcon.addEventListener('click', () => {
      toggleEditMode();
      enableEditing();
    });
    
  
    const cancelBtn = document.querySelector('#cancel-btn');
    const saveBtn = document.querySelector('#edit-btn'); // Corrected button ID
  
    console.log(cancelBtn, saveBtn);
  
    if (cancelBtn && saveBtn) {
      // Add event listeners directly to both buttons
      saveBtn.addEventListener('click', () => {
        const newTaskName = taskBlock.querySelector('#taskName').value;
        const newDescription = taskBlock.querySelector('#description').value;
        const newDueDate = taskBlock.querySelector('#due-date').value;
        const newPriority = taskBlock.querySelector('#task-priority-type').value;
        const newType = taskBlock.querySelector('#type').value;
      
        // Update only the fields that have changed
        if (newTaskName !== originalTaskName) {
          document.getElementById('task-name').value = newTaskName.value;
        }
        if (newDescription !== originalDescription) {
          document.getElementById('task-description').value = newDescription;
        }
        if (newDueDate !== originalDueDate) {
          document.getElementById('task-due-date').value = newDueDate;
        }
        if (newPriority !== originalPriority) {
          document.getElementById('priority-type').value = newPriority;
        }
        if (newType !== originalType) {
          document.getElementById('task-type').value = newType;
        }
      
        // Disable editing again
        toggleEditMode();
        disableEditing();
      });
  
      cancelBtn.addEventListener('click', () => {
        // Restore the original values
        taskBlock.querySelector('#taskName').value = originalTaskName;
        taskBlock.querySelector('#description').value = originalDescription;
        taskBlock.querySelector('#due-date').value = originalDueDate;
        taskBlock.querySelector('#task-priority-type').value = originalPriority;
        taskBlock.querySelector('#type').value = originalType;
      
        // Disable editing again
        toggleEditMode();
        disableEditing();        
      });
    }
    return toggleEditMode; // Return the toggleEditMode function
  });
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

document.addEventListener('DOMContentLoaded', function () {
  const edit = showEditTask();
  edit;

  // const deleteTask = deleteTask();
  // deleteTask;
});

export default function handleTask() {
  
  const taskManager = new TaskManager();

  taskManager.addTask(new Task('add task test', 'add test', new Date(), '1', '2'));


  taskManager.tasks.forEach(task => console.log(task));

  taskManager.updateDueDate('add task test', addDays(new Date(), 7));

  taskManager.updateTask('add another task test', { description: 'Updated description', priority: 'priorityOne' });

  console.log(taskManager.tasks);
  
  const edit = showEditTask();
  edit;
  
  // const deleteTask = deleteTask();
  // deleteTask;

  return {taskManager, edit};
}
