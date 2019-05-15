"use strict";

// used moleculer-db module as a mixin to store data in our service.
//moleculer-db module is a universal data store module. It has common CRUD actions 
const DbService = require("moleculer-db"); 


// MongoDB adapter for the Moleculer DB module
// Set up adapter into your service
const mongoAdapter = require('moleculer-db-adapter-mongo')

module.exports = {
	name: "products",
    mixins: [DbService],
    adapter: new mongoAdapter("mongodb://localhost/moleculer-demo"),
    collection:"products"
};