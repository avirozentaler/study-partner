const { nameValid, emailValid, passwordValid } = require('../../utilities/validations/validations');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS);
const userModel = require('../../models/user');


//middleware validation for registering
const registerValid = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        res.send('please fill all the fields');
    }
    else if (!nameValid(name)) {
        res.send('name not valid');
    }
    else if (!emailValid(email)) {
        res.send('email not valid');
    }
    else if (!passwordValid(password)) {
        res.send('password not valid');
    }
    else if (password !== confirmPassword) {
        res.send('confirm password is not the same');
    }


    else {
        next();
    }
}

const register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const existUser = await userModel.findOne({
            where: { email: email }
        });
        if (existUser) {
            res.status(405).send('user already exist');
        }
        else {
            const hashPssword = bcrypt.hashSync(password, BCRYPT_ROUNDS);
            await userModel.create({ name, email, password: hashPssword });
            res.status(200).send('user created successfully');
        }

    }
    catch (err) {
        res.send(err);
    }
}
//middleware validation for log-in
const logInValid = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.send('please fill all the fields');
    }
    else if (!emailValid(email)) {
        res.send('email not valid');
    }
    else if (!passwordValid(password)) {
        res.send('email or password are not correct');
    }
    else {
        next();
    }

}

const logIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            res.status(401).send('aithentication faild');
            return;
        }
        const isComparePassword = await bcrypt.compare(password, user.password);
        if (!isComparePassword) {
            res.status(401).send('aithentication faild');
            return;
        }
        else {
            const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, {
                algorithm: 'HS256',
                expiresIn: '5m',
            });
            console.log(accessToken);

            await userModel.update({ refresh_token: accessToken },{where: { id: user.id } });
           
            res.cookie(process.env.TOKEN_NAME, accessToken, {
                    maxAge: 1000 * 60 * 5,
                    httpOnly: false
                })
                
            res.status(200).send({ message: 'user log in!!' });
        }

    }
    catch (err) {
        res.send(err);
    }

}

module.exports = {
    registerValid,
    logInValid,
    register,
    logIn
}