var app = angular.module('parkApp');
app.controller('ParkeringController',['$scope','$http','getParkerings', function ($scope,$http,getParkerings){

    getParkerings.resultSet().then(function(data){
        $scope.parkerings = data;
    })

}]);