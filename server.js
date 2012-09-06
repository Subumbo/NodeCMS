var express = require('express');
var app = module.exports = express.createServer();
var path = require("path");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;  


	
	





mongoose.connect('mongodb://localhost/ecomm_database');

require('./config/initialize.js')(app, express);
require('./config/api.js')(app);
require('./config/routes.js')(app);
  

app.listen(3000);