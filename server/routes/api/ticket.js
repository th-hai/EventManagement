const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const ticketController = require('../../controllers/ticket.controller')
const auth = require('../../middlewares/auth');
const role = require('../../middlewares/role');

router.post('/create', ticketController.create);

// fetch all categories api

router.get('/', ticketController.get);

// Get a specific event

router.get('/:ticketId', ticketController.getTicket);

router.patch('/:id', ticketController.updateTicket);

router.delete('/:id', ticketController.deleteTicket);

module.exports = router;