'use strict';


var goeuroAngularTestApp = angular.module('goeuroAngularTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
]);

goeuroAngularTestApp
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/car-rental', {
                templateUrl: 'views/car-rental.html'
            })
            .when('/login', {
                templateUrl: 'views/login.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .constant('restUrl', 'http://www.goeuro.com/GoEuroAPI/rest/api/v2/position/suggest/de/');
