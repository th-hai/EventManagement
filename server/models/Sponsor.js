const mongoose = require('mongoose');
 
const SponsorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logoUrl: {
        type: String,
        default: "http://placekitten.com/200/200"
    },
    description: String
}, { collection: "Sponsors"});

module.exports = mongoose.model('Sponsors', SponsorSchema);