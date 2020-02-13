const express = require('express');
const routes  = express.Router();

//@route    GET api/librarian/get
//@desc     To register the librarian
//@access   PUBLIC 
routes.get('/getAll',(req,res)=>{
    console.log(`get All the record of the librarian`);
});

//@route    GET api/librarian/get/:id
//@desc     To get specific librarian
//@access   PUBLIC 
routes.get('/get/:id',(req,res)=>{
    console.log(`get the record of the ${req.params.id}`);
});

//@route    POST api/librarian/add
//@desc     add the librarian to database
//@access   PUBLIC 
routes.post('/add',(req,res)=>{
    console.log(`get All the record of the librarian`);
});

//@route    PATCH api/librarian/update
//@desc     To register the librarian
//@access   PUBLIC 
routes.patch('/update',(req,res)=>{
    console.log(`get All the record of the librarian`);
});

//@route    DELETE api/librarian/delete
//@desc     To delete the librarian record
//@access   PUBLIC 
routes.delete('/delete',(req,res)=>{
    console.log(`get All the record of the librarian`);
});

module.exports = routes;