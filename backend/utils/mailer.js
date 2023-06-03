const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USERNAME;
const emailPass = process.env.EMAIL_PASSWORD;

// create transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL/TLS
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

function sendWelcomeEmail(email) {
  const mailOptions = {
    from: emailUser,
    to: email,
    subject: 'Welcome to Cowtact',
    text: 'Welcome to our app! Thank you for joining us.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending welcome email:', error);
    } else {
      console.log('Welcome email sent:', info.response);
    }
  });
}

// to-do: sendPassportResetMail

module.exports = {
  transporter,
  sendWelcomeEmail
};
