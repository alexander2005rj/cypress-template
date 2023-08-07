const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const collectCypressTestResults = require('./cypress/support/test-summary');


module.exports = defineConfig({
  viewportHeight: 660,
  viewportWidth: 1000,
  defaultCommandTimeout: 30000,
  videoCompression: false,
  experimentalWebKitSupport: true,
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
    },
  },
})