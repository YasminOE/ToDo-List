import { secondsInDay } from "date-fns";

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



function createTaskArea(){
  const tasksArea = document.createElement('div');
  tasksArea.setAttribute("id","tasks-area");

  const areaName = document.createElement('h1');
  areaName.setAttribute('id', 'area-name');
   areaName.innerHTML = 'Inbox';
   
   tasksArea.appendChild(areaName);
  
  return tasksArea;

}

function createAddTaskBtn(){
  const addBtn = document.createElement('button');
  addBtn.setAttribute('id', 'show');
  addBtn.innerHTML = '<span class="material-symbols-outlined">add</span>Add Task';
  return addBtn;
}




function createTaskBlock(){
  const taskBlock = document.createElement('div');
   taskBlock.setAttribute('id', 'add-a-task');

  const complete = document.createElement('input');
  Object.assign(complete, {
    type : 'radio',
    name: 'complete',
    id: 'complete',
  });
  //   complete.checked=true;
  taskBlock.appendChild(complete);

  const taskNameInput = document.createElement('input');
  Object.assign(taskNameInput,{
   type : 'text',
   id: 'taskName',
   value: '',
  });
  taskBlock.appendChild(taskNameInput);

  const editIcon = document.createElement('span');
  editIcon.setAttribute('class', 'material-symbols-outlined');
  editIcon.innerHTML = 'edit_note';
  taskBlock.appendChild(taskNameInput);
  taskBlock.appendChild(editIcon);
  
  const taskDescriptionInput = document.createElement('textarea');
  Object.assign(taskDescriptionInput,{
    id: 'description',
    placeholder: 'description'  
  });

  taskBlock.appendChild(taskDescriptionInput);
   
  const selection = document.createElement('ul');
  selection.setAttribute('id', 'selection');
  taskBlock.appendChild(selection);

  const dueDateInput = document.createElement('input');
  Object.assign(dueDateInput,{
   type : 'text',
   id: 'due-date',
   value: '',
  });
  selection.appendChild(dueDateInput);

  const priorityInput = document.createElement('input');
  Object.assign (priorityInput, {
    name : 'priorityType',
     id : 'task-priority-type',
     value: ''
  });
  selection.appendChild(priorityInput);

  // const option1 = document.createElement('option');
  // Object.assign(option1 ,{value:'priorityOne'}); 
  // option1.innerHTML = '<span class="material-symbols-outlined">flag<span>Priority 1';
  // selectPriority.appendChild(option1);

  // const option2 = document.createElement('option');
  // Object.assign(option2 ,{value:'priorityTwo'}); 
  // option2.innerHTML = '<span class="material-symbols-outlined">flag<span>Priority 2';
  // selectPriority.appendChild(option2);

  // const option3 = document.createElement('option');
  // Object.assign(option3 ,{value:'priorityThree'}); 
  // option3.innerHTML = '<span class="material-symbols-outlined">flag<span>Priority 3';
  // selectPriority.appendChild(option3);

  // const option4 = document.createElement('option');
  // Object.assign(option4 ,{value:'priorityFour'}); 
  // option4.innerHTML = '<span class="material-symbols-outlined">flag<span>Priority 4';
  // selectPriority.appendChild(option4);

  const taskType = document.createElement('input');
  Object.assign (taskType, {
    name : 'taskType',
     id : 'type',
     value: '',
  });
  selection.appendChild(taskType);

  // const typeInbox = document.createElement('option');
  // Object.assign(typeInbox ,{value:'inbox'}); 
  // typeInbox.innerHTML = 'Inbox';
  // selectTaskType.appendChild(typeInbox);

  // const typeHome = document.createElement('option');
  // Object.assign(typeHome ,{value:'home'}); 
  // typeHome.innerHTML = 'Home 🏡';
  // selectTaskType.appendChild(typeHome);

  // const typeWork = document.createElement('option');
  // Object.assign(typeWork ,{value:'projects'}); 
  // typeWork.innerHTML = 'My work 🎯';
  // selectTaskType.appendChild(typeWork);
  
  const actionBtns = document.createElement('ul');
  actionBtns.setAttribute('id', 'task-action');
  taskBlock.appendChild(actionBtns);


  const closeBtn = document.createElement('button');
  Object.assign(closeBtn, {
    id: 'close',
    type: 'submit'
  });
  closeBtn.innerHTML = 'Cancel';
  actionBtns.appendChild(closeBtn);

  const successAddBtn = document.createElement('button');
  Object.assign(successAddBtn, {
    id: 'add',
    type: 'submit'
  });
  successAddBtn.innerHTML = 'Add Task';
  actionBtns.appendChild(successAddBtn);

  return taskBlock;

}

function createSaveEditBtn(){
  const editBtn = document.getElementById('add');
  editBtn.innerHTML = 'Save task';
  return editBtn;
}

