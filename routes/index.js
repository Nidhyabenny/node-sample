var express = require('express');
var router = express.Router();
var mongo =require('mongodb');
var assert =require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});







router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});





module.exports = router;
