/**
 * Created by David Cruz on 09/06/2017.
 */
'use strict';

angular.module('users')
    .factory('UserService', function ($http, globalConfig) {
        var url = '';
        return {
            getUserByEmail: function (email) {
                url = globalConfig.apiAddress + '/users/' + email;
                return $http.get(url);
            },
            getUserByEmailToLogin: function (userToLogin) {
                url = globalConfig.apiAddress + '/users/login';
                return $http.post(url, userToLogin);
            },
            createUser: function (userToCreate) {
                url = globalConfig.apiAddress + '/users';
                return $http.post(url, userToCreate);
            }
        };
    });