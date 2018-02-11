var express = require('express');
var router = express.Router();
let Customer = require('../models/customer');

const cors = require('cors');

/* GET users listing. */
router.get('/', cors(), function(req, res, next) {
  Customer.find({}, function(err, customers) {
    if(err) {
      res.send(err);
    } else {
      res.send(customers);
    }
  });
});

module.exports = router;