/// <reference types="cypress" />

module.exports = (on, config) => {
    require('cypress-json-results')({
        on,
        filename: 'cypress/report/results.json',
        githubActionsSummary: 'test'
    })
}