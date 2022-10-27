const authRouter = require('express').Router();
const {auth} = require('../../controllers/authController/authController')


authRouter.get('/',auth);


module.exports = authRouter;