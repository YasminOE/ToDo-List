import _ from"lodash";import"./style.css";import handleTask from"./modules/task-handler";import handleViews from"./modules/views";function init(){const s=handleTask();handleViews(s)}init();