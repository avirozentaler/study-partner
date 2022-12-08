const getDataRouter = require('express').Router()

const {getUser} = require('../../controllers/getDataController/getUserCntroller')
const {getAllSubjects} = require('../../controllers/getDataController/getSubjectController')
const {getCategories} = require('../../controllers/getDataController/getCaegoryController')



getDataRouter.post('/user',getUser);
getDataRouter.get('/subjects',getAllSubjects);
getDataRouter.post('/categories',getCategories);


module.exports = getDataRouter