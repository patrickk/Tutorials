//Module pattern: simple way to encapsulate group of like methods
//Like a toolbox; take a bunch of methods and group them together
//service for database calls, service for http calls, etc
//At its core, is an object literal w/ keys and functions
//Can create private variables.. while methods are returned


var Repo = require('./taskRepository');

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
