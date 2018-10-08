var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: req.flash('loginMessage') });
});

router.get('/register', function(req, res, next) {
  res.render('register', { message: req.flash('errorMessage')  });
});

router.post('/register', function (req, res) {
    if (req.body.change == "ok") { //if ok btn is clicked
        updateModule.saveChanges(req.body, function (err) { //call update module
            if (err) {
                //if error
               
                res.render('register', { title: 'Express'});
            } else {
                //on success
                
                res.render('/', { 'title': 'Express'});
             }

        });
    }
});


module.exports = router;
