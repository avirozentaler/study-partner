// file for router

const express = require('express');
const router = express.Router();
const userRouter = require('./usersRouter/usersRouter');


router.use('/users',userRouter)








module.exports = router;