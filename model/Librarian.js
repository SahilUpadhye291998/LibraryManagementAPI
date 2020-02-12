const mongoose = require('mongoose');

let Librarian = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mobileNo:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Librarian = mongoose.model('librarian', Librarian);