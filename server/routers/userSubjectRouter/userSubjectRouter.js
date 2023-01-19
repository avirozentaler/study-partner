const userSubjectRouter = require('express').Router();
const userSubjectController = require('../../controllers/userSubjectController/userSubjectController');

userSubjectRouter.post('add', userSubjectController.addUserSubject);
userSubjectRouter.post('get-users', userSubjectController.getUsers);
userSubjectRouter.get('get-subjects' ,userSubjectController.getSubject);

module.exports = userSubjectRouter;
