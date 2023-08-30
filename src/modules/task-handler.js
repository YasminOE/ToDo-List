// import date library for due date
import { addDays } from "date-fns";

// Task Constructor
function Task(taskName, description, dueDate, priority, type) {
  const priorityTypes = ['priorityOne', 'priorityTwo', 'priorityThree', 'priorityFour'];
  const taskType = ['inbox', 'home', 'projects'];

  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate || addDays(new Date(), 1); // TODO: making the dates more dynamic
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
}

// test

export default function handleTask() {
  const taskManager = new TaskManager();

  const today = new Date();
  const tomorrow = addDays(today, 1);
  const inThreeDays = addDays(today, 3);

  taskManager.addTask(new Task('add task test to be removed', 'add test', today, '1', '2'));
  taskManager.addTask(new Task('add task test', 'add test', tomorrow, '4', '0'));
  taskManager.addTask(new Task('add another task test', 'add test', inThreeDays, '4', '0'));

  taskManager.tasks.forEach(task => console.log(task));

  taskManager.removeTask('add task test');

  console.log(taskManager.tasks);
}

