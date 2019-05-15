"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			],
			//To access the new product service via REST API
			aliases:{
				//"REST products" key in aliases creates the common REST paths and links them to the products service actions
				"REST products" : "products" 
			}
		}],

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};
