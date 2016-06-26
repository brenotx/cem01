(function() {
    'use strict';

    angular
        .module('disciplines')
        .controller('DisciplinesCtrl', DisciplinesCtrl);

    DisciplinesCtrl.$inject = ['$scope', '$ionicHistory', 'disciplinesService', '$location'];

    /* @ngInject */
    function DisciplinesCtrl($scope, $ionicHistory, disciplinesService, $location) {
        var vm = this;

        // Variables
        vm.disciplineName = '';
        vm.disciplineCode = '';
        vm.disciplineList = [];

        // Methods
        vm.addDiscipline = addDiscipline;
        vm.gotoAddForm = gotoAddForm;

        function gotoAddForm() {
            $location.path("/app/discipline/add");
        }

        vm.myGoBack = function() {
            console.log('OK');
            $ionicHistory.goBack();
            // $ionicViewService.getBackView().go()
        };

        activate();

        ////////////////

        function activate() {
        	getDisciplines();
        }

		function addDiscipline() {
        	var request = {};
        	request.name = vm.disciplineName;
            request.code = vm.disciplineCode;
            request.teacherList = [];
            var tmp = {};
            tmp.firstName = 'Matheus';
            tmp.lastName = 'Braz';
            request.teacherList.push(tmp);
        	disciplinesService.addDiscipline(request).success(function(response) {
                console.log("Discipline added with success.")
        		getDisciplines();
        	}).error(function(error) {
                console.log("Um erro acomteceu.")
            });
		}

        function addTeacher() {
            var request = {};
            request.firstName = 'Breno';
            request.lastName = 'Teixeira';
            disciplinesService.addTeacher(request).then(function(response) {
                console.log('Teacher added with success.')
            });
        }

        function getDisciplines() {
            disciplinesService.getDisciplines().then(function(response) {
                    vm.disciplineList = response.data;
                    return vm.disciplineList;
                });
        }



    }
})();