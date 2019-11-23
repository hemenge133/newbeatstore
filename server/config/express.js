let path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    morgan = require('morgan'),
    crypto = require('crypto'),
    multer = require('multer'),
    GridFsStorage = require('multer-gridfs-storage'),
    Grid = require('gridfs-stream'),
    methodOverride = require('method-override'),
    Beats = require('../controllers/beatController');

exports.init = () => {
    const connection = mongoose.createConnection(config.db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    let app = express();

    let gfs;

    connection.once('open', () => {
        //Initialize Stream
        gfs = Grid(connection.db, mongoose.mongo);
        gfs.collection('uploads');
        console.log('Connected to db');
    });

    connection.on('disconnected', () => {
        console.log("db disconnected");
    });

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
                        name: file.originalname,
                        bucketName: 'uploads'
                    };

                    //Add to request object: all file IDs
                    if(!req.variable){
                        req.variable = [{field: file.fieldname, name: filename}];
                    }
                    else{
                        req.variable.push({field: file.fieldname, name: filename});
                    }
                    
                    resolve(fileInfo);
                });
            });
        }
    });
    const maxSize = 1000000*500; //500mb
    const upload = multer(
        {
        storage,
        limits:
            {
            fileSize: maxSize
            }})
            .fields([
            {
                name: 'fileA',
                maxCount: 1
            },
            {
                name: 'filePre',
                maxCount: 1
            },
            {
                name: 'fileM',
                maxCount: 1
            },
            {
                name: 'fileS',
                maxCount: 1
            }
    ]);

    app.use(morgan('dev'));

    app.use(bodyParser.json());

    app.use(methodOverride('_method'));

    app.use(express.static(path.join(__dirname, '../../build')));

    app.post('/upload', upload, (req,res) => {
        console.log("Creating Beat doc");
        Beats.create(req,res,(_req,res) => {
            res.redirect('/console');
        });
    });

    app.get('/files', (req,res) => {
        Beats.list(req,res,(req,res,data) => {
            return res.send(data);
        })
    });

    app.get('/files/:filename', (req,res) => {
        gfs.files.findOne({filename: req.params.filename},(err, file) => {
            if(!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No File Exists'
                })
            }
            return res.json(file);
        })
    });

    app.get('/images/:filename', (req,res) => {
        gfs.files.findOne({filename: req.params.filename},(err, file) => {
            if(!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No File Exists'
                })
            }
            if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            }
            else{
                res.status(404).json({
                    err: "Not an image"
                })
            }
        })
    });
    app.get('/sounds/:filename', (req,res) => {
        gfs.files.findOne({filename: req.params.filename},(err, file) => {
            if(!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No File Exists'
                })
            }
            if(file.contentType === 'audio/mp3' || file.contentType === 'audio/wav'){
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            }
            else{
                res.status(404).json({
                    err: "Not an sound"
                })
            }
        })
    });

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname + '../../../build/index.html'));
    });

    return app;
};