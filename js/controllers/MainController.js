app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Welcome to the Shop';
  $scope.promo = "Like Your Retail Store";
  $scope.product =
  {
    name: 'Moto G3',
    price: 179.99,
    arrival: new Date('2015','06','28')
	}
}]);
