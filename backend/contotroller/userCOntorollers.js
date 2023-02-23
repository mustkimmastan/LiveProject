const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const db = require('../config');
db();
const mongodb = require('mongodb');
const asyncHandler = require('express-async-handler');
const user = require('../model/userSchma');
const login = require('../model/loginmodel');


 const getusers = asyncHandler(async (req, res) => {
    // let data = await db();
    let results = await user.find()
    res.status(200).json(results);
    console.log('=====>', results);
 })

 const setuser = asyncHandler(async (req, res) => {
    // let data = await student();
    const { name,email,password, number} = req.body
    if(!name && !email && !password && !number){
        res.status(400)
        throw new Error('Please add a all body filds')
    }
    if(generateToken){
        let data = await user.create({name:req.body.name,email:req.body.email,password:req.body.password,number:req.body.number,})

    res.json({
        name,
        email,
        password,
        number,
        token : generateToken(user._id)
    })
    res.status(200).json( {token:generateToken(user._id)} );
}    
    
})
const loginserver=asyncHandler(async (req,res)=>{

    const {email,password} = req.body;
    const userExists = await login.findOne({ email })
        if (userExists) {
            res.status(400);
            throw new Error('Email already exists')
        }
        const passexits = await login.findOne({password})
        if(passexits){
            res.status(400);
            throw new Error('Password already exists')
        } 
        if(generateToken){
            let result = await login.create({email:req.body.email,password:req.body.password,});
            res.status(200).json({    
                name,
                email,
                password,
                number,
                token: generateToken(user._id)
            })
        
        }
    })

const updateuser = asyncHandler(async (req, res) => {
    // let data =  await student();
    // let result = await student.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body})
    let findid = await user.findById(req.params._id);
    if (!findid) {
        res.status(400)
        res.send('user not found')
    }
    if(generateToken){
        const updateuser = await user.findByIdAndUpdate(req.params._id, req.body  , {
            new: true
    })

    console.log("========> upadate Student", updateuser);
}
    res.status(200).json({ Message: `update ${req.params._id}` });
})
 const search = asyncHandler(async (req,res)=>{
    const findid = await search.findById(req.params._id)
    res.status(200).json({message :`search id ${req.params._id}`})
 })

const deleteuser = asyncHandler(async (req, res) => {
  const findid = await userSchma.findById(req.params._id)
  if(!findid){
    res.status(400)
    res.send('user not found')
  }
  if(generateToken){
    await findid.remove();

  }
  
    res.status(200).json({ message :`delete data ${req.params._id}`});
})


module.exports = {
    getusers,
    setuser,
    updateuser,
    deleteuser,
    loginserver 
}