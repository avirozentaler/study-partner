const SubjectModel = require('../../models/Subject');


const getAllSubjects = async (req, res) => {
    try {
        const { name } = req.body;
        const subjects = await SubjectModel.findAll();
        res.status(200).send(subjects)
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err)
    }


}


const getUsersSubject = async (req, res) => {
    try {

    }
    catch (err) {

    }
}


module.exports = {
    getAllSubjects,
    getUsersSubject
}