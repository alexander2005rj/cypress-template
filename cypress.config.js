const { defineConfig } = require("cypress");
const cypressTestResults = require("cypress-test-results");

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
      cypressTestResults(on, config)
      // on('before:run', details => {
      //   console.log(JSON.stringify(details.browser.name))
      // })

      // on('after:run', results => {
      //   console.log(JSON.stringify("Status da execução ==> " + results.status));
      //   console.log(JSON.stringify("Nome do Browser ==> " + results.browserName));
      //   console.log(JSON.stringify("Passed ==> " + results.totalPassed));
      //   console.log(JSON.stringify("Failed ==> " + results.totalFailed));
      //   console.log(JSON.stringify("Pending ==> " + results.totalPending));
      //   console.log(JSON.stringify("Skipped ==> " + results.totalSkipped));
      //   console.log(JSON.stringify("Duration ==> " + results.totalDuration + "s"));
      // })
    },
  },
})