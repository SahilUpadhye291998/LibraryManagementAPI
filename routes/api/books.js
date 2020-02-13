const express = require('express');
const routes  = express.Router();

//@route    POST api/books/get
//@desc     To register the user
//@access   PUBLIC 
routes.get('/getAll',(req,res)=>{
    console.log(`get All the record of the books`);
});

//@route    POST api/books/get/:id
//@desc     To get specific book
//@access   PUBLIC 
routes.get('/get/:id',(req,res)=>{
    console.log(`get the record of the ${req.params.id}`);
});

//@route    POST api/books/add
//@desc     add the books to database
//@access   PUBLIC 
routes.post('/add',(req,res)=>{
    console.log(`get All the record of the books`);
});

//@route    PATCH api/books/update
//@desc     To register the user
//@access   PUBLIC 
routes.patch('/update',(req,res)=>{
    console.log(`get All the record of the books`);
});

//@route    DELETE api/books/delete
//@desc     To delete the book record
//@access   PUBLIC 
routes.delete('/delete',(req,res)=>{
    console.log(`get All the record of the books`);
});

module.exports = routes;