'use strict';

angular.module('teamoApp')
    .controller('AdminCtrl', function ($scope, $http, Auth, userRepo, ApiaryUser, ApiaryCompany, ApiaryTeamCollection, ApiaryTeam) {

        // Use the User $resource to fetch all users
        $scope.users = userRepo.get();

        $scope.delete = function(user) {
            User.remove({ id: user._id });
            angular.forEach($scope.users, function(u, i) {
                if (u === user) {
                    $scope.users.splice(i, 1);
                }
            });
        };

        $scope.getMockUser = function(){
            $scope.user = ApiaryUser.blank();
            var t = new Date().getTime();
            $scope.user.username = t;
            $scope.user.name = t;
            $scope.user.email = t+'@domain.com';
            console.log($scope.user);
            return $scope.user;
        };


        $scope.userCreateResult = null;
        $scope.userReadResult = null;
        $scope.userUpdateResult = null;
        $scope.userDeleteResult = null;

        $scope.userCreate = function () {
            var user = $scope.getMockUser();
            ApiaryUser.create(user, function (data) {
                $scope.userCreateResult = data.collection[0];
            }, function (data) {
                $scope.userCreateResult = data;
            });
        };
        $scope.userRead = function () {
            ApiaryUser.get('', function (data) {
                $scope.userReadResult = data.collection[0];
            }, function (data) {
                $scope.userReadResult = data;
            });
        };
        $scope.userUpdate = function () {
            var user = $scope.getMockUser();
            ApiaryUser.update(user, function (data) {
                $scope.userUpdateResult = data.collection[0];
            }, function (data) {
                $scope.userUpdateResult = data;
            });
        };
        $scope.userDelete = function () {
            var user = $scope.getMockUser();
            ApiaryUser.delete(user, function (data) {
                $scope.userDeleteResult = data.collection[0];
            }, function (data) {
                $scope.userDeleteResult = data;
            });
        };

        $scope.getMockCompany = function(){
            $scope.company = ApiaryCompany.blank();
            var t = new Date().getTime();
            $scope.company.name = t;
            $scope.company.active = true;
            console.log($scope.company);
            return $scope.company;
        };

        $scope.companyCreateResult = null;
        $scope.companyGetResult = null;
        $scope.companyReadResult = null;
        $scope.companyUpdateResult = null;
        $scope.companyDeleteResult = null;

        $scope.companyCreate = function () {
            var company = $scope.getMockCompany();
            ApiaryCompany.create(company, function (data) {
                $scope.companyCreateResult = data.collection[0];
            }, function (data) {
                $scope.companyCreateResult = data;
            });
        };
        $scope.companyGet = function () {
            ApiaryCompany.get('', function (data) {
                $scope.companyGetResult = data;
            }, function (data) {
                $scope.companyGetResult = data;
            });
        };
        $scope.companyRead = function () {
            var company = $scope.getMockCompany();
            company.id = 1;
            ApiaryCompany.get({'id':company.id}, function (data) {
                $scope.companyReadResult = data.collection;
            }, function (data) {
                $scope.companyReadResult = data.collection;
            });
        };
        $scope.companyUpdate = function () {
            var company = $scope.getMockCompany();
            var d = new Date().getTime();
            company.id = 1;
            company.name = company.name + '.' + d;
            ApiaryCompany.update({
                'id':company.id,
                'active':company.active,
                'name':company.name,
                'owners':company.owners
            }, function (data) {
                $scope.companyUpdateResult = data.collection[0];
            }, function (data) {
                $scope.companyUpdateResult = data.collection[0];
            });
        };
        $scope.companyDelete = function () {
            var company = $scope.getMockCompany();
            ApiaryCompany.delete(company, function (data) {
                $scope.companyDeleteResult = data.collection[0];
            }, function (data) {
                $scope.companyDeleteResult = data;
            });
        };


        $scope.getMockTeam = function(){
            $scope.team = ApiaryTeam.blank();
            var t = new Date().getTime();
            $scope.team.name = t;
            console.log($scope.team);
            return $scope.team;
        };

        $scope.teamCreateResult = null;
        $scope.teamGetResult = null;
        $scope.teamReadResult = null;
        $scope.teamUpdateResult = null;
        $scope.teamDeleteResult = null;

        $scope.teamCreate = function () {
            var team = $scope.getMockTeam();
            var companyId = 1;
            ApiaryTeamCollection.create({'companyId':companyId, 'team':team}, function (data) {
                $scope.teamCreateResult = data.collection[0];
            }, function (data) {
                $scope.teamCreateResult = data;
            });
        };
        $scope.teamGet = function () {
            var companyId = 1;
            ApiaryTeamCollection.get({'companyId':companyId}, function (data) {
                $scope.teamGetResult = data;
            }, function (data) {
                $scope.teamGetResult = data;
            });
        };
        $scope.teamRead = function () {
            var team = $scope.getMockTeam();
            team.id = 1;
            ApiaryTeam.get({'id':team.id}, function (data) {
                $scope.teamReadResult = data.collection;
            }, function (data) {
                $scope.teamReadResult = data.collection;
            });
        };
        $scope.teamUpdate = function () {
            var team = $scope.getMockTeam();
            var d = new Date().getTime();
            team.id = 1;
            team.name = team.name + '.' + d;
            ApiaryTeam.update({
                'id':team.id,
                'active':team.active,
                'name':team.name,
                'owners':team.owners
            }, function (data) {
                $scope.teamUpdateResult = data.collection[0];
            }, function (data) {
                $scope.teamUpdateResult = data.collection[0];
            });
        };
        $scope.teamDelete = function () {
            var team = $scope.getMockTeam();
            ApiaryTeam.delete(team, function (data) {
                $scope.teamDeleteResult = data.collection[0];
            }, function (data) {
                $scope.teamDeleteResult = data;
            });
        };



    });
