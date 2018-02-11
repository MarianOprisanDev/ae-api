var express = require('express');
var router = express.Router();
let User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    if(err) {
      console.log(err);
    } else {
      res.render('index', { 
        title: 'AE API',
        users: users
      });
    }
  });
});

module.exports = router;
 
