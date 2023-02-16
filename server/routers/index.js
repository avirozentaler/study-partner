// file of base router
const router = require('express').Router();
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const postRouter = require('./postRouter');
const categoryRouter = require('./categoryRouter');
const subCategoryRouter = require('./subCategoryRouter'); 
const userSubjectRouter = require('./userSubjectRouter');
const activityRouter = require('./activityRouter');

router.use('/activity',activityRouter);
router.use('/post',postRouter);
router.use('/user',userRouter);
router.use('/auth',authRouter);
router.use('/category',categoryRouter);
router.use('/sub-category',subCategoryRouter);
router.use( '/user-subject', userSubjectRouter);
module.exports = router;