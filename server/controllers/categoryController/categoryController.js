const CategoryModel = require('../../models/category');



const getAllCategories = async (req, res) => {

    try {
        const categories = await CategoryModel.findAll();
        res.status(200).send(categories);
    }
    catch (err) {
        res.status(401).send(err);
    }
}




module.exports ={
    getAllCategories,
    
}