function createAddTaskBlock(){
  const addATask = document.createElement('dialog');
   addATask.setAttribute('id', 'add-a-task');

  const taskNameInput = document.createElement('input');
  Object.assign(taskNameInput,{
   type : 'text',
   id: 'task-name',
   placeholder: 'Task name'
  });
  addATask.appendChild(taskNameInput);

  const editIcon = document.createElement('span');
  editIcon.setAttribute('class', 'material-symbols-outlined');
  editIcon.innerHTML = 'edit_note';
  addATask.appendChild(taskNameInput);
  addATask.appendChild(editIcon);
  
  const taskDescriptionInput = document.createElement('textarea');
  Object.assign(taskDescriptionInput,{
    id: 'task-description',
    placeholder: 'description'  
  });
  addATask.appendChild(taskDescriptionInput);
   
  const selection = document.createElement('ul');
  selection.setAttribute('id', 'selection');
  addATask.appendChild(selection);

  const dueDateInput = document.createElement('input');
  Object.assign(dueDateInput,{
   type : 'date',
   id: 'task-due-date',
   placeholder: '"Due date'
  });
  selection.appendChild(dueDateInput);

  const selectPriority = document.createElement('select');
  Object.assign (selectPriority, {
    name : 'priorityType',
     id : 'priority-type'
  });
  selection.appendChild(selectPriority);

  const option1 = document.createElement('option');
  Object.assign(option1 ,{value:'priorityOne'}); 
  option1.innerHTML = '<span class="material-symbols-outlined">flag<span>Priority 1';
  selectPriority.appendChild(option1);

  const option2 = document.createElement('option');
  Object.assign(option2 ,{value:'priorityTwo'}); 
  option2.innerHTML = '<span class="material-symbols-outlined">flag<span>Priority 2';
  selectPriority.appendChild(option2);

  const option3 = document.createElement('option');
  Object.assign(option3 ,{value:'priorityThree'}); 
  option3.innerHTML = '<span class="material-symbols-outlined">flag<span>Priority 3';
  selectPriority.appendChild(option3);

  const option4 = document.createElement('option');
  Object.assign(option4 ,{value:'priorityFour'}); 
  option4.innerHTML = '<span class="material-symbols-outlined">flag<span>Priority 4';
  selectPriority.appendChild(option4);

  const selectTaskType = document.createElement('select');
  Object.assign (selectTaskType, {
    name : 'taskType',
     id : 'task-type'
  });
  selection.appendChild(selectTaskType);

  const typeInbox = document.createElement('option');
  Object.assign(typeInbox ,{value:'inbox'}); 
  typeInbox.innerHTML = 'Inbox';
  selectTaskType.appendChild(typeInbox);

  const typeHome = document.createElement('option');
  Object.assign(typeHome ,{value:'home'}); 
  typeHome.innerHTML = 'Home 🏡';
  selectTaskType.appendChild(typeHome);

  const typeWork = document.createElement('option');
  Object.assign(typeWork ,{value:'projects'}); 
  typeWork.innerHTML = 'My work 🎯';
  selectTaskType.appendChild(typeWork);
  
  const actionBtns = document.createElement('ul');
  actionBtns.setAttribute('id', 'task-action');
  addATask.appendChild(actionBtns);


  const closeBtn = document.createElement('button');
  Object.assign(closeBtn, {
    id: 'close',
    type: 'submit'
  });
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

export default function loadPage() {
  document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    const header = createHeader();
    content.appendChild(header);

    const nav = createNav();
    content.appendChild(nav);

    const taskArea = createTaskArea();
    content.appendChild(taskArea);

    const addBtn = createAddTaskBtn();
    taskArea.appendChild(addBtn);

    const addTaskBlock = createAddTaskBlock();

    const headerAddTaskBtn = document.querySelector('#add-task');

    function showAddBlock(btn) {
      btn.addEventListener('click', () => {
        addTaskBlock.show();
        taskArea.appendChild(addTaskBlock);

        const closeBtn = document.getElementById('close');
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

    const successAddBtn = addTaskBlock.querySelector('#add');

    successAddBtn.addEventListener('click', () => {
      // Get values from the addTaskBlock
      const taskName = document.getElementById('task-name').value;
      const description = document.getElementById('task-description').value;
      const dueDate = document.getElementById('task-due-date').value;
      const priority = document.getElementById('priority-type').value;
      const type = document.getElementById('task-type').value;

      // Create a new taskBlock and populate its inputs
      const taskBlock = createTaskBlock();
      taskBlock.querySelector('#taskName').value = taskName;
      taskBlock.querySelector('#description').value = description;
      taskBlock.querySelector('#due-date').value = dueDate;
      taskBlock.querySelector('#task-priority-type').value = priority;
      taskBlock.querySelector('#type').value = type;

      // Append the new taskBlock to the taskArea
      taskArea.appendChild(taskBlock);
    });
  });
}
