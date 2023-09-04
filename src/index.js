import _ from 'lodash';
import './style.css';
import handleTask from './modules/task-handler';
import handleViews from './modules/views';
import createInitialPageStructure from './modules/initial-load-page'; // Import the createInitialPageStructure function
import { Task } from './modules/task-handler';

init();



function addNewTask(taskManager, addTaskBlock, taskBlock, taskArea, successAddBtn) {
  successAddBtn.addEventListener('click', () => {
    // Get values from the addTaskBlock
    const taskName = document.getElementById('task-name').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('priority-type').value;
    const type = document.getElementById('task-type').value;

    // Create a new task instance
    let newTask = new Task(taskName, description, dueDate, priority, type);

    // Add the new task to the TaskManager's tasks array
    taskManager.addTask(newTask);
    console.log(newTask);

    // Create a new taskBlock and populate its inputs
    taskBlock.querySelector('#taskName').value = taskName;
    taskBlock.querySelector('#description').value = description;
    taskBlock.querySelector('#due-date').value = dueDate;
    taskBlock.querySelector('#task-priority-type').value = priority;
    taskBlock.querySelector('#type').value = type;

    // Append the new taskBlock to the taskArea
    taskArea.appendChild(taskBlock);

    let editButton = taskBlock.querySelector('#edit');
    let deleteButton = taskBlock.querySelector('#delete');

    console.log(editButton, deleteButton);
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

    editButton.addEventListener('click', () => {
    enableEditing();
    const actionsSec = document.querySelector('#task-action');
    editButton.classList.add('active');
    taskBlock.classList.add('edit-mode');
    actionsSec.style.visibility = 'visible';
    // taskBlock = document.querySelector('#a-task');
    console.log(editButton);
 
    // Store original values
    let originalTaskName = '';
    let originalDescription = '';
    let originalDueDate = '';
    let originalPriority = '';
    let originalType = '';
  
     // Track the edit mode state
    // Store the original values when entering edit mode
    originalTaskName = taskBlock.querySelector('#taskName').value;
    originalDescription = taskBlock.querySelector('#description').value;
    originalDueDate = taskBlock.querySelector('#due-date').value;
    originalPriority = taskBlock.querySelector('#task-priority-type').value;
    originalType = taskBlock.querySelector('#type').value;
    // Function to toggle edit mode
    
  
    const cancelBtn = document.querySelector('#cancel-btn');
    const saveBtn = document.querySelector('#edit-btn'); 
  
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
        actionsSec.style.visibility = 'hidden';
        editButton.classList.remove('active');
        taskBlock.classList.remove('edit-mode');
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
        actionsSec.style.visibility = 'hidden';
        editButton.classList.remove('active');
        taskBlock.classList.remove('edit-mode');
        disableEditing();      
      });
    }
    return {saveBtn, cancelBtn};

      // enableEdit;

    });

    deleteButton.addEventListener('click', () => {
      // Remove the task from the TaskManager when the user deletes it
      let taskIndex = taskManager.tasks.findIndex(task => task.taskName === taskName);
      if (taskIndex !== -1) {
        taskManager.removeTask(taskName);
      }
      taskArea.removeChild(taskBlock);
    });

    taskArea.removeChild(addTaskBlock);
    
    // Clear input fields or perform any necessary updates
    // Optionally, you can re-render the task list or update the view
    // based on the new task added.
  });

  return successAddBtn;
}



function init() {
  const {
    addBtn,
    taskArea,
    addTaskBlock,
    taskBlock,  
  } = createInitialPageStructure(); // Create the initial page structure
  const {taskManager} = handleTask();
  handleViews(taskManager);

  // taskArea.appendChild(taskBlock);
  
 let successAddBtn = addTaskBlock.querySelector('#add');


  addBtn.addEventListener('click', () => {
    addNewTask(taskManager,addTaskBlock, taskBlock, taskArea, successAddBtn);
  });

}
