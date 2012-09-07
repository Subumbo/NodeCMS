var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema({  
	    email: { type: String, required: true },  
	    password: { type: String, required: true },  
	    level: { type: Number, delault:0 }
});


var UserModel = mongoose.model('User', User);

exports.get =  function (req, res){
		return UserModel.find(function(err, users) {
			if(!err) {
				res.send(users);
			}else {
				console.log(err);
			}
		});	  		
	}
	
exports.post = function(req, res) {

		var user;
		console.log("POST: ");
		console.log(req.body);
		user = new UserModel({
			email : req.body.email,
			password : req.body.password,
			level : 1
		});
		user.save(function(err) {
			if(!err) {
				return console.log("created");
			} else {
				return console.log(err);
			}
		});
		return res.send(user);

	}
	
exports.put = function (req, res){
  		return UserModel.findById(req.params.id, function (err, user) {
			    user.email = req.body.email;
			    user.password = req.body.password;
			    return user.save(function (err) {
			      if (!err) {
			        console.log("updated");
			      } else {
			        console.log(err);
			      }
			      return res.send(user);
	    	});
  		});
	}
	

exports.delete = function(req, res) {
		return UserModel.findById(req.params.id, function(err, user) {
			return user.remove(function(err) {
				if(!err) {
					console.log("removed");
					return res.send('');
				} else {
					console.log(err);
				}
			});
		});
	}