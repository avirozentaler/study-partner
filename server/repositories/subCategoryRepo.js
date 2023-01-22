const {SubjectModel} = require('../models/Models');

const createSubCategory = async (values) => {
    try {
        await SubjectModel.findOrCreate(values);
        return "sub category created";
    }
    catch (err) {
        console.log(err);
        return err;
    }
}


const getSubCategory = async (id) => {
    try {
        const answer = await SubjectModel.findOne({where:{id}})
        return answer;
    }
    catch (err) {
        console.log(err);
        return answer;
    }
}


const getAllSubCategory = async () => {
    try {
        const answer = await SubjectModel.findAll()
        return answer;
    }
    catch (err) {
        console.log(err);
        return answer;
    }
}

module.exports ={
    createSubCategory, getSubCategory, getAllSubCategory
}