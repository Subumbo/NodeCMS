var UserModel = require('../model/user.js');

exports.get =  function (req, res){
		return UserModel.find(function(err, users) {
			if(!err) {
				res.send(users);
			}else {
				console.log(err);
			}
		});	  		
	}