'use strict';

angular.module('teamoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/company/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        authenticate: true
      })
      .state('team', {
        url: '/team',
        templateUrl: 'app/company/team/team.html',
        controller: 'TeamsCtrl',
        authenticate: true
      })
      .state('questions', {
        url: '/questions',
        templateUrl: 'app/company/questions/questions.html',
        controller: 'QuestionsCtrl',
        authenticate: true
      })
      .state('preferences', {
        url: '/preferences',
        templateUrl: 'app/company/preferences/preferences.html',
        controller: 'PreferencesCtrl',
        authenticate: true
      });
  });
