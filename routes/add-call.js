var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

let Call = require('../models/call');

router.get('/', function(req, res, next) {

    Call.find({}, function(err, calls) {
        if(err) {
            console.log(err);
        } else {
            res.render('add-call', { 
                title: 'Add Call',
                calls: calls
            });
        }
    });
});

router.post('/', function(req, res, next){
    let call = new Call();
    
    call.date = req.body.date;
    call.city = req.body.city;
    call.customer = req.body.customer;
    call.machine = req.body.machine;
    call.machine_serial_number = req.body.machine.serial_number;
    call.bw_rate = req.body.bw_rate;
    call.clr_rate = req.body.clr_rate;
    call.bw_count = req.body.bw_count;
    call.clr_count = req.body.clr_count;
    call.date_last = req.body.date_last;
    call.min_charge = req.body.min_charge;
    call.user = req.body.user;
    call.call_text = req.body.call_text;
    call.active = true;

    call.save(function(err) {
        if(err) {
            console.log(err);
            return;
        } else {
            res.redirect('/calls');
        }
    });
});

module.exports = router; 
