'use strict';

describe('myApp.FizzBuzz module', function() {

  beforeEach(module('myApp.view'));

  describe('FizzBuzz controller', function(){
    var view1Ctrl, $scope;

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      view1Ctrl = $controller('ViewCtrl', {
        $scope: $scope
      });
    }));

    it('should define controller....', function() {
      expect(view1Ctrl).toBeDefined();
    });

    it('should define scope ....', function() {
      expect($scope).toBeDefined();
    });

    it('should model inputed number is 3 model result lable should be Fizz ....', function() {
      $scope.formModel.inputtedValue = 3;
      $scope.onSubmit();
      expect($scope.formModel.resultLabel).toBe('Fizz');
    });

    it('should model inputed number be divisible by 3 model result lable should be Fizz ....', function() {
      $scope.formModel.inputtedValue = 6;
      $scope.onSubmit();
      expect($scope.formModel.resultLabel).toBe('Fizz');
    });

    it('should model inputed number is 5 model result lable should be Fizz ....', function() {
      $scope.formModel.inputtedValue = 5;
      $scope.onSubmit();
      expect($scope.formModel.resultLabel).toBe('Buzz');
    });

    it('should model inputed number be divisible by 5 model result lable should be Fizz ....', function() {
      $scope.formModel.inputtedValue = 25;
      $scope.onSubmit();
      expect($scope.formModel.resultLabel).toBe('Buzz');
    });

    it('should model inputed number be divisible by 3 & 5 model result lable should be FizzBuzz ....', function() {
      $scope.formModel.inputtedValue = 15;
      $scope.onSubmit();
      expect($scope.formModel.resultLabel).toBe('FizzBuzz');
    });

    it('should model inputed number not be divisible by 3 or 5 model result lable should be inputed number ....', function() {
      $scope.formModel.inputtedValue = 11;
      $scope.onSubmit();
      expect($scope.formModel.resultLabel).toBe($scope.formModel.inputtedValue);
    });

  });
});