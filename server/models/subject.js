const db = require('../db/mysql');
const { DataTypes } = require('sequelize');
const User_subjects = require('./user_subjects');


const Subject = db.define('subject', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },


    category_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    user_connected: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
    {
        timestamps: false
    }
);

(async () => {
    console.log('>> subject model');
    Subject.hasMany(User_subjects,{foreignKey:"subject_id"})
    await db.sync();
    User_subjects.belongsTo(Subject,{foreignKey:"subject_id"})

    console.log('>> subject model');
})()

module.exports = Subject