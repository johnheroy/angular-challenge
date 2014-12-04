(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$scope', 'productsDataservice'];

  /////////////////////

  function ProductsController($scope, productsDataservice){

    $scope.data = {};
    $scope.data.products = [];

    activate();

    function activate(){
      productsDataservice
        .getAllProducts()
        .success(function(data, status, headers, config){
          console.log(data);
          $scope.data.products = data;
        })
        .error(function(data, status, headers, config){
          console.log('there was an error fetching the products list');
        });
    }

  }

})();
