'use strict';

angular.module('teamoApp')
  .controller('SidebarCtrl', function ($scope, $location, Auth) {

        $scope.isActive = function(route) {
            return route === $location.path();
        };

    });