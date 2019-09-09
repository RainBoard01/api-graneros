const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parcelSchema = new Schema({
    number: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Parcel', parcelSchema);