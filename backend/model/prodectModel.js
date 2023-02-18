

const mongoose = require('mongoose');
const prodectSchema = new mongoose.Schema({
    
        title:{
            type : String,
            required :[true ,' Please add an title']
        } ,
        dis:{  type : String,
            required :[true ,' Please add an dis'] 
        },
        price:{
            type : String,
            required :[true ,' Please add an price']
        },
        quentity:{
            type : String,
            required :[true ,' Please add an quentity']
        },
    },
        {
            timestamps :true
        },
);

module.exports = mongoose.model('products', prodectSchema);