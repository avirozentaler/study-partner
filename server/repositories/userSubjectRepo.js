const {UserSubject} = require('../models/Models');

const addUserSubject = async (values) => {
    try {
        const answer = await UserSubject.create(values)
        return "user subCategory added";
    }
    catch (err) {
        return err;
    }
}


const getUsers = async (subjectId) => {
    try {
        const answer = await UserSubject.findAll({where:{SubjectId:subjectId}});
        return answer;
    }
    catch (err) {
        return err;
    }
}

const getSubjects = async (userId) => {
    try {
        const answer = await UserSubject.findAll({where:{UserId:userId}});
        return answer;
    }
    catch (err) {
        return err;
    }
}

module.exports = PostRepo = {
    addUserSubject,getUsers,getSubjects
}