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
    ticketType: {
        type: String,
        required: true,
        min: 1,
        max: 20
    },
    ticketDetail: String,
    quantity: Number,
});

module.exports = mongoose.model('Tickets', TicketSchema);