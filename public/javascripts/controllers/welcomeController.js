define([], 
    function() {
        return ['$scope', 'welcomeService', function($scope, welcomeService) {
            
            $scope.messages = welcomeService.messages.query();
            
            
            $scope.$apply();
	}];
});
