const mongoose = require('mongoose');
 
const CompanySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    establishedDate: Date,
    email: String,
    phone: String,
    address: String
});

module.exports = mongoose.model('Company', CompanySchema);