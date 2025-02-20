var UserModel = require('./../models/user.js');

var controller = require('./../controllers/user-controller.js');

module.exports = function(app) {

	app.post('/api/users', controller.post);
	app.get('/api/users', controller.get);

	app.post('/login', function(req, res) {

		UserModel.find({
			email : req.body.email
		}, function(err, users) {
			if(err) {
				// LOG 
				console.log('user not found');
			} else if(users.length > 0){
				console.log(users);
				var user = users[0];
				if(user.isValidPassword(req.body.password)) {
					req.session.uid = user._id;
					res.send(user);	
				}
			}
		});
	});
	app.get('/login', function(req, res) {
		res.render('login.ejs');
	});
	
	

	
	app.get('/', check, function(req, res) {
		res.render('index.ejs');
	});

	

	app.post('/signup', function(req, res) {
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
	app.get('/signup', function(req, res) {
		res.render('signup.ejs');
	});
	
	

	app.get('/request-password', function(req, res) {
		res.render('request-password.ejs');
	});

	app.get('/reset-password', function(req, res) {
		res.render('reset-password.ejs');
	});
};


function check(req, res, next) {	
	if(req.session.uid) {
		UserModel.findById(req.session.uid, function(err,user) {
			if(user) {
				req.currentUser = user;
				next();
			} else {
				res.redirect('/login');
			}
		});
	} else {
		res.redirect('/login');
	}
}