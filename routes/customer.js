var express = require('express');
var router = express.Router();
let Customer = require('../models/customer');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  // checking if req.params.id is a valid ObjectId
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Customer.findById(req.params.id, function(error, customer) {
        if (error) {
            console.log(error)
        } else {
            res.render('customer', { 
            title: 'Customer Details',
            customer: customer
            });
        }
    });
  } else {
    console.log('Invalid req.params.id id.');
    next();
  }
});

router.delete('/:id', function(req, res, next) {
    console.log('Deleting user with id: ' + req.params.id);
    let query = { _id: req.params.id};

    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        User.remove(query, function(err) {
            if(err) {
                console.log(err);
            }
            res.send('Delete operation was successful');
        })
    } else {
        console.log('Invalid id');
        next();
    }
})

module.exports = router;