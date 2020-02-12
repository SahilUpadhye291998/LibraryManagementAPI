//import main dependency
const express = require('express');
const app = express();

//import specific routes

//connect to mongodb

// install middleware
app.use(express.json());


// Get port
const PORT = process.env.PORT || 3000;

// listen to PORT
app.listen(PORT,(req, res, next)=>{
    console.log(`Server started at port ${PORT}`);
});