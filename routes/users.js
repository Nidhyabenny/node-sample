var express = require('express');
var router = express.Router();
var multer=require('multer');
var upload=multer({dest: './uploads'});


var User = require('../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});






function login(req,res){
	try{
		var email = req.body.email;
		var password = req.body.password;
		console.log(req.body);


		res.send({
			status:true,
			msg : "login success"
		});


	}
	catch(e){
		res.send({
			status:false,
			msg : "login failed"
		});

	}
}
router.post('/login',login);


function register(req,res){
	try{
		var username = req.body.username;
		var email = req.body.email;
		var password = req.body.password;
		console.log(req.body);
		var newUser = new User({
			username: username,
			email: email,
			password: password,
		});
		User.createUser(newUser, function(err,user){
			if(err){ 
				throw(err);
			}
			console.log(user);
		}); 

		
		res.redirect('/');
}
		
	catch(e){
		res.send({
			status:false,
			msg : "registeration failed"
		});

	}
}
router.post('/register',register);

module.exports = router;
