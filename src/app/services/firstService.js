// import { MongoClient } from 'mongodb';
const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://localhost:27017/", {useNewUrlParser: true, useUnifiedTopology: true});

mongoClient.connect(function(err, client){
    if (err) {
        return console.log('Error MongoDB connect - ' + err );
    }
    console.log('connet good');
    const db = client.db("usersdb");
    const collection = db.collection("users");
    let user = {name: "Tuk", age: 55};
    collection.insertOne(user, function(err, result){
        if (err) {
            return console.log('insert error - ' + err);
        }

        console.log('success res  - ' + JSON.stringify(result.ops));
        client.close();
    })
    // colsole.log('--->>> ' + collection.find());
});