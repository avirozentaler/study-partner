// file of base router
const express = require('express');
const router = express.Router();
const userRouter = require('./usersRouter/usersRouter');
const authRouter = require('./authRouter/authRouter');

router.use('/user',userRouter);
router.use('/auth',authRouter);

module.exports = router;