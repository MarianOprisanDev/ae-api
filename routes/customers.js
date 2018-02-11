var express = require('express');
var router = express.Router();
let Customer = require('../models/customer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Customer.find({}, function(err, customers) {
    if(err) {
      console.log(err);
    } else {
      res.render('customers', { 
        title: 'Customer List',
        customers: customers
      });
    }
  });
});

module.exports = router;
