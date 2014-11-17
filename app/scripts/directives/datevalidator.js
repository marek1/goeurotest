'use strict';

var goeuroAngularTestApp = angular.module('goeuroAngularTestApp');
goeuroAngularTestApp.directive('dateValidator', function() {
    return {
        require: 'ngModel',
        link: function (scope, elem, attr, ngModel) {
            function validate(value) {

                var d = Date.parse(value);

                // it is a date
                if (isNaN(d)) { // d.valueOf() could also work
                    ngModel.$setValidity('valid', false);
                } else {
                    ngModel.$setValidity('valid', true);
                }
            }

            scope.$watch(function () {
                return ngModel.$viewValue;
            }, validate);
        }
    };
});