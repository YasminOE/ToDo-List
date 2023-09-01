function createHeader(){
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const inboxSec = document.createElement('ul');
  inboxSec.setAttribute('id', 'inbox');
  const homeLi = document.createElement('li');
  const homeIcon = document.createElement('img');
  homeIcon.src = './icons/home.svg';
  homeLi.appendChild(homeIcon);
  inboxSec.appendChild(homeLi);

  const searchLi = document.createElement('li');
  const searchIcon = document.createElement('img');
  searchIcon.src = './icons/search.svg';
  const searchInput = document.createElement('input');
  Object.assign(searchIcon,{
    type: 'test',
    value: '',
    placeholder: 'Search anything ...'
  });
  searchLi.appendChild(searchIcon);
  searchLi.appendChild(searchInput);
  inboxSec.appendChild(searchLi);

  header.appendChild(inboxSec);

  const logoSec = document.createElement('ul');
  logoSec.setAttribute('id', 'logo');
  const logoIcon = document.createElement('img');
  logoIcon.src = './icons/logo1.png';
  homeLi.appendChild(logoIcon);

  header.appendChild(logoSec);


  const accontInfoSec = document.createElement('ul');
  accontInfoSec.setAttribute('id', 'account-info');
  const addTask = document.createElement('li');
  addTask.setAttribute('id', 'add-task');
  const addTaskIcon = document.createElement('img');
  addTaskIcon.src = './icons/add-task.svg';
  addTask.appendChild(addTaskIcon);
  accontInfoSec.appendChild(addTask);

  const notification = document.createElement('li');
  notification.setAttribute('id', 'notification');
  const notificationIcon = document.createElement('img');
  notificationIcon.src = './icons/notification.svg';
  notification.appendChild(notificationIcon);
  accontInfoSec.appendChild(notification);

  const profilePic = document.createElement('li');
  profilePic.setAttribute('id', 'profile-pic"');
  const profileIcon = document.createElement('img');
  profileIcon.src = './icons/profile-pic1.png';
  profilePic.appendChild(profileIcon);
  accontInfoSec.appendChild(profilePic);
  
  header.appendChild(accontInfoSec);

  return header;

}

export default function loadPage(){
  const content = document.getElementById('content');

  const header = createHeader();
  content.appendChild(header);
}