var express = require('express');
var app = express();
var nodemon = require('nodemon');
var mongojs= require('mongojs');
var db = mongojs('studentlist',['studentlist']);

app.use(express.static(__dirname + "/public" ));
app.get('/studentlist',function (req , res) {
	console.log('i got req ');
	db.studentlist.find(function (err,docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.listen(3000);
console.log('server is running on port 3000');