var mongoose = require('mongoose'),
	uuid = require('node-uuid'),
    Schema = mongoose.Schema;
var crypto = require('crypto');



var User = new Schema({  
	email: { type: String, required: true },  
	password: { type: String, required: true, set: encryptPassword},
	salt : { type:String, default: uuid.v1},  
	level: { type: Number, default:0 }
});

User.methods.isValidPassword = function(passwordString) {
    return this.password === hash(passwordString, this.salt);
};

function hash(password, salt) {
	return crypto.createHmac('sha256', salt).update(password).digest('hex');
}

function encryptPassword(password) {
	return hash(password, this.salt);
}

module.exports =  mongoose.model('User', User);