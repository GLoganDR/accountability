(function(){
  'use strict';

  angular.module('accountability')
  .controller('PoliticiansDetailCtrl', ['$scope', '$state', 'Politician', function($scope, $state, Politician){
    $scope.moment = moment;

    Politician.show($state.params.politicianId).then(function(response){
      $scope.politician = response.data;
    });

  }]);
})();
