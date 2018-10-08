var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



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
		var newUser = new User({
			
			email: email,
			password: password,
		});
		User.createUser(newUser, function(err,user){
			if(err){ 
				throw(err);
			}
			console.log(user);
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

		req.flash('success_msg','You are now registered and can login now!!!');

		
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


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
    	if(err) throw err;
    	if(!user){
    		return done(null, false, {message: 'Unknown User'});
    	}

    	User.comparePassword(password, user.password, function(err, isMatch){
    		if(err) throw err;
    		if(isMatch){
    			return done(null, user);
    		}
    		else{
    			return done(null, false, {message: 'Invalid password'});
    		}
    	});
    });
  }));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});



router.post('/login',
  passport.authenticate('local', {successRedirect:'register', failureRedirect:'/',failureFlash: true}),
  function(req, res) {
    
  });

module.exports = router;
