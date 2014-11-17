'use strict';

var goeuroAngularTestApp = angular.module('goeuroAngularTestApp');
goeuroAngularTestApp.directive('highlightItem', function() {
    return {
        require: '^typeahead',
        link: function(scope, element, attrs, controller) {

            var item = scope.$eval(attrs.highlightItem);

            scope.$watch(function() { return controller.isActive(item); }, function(active) {
                if (active) {
                    element.addClass('active');
                } else {
                    element.removeClass('active');
                }
            });

            element.bind('mouseenter', function() {
                scope.$apply(function() { controller.activate(item); });
            });
            element.bind('click', function() {
                scope.$apply(function() { controller.select(item); });
            });
        }
    };
});