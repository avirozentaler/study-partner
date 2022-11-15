const db = require('../db/mysql');
const { DataTypes } = require('sequelize');

const user_subjects = db.define('user_subjects', {
    user_id: {
        type: DataTypes.STRING,
        allowNull:false
        
    },
    subject_id: {
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false
}
);

(async () => {
    await db.sync();
})()

module.exports = user_subjects;