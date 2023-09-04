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
    editButton.addEventListener('click', () => {
      // Toggle edit mode for the task block
      taskBlock.classList.toggle('edit-mode');

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
  const {taskManager, edit} = handleTask();
  handleViews(taskManager);

  console.log(edit);
  
 let successAddBtn = addTaskBlock.querySelector('#add');


  addBtn.addEventListener('click', () => {
    addNewTask(taskManager,addTaskBlock, taskBlock, taskArea, successAddBtn);
  });

}
