'use strict';

var goeuroAngularTestApp = angular.module('goeuroAngularTestApp');
goeuroAngularTestApp.controller('MainCtrl', ['$scope', function ($scope) {

    /*
     * hoist scope vars
     */
    $scope.submitted = false;
    $scope.bookingData = {
        'origin' : '',
        'destination' :''
    };
    $scope.dateStart = null;
    $scope.dateEnd = null;
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    /*
     * set scope vars
     */

    $scope.setDates = function() {
        var newDate = new Date();
        $scope.dateStart = newDate;
        $scope.dateEnd = new Date(newDate.getTime() + (14 * (1000 * 60 * 60 * 24)));
    };
    $scope.setDates();

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    /*
     * handle events
     */

    $scope.selectOrigin = function(item) {
        $scope.bookingData.origin = item.fullName;
    };

    $scope.selectDestination = function(item) {
        $scope.bookingData.destination = item.fullName;
    };

    $scope.openStartDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.startDateOpenend = true;
    };

    $scope.openEndDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.endDateOpened = true;
    };


    //nur für diesen Test , weil nicht submitted
    $scope.gutGesucht = false;

    $scope.submitSearch = function(){

        $scope.submitted = true;


        if ($scope.bookingForm.$valid){

            //submit
            $scope.gutGesucht = true;

        }

    };

}]);
