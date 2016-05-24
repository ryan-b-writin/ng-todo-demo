app.controller("ItemListCtrl", function( $scope, $http){
  $scope.items = [];
  var getItems = function(){

    $http.get("https://to-do-app-hello.firebaseio.com/items.json")
      .success(function(itemObject){
        var itemCollection = itemObject;
        Object.keys(itemCollection).forEach(function(key){
          itemCollection[key].id=key;
          $scope.items.push(itemCollection[key]);
        })
      });
  }

  getItems();
    $scope.itemDelete = function(itemId){
      $http.delete(`https://to-do-app-hello.firebaseio.com/items/${itemId}.json`)
      .success(function(response){
        $scope.items=[];
        getItems();
      })
    }

});