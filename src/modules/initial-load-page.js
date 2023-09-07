import { secondsInDay } from "date-fns";
import Task from './task-handler';
//  Header builder
function createHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

// Home and search section
  const inboxSec = document.createElement('ul');
  inboxSec.setAttribute('id', 'inbox');
  header.appendChild(inboxSec);

  const homeLi = document.createElement('li');
  const homeIcon = document.createElement('span');
  homeIcon.classList.add('material-symbols-outlined');
  homeIcon.innerHTML = 'home';
  homeLi.appendChild(homeIcon);
  inboxSec.appendChild(homeLi);

  const searchLi = document.createElement('li');
  const searchIcon = document.createElement('span');
  searchIcon.classList.add('material-symbols-outlined');
  searchIcon.innerHTML = 'search';
  searchLi.appendChild(searchIcon);

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.value = '';
  searchInput.placeholder = 'Search';

  searchLi.appendChild(searchInput);
  inboxSec.appendChild(searchLi);

// Logo section
  const logoSec = document.createElement('ul');
  logoSec.setAttribute('id', 'logo');
  header.appendChild(logoSec);

  const logoIcon = document.createElement('img');
  logoIcon.src = './icons/logo1.png';
  logoIcon.alt = 'Logo Icon';
  logoSec.appendChild(logoIcon);

// Account information and profile pic section
  const accountSec = document.createElement('ul');
  accountSec.setAttribute('id', 'account-info');
  header.appendChild(accountSec);

  const addTaskLi = document.createElement('li');
  addTaskLi.setAttribute('id', 'add-task');
  const addTaskIcon = document.createElement('span');
  addTaskIcon.classList.add('material-symbols-outlined');
  addTaskIcon.innerHTML = 'add';
  addTaskLi.appendChild(addTaskIcon);
  accountSec.appendChild(addTaskLi);

  const notificationLi = document.createElement('li');
  notificationLi.setAttribute('id', 'notification');
  const notificationIcon = document.createElement('span');
  notificationIcon.classList.add('material-symbols-outlined');
  notificationIcon.innerHTML = 'notifications';
  notificationLi.appendChild(notificationIcon);
  accountSec.appendChild(notificationLi);

  const profilePicLi = document.createElement('li');
  profilePicLi.setAttribute('id', 'profile-pic');
  const profileIcon = document.createElement('img');
  profileIcon.src = './icons/profile-pic.png';
  profileIcon.alt = 'profile Icon';
  profilePicLi.appendChild(profileIcon);
  accountSec.appendChild(profilePicLi);

  return header;

}

//  Nav builder
function createNav() {
  const nav = document.createElement('div');
  nav.setAttribute("id", "navbar");

  function createNavItem(parent, id, icon, text) {
    const itemLi = document.createElement('li');
    itemLi.setAttribute('id', id);
    itemLi.classList.add('view'); // Add the 'view' class here
    itemLi.innerHTML = `<span class="material-symbols-outlined">${icon}</span>${text}`;
    parent.appendChild(itemLi);
  }

  const dateViews = document.createElement('ul');
  dateViews.setAttribute('id', 'date-views');
  nav.appendChild(dateViews);

  const dateViewData = [
    { id: 'inbox-view', icon: 'inbox', text: 'Inbox' },
    { id: 'today-view', icon: 'event', text: 'Today' },
    { id: 'upcoming-view', icon: 'calendar_month', text: 'Upcoming' },
  ];

  dateViewData.forEach(item => createNavItem(dateViews, item.id, item.icon, item.text));

  const projectViews = document.createElement('ul');
  projectViews.setAttribute('id', 'project-views');
  nav.appendChild(projectViews);

  const projectViewData = [
    { id: 'home', text: 'Home 🏡' },
    { id: 'work', text: 'My work 🎯' },
  ];

  projectViewData.forEach(item => createNavItem(projectViews, item.id, '', item.text));

  const soonViews = document.createElement('ul');
  soonViews.setAttribute('id', 'soon');
  nav.appendChild(soonViews);
  soonViews.innerHTML = '<li><span>soon</span>Add team workspace</li>';

  return nav;
}

// Tasks Area builder
function createTaskArea(){
  const tasksArea = document.createElement('div');
  tasksArea.setAttribute("id","tasks-area");

  const areaName = document.createElement('h1');
  areaName.setAttribute('id', 'area-name');
   areaName.innerHTML = 'Inbox';
   
   tasksArea.appendChild(areaName);
  
  return tasksArea;

}

//  Add A task button  builder
function createAddTaskBtn(){
  const addBtn = document.createElement('button');
  addBtn.setAttribute('id', 'show');
  addBtn.innerHTML = '<span class="material-symbols-outlined">add</span>Add Task';
  
  return addBtn;
}


