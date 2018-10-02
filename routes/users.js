var express = require('express');
var router = express.Router();
var multer=require('multer');
var upload=multer({dest: './uploads'});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});






function login(req,res){
	try{
		var username = req.body.username;
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

module.exports = router;
