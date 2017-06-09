/**
 * Created by David Cruz on 09/06/2017.
 */
'use strict';

angular.module('users')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/views/home-view.html'
        }).state('users_welcome', {
            url: '/users/welcome',
            templateUrl: '/views/welcome-view.html'
        }).state('users_create', {
            url: '/users/register',
            templateUrl: '/views/users-create-view.html',
            controller: 'UserCreateController'
        }).state('users_login', {
            url: '/users/login',
            templateUrl: '/views/users-login-view.html',
            controller: 'UserLoginController'
        });
    })
    .constant('globalConfig', {
        apiAddress: 'http://localhost:3000/api'
    });