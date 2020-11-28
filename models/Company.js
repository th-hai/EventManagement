const mongoose = require('mongoose');
 
const CompanySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    establishedDate: String,
    description: String,
    phoneNumber: String
});

module.exports = mongoose.model('Company', CompanySchema);