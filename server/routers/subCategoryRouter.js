const subCategoryRouter = require('express').Router()
const {addSubCategory,getSubCategory,getAllSubCategory} = require('../controllers/subCategoryController');



subCategoryRouter.post('/create',getSubCategory);
subCategoryRouter.get('/get-all',getAllSubCategory);
subCategoryRouter.post('/get',getSubCategory);

module.exports = subCategoryRouter;

