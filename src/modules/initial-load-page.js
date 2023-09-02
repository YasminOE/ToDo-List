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


export default function loadPage() {
  const content = document.getElementById('content');

  const header = createHeader();
  content.appendChild(header);

  const nav = createNav();
  content.appendChild(nav);
}
