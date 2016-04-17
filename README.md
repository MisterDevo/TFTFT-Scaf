
_Run with NodeJs v4 or v5_  

Download it ! or Clone it ! or Fork it ! or ...  
Then Install it, Start it, Test it, Browse it, Containerize it ...

### TFTFT ExpressJs - TFTFT AngularJs :

##### `npm install`  
* **ExpressJs** dependencies : _body-parser - cookie-parser - debug - express - jade - morgan - serve-favicon_
* **Bower** dependencies : _bower - bower-requirejs_
  * **`bower install`** is called in `npm postinstall`  **AngularJs - RequireJs - BootstrapCss**
  * **`bower-requirejs`** is called in `bower postinstall` (_see .bowerrc_) to generate main requirejs file
* _**md-mailgun** : my dependency to send me a mail with mailgun_

##### `npm start`
Start **ExpressJs** server and listen to `http://localhost:3000` to serve api and static files.

### TFTFT Test :

##### `npm test`  
_Mocha runner with config (`test/**/*.js`) and Istanbul auto-instrumented coverage/report_
* TFTFT Unit Test : **mocha**
* TFTFT Route Test : **supertest**
* TFTFT Coverage Test : **istanbul**
* TFTFT Specification Test : **selenium-webdriver**  in folder 'test/spec/'  
* _Note for Specification Test :  
  **Selenium Server** : Local or Remote ? ... Up to Developer !  
  Default to Remote for the needs of this repo : **saucelabs** instrumented in tests with **TravisCI** configuration._  


  _For local or remote :  
  **In `test/spec/test-wdjs-spec.js` change `var isLocalSeleniumServer = false;`**_
     * _**Local Selenium Server :**_  
       * _Change config with :_  
       ```
         var option_local = {
                 server: 'http://127.0.0.1:4444/wd/hub',
                 desiredCapabilities: { browserName: 'firefox' },
                 baseUrl:'http://localhost:3000'
         };
       ```

       * _Start a local selenium server_  

        ```
        /*Example with selenium-standalone (not include in this package)*/
        npm install selenium-standalone;
        ./node_modules/.bin/selenium-standalone install;
        ./node_modules/.bin/selenium-standalone start;
        ```  
     * _**Remote Selenium Server with SauceLabs :**_  

       _For Travis :  
       **In `test/spec/test-wdjs-spec.js` change `var travis = true;`**_

       * _**With Travis environnement** `var travis = true;` (default) :_  
        _Config in **`test/spec/option-travis-sauce.js`** :_  
       ```
        SAUCE_USERNAME=[secure] and SAUCE_ACCESS_KEY=[secure] must be set in Travis env variable
        TRAVIS_JOB_NUMBER, TRAVIS_BUILD_NUMBER are automatically set by Travis
        _BROWSER, _PLATFORM, _VERSION are define in .travis.yml matrix
        ```

       * _**Without Travis environnement** `var travis = false;` :_   
       _Config in **`test/spec/option-sauce.js`** :_
        ```
        In local environnement :
        $ export SAUCE_USERNAME=[secure]
        $ export SAUCE_ACCESS_KEY=[secure]
        ```

      _Change baseUrl to address app in a cloud developpement environnement  
      For this repo, **`baseUrl:'https://tftft-scaf-misterdevo.c9users.io'`** on Cloud9_  
