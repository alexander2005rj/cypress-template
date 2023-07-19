const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 660,
  viewportWidth: 1000,
  defaultCommandTimeout: 30000,
  videoCompression: false,
  experimentalWebKitSupport: true,
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
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    baseUrl: 'https://www.google.com.br',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on, config);
    },
  },
});
