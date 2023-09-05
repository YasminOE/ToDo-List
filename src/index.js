import _ from 'lodash';
import './style.css';
import handleTask, { addNewTask } from './modules/task-handler';
import handleViews from './modules/views';
import createInitialPageStructure from './modules/initial-load-page';

init();

// export function createNewTaskBlock(taskData) {
//   // document.addEventListener('DOMContentLoaded', function () {
//   // Create and append a new task block in the UI based on taskData
//   // if(taskArea.contains(addTaskBlock)){
//      let block = createInitialPageStructure().taskBlock;
//     console.log(block);
//     // Populate the new task block with taskData
//     block.querySelector('#taskName').value = taskData.taskName;
//     block.querySelector('#description').value = taskData.description;
//     block.querySelector('#due-date').value = taskData.dueDate;
//     block.querySelector('#task-priority-type').value = taskData.priority;
//     block.querySelector('#type').value = taskData.type;
  
    
//     createInitialPageStructure().taskArea.appendChild(block);
//     return block;


// }



function init() {
  const {
    taskArea,
    addBtn,
    addTaskBlock,
    headerAddTaskBtn,
    taskBlock,
  } = createInitialPageStructure();

  const { taskManager } = handleTask(); // Pass the callback function

  handleViews(taskManager);

  let successAddBtn = addTaskBlock.querySelector('#add');


  addBtn.addEventListener('click', () => { 

    addNewTask(taskManager, addTaskBlock, taskBlock, taskArea, successAddBtn);

  });

  headerAddTaskBtn.addEventListener('click', () => {

    addNewTask(taskManager, addTaskBlock, taskBlock, taskArea, successAddBtn );
  
   });




}
