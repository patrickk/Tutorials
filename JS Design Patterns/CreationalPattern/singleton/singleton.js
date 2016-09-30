//Singleton: Used to restrict an object to one instance of that object
//across the application.
//Remembers the last time you used it.
//Hands the same instance back

//Node.js uses CommonJS modular pattern

var TaskRepo = (function () {
    var taskRepo;

    //creates new object task and returns it
    function createRepo() {
      var taskRepo = new Object("Task");
      return taskRepo;
    }
    return {
      getInstance: function() {
        //No taskrepo? call createRepo function
        if (!taskRepo) {
          taskRepo = createRepo();
        }
        return taskRepo;
      }
    };
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if(repo1 === repo2){
  console.log("Same TaskRepo");
}
