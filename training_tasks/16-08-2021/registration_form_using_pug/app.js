const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const { body, validationResult, check } = require('express-validator');
const upload = require('express-fileupload');
const EventEmitter = require('events');
const event = new EventEmitter();
const fs = require('fs');
const { stringify } = require('querystring');
const app = express();


//Mysql Connectivity
var connection = mysql.createConnection({
    host:"localhost",
    user:"debian-sys-maint",
    password:"1CCD45M74RBJI6s3",
    database:"addweb"
})
//Connect to the database 
connection.connect((error) => {
    if(error) 
    {
        // throw error;
        console.error('error connecting: ' + error.stack);
        return;   
    }
    console.log("Connected to db successfully");
})



// Use public folder for static files
app.use(express.static('public'));



// PUG SPECIFIC STUFF(set view engine as pug)
app.set('view engine', 'pug');      //set the template engine as pug
app.set('views', path.join(__dirname, 'views'));  //set the view directory



// Middleware to get html/pug form data 
app.use(express.json());
app.use(express.urlencoded());



// use of fileupload function
// app.use(upload());



// End points
app.get('/', (req, res)=>{
    res.status(200).render('form.pug');
    // res.sendFile(__dirname+'/form.pug')
})
app.post('/', [
    check('fname')
    .not().isEmpty().withMessage('name can not be empty')
    .isAlpha().withMessage('name can not contain numbers'),

    check('email')
    .not().isEmpty().withMessage('email can not be empty')
    .isEmail().withMessage('please enter valid email address'),

    check('phone')
    .not().isEmpty().withMessage('phone number can not be empty')
    .isLength({min:10}).withMessage('phone number should be in 10 digits')
    .matches(/[1-9]{1}[0-9]{9}/).withMessage('number can not start with zero')

], (req,res)=>{

    const name = req.body.fname;
    const mail = req.body.email;
    const phn = req.body.phone;
    
    connection.query("insert into info(fname,email,phone) values(?,?,?)",[name,mail,phn],(error)=>{
        if(error) throw error;
        else res.render('form.pug');
    })

    const errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
        errors.array().forEach(error=>{
            // console.log(error.msg);
            res.render('form.pug', {errmsg:error.msg});
            return;
        })
    } 

    res.render('form.pug',{data:stringify(req.body)});
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