// Task Email Sender
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

console.log('Email sender configured. Please update credentials before running:');
console.log('1. Replace youremail@gmail.com with your actual email');
console.log('2. Replace yourpassword with your actual password');
console.log('3. Replace myfriend@yahoo.com with the recipient email');
