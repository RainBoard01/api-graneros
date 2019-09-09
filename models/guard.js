const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guardSchema = new Schema({
    rut: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Guard', guardSchema);