import _ from"lodash";import"./style.css";import handleTask,{addNewTask}from"./modules/task-handler";import handleViews from"./modules/views";import createInitialPageStructure from"./modules/initial-load-page";init();export function createNewTaskBlock(e){let t=createInitialPageStructure().taskBlock;return console.log(t),t.querySelector("#taskName").value=e.taskName,t.querySelector("#description").value=e.description,t.querySelector("#due-date").value=e.dueDate,t.querySelector("#task-priority-type").value=e.priority,t.querySelector("#type").value=e.type,createInitialPageStructure().taskArea.appendChild(t),t}function init(){const{taskArea:e,addBtn:t,addTaskBlock:a,headerAddTaskBtn:r,taskBlock:i}=createInitialPageStructure(),{taskManager:l}=handleTask();handleViews(l);let d=a.querySelector("#add");t.addEventListener("click",(()=>{addNewTask(l,a,i,e,d)})),r.addEventListener("click",(()=>{addNewTask(l,a,i,e,d)}))}