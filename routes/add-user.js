/* Add User Route */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let users = [
        {
            name: 'admin',
            email: 'admin@api.com'
        },
        {
            name: 'user',
            email: 'user@api.com'
        }
    ];

    res.render('add-user', { 
        title: 'Add User',
        users: users
    });
});

module.exports = router; 
