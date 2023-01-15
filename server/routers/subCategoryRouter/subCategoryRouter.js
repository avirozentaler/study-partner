const subCategoryRouter = require('express').Router()
const {getSubCategory,getAllSubCategory} = require('../../controllers/subCategoryController/subCategoryController');


subCategoryRouter.get('/get-sub-category',getSubCategory);
subCategoryRouter.get('/get-all-sub-category',getAllSubCategory);

module.exports = subCategoryRouter;