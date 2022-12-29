
const db = require('../db/mysql');
const { DataTypes, sequalzie } = require('sequelize');
// const UsersModel = require('./user');
const SubjectModel = require('./Subject');



const Category = db.define('category', {
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
    user_connected: {
        type: DataTypes.INTEGER,
        allowNull: true  ///false
    }
},
    {
        timestamps: false
    }
);
// Category.hasMany(SubjectModel, { foreignKey: "id" });
// SubjectModel.belongsTo(Category, { foreignKey: "id" })



module.exports = Category;







