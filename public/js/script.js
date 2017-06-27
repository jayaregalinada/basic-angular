var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'HelloController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'HelloController'
    })
})

app.controller('HelloController', function($scope, $log) {
    $scope.intro = 'Hello World'


    $scope.people = [
        {
            name: 'John Doe',
            age: 12,
            active: true
        },
        {
            name: 'Jay Cee',
            age: 22,
            active: false
        },
        {
            name: 'Dianne Dy',
            age: 44,
            active: true
        },
        {
            name: 'Auto Gun',
            age: 22,
            active: false
        }
    ]

    $scope.markAsActive = function(person) {
        person.active = true
    }

    $scope.markAsInactive = function(person) {
        person.active = false
    }
})



