(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$scope', 'productsDataservice'];

  /////////////////////

  function ProductsController($scope, productsDataservice){

    activate();

    function activate(){
      productsDataservice
        .getAllProducts()
        .success(function(data, status, headers, config){
          
        })
        .error(function(data, status, headers, config){

        });
    }

  }

})();
