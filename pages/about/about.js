'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pages/about', {
    templateUrl: 'pages/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', [function() {
  console.log('aboutCtrl');
      $('nav ul li').click(function() {
        $(this).add;
        rotate(index);
        return false;
      });
}]);