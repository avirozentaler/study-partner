const SubCategoryService = require('../../services/subCategoryService/subCategoryService');


const addSubCategory = async (req, res) => {
    try {
        const answer = await SubCategoryService.addSubCategory(req,res);
    }
    catch (err) {
        console.log(err);
    }
}


const getSubCategory = async (req, res) => {
    try {

    }
    catch (err) {
        console.log(err);
    }
}


const getAllSubCategory = async (req, res) => {
    try {

    }
    catch (err) {
        console.log(err);
    }
}


module.exports = {
    addSubCategory, getSubCategory, getAllSubCategory
}

