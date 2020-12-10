const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
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
        type: String,
        max: 12,
        min: 9
    },
    role: {
        type: String,
        default: 'MEMBER',
        enum: ['MEMBER', 'ADMIN']
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    updated: Date,
    avatarUrl: String,
    createdAt: {
        type: String,
        default: Date.now
    }
}, {
    collection: 'Users'
});

module.exports = mongoose.model('User', UserSchema);