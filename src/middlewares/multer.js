const multer = require('multer');
// Create multer object
var storage = multer.diskStorage({
    destination: 'profilePictures/',
    filename: function (req, file, callback) {
        const extention = file.originalname.split(".")[1]
        callback(null, req.decodedToken.id.toString() + '.' + extention);
    }
});
module.exports.profilePicture = multer({
    storage: storage,
    limits: {
        fileSize: 2000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|PNG|JPG|jpeg|JPEG)$/))
            return cb(new Error("this file format is not supported"))
        cb(undefined, true)
    }
})
