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
app.delete('/studentlist/:id', function (req , res) {
	var id =req.params.id;
	console.log(id);
	db.studentlist.remove({_id: mongojs.ObjectId(id)},function (err,doc) {
		res.json(doc);
	});
});
app.get('/studentlist/:id',function (req , res) {
	var id =req.params.id;
	console.log(id);
	db.studentlist.findOne({_id: mongojs.ObjectId(id)},function (err,doc) {
		res.json(doc);
	});
});
app.put('/studentlist/:id',function (req , res) {
	var id =req.params.id;
	console.log(req.body.name);
	db.studentlist.findAndModify({	query:{_id: mongojs.ObjectId(id)},
									update:{$set:{	name:req.body.name,
													shortabout:req.body.shortabout,
													lastdegree:req.body.lastdegree,
													currentprogram:req.body.currentprogram,
													desiredcompany:req.body.desiredcompany}},
									new:true},function (err,doc) {
												res.json(doc);
												
												});

});
app.listen(3000);
console.log('server is running on port 3000');