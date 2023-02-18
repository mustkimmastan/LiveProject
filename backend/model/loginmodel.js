const mongoose = require('mongoose');

const studentscham = new mongoose.Schema({
    email:String,
    password:String,

});
module.exports= mongoose.model('login',studentscham);