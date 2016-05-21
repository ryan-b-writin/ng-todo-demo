var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name:"Logout"}, {name: "All Items"}, {name:"New Items"}]
})

app.controller("TodoCtrl", function($scope){
  $scope.welcome = "hello"
  $scope.showListView = false;
  $scope.newTask = {};
  
  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "greg",
      location: "Zoe's house",
      urgency: "low",
      dependencies: ["sunshine", "clippers", "hat", "water", "headphones"]
    },
    {
      id: 1,
      task: "grade quizzes",
      isCompleted: false,
      dueDate: "12/5/15",
      assignedTo: "joe",
      location: "NSS",
      urgency: "high",
      dependencies: ["sunshine", "clippers", "hat", "water", "headphones"]
    },
    {
      id: 2,
      task: "nap",
      isCompleted: true,
      dueDate: "5/21/16",
      assignedTo: "zoe",
      location: "Zoe's house",
      urgency: "low",
      dependencies: ["sunshine", "clippers", "hat", "water", "headphones"]
    }
  ]

  $scope.newItem = function(){
    console.log("you clicked new item");
    $scope.showListView = false;
  };
  $scope.allItem = function(){
    console.log("all item");
    $scope.showListView = true;
  };
})