/* Add User Route */
var express = require('express');
var router = express.Router();

router.get('/add-user', function(req, res, next) {
    res.render('add-user', { title: 'Add User'});
});

module.exports = router; 
