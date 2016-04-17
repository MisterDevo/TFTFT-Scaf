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
            browserName: 'firefox',
            platform: 'Linux',
            version: 'latest',

            tags: 'first-tag',
            name:  process.env.npm_package_name,
            build: 'first-build',

            passed: 'false',

            'public': true
        }

    }
