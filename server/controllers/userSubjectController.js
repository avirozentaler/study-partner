const userSubjectService = require('../services/userSubjectService');

const addUserSubject = async (req, res) => {
    try {
        const answer = await userSubjectService.addUserSubject(req, res);
        if (answer.message) {
            throw new Error(answer.message);
        }
        return res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
        return res.status(402).send(err);
    }
}

const getUsers = async (req, res) => {
    try {
        const answer = await userSubjectService.getUsers(req.body);
        if (answer.message) {
            throw new Error(answer.message);
        }
        return res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
    }
}

const getSubject = async (req, res) => {
    try {
        const answer = await userSubjectService.getSubjects(req.body);
        if (answer.message) {
            throw new Error(answer.message);
        }
        return res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    addUserSubject, getUsers, getSubject
}

