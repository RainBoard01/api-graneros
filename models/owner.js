const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    rut: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    parcelId: {
        type: String
    }
});

module.exports = mongoose.model('Owner', ownerSchema);