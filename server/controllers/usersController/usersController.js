const { nameValid, emailValid, passwordValid } = require('../../utilities/validations/validations');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS);
const userModel = require('../../models/user');


//middleware validation for registering
const registerValid = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        res.status(400).send({ message:'please fill all the fields'});
    }
    else if (!nameValid(name)) {
        res.status(400).send({message:'name not valid'});
    }
    else if (!emailValid(email)) {
        res.status(400).send({message: 'email not valid'});
    }
    else if (!passwordValid(password)) {
        res.status(400).send({message:'password not valid'});
    }
    else if (password !== confirmPassword) {
        res.send('auth faild');
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
            res.status(400).send({message:'auth faild'});
        }
        else {
            const hashPssword = bcrypt.hashSync(password, BCRYPT_ROUNDS);
            await userModel.create({ name, email, password: hashPssword });
            res.status(200).send({message:'user created successfully'});
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
        res.status(400).send({ message:'please fill all the fields'});
    }
    else if (!emailValid(email)) {
        res.send('email not valid');
    }
    else if (!passwordValid(password)) {
        res.status(400).send({message:'email or password are not valid'});
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
            res.status(400).send({message:'auth faild'});
            return;
        }
        const isComparePassword = await bcrypt.compare(password, user.password);
        if (!isComparePassword) {
            res.status(400).send({message:'auth faild'});
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
                
            res.status(200).send({ message: 'user loged in!!' });
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