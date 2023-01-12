const Models= require('../../models/Models');

const getAllcategories = async()=>{
    try {
        console.log('third');
        const answer = await Models.CategoryModel.findAll({include:Models.SubjectModel});
        console.log('third',answer);
        return answer;
    }
    catch (err) {
        return err;
    }
}


module.exports = categoryRepo ={
    getAllcategories
}