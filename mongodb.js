const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const dataBaseName = 'task-manager';
const objectID = mongodb.ObjectID;

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Ne mogu se konektujem na bazu!');
    }

    const db = client.db(dataBaseName);

    /*db.collection('users').insertOne({
        name: 'Marko',
        age: 23
    })*/

    // db.collection('tasks').findOne( { _id :  new objectID('5c9b7c9c5c086f3458ea0dd4')}, (error, user) => {
    //     console.log(user);
    // })


    //Returns u pointers
    // db.collection('tasks').find({completed: true}).toArray((error, users) => {
    //     console.log(users);
    // })

    db.collection('tasks').updateMany({
        completed: true
    }, {
        $set: {
            completed: false
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error);
    })



});