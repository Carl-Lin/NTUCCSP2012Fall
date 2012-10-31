var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');

var schema = mongoose.Schema({ name: 'string' });
var Cat = db.model('Cat', schema);

var kitty = new Cat({ name: 'Zildjian2' });

Cat.remove(function(err){
	if(err) throw err;
	kitty.save(function (err) {
		if(err) throw err;
		kitty.name = 'kitty is not kitty';
		kitty.save(function(err){
			if(err) throw err;
			console.log(kitty);
			kitty.remove(function(err){
				if(err) throw err;
				Cat.find().exec(function(err, docs){
					if(err) throw err;
					console.log(docs);
				});
			});
		});
	});
});