const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		baseUrl: "https://demo.applitools.com/",
		setupNodeEvents(on, config) {
			// plugins here
		},
	},
});
