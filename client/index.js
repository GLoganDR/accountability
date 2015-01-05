(function(){
  'use strict';

  angular.module('accountability', ['ui.router', 'angularFileUpload'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',         {url:'/',         templateUrl:'/views/home/home.html'})
        .state('register',     {url:'/register', templateUrl:'/views/users/users.html',        controller:'UsersCtrl'})
        .state('login',        {url:'/login',    templateUrl:'/views/users/users.html',        controller:'UsersCtrl'})
        .state('politicians',        {url:'/politicians',    templateUrl:'/views/politicians/politicians.html',        abstract:true})
        .state('politicians.list',   {url:'?page', templateUrl:'/views/politicians/politicians_list.html',   controller:'PoliticiansListCtrl'})
        .state('dashboard',   {url:'?page', templateUrl:'/views/users/dashboard.html',   controller:'DashboardCtrl'})
        .state('politicians.detail', {url:'/{politicianId}', templateUrl:'/views/politicians/politicians_detail.html', controller:'PoliticiansDetailCtrl'});
      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
