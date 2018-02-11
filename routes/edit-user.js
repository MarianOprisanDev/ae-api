var express = require('express');
var router = express.Router();
let User = require('../models/user');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  // checking if req.params.id is a valid ObjectId
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    User.findById(req.params.id, function(error, user) {
        if (error) {
            console.log(error)
        } else {
            res.render('edit-user', { 
            title: 'Edit User',
            user: user
            });
        }
    });
  } else {
    console.log('Invalid req.params.id id.');
    next();
  }
});

router.post('/:id', function(req, res, next){
  let user = {};
  user.name = req.body.name;
  user.email = req.body.email;

  let query = {_id: req.params.id};
  User.update(query, user, function(err) {
      if(err) {
          console.log(err);
          return;
      } else {
          res.redirect('/');
      }
  });
});

module.exports = router;