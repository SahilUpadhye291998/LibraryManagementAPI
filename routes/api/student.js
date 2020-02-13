const express = require('express');
const routes  = express.Router();

//@route    GET api/student/get
//@desc     To register the student
//@access   PUBLIC 
routes.get('/getAll',(req,res)=>{
    console.log(`get All the record of the student`);
});

//@route    GET api/student/get/:id
//@desc     To get specific student
//@access   PUBLIC 
routes.get('/get/:id',(req,res)=>{
    console.log(`get the record of the ${req.params.id}`);
});

//@route    POST api/student/add
//@desc     add the student to database
//@access   PUBLIC 
routes.post('/add',(req,res)=>{
    console.log(`get All the record of the student`);
});

//@route    PATCH api/student/update
//@desc     To register the student
//@access   PUBLIC 
routes.patch('/update',(req,res)=>{
    console.log(`get All the record of the student`);
});

//@route    DELETE api/student/delete
//@desc     To delete the student record
//@access   PUBLIC 
routes.delete('/delete',(req,res)=>{
    console.log(`get All the record of the student`);
});

module.exports = routes;