const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false ,
    // experimentalOriginDependencies: true,
    projectId: "vuwz9m",
    baseUrl: "https://mddistributors--ecomdev.sandbox.my.site.com/commerce/",
    "excludeSpecPattern" : ["**/1-getting-started/*", "**/2-advanced-examples/*"],
       
  },
});
