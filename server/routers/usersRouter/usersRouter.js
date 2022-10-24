const express = require('express');
const userRouter = express.Router();
const {registerValid, register,logInValid, logIn } = require('../../controllers/usersController/usersController')






userRouter.post('/register', registerValid, register)/////  needs a middlewhere of validation



module.exports = userRouter 