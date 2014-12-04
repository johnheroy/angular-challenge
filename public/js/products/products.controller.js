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
    $scope.comment = {};

    $scope.setActiveProduct = function(product){
      $scope.activeProduct = product;
    };

    $scope.addNewComment = function(){
      $scope.comment.date = Date.now();
      $scope.activeProduct.comments.push($scope.comment);
      $scope.comment = {};
    };

    activate();

    function activate(){
      productsDataservice
        .getAllProducts()
        .success(function(data, status, headers, config){
          $scope.data.products = data;
        })
        .error(function(data, status, headers, config){
          console.log('there was an error fetching the products list');
        });
    }

  }

})();
