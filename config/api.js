var UserModel = require('../model/user.js');
var controller = require('../controller/user-controller.js'); 

module.exports = function(app) {
    
    app.get('/api/users', controller.get);
	
	
	
	app.post('/api/users', 
	function(req, res) {

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

	});
	
	
	app.put('/api/users/:id', 
	function (req, res){
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
	});
	
	
	
	app.delete('/api/users/:id',
	function(req, res) {
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
	});


	
}
