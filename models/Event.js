const mongoose = require('mongoose');
 
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
    date: {
        type: Date,
        default: Date.now
    },
    sponsorId: String,
    categoryId: String,
    imageCollectionId: String
});

module.exports = mongoose.model('Events', EventSchema);