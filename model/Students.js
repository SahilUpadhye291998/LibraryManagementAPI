const mongoose = require('mongoose');

let Students = mongoose.Schema({
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
    },
    books: [{
        student:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'books'
        }
    }]
});

module.exports = Students = mongoose.model('students', Students);