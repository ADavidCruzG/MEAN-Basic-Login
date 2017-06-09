/**
 * Created by David Cruz on 09/06/2017.
 */
'use strict';

angular.module('users')
    .controller('UserLoginController', function ($scope, $rootScope, UserService, $state, toaster) {

        $scope.start = function () {
            $scope.user = {};
        };

        $scope.loginUser = function () {
            var userToLogin = $scope.user;

            UserService.getUserByEmailToLogin(userToLogin)
                .then(function (res) {
                    if (res.data.status === 404) {
                        // User does not exist, code 404 from server
                        toaster.pop({
                            type: 'error',
                            title: 'Error',
                            body: 'No existe un usuario con el correo ' + userToLogin.email,
                            timeout: 4000,
                            showCloseButton: true
                        });
                    } else if (res.data.status === 4041) {
                        // Wrong password, code 4041 from server
                        toaster.pop({
                            type: 'warning',
                            title: 'Aviso',
                            body: 'Contraseña incorrecta',
                            timeout: 4000,
                            showCloseButton: true
                        });
                    } else if (res.data.status === 200) {
                        // Successful authentication, code 200 from server
                        toaster.pop({
                            type: 'success',
                            title: 'Bienvenido',
                            body: 'Hola ' + res.data.user.firstName + ' ' + res.data.user.lastName,
                            timeout: 4000,
                            showCloseButton: true
                        });
                        $state.go('users_welcome');
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
        };

        $scope.start();
    });