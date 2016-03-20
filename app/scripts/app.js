'use strict';

/**
 * @ngdoc overview
 * @name wttfinalApp
 * @description
 * # wttfinalApp
 *
 * Main module of the application.
 */
angular
  .module('wttfinalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'cfp.loadingBar',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.poster'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/s/:no', {
        templateUrl: 'views/s.html',
        controller: 'SCtrl',
        controllerAs: 's'
      })
      .when('/episodeStream', {
        templateUrl: 'views/episodestream.html',
        controller: 'EpisodestreamCtrl',
        controllerAs: 'episodeStream'
      })
      .otherwise({
        redirectTo: '/s/1'
      });
  });
