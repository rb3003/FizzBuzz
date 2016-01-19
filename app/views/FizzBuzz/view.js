'use strict';

angular.module('myApp.view', ['ngRoute'])
    .constant('MY_CONSTANTS',{
      "FIZZ": "Fizz",
      "BUZZ": "Buzz"
    })

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/FizzBuzz', {
    templateUrl: 'views/FizzBuzz/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', function($scope, MY_CONSTANTS) {
  $scope.formModel = {};

  $scope.onSubmit = function () {
    $scope.formModel.resultLabel =
        ($scope.formModel.inputtedValue % 5 == 0 && $scope.formModel.inputtedValue % 3 == 0) ? MY_CONSTANTS.FIZZ + MY_CONSTANTS.BUZZ
            : $scope.formModel.inputtedValue % 3 == 0 ? MY_CONSTANTS.FIZZ
            : $scope.formModel.inputtedValue % 5 == 0 ? MY_CONSTANTS.BUZZ : $scope.formModel.inputtedValue;
  };
});