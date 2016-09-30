/*
Used to add new functionality to an existing object,
without being obtrusive

More complete inheritance- how to more fully inherit
Wraps an object
Protects existing objects
Allows extended functionality
*/

//Simple decoration
var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

//create urgent Task
var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function (){
  console.log('notifying important people');
};

urgentTask.complete();
urgentTask.save = function(){
  this.notify();
  Task.prototype.save.call(this)
};
urgentTask.save();
