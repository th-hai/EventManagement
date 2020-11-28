const mongoose = require('mongoose');
 
const EventCategorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('EventCategories', EventCategorySchema);