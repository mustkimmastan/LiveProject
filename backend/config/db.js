const mongoose = require('mongoose');
// const mongodb = require ('mongodb');
require('dotenv').config()
console.log(process.env);
console.log("========>", process.env.MONGO_URL)

const connectdb = async (err) => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL);
        // console.log('=========>cannected ',con);
    }
    catch (error) {
        // console.log("=======error", error);
        process.exit(1)
    }
}

module.exports= connectdb;
