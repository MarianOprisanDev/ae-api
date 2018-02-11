var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

let Customer = require('../models/customer');

router.get('/', function(req, res, next) {

    Customer.find({}, function(err, customers) {
        if(err) {
            console.log(err);
        } else {
            res.render('add-customer', { 
                title: 'Add Customer',
                customers: customers
            });
        }
    });
});

router.post('/', function(req, res, next){
    let customer = new Customer();
    
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

    customer.save(function(err) {
        if(err) {
            console.log(err);
            return;
        } else {
            res.redirect('/customers');
        }
    });
});

module.exports = router; 
