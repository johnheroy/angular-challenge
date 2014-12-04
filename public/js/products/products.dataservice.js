(function(){
  'use strict';

  angular
    .module('myApp')
    .factory('productsDataservice', productsDataservice);

  productsDataservice.$inject = ['$http'];

  /////////////////////

  function productsDataservice($http){
    var service = {
      getAllProducts: getAllProducts
    };

    return service;

    function getAllProducts(){
      return $http.get('/api/products');
    }

  }

})();
