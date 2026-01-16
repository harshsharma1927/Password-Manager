const express = require('express')
const app = express()
const dotenv=require('dotenv')
dotenv.config()
const port = 3000
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'passop';

client.connect();


app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
  res.json(findResult);
})

app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    await collection.insertOne(password);
    res.json(password); // This returns the password WITH MongoDB's _id
})

app.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne({id: id});
  res.send({success: true, result: findResult});
})

app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedPassword = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    await collection.updateOne({ id: id }, { $set: updatedPassword });
    res.json(updatedPassword);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
