(function(){
  'use strict';

  angular.module('accountability')
  .controller('DashboardCtrl', ['$scope', '$state', 'Politician', function($scope, $state, Politician){
    $scope.count = 0;
    $scope.pages = 0;
    $scope._ = _;


    Politician.count().then(function(response){
      $scope.total = response.data.count * 1;
      $scope.pages = Math.ceil($scope.total / 5);
    });

    $scope.nuke = function(Politician){
      Politician.nuke(politician).then(function(response){
        $state.reload();
      });
    };

    $scope.isCurrent = function(page){
      return page === $state.params.page * 1;
    };

    $scope.create = function(politician){
      $scope.count = 0;
      Politician.create(politician).then(function(response){
        $scope.politician = {};
        Politician.upload(response.data.politicianId, $scope.files);
      });
    };

    $scope.$on('upload', function(e, count){
      $scope.count = count;
      if($scope.count === $scope.files.length){
        $state.reload();
      }
    });
  }]);
})();
