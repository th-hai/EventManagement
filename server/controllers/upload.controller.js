const cloudinary = require('cloudinary')
const cloudinaryUploader = require('../services/cloudinary')
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})



const uploadCtrl = {
    uploadAvatar: (req, res) => {
        try {
            const file = req.files.file;
            
            cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'avatar', width: 150, height: 150, crop: "fill"
            }, async(err, result) => {
                if(err) throw err;

                removeTmp(file.tempFilePath)

                res.json({url: result.secure_url})
            })
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    uploadProfilePicture: (req, res) => {
        try {
            const file = req.files.file;
            
            cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'profile', width: 300, height: 300, crop: "fill"
            }, async(err, result) => {
                if(err) throw err;

                removeTmp(file.tempFilePath)

                res.json({url: result.secure_url})
            })
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    uploadThumbnail: (req, res) => {
        try {
            const file = req.files.file;
            
            cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'thumbnails', width: 500, height: 400, crop: "fill"
            }, async(err, result) => {
                if(err) throw err;

                removeTmp(file.tempFilePath)

                res.json({url: result.secure_url})
            })
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    uploadImages: async (req, res) => {
        try {
            const files = req.files.image;
            const urls = []
            if(!(files.length)){
                await cloudinary.v2.uploader.upload(files.tempFilePath, {folder: 'images', crop: "fill"},
                async(err, result) => {
                    if(err) throw err;
                    urls.push(result.secure_url)
                    removeTmp(files.tempFilePath)
                }) 
            }
            else {
            for (const file of files) {
               await cloudinary.v2.uploader.upload(file.tempFilePath, {folder: 'images', crop: "fill"},
                async(err, result) => {
                    if(err) throw err;
                    urls.push(result.secure_url)
                    removeTmp(file.tempFilePath)
                }) 
            }
        }
            res.status(200).json({
                message: 'Images uploaded successfully',
                images: urls
              })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}


const removeTmp = (path) => {
    fs.unlink(path, err => {
        if(err) throw err
    })
}

module.exports = uploadCtrl