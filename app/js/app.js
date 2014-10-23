var app = angular.module('nowPlayingApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.

      when("/nowplaying", {
         templateUrl: "partials/nowplaying.html",
         controller: "nowPlayingController"}
      )
      .when("/nowplaying/:id", {
         templateUrl: "partials/movie.html",
         controller: "movieController"
      })
      .otherwise({
         redirectTo: '/nowplaying'
      });
}]);