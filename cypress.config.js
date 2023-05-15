const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {username: 'Karam_7', password: 'Karam@123'},
  e2e: {
    baseUrl: 'https://goal-dev.mdx.ac.uk/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
