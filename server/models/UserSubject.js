const db = require('../db/mysql');
const { DataTypes } = require('sequelize');




const UserSubject = db.define('user_subjects', {
    UserId: {
        type:DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id"
        }
    },
    SubjectId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Subject",
            key: "id",
        }
    },
    
},
    {
        timestamps: false
    });

(async () => {
    await db.sync();
})()

module.exports = UserSubject;


