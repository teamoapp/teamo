'use strict';

angular.module('teamoApp')
  .controller('DashboardCtrl', function ($scope) {

        $scope.graphData =  [ ];

        var d = new Date();
        for (var i=0; i<30; i++){
            var addDate = new Date();
            var value = Math.floor(Math.random()*11);
            addDate.setDate(d.getDate()-i);
            $scope.graphData.push({
                "Date": addDate,
                "Day": addDate.getMonth()+'-'+addDate.getDate(),
                "Team": "Acme",
                "Value": value
            });
        }

 
  });
