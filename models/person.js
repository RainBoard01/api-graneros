const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    rut: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Person', personSchema);