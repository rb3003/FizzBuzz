'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
   /* var view1Ctrl, view1Scope;

    beforeEach(inject(function($controller, $rootScope) {
      view1Scope = $rootScope.$new();
      view1Ctrl = $controller('View1Ctrl', {
        $scope: view1Scope
      });
    }));*/
    var view1Ctrl, $scope;
    beforeEach(inject(function($rootScope) {
      $scope = $rootScope.$new();
    }));

    it('should define controller....', inject(function($controller) {
      //spec body
      view1Ctrl = $controller('View1Ctrl', {
        $scope: $scope
      });
      expect(view1Ctrl).toBeDefined();
    }));

    it('should define scope ....', inject(function($controller) {
      //spec body
      expect($scope).toBeDefined();
    }));

  });
});