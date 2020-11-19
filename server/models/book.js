let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    description:String,
    published:String,
    start:String,
    end:String,
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);