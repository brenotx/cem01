describe('Factory: disciplinesService', function() {

    var disciplinesService;
    var httpBackend;
    beforeEach(function() {
        module('ui.router');
        module('disciplines');
        inject(function($httpBackend, $injector) {
            httpBackend = $httpBackend;
            disciplinesService = $injector.get('disciplinesService');
        });
    });

    // var disciplinesServiceObj;
    // var httpBackend;
    // beforeEach(inject(function($httpBackend, disciplinesService) {
    //     httpBackend = $httpBackend;
    //     disciplinesServiceObj = disciplinesService;
        
    // }));

    describe('HTTP calls', function() {

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should call the API', function() {
            var response = ['one thing', 'another thing'];
            var myThings = [];
            var errorStatus = '';
            var handler = {
                success: function(data) {
                    myThings = data.data;
                },
                error: function(data) {
                    errorStatus = data.data;
                }
            };

            spyOn(handler, 'success').and.callThrough();
            spyOn(handler, 'error').and.callThrough();
            
            sxpect(disciplinesService.getDisciplines()).toBeDefined();
            httpBackend.whenGET(/http:\/\/localhost:8080\/cem01\/API\/discipline\/listar/).respond(response);
            disciplinesService.getDisciplines().then(handler.success, handler.error);
            httpBackend.flush();

            expect(handler.success).toHaveBeenCalled();
            expect(myThings).toEqual(response);
            expect(handler.error).not.toHaveBeenCalled();
            expect(errorStatus).toEqual('');
        });

    });
});
