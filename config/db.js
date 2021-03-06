const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); //grab the value from default.json

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('MongoDB Connected..');
    } catch(err) {
        console.log(err.message);
        process.exit(1); //Exit process with failure
    }
}

module.exports = connectDB;