import { displayTasks } from './task-handler';
import { head } from "lodash";

function clearActiveClass() {
  const views = document.querySelectorAll('.view');
  views.forEach(view => {
    view.classList.remove('active');
  });
}

function changeView(viewId, manager, block, area) {
  const heading = document.querySelector('#area-name');
  const view = document.querySelector(`#${viewId}`);
  let types = []; // Initialize an empty array to store types
  let viewName = ''; // Initialize a variable to store the view name

  if (viewId === 'inbox-view') {
    heading.innerHTML = 'Inbox';
    types = ['inbox']; // Set the types for the 'inbox-view'
    viewName = 'inbox'; // Set the view name
  } else if (viewId === 'today-view') {
    heading.innerHTML = 'Today';
    types = ['inbox', 'Home 🏡', 'My work 🎯']; // Set the types for the 'today-view'
    viewName = 'today'; // Set the view name
  } else if (viewId === 'upcoming-view') {
    heading.innerHTML = 'Upcoming';
    types = ['inbox', 'Home 🏡', 'My work 🎯']; // Set the types for the 'upcoming-view'
    viewName = 'upcoming'; // Set the view name
  } else if (viewId === 'home') {
    heading.innerHTML = 'Home';
    types = ['Home 🏡']; // Set the types for the 'home' view
    viewName = 'home'; // Set the view name
  } else {
    heading.innerHTML = 'My work';
    types = ['My work 🎯']; // Set the types for the 'My work' view
    viewName = 'myWork'; // Set the view name
  }

  // Call the displayTasks function with the specified types and view
  displayTasks(manager, block, area, types, viewName);

  clearActiveClass(); // Remove 'active' class from all views
  view.classList.add('active'); // Add 'active' class to the clicked view
}

export default function handleViews(taskManager) {
  // const tasksArea = document.querySelector('#tasks-area')
  const navBar = document.querySelector('#navbar');
  const block = document.querySelectorAll('.a-task');
  const area = document.querySelector('#tasks-area');

  // Initialize the default view
  changeView('inbox-view', taskManager, block, area);

  navBar.addEventListener('click', (event) => {
    if (event.target.classList.contains('view')) {
      const viewId = event.target.id;
      changeView(viewId, taskManager, block, area);
    }
  });
}
