var app = angular.module('parkApp', ["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'ParkeringController',

    })

});