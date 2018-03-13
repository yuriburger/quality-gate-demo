module.exports = function(config) {

    const isTeamFoundationBuild = process.env.TF_BUILD ? true : false;
    const browsers = isTeamFoundationBuild ? ['ChromeSelenium'] : ['ChromeHeadless'];

    const webdriverConfig = {
        hostname: 'webdriver',
        port: 4444
    }

    config.set({
        hostname: 'localhost',
        port: 9876,
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/**/*.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        karmaTypescriptConfig: {
            reports:
            {
                "lcovonly": {
                    "directory": "coverage",
                    "filename": "lcov.info",
                    "subdirectory": "lcov"
                },
                "html": {
                    "directory": "coverage",
                    "subdirectory": "html"
                }
            }
        },
        reporters: ["dots","karma-typescript"],
        browsers: browsers,
        customLaunchers: {
            ChromeHeadless:  {
                base:   'Chrome',
                flags:  [
                  '--headless',
                  '--disable-gpu',
                  '--remote-debugging-port=9222',
                ],
            },
            ChromeSelenium: {
                base: 'WebDriver',
                config: webdriverConfig,
                browserName: 'ChromeSelenium',
                flags: []
            }
        },
        singleRun: true
    });
};