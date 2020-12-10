const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    sponsorId: [
        {   
            sponsorId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'sponsors'
            },
            logoUrl: {
                type: String,
                default: "http://placekitten.com/200/200"
            },
            amount: {
                type: Number,
                required: true
            }
            
        }
    ],
    categoryId: [
        {
            categoryId: {
                type: Schema.Types.ObjectId,
                ref: 'eventcategory'
            },
            categoryName: String
        }
    ],
    imageUrl: Array,
    location: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    speaker: [
        {
            speakerId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'speakers'
            },
            speakerName: String,
            avatarUrl: String,
        }
    ],
    tickets: [
        {
            ticketId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'tickets'
            },
            ticketType: String,
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    dressCode: String,
    plannedCost: Number,
    actualCost: Number,
}, { collection: 'Events'});

module.exports = mongoose.model('Events', EventSchema);