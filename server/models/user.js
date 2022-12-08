const db = require('../db/mysql');
const { DataTypes } = require('sequelize')
const SubjectModel = require('./Subject');
// const UserSubjects = require('./UserSubject')


const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
    User.belongsToMany(SubjectModel,{through: "User_Subjects"});
    SubjectModel.belongsToMany(User, { through: "User_Subjects"})
    // User.hasMany(SubjectModel,{foreignKey:'id'})
    await db.sync();
})()



module.exports = User;

