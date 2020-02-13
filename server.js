//import main dependency
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//import specific routes
const student = require('./routes/api/student');
const books = require('./routes/api/books');
const librarian = require('./routes/api/librarian');

// Connection to MongoDB
//get db connection
const db = require('./secret/secret').mongoURI;
//connect db to database server 
mongoose
    .connect(db)
    .then(() => console.log(`Database connected successfully`))
    .catch(err => console.error(err));

// install middleware
app.use(express.json());


// Get port
const PORT = process.env.PORT || 3000;

//use the routes api
app.use("/api/student",student);
app.use("/api/books",books);
app.use("/api/librarian",librarian);


// listen to PORT
app.listen(PORT,(req, res, next)=>{
    console.log(`Server started at port ${PORT}`);
});