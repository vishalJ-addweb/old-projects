const express =require("express");
const {check, validationResult} = require('express-validator/check');
const path=require('path'); 
const upload=require('express-fileupload');

const{matchedData ,sanitizedBody} = require('express-validator/filter');
const app = express(); 

 

// app.use(express.static('public'));

// parse application/json
app.use(upload());
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//app.set('views','./public/views');

app.get("/",(req,res)=>{
    res.render('register',{title:"Sign up",messaage:"Fill the form"});

    //res.sendFile(__dirname+'/upload.html')
}); 




app.post('/',[
	check('Name')
		.notEmpty().withMessage('Name should not be empty')
		.matches(/^[a-z A-Z]+$/).withMessage('name must be alphabetics'),

	check('Mobile_No')
		.notEmpty().withMessage("Mobile No Should not be empty")
		.isLength({ min: 10 }).withMessage('Mobile_No must be of 10 digits'),
		
	check('Email')
		.notEmpty().withMessage("Email Should not be empty")
		.isEmail().withMessage("Must be a valid email"),
	
	
	check('Password')
		.notEmpty().withMessage("should not be empty")
		.isLength({ min: 8 }).withMessage('Password must be of min 8 char'),
		
	check('Confirm_Password').custom((value, { req }) => {
			//console.log(value);
			if (value !== req.body.Password) {
				  throw new Error('Password Confirmation does not match password');
			 }
			 return true;
		}).withMessage('password does not match'),
		
		check('Address')
			.notEmpty().withMessage('Address can not be empty')

],(req,res)=>{
	if(req.files) {
		console.log(req.files);
		var file=req.files.file;
		var filename=file.name;
		console.log(filename);  

		file.mv('./uploads/'+ filename,function(err){
			if(err){
				res.render(err);
			}else{
				//res.send('File Uploaded');
				console.log("File Uploaded")
			}
		});
		
	}
	const errors = validationResult(req);
   
    if(!errors.isEmpty()){
       // return res.status(422).jsonp(errors.array())
	   const alert = errors.array();
	   res.render('register', {
		   alert
	   })
   }
});
// ,(req,res)=>{

// 	const errors = validationResult(req);
   
//     if(!errors.isEmpty()){
//        // return res.status(422).jsonp(errors.array())
// 	   const alert = errors.array();
// 	   res.render('register', {
// 		   alert
// 	   })
//    }
	
// });
app.listen(3080);
