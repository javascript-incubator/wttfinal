'use strict';

describe('Controller: SCtrl', function () {

  // load the controller's module
  beforeEach(module('wttfinalApp'));

  var SCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SCtrl = $controller('SCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SCtrl.awesomeThings.length).toBe(3);
  });
});
