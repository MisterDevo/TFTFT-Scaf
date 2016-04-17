angular.module('controllers', [])

  // This is the main controller, the first and global controller :

  .controller('globalController', ['$scope', '$location', function($scope, $location) {
      // display elements after page ready
      angular.element(document.querySelector('.sidebar')).css('visibility', 'visible');

	   }
  ])


  // Injection for others controller :

  .controller('welcomeController', ['$scope', '$injector',
    function($scope, $injector) {
	      require(['controllers/welcomeController'], function(ctrl) {
          			$injector.invoke(ctrl, this, {'$scope': $scope});
      	});
    }
  ])

  .controller('loginController', ['$scope', '$injector',
    function($scope, $injector) {
	      require(['controllers/loginController'], function(ctrl) {
          			$injector.invoke(ctrl, this, {'$scope': $scope});
      	});
    }
  ])

  // **********************************
;
