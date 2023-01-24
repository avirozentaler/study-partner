const SubCategoryService = require('../services/subCategoryService');


const createSubCategory = async (req, res) => {
    try {
        const answer = await SubCategoryService.createSubCategory(req,res);
        if(answer.message){
            throw  new Error(answer.message);
        }
        return res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
    }
}


const getSubCategory = async (req, res) => {
    try {
        const answer = await SubCategoryService.getSubCategory(req.body);
        if(answer.message){
            throw  new Error(answer.message);
        }
        return res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
    }
}


const getAllSubCategory = async (req, res) => {
    try {
        const answer = await SubCategoryService.getAllSubCategory();
        if(answer.message){
            throw  new Error(answer.message);
        }
        return res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = {
    addSubCategory: createSubCategory, getSubCategory, getAllSubCategory
}

