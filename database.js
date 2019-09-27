const mongoose = require('mongoose');
const uri = 'mongodb://localhost/api-db';

const dbInit = () => {
    mongoose.connect(
        uri,
        { 
            useNewUrlParser: true,
            poolSize: 1
        }
    );
    mongoose.connection.once('open', () => console.log('DB is conected'));
};

module.exports = dbInit;