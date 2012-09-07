var express = require('express');
var app = module.exports = express.createServer();
var path = require("path");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;  


	
	





mongoose.connect('mongodb://localhost/ecomm_database');

require('./app/config/initialize.js')(app, express);
require('./app/config/routes.js')(app);
require('./app/modules/user-module.js')(app);
  

app.listen(3000);