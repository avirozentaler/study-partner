const db = require('../db/mysql');
const { DataTypes } = require('sequelize');
const UserModel = require('./User');
const SubjectModel = require('./Subject');



const UserSubject = db.define('user_subject', {
//     UserId: {
//         type:DataTypes.INTEGER,
//         // references: {
//         //     model: UserModel,
//         //     key: 'id'
//         // }
//     },
//     SubjectId: {
//         type: DataTypes.INTEGER,
//         // references: {
//         //     model: SubjectModel,
//         //     key: 'id'
//         // }
//     }
},
    {
        timestamps: false
    });

(async () => {
    await db.sync();
})()

module.exports = UserSubject;

