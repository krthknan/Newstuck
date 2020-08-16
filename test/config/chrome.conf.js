exports.config = {
    directConnect: true,

    params: {
        url: "http://stage-newstuck.onemindindia.com",
        curatorCredentials: {username: 'StageCurator', password: '$tageN3w5tuckCu6ato6'},
        waitInMilliSeconds: 30000,
    },

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'unexpectedAlertBehaviour': 'ignore',
            'chromeOptions': {
                prefs: {
                    download: {
                        'prompt_for_download': false,
                        'directory_upgrade': true,
                        'default_directory': __dirname + "\\Downloads"
                    }
                }
            }
        }
    ],

    specs: [
        '../e2e/C001_OpenNews.spec.js',
        '../e2e/C002_newsDateFormat.js',
        '../e2e/C003_bookmarkNews.spec.js'
    ],

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.waitForAngularEnabled(false);
    }
}