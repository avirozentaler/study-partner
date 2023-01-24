const updateDataRouter = require('express').Router()

const {validUserDetails,updateUserDetails,addUserSubject} = require('../controllers/updateUserController')



updateDataRouter.post('/user-details',validUserDetails,updateUserDetails);
updateDataRouter.post('/add-subject',addUserSubject);
// updateDataRouter.post('update-user-details',removeUserSubject);

module.exports = updateDataRouter