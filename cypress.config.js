const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://opencart.abstracta.us/index.php?route=',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
