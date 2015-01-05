(function(){
  'use strict';

  angular.module('accountability', ['ui.router', 'angularFileUpload'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',         {url:'/',         templateUrl:'/views/home/home.html'})
        .state('register',     {url:'/register', templateUrl:'/views/users/users.html',        controller:'UsersCtrl'})
        .state('login',        {url:'/login',    templateUrl:'/views/users/users.html',        controller:'UsersCtrl'})
        .state('votes',        {url:'/votes',    templateUrl:'/views/votes/votes.html',        abstract:true})
        .state('votes.list',   {url:'?decision&page', templateUrl:'/views/votes/votes_list.html',   controller:'VotesListCtrl'})
        .state('votes.detail', {url:'/{voteId}', templateUrl:'/views/votes/votes_detail.html', controller:'VotesDetailCtrl'});
      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
