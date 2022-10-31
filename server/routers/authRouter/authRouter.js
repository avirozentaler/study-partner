const authRouter = require('express').Router();
const {auth,forgetPassword,resetPassword} = require('../../controllers/authController/authController')


authRouter.get('/',auth);
authRouter.post('/forget-pass',forgetPassword);
authRouter.post('/reset-pass',resetPassword);


module.exports = authRouter; 