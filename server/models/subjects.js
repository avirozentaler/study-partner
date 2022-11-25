const db = require('../db/mysql');
const { DataTypes } = require('sequelize');

const subjects = db.define('subjects', {
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
    await db.sync();
})()

module.exports = subjects