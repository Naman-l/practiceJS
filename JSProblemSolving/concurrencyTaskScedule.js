// Write a scheduler in JavaScript that accepts max number of concurrent tasks 
// as a parameter and schedules tasks (each task may take arbitrary time to complete).

// related question: concurrency vs parallelism


const exampleTaskA = (name) => new Promise(resolve => setTimeout(function() {
    console.log(`Task ${name} Done`);
    resolve()
  }, Math.floor(Math.random() * 2000)))

//   return a promise from your task, you can tie into the the promise's 
//   then() to alert you when the task is finished and when you can start another.
  
  function TaskRunner(concurrency) {
    this.limit = concurrency;
    this.store = [];
    this.active = 0;
  }
  
  TaskRunner.prototype.next = function() {
    if (this.store.length) this.runTask(...this.store.shift())
  }
  
  TaskRunner.prototype.runTask = function(task, name) {
    this.active++
    console.log(`Scheduling task ${name} current active: ${this.active}`)
    task(name).then(() => {
      this.active--
      console.log(`Task ${name} returned, current active: ${this.active}`)
      this.next()
    })
  }
  TaskRunner.prototype.push = function(task, name) {
    if (this.active < this.limit) this.runTask(task, name)
    else {
      console.log(`queuing task ${name}`)
      this.store.push([task, name])
    }
  }
  
  var task = new TaskRunner(2);
  task.push(exampleTaskA, 1)
  task.push(exampleTaskA, 2)
  task.push(exampleTaskA, 3)
  task.push(exampleTaskA, 4)
  task.push(exampleTaskA, 5)
  task.push(exampleTaskA, 6)
  task.push(exampleTaskA, 7)