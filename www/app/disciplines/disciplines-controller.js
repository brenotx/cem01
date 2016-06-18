(function() {
    'use strict';

    angular
        .module('disciplines')
        .controller('DisciplinesCtrl', DisciplinesCtrl);

    DisciplinesCtrl.$inject = ['$scope', 'disciplinesService'];

    /* @ngInject */
    function DisciplinesCtrl($scope, disciplinesService) {
        // var vm = this;
        $scope.disciplineList = [];
        $scope.addDiscipline = addDiscipline;

        activate();

        ////////////////

        function activate() {
        	disciplinesService.getDisciplines().then(function(response){
        		$scope.disciplineList = response.data;
        		return $scope.disciplineList;
        	});
        }

		function addDiscipline() {
        	var request = {};
        	request.name = 'Beatriz Domingues';
        	disciplinesService.addDiscipline(request).then(function(response){
        		console.log('Discipline added with success.')
        	});
		}



    }
})();