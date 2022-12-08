const testRouter = require('express').Router();
const {fillTable}= require('./fillTables')

const UserModel =  require('../models/User');
const SubjectModel = require('../models/Subject');

testRouter.get('/test/fill-tables', (req, res) => {
    try {
        fillTable();
        res.status(200).send('test')
    }
    catch (err) {
        res.send(err)
    }
})


testRouter.get('/test/get-users',async (req, res) => {
    console.log('called');
    try {
        const result = await  UserModel.findAll({include:SubjectModel})
        console.log(result);
        res.status(200).send(result)
    }
    catch (err) {
        res.send(err)
    }
})
testRouter.get('/test/get-subjects',async (req, res) => {
    console.log('called');
    try {
        const result = await  SubjectModel.findAll()
        console.log(result);
        res.status(200).send(result)
    }
    catch (err) {
        res.send(err)
    }
})


module.exports = testRouter