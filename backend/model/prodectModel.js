

const mongoose = require('mongoose');
const prodectSchema = new mongoose.Schema({
    
        title:{
            type : String,
            required :[true ,' Please add a title']
        } ,
        dis:{  type : String,
            required :[true ,' Please add a dis'] 
        },
        price:{
            type : String,
            required :[true ,' Please add a  price']
        },
        quentity:{
            type : String,
            required :[true ,' Please add a quentity']
        },
        images:{
            type :String,
            // required:[true,'Please aad a images']
        }
    },
        {
            timestamps :true
        },
);

module.exports = mongoose.model('products', prodectSchema);