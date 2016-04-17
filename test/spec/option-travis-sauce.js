var SauceLabs = require("saucelabs");
var username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY;

var saucelabs = new SauceLabs({
            username: username,
            password: accessKey
          });

module.exports = {
        server : "http://" + username + ":" + accessKey +
            "@ondemand.saucelabs.com:80/wd/hub",

        saucelabs: saucelabs,

        logLevel: 'silent',

        baseUrl:'https://tftft-scaf-misterdevo.c9users.io',

        desiredCapabilities: {
            browserName: (process.env._BROWSER || '').replace(/_/g, ' '),
            platform: (process.env._PLATFORM || '').replace(/_/g, ' '),
            version: 'latest',

            tags: [process.env.TRAVIS_JOB_NUMBER],
            name: 'TFTFT-Scaf' + process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,

            passed: 'false',

            'public': true
        }

    }
