module.exports = function(config) {

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
        reporters: ["dots","karma-typescript"],
        browsers: ["ChromeHeadless"],
        customLaunchers: {
            ChromeHeadless:  {
                base:   'Chrome',
                flags:  [
                  '--headless',
                  '--disable-gpu',
                  '--remote-debugging-port=9222',
                ],
              }
        },
        singleRun: true
    });
};