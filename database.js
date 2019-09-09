const mongoose = require('mongoose');
const uri = 'mongodb://localhost/api-db';

const dbInit = () => {
    mongoose.connect(
        uri,
        { useNewUrlParser: true }
    );
    mongoose.connection.once('open', () => console.log('DB is conected'));
};

module.exports = dbInit;