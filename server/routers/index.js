// file of base router
const router = require('express').Router();
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const updateDataRouter = require('./updateDataRouter');
const getDataRouter = require('./getDataRouter');
const postRouter = require('./postRouter');
const categoryRouter = require('./categoryRouter');
const subCategoryRouter = require('./subCategoryRouter'); 
const userSubjectRouter = require('./userSubjectRouter');


router.use('/post',postRouter);
router.use('/user',userRouter);
router.use('/auth',authRouter);
router.use('/category',categoryRouter);
router.use('/sub-category',subCategoryRouter);
router.use('/update',updateDataRouter);
router.use('/get',getDataRouter);
router.use( 'user-subject', userSubjectRouter);
module.exports = router;