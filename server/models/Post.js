const db = require('../db/mysql');
const { DataTypes, STRING } = require('sequelize');
const UserModel = require('./User');

const Post = db.define('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    auther_name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    category:{
        type:STRING,
        allowNull:false
    },
    sub_category:{
        type:STRING,
        allowNull:false
    },
    post: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    time_from:{
        type:DataTypes.DATE,
        allowNull:false
    },
    time_to:{
        type:DataTypes.DATE,
        allowNull:false
    }

},
    {
        timestamps: false
    }
);

(async () => {
    await db.sync();
    Post.hasOne(UserModel,{foreignKey:"id"})
})()

module.exports = Post