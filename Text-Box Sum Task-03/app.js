const express = require('express');
const app = express();


//End points
app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/addition.html");
})


//listen on port
app.listen(4001, ()=>{
    console.log("Server start on port 4001");
})