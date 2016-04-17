angular.module('services', [])

      .factory('welcomeService', ['$resource', function ($resource) {

          var host = 'api/welcome';
          return {
                    messages: $resource(host, {}, {
                      msg: {
                        method: 'GET',
                        params: { id: '@_id' },
                        url: host + '/:id'
                    },
              })
          };
      }]);

