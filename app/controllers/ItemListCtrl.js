app.controller("ItemListCtrl", function( $scope, $http, itemStorage){
  $scope.items = [];

  itemStorage.getItemList().then(function(itemCollection){
    console.log("item collection", itemCollection );
    $scope.items = itemCollection;
  })
    $scope.itemDelete = function(itemId){
      console.log("itemId", itemId);
      itemStorage.deleteItem(itemId).then(function(response){
        itemStorage.getItemList().then(function(itemCollection){
          $scope.items = itemCollection;
        })
      })


      // $http.delete(`https://to-do-app-hello.firebaseio.com/items/${itemId}.json`)
      // .success(function(response){
      //   $scope.items=[];
      //   getItems();
      // })
    }
});