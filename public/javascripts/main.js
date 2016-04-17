//auto generate by bower-requirejs : see bower postinstall
//paths can be empty, here, the 5 lines are for dev commodity
require.config({
	paths: {
		angular: '../components/angular/angular.min',
		'angular-animate': '../components/angular-animate/angular-animate.min',
		'angular-bootstrap': '../components/angular-bootstrap/ui-bootstrap-tpls.min',
		'angular-resource': '../components/angular-resource/angular-resource.min',
		'angular-route': '../components/angular-route/angular-route.min'
	},
	shim: {
		app: [
			'angular'
		]
	},
	packages: [

	]
});

require(['app'], function() {
		//var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['appl']);
		});
});
