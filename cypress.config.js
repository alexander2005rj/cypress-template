const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 660,
  viewportWidth: 1000,
  defaultCommandTimeout: 30000,
  videoCompression: false,
  experimentalWebKitSupport: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'tap,cypress-mochawesome-reporter',
    cypressMochawesomeReporterOptions: {
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: false,
      videoOnFailOnly: true,
      saveAllAttempts: false,
      overwrite: true,
    },
  },
  e2e: {
    baseUrl: 'https://www.google.com.br',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on, config);
    },
  },
});
