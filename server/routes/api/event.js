const express = require('express');
const router = express.Router();
const eventController = require('../../controllers/event.controller');
// Get all the events

router.get('/all', eventController.getAll);

// Get a page of events

router.get('/', eventController.get);

// Add an events

router.post('/create', eventController.create);

// Get a specific event

router.get('/:eventId', eventController.getEvent);

// Get tickets by event

router.get('/:eventId/tickets', eventController.getTicketsByEvent);

// Get speakers by event

router.get('/:eventId/speakers', eventController.getSpeakersByEvent);

// Get sponsors by event

router.get('/:eventId/sponsors', eventController.getSponsorsByEvent);

// Get categories by event

router.get('/:eventId/categories', eventController.getCategoriesByEvent);


// Delete a event 

router.delete('/:eventId', eventController.deleteEvent);

// Update an event 

router.patch('/:id', eventController.updateEvent);

module.exports = router;