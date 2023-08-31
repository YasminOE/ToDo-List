// view.js

export function getViews(tasks, type = 'inbox') {
  const inboxView = [];
  const homeView = [];
  const projectsView = [];

  tasks.forEach(task => {
    if (task.type === 'inbox') {
      inboxView.push(task);
    } else if (task.type === 'home') {
      homeView.push(task);
    } else if (task.type === 'projects') {
      projectsView.push(task);
    }
  });

  if (type === 'inbox') {
    return inboxView;
  } else if (type === 'home') {
    return homeView;
  } else if (type === 'projects') {
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


// ... (Your getViews and getViewsByDate functions)

export default function handleViews(taskManager) {
  // Get views by type
  const inboxView = getViews(taskManager.tasks, 'inbox');
  const homeView = getViews(taskManager.tasks, 'home');
  const projectsView = getViews(taskManager.tasks, 'projects');

  console.log('Inbox View:', inboxView);
  console.log('Home View:', homeView);
  console.log('Projects View:', projectsView);

  // Get views by date
  const { today, upcoming } = getViewsByDate(taskManager.tasks);

  console.log('Today View:', today);
  console.log('Upcoming View:', upcoming);
}
