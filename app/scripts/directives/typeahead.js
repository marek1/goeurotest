'use strict';

var goeuroAngularTestApp = angular.module('goeuroAngularTestApp');
goeuroAngularTestApp.directive('typeahead', ['dataFactory', function(dataFactory) {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'id' : '@taId',
            'name' : '@taName',
            'submitted' : '=taSubmitted',
            'model' : '=taModel',
            'placeholder' : '@taPlaceholder',
            'select' : '&taSelect'
        },
        controller: function($scope) {
            $scope.items = [];
            $scope.hide = false;

            this.get = function(searchTerm) {

                dataFactory.getList(searchTerm).success(function (data) {
                    console.log('data : ',data);
                    $scope.items = data;

                });

            };

            this.activate = function(item) {
                $scope.active = item;
            };

            this.activateNextItem = function() {
                var index = $scope.items.indexOf($scope.active);
                this.activate($scope.items[(index + 1) % $scope.items.length]);
            };

            this.activatePreviousItem = function() {
                var index = $scope.items.indexOf($scope.active);
                this.activate($scope.items[index === 0 ? $scope.items.length - 1 : index - 1]);
            };

            this.isActive = function(item) {
                return $scope.active === item;
            };

            this.selectActive = function() {
                this.select($scope.active);
            };

            this.select = function(item) {
                $scope.hide = true;

                $scope.select({item:item});
            };

            $scope.query = function() {
                $scope.hide = false;
                $scope.search({term:$scope.term});
            };

        },
        templateUrl: 'views/typeahead.html',
        link : function (scope, element, attributes, controller) {

            var $input = element.find('input');

            $input.bind('keyup', function(e) {

                scope.hide = false;

                if (e.keyCode === 13) {
                    scope.$apply(function() { controller.selectActive(); });
                }

                if (e.keyCode === 27) {
                    scope.$apply(function() { scope.hide = true; });
                }

                if (e.keyCode >= 46 && e.keyCode <=90 ) {
                    controller.get(this.value);
                }
            });

            $input.bind('keydown', function(e) {

                if (e.keyCode === 13 || e.keyCode === 27) {
                    e.preventDefault();
                }
                if (e.keyCode === 40) {
                    e.preventDefault();
                    scope.$apply(function() { controller.activateNextItem(); });
                }
                if (e.keyCode === 38) {
                    e.preventDefault();
                    scope.$apply(function() { controller.activatePreviousItem(); });
                }

            });

        }
    };
}]);