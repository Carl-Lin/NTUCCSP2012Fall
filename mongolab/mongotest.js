var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');

var schema = mongoose.Schema({ name: 'string' });
var Cat = db.model('Cat', schema);

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
	if(err) throw err;
	Cat.find().exec(function(err, docs){
		if(err) throw err;
		console.log(docs);
	});
});