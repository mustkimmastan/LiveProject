const db = require('../config');
db();
const mongodb = require('mongodb');
const asyncHandler = require('express-async-handler');
const student = require('../model/userSchma');
const login = require('../model/loginmodel');


const getusers = asyncHandler(async (req, res) => {
    // let data = await db();
    let results = await student.find()
    res.status(200).json(results);
    console.log('=====>', results);
})
const setuser = asyncHandler(async (req, res) => {
    // let data = await student();
    let results = await student.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number
    });
    res.status(200).json(results);
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
        else{
    let result = await login.create({email:req.body.email,password:req.body.password});
    res.status(200).json(result)} })

const updateuser = asyncHandler(async (req, res) => {
    // let data =  await student();
    // let result = await student.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body})
    let findid = await student.findById(req.params._id);
    if (!findid) {
        res.status(400)
        res.send('user not found')
    }
    const updateStudent = await student.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    });
    console.log("========> upadate Student", updateStudent);
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
  await findid.remove();

    res.status(200).json({ message :`delete data ${req.params._id}`});
})


module.exports = {
    getusers,
    setuser,
    updateuser,
    deleteuser,
    loginserver 
}