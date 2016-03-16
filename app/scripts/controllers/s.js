'use strict';

/**
 * @ngdoc function
 * @name wttfinalApp.controller:SCtrl
 * @description
 * # SCtrl
 * Controller of the wttfinalApp
 */
angular.module('wttfinalApp')
  .controller('SCtrl', function ($scope, Restangular, $routeParams) {
    var geturl = 'https://watchthethrones.herokuapp.com/season/';
      var getroute = Restangular.oneUrl('droute', geturl);
      getroute.getList($routeParams.no).then(function (data) {
        data.sort(function (a, b) { return a.episode - b.episode });
        //$scope.addSuccessAlert();
        $scope.episodes = data;
        console.log(data);
      });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
