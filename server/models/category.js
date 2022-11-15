
const db = require('../db/mysql');
const { DataTypes } = require('sequelize');

const category = db.define('category', {
    name: {
        type: DataTypes.STRING,
        allowNull:false
        
    },
    user_connected: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},
{
    timestamps:false
}
);

(async () => {
    await db.sync();
})()

module.exports = category