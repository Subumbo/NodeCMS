var UserModel = require('../model/user.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
    	res.render('index.ejs');
    });
    
    app.get('/login', function(req, res) {
    	res.render('login.ejs');
    });
    
    app.get('/signup', function(req, res) {
    	res.render('signup.ejs');
    });
    
    app.get('/users', function (req, res){
  return UserModel.find(function (err, users) {
    if (!err) {
      return res.send(users);
    } else {
      return console.log(err);
    }
  });
});
    
    app.get('/request-password', function(req, res) {
    	res.render('request-password.ejs');
    });
    
     app.get('/reset-password', function(req, res) {
    	res.render('reset-password.ejs');
    });
};