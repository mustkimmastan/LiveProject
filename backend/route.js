const experss = require('express');
const app = experss();
const db = require('./config');
app.use(experss.json())
// const { MongoClient } = require('mongodb');
const mongodb = require('mongodb')

app.get('/yk',async(req,res)=>{
    // let data = await db.collection();
    let data = await db();
    let result = await data.find().toArray();
    res.send(result);
});

app.post('/',async(req,res)=>{
   let data = await db();
   let result = await  data.insertOne(req.body);
   res.send(result); 
});

app.put('/:_id',async(req,res)=>{
    let data =  await db();
    let result = await data.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body})
    res.send(result);
})

app.delete('/delete/:_id',async(req,res)=>{
    let data = await db();
    let result = await data.deleteOne(req.body);
    res.send(result);
})
app.listen(5000);