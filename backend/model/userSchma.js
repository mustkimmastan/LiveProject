const mongoose = require('mongoose');

const studentscham = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:String
});
module.exports= mongoose.model('student',studentscham);