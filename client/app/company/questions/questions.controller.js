'use strict';

angular.module('teamoApp')
  .controller('QuestionsCtrl', function ($scope) {

        $scope.items = [];

        $scope.add = function(){

            $scope.items.push({});

        }

 
  });
