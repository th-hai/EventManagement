const express = require('express');
const router = express.Router();
const sponsorController = require('../../controllers/sponsor.controller');
// Get all the sponsors

router.get('/', sponsorController.get);

// Add a sponsor

router.post('/create', sponsorController.create);

// Get a specific sponsor

router.get('/:sponsorId', sponsorController.getSponsor);

// Delete a sponsor 

router.delete('/:sponsorId', sponsorController.deleteSponsor);

// Update a sponsor 

router.patch('/:sponsorId', sponsorController.updateSponsor);

module.exports = router;