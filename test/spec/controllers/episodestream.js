'use strict';

describe('Controller: EpisodestreamCtrl', function () {

  // load the controller's module
  beforeEach(module('wttfinalApp'));

  var EpisodestreamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EpisodestreamCtrl = $controller('EpisodestreamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EpisodestreamCtrl.awesomeThings.length).toBe(3);
  });
});
