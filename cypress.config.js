const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://www.lambdatest.com/selenium-playground/',
    viewportHeight:938,
    viewportWidth: 1520,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
