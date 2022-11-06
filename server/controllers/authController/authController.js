const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../../models/user');
const token = process.env.TOKEN_NAME;
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS);
const nodeMailer = require('nodemailer');
const { emailValid, passwordValid } = require('../../utilities/validations/validations');


const auth = async (req, res) => {
    try {
        const cookie = req.cookies.token;
        console.log(cookie);

        if (!cookie) {
            res.status(403).send({ message: 'auth faild' })
        }
        else {
            const isVarify = jwt.verify(cookie, process.env.SECRET_KEY);
            if (isVarify.email) {
                console.log(email);
                res.status(200).send({ message: 'access exist' });
            }
        }
    }
    catch (err) {
        res.status(405).send(err)
    }


}


const forgetPassword = async (req, res) => {
    try {
        const {email} = req.body;
        if (!email) {
            console.log('! email');
            throw Error('email not match please try again');
        }
        else if (!emailValid(email)) {
            console.log('email not valid');
            throw Error('email not valid');
        }
        const user = await userModel.findOne({ where: { email } });
        if (!user) {
            console.log('user not foumd at database');
            throw Error('email not macth please try again');
        }
        const newPass = Math.random().toString(36).slice(2, 8);
        const hashPass = bcrypt.hashSync(newPass, parseInt(process.env.BCRYPT_ROUNDS));
        const mailTransporter = await nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_URL,
                pass: process.env.EMAIL_PASS,
            }
        });
        mailTransporter.sendMail(
            {
                from: 'study-partner',
                to: user.email,   
                subject: 'rest password',
                text: `your temporary password is: ${newPass}  please do not share this password to anybody`
            },
            async (err, data) => {
                console.log('before error');
                if (err) {
                    console.log(err);
                    res.status(401).send(err);
                }
                else {
                    await userModel.update({ refresh_token: newPass }, { where: { email: user.email } });
                    console.log('sent sucessfully');
                    console.log(data);
                    res.status(200).send({ message: 'password sent to user email' });
                    return;
                }
            })

    }
    catch (err) {
        res.status(401).send(err.message);
    }



}


const resetPassword = async (req, res) => {
    try {
        const { code, password, confirmPassword } = req.body;
        if (!code || !password || !confirmPassword) {
            res.status(400).send({ message: 'please fill all the fields' });
        }
        else if (!passwordValid(password)) {
            res.status(400).send({ message: 'password not valid' });
        }
        else if (password !== confirmPassword) {
            res.status(400).send({ message: 'auth faild' });
        }
        const user = await userModel.findOne({ where: { refresh_token: code } });
        if (!user) {
            res.status(400).send('auth faild');
        }
        else {
            const hashPssword = bcrypt.hashSync(password, BCRYPT_ROUNDS);
            await userModel.update({ password: hashPssword, refresh_token: null }, { where: { email: user.email } });
            res.status(200).send('password update');
        }
    }
    catch (err) {
        console.log(err);
        res.status(401).send(err.message);
    }
}

module.exports = {
    auth,
    forgetPassword,
    resetPassword,
}



