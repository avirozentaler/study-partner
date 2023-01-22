const categoryRouter = require('express').Router()
const {getAllCategories} = require('../controllers/categoryController')  




categoryRouter.get('/get-all',getAllCategories);

module.exports = categoryRouter;
