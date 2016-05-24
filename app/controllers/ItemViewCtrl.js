app.controller("ItemViewCtrl", function($scope, $http, $routeParams){
  $scope.selectedItem = {};
  $scope.items = [];
  $http.get("https://to-do-app-hello.firebaseio.com/items.json")
    .success(function(itemObject){
      var itemCollection = itemObject;
      Object.keys(itemCollection).forEach(function(key){
        itemCollection[key].id = key;
        $scope.items.push(itemCollection[key]);

        $scope.selectedItem = $scope.items.filter(function(item){
          return item.id === $routeParams.itemId;
        })[0];
      })
      
    })

})