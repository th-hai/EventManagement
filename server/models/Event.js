const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date,
        default: Date.now
    },
    sponsors: [{
        type: Schema.Types.ObjectId,
        ref: 'Sponsors'
    }],
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Categories'
    }],
    thumbnail: String,
    imageUrl: {
        type: Array
    },
    location: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    speakers: [{
        type: Schema.Types.ObjectId,
        ref: 'Speakers'
    }],
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Tickets'
    }],
    dressCode: String,
    plannedCost: Number,
    actualCost: Number,
}, { timestamps : true});

module.exports = mongoose.model('Events', EventSchema);