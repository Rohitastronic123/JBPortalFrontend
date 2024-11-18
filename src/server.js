const express = require('express');
const nodemailer = require('nodemailer');
const { HttpsProxyAgent } = require('https-proxy-agent');
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Proxy settings (replace with your proxy URL)
const proxyUrl = 'http://mdproxypac.ds.indianoil.in:8080'; // Replace with your proxy details
const proxyAgent = new HttpsProxyAgent(proxyUrl);

// Set up your mail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the email service of your choice
  
  auth: {
    user: 'rohit1000me1@gmail.com', // Replace with your email
    pass: 'Rohit@20030329', // Replace with your email password or app password
  },
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
  logger: true, // Enable logging
  debug: true,  // Enable debugging
  // Attach the proxy agent
  connection: proxyAgent,
});

// Email sending route
app.post('/send-login-success-email', (req, res) => {
  const { email, userName } = req.body;

  const mailOptions = {
    from: 'rohit1000me1@gmail.com', // Sender address
    to: email, // Receiver's email
    subject: 'Login Successful',
    text: `Hello ${userName},\n\nYou have successfully logged in!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent');
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
