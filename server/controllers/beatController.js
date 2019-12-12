let mongoose = require('mongoose'),
    crypto = require('crypto'),
    Beat = require('../models/beat.server.model');

exports.create = (req, res, next) => {
    
    let beat = new Beat();

    beat._id =  crypto.randomBytes(16,(err,buf) => {
        if(err) throw err;
        return buf.toString('hex');
    });

    let i;
    for(i in req.variable){
        switch(req.variable[i].field){
            case 'fileA':
                beat.art = req.variable[i].name;
                break;
            case 'filePre':
                beat.preview = req.variable[i].name;
                break;
            case 'fileM':
                beat.mp3 = req.variable[i].name;
                break;
            case 'fileS':
                beat.trackout = req.variable[i].name;
                break;
        }
    }

    beat.title = req.body.fileTitle;
    beat.price = req.body.filePrice;  

    beat.markModified();

    beat.save((err,beat) => {
        if(err) {
            console.log(err);
            res.status(400);
        }
        console.log("Uploaded to DB: ", beat);
        next(req,res);
    });
    
};

/* Update a listing - note the order in which this function is called by the router*/
exports.update = (req, res) => {

};

exports.delete = (req, res) => {
    let beat = req.beat;
    beat.remove();
    res.status(200).json(beat);
};

exports.list = (req, res, next) => {
    Beat.find({},(err, data) => {
        if(err) console.log(err);
        next(req,res,data);
    });
};



exports.listingByID = (req, res, next, id) => {
    Beat.findById(id).exec((err, listing) => {
        if(err) {
            res.status(400).send(err);
            reject();
        } else {
            req.beat = beat;
            next();
        }
    });
};