const db = require('../db/mysql')
const { DataTypes } = require('sequelize')



const users = db.define('users',{
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
    languages: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
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
    await db.sync();
})()

module.exports = users;

