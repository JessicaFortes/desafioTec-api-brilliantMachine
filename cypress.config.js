const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://fakestoreapi.com",
  },
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
    },
  },
});
