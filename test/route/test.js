var assert = require('assert');

var request = require('supertest');
var app = require('../../app');

describe('TFTFT Route Test with Supertest', function() {


    describe('routes/index', function () {

          it('GET / respond with body', function(done){
            request(app)
              .get('/')
              .expect('Content-Type', /html/)
              .expect(200)
              .expect(/<body>/, done);
          })

          it('GET /api/welcome respond with json welcome messages', function(done){
            request(app)
              .get('/api/welcome')
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(200, done);
          })
    });


    describe('routes/users', function () {

            it('GET /users respond with html', function(done){
              request(app)
                .get('/users')
                .expect('Content-Type', /html/)
                .expect(200, done);
                //.expect(/<body>/, done);
            })
    });

});
