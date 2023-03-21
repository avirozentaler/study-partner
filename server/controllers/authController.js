const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/User');
const token = process.env.TOKEN_NAME;
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS);
const nodeMailer = require('nodemailer');
const { emailValid, passwordValid } = require('../utilities/validations/validations');
const AuthService = require('../services/authService');


const logIn = async (req, res) => {
    try {
        const answer = await AuthService.logIn(req, res);
        console.log(answer);
        if (answer.message) {
            throw new Error(answer.message);
        }
        else {
            res.status(200).send(answer);
        }
    }
    catch (err) {
        res.status(400).send(err.message);
    }

}

const auth = async (req, res) => {
    try {
        const answer = await AuthService.auth(req, res);
        if (answer.message) {
            throw new Error(answer.message);
        }
        res.status(200).send(answer);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(false);
    }
}


const forgetPassword = async (req, res) => {
    try {
        const answer = await AuthService.forgetPassword(req.body);
        console.log('answer >>' ,answer);
        if(answer === undefined ||  answer.message !== undefined){
            throw new Error('Faild to sent Email');
        }

        res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
        res.status(401).send(err.message);
    }
}

const resetPassword = async (req, res) => {
    try {
        const answer = await AuthService.resetPassword(req.body);
        if(answer.message){
            throw new Error(answer.message)
        }
        res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}

module.exports = {
    logIn,
    auth,
    forgetPassword,
    resetPassword,
}



