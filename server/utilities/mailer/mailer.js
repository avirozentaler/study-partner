const nodeMailer = require('nodemailer');

const mailTransporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_URL,
        pass: process.env.EMAIL_PASS,
    }
});

const transferMail = async (emailDestination, titleMessage, bodyMessage,htmlBody) => {
    try {
        console.log('CALLED MAILER');
        const sent = await mailTransporter.sendMail(
            {
                from: 'study-partner',
                to: "avraham8585@gmail.com", ///emailDestination,
                subject: titleMessage,
                // text: bodyMessage,
                html: htmlBody,
            },
        );
        console.log(sent);
        console.log("email sent");
    }
    // (err, data) => {
    //     if (err) {
    //         throw new Error('err to send')
    //     }
    //     console.log(data);
    //     console.log("email sent");
    //     return "email sended"
    // });

    catch (err) {
        console.log('err');
        console.log("err", err);
        return err
    }

}

module.exports = {
    transferMail,
}
