const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: "cd551e71e9b2af",
//         pass: "91b0a0abdb4009"
//     }
// });



const send = (to, subject, body) => {
    transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject,
        text: body
    })
};

module.exports = send;