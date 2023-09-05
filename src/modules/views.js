// view.js

import { head } from "lodash";

export function getViews(tasks, type = 'inbox') {
  const inboxView = [];
  const homeView = [];
  const projectsView = [];

  tasks.forEach(task => {
    if (task.type === 'inbox') {
      inboxView.push(task);
    } else if (task.type === 'Home 🏡') {
      homeView.push(task);
    } else if (task.type === 'My work 🎯') {
      projectsView.push(task);
    }
  });

  if (type === 'inbox') {
    return inboxView;
  } else if (type === 'Home 🏡') {
    return homeView;
  } else if (type === 'My work 🎯') {
    return projectsView;
  } else {
    return inboxView; // Default to inbox view
  }
}

export function getViewsByDate(tasks) {
  const todayView = [];
  const upcomingView = [];

  const today = new Date();
  const todayDate = today.toISOString().split('T')[0];

  tasks.forEach(task => {
    if (task.dueDate.toISOString().split('T')[0] === todayDate) {
      todayView.push(task);
    } else {
      upcomingView.push(task);
    }
  });

  return {
    today: todayView,
    upcoming: upcomingView
  };
}

function clearActiveClass() {
  const views = document.querySelectorAll('.view');
  views.forEach(view => {
    view.classList.remove('active');
  });
}

function changeView(viewId) {
  const heading = document.querySelector('#area-name');
  const view = document.querySelector(`#${viewId}`);
  if (viewId === 'inbox-view') {
    heading.innerHTML = 'Inbox';
  } else if (viewId === 'today-view') {
    heading.innerHTML = 'Today';
  } else if (viewId === 'upcoming-view') {
    heading.innerHTML = 'Upcoming';
  } else if (viewId === 'home'){
    heading.innerHTML = 'Home';
  }else{
    heading.innerHTML = 'My work';
  }

  clearActiveClass(); // Remove 'active' class from all views
  view.classList.add('active'); // Add 'active' class to the clicked view
}


export default function handleViews(taskManager) {
  document.addEventListener('DOMContentLoaded', () => {
    // let views = createViews(taskManager),
  // Get views by type
  const inboxView = getViews(taskManager.tasks, 'inbox');
  const homeView = getViews(taskManager.tasks, 'Home 🏡');
  const projectsView = getViews(taskManager.tasks, 'My work 🎯');

  console.log('Inbox View:', inboxView);
  console.log('Home View:', homeView);
  console.log('Projects View:', projectsView);

  // Get views by date
  const { today, upcoming } = getViewsByDate(taskManager.tasks);

  console.log('Today View:', today);
  console.log('Upcoming View:', upcoming);


    changeView('inbox-view');

    const navBar = document.querySelector('#navbar');
    navBar.addEventListener('click', (event) => {
      if (event.target.classList.contains('view')) {
        const viewId = event.target.id;
        changeView(viewId);
      }
    });
  });
}

