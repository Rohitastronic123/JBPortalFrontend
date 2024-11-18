// emailService.js

const nodemailer = require('nodemailer');

const sendEmail = async (userEmail, userName) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  // E.g., Gmail, Mailgun, etc.
    port: 587, // or 465 for SSL
    secure: false, // use SSL if true
    auth: {
      user: 'rohit1000me1@gmail.com',  // Your email
      pass: 'Rohit@20030329',     // Your email password or App-specific password
    },
  });

  const mailOptions = {
    from: 'rohit1000me1@gmail.com', // Sender address
    to: userEmail, // List of recipients
    subject: 'Login Successful', // Subject line
    text: `Hello ${userName},\n\nYou have successfully logged in to your account.`, // Plain text body
    html: `<p>Hello ${userName},</p><p>You have successfully logged in to your account.</p>`, // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
