var express = require('express')
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(express);
  


var app = express.createServer();

require('./app/config/initialize.js')(app, express);
require('./app/config/routes.js')(app);


db.connection.on('open', function () {
  app.listen(3000);
});

