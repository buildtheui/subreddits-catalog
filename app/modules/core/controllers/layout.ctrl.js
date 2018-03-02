(function () {
  'use strict';
  angular
    .module('com.module.core')
    /**
     * @ngdoc function
     * @name com.module.core.controller:LayoutCtrl
     * @description Layout controller
     * @requires $scope
     * @requires $rootScope
     * @requires CoreService
     * @requires gettextCatalog
     **/
    .controller('LayoutCtrl', ['$scope', function ($scope) {

      $scope.appName = 'Reddit Catalog';

    }]);

})();
