(function() {
    'use strict';

    angular
        .module('disciplines', [
            // 'dependencies'
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

            .state('add', {
                url: '/app/discipline/add',
                templateUrl: 'app/disciplines/disciplineForm.html'
                // controller: 'DisciplinesCtrl'
            })
            // $urlRouterProvider.otherwise('/');
        });
})();