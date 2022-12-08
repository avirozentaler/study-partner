const db = require('../db/mysql');
const { DataTypes } = require('sequelize');
const UserModel = require('./User');
const CategoryModel =require('./Category');

const Subject = db.define('subject', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
        allowNull: true ///false
    }
},
    {
        timestamps: false
    }
);

(async () => {
    // Subject.hasOne(CategoryModel,{foreignKey:id})
    // Subject.belongsToMany(UserModel, { through: 'UserSubjects' })
    // UserModel.belongsToMany(Subject, { through: 'UserSubjects' })
    await db.sync();
})()

module.exports = Subject