var app = angular.module('myApp', []);
app.controller('MainController', function($scope, $http) {
  $scope.title = 'Welcome to the Shop';
  $scope.promo = "Like Your Retail Store";
  $http.get("products.php").then(function (response) {
      $scope.products = response.data.products;
  });
});
