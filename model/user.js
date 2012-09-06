var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema({  
	    email: { type: String, required: true },  
	    password: { type: String, required: true },  
	    level: { type: Number, delault:0 }
});

module.exports = mongoose.model('User', User);