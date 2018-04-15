const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }

    console.log('Connected to MongoDB server');

    /*
    db.collection('Todos').find({
        _id: new ObjectID('5ad337fa22008d778478f8c6')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });
    */

    /*
   db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log("Unable to fetch todos", err);
    }); */


    db.collection('Users').find({
        name: 'Andreas Mayr'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users", err);
    });

    //db.close();
});