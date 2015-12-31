'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.games',
  'myApp.about',
  'myApp.contact',
  'myApp.gdMenu',
  'myApp.gdFooter',
  'myApp.gdFullSlider',
  'myApp.gdSlimSlider',
  'gamedevs.factories'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/pages/home'});
}]).

run(['$rootScope', '$http', function($rootScope, $http, GamedevsFactory) {

      // remap jQuery to $
      (function($){})(window.jQuery);

      /*-----------------------------------------------------------------------------------*/
      /*  HOMEPAGE SLIDER - thanks to user Samich: http://jsfiddle.net/GPuh6/23/light/
      /*-----------------------------------------------------------------------------------*/

      $('.slider .slide:first').addClass('active').fadeIn(200);

      function rotate(index) {
        $('.slider .slide.active').removeClass('active').fadeOut(300, function() {
          $('.slider .slide:eq(' + index + ')').addClass('active').fadeIn(300);
        });
      }

      $('.slider-nav li a').click(function() {
        var index = $(this).parent().index('li');
        rotate(index);
        return false;
      });

      setInterval(function() {
        var $next = $('.slider .slide.active').next();

        if ($next.length == 0)
          $next = $('.slider .slide:first');

        rotate($next.index());
      }, 5000); //Control the timing in mseconds

    //function loadGames() {
    //   var prmGames = GamedevsFactory.query();
    //      prmGames.then(function (games) {
    //      $rootScope.games = games;
    //   });
    //}
    //
    //loadGames();
    //
    //$rootScope.deleteGame = function(game) {
    //    GamedevsFactory.deleteGame(game);
    //    loadGames();
    //};
    //
    //$rootScope.shortDesc = function (game) {
    //    var res = game.description.split(".")[0];
    //    return res;
    //};


}]);
