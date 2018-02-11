var express = require('express');
var router = express.Router();
let User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    if(err) {
      console.log(err);
    } else {
      res.render('users', { 
        title: 'User List',
        users: users
      });
    }
  });
});

module.exports = router;
