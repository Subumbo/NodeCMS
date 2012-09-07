var model = require('../model/user.js'); 

module.exports = function(app) {    
    app.get('/api/users', model.get);
	app.post('/api/users', model.post);
	app.put('/api/users/:id', model.put);
	app.delete('/api/users/:id', model.delete);
}
