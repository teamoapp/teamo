'use strict';

angular.module('teamoApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isSection = function(section) {
        if (section=='dashboard'){
            if  ('/dashboard'===$location.path() ||
                '/team'===$location.path() ||
                '/questions'===$location.path() ||
                '/preferences'===$location.path()
                ){
                return true;
            }
        }
        return false;
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.login = function(){
        $location.path('/login');
    };

    $scope.signup = function(){
        $location.path('/signup');
    };


    });