const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');
const auth = require('../../middlewares/auth');
const role = require('../../middlewares/role');


router.post('/register', userController.register);

router.post('/activation', userController.activateEmail);

router.post('/login', userController.login);

router.post('/refresh_token', userController.getAccessToken);

router.post('/forgot', userController.forgotPassword);

router.post('/reset', auth, userController.resetPassword);

router.get('/profile', auth, userController.getUserInfor);

router.get('/list', auth, role.checkRole(role.ROLES.Admin), userController.getUserAllInfor);

router.get('/logout', userController.logOut);

router.patch('/profile/update', auth, userController.updateUser);

router.patch(':id', auth, role.checkRole(role.ROLES.Admin), userController.updateUserRole);

router.delete(':id', auth, role.checkRole(role.ROLES.Admin), userController.deleteUser);


module.exports = router;