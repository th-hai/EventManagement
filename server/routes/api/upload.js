const router = require('express').Router()
const uploadImage = require('../../middlewares/uploadImage')
const uploadCtrl = require('../../controllers/upload.controller');
const upload = require('../../services/multer')
const auth = require('../../middlewares/auth');

router.post('/upload_avatar', uploadImage, auth, uploadCtrl.uploadAvatar)

router.post('/upload_speaker', uploadImage, auth, uploadCtrl.uploadProfilePicture)

router.post('/upload_thumbnail', auth, uploadCtrl.uploadThumbnail)

router.post('/upload_image', auth, uploadCtrl.uploadImages)

router.post('/upload_logo', auth, uploadCtrl.uploadLogo)


module.exports = router;