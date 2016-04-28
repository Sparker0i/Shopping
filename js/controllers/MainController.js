app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Welcome to the Shop';
  $scope.promo = "Like Your Retail Store";
  $scope.products = [
  {
    name: 'Moto G3',
    price: 179.99,
    arrival: new Date('2015','06','28'),
    cover: "img/Moto_G3.jpg"
	},
  {
    name: 'Lumia 640XL',
    price: 229.99,
    arrival: new Date('2015','09','06'),
    cover: "img/Lumia 640XL.jpg"
	},
  {
    name: 'Moto X Style',
    price: 383.99,
    arrival: new Date('2015','06','28'),
    cover: "img/Moto X Style.jpg"
	},
  {
    name: 'Nexus 5X',
    price: 429.99,
    arrival: new Date('2015','08','29'),
    cover: "img/Nexus-5X.jpg"
	},
  {
    name: 'Lumia 550',
    price: 124.99,
    arrival: new Date('2015','09','06'),
    cover: "img/Lumia 550.jpg"
	},
  {
    name: 'iPhone 6S',
    price: 1138.49,
    arrival: new Date('2015','09','13'),
    cover: "img/iPhone6S.jpg"
  },
  {
    name: 'Zenfone 2',
    price: 384.99,
    arrival: new Date('2015', '04', '01'),
    cover: "img/Zenfone 2.jpg"
  },
  {
    name: 'Lumia 650',
    price: 199.99,
    arrival: new Date('2016' , '01' , '01'),
    cover: "img/Lumia 650.jpg"
  },
  {
    name: 'LeEco Le 1S',
    price: 159.99,
    arrival: new Date('2016' , '02' , '10'),
    cover: "img/Le 1S.jpg"
  }
];
}]);
