const mongoose = require('mongoose');
 
const SpeakerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    socialNetwork: {
        facebookUrl: String,
        twitterUrl: String,
        instagramUrl: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    avatarUrl: {
        type: String,
        default: "https://i.pravatar.cc/300"
    }
});

module.exports = mongoose.model('Speakers', SpeakerSchema);