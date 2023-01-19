const SubCategoryRepo = require('../../repositories/subCategoryRepo/subCategoryRepo');

const addSubCategory = async (req, res) => {
    try {
        const {userId,subCategoryId} = req.body;
        const answer = await SubCategoryRepo.addSubCategory(userId,subCategoryId);

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

module.exports ={
    addSubCategory, getSubCategory, getAllSubCategory
}