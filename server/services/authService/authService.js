const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthRepo = require('../../repositories/authRepo/authRepo');
const { emailValid, passwordValid } = require('../../utilities/validations/validations');


const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if ((!email || !emailValid(email)) || (!password || !passwordValid(password))) { throw Error('auth faild') }

        const answer = await AuthRepo.logIn(email);
        if (!answer.password) {
            throw new Error('email or password are not correct');
        }
        const isComparePassword = await bcrypt.compare(password, answer.password);
        if (!isComparePassword) {
            throw new Error('email or password are not correct');
        }
        const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, {
            algorithm: 'HS256',
            expiresIn: '24h',
        });
        res.cookie(process.env.TOKEN_NAME, accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: false
        })
        return {
            name: answer.name,
            email: answer.email,
            country: answer.country,
            languages: answer.languages,
            age: answer.age_range,
            phone_number: answer.phone_number,
        }
    }
    catch (err) {
        console.log(err);
        return err;
    }

}



const auth = async () => {
    try {

    }
    catch (err) {
        console.log(err);
    }
}
const forgetPassword = async () => {
    try {

    }
    catch (err) {
        console.log(err);
    }
}
const resetPassword = async () => {
    try {

    }
    catch (err) {
        console.log(err);
    }
}




module.exports = {
    logIn,
    auth,
    forgetPassword,
    resetPassword
}