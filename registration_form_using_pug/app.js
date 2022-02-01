const express = require('express');
const path = require('path');
const { body, validationResult, check } = require('express-validator');
const upload = require('express-fileupload');
const { compile } = require('pug');
const app = express();



// Use public folder for static files
app.use(express.static('public'));



// PUG SPECIFIC STUFF(set view engine as pug)
app.set('view engine', 'pug');      //set the template engine as pug
app.set('views', path.join(__dirname, 'views'));  //set the view directory



// Middleware to get html/pug form data 
app.use(express.json());
app.use(express.urlencoded());



// use of fileupload function
app.use(upload());



// End points
app.get('/', (req, res)=>{
    res.status(200).render('form.pug');
    // res.sendFile(__dirname+'/form.pug')
})
app.post('/', [
    check('fname')
    .not().isEmpty().withMessage('name can not be empty')
    .isAlpha().withMessage('name can not contain numbers'),

    check('phone')
    .not().isEmpty().withMessage('phone number can not be empty')
    .isLength({min:10}).withMessage('phone number should be in 10 digits')
    .matches(/[1-9]{1}[0-9]{9}/).withMessage('number can not start with zero'),

    check('email')
    .not().isEmpty().withMessage('email can not be empty')
    .isEmail().withMessage('please enter valid email address'),

    check('dob')
    .not().isEmpty().withMessage('date can not be empty'),

    check('pass')
    .not().isEmpty().withMessage('password can not be empty')
    .isLength({min:6}).withMessage('lenth of password should be 6 character'),

    check('cpass')
    .not().isEmpty().withMessage('Confirm password can not be empty')
    .custom((value, {req})=>{
        if(value!==req.body.pass)
        {
            throw new Error('Confirm password does not match with password');
        }
        return true;
    }).withMessage('Confirm password does not match'),

    check('address')
    .not().isEmpty().withMessage('address can not be empty')

    // check('mFile')
    // .not().isEmpty().withMessage('Please select a file')

], (req,res)=>{	

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        errors.array().forEach(error=>{
            // console.log(error.msg);
            res.render('form.pug', {errmsg:error.msg});
            return;
        })
    }else{
        // console.log(req.files.mFile);
		var file=req.files.mFile;
		var filename=file.name;
		console.log(filename);  

        
		file.mv('./uploads/'+ filename,function(err){
			if(err){
                console.log(err);
				// res.render(err);
			}else{
				// res.send('File Uploaded');
				console.log("File Uploaded")
			}
		});
    }

    res.render('form.pug');
    console.log(req.body);
    
})

// listen on port
app.listen(4005, ()=>{
    console.log("Server started on 4005");
})
