const db = require('../db/mysql');
const { DataTypes } = require('sequelize');


const User_subjects = db.define('user_subjects', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,  
    },
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
    console.log('>> user_subjects model');
    await db.sync();
    console.log('>> user_subjects model');
})()

module.exports = User_subjects;