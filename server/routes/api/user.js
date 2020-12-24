const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');
const auth = require('../../middlewares/auth');
const role = require('../../middlewares/role');

// Get all the events

// router.get('/', userController.get);

// Add an events

router.post('/register', userController.register);

router.post('/activation', userController.activateEmail);

router.post('/login', userController.login);

router.post('/refresh_token', userController.getAccessToken);

router.post('/forgot', userController.forgotPassword);

router.post('/reset', auth, userController.resetPassword);

router.get('/infor', auth, userController.getUserInfor);

router.get('/all_infor', auth, role.checkRole(role.ROLES.Admin), userController.getUserAllInfor);

router.get('/logout', userController.logOut);

router.patch('/profile/update', auth, userController.updateUser);

router.patch('/update/:id', auth, role.checkRole(role.ROLES.Admin), userController.updateUserRole);

router.delete('/delete/:id', auth, role.checkRole(role.ROLES.Admin), userController.deleteUser);
// Get a specific event

// router.get('/:eventId', userController.getEvent);

// // Delete a event 

// router.delete('/:eventId', userController.deleteEvent);

// // Update an event 

// router.patch('/:eventId', userController.updateEvent);

module.exports = router;