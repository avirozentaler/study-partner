// file of base router
const router = require('express').Router();
const userRouter = require('./userRouter/userRouter');
const authRouter = require('./authRouter/authRouter');
const updateDataRouter = require('./updateDataRouter/updateDataRouter');
const getDataRouter = require('./getDataRouter/getDataRouter');
const postRouter = require('./postRouter/postRouter');
const categoryRouter = require('./categoryRouter/categoryRouter');
const subCategoryRouter = require('./subCategoryRouter/subCategoryRouter'); 
const userSubjectRouter = require('./userSubjectRouter/userSubjectRouter');


router.use('/post',postRouter);
router.use('/user',userRouter);
router.use('/auth',authRouter);
router.use('/category',categoryRouter);
router.use('/sub-category',subCategoryRouter);
router.use('/update',updateDataRouter);
router.use('/get',getDataRouter);
router.use( 'user-subject', userSubjectRouter);
module.exports = router;