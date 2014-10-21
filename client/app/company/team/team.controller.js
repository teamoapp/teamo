'use strict';

angular.module('teamoApp')
  .controller('TeamsCtrl', function ($scope, ApiaryCompany) {

        $scope.companyRead = function () {
            ApiaryCompany.get({}, function (data) {
                $scope.companies = data.collection;
            }, function (data) {
                //error
                console.log('error..', data);
            });
        };

        $scope.companyRead();

        $scope.usersRead = function () {
            $scope.users = [
                {
                    'name':'John Doe',
                    'email': 'jdoe@domain.com',
                    'id': 100
                } ,
                {
                    'name':'Jeff Green',
                    'email': 'jgreen@domain.com',
                    'id': 101
                },
                {
                    'name':'Jason Brown',
                    'email': 'jbrown@domain.com',
                    'id': 102
                }
            ]
        };
        $scope.usersRead();

        $scope.delete = function (user) {
            user.hide=true;
        };

        $scope.edit = function (user) {
            user.editing = !user.editing;
        };

        $scope.add = function (users) {
            users.push({
                'name':'',
                'email': '',
                'id': null,
                'editing':true
            });
        };

 
  });
