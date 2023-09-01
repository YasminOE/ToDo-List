function createHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const inboxSec = document.createElement('ul');
  inboxSec.setAttribute('id', 'inbox');
  header.appendChild(inboxSec);

  const homeLi = document.createElement('li');
  const homeIcon = document.createElement('span');
  homeIcon.classList.add('material-symbols-outlined');
  homeIcon.innerHTML = 'home';
  // const homeIcon = document.createElement('img');
  // homeIcon.src = '../icons/home.svg';
  // homeIcon.alt = 'Home Icon';
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


  const logoSec = document.createElement('ul');
  logoSec.setAttribute('id', 'logo');
  header.appendChild(logoSec);

  const logoIcon = document.createElement('img');
  logoIcon.src = './icons/logo1.png';
  logoIcon.alt = 'Logo Icon';
  logoSec.appendChild(logoIcon);


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

function createNav(){
  const nav = document.createElement('div');
  nav.setAttribute("id", "navbar");

  
}

export default function loadPage() {
  const content = document.getElementById('content');

  const header = createHeader();
  content.appendChild(header);
}
