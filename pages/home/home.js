'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pages/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function($scope, GamedevsFactory) {
    console.log('homeCtrl');
    /*-----------------------------------------------------------------------------------*/
    /*  FRONTPAGE IMAGE OVERLAYS
    /*-----------------------------------------------------------------------------------*/
    $('.bar').mosaic({
        animation : 'slide'
    });

}]);