var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Project Air");
})

app.listen(8051, function(){
	console.log("Running Server on port : 8051");
});
