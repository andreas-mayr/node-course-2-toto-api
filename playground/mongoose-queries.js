const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
var id = '5ad36ac06154f49968efb8c6';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}
*/

/*
Todo.find({
    _id: id
}).then((todos) => {
  console.log('Todos', todos);  
});


Todo.findOne({
    _id: id
}).then((todo) => {
  console.log('Todo', todo);  
});
*/
/*
Todo.findById(id).then((todo) => {
    
    if(!todo) {
        return console.log('Id not found');
    }

    console.log('Todo By Id', todo);  
  }).catch((e) => console.log(e)); */



  User.findById('5ad355fb6ce22a0821c5ea75').then((user) => {
    
    if(!user) {
        return console.log('Id not found');
    }

    console.log('User By Id', user);  
  }).catch((e) => console.log(e));
