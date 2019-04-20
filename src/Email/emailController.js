var nodemailer = require('nodemailer');
const emailCollection = require('./emailModel');
//require('dotenv').config();

//Email api

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
         user:"keerthirajme@gmail.com",
         pass: "rajendran5"
    }
});

    const  sendEmail = (req,h) => {
       var mailOptions= req.payload
      // var parseData = JSON.parse(mailOptions)
      return new Promise((resolve,reject)=>{
      emailCollection.create(req.payload,
      transporter.sendMail(mailOptions,(error, info)=>{
        if (error) {
         reject(error)
         //console.log(error)
        } else {
          resolve(info)
        }
     }))
      });
}
module.exports = sendEmail