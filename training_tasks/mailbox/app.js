const express = require('express');
var bodyparser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();



//serving static files
app.use('/static', express.static('static')); 
//set the template engine
app.set('view engine','pug');
//set the view directory
app.set('views',path.join(__dirname,'views'));


app.use(express.json());
app.use(express.urlencoded());




app.get('/', (req, res)=> {
    res.status(200).render('contactform.pug');
})
app.post('/', (req, res)=>{

  let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth: {
            user: 'yashi.j.addweb@gmail.com', // generated ethereal user
            pass: 'Addweb@2106'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

 
  let mailOptions = {
      from: '"Yashi Jain" <yashi.j.addweb@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: req.body.subject,
      text: req.body.message, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

});

  res.status(200).render('contactform.pug');
})


app.listen(8000, () => {
    console.log('Server started on port 8000');
})
