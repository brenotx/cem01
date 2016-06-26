(function() {
    'use strict';

    angular
        .module('disciplines')
        .factory('disciplinesService', disciplinesService);

    disciplinesService.$inject = ['$http'];

    /* @ngInject */
    function disciplinesService($http) {
        var service = {
        	addDiscipline: addDiscipline, 
            getDisciplines: getDisciplines,
            addTeacher: addTeacher
        };
        return service;

        ////////////////

        function getDisciplines() {
        	return $http.get('http://localhost:8080/cem01/API/discipline/listar');
        }

        function addDiscipline(discipline) {
        	return $http.post('http://localhost:8080/cem01/API/discipline/cadastrar', discipline);
        }

        function addTeacher(teacher) {
            return $http.post('http://localhost:8080/cem01/API/teacher/add', teacher);
        }
    }
})();