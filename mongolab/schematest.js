var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');

var userSchema = new mongoose.Schema({
	name : {type : String, required : true}
	, age : {type : Number, min : 0, max : 100}
	, sex : {type : String, enum : ['male', 'female', '?']}
	, created : {type : Date, default : function(){return new Date()}}
	, study : {
		university : String
		, graduatedschool : String
	}
	, skills : [String]
	, skills2 : [{
		name : String
	}]
});

// example use

var User = db.model('User', userSchema);

var u = new User();
u.name = 'I AM PROGRAMMER';
u.skills2.push({
	name : 'ruby on rail'
});
u.skills.push('node.js');
u.study.university = 'NTU';

u.save(function(err){
	if(err) throw err;
	User.find().exec(function(err,docs){
		if(err) throw err;
		console.log(docs);
		User.remove(function(err) {
			if(err) throw err;
		});
	});
});
