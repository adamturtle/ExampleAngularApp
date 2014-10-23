app.factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    urlBase = 'http://ergast.com/api/f1/2013';

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP',
        url: urlBase + '/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP',
        url: urlBase + '/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP',
        url: urlBase + '/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
});