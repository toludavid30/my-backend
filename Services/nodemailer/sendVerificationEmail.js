const transporter = require('./transporter');

const sendVerificationEmail = async (email, token, name) => {
    const mailOptions = {
        to: email,
        from: "test mail",
        subject:"verify your email",
        html:`
        <div style="max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; padding: 10px 0;">
            <h1 style="color: #333333;">Email Verification</h1>
        </div>
        <div style="margin: 20px 0; line-height: 1.6;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
            <p style="text-align: center;">
                <a href="http://localhost:5173/verify/:${token}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px;">Verify Email</a>
            </p>
            <p>If you did not sign up for this account, you can safely ignore this email.</p>
        </div>
        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #888888;">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </div> 
        `
    }
    await transporter.sendMail(mailOptions)
}
module.exports = sendVerificationEmail;