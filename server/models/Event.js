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
        type: String,
        required: true
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
        sponsorId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Sponsors'
        },
        amount: {
            type: Number,
            required: true
        }
    }],
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    imageUrl: {
        type: Array,
        default: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30']
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
        required: true,
        ref: 'Speakers'
    }],
    tickets: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Tickets'
    }],
    dressCode: String,
    plannedCost: Number,
    actualCost: Number,
});

module.exports = mongoose.model('Events', EventSchema);