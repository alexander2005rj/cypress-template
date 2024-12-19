const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const collectCypressTestResults = require('./cypress/support/test-summary');
const { configureVisualRegression } = require('cypress-visual-regression')

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  requestTimeout: 20000,
  videoCompression: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: false,
    videoOnFailOnly: true,
    saveAllAttempts: false,
    overwrite: true
  },
  e2e: {
    env: {
      visualRegressionType: 'regression'
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async (results) => {
        console.log('override after:run');
        await afterRunHook();
        await collectCypressTestResults(results);
      });
      configureVisualRegression(on)
    },
  },
});
