const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }

    console.log('Connected to MongoDB server');

    /*
    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5ad3412822008d778478fcdb')}, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }); */

    
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5ad3332c8794a2da05465857')}, {
        $set: {
            name: 'Andreas Mayr'
        },
        $inc: { age: 1 } 
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    

    //db.close();
});