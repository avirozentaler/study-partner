
const categoryRepo = require('../repositories/CategoryRepo');

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