const transporter = require('./transporter');
const sendTestMail = async () => {
    await transporter.sendMail({
        from:"test mail",
        to:"toludavid30@gmail.com",
        subject:"Verify your email",
        text:"welcome to my test mail, Tolu"
    })
    console.log("Test mail sent successfully");
    
}

module.exports = sendTestMail;