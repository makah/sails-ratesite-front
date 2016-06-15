/* global angular */

var app = angular.module('rateSiteApp', ['ngRoute', 'rateSiteApp.authentication']);

app.config(function ($routeProvider) {
  'use strict';
  
  //$locationProvider.html5Mode(true);

  $routeProvider
    .when('/login', {
      templateUrl: '/authentication/login.html',
      controller: 'LoginCtrl'
    })
    .when('/signup', {
      templateUrl: 'authentication/signup.html',
      controller: 'SignupCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
