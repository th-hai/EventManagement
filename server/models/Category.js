const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        max: 50,
        min: 10,
        required: true
    },
    description: String
});

module.exports = mongoose.model('Category', CategorySchema);