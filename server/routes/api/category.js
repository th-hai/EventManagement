const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const categoryController = require('../../controllers/category.controller')
const auth = require('../../middlewares/auth');
const role = require('../../middlewares/role');

router.post('/create', categoryController.create);

// fetch all categories api

router.get('/', categoryController.get);

router.get('/:id', categoryController.getCategory);

router.patch('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);

router.get('/:id/events', categoryController.getEventsByCategory)

module.exports = router;