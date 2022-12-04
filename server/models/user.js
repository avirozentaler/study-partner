const db = require('../db/mysql')
const { DataTypes } = require('sequelize')
const User_subjects = require('./user_subjects');


const User = db.define('user', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    languages: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    age_range: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    refresh_token: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
},
    {
        timestamps: false
    });

(async () => {
    console.log('>> user model');
    User.hasMany(User_subjects,{foreignKey:"user_id"})
    await db.sync();
    User_subjects.belongsTo(User,{foreignKey:"user_id"})
    console.log('>> user model');

})()

module.exports = User;

