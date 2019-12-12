let path = require('path'),
    mongoose = require('mongoose'),
    config = require('../config/config'),
    crypto = require('crypto'),
    multer = require('multer'),
    GridFsStorage = require('multer-gridfs-storage'),
    Grid = require('gridfs-stream'),
    methodOverride = require('method-override');

exports = () => {
    const storage = new GridFsStorage({
    url: config.db.uri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });

upload.single('fileArt');
upload.single('filePreview');
upload.single('fileMp3');
upload.single('fileStems');
};

