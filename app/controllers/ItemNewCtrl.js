app.controller("ItemNewCtrl", function($scope, $http, $location){
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    locaton: "",
    task: "",
    urgency: ""
  };

  $scope.addNewItem = function(){
    $http.post(
      "https://to-do-app-hello.firebaseio.com/items.json",
      JSON.stringify({
        assignedTo: $scope.newTask.assignedTo,
        dependencies: $scope.newTask.dependencies,
        dueDate: $scope.newTask.dueDate,
        isCompleted: $scope.newTask.isCompleted,
        locaton: $scope.newTask.location,
        task: $scope.newTask.task,
        urgency: $scope.newTask.urgency
      })
    ).success(function(response){
      console.log(response);
      $location.url("/items/list")
    })



    // $scope.newTask.isCompleted = false;
    // $scope.newTask.id = $scope.items.length;
    // console.log("add item", $scope.items);
    // $scope.items.push($scope.newTask);
    // $scope.newTask= "";
  }
})