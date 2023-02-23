const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb')
const experss = require ('express')
const app = experss();
app.use(experss.json());

const asyncHandlar = require('express-async-handler');
const user = require('../Model/prodectModel');

// const { route } = require('../routes/prodectRoutes');

const getprodect= asyncHandlar (async(req,res)=>{
    let data = await user.find();
    res.status(200).json(data)
    console.log("====>",data);
})

const setprodect= asyncHandlar (async(req,res)=>{
    
const {title,  dis , price , quentity,images} = req.body; 
if(!title && !dis && !price && !quentity && !images) {
    res.status(400).json({message : "Please add a All Fileds"})
}
    console.log("=======>",req.body);  
    let result = await user.create(
        {
            title,
            dis,
            price,
            quentity,
            images,
            
        })

res.status(200).json(
          {
                 title,
                   dis,
                    price,
                     quentity,
                      images,
                        token:generateToken(user._id)
        }
    )
    // console.log("===>",result);
})


const updateprodect= asyncHandlar(async(req,res)=>{
    // let data = await db();
    // let result = await user.updateOne({_id:new mongodb.ObjectId(req.params._id)},{$set:req.body})
    const fintId =await user.findById(req.params._id);
    if(!fintId){
        res.status(400)
        res.send('User not found')
    }
    if(generateToken){
        const update = await user.findByIdAndUpdate(req.params._id, req.body,{
            new : true
        })
        console.log("=====>",updateprodect);
    }

    res.status(200).json({message: `update data ${req.params._id}`})
})



const deleteprodect= asyncHandlar (async(req,res)=>{
    let findId = await user.findById(req.params._id) 
    if(!findId){
        res.status(400);
        res.send('Use not found')
    }
    if(generateToken){
        await findId.remove()  
    } 
    
    res.status(200).json({message:`delete data ${req.params._id}`});
})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports={
    getprodect,
    setprodect,
    updateprodect,
    deleteprodect

}