var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

let User = require('../models/user');

router.get('/', function(req, res, next) {

    User.find({}, function(err, users) {
        if(err) {
            console.log(err);
        } else {
            res.render('add-user', { 
                title: 'Add User',
                users: users
            });
        }
    });
});

router.post('/', function(req, res, next){
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;

    user.save(function(err) {
        if(err) {
            console.log(err);
            return;
        } else {
            res.redirect('/users');
        }
    });
});

module.exports = router; 
