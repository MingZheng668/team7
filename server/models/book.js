let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    studentId:String,
    program:String,
    start:String,
    end:String,
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);