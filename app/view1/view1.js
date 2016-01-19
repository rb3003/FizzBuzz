'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  $scope.formModel = {};

  $scope.onSubmit = function () {
    $scope.formModel.resultLabel = $scope.formModel.inputtedValue;
    if($scope.formModel.inputtedValue % 3 == 0){
      $scope.formModel.resultLabel = 'Fizz';
    }
    if($scope.formModel.inputtedValue % 5 == 0){
      $scope.formModel.resultLabel = 'Buzz';
    }
  };
});