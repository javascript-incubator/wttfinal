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
    'countdownTimer',
    'ui.bootstrap',
  'angular-google-analytics'])
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
      .when('/Disclaimer', {
        templateUrl: 'views/disclaimer.html',
        controller: 'DisclaimerCtrl',
        controllerAs: 'Disclaimer'
      })
      .when('/donate', {
        templateUrl: 'views/donate.html',
        controller: 'DonateCtrl',
        controllerAs: 'donate'
      })
      .otherwise({
        redirectTo: '/s/1'
      });
  });
