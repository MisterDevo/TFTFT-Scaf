var assert = require('assert');
var test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

// change this line to run locally
var isLocalSeleniumServer = false;
var travis = true;

var option_local = {
      server: 'http://127.0.0.1:4444/wd/hub',
      desiredCapabilities: { browserName: 'firefox' },
      baseUrl:'http://localhost:3000'
    };

var options = isLocalSeleniumServer ? option_local : travis ? require('./option-travis-sauce.js') : require('./option-sauce.js');


test.describe('TFTFT End To End tests', function() {

    this.timeout(100000);
    var client = {};

    test.before(function(){
        client = new webdriver.Builder().
                          withCapabilities(options.desiredCapabilities).
                          usingServer(options.server).
                          build();
    });


    test.describe('Welcome page', function() {

        test.it('should have the right title', function () {
            client.get(options.baseUrl);
            client.wait(client.getTitle(), 10000)
              .then(function(title){
                  assert.equal(title, 'TFTFT - Scaffolder');
              });
        });

        test.it('should wait for loading first angular view', function () {
            client.wait(webdriver.until.elementLocated(webdriver.By.id('welcome-view')), 10000)
            .getAttribute('class')
            .then(function(attr){
                assert.equal(attr, 'txtstyle ng-scope');
            });
        });

    });


    test.describe('First link menu', function() {

          test.it('should slide with ng-click condition', function () {
              client.findElement(webdriver.By.id('first-link'))
                .getAttribute('ng-click')
                .then(function(attr){
                    assert(attr.length);
                });
          });

          test.it('should display submenu on click after toggle if necessary (small device)', function () {
              client.findElement(webdriver.By.className('navbar-toggle'))
                .isDisplayed()
                .then(function(displayed){
                    if(displayed){
                      client.findElement(webdriver.By.className('navbar-toggle')).click();
                    }
                });
              client.findElement(webdriver.By.id('first-link')).click();
              client.findElement(webdriver.By.className('nav-second-level'))
                .isDisplayed()
                .then(function(displayed){
                    assert(displayed);
                });
           });

    });


    test.describe('Second link menu', function() {

        test.it('should display correct second link', function () {
            client.findElement(webdriver.By.id('second-link'))
              .getAttribute('href')
              .then(function(attr){
                  assert.equal(attr,  options.baseUrl + '/#second');
              });
        });

    });

    var passed = true;
    test.afterEach(function() {
        if(this.currentTest.state === 'failed') {
          passed = false;
        }
    });


    test.after(function(done) {
        if(options.saucelabs){
          client.getSession().then(function (sessionid){
              options.saucelabs.updateJob( sessionid.id_, { passed: passed }, function(err, res) {
                options.saucelabs.stopJob( sessionid.id_, { }, function(err, res) {
                  client.quit();
                  done();
                });
              });
            });
        } else {
            client.quit();
            done();
        }
    });

});
