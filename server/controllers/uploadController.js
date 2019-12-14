let path = require('path'),
    mongoose = require('mongoose'),
    crypto = require('crypto'),
    multer = require('multer'),
    GridFsStorage = require('multer-gridfs-storage'),
    Grid = require('gridfs-stream'),
    dotenv = require('dotenv'),
    methodOverride = require('method-override');

exports = () => {
    dotenv.config({path: path.resolve(__dirname, '../config/.env')});
    const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
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

