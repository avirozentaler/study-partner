// file of base router
const express = require('express');
const router = express.Router();
const userRouter = require('./usersRouter/usersRouter');
const authRouter = require('./authRouter/authRouter');
const updateDataRouter = require('./updateDataRouter/updateDataRouter')
const getDataRouter = require('./getDataRouter/getDataRouter')
const postRouter = require('./postRouter/postRouter')


router.use('/post',postRouter);
router.use('/user',userRouter);
router.use('/auth',authRouter);
router.use('/update',updateDataRouter);
router.use('/get',getDataRouter);

module.exports = router;