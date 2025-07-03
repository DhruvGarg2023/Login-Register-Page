const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/CustomerDetails');
        console.log('MongoDB connected successfully');
    }
    
    catch (err) {
        console.error(err);
    }
    
}

module.exports = connectDB;