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
                        req.variable = [{field: file.fieldname, name: buf.toString('hex')}];
                    }
                    else{
                        req.variable = [...req.variable, {field: file.fieldname, name: buf.toString('hex')}];
                    }

                    resolve(fileInfo);
                });
            });
        }
    });
    const upload = multer({ storage }).fields([
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
        Beats.create(req,res,(req,res) => {
            res.redirect('/console');
        });
    });

    app.get('/files', (req,res) => {
        gfs.files.find().toArray((err, files) => {
            if(err){
                return res.status(404).json({
                    err: 'No files Exist'
                });
            }
            return res.json(files);
        });
    });

    app.get('/files:filename', (req,res) => {
        gfs.files.findOne({filename: req.params.filename}).toArray((err, files) => {
            files.map((file) => {

            })
        });
    });

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname + '../../../build/index.html'));
    });

    return app;
};