const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: false,
    videoOnFailOnly: true,
    saveAllAttempts: false,
    overwrite: true,
  },
  requestTimeout: 10000,
  responseTimeout: 30000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  viewportHeight: 660,
  viewportWidth: 1000,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://www.google.com.br',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on, config);
    },
  },
});
