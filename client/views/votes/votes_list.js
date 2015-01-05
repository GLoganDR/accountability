//(function(){
//  'use strict';
//
//  angular.module('accountability')
//  .controller('VotesListCtrl', ['$scope', '$state', 'Vote', function($scope, $state, Vote){
//    $scope.count = 0;
//    $scope.pages = 0;
//    $scope._ = _;
//
//
//    Vote.count().then(function(response){
//      $scope.total = response.data.count * 1;
//      $scope.pages = Math.ceil($scope.total / 5);
//    });
//
//    $scope.nuke = function(vote){
//      Vote.nuke(vote).then(function(response){
//        $state.reload();
//      });
//    };
//
//    $scope.isCurrent = function(page){
//      return page === $state.params.page * 1;
//    };
//
//    $scope.create = function(vote){
//      $scope.count = 0;
//      Vote.create(vote).then(function(response){
//        $scope.vote = {};
//        Vote.upload(response.data.voteId, $scope.files);
//      });
//    };
//
//    $scope.$on('upload', function(e, count){
//      $scope.count = count;
//      if($scope.count === $scope.files.length){
//        $state.reload();
//      }
//    });
//  }]);
//})();
