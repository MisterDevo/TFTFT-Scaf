var assert = require('assert');

var users = require('../../routes/users');

describe('TFTFT Unit Test', function() {

  describe('testFunc in route/users', function () {

    it('should return "TFTFT" string', function () {
      assert.equal(users.testFunc(), "TFTFT");
    });

  });

});
