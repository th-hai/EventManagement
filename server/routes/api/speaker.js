const express = require('express');
const router = express.Router();
const speakerController = require('../../controllers/speaker.controller')
// Get all the speakers

router.get('/', speakerController.get);

// Add a speaker

router.post('/', speakerController.create);

// Get a specific speaker

router.get('/:speakerId', speakerController.getSpeaker);

// Delete a speaker 

router.delete('/:speakerId', speakerController.deleteSpeaker);

// Update a speaker 

router.patch('/:speakerId', speakerController.updateSpeaker);

module.exports = router;