var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name:"Logout"}, {name: "All Items"}, {name:"New Items"}]
})

app.controller("TodoCtrl", function($scope){
  $scope.welcome = "hello"
  $scope.showListView = true;

  $scope.newItem = function(){
    console.log("you clicked new item");
    $scope.showListView = false;
  };
  $scope.allItem = function(){
    console.log("all item");
    $scope.showListView = true;
  };
})