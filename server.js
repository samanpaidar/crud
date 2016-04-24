var express     = require('express');
var app         = express();
var nodemon     = require('nodemon');
var mongojs     = require('mongojs');
var db          = mongojs('studentlist',['studentlist']);
var bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public" ));

app.get('/studentlist',function (req , res) {
	console.log('i got req ');
	db.studentlist.find(function (err,docs) {
		console.log(docs);
		res.json(docs);
	});
});
app.post('/studentlist',function (req , res) {
	console.log(req.body);
	db.studentlist.insert(req.body,function (err , doc) {
		res.json(doc);
	});
});

app.listen(3000);
console.log('server is running on port 3000');