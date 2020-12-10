const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');
// Get all the events

router.get('/', userController.get);

// Add an events

router.post('/', userController.create);

// Get a specific event

router.get('/:eventId', userController.getEvent);

// Delete a event 

router.delete('/:eventId', userController.deleteEvent);

// Update an event 

router.patch('/:eventId', userController.updateEvent);

module.exports = router;