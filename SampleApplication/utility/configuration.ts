import { browser, Config } from 'protractor';
declare const allure: any;

export let config: Config = {
    framework: 'jasmine2', //Type of Framework used


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
        enableVNC: true,
    },
    stopSpecOnExpectationFailure: true, // Not working
    specs: ['../test/calculatortest.js'], //Name of the Specfile,
    // specs: ['./src/specs/**/*.spec.js'], //Name of the Specfile,
    showColors: true,
    allScriptsTimeout: 30 * 10 * 1000, // Timeouts from Protractor (Waiting for Page to Load) & Timeouts from WebDriver (Asynchronous Script Timeout)
    getPageTimeout:  30 * 10 * 1000, // Timeouts from Protractor (Waiting for Page to Load)
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30 * 10 * 1000 // Timeouts from Jasmine (Spec Timeout)
    },
    onPrepare() {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        //This is to set the javascript async code timeout to 60 sec
        browser.manage().timeouts().setScriptTimeout(60000);

        const jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'xmlresults'
        }));

        // const failFast = require('jasmine-fail-fast');
        // jasmine.getEnv().addReporter(failFast.init());

        //Allure reporter
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
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
    onComplete() {
        let browserName, browserVersion;
        const capsPromise = browser.getCapabilities();

        capsPromise.then((caps) => {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            const platform = caps.get('platform');

            let HTMLReport = require('protractor-html-reporter-2');

            const testConfig = {
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