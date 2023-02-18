const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'DreamCoder';

async function db() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('students');
    // let result = await collection.find().toArray();
    // console.log(result);
    // console.log("========>", result);

    // the following code examples can be pasted here...

    return collection;
}

db()
module.exports= db;
