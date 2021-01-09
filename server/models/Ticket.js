const mongoose = require('mongoose');
 
const TicketSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        max: 400
    },
    quantity: { 
        type: Number,
        required: true,
        max: 10000
    }
}, {timestamps: true});

module.exports = mongoose.model('Tickets', TicketSchema);