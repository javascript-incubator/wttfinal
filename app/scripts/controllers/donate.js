'use strict';

/**
 * @ngdoc function
 * @name wttfinalApp.controller:DonateCtrl
 * @description
 * # DonateCtrl
 * Controller of the wttfinalApp
 */
angular.module('wttfinalApp')
  .controller('DonateCtrl', function($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.notGood = 'btn-primary';
    $scope.donateNow = function(name, email) {
      if (!name || !email) {
        $scope.notGood = 'btn-danger';
      } else {
         
        $http({
          method: 'GET',
          url: 'https://block.io/api/v2/get_new_address/?api_key=0af1-c957-29d2-8972&label=WTTDonate'+name
        }).then(function successCallback(response) {
          if(response.data.status === 'success'){
            $scope.bts = [];
            $scope.bts = [
              {
                'btc' : response.data.data.address,
                'btqr' : 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+response.data.address
              }
            ];
            $scope.notGood = 'btn-success';
          }else{
             $scope.notGood = 'btn-danger';
          }
        }, function errorCallback(response) {
          $scope.notGood = 'btn-danger';
        });
      }
    }
  });