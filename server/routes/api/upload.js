const router = require('express').Router()
const uploadImage = require('../../middlewares/uploadImage')
const uploadCtrl = require('../../controllers/upload.controller');
const auth = require('../../middlewares/auth');

router.post('/upload_avatar', uploadImage, auth, uploadCtrl.uploadAvatar)

router.post('/upload_speaker', uploadImage, auth, uploadCtrl.uploadProfilePicture)

module.exports = router;