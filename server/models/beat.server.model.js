let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../config/config');

const connection = mongoose.createConnection(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let beatSchema = new Schema({
    title:   String,
    preview: String, // Code for preview wav file
    price: String,
    art: String, // Code for album art
    mp3: String,
    trackout: String,
    created_at: Date,
    updated_at: Date
});

beatSchema.pre('save', (next) => {
    let current = new Date();
    this.updated_at = current;

    if(!this.created_at){
        this.created_at = current;
    }

    next();
});
const beatModel = connection.model('Beat', beatSchema);
module.exports = beatModel;

