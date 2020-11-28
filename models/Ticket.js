const mongoose = require('mongoose');
 
const TicketSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: String,
    type: String,
    eventId: String,
});

module.exports = mongoose.model('Tickets', TicketSchema);