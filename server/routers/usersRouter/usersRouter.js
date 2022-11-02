const express = require('express');
const userRouter = express.Router();
const {registerValid, register,logInValid, logIn} = require('../../controllers/usersController/usersController')


userRouter.post('/register', registerValid, register)
userRouter.post('/log-in',logInValid, logIn);


module.exports = userRouter 