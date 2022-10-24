const { nameValid, emailValid, passwordValid } = require('../../utilities/validations/validations');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS);
const user = require('../../models/user');



const registerValid = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
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
    else {
        next();
    }
}

const register = async (req, res) => {
    try {
console.log(process.env.BCRYPT_ROUNDS);
        const { name, email, password } = req.body;  
        const hashPssword = bcrypt.hashSync(password,BCRYPT_ROUNDS);
        console.log(hashPssword);
        await user.create({name,email,password:hashPssword});   
        res.status(200).send('user created successfully');
    }
    catch (err) {
        res.send(err);
    }
}

const logInValid = (req, res, next) => {
    // const { email, password } = req.body;
    // if (!email || !password) {
    //     res.send('please fill all the fields');
    // }
    // else if (!emailValid(email)) {
    //     res.send('email not valid');
    // }
    // else if (!passwordValid(password)) {
    //     res.send('password not valid');
    // }
    // else {
    //     next();
    // }
}

const logIn = (req, res) => {

}

module.exports = {
    registerValid,
    logInValid,
    register,
    logIn
}