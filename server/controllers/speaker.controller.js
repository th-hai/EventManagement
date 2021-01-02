const Speaker = require('../models/Speaker');

//Get all the speakers
const getAll = (req, res) => {
    Speaker.find({}, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
      res.status(200).json({
        speakers: data
      });
    });
  };
// Get all the speakers 

const get = async (req, res, next) => {
    try {
        const speakers = await Speaker.find();
        res.json(speakers);
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}
// Add a speaker

const create = async (req, res, next) => {
    const speaker = new Speaker({
        name: req.body.name,
        job: req.body.job,
        bio: req.body.bio,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        avatarUrl: req.body.avatarUrl,
        socialNetwork: req.body.socialNetwork
    });

    try {
        const savedSpeaker = await speaker.save();
        res.json(savedSpeaker);
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

// Get a specific speaker

const getSpeaker = async (req, res, next) => {
    try {
        const speaker = await Speaker.findById(req.params.speakerId);
        if (speaker)
            res.send(speaker);
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

// Delete an speaker

const deleteSpeaker = async (req, res, next) => {
    try {
        const removeSpeaker = await Speaker.deleteOne({
            _id: req.params.speakerId
        })
        res.json(removeSpeaker);
    } catch (error) {
        res.json({
            message: error
        })
    }
}

const updateSpeaker = async (req, res, next) => {
    try {
        const updatedSpeaker = await Speaker.updateOne({
            _id: req.params.speakerId
        }, {
            $set: {
                name: req.body.name,
                job: req.body.job,
                bio: req.body.bio,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                avatarUrl: req.body.avatarUrl,
                socialNetwork: req.body.socialNetwork
            }
        })
        res.json(updatedSpeaker);
    } catch (error) {
        res.json({
            message: error
        })
    }
}


module.exports = {
    getAll,
    get,
    create,
    getSpeaker,
    deleteSpeaker,
    updateSpeaker
}