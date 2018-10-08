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

module.exports.createUser=function(newUser, callback){
	newUser.save(callback);
}