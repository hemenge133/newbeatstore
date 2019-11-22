let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let beatSchema = new Schema({
    title:   String,
    preview: String, // Code for preview wav file
    price: Number,
    created_at: Date,
    updated_at: Date
});

beatSchema.pre('save', function(next) {
    let current = new Date();
    this.updated_at = current;

    if(!this.created_at)
        this.created_at = current;
    if(!this.title){
        throw new Error("Err: No Title");
    }
    next();
});

let Listing = mongoose.model('Beat', beatSchema);

exports = Listing;
