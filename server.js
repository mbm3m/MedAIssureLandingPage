const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('.')); // Serve static files from current directory

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Handle form submissions
app.post('/api/submit-form', async (req, res) => {
    try {
        const { name, email, organization, role, message } = req.body;

        // Email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Demo Request',
            html: `
                <h2>New Demo Request Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Organization:</strong> ${organization}</p>
                <p><strong>Role:</strong> ${role}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        // Email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank You for Your Interest in MedAI',
            html: `
                <h2>Thank You for Your Interest!</h2>
                <p>Dear ${name},</p>
                <p>We've received your request for a demo of MedAI's insurance approval automation platform. Our team will review your information and contact you within 24 hours to schedule your personalized demo.</p>
                <p>In the meantime, you can learn more about our solution in our <a href="https://medai.com/resources">resource center</a>.</p>
                <br>
                <p>Best regards,</p>
                <p>The MedAI Team</p>
            `
        };

        // Send emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        // Store in database (you can add this later)
        // await saveToDatabase(req.body);

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error submitting form' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 