var app = angular.module("TodoApp", ["ngRoute"])
  .constant("firebaseURL","https://to-do-app-hello.firebaseio.com/");

app.config(function($routeProvider){
  $routeProvider.
  when('/items/list', {
    templateUrl:'partials/item-list.html',
    controller:'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl:'partials/item-new.html',
    controller: 'ItemNewCtrl'
  }).
  when('/items/:itemId', {
    templateUrl:'partials/item-details.html',
    controller: 'ItemViewCtrl'
  }).
  when('/items/:itemId/edit', {
    templateUrl:'partials/item-new.html',
    controller: 'ItemEditCtrl'
  }).
  otherwise('items/list');
})