let mongoose = require('mongoose');

let customerSchema = mongoose.Schema({
    code: { type: String, default: 'Not available', required: false},
    city: { type: String, required: true },
    name: { type: String, required: true },
    machine_name: { type: String, required: true },
    machine_serial_number: { type: String, required: true },
    call_history: [
        {
            date: Date,
            user: String,
            body: String 
        }, 
    ],
    last_call: { type: Date, required: false },
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