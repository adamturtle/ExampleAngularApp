/* Drivers controller */
app.controller('driversController', function($scope, ergastAPIservice) {
   $scope.nameFilter   = null;
   $scope.driversList  = [];
   $scope.orderByField = 'position';
   $scope.reverseSort  = false;

   $scope.searchFilter = function (driver) {
      var re = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
   };

   ergastAPIservice.getDrivers().success(function (response) {
      //Digging into the response to get the relevant data
      var res = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

      // Convert strings to numbers
      angular.forEach(res, function (detail) {
         detail.points = parseFloat(detail.points);
         detail.position = parseFloat(detail.position);
      });

      $scope.driversList = res;
   });
});

/* Driver controller */
app.controller('driverController', function($scope, $routeParams, ergastAPIservice) {
   $scope.id           = $routeParams.id;
   $scope.races        = [];
   $scope.driver       = null;
   $scope.orderByField = 'round';
   $scope.reverseSort  = false;

   ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
      $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
   });

   ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
      var res = response.MRData.RaceTable.Races;

      // Convert strings to numbers
      angular.forEach(res, function (detail) {
         detail.Results[0].grid = parseFloat(detail.Results[0].grid);
         detail.Results[0].position = parseFloat(detail.Results[0].position);
         detail.round = parseFloat(detail.round);
      });

      $scope.races = res;
   });
});