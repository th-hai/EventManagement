const mongoose = require('mongoose');
 
const EventDetailSchema = mongoose.Schema({
    eventId: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startTime: Date,
    endTime: Date,
    theme: String,
    quantity: Number,
    dressCode: String,
    plannedCost: Number,
    actualCost: Number,
});

module.exports = mongoose.model('EventDetail', EventDetailSchema);