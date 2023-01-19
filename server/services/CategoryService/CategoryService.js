
const categoryRepo = require('../../repositories/categoryRepo/CategoryRepo');

const getAllCategories =async ()=>{
    try{
        const answer = await categoryRepo.getAllcategories();        
        return answer;
    }
    catch(err){
    return err;
    }
}


module.exports = CategoryService ={
    getAllCategories,
}