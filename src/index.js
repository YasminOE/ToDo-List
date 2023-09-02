import _ from 'lodash';
import './style.css';
import handleTask from './modules/task-handler';
import handleViews from './modules/views';
import loadPage from './modules/initial-load-page';


init();

function init() {
  loadPage();
  const taskManager = handleTask();
  handleViews(taskManager);
}
