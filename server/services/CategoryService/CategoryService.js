
const categoryRepo = require('../../repositories/categoryRepo/CategoryRepo');

const getAllCategories = async()=>{
    try{
        console.log('secound 2');
        const answer = await categoryRepo.getAllcategories();
        console.log('sec' ,answer);
        return answer;
    }
    catch(err){
    return err;
    }
}


module.exports = CategoryService ={
    getAllCategories,

}