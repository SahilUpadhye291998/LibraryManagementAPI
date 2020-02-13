const mongoose = require('mongoose');

let Books = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    author: {
        type: String,
        required : true
    },
    publication: {
        type: String,
        required : true
    },
    edition: {
        type: String
    },
    category:[{
        name:{ 
            type: String,
            required : true
        }
    }]
});

module.exports = Books = mongoose.model('books', Books);