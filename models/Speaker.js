const mongoose = require('mongoose');
 
const SpeakerSchema = mongoose.Schema({
    eventId: {
        type: String,
        required: true
    },
    name: String,
    phoneNumber: String
});

module.exports = mongoose.model('Speakers', SpeakerSchema);