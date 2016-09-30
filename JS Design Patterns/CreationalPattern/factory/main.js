var Task = require('./task');
var taskRepo = require('./taskRepository');
var userRepo = require('./userRepository');
var projectRepo = require('./projectRepository');

var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(1);
var project = projectRepo.get(1);
task1.user = user;
task1.project = project;

console.log(task1);
task1.save();

var task2 = new Task({name:'create a demo for modules'});
var task3 = new Task({name:'create a demo for singletons'});
var task4 = new Task({name:'create a demo for prototypes'});

task1.complete();
task2.save();
task3.save();
task4.save();
