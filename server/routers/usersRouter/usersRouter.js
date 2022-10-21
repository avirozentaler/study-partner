const express = require('express');
const userRouter = express.Router();
const {register,logIn} = require('../../controllers/usersController/usersController')




userRouter.post('/register',register)/////  needs a middlewhere of validation



module.exports = userRouter 