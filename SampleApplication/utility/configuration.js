"use strict";
exports.__esModule = true;
exports.config = void 0;
var protractor_1 = require("protractor");
exports.config = {
    framework: 'jasmine2',
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
    // Use following configs for local testing
    directConnect: true,
    // baseUrl: 'http://172.26.0.4', // i.e. http://qa01.oneit.com.au:14080/tasa/
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // args: ['--headless', '--disable-gpu', '--window-size=1600,1200', '--disable-dev-shm-usage', '--no-sandbox', '--log-level=3']
            args: ['--disable-dev-shm-usage', '--no-sandbox', '--log-level=3']
        },
        enableVideo: true,
        enableVNC: true
    },
    stopSpecOnExpectationFailure: true,
    specs: ['../test/calculatortest.js'],
    // specs: ['./src/specs/**/*.spec.js'], //Name of the Specfile,
    showColors: true,
    allScriptsTimeout: 30 * 10 * 1000,
    getPageTimeout: 30 * 10 * 1000,
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30 * 10 * 1000 // Timeouts from Jasmine (Spec Timeout)
    },
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        //This is to set the javascript async code timeout to 60 sec
        protractor_1.browser.manage().timeouts().setScriptTimeout(60000);
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'xmlresults'
        }));
        // const failFast = require('jasmine-fail-fast');
        // jasmine.getEnv().addReporter(failFast.init());
        //Allure reporter
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            protractor_1.browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64');
                }, 'image/png')();
                done();
            });
            //   if (config.seleniumAddress) {
            //       browser.getSession().then(sessionData => {
            //           let sessionID = sessionData.getId();
            //           console.log('Session ID : ' + sessionID);
            //           allure.createAttachment('Video MP4', () => new Buffer('<html lang=\'en\'><body><video width=\'100%\' height=\'100%\' controls autoplay><source src=\''
            //               + config.video_url + sessionID + '.mp4'
            //               + '\' type=\'video/mp4\'></video></body></html>', 'utf-8'), 'text/html')();
            //       });
            //   }
        });
    },
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = protractor_1.browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            var platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            var testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './reports',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('./testresults/xmlresults.xml', testConfig);
        });
    }
};
