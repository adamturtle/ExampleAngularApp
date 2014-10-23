/* Drivers controller */
app.controller('nowPlayingController', function($scope,tmdbProvider) {
   $scope.titleFilter   = null;
   $scope.driversList  = [];
   $scope.orderByField = 'rating';
   $scope.reverseSort  = false;

   tmdbProvider.getReleases().success(function(response){
      $scope.movies = response.results;
   });

   tmdbProvider.getConfig().success(function(response){
      $scope.poster_path = response.images.base_url + 'w45';
   });

});

/* Driver controller */
app.controller('movieController', function($scope, $routeParams, tmdbProvider) {
   $scope.id           = $routeParams.id;
   $scope.movie        = null;
   $scope.orderByField = 'name';
   $scope.reverseSort  = false;

   tmdbProvider.getMovie($scope.id).success(function(response){
      $scope.movie = response;
   });

   tmdbProvider.getConfig().success(function(response){
      $scope.poster_path = response.images.base_url + 'w92';
   });
});