// Task block builder
export function createTaskBlock(){
  const taskBlock = document.createElement('div');
   taskBlock.setAttribute('class', 'a-task');

  const mainInfo = document.createElement('ul');
  mainInfo.setAttribute('class','mainInfo');
  taskBlock.appendChild(mainInfo);

  const complete = document.createElement('button');
  Object.assign(complete, {
    type : 'submit',
  });
  complete.setAttribute('class','complete');
  //   complete.checked=true;
  complete.addEventListener('click',()=>{
    complete.classList.toggle('after');
  })
  mainInfo.appendChild(complete);

  const taskNameInput = document.createElement('input');
  Object.assign(taskNameInput,{
   type : 'text',
   value: 'test value',
  });
  taskNameInput.setAttribute('class', 'taskName');
  mainInfo.appendChild(taskNameInput);

  const icons = document.createElement('ul');
  icons.setAttribute('class' , "icons");
  mainInfo.appendChild(icons);

  const editIcon = document.createElement('span');
  editIcon.classList.add('edit', 'material-symbols-outlined');
  editIcon.innerHTML = 'edit_note';
  icons.appendChild(editIcon);
  // editIcon.addEventListener('click', ()=> {
  //   editIcon.classList.add('active');
  // })

  const deleteIcon = document.createElement('span');
  deleteIcon.classList.add('delete', 'material-symbols-outlined');
  deleteIcon.innerHTML = 'delete';

  icons.appendChild(deleteIcon);
  deleteIcon.addEventListener('click', ()=> {
    deleteIcon.classList.add('active');
  })
  
  const taskDescriptionInput = document.createElement('textarea');
  Object.assign(taskDescriptionInput,{
    placeholder: 'description' ,
    value: 'test value',
  });
  taskDescriptionInput.setAttribute('class', 'description');
  taskBlock.appendChild(taskDescriptionInput);
   
  const selection = document.createElement('ul');
  selection.setAttribute('class', 'selection');
  taskBlock.appendChild(selection);

  const dueDateInput = document.createElement('input');
  Object.assign(dueDateInput,{
   type : 'date',
   value: '',
  });
  dueDateInput.setAttribute('class', 'due-date');
  selection.appendChild(dueDateInput);

  const priorityInput = document.createElement('select');
  Object.assign (priorityInput, {
    name : 'priorityType',

  });
  priorityInput.setAttribute('class', 'task-priority-type');
  selection.appendChild(priorityInput);

  const option1 = document.createElement('option');
  Object.assign(option1 ,{value:'P1'}); 
  option1.innerHTML = 'P1';
  priorityInput.appendChild(option1);

  const option2 = document.createElement('option');
  Object.assign(option2 ,{value:'P2'}); 
  option2.innerHTML = 'P2';
  priorityInput.appendChild(option2);

  const option3 = document.createElement('option');
  Object.assign(option3 ,{value:'P3'}); 
  option3.innerHTML = 'P3';
  priorityInput.appendChild(option3);

  const option4 = document.createElement('option');
  Object.assign(option4 ,{value:'P4'}); 
  option4.innerHTML = 'P4';
  priorityInput.appendChild(option4);

  const taskType = document.createElement('select');
  Object.assign (taskType, {
    name : 'taskType',

  });
  taskType.setAttribute('class', 'type');
  selection.appendChild(taskType);

  const typeInbox = document.createElement('option');
  Object.assign(typeInbox ,{value:'inbox'}); 
  typeInbox.innerHTML = 'Inbox';
  taskType.appendChild(typeInbox);

  const typeHome = document.createElement('option');
  Object.assign(typeHome ,{value:'Home 🏡'}); 
  typeHome.innerHTML = 'Home 🏡';
  taskType.appendChild(typeHome);

  const typeWork = document.createElement('option');
  Object.assign(typeWork ,{value:'My work 🎯'}); 
  typeWork.innerHTML = 'My work 🎯';
  taskType.appendChild(typeWork);
  
  const actionBtns = document.createElement('ul');
  actionBtns.setAttribute('class', 'task-action');
  taskBlock.appendChild(actionBtns);


  const closeBtn = document.createElement('button');
  Object.assign(closeBtn, {
    type: 'submit'
  });
  closeBtn.setAttribute('class', 'cancel-btn');
  closeBtn.innerHTML = 'Cancel';
  actionBtns.appendChild(closeBtn);
  
  const successEditBtn = document.createElement('button');
  Object.assign(successEditBtn, {
    type: 'submit'
  });
  successEditBtn.setAttribute('class', 'edit-btn');
  successEditBtn.innerHTML = 'Save task';
  actionBtns.appendChild(successEditBtn);

  return taskBlock;

}

//  Add a Task builder
function createAddTaskBlock(){
  const addATask = document.createElement('dialog');
  addATask.classList.add('add-a-task')


  const taskNameInput = document.createElement('input');
  Object.assign(taskNameInput,{
   type : 'text',
   placeholder: 'Task name'
  });
  taskNameInput.setAttribute('class', 'task-name');
  addATask.appendChild(taskNameInput);

  // const editIcon = document.createElement('span');
  // editIcon.setAttribute('class', 'material-symbols-outlined');
  // editIcon.setAttribute('id', 'edit');
  // editIcon.innerHTML = 'edit_note';
  // addATask.appendChild(taskNameInput);
  // addATask.appendChild(editIcon);
  // editIcon.addEventListener('click', ()=> {
  //   editIcon.classList.add('active');
  // })
  
  const taskDescriptionInput = document.createElement('textarea');
  taskDescriptionInput.setAttribute('class', 'task-description');
  Object.assign(taskDescriptionInput,{
    placeholder: 'description'  
  });
  addATask.appendChild(taskDescriptionInput);
   
  const selection = document.createElement('ul');
  selection.setAttribute('class', 'selection');
  addATask.appendChild(selection);

  const dueDateInput = document.createElement('input');
  Object.assign(dueDateInput,{
   type : 'date',
   placeholder: '"Due date'
  });
  dueDateInput.setAttribute('class', 'task-due-date')
  selection.appendChild(dueDateInput);

  const selectPriority = document.createElement('select');
  Object.assign (selectPriority, {
    name : 'priorityType',
  });
  selectPriority.setAttribute('class', 'priority-type');
  selection.appendChild(selectPriority);

  const option1 = document.createElement('option');
  Object.assign(option1 ,{value:'P1'}); 
  option1.innerHTML = 'Priority 1';
  selectPriority.appendChild(option1);

  const option2 = document.createElement('option');
  Object.assign(option2 ,{value:'P2'}); 
  option2.innerHTML = 'Priority 2';
  selectPriority.appendChild(option2);

  const option3 = document.createElement('option');
  Object.assign(option3 ,{value:'P3'}); 
  option3.innerHTML = 'Priority 3';
  selectPriority.appendChild(option3);

  const option4 = document.createElement('option');
  Object.assign(option4 ,{value:'P4'}); 
  option4.innerHTML = 'Priority 4';
  selectPriority.appendChild(option4);

  const selectTaskType = document.createElement('select');
  Object.assign (selectTaskType, {
    name : 'taskType',
  });
  selectTaskType.setAttribute('class','task-type');
  selection.appendChild(selectTaskType);

  const typeInbox = document.createElement('option');
  Object.assign(typeInbox ,{value:'inbox'}); 
  typeInbox.innerHTML = 'Inbox';
  selectTaskType.appendChild(typeInbox);

  const typeHome = document.createElement('option');
  Object.assign(typeHome ,{value:'Home 🏡'}); 
  typeHome.innerHTML = 'Home 🏡';
  selectTaskType.appendChild(typeHome);

  const typeWork = document.createElement('option');
  Object.assign(typeWork ,{value:'My work 🎯'}); 
  typeWork.innerHTML = 'My work 🎯';
  selectTaskType.appendChild(typeWork);
  
  const actionBtns = document.createElement('ul');
  actionBtns.setAttribute('class', 'task-action');
  addATask.appendChild(actionBtns);


  const closeBtn = document.createElement('button');
  Object.assign(closeBtn, {
    type: 'submit'
  });
  closeBtn.setAttribute('class', 'close');
  closeBtn.innerHTML = 'Cancel';
  actionBtns.appendChild(closeBtn);

  const successAddBtn = document.createElement('button');
  Object.assign(successAddBtn, {
    id: 'add',
    type: 'submit'
  });
  successAddBtn.innerHTML = 'Add Task';
  actionBtns.appendChild(successAddBtn);

  return addATask;

}


// default function
export default function createInitialPageStructure() {
  const content = document.getElementById('content');

  const header = createHeader();
  content.appendChild(header);

  const nav = createNav();
  content.appendChild(nav);

  const taskArea = createTaskArea();
  content.appendChild(taskArea);

  const addBtn = createAddTaskBtn();
  taskArea.appendChild(addBtn);

  const taskBlock = createTaskBlock();
  // taskArea.appendChild(taskBlock);

  const addTaskBlock = createAddTaskBlock();

  const headerAddTaskBtn = document.querySelector('#add-task');



  function showAddBlock(btn) {
    btn.addEventListener('click', () => {
      addTaskBlock.show();
      taskArea.appendChild(addTaskBlock);

      const closeBtn = document.querySelector('.close');
      console.log(closeBtn);

      closeBtn.addEventListener('click', () => {
        taskArea.removeChild(addTaskBlock);
        addTaskBlock.close();
      });
    });
  }

  // Attach the event listener to both addBtn and headerAddTaskBtn
  showAddBlock(addBtn);
  showAddBlock(headerAddTaskBtn);

  return {
    taskArea,
    addBtn,
    addTaskBlock,
    headerAddTaskBtn,
    taskBlock,
  };

}
