const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pavlovic.marko1995@gmail.com',
        subject: 'Hvala za registraciju',
        text: `Pozdrav ${name}, nadma se da ces uzivati u nasaoj aplikaciji`
    })
}

const sendQuitEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pavlovic.marko1995@gmail.com',
        subject: 'Napustili ste nas',
        text: `E bre ${name}, steta za Vas` 
    })
}
module.exports = {
    sendWelcomeEmail,
    sendQuitEmail
}
    