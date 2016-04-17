define(['angular-route',
        'angular-resource',
        'angular-animate',
        'angular-bootstrap',
        'controllers/appControllers',
        'services/appServices',
        'directives/appDirectives'
  ], function() {
        return angular.module('appl', ['ngRoute',
                                        'ngResource',
                                        'ngAnimate',
                                        'ui.bootstrap',
                                        'controllers',
                                        'services',
                                        'directives'
        ])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                      templateUrl: '../welcome.html',
                      controller: 'welcomeController'
                    })
                    .when('/login', {
                      templateUrl: '../login.html',
                      controller: 'loginController'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }
        ]);
    }
);
