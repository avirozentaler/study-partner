
const db = require('../db/mysql');
const { DataTypes } = require('sequelize');

const category = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
        
    },
    user_connected: {
        type: DataTypes.INTEGER,
        allowNull:true  ///false
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