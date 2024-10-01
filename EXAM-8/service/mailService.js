const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "daxpatel2906@gmail.com",
        pass: "jcyj mxzn fbpl rrhy"
    }
})
const sendingMail = (to, subject, html) => {
const mailOptions = {
        from: "daxpatel2906@gmail.com",
        to: to,
        subject,
        html
    }
    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    })
}

module.exports = sendingMail