const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    patente: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);