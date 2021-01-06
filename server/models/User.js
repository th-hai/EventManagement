const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email required"]
    },
    password: {
        type: String,
        required: [true, 'Please enter your password!'],
    },
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    address: {
        type: String,
        max: 255,
        min: 10
    },
    dateofBirth: {
        type: Date,
        default: Date.now
    },
    phone: {
        type: String
    },
    role: {
        type: Number,
        default: 0,
        enum: [1, 0]
    },
    avatarUrl: {
        type: String,
        default: 'http://placekitten.com/300/300'
    }
}, { timestamps : true});

module.exports = mongoose.model('User', UserSchema);