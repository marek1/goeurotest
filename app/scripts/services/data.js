'use strict';

var goeuroAngularTestApp = angular.module('goeuroAngularTestApp');
goeuroAngularTestApp.factory('dataFactory', ['$http', 'restUrl', function($http, restUrl) {
    /*
     * only used for local http gets/posts
     */
    var dataFactory = {};

    dataFactory.getList = function (searchTerm) {
        return $http.get(restUrl + '/' + searchTerm);
    };

    return dataFactory;
}]);