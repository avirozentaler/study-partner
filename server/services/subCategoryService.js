const subCategoryRepo = require('../repositories/subCategoryRepo');
const SubCategoryRepo = require('../repositories/subCategoryRepo');

const createSubCategory = async (req, res) => {
    try {
        const {name,categoryId} = req.body;
        const answer = await SubCategoryRepo.createSubCategory({name,category_id:categoryId});
        return answer;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

const getSubCategory = async (reqBody) => {
    try {
        const {id}=reqBody;
        const answer = subCategoryRepo.getSubCategory(id);
        return answer;

    }
    catch (err) {
        console.log(err);
        answer;
    }
}

const getAllSubCategory = async () => {
    try {
        const answer = subCategoryRepo.getAllSubCategory();
        return answer;

    }
    catch (err) {
        console.log(err);
        answer;
    }
}

module.exports ={
    createSubCategory, getSubCategory, getAllSubCategory
}