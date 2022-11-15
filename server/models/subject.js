const db = require('../db/mysql');
const { DataTypes } = require('sequelize');

const subject = db.define('subject', {
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
        allowNull: false
    }
},
    {
        timestamps: false
    }
);

(async () => {
    await db.sync();
})()

module.exports = subject