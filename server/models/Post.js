const db = require('../db/mysql');
const { DataTypes } = require('sequelize');


const Post = db.define('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    auther_name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sub_category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    time_from: {
        type: DataTypes.DATE,
        allowNull: true //false
    },
    time_to: {
        type: DataTypes.DATE,
        allowNull: true //false
    }

},
    {
        timestamps: false
    }
);



module.exports = Post

