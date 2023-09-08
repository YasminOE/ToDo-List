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

  document.addEventListener('DOMContentLoaded', function () {
    const { taskManager } = handleTask(); // Initialize your task manager once the DOM is ready

    handleViews(taskManager);

    let successAddBtn = addTaskBlock.querySelector('#add');

    addBtn.addEventListener('click', () => {
      addNewTask(taskManager, addTaskBlock, taskBlock, taskArea, successAddBtn);


    });

    headerAddTaskBtn.addEventListener('click', () => {
      addNewTask(taskManager, addTaskBlock, taskBlock, taskArea, successAddBtn);
    });
  });
}
