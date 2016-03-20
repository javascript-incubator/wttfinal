'use strict';

/**
 * @ngdoc function
 * @name wttfinalApp.controller:EpisodestreamCtrl
 * @description
 * # EpisodestreamCtrl
 * Controller of the wttfinalApp
 */
angular.module('wttfinalApp')
  .controller('EpisodestreamCtrl', function ($sce,$scope) {
    $scope.src = $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.mp4');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
