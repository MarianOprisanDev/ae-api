var express = require('express');
var router = express.Router();
let Call = require('../models/call');

const cors = require('cors');

/* GET users listing. */
router.get('/', cors(), function(req, res, next) {
  Call.find({}, function(err, call) {
    if(err) {
      console.log(err);
    } else {
      res.send(call);
    }
  });
});

module.exports = router;