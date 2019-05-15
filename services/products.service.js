"use strict";

const DbService = require("moleculer-db");
const mongoAdapter = require('moleculer-db-adapter-mongo')

module.exports = {
	name: "products",
    mixins: [DbService],
    adapter: new mongoAdapter("mongodb://localhost/moleculer-demo"),
    collection:"products"
};