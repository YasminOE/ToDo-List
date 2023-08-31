// import date library for due date
import { addDays } from "date-fns";

// Task Constructor
function Task(taskName, description, dueDate, priority, type) {
  const priorityTypes = ['priorityOne', 'priorityTwo', 'priorityThree', 'priorityFour'];
  const taskType = ['inbox', 'home', 'projects'];

  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate || addDays(new Date(), 0); // Use the provided dueDate or default to today
  this.priority = priorityTypes[priority];
  this.type = taskType[type];
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskName) {
    const index = this.tasks.findIndex(task => task.taskName === taskName);

    if (index !== -1) {
      const removedTask = this.tasks.splice(index, 1);
      console.log(`${removedTask[0].taskName} has been removed`);
    }
  }

  updateDueDate(taskName, newDueDate) {
    const task = this.tasks.find(task => task.taskName === taskName);

    if (task) {
      task.dueDate = newDueDate;
      console.log(`${task.taskName}'s due date has been updated to ${newDueDate}`);
    }
  }

  updateTask(taskName, updatedProperties) {
    const task = this.tasks.find(task => task.taskName === taskName);

    if (task) {
      Object.assign(task, updatedProperties);
      console.log(`${task.taskName}'s information has been updated`);
    }
  }
  // TODO: add project task 
}

// test

export default function handleTask() {
  const taskManager = new TaskManager();

  taskManager.addTask(new Task('add task test to be removed', 'add test', new Date(), '1', '2'));
  taskManager.addTask(new Task('add task test', 'add test', addDays(new Date(), 1), '4', '0'));
  taskManager.addTask(new Task('add another task test', 'add test', addDays(new Date(), 3), '4', '0'));

  taskManager.tasks.forEach(task => console.log(task));

  taskManager.updateDueDate('add task test', addDays(new Date(), 7));

  taskManager.updateTask('add another task test', { description: 'Updated description', priority: 'priorityOne' });

  console.log(taskManager.tasks);

  return taskManager;
}
