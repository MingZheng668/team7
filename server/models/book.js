let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    question:String,
    answer:String,
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);