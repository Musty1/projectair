module.exports = function(router){

	var User 		= require('../models/user');

	router.post('/users', function(req, res) {
		var user = new User();
		user.username = req.body.username;
		user.password = req.body.password;
		user.email = req.body.email;
		console.log(user.username, user.email, user.password);
		user.save(function(err){
			if (err) {
				res.send(err);
			} else{
				res.send('User created!');
			}
		});
	});

	return router;
}
