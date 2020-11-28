const mongoose = require('mongoose');
 
const SponsorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: String,
    phoneNumber: String
});

module.exports = mongoose.model('Sponsors', SponsorSchema);