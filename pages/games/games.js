'use strict';

angular.module('myApp.games', ['ngRoute', 'ngAnimate', 'gamedevs.factories', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pages/games', {
    templateUrl: 'pages/games/games.html',
    controller: 'gamesCtrl'
  });

}])

.controller('gamesCtrl', function($scope, GamedevsFactory) {
  console.log('gamesCtrl');


  function loadGames() {
    var prmGames = GamedevsFactory.query();
    prmGames.then(function (games) {
      $scope.games = games;
    });
  }

  loadGames();

  $scope.deleteGame = function(game) {
    GamedevsFactory.deleteGame(game);
    loadGames();
  };

  $scope.shortDesc = function (game) {
    var res = game.description.split(".")[0];
    return res;
  };

});
