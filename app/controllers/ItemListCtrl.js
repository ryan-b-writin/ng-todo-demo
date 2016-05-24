app.controller("ItemListCtrl", function($scope, $http){
  $scope.items = [];

  $http.get("https://to-do-app-hello.firebaseio.com/items.json")
    .success(function(itemObject){
      var itemCollection = itemObject;
      Object.keys(itemCollection).forEach(function(key){
        itemCollection[key].id=key;
        $scope.items.push(itemCollection[key]);
      })
    })

});