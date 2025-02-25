// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';

const Solution = () => {
  // Use the test email address directly
  const recipientEmail = "nishant@codingninjas.com";

  // Configure the nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj'
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'codingninjas2k16@gmail.com',
    to: recipientEmail,
    subject: 'Coding Ninjas',
    text: 'The world has enough coders; be a coding ninja!'
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred while sending email:', error.message);
    } else {
      console.log('Email sent successfully to', recipientEmail);
    }
  });
};

export default Solution;