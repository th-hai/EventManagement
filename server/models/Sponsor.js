const mongoose = require('mongoose');
 
const SponsorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        default: "https://www.runvictoriamarathon.com/wp-content/uploads/2017/02/sponsor-logo-placeholder.png"
    },
    description: String
});

module.exports = mongoose.model('Sponsors', SponsorSchema);