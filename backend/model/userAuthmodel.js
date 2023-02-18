const mongoose = require('mongoose');
const prodectSchema = new mongoose.Schema({
    
        name:{
            type : String,
            required :[true ,' Please add an name']
        } ,
        email:{  type : String,
            required :[true ,' Please add an email'] 
        },
        password:{
            type : String,
            required :[true ,' Please add an password']
        },
    
    },
        {
            timestamps :true
        },
);

module.exports = mongoose.model('userAhut', prodectSchema);