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
    'restangular'
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
      .otherwise({
        redirectTo: '/s/1'
      });
  });
