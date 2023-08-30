// import date library for due date

// Task Constructor
class Task {
  constructor(taskName, description, dueDate, priority, type) {
    const priorityTypes = ['priorityOne', 'priorityTwo', 'priorityThree', 'priorityFour'];
    const taskType = ['inbox', 'home', 'projects'];

    this.taskName = taskName;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priorityTypes[priority];
    this.type = taskType[type]; 
  }

  setName(taskName) {
    this.taskName = taskName;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  setTaskType(type) {
    this.type = type;
  }


}





// test

export default function  handleTask(){
  const tasks = [
    new Task('add task test', 'add test', 'test', '1','2'),
    new Task('add task test', 'add test', 'test', '4','0'),
  ]
  tasks.forEach(task => console.log(task));
}
