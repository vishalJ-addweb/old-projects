const express = require('express');
const app = express();



//use public folder for static files
app.use(express.static('public'));


//end points
app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/public/heading.html");
})


//listen on port
app.listen(4002, ()=>{
    console.log("server start on port 4002");
})
