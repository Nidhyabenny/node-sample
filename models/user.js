var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost/nodeauth');



//User Schema
var UserSchema =mongoose.Schema({
	username: {
		type: String,
		index: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	}

	

	
});





var User = module.exports = mongoose.model('User', UserSchema);

var Schema =mongoose.Schema({
title: {
		type: String,
		index: true
	},
	description: {
		type: String
	},
	category: {
		type: String
	},
	name: {
		type: String
	},
	contact: {
		type: String
	},
	address: {
		type: String
	},
	address2: {
		type: String
	}
});


var user = module.exports= mongoose.model('products', Schema);

module.exports.createUser=function(newUser, callback){
	newUser.save(callback);
}