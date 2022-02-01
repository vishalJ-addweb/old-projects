const express = require('express');
const path = require('path');
const { body, validationResult, check } = require('express-validator');
const upload = require('express-fileupload');
const EventEmitter = require('events');
// const event = new EventEmitter();
const fs = require('fs');
const { stringify } = require('querystring');
const app = express();



// Use public folder for static files
app.use(express.static('public'));



// PUG SPECIFIC STUFF(set view engine as pug)
app.set('view engine', 'ejs');      //set the template engine as pug
app.set('views', path.join(__dirname, 'views'));  //set the view directory



// Middleware to get html/pug form data 
app.use(express.json());
app.use(express.urlencoded());



// use of fileupload function
// app.use(upload());



// End points

app.post('/',res.render('form',{data:stringify(req.body)});
    console.log(req.body);
    // data=req.body;


    const data = JSON.stringify(req.body);
    fs.appendFileSync('data.txt', data, (err)=>{
        if(err){
            throw err;
        }
        console.log('JSON data saved');
    })
    
})

// listen on port
app.listen(4005, ()=>{
    console.log("Server started on 4005");
})