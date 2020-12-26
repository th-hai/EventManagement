const mongoose = require('mongoose');
 
const TransactionSchema = mongoose.Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'events'
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'   
    },
    tickets: [
        {
            ticketId: {
                type: Schema.Types.ObjectId,
                required: true   
            },
            price: {
                type: Schema.Types.Number,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            totalCost: {
                type: Number,
                default: amount * price
            }
        }
    ]
}, { timestamps : true});

module.exports = mongoose.model('Transactions', TransactionSchema);