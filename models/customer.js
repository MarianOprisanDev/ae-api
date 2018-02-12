let mongoose = require('mongoose');

let customerSchema = mongoose.Schema({
    code: { type: String, default: 'Not available', required: false},
    city: { type: String, required: true },
    name: { type: String, required: true },
    machine_name: { type: String, required: true },
    machine_serial_number: { type: String, required: true },
    bw_rate: { type: Number, required: true },
    clr_rate: { type: Number, required: true },
    call_history: [ {
        date: { type: Date, required: false },
        city: { type: String, required: false },
        customer: { type: String, required: false },
        machine: { type: String, required: false },
        machine_serial_number: { type: String, required: false },
        bw_rate: { type: Number, required: false },
        clr_rate: { type: Number, required: false },
        bw_count: { type: Number, required: false },
        clr_count: { type: Number, required: false },
        date_last: { type: Date, required: false },
        min_charge: { type: Number, required: false },
        user: { type: String, required: false },
        call_text: { type: String,  required: false },
        active: { type: Boolean, default: true, required: false }
    } ],
    last_call: {
        date: { type: Date, required: false },
        city: { type: String, required: false },
        customer: { type: String, required: false },
        machine: { type: String, required: false },
        machine_serial_number: { type: String, required: false },
        bw_rate: { type: Number, required: false },
        clr_rate: { type: Number, required: false },
        bw_count: { type: Number, required: false },
        clr_count: { type: Number, required: false },
        date_last: { type: Date, required: false },
        min_charge: { type: Number, required: false },
        user: { type: String, required: false },
        body: { type: String,  required: false },
        active: { type: Boolean, default: true, required: false }
     },
    total_instalments: { type: Number, required: false },
    next_instalment: { type: Number, required: false },
    rent: { type: Number, required: false },
    week: {type: Number, required: false },
    min_charge: { type: Number, required: false },
    printfleet: { type: String, default: 'No', required: false},
    contact_details: { type: String, required: false },
    observations: { type: String, required: false }
});

let Customer = module.exports = mongoose.model('Customer', customerSchema);