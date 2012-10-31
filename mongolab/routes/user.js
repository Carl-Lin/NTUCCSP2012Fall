
/*
 * GET users listing.
 */

var User = require('../models/user');

exports.list = function(req, res, next){
	User.find().exec(function(err, docs){
		if(err) {
			next(err);
			return;
		}
		res.json(docs);
	});
};

exports.one = function(req, res, next) {
	User.findById(req.params.id).exec(function(err, doc) {
		if(err) {
			next(err);
			return;
		}
		res.json(doc);
	});
};

exports.update = function(req, res, next) {
	var user;
	User.findById(req.body.id).exec(function(err, doc) {
		if(err) {
			next(err);
			return;
		}
		if(!doc) {
			next(new Error('not exists'));
			return;
		}
		user = doc;
		user.name = req.body.name;
		user.age = parseInt(req.body.age);
		user.sex = req.body.sex;
		user.save(function(err){
			if(err) {
				next(err);
				return;
			}
			res.json(user);
		});
	});
};

var step = require('step');
exports.update2 = function(req, res, next) {
	var user;
	step(
		function() {
			User.findById(req.body.id).exec(this);
		}
		, function(err, doc) {
			if(err) throw err;
			if(!doc) throw new Error('not exists');
			user = doc;
			user.name = req.body.name;
			user.age = parseInt(req.body.age);
			user.sex = req.body.sex;
			user.save(this);
		}
		, function(err) {
			if(err) throw err;
			res.json(user);
		}
		, function(err) {
			next(err);
		}
	);
};

exports.remove = function(req, res, next) {
	var user;
	step(
		function() {
			User.findById(req.body.id).exec(this);
		}
		, function(err, doc) {
			if(err) throw err;
			if(!doc) throw new Error('not exists');
			doc.remove(this);
		}
		, function(err) {
			if(err) throw err;
			res.json({ok:true});
		}
		, function(err) {
			next(err);
		}
	);
};

exports.add = function(req ,res, next) {
	['name', 'age', 'sex'].forEach(function(d){
		if(!req.body[d]) throw new Error('缺少 ' + d);
		var user = new User({
			name : req.body.name
			, age : parseInt(req.body.age)
			, sex : req.body.sex
		});
		user.save(function(err){
			if(err) {
				next(err);
				return;
			}
			res.json(user.toJSON());
		});
	});
};