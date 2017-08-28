var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');

var bodyParser 	= require('body-parser');
var router 		= express.Router();
var appRoutes 	= require('./app/routes/api')(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use('/api', appRoutes);

mongoose.connect('mongodb://0.0.0.0:27017/projectair', function(err) {
	if(err){
		console.log("Not connected to the Database: " + err);
	} else  {
		console.log("Succesfully connected to mongodb");
	}
});

app.listen(8051, function(){
	console.log("Running Server on port : 8051");
});

