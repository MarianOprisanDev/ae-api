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
            res.render('edit-customer', { 
                title: 'Edit Customer',
                customer: customer
            });
        }
    });
  } else {
    console.log('Invalid req.params.id id.');
    next();
  }
});

router.post('/:id', function(req, res, next){
  let customer = {};
  
  customer.code = req.body.code;
  customer.city = req.body.city;
  customer.name = req.body.name;
  customer.machine_name = req.body.machine_name;
  customer.machine_serial_number = req.body.machine_serial_number;
  customer.bw_rate = req.body.bw_rate;
  customer.clr_rate = req.body.clr_rate;
  customer.total_instalments = req.body.total_instalments;
  customer.next_instalment = req.body.next_instalment;
  customer.rent = req.body.rent;
  customer.week = req.body.week;
  customer.min_charge = req.body.min_charge;
  customer.printfleet = req.body.printfleet;
  customer.contact_details = req.body.contact_details;
  customer.observations = req.body.observations;

  let query = {_id: req.params.id};
  Customer.update(query, customer, function(err) {
      if(err) {
          console.log(err);
          return;
      } else {
          res.redirect('/customers');
      }
  });
});

module.exports = router;