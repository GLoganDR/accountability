///* jshint loopfunc:true, camelcase:false */
//
//(function(){
//  'use strict';
//
//  angular.module('accountability')
//  .factory('Vote', ['$rootScope', '$http', function($rootScope, $http){
//
//    function create(vote){
//      return $http.post('/votes', vote);
//    }
//
//    function show(voteId){
//      return $http.get('/votes/' + voteId);
//    }
//
//    function count(){
//      return $http.get('/votes/count');
//    }
//
//    function nuke(vote){
//      return $http.delete('/votes/' + vote.vote_id);
//    }
//
//    return {create:create, show:show, count:count, nuke:nuke};
//  }]);
//})();
