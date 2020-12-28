const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const categoryController = require('../../controllers/category.controller')
const auth = require('../../middlewares/auth');
const role = require('../../middlewares/role');

router.post('/add', categoryController.create);

// fetch all categories api

router.get('/', categoryController.get);

router.put('/:id', categoryController.updateCategory);

router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;