/* Filters */
app.filter('job',function(){
   // Return object containing string
   return function(input, job){
      var ret = null;
      angular.forEach(input, function(obj){
         if ( obj.job.toLowerCase() == job.toLowerCase() ){
            ret = obj.name;
         }
      })
      return ret;
   }
});