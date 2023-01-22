const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/userController');

userRouter.post('/register', UserController.addUser);
userRouter.post('/add',UserController.addUser);
userRouter.get('/get-all',UserController.getAllUsers);
userRouter.post('/get-one',UserController.getOneUser);
userRouter.put('/update',UserController.updateUser);
userRouter.delete('/delete',UserController.deleteUser);

module.exports = userRouter 