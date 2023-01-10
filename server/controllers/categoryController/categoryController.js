const CategoryService = require('../../services/CategoryService/CategoryService');
// const Models= require('../../models/Models');


const getAllCategories = async (req, res) => {

    try {
        console.log('first cat');
        // const categories = await Models.CategoryModel.findAll({include:Models.SubjectModel});
        const answer = await CategoryService.getAllCategories();
        console.log('cat' ,answer);
        res.status(200).send(answer);
    }
    catch (err) {
        res.status(401).send(err);
    }
}




module.exports ={
    getAllCategories,
    
}