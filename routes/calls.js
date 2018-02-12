var express = require('express');
var router = express.Router();
let Call = require('../models/call');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Call.find({}, function(err, calls) {
    if(err) {
      console.log(err);
    } else {
      res.render('calls', { 
        title: 'Calls List',
        calls: calls
      });
    }
  });
});

module.exports = router;
