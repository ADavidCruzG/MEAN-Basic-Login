/**
 * Created by David Cruz on 09/06/2017.
 */
'use strict';

var usersModule = angular.module('users', [])
    .config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        usersModule.controller = $controllerProvider.register;
        usersModule.directive = $compileProvider.directive;
        usersModule.filter = $filterProvider.register;
        usersModule.factory = $provide.factory;
        usersModule.service = $provide.service;
        usersModule.constant = $provide.constant;
        usersModule.value = $provide.value;
    });