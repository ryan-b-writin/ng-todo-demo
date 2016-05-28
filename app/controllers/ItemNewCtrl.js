app.controller("ItemNewCtrl", function($scope, $http, $location, itemStorage){
  $scope.submitButtonText = "Add New Item"
  $scope.pageTitle = "Create New Item"
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
    console.log("response");
        itemStorage.postNewItem($scope.newTask)
          .then(function successCallback(response){
            $location.url("/items/list");
          })
  }
})