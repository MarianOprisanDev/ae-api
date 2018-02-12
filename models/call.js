let mongoose = require('mongoose');

let callSchema = mongoose.Schema({
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
});

let Call = module.exports = mongoose.model('Call', callSchema);