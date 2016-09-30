//Factory pattern: 1)Used to simplify object creation
//If repository, open connection to db, caching etc, use factory to deal with
//2)Creating different objects based on need
//3)Repository creation


var Repo = require('./taskRepository')();

var Task = function(data){
  this.name = data.name;
  this.completed = false;

}

  Task.prototype.complete = function () {
    console.log('Completing task: ' + this.name);
    this.completed = true;
  };
  Task.prototype.save = function () {
      console.log('Saving Task: ' + this.name);
      Repo.save(this);
  };

module.exports = Task;
