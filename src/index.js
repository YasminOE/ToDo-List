import _ from 'lodash';
import './style.css';
import handleTask, { addNewTask } from './modules/task-handler';
import handleViews from './modules/views';
import createInitialPageStructure from './modules/initial-load-page';

init();

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
