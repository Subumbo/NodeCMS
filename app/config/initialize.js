module.exports = function(app, express) {
	
	var MongoStore = require('connect-mongo')(express);
	var mongoose = require('mongoose');
	
	app.configure(function() {
		app.use(express.static(__dirname + '/../../public'));
		app.set('views', __dirname + '/../views');
		app.set('view engine', 'ejs');

		
		app.use(express.cookieParser());
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		
		app.set('db-uri', 'mongodb://localhost/test');
		
		
		var conf = {
		db : {
			db : 'auth-test',
			host : 'localhost',
			port : 27017, // optional, default: 27017
			username : 'admin', // optional
			password : 'secret', // optional
			collection : 'mySessions' // optional, default: sessions
		},
		secret : '076ee61d63aa10a125ea872411e433b9'
		};
		
		app.use(express.session({
			secret : conf.secret,
			maxAge : new Date(Date.now() + 3600000),
			store : new MongoStore(conf.db)
		}));

		db = mongoose.connect(app.set('db-uri'));

		// Initialize Passport!  Also use passport.session() middleware, to support
		// persistent login sessions (recommended)
		app.use(app.router);
	});
	
	app.configure('development', function() {
		app.use(express.errorHandler({
			dumpExceptions : true,
			showStack : true
		}));
	});

	app.configure('production', function() {
		app.use(express.errorHandler());
	});
};
