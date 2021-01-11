const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');
const auth = require('../../middlewares/auth');
const role = require('../../middlewares/role');


router.post('/register', userController.register);

router.post('/activate', userController.activateEmail);

router.post('/login', userController.login);

router.post('/refresh_token', userController.getAccessToken);

router.post('/forgot', userController.forgotPassword);

router.post('/reset', auth, userController.resetPassword);

router.get('/profile', auth, userController.getUserInfor);

router.get('/all', auth, role.checkRole(role.ROLES.Admin), userController.getUserAllInfor);

router.get('/logout', userController.logOut);

router.patch('/profile', auth, userController.updateUser);

router.patch('/:id', auth, role.checkRole(role.ROLES.Admin), userController.updateUserRole);

router.delete('/:id', auth, role.checkRole(role.ROLES.Admin), userController.deleteUser);

// Social login

router.post('/google_login', userController.googleLogin);

// Facebook login

router.post('/facebook_login', userController.facebookLogin);

// router.post('/facebook_login', userController.googleLogin);

module.exports = router;