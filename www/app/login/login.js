(function() {
    'use strict';

    angular
        .module('login', [
        ])
        .controller("LoginCtrl", LoginCtrl);

        LoginCtrl.$inject = ['$scope', '$location'];

        function LoginCtrl($scope, $location) {
        	// var vm = this;
        	$scope.login = function login(argument) {
        		$location.path('/app/playlists');
        	}
        }
})();