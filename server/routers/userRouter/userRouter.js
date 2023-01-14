const express = require('express');
const userRouter = express.Router();
const {logInValid, logIn} = require('../../controllers/userController/userController');
const UserController = require('../../controllers/userController/userController');





userRouter.post('/register', UserController.addUser);//registerValid, register
userRouter.post('/log-in',logInValid, logIn);

userRouter.post('/add',UserController.addUser);
userRouter.get('/get-all',UserController.getAllUsers);
userRouter.post('/get-one',UserController.getOneUser);
userRouter.put('/update',UserController.updateUser);
userRouter.delete('/delete',UserController.deleteUser);


module.exports = userRouter 