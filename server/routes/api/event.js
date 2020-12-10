const express = require('express');
const router = express.Router();
const eventController = require('../../controllers/event.controller');
// Get all the events

router.get('/', eventController.get);

// Add an events

router.post('/', eventController.create);

// Get a specific event

router.get('/:eventId', eventController.getEvent);

// Delete a event 

router.delete('/:eventId', eventController.deleteEvent);

// Update an event 

router.patch('/:eventId', eventController.updateEvent);

module.exports = router;