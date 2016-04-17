var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TFTFT - Scaffolder', version: require('../package.json').version });
});

router.get('/api/welcome', function(req, res, next) {
  res.json( [ {text:'Express Server App - Angular Client App'},
              {text:''},
              {text:'Mocha - Unit Test - Route Test Supertest - End To End Test Selenium-WebDriver'},
              {text:'Istanbul Coverage Instrumented Code'}
            ]);
});

module.exports = router;
