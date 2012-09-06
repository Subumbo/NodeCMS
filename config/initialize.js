module.exports = function(app, express){
    
	app.configure(function() {
		app.use(express.static(__dirname + '/../public'));
		app.set('views', __dirname + '/../views');
		app.set('view engine', 'ejs');
		
		app.use(express.methodOverride());
		app.use(express.bodyParser());
	
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