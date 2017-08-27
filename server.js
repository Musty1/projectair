var express = require('express');
var app = express();
var mongoose = require('mongoose');


/*app.get('/', function(req, res){
	res.send("Project Air");
})
*/

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

