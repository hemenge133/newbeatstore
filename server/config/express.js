let path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    crypto = require('crypto'),
    multer = require('multer'),
    GridFsStorage = require('multer-gridfs-storage'),
    Grid = require('gridfs-stream'),
    methodOverride = require('method-override'),
    Beats = require('../controllers/beatController'),
    Beat = require('../models/beat.server.model'),
    Striper = require('./striper.js'),
    dotenv = require('dotenv'),
    auth = require('../controllers/authController.js'),
    bcrypt = require('bcrypt'),
    User = require('../models/userModel'),
    jwt = require('jsonwebtoken');

const { getAudioDurationInSeconds } = require('get-audio-duration');



exports.init = () => {
    dotenv.config({path: path.resolve(__dirname, './.env')});

    const connection = mongoose.createConnection(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // const metaConnection = mongoose.createConnection(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // });
    //
    // metaConnection.once('open',() => {
    //
    // });

    let app = express();

    let gfs;

    connection.once('open', () => {
        //Initialize Stream
        gfs = Grid(connection.db, mongoose.mongo);
        gfs.collection('uploads');
        console.log('Connected to db');
    });

    connection.on('error', console.error.bind(console, 'connection error'));

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
        { storage, limits:
            {
            fileSize: maxSize
            }}).fields([
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

    //Enable CORS for all requests
    app.use((_, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next()
    });

    app.use(bodyParser.json());

    app.use(methodOverride('_method'));

    app.use(express.static(path.join(__dirname, '../../build')));

    app.post('/charge', (req,res) => {
        Striper(req,res);
    });

    app.post('/validate', async (req,res) => {
        const { email, password } = req.body;

        const user = User.findOne({email},(err, user) => {
            let result = {};
            let status = 200;
            if(!err) {
                if (!err && user) {
                    // We could compare passwords in our model instead of below
                    bcrypt.compare(password, user.password).then(match => {
                        if (match) {
                            result.status = status;
                            result.result = user;
                            console.log("Authentication Successful");
                        } else {
                            status = 401;
                            result.status = status;
                            result.error = 'Authentication error';
                        }
                        res.status(status).send(result);
                    }).catch(err => {
                        status = 500;
                        result.status = status;
                        result.error = err;
                        res.status(status).send(result);
                    });
                } else {
                    status = 404;
                    result.status = status;
                    result.error = err;
                    res.status(status).send(result);
                }
            } else {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
            }

        });
    });

    app.get('/creds', auth, async (req,res) => {
        const user = await User.findById(req.user._id).select("-password");
        res.send(user);
    });

    app.post('/newUser', async (req,res) => {
        const { error } = User.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let temp = await User.findOne({ email: req.body.email });
        if (temp) return res.status(400).send("User already registered.");

        temp = new User({
            password: req.body.password,
            email: req.body.email
        });
        temp.password = await bcrypt.hash(temp.password, 10);
        await temp.save();

        const token = temp.generateAuthToken();
        res.header("x-auth-token", token).send({
            _id: temp._id,
            email: temp.email
        });
    })

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
            const readStream = gfs.createReadStream(file.filename);
            readStream.pipe(res);
        })
    });

    app.get('/beats/:id', (req,res) => {
        Beat.findById(req.params.id,(err, file) => {
            if(!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No Song Exists'
                })
            }
            return res.send(file._doc);
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
    app.get('/sounds/meta/:filename', (req,res) => {

    });

    app.get('/sounds/:filename', (req,res) => {
        gfs.files.findOne({filename: req.params.filename}, (err, file) => {
            if(!file || file.length === 0) {
                res.status(404).json({
                    err: 'No File Exists'
                })
            }
            if(file.contentType === 'audio/mp3' || file.contentType === 'audio/wav'){
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            }
            else{
                res.status(404).json({
                    err: 'Error Getting Sound'
                })
            }
        })
    });

    app.get('/*', (req,res) => {
        res.sendFile(path.join(__dirname + '../../../build/index.html'));
    });

    return app;
};