'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
    var view1Ctrl, $scope;

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      view1Ctrl = $controller('View1Ctrl', {
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

  });
});