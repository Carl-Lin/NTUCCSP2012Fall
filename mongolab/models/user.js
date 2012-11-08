var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name : {type : String, required : true}
	, age : {type : Number, min : 0, max : 100, required : true}
	, sex : {type : String, enum : ['male', 'female', '?'], required : true}
	, created : {type : Date, default : function(){return new Date()}, required : true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;

var x = new User();