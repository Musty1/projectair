var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');

var User 		= require('./app/models/user');


mongoose.connect('mongodb://0.0.0.0:27017/projectair', function(err) {
	if(err){
		console.log("Not connected to the Database: " + err);
	} else  {
		console.log("Succesfully connected to mongodb");
	}
});


app.post('/users', function(req, res) {
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	user.save();
});


app.listen(8051, function(){
	console.log("Running Server on port : 8051");
});

