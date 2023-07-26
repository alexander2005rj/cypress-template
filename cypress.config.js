const { defineConfig } = require("cypress");
// const cypressTestResults = require("cypress-test-results");

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
      require('cypress-mochawesome-reporter/plugin')(on, config);
      //cypressTestResults(on, config)
    },
  },
})