app.factory('tmdbProvider',function($http){

    var tmdbAPI     = {};
    tmdbAPI.urlBase = 'https://api.themoviedb.org/3';
    tmdbAPI.apiKey  = '815ed3e88291031d0bbf7e4880ea0c89';

    // Get now playing
    tmdbAPI.getReleases = function(){
      return $http({
        method: 'JSONP',
        url: this.urlBase + '/movie/now_playing',
        params: {
          'api_key': this.apiKey,
          'language ': 'en',
          'callback': 'JSON_CALLBACK'
        }
      });
    };

    // Get single movie
    tmdbAPI.getMovie = function(id){
      return $http({
        method: 'JSONP',
        url: this.urlBase + '/movie/' + id,
        params: {
          'api_key': this.apiKey,
          'append_to_response': 'credits',
          'callback': 'JSON_CALLBACK'
        }
      });
    };


    // Get configuration
    tmdbAPI.getConfig = function(){
      return $http({
        method: 'JSONP',
        url: this.urlBase + '/configuration',
        params: {
          'api_key': this.apiKey,
          'callback': 'JSON_CALLBACK'
        }
      });
    };

    return tmdbAPI;
});