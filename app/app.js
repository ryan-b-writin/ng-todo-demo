var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name:"Logout"}, {name: "All Items"}, {name:"New Items"}]
})

app. controller("TodoCtrl", function($scope){
  $scope.welcome = "hello"
  $scope.newItem = function(){
    console.log("you clicked new item");
  };
  $scope.allItem = function(){
    console.log("all item");
  };
})