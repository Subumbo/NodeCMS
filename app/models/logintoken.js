var mongoose = require('mongoose');
    
var Schema = mongoose.Schema({
	email: {type: String, required:true },
	series: {type:String, required:true},
	tokes : {type:String, required:true}
});

Schema.methods.createToken = function() {
	return '';
} 
