const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
    dateIn: {
        type: String,
        default: new Date().toISOString()
    },
    observation: {
        type: String,
        required: true
    },
    personId: {
        type: String,
        required: true
    },
    vehicleId: {
        type: String
    },
    parcelId: {
        type: String,
        required: true
    },
    guardId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Record', recordSchema);