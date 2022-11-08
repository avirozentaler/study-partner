const db = require('../db/mysql')
const { DataTypes } = require('sequelize')



const user = db.define('user', {
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
        type: DataTypes.ARRAY,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    age_range: {
        type: DataTypes.RANGE,
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

module.exports = user;

