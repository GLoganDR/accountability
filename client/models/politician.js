/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('accountability')
  .factory('Vote', ['$rootScope', '$http', function($rootScope, $http){

    function create(politician){
      return $http.post('/politicians', politician);
    }

    function show(voteId){
      return $http.get('/politicians/' + politicianId);
    }

    function count(){
      return $http.get('/politicians/count');
    }

    function nuke(politician){
      return $http.delete('/politicians/' + politician.politician_id);
    }

    return {create:create, show:show, count:count, nuke:nuke};
  }]);
})();
