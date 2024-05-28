const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nakinroye@gmail.com',
            pass: 'Nimzaza1231'  // Ensure this is your actual password or an app-specific password
        }
    });

    const mailOptions = {
        from: email,
        to: 'nimza.roye@gmail.com',
        subject: 'Contact Us Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);  // Log the error details
            return res.send('Failed to send message.');
        }
        res.send('Message sent successfully!');
